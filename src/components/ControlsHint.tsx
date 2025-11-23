export const ControlsHint = () => {
	return (
		<div style={styles.container}>
			<h3 style={styles.title}>Controles</h3>

			<div style={styles.row}>
				<Key>W</Key>
				<span style={styles.action}>Mover hacia adelante</span>
			</div>

			<div style={styles.row}>
				<Key>A</Key>
				<Key>S</Key>
				<Key>D</Key>
				<span style={styles.action}>Moverse</span>
			</div>

			<div style={styles.row}>
				<Key>Espacio</Key>
				<span style={styles.action}>Saltar</span>
			</div>

			<div style={styles.row}>
				<Key>Shift</Key>
				<span style={styles.action}>Correr</span>
			</div>

			<div style={styles.row}>
				<Key>Click Izq.</Key>
				<span style={styles.action}>Colocar bloque</span>
			</div>

			{/* <div style={styles.row}>
				<Key>Click Der.</Key>
				<span style={styles.action}>Quitar bloque</span>
			</div> */}
			<div style={{ marginBottom: '6px' }}>
				<span style={styles.action}>Cambiar bloque</span>
			</div>
			<div style={styles.row}>
				<Key>1</Key>
				<Key>2</Key>
				<Key>3</Key>
				<Key>4</Key>
				<Key>5</Key>
			</div>

			{/* <div style={styles.row}>
				<Key>E</Key>
				<span style={styles.action}>Inventario</span>
			</div> */}
		</div>
	)
}

const Key: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div style={styles.key}>{children}</div>
)

const styles: Record<string, React.CSSProperties> = {
	container: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		padding: '12px 12px',
		borderRadius: '12px',
		background: 'rgba(20,20,20,0.55)',
		backdropFilter: 'blur(6px)',
		border: '1px solid rgba(255,255,255,0.08)',
		color: 'white',
		fontFamily: 'sans-serif',
		fontSize: '13px',
		width: '200px',
		userSelect: 'none'
	},
	title: {
		margin: '0 0 10px 0',
		fontSize: '16px',
		fontWeight: '600',
		textShadow: '0px 0px 4px rgba(0,0,0,0.5)'
	},
	row: {
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		marginBottom: '6px'
	},
	key: {
		padding: '4px 4px',
		background: 'rgba(255,255,255,0.12)',
		borderRadius: '6px',
		border: '1px solid rgba(255,255,255,0.25)',
		fontSize: '12px',
		fontWeight: '600',
		minWidth: '28px',
		textAlign: 'center',
		boxShadow: '0 2px 3px rgba(0,0,0,0.25)'
	},
	action: {
		opacity: 0.9
	}
}
