import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

/**
 * The FVP component wraps the PointerLockControls from react-three/drei.
 * It provides a first-person view control by locking the pointer to the
 * canvas, allowing the user to look around using the mouse. This component
 * uses the camera and DOM element from the Three.js rendering context.
 */

export const FVP = () => {
	const { camera, gl } = useThree();
	return <PointerLockControls args={[camera, gl.domElement]} />;
};
