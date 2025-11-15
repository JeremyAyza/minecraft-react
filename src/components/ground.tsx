import { useStore } from "@/hooks/useStore"
import { groundTexture } from "@/lib/textures"
import { usePlane } from "@react-three/cannon"
import type { ThreeEvent } from "@react-three/fiber"
import type { Mesh, Vector3 } from "three"

export const Ground = () => {
	const [ref] = usePlane<Mesh>(() => ({
		rotation: [-Math.PI / 2, 0, 0], // x, y, z
		position: [0, -0.5, 0], // x, y, z
	}))

	const addCube = useStore((state) => state.addCube)

	groundTexture.repeat.set(100, 100)

	const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation()
		const [x, y, z] = Object.values(event.point as Vector3).map((n) =>
			Math.ceil(n),
		)

		addCube(x, y, z)
	}

	// Configurar repetición de textura
	groundTexture.repeat.set(100, 100)

	return (
		<mesh
			ref={ref as React.MutableRefObject<Mesh>}
			onPointerDown={handleClickGround}
		>
			<planeGeometry attach="geometry" args={[100, 100]} />
			<meshStandardMaterial attach="material" map={groundTexture} />
		</mesh>
	)
}
