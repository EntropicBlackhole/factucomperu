import LineChart from '../components/LineChart'
import Chart from "chart.js/auto";
import { Data } from "../utils/Data";
import { CategoryScale } from "chart.js";
import { useState } from "react";
Chart.register(CategoryScale);


const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day), 
    datasets: [
      {
        label: "a",
        data: Data.map((data) => data.net_sell),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

    return (
        <>
            <div className="left-half">
                <LineChart className="line-chart" chartData={chartData}/>
                <div className="monthly-sales">
                    <div>Cantidad de ventas</div>
                    <div>Cantidad de productos</div>
                    <div>Ganancia neta</div>
                </div>
            </div>
            <div className="right-half">
                <div className="todo-list"></div>
                <div className="online-employees">  </div>
            </div>
        </>
    )
}

export default Dashboard