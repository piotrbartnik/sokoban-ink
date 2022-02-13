import React from "react";
import { Box } from "ink";
import { Player } from "./player/player";

export const Game: React.FC = () => {
	return (
		<Box flexDirection="column">
			<Player positionX={1} positionY={1} />
			<Box borderStyle="bold" width={15} height={1} />
			<Box>
				<Box borderStyle="bold" width={3} height={5} />
				<Box width={9} height={5} />

				<Box borderStyle="bold" width={3} height={5} />
			</Box>
		</Box>
	);
};
