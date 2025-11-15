import { useStore } from "../hooks/useStore.js"
import * as images from "../helpers/images.js"
import { useKeyboard } from "../hooks/useKeyboard.js"
import { useEffect, useState } from "react"

export const TextureSelector = () => {
	const [visible, setVisible] = useState(true)
	const setTexture = useStore((state) => state.setTexture)
	const texture = useStore((state) => state.texture)

	const { dirt, grass, glass, wood, log } = useKeyboard()

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 1000)

		setVisible(true)

		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [texture])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const options = {
			dirt,
			grass,
			glass,
			wood,
			log,
		}

		const selectedTexture = Object.entries(options).find(
			([_, isEnabled]) => isEnabled,
		)

		if (selectedTexture) {
			const [textureName] = selectedTexture
			setTexture(textureName)
		}
	}, [dirt, grass, glass, wood, log])

	return (
		<div className="texture-selector">
			{Object.entries(images).map(([imgKey, img]) => {
				return (
					<img
						className={texture === imgKey.replace("Img", "") ? "selected" : ""}
						key={imgKey}
						src={img}
						alt={imgKey}
					/>
				)
			})}
		</div>
	)
}
