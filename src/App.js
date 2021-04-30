import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear}  from "d3-scale";
import { extent, max, min, bin } from "d3-array";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/CarolWang820/INFO474Assignment2/main/vgsales.csv"
    );

    //console.log("from hook", loading, data);
    const sample = data.slice(0, 300);
    
    const MaxextentScore = extent(data, (d) => {
        return +d.JP_Sales;
    });


    //north american sale


    const size = 500;
    const margin = 20;

    const yScale = scaleLinear()
        .domain(MaxextentScore)
        .range([size - margin, size - 250]);

    console.log(MaxextentScore);


    return (
    <div>
        <h1>Exploratory Data Analysis Focus on Vedio Game Sales</h1>
        <p>{loading && "Loading data!"}</p>
        <h2>Introduction</h2>
        
        <h3>1. </h3>
        <h4>1.1 na sale</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 412} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >41.49
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 415}
            x2={size / 2 - 13} y2={size - margin - 415}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />
            
            {sample.map((measurement, index) => {
                console.log('draw circle')
                return (
                    <line 
                        key={index} 
                        x1={size / 2}
                        y1={size - margin - measurement.NA_Sales * 10}
                        x2={size / 2 + 20} 
                        y2={size - margin - measurement.NA_Sales * 10} 
                        stroke={"steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>

        <h4>1.2 eu sale</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 287} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >29.02
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 290}
            x2={size / 2 - 13} y2={size - margin - 290}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />
            
            {sample.map((measurement, index) => {
                console.log('draw circle')
                return (
                    <line 
                        key={index} 
                        x1={size / 2}
                        y1={size - margin - measurement.EU_Sales * 10}
                        x2={size / 2 + 20} 
                        y2={size - margin - measurement.EU_Sales * 10} 
                        stroke={"steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h4>1.3 jp sale</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 99} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >10.22
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 102}
            x2={size / 2 - 13} y2={size - margin - 102}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />
            
            {sample.map((measurement, index) => {
                console.log('draw circle')
                return (
                    <line 
                        key={index} 
                        x1={size / 2}
                        y1={size - margin - measurement.JP_Sales * 10}
                        x2={size / 2 + 20} 
                        y2={size - margin - measurement.JP_Sales * 10} 
                        stroke={"steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h3>2. platform on na</h3>
        <h4>2.1 ds</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 99} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >10.22
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 102}
            x2={size / 2 - 13} y2={size - margin - 102}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />

            {sample.map((measurement, index) => {
                const highlight = measurement["Platform"] === "DS";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2} 
                        cy={size - margin - measurement.NA_Sales * 10}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h4>2.2 ps2</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text 
                x={size / 2 - 20} 
                textAnchor="end" 
                y={size - 143} 
                style={{fontSize: 10, fontFamily: "Gill Sans, san serif"}}
            >
                2.5
            </text>
            
            {sample.map((measurement, index) => {
                const highlight = measurement["Platform"] === "PS2";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.NA_Sales * 20}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h4>2.3 ps3</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text 
                x={size / 2 - 20} 
                textAnchor="end" 
                y={size - 143} 
                style={{fontSize: 10, fontFamily: "Gill Sans, san serif"}}
            >
                2.5
            </text>
            
            {sample.map((measurement, index) => {
                const highlight = measurement["Platform"] === "PS3";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.NA_Sales * 15}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h3>3. genre on eu</h3>
        <h4>3.1 sports</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            

            {sample.map((measurement, index) => {
                const highlight = measurement["Genre"] === "Sports";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.NA_Sales * 15}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>


        <h4>3.2 Platform</h4>
        <svg width={size} height={size} style={{border: "1px solid black"}}>
            

            {sample.map((measurement, index) => {
                const highlight = measurement["Genre"] === "Platform";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.NA_Sales * 15}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>
        <h4>3.3 racing</h4>
        <svg width={size} height={size} style={{border: "1px solid black"}}>
            

            {sample.map((measurement, index) => {
                const highlight = measurement["Genre"] === "Racing";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.NA_Sales * 15}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>






    </div>
    );
};

export default App;