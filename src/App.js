import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";


const App = () => {

    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/annie2980/info474-annie2980/main/world-happiness-report-2021.csv"
    );

    return (
    <div>
        <h1>Exploratory Data Analysis Focus on World Population</h1>
    </div>
    );
};


export default App;