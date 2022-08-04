import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graf = () => {
  const [historyInf, setHistoryInf] = useState([]);
  const { id } = useParams();

  async function fetctHistory() {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      );
      let data = await response.json();
      setHistoryInf(data.data);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  }

  useEffect(() => {
    fetctHistory();
  }, []);

  const arrPrice = historyInf.map((item) => item.priceUsd);
  const arrDate = historyInf.map((item) => item.date.substring(0, 10));

  const lineChartData = {
    labels: arrDate,
    datasets: [
      {
        data: arrPrice,
        label: "Price",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };
  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{}}
      data={lineChartData}
    />
  );
};
export default Graf;
