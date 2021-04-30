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
        return +d.Global_Sales;
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

            <text x={size / 2 + 52} textAnchor="end" y={size - margin - 1} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0.3
            </text>

            <text x={size / 2 + 57} textAnchor="end" y={size - margin - 110} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >11.32
            </text>

            <line
            x1={size / 2 +28} y1={size - margin - 6}
            x2={size / 2 +33} y2={size - margin - 6}
            stroke={"black"}
            />

            <line
            x1={size / 2 + 28} y1={margin + 346}
            x2={size / 2 + 33} y2={margin + 346}
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
        <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 461} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >41.49
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 465}
            x2={size / 2 - 13} y2={size - margin - 465}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />

            <text x={size / 2 + 52} textAnchor="end" y={size - margin + 2} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0.1
            </text>

            <text x={size / 2 + 57} textAnchor="end" y={size - margin - 185} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >17.52
            </text>

            <line
            x1={size / 2 +28} y1={size - margin - 188}
            x2={size / 2 +33} y2={size - margin - 188}
            stroke={"black"}
            />

            <line
            x1={size / 2 + 28} y1={size - margin -1}
            x2={size / 2 + 33} y2={size - margin -1}
            stroke={"black"}
            />
            
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



        <h3>3. genre on eu</h3>
        <h4>3.1 sports</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            
            <text x={size / 2 - 20} textAnchor="end" y={size - margin +3} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 318} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >29.02
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 322}
            x2={size / 2 - 13} y2={size - margin - 322}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 20}
            x2={size / 2 - 13} y2={size - 20}
            stroke={"black"}
            />

            <text x={size / 2 + 52} textAnchor="end" y={size - margin - 2} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >1.2
            </text>

            <text x={size / 2 + 61} textAnchor="end" y={size - margin - 272} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >26.84
            </text>

            <line
            x1={size / 2 +28} y1={size - margin - 275}
            x2={size / 2 +33} y2={size - margin - 275}
            stroke={"black"}
            />

            <line
            x1={size / 2 + 28} y1={size - margin -5}
            x2={size / 2 + 33} y2={size - margin -5}
            stroke={"black"}
            />

            {sample.map((measurement, index) => {
                const highlight = measurement["Genre"] === "Sports";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.EU_Sales * 25}
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

            <text x={size / 2 + 43} textAnchor="end" y={size - margin + 3.5} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 + 57} textAnchor="end" y={size - margin - 35} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >4.54
            </text>

            <line
            x1={size / 2 +28} y1={size - margin }
            x2={size / 2 +33} y2={size - margin }
            stroke={"black"}
            />

            <line
            x1={size / 2 + 28} y1={margin + 422}
            x2={size / 2 + 33} y2={margin + 422}
            stroke={"black"}
            />

            {sample.map((measurement, index) => {
                const highlight = measurement["Genre"] === "Sports";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.JP_Sales * 10}
                        r = "3"
                        fill="none"
                        stroke={highlight ? "red" : "steelblue"} 
                        strokeOpacity="0.3"
                    />
                );
            })}
        </svg>
    
        <h3>4. Year</h3>
        <h4>4.1 sports</h4>

        <svg width={size} height={size} style={{border: "1px solid black"}}>
            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 36} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >0
            </text>

            <text x={size / 2 - 20} textAnchor="end" y={size - margin - 400} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >82.74
            </text>

            <line
            x1={size / 2 - 18} y1={size - margin - 403}
            x2={size / 2 - 13} y2={size - margin - 403}
            stroke={"black"}
            />

            <line
            x1={size / 2 - 18} y1={size - 60}
            x2={size / 2 - 13} y2={size - 60}
            stroke={"black"}
            />

            <text x={size / 2 + 50} textAnchor="end" y={size - margin - 38} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >1.2
            </text>

            <text x={size / 2 + 61} textAnchor="end" y={size - margin - 158} 
            style={{fontSize: 10, fontFamily: "italic"}}
            >32.78
            </text>

            <line
            x1={size / 2 +28} y1={size - margin - 162}
            x2={size / 2 +33} y2={size - margin - 162}
            stroke={"black"}
            />

            <line
            x1={size / 2 + 28} y1={size - margin -41}
            x2={size / 2 + 33} y2={size - margin -41}
            stroke={"black"}
            />

            {sample.map((measurement, index) => {

                const highlight = measurement["Year"] === "2002";
                console.log('draw circle')
                return (
                    <circle
                        key={index}
                        cx={highlight ? size / 2 + 20 : size / 2}
                        cy={size - margin - measurement.Global_Sales * 10}
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