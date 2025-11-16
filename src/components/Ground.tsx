import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.tsx'
import { groundTexture } from '../images/textures.tsx'
import type { ThreeEvent } from '@react-three/fiber'
import type { Mesh } from 'three'

export function Ground() {
	const [ref] = usePlane<Mesh>(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, -0.5, 0]
	}))

	const addCube = useStore((state) => state.addCube)

	groundTexture.repeat.set(100, 100)

	const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
		event.stopPropagation()
		const [x, y, z] = Object.values(event.point).map((n) => Math.ceil(n))
		console.log(x, y, z)
		addCube(x, y, z)
	}

	
	return (
		<mesh onClick={handleClickGround} ref={ref}>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			<meshStandardMaterial attach="material" map={groundTexture} />
		</mesh>
	)
}
