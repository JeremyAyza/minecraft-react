import { ActionsKeyboardMap } from "@/types/ActionsKeboardMap";
import { useEffect, useState } from "react";
import { useStore } from "./useStore";

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

	const setTexture = useStore((state) => state.setTexture);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const { code } = event;
			const action = ActionsKeyboardMap[code as keyof typeof ActionsKeyboardMap];
			if (action) {
				setActions((prev) => ({ ...prev, [action]: true }));
				
				// Cambiar textura cuando se presiona una tecla numérica
				if (action === "dirt") setTexture("dirt");
				if (action === "grass") setTexture("grass");
				if (action === "glass") setTexture("glass");
				if (action === "wood") setTexture("wood");
				if (action === "log") setTexture("log");
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
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [setTexture]);

	return actions;
};
