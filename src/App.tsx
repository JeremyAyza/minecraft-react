import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { FVP } from "./components/FVP"
import { Player } from "./components/Player"
import { Cubes } from "./components/Cubes"
import { useStore } from "./hooks/useStore"

function App() {
	const texture = useStore((state) => state.texture)
	
	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />
				<ambientLight intensity={0.5} />
				<FVP />
				<Physics>
					<Cubes />
					<Player />
					<Ground />
				</Physics>
			</Canvas>
			<div className="pointer">+</div>
			<div className="texture-indicator">
				Textura actual: <span className="texture-name">{texture}</span>
			</div>
		</>
	)
}

export default App
