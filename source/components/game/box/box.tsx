import React from "react";
import { Box, Text } from "ink";

type BoxProps = {
	positionX: number;
	positionY: number;
};

export const GameBox: React.FC<BoxProps> = ({ positionX, positionY }) => {
	return (
		<Box marginLeft={positionX} marginTop={positionY}>
			<Text>&#x1F4E6;</Text>
		</Box>
	);
};
