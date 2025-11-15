import { useBox } from "@react-three/cannon"
import { useState } from "react"
import * as textures from "@/lib/textures"
import { useStore } from "@/hooks/useStore"
import { useEffect } from "react"
import { Mesh } from "three"

export interface CubeProps {
	pos: [number, number, number]
	texture: string
	id: string
}

export const Cube = ({ pos, texture, id }: CubeProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isBroken, setIsBroken] = useState(false)
	const { addCube, removeCube } = useStore.getState()

	const [ref] = useBox<Mesh>(() => ({
		type: "Static",
		pos,
	}))

	const propName = `${texture}Texture` as keyof typeof textures
	const activeTexture = textures[propName]

	useEffect(() => {
		if (isBroken) {
			// Simulación de desintegración (puedes usar efectos más avanzados aquí)
			const timeout = setTimeout(() => {
				removeCube(id) // Remover cubo después de unos segundos de animación
			}, 500)

			return () => clearTimeout(timeout)
		}
	}, [isBroken, removeCube, id])

	const handleClick = (e: React.PointerEvent) => {
		e.stopPropagation()

		// Simula el "romper" el cubo al hacer clic normal
		if (!e.altKey) {
			setIsBroken(true)
		} else {
			// Si se hace clic con Alt, el cubo se elimina de la escena
			removeCube(id)
		}
	}

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
			onClick={handleClick}
		>
			<boxGeometry attach="geometry" />
			<meshStandardMaterial
				color={isBroken ? "gray" : isHovered ? "lightgray" : "white"}
				transparent
				opacity={isBroken ? 0 : 1}
				map={activeTexture}
				attach="material"
			/>
		</mesh>
	)
}
