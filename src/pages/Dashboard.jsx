import LineChart from '../components/LineChart'
Chart.register(CategoryScale);
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

const Dashboard = () => {
    return (
        <>
            <div className="left-half">
                <Graph />
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