import { useEffect } from 'react'
import { useStore } from './useStore'

export function usePauseKey() {
	const togglePause = useStore((s) => s.togglePause)

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault()
				togglePause()
			}
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])
}
