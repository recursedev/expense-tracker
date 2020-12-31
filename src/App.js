import React from "react";
import { Grid } from "@material-ui/core";
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui'

import Details from "./components/Details/Details.component";
import Main from "./components/Main/Main.component";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles();

	return (
		<div className="App">
			<Grid
				className={classes.grid}
				container
				spacing={0}
				alignItems="center"
				justify="center"
				style={{ height: "100vh" }}
			>
				<Grid item xs={12} sm={4}>
					<Details title="Income" />
				</Grid>
				<Grid item xs={12} sm={3}>
					<Main />
				</Grid>
				<Grid item xs={12} sm={4}>
					<Details title="Expense" />
				</Grid>
			</Grid>
			<PushToTalkButtonContainer>
				<PushToTalkButton/>
			</PushToTalkButtonContainer>
		</div>
	);
};

export default App;
