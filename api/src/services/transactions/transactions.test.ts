import {
  transactions,
  transaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from './transactions'
import type { StandardScenario } from './transactions.scenarios'

describe('transactions', () => {
  scenario('returns all transactions', async (scenario: StandardScenario) => {
    const result = await transactions()

    expect(result.length).toEqual(Object.keys(scenario.transaction).length)
  })

  scenario(
    'returns a single transaction',
    async (scenario: StandardScenario) => {
      const result = await transaction({ id: scenario.transaction.one.id })

      expect(result).toEqual(scenario.transaction.one)
    }
  )

  scenario('creates a transaction', async () => {
    const result = await createTransaction({
      input: { amount: 7640748, transactionType: 'ADMIN_TO_SECTION' },
    })

    expect(result.amount).toEqual(7640748)
    expect(result.transactionType).toEqual('ADMIN_TO_SECTION')
  })

  scenario('updates a transaction', async (scenario: StandardScenario) => {
    const original = await transaction({ id: scenario.transaction.one.id })
    const result = await updateTransaction({
      id: original.id,
      input: { amount: 29475 },
    })

    expect(result.amount).toEqual(29475)
  })

  scenario('deletes a transaction', async (scenario: StandardScenario) => {
    const original = await deleteTransaction({
      id: scenario.transaction.one.id,
    })
    const result = await transaction({ id: original.id })

    expect(result).toEqual(null)
  })
})
