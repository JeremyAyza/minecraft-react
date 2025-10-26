import { useStore } from "@/hooks/useStore"
import { Cube } from "./Cube"

export function Cubes() {
	const cubes = useStore((state) => state.cubes)
	const removeCube = useStore((state) => state.removeCube)
	return cubes.map((c) => (
		<Cube
			key={c.id}
			texture={c.texture}
			pos={c.pos}
			removeCube={() => removeCube(c.id)}
		/>
	))
}
