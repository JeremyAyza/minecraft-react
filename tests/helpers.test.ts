import { afterEach, describe, expect, it, vi } from 'vitest'
import { generateHouse, generateTrees } from '../src/helpers'
import defaultCubes from '../src/default-cubes.json'

const key = (pos: number[]) => pos.join(',')

afterEach(() => {
	vi.restoreAllMocks()
})

describe('generateHouse', () => {
	// origin [0, 1, 0] -> base (-3, -1, -20); 8 wide, 6 deep, 4 tall
	const blocks = generateHouse()
	const byPos = new Map(blocks.map((b) => [key(b.pos), b]))

	it('leaves a 2x2 door gap in the front wall', () => {
		for (const x of [0, 1]) {
			for (const y of [0, 1]) {
				expect(byPos.has(key([x, y, -15]))).toBe(false)
			}
			expect(byPos.has(key([x, 2, -15]))).toBe(true)
		}
	})

	it('uses logs for the corners and wood for the walls', () => {
		expect(byPos.get(key([-3, 0, -20]))?.texture).toBe('log')
		expect(byPos.get(key([4, 0, -15]))?.texture).toBe('log')
		expect(byPos.get(key([-2, 0, -20]))?.texture).toBe('wood')
	})

	it('never places two blocks in the same spot', () => {
		expect(byPos.size).toBe(blocks.length)
	})
})

describe('generateTrees', () => {
	it('builds one trunk per tree, 4 to 6 logs tall', () => {
		vi.spyOn(Math, 'random').mockReturnValue(0.5) // trunk height 5
		const blocks = generateTrees([0, 0, 0], 3)

		expect(blocks.filter((b) => b.texture === 'log')).toHaveLength(15)
		expect(blocks.every((b) => ['log', 'grass'].includes(b.texture))).toBe(true)
	})
})

describe('default-cubes.json', () => {
	it('has a unique id for every block', () => {
		const ids = new Set(defaultCubes.map((c) => c.id))
		expect(ids.size).toBe(defaultCubes.length)
	})
})
