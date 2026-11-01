import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '../src/hooks/useStore'
import defaultCubes from '../src/default-cubes.json'

beforeEach(() => {
	useStore.setState({ texture: 'wood', cubes: [] })
})

describe('useStore', () => {
	it('starts from the generated world', () => {
		expect(useStore.getInitialState().cubes).toHaveLength(defaultCubes.length)
	})

	it('adds a block with the selected texture', () => {
		useStore.getState().setTexture('glass')
		useStore.getState().addCube(1, 0, 2)

		expect(useStore.getState().cubes).toEqual([
			{ id: expect.any(String), texture: 'glass', pos: [1, 0, 2] }
		])
	})

	it('removes only the block with the given id', () => {
		useStore.getState().addCube(0, 0, 0)
		useStore.getState().addCube(1, 0, 0)
		const [first, second] = useStore.getState().cubes

		useStore.getState().removeCube(first.id)

		expect(useStore.getState().cubes).toEqual([second])
	})
})
