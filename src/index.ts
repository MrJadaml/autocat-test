const categories = [
  'payroll',
  'office supplies',
  'professional development',
  'income',
  'financial expenses',
  'insurance',
]

import { writeFileSync } from 'fs'
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

  ; (async () => {
    async function classifyTransaction(description: string) {
      try {
        const response = await hf.zeroShotClassification({
          model: 'typeform/distilbert-base-uncased-mnli',
          inputs: description,
          parameters: {
            candidate_labels: categories,
          },
        })

        console.log('Response:', response)
        const highestScoreIndex = response[0].scores.indexOf(
          Math.max(...response[0].scores),
        )
        const categorySuggested = response[0].labels[highestScoreIndex]

        return categorySuggested
      } catch (error) {
        console.error('Error during text classification:', error)
        return 'UNCLASSIFIED'
      }
    }

    async function processTransactions() {
      const processedTransactions = []

      for (const transaction of transactions) {
        const categorySuggested = await classifyTransaction(
          transaction.description,
        )
        processedTransactions.push({
          ...transaction,
          categorySuggested,
        })
      }

      writeFileSync(
        'processed-transactions.json',
        JSON.stringify(processedTransactions, null, 2),
      )

      console.log(
        'Processed transactions have been saved to processed-transactions.json',
      )
    }

    processTransactions()
  })()
