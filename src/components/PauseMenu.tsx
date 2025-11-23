export const PauseMenu = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				background: 'rgba(0,0,0,0.7)',
				padding: '20px',
				borderRadius: '8px',
				color: 'white',
				textAlign: 'center',
				zIndex: 1000
			}}
		>
			<h1>Juego en pausa</h1>
			<p>Presiona ESC para continuar</p>
		</div>
	)
}
