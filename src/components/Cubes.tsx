import { useStore } from "@/hooks/useStore"
import { Cube } from "./Cube"

export function Cubes() {
	const cubes = useStore((state) => state.cubes)
	return cubes.map((c) => (
		<Cube
			key={c.id}
			texture={c.texture}
			pos={c.pos}
			id={c.id}
		/>
	))
}
