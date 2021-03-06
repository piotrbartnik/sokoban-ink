import React from "react";
import { Box, Text } from "ink";

type PlayerPropsTypes = {
	positionX: number;
	positionY: number;
};

export const Player: React.FC<PlayerPropsTypes> = ({
	positionX,
	positionY,
}) => {
	return (
		<Box marginLeft={positionX} marginTop={positionY}>
			<Text>&#x1F916;</Text>
		</Box>
	);
};
