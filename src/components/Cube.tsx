import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from "@/lib/textures"
import type { Mesh } from "three"

export interface CubeProps {
	pos: [number, number, number]
	texture: string
	removeCube(): void
}
export const Cube = ({ pos, texture, removeCube }: CubeProps) => {
	const [isHovered, setIsHovered] = useState(false)

	const [ref] = useBox<Mesh>(() => ({
		type: "Static",
		pos,
	}))
	const propName = `${texture}Texture` as keyof typeof textures

	const activeTexture = textures[propName]

	console.log({ propName, textures })
	console.log({ activeTexture })

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
				}
			}}
			onKeyDown={(e) => {
				e.stopPropagation()
				removeCube()
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
