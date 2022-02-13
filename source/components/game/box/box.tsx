import React from "react";
import { Box, Text } from "ink";

type BoxPropsTypes = {
	positionX: number;
	positionY: number;
};

export const GameBox: React.FC<BoxPropsTypes> = ({ positionX, positionY }) => {
	return (
		<Box marginLeft={positionX} marginTop={positionY}>
			<Text>&#x1F4E6;</Text>
		</Box>
	);
};
