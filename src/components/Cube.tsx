import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from "@/lib/textures"
import type { Mesh } from "three"
import { useStore } from "@/hooks/useStore"

export interface CubeProps {
	pos: [number, number, number]
	texture: string
	removeCube(): void
}
export const Cube = ({ pos, texture, removeCube }: CubeProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const addCube = useStore((state) => state.addCube)

	const [ref] = useBox<Mesh>(() => ({
		type: "Static",
		pos,
	}))
	const propName = `${texture}Texture` as keyof typeof textures

	const activeTexture = textures[propName]

	return (
		<mesh
			ref={ref}
			onPointerMove={(e) => {
				e.stopPropagation()
				setIsHovered(true)
			}}
			onPointerOut={(e) => {
				e.stopPropagation()
				setIsHovered(false)
			}}
			onClick={(e) => {
				e.stopPropagation()

				if (e.altKey) {
					removeCube()
				} else {
					// Colocar cubo en la cara clickeada
					const { x, y, z } = e.point
					const newPos: [number, number, number] = [
						Math.round(x),
						Math.round(y),
						Math.round(z)
					]
					addCube(newPos[0], newPos[1], newPos[2])
				}
			}}
		>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? "grey" : "white"}
				transparent
				map={activeTexture}
				attach="material"
			/>
		</mesh>
	)
}
