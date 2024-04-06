const categories = [
  'payroll',
  'office supplies',
  'professional development',
  'income',
  'financial expenses',
  'insurance',
]

import { HfInference } from '@huggingface/inference'
import dotenv from 'dotenv'
import { transactions } from './transactions'

dotenv.config()

const apiKey = process.env.HUGGING_FACE_API_KEY
if (!apiKey) {
  console.error('Hugging Face API key is not set.')
  process.exit(1)
}

const hf = new HfInference(apiKey)

;(async () => {
  async function classifyTransaction(description: string) {
    try {
      const response = await hf.zeroShotClassification({
        model: 'typeform/distilbert-base-uncased-mnli',
        inputs: description,
        parameters: {
          candidate_labels: categories,
        },
      })

      console.log(response)

      return response
    } catch (error) {
      console.error('Error during text classification:', error)
      return null
    }
  }

  await classifyTransaction(transactions[0].description)
})()
