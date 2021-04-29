import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/CarolWang820/INFO474Assignment2/main/countries%20of%20the%20world.csv"
    );

    return (
    <div>
        <h1>Exploratory Data Analysis Focus on World Population</h1>

    </div>
    );
};


export default App;