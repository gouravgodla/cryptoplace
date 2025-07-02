import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData?.prices) {
            historicalData.prices.forEach((item) => {
                dataCopy.push([new Date(item[0]), item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    return (
        <div>
            <Chart
                chartType="LineChart"
                data={data}
                height="400px"
                options={{
                    hAxis: {
                        title: 'Date',
                        format: 'MMM dd',
                    },
                    vAxis: {
                        title: 'Price',
                    },
                }}
                legendToggle
            />
        </div>
    );
}

export default LineChart;
