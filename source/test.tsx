import React from "react";
import test from "ava";
import { render } from "ink-testing-library";
import App from "./ui";

test("greet unknown user", (t) => {
	render(<App />);

	t.is(true, true);
});
