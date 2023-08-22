
const Home = () => {
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
            <LineChart className="line-chart" chartData={chartData}/>
        </>
    )
}

export default Home