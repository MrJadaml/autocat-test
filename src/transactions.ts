export interface Transaction {
  description: string
  amount: number
  category: string
}

export const transactions: Transaction[] = [
  {
    description: 'Employee salary - March',
    amount: -5000,
    category: 'payroll',
  },
  {
    description: 'Printer ink cartridges',
    amount: -100,
    category: 'office supplies',
  },
  {
    description: 'Online course subscription',
    amount: -50,
    category: 'professional development',
  },
  {
    description: 'Sales revenue - Product A',
    amount: 1500,
    category: 'income',
  },
  {
    description: 'Bank service charges',
    amount: -20,
    category: 'financial expenses',
  },
  {
    description: 'General liability insurance premium',
    amount: -200,
    category: 'insurance',
  },
  {
    description: 'Employee salary - April',
    amount: -5200,
    category: 'payroll',
  },
  {
    description: 'Printer paper ream',
    amount: -20,
    category: 'office supplies',
  },
  {
    description: 'Conference registration fee',
    amount: -300,
    category: 'professional development',
  },
  {
    description: 'Consulting fee from client',
    amount: 2000,
    category: 'income',
  },
  {
    description: 'Bank overdraft fee',
    amount: -50,
    category: 'financial expenses',
  },
  {
    description: 'Property insurance premium',
    amount: -300,
    category: 'insurance',
  },
  { description: 'Employee bonus - Q1', amount: -1000, category: 'payroll' },
  {
    description: 'Printer maintenance service',
    amount: -150,
    category: 'office supplies',
  },
  {
    description: 'Books on leadership development',
    amount: -80,
    category: 'professional development',
  },
  {
    description: 'Subscription revenue - Monthly plan',
    amount: 500,
    category: 'income',
  },
  {
    description: 'Transaction fee for wire transfer',
    amount: -30,
    category: 'financial expenses',
  },
  {
    description: 'Health insurance premium',
    amount: -250,
    category: 'insurance',
  },
  { description: 'Employee salary - May', amount: -5500, category: 'payroll' },
  {
    description: 'Printer toner cartridge',
    amount: -80,
    category: 'office supplies',
  },
  {
    description: 'Workshop registration fee',
    amount: -200,
    category: 'professional development',
  },
  {
    description: 'Consulting fee from client',
    amount: 2500,
    category: 'income',
  },
  {
    description: 'ATM withdrawal fee',
    amount: -3,
    category: 'financial expenses',
  },
  {
    description: 'Business liability insurance premium',
    amount: -400,
    category: 'insurance',
  },
  { description: 'Employee salary - June', amount: -5800, category: 'payroll' },
  { description: 'Desk organizer', amount: -30, category: 'office supplies' },
  {
    description: 'Online course enrollment fee',
    amount: -120,
    category: 'professional development',
  },
  {
    description: 'Product sales revenue - Online store',
    amount: 1800,
    category: 'income',
  },
  {
    description: 'Wire transfer processing fee',
    amount: -50,
    category: 'financial expenses',
  },
  {
    description: 'Vehicle insurance premium',
    amount: -350,
    category: 'insurance',
  },
]
