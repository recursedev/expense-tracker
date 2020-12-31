import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

ReactDOM.render(
	<React.StrictMode>
		<SpeechProvider appId='995254a2-6f68-4133-8a90-0b3c25f4b995' language='en-US'>
			<Provider>
				<App />
			</Provider>
		</SpeechProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
