import { create } from "zustand"
import { nanoid } from "nanoid"

interface Store {
	texture: string
	cubes: { id: string; pos: [number, number, number]; texture: string }[]
	addCube: (x: number, y: number, z: number) => void
	removeCube: (id: string) => void
	setTexture: (texture: string) => void
	saveWorld: () => void
	resetWorld: () => void
}

export const useStore = create<Store>((set) => ({
	texture: "dirt",
	cubes: [
		{
			id: nanoid(),
			pos: [1, 1, 1],
			texture: "dirt",
		},
		{
			id: nanoid(),
			pos: [1, 5, 1],
			texture: "log",
		},
	],
	addCube: (x, y, z) => {
		set((state) => ({
			cubes: [
				...state.cubes,
				{
					id: nanoid(),
					texture: state.texture,
					pos: [x, y, z],
				},
			],
		}))
	},
	removeCube: (id) => {
		set((state) => ({
			cubes: state.cubes.filter((cube) => cube.id !== id),
		}))
	},
	setTexture: (texture) => {
		set(() => ({ texture }))
	},
	saveWorld: () => {},
	resetWorld: () => {},
}))
