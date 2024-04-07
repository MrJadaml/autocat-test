# 🚗😸 AutoCat P1 PoC

## Overview

This proof of concept demonstrates the use of an off-the-shelf model from Huggin Face and their Transformers library to categorize financial transactions.

## ⚙️ How It Works

The program utilizes a pre-trained, BERT based, zero-shot classification model from Hugging Face's model hub to suggest the most appropriate category from a predefined list.
Zero-shot learning models are trained to understand the context and semantics of categories and texts they were not explicitly trained on.
For our case, the zero-shot classification capability allows us to classify transaction descriptions into our predefined categories,
even though it hasn't been trained on those exact categories before.

## ⚠️ Proof of Concept Limitations

As a PoC, this project is intended to demonstrate potential rather than serve as a fully-fledged solution.
The current implementation focuses on showcasing the basic capability of off-the-shelf options from Hugging Face for transaction categorization.

- **Model Choice**: Model selection is based on popular choices for text classification tasks, without fine-tuning for the specific domain of transactions.
- **Data Set**: The program has been tested on a limited dataset. Performance will vary significantly with different and larger datasets.

## 📊 Performance Metrics Testing

To evaluate the effectiveness of our categorization, we employ the following performance metrics:

- **Accuracy**: Measures the proportion of correctly predicted categories out of all predictions.
- **Precision** (per category): The ratio of correctly predicted transactions for a category over all predictions for that category.
- **Recall** (per category): Measures how many transactions were correctly identified for a category out of all actual transactions for that category.
- **F1 Score** (per category): A weighted average of Precision and Recall, providing a single metric to assess the balance between them.

These metrics are use to understand the model's performance and guiding future improvements.
They offer insights into not just the overall accuracy but also how well the model performs for each specific category,
highlighting areas where the model excels or needs improvement.

## 📈 Results

CATEGORY: payroll
🎯 Precision: 100%
💭 Recall: 100%
🏎️ F1 Score: 100%
-=====================-
CATEGORY: office supplies
🎯 Precision: 0%
💭 Recall: 0%
🏎️ F1 Score: 0%
-=====================-
CATEGORY: professional development
🎯 Precision: 50%
💭 Recall: 20%
🏎️ F1 Score: 29%
-=====================-
CATEGORY: income
🎯 Precision: 50%
💭 Recall: 100%
🏎️ F1 Score: 67%
-=====================-
CATEGORY: financial expenses
🎯 Precision: 56%
💭 Recall: 100%
🏎️ F1 Score: 71%
-=====================-
CATEGORY: insurance
🎯 Precision: 100%
💭 Recall: 80%
🏎️ F1 Score: 89%
-=====================-
CATEGORY: UNCLASSIFIED
🎯 Precision: 0%
💭 Recall: 0%
🏎️ F1 Score: 0%

-=====================-
=-=-=- AVERAGES -=-=-=-
-=====================-
🎯 Average Precision: 51%
💭 Average Recall: 57%
🏎️ Average F1 Score: 51%

## 📦 Installation

After cloning the repo, you can install deps using yarn or npm

```bash
yarn
```

or

```bash
npm install
```

## 🚀 Usage

To run the program, execute the following command:

```bash
yarn exec
```

to run the performance metrics:

```bash
yarn perf
```
