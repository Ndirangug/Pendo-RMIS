import {
  sections,
  section,
  createSection,
  updateSection,
  deleteSection,
} from './sections'
import type { StandardScenario } from './sections.scenarios'

describe('sections', () => {
  scenario('returns all sections', async (scenario: StandardScenario) => {
    const result = await sections()

    expect(result.length).toEqual(Object.keys(scenario.section).length)
  })

  scenario('returns a single section', async (scenario: StandardScenario) => {
    const result = await section({ id: scenario.section.one.id })

    expect(result).toEqual(scenario.section.one)
  })

  scenario('creates a section', async (scenario: StandardScenario) => {
    const result = await createSection({
      input: { code: 'String', adminId: scenario.section.two.adminId },
    })

    expect(result.code).toEqual('String')
    expect(result.adminId).toEqual(scenario.section.two.adminId)
  })

  scenario('updates a section', async (scenario: StandardScenario) => {
    const original = await section({ id: scenario.section.one.id })
    const result = await updateSection({
      id: original.id,
      input: { code: 'String2' },
    })

    expect(result.code).toEqual('String2')
  })

  scenario('deletes a section', async (scenario: StandardScenario) => {
    const original = await deleteSection({ id: scenario.section.one.id })
    const result = await section({ id: original.id })

    expect(result).toEqual(null)
  })
})
