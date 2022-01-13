import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String6141176',
        phone: 'String5636716',
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    })

    expect(result.email).toEqual('String6141176')
    expect(result.phone).toEqual('String5636716')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { email: 'String6937632' },
    })

    expect(result.email).toEqual('String6937632')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
