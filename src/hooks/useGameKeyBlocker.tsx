// useGameKeyBlocker.ts
import { useEffect } from 'react'

export function useGameKeyBlocker(isGamePaused: boolean) {
	useEffect(() => {
		const blockKeys = (e: KeyboardEvent) => {
			if (isGamePaused) return // no bloquear si está en menú

			const forbidden = ['Enter', 'Tab', 'Backspace', 'Control', 'Alt', 'Meta']

			if (forbidden.includes(e.key)) {
				e.preventDefault()
				e.stopPropagation()
			}

			// Block space scrolling
			if (e.code === 'Space') {
				e.preventDefault()
			}
		}

		window.addEventListener('keydown', blockKeys)
		return () => window.removeEventListener('keydown', blockKeys)
	}, [isGamePaused])
}
