import { tents, tent, createTent, updateTent, deleteTent } from './tents'
import type { StandardScenario } from './tents.scenarios'

describe('tents', () => {
  scenario('returns all tents', async (scenario: StandardScenario) => {
    const result = await tents()

    expect(result.length).toEqual(Object.keys(scenario.tent).length)
  })

  scenario('returns a single tent', async (scenario: StandardScenario) => {
    const result = await tent({ id: scenario.tent.one.id })

    expect(result).toEqual(scenario.tent.one)
  })

  scenario('creates a tent', async () => {
    const result = await createTent({
      input: { code: 'String' },
    })

    expect(result.code).toEqual('String')
  })

  scenario('updates a tent', async (scenario: StandardScenario) => {
    const original = await tent({ id: scenario.tent.one.id })
    const result = await updateTent({
      id: original.id,
      input: { code: 'String2' },
    })

    expect(result.code).toEqual('String2')
  })

  scenario('deletes a tent', async (scenario: StandardScenario) => {
    const original = await deleteTent({ id: scenario.tent.one.id })
    const result = await tent({ id: original.id })

    expect(result).toEqual(null)
  })
})
