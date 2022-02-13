import React from "react";
import { Box, Text } from "ink";

type BoxPlaceTypes = {
	positionX: number;
	positionY: number;
};

export const BoxPlace: React.FC<BoxPlaceTypes> = ({ positionX, positionY }) => {
	return (
		<Box marginLeft={positionX} marginTop={positionY}>
			<Text>&#x1F538;</Text>
		</Box>
	);
};
