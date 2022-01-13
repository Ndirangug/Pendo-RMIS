import {
  refugees,
  refugee,
  createRefugee,
  updateRefugee,
  deleteRefugee,
} from './refugees'
import type { StandardScenario } from './refugees.scenarios'

describe('refugees', () => {
  scenario('returns all refugees', async (scenario: StandardScenario) => {
    const result = await refugees()

    expect(result.length).toEqual(Object.keys(scenario.refugee).length)
  })

  scenario('returns a single refugee', async (scenario: StandardScenario) => {
    const result = await refugee({ id: scenario.refugee.one.id })

    expect(result).toEqual(scenario.refugee.one)
  })

  scenario('creates a refugee', async () => {
    const result = await createRefugee({
      input: {
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        sex: 'MALE',
        dateOfBirh: '2022-01-13T16:07:54Z',
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.sex).toEqual('MALE')
    expect(result.dateOfBirh).toEqual('2022-01-13T16:07:54Z')
  })

  scenario('updates a refugee', async (scenario: StandardScenario) => {
    const original = await refugee({ id: scenario.refugee.one.id })
    const result = await updateRefugee({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a refugee', async (scenario: StandardScenario) => {
    const original = await deleteRefugee({ id: scenario.refugee.one.id })
    const result = await refugee({ id: original.id })

    expect(result).toEqual(null)
  })
})
