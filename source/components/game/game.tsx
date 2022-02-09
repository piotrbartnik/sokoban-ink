import React from "react";
import { Box, Text } from "ink";

export const Game: React.FC = () => {
	// Const [position, setPosition] = useState(0);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setPosition((previous) => previous + 1);
	// 	}, 1000);
	// }, []);

	// const fallback = () => console.log("image error");

	return (
		<Box flexDirection="column">
			<Text>Sokoban in terminal</Text>
		</Box>
	);
};
