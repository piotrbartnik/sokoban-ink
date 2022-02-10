import React from "react";
import { Box, Text } from "ink";
import { Player } from "./player/player";

export const Game: React.FC = () => {
	return (
		<Box flexDirection="column">
			<Player positionX={5} positionY={5} />
			<Text>&#x1F916; &#x1F4E6; &#x1F538;</Text>
			<Box borderStyle="bold" width={15} height={1} />
			<Box>
				<Box borderStyle="bold" width={3} height={5} />
				<Box width={9} height={5} />
				<Box borderStyle="bold" width={3} height={5} />
			</Box>
		</Box>
	);
};
