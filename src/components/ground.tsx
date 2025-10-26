import { groundTexture } from "@/lib/textures"
import { usePlane } from "@react-three/cannon"
import type { Mesh } from "three"

export const Ground = () => {
	const [ref] = usePlane<Mesh>(() => ({
		rotation: [-Math.PI / 2, 0, 0], // x, y, z
		position: [0, -0.5, 0], // x, y, z
	}))

	// Configurar repetición de textura
	groundTexture.repeat.set(100, 100)

	return (
		<mesh ref={ref as React.MutableRefObject<Mesh>}>
			<planeGeometry attach="geometry" args={[100, 100]} />
			<meshStandardMaterial attach="material" map={groundTexture} />
		</mesh>
	)
}
