import { useState } from "react";
import "./App.css";
import Leftsection from "./components/leftsection/leftsection";
import Rightsection from "./components/rightsection/rightsection";

function App() {
	const [data, setData] = useState([]);
	return (
		<div className="app-main">
			<div>
				<Leftsection setData={setData} />
			</div>
			{data.length !== 0 && (
				<div>
					<Rightsection data={data} />
				</div>
			)}
		</div>
	);
}

export default App;
