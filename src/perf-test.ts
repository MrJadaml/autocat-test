import { readFileSync } from 'fs'
import { Transaction } from './transactions'
import { categories } from './categories'

const transactions: Transaction[] = JSON.parse(
  readFileSync('processed-transactions.json', 'utf8'),
)

let categoryMetrics: {
  [category: string]: {
    truePositive: number
    falsePositive: number
    falseNegative: number
  }
} = {}

categories.forEach((category) => {
  categoryMetrics[category] = {
    truePositive: 0,
    falsePositive: 0,
    falseNegative: 0,
  }
})

transactions.forEach((transaction: Transaction) => {
  if (transaction.category === transaction.categorySuggested) {
    categoryMetrics[transaction.category].truePositive++
  } else {
    categoryMetrics[transaction.category].falseNegative++
    categoryMetrics[transaction.categorySuggested].falsePositive++
  }
})

let precisionSum = 0
let recallSum = 0
let f1ScoreSum = 0

categories.forEach((category) => {
  const { truePositive, falsePositive, falseNegative } =
    categoryMetrics[category]
  const precision = truePositive / (truePositive + falsePositive) || 0
  const recall = truePositive / (truePositive + falseNegative) || 0
  const f1Score =
    precision + recall > 0
      ? (2 * (precision * recall)) / (precision + recall)
      : 0

  precisionSum += precision
  recallSum += recall
  f1ScoreSum += f1Score

  console.log(`CATEGORY: ${category}`)
  console.log(`🎯 Precision: ${Math.round(precision * 100)}%`)
  console.log(`💭 Recall: ${Math.round(recall * 100)}%`)
  console.log(`🏎️ F1 Score: ${Math.round(f1Score * 100)}%`)
  console.log('-=====================-')
})

const categoriesCount = categories.length
const averagePrecision = precisionSum / categoriesCount
const averageRecall = recallSum / categoriesCount
const averageF1Score = f1ScoreSum / categoriesCount

console.log('-=====================-')
console.log('=-=-=- AVERAGES -=-=-=-')
console.log('-=====================-')
console.log(`🎯 Average Precision: ${Math.round(averagePrecision * 100)}%`)
console.log(`💭 Average Recall: ${Math.round(averageRecall * 100)}%`)
console.log(`🏎️ Average F1 Score: ${Math.round(averageF1Score * 100)}%`)
