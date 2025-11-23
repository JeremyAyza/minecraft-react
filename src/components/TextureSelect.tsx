import { useStore } from '../hooks/useStore.tsx'
import * as images from '../images/images.tsx'
import { useKeyboard } from '../hooks/useKeyboard.tsx'
import { useEffect, useState } from 'react'

export const TextureSelector = () => {
	const [_, setVisible] = useState(true)

	const texture = useStore((state) => state.texture)
	const setTexture = useStore((state) => state.setTexture)

	const { dirt, grass, glass, wood, log } = useKeyboard()

	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 1000)

		setVisible(true)

		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [texture])

	useEffect(() => {
		const options = {
			dirt,
			grass,
			glass,
			wood,
			log
		}

		const selectedTexture = Object.entries(options).find(
			([_, isEnabled]) => isEnabled
		)

		if (selectedTexture) {
			const [textureName] = selectedTexture
			setTexture(textureName)
		}
	}, [dirt, grass, glass, wood, log])

	const imgKeys = [
		['wood', images.woodImg],
		['log', images.logImg],
		['dirt', images.dirtImg],
		['glass', images.glassImg],
		['grass', images.grassImg]
	]

	return (
		<div className="texture-selector">
			{imgKeys.map(([imgKey, img]) => {
				return (
					<img
						className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
						key={imgKey}
						src={img}
						alt={imgKey}
					/>
				)
			})}
		</div>
	)
}
