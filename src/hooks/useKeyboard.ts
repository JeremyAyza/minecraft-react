import { ActionsKeyboardMap } from "@/types/ActionsKeboardMap";
import { useEffect, useState } from "react";

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		dirt: false,
		grass: false,
		glass: false,
		wood: false,
		log: false,
	});

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const { code } = event;
			const action = ActionsKeyboardMap[code as keyof typeof ActionsKeyboardMap];
			if (action) {
				setActions((prev) => ({ ...prev, [action]: true }));
			}
		};
		const handleKeyUp = (event: KeyboardEvent) => {
			const { code } = event;
			const action = ActionsKeyboardMap[code as keyof typeof ActionsKeyboardMap];
			if (action) {
				setActions((prev) => ({ ...prev, [action]: false }));
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("keyup", handleKeyUp);

		};
	}, []);

	return actions;
};
