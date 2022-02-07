import React, { FC } from "react";
import { Text } from "ink";

const App: FC<{ name?: string }> = ({ name = "Stranger" }) => {
	console.log("test");

	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
			{console.log("test")}
		</Text>
	);
};

module.exports = App;
export default App;
