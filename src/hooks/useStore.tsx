import type { Cube } from '@/types'
import { nanoid } from 'nanoid'
import { create } from 'zustand'
import defaultCubes from '@/default-cubes.json'

interface State {
	texture: string
	cubes: Cube[]
	addCube: (x: number, y: number, z: number) => void
	removeCube: (id: string) => void
	setTexture: (texture: string) => void
	saveWorld: () => void
	resetWorld: () => void
}
// const cubes = [...generateHouse(), ...generateTrees()]
// console.log(cubes)
export const useStore = create<State>((set) => ({
	texture: 'wood',
	cubes: defaultCubes as Cube[],
	addCube: (x, y, z) => {
		set((state) => ({
			cubes: [
				...state.cubes,
				{
					id: nanoid(),
					texture: state.texture,
					pos: [x, y, z]
				}
			]
		}))
	},
	removeCube: (id) => {
		set((state) => ({
			cubes: state.cubes.filter((cube) => cube.id !== id)
		}))
	},
	setTexture: (texture) => {
		set(() => ({ texture }))
	},
	saveWorld: () => {},
	resetWorld: () => {}
}))
