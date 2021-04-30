import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/CarolWang820/INFO474Assignment2/main/countries-of-the-world.csv"
    );
    
 

    const size = 500;
    const margin = 20;


    return (
    <div>
        <h1>Exploratory Data Analysis Focus on World Population</h1>
        <p>{loading && "Loading data!"}</p>
        <h2>Introduction</h2>
        <h3>Distribution of Population Dentisy for All Countries</h3>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <circle cx={10} cy={10} r="3" />
            {data.map((measurement, index) => {
                return <circle key={index} cx={10} cy={measurement.TMAX} r="3"/>;
            })}
        </svg>
    </div>
    );
};


export default App;