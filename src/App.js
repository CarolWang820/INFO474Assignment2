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
        <h2>Paragraph 1: Introduction</h2>
        <p>The dataset I use is Video Game Sales (Analyze sales data from more than 16,500 games) from <a href="https://www.kaggle.com/gregorut/videogamesales">Kaggle</a>. This dataset is pretty straight forwards, and it doesn't contain any null data. It shows the video games' sales amount based on the regions. There are five different regions in this dataset which are North America, Europe, Japan, Sales in the rest of the world,  Total worldwide sales. For each video game, it also provides the information of its platform of release, year of release, publisher. So there are 8 factors. Since the data file is too large, I picked the top 300 video games when I'm analyzing. Based on the factors, the relationship between video games' features and their sales amount in different regions became the main point I want to explore. And video game companies can also look for the trend in different regions for them to make better business decision. </p>
        
        <h2>Paragraph 2: The four questions I want to address:</h2>
        <ol>
            <li>What are the distributions of sales (in millions) for the video game in North America, Europe, and Japan?  </li>
            <li>What are the distributions of sales (in millions) for the video game that has DS, PS2 platform in North America compared with all the video platforms' games in North America?</li>
            <li>What are the distributions of sales (in millions) for the video game of Genre sports in EU and JP compared with all the Genre games in these countries?</li>
            <li>What are the distributions of sales (in millions) for video games in the Year 2002 compared to the global game's sales in the all-time period(1980-2020)?</li>
        </ol>
        <h3>1. What are the distributions of sales (in millions) for the video game in North America, Europe, and Japan?  </h3>
        <h4>1.1 Distributions of Video Games' sales (in millions) in North America</h4>
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
        <p>This barcode plot shows the distributions of video games' sales (in millions) in North America. The maximum sales amount (in millions) is 41.49 and the minimum sales amount (in millions) is 0. The distribution is skewed to the right. </p>


        <h4>1.2 Distributions of Video Games' sales (in millions) in Europe</h4>
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
        <p>This barcode plot shows the distributions of video games' sales (in millions) in Europe. The maximum sales amount (in millions) is 29.02 and the minimum sales amount (in millions) is 0. The distribution is skewed to the right. </p>



        <h4>1.3 Distributions of Video Games' sales (in millions) in Japan</h4>
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
        <p>This barcode plot shows the distributions of video games' sales (in millions) in Japan. The maximum sales amount (in millions) is 10.22 and the minimum sales amount (in millions) is 0. The distribution is skewed to the right. </p>



        <h3>2. What are the distributions of sales (in millions) for the video game that has DS, PS2 platform in North America compared with all the video platforms' games in North America?</h3>
        <h4>2.1 Highlighted Distributions of DS platform's Video Games' sales (in millions) in North America</h4>
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
        <p>This graph shows the comparison between DS platform's Video Games' sales (red) and all platform's Video Games' sales(blue) in North America. The maximum sales amount of DS platform's Video Games (in millions) is 11.32 and the minimum sales amount (in millions) is 0.3. The graph shows that the distribution of DS platform is similar with all platforms. </p>



        <h4>2.2 Highlighted Distributions of PS2 platform's Video Games' sales (in millions) in North America</h4>
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
        <p>This graph shows the comparison between PS2 platform's Video Games' sales (red) and all platform's Video Games' sales(blue) in North America. The maximum sales amount of DS platform's Video Games (in millions) is 17.52 and the minimum sales amount (in millions) is 0.1. The graph shows that the distribution of PS2 platform is similar with all platforms. </p>




        <h3>3. What are the distributions of sales (in millions) for the video game of Genre sports in EU and JP compared with all the Genre games in these countries?</h3>
        <h4>3.1 Highlighted Distributions of Sports genre Video Games' sales (in millions) in Europe </h4>
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
        <p>This graph shows the comparison between for the video game of Genre sports sales (red) and all Genre's Video Games' sales(blue) in Euorope. The maximum sales amount of sports genre Video Games (in millions) in Euorope is 26.84 and the minimum sales amount (in millions) is 1.2. The graph shows the distribution of sales amount of sports genre Video Games is evenly distributed, and has a larger median than all Genre's Video Games' sales distribution. It shows in Euorope, sport genre video is more popular in all genres</p>



        <h4>3.2 Highlighted Distributions of Sports genre Video Games' sales (in millions) in Japan</h4>
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
        <p>This graph shows the comparison between for the video game of Genre sports sales (red) and all Genre's Video Games' sales(blue) in Japan. The maximum sales amount of sports genre Video Games (in millions) in Euorope is 4.54and the minimum sales amount (in millions) is 0. The graph shows the distribution of sales amount of sports genre Video Games is more right skewed than all Genre's Video Games' sales distribution. It shows that sport genre video game is not as popuplar as other genres in Japan</p>

    
        <h3>4. What are the distributions of sales (in millions) for video games in the Year 2002 compared to the global game's sales in the all-time period(1980-2020)?</h3>
        <h4>4.1 Highlighted Distributions of Video Games' sales (in millions) in the Year 2002 in Global</h4>
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
        <p>This graph shows the distributions of sales (in millions) for video games in the Year 2002 (red) compared to the global game's sales (blue) in the all-time period(1980-2020). The maximum sales amount of the Year 2002 Video Games (in millions) in global wild is 37.28 and the minimum sales amount (in millions) is 1.2.  The maximum sales amount of all-time period(1980-2020) of Video Games (in millions) in global wild is 87.24 and the minimum sales amount (in millions) is 0. The graph shows two peaks of the distribution of sales amount in Year 2002. It may occur because few video games are especially popular than others. </p>


        <h2>Paragraph 3: Analysis Process</h2>
        <p>The first step I did to analyze this dataset is to look for the introduction on Kaggle and find the basic information about this dataset, such as each column's meaning, and after that I have a basic understanding of this. The second step I did is to clean the dataset to avoid null value. Then I sliced this dataset and used 300 rows of it, since the original file is to big to load. Based on my understanding and the research questions I came up, I decided to focus on several columns, they are video games' platforms, genre, the year of release, and sales amount in different regions. For the first question, I decided to only show the single barcode plot because it gives a nice overview of video games sales amount in different regions. For the 2, 3, 4 questions, I utilized highlight to point out the factor I want to focus on: the second set of graphs are same region, different platforms; the third one is same genre, different region; and the forth one is one specific year's sale amount compared with all time-period amount. </p>
        <h2>Paragraph 4: Insight</h2>
        <p>When I'm developing my exploration, I faced an issue which is I can't use "map" function. Then I found that the reason why I can't use is my dataset always return "nan" value. So I recleaned my data and replaced some "," to "." so that Visual Studio can know that it's a number instead of a string. From here I learned that we have to make sure the dataset is clean enough before we start to analyze it because data formats can cause many problems. I brought up 4 analysis questions and the first the now is an overview for video games sales amount in different regions. And we can see that in all three regions,  North American, Euorope, Japan, has right skewed shape on the graph. And it may because Video Game is not a necessary and only few video games can sell a huge amount. The second question we can see that both PS2 and DS platform has similar shape with all platforms data, so the platform may not be a key factor of selling video game. The third question, we can see sport genre video game is really popular in Euorope because it has a high median and its shape is normally distributed. But less popular in Japan because it's super right skewed. And it may because Japanese tend to work out less than Euoropean people. The forth question is distributions of sales (in millions) for video games in the Year 2002 compared to the global game's sales in the all-time period(1980-2020). We can see two peaks of the distribution of sales amount in Year 2002. It may occur because few video games are especially popular in that year. </p>
        <h3>feedback/improvement based on feedback</h3>
        <ol>
            <li>feedback I received: For the first question, use line instead of empty circles so the whole webpage is more delicate; add description at the bottom for each graph for users to understand it better; lower the transparency so users can see the distribution more clearly.</li>
            <li>According to the feedback, I used barcode plot for the first question and lowered the opacity. I then moved the description for each graph to the bottom so the webpage is more delicate. </li>
        </ol>






    </div>
    );
};

export default App;