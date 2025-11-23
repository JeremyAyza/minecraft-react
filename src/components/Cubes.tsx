import { useStore } from "../hooks/useStore"
import { Cube } from "./Cube.tsx"

export const Cubes = () => {
	const cubes = useStore((state) => state.cubes)

	return (
		<>
			{cubes.map(({ id, pos, texture }) => (
				<Cube key={id} id={id} pos={pos} texture={texture} />
			))}
		</>
	)
}
