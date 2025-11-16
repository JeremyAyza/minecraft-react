import { useStore } from '../hooks/useStore.tsx'
import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as textures from '../images/textures.tsx'
import type { Cube as CubeInterface } from '@/types.ts'
import type { Mesh } from 'three'

export const Cube = ({ id, pos: position, texture }: CubeInterface) => {
	const [isHovered, setIsHovered] = useState(false)

	const removeCube = useStore((state) => state.removeCube)

	const [ref] = useBox<Mesh>(() => ({
		type: 'Static',
		position
	}))
	const key = `${texture}Texture` as keyof typeof textures
	const activeTexture = textures[key]

	return (
		<mesh
			onPointerMove={(e) => {
				e.stopPropagation()
				setIsHovered(true)
			}}
			onPointerOut={(e) => {
				e.stopPropagation()
				setIsHovered(false)
			}}
			ref={ref}
			onClick={(e) => {
				e.stopPropagation()

				if (e.altKey) {
					removeCube(id)
				}
			}}
		>
			<boxGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? 'grey' : 'white'}
				transparent
				map={activeTexture}
				attach="material"
			/>
		</mesh>
	)
}
