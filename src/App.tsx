import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground.tsx'
import { FPV as Fpv } from './components/FPV.tsx'
import { Player } from './components/Player.tsx'
import { Cubes } from './components/Cubes.tsx'
import { TextureSelector } from './components/TextureSelect.tsx'
import { PauseMenu } from './components/PauseMenu.tsx'
import { useStore } from './hooks/useStore'
import { useGameKeyBlocker } from './hooks/useGameKeyBlocker'
import { usePauseKey } from './hooks/usePauseKey'

function App() {
	const paused = useStore((s) => s.paused)

	useGameKeyBlocker(paused)
	usePauseKey()

	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />
				<ambientLight intensity={0.5} />
				<Fpv />

				<Physics>
					<Cubes />
					<Player />
					<Ground />
				</Physics>
			</Canvas>

			<div className="pointer">+</div>
			<TextureSelector />

			{/* Solo condicional UI */}
			{paused && <PauseMenu />}
		</>
	)
}

export default App
