import React from "react";
import { Chart as ChartJS, Tooltip } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

function Chart({ historyPrices, selectedCoin }) {
  return (
    <div className="chart mt-2 mb-3  mt-lg-5" style={{ height: "400px" }}>
      <Line
        data={{
          labels: historyPrices.map((prices) => moment(prices[0]).format("l")),
          datasets: [
            {
              label: selectedCoin.name,
              data: historyPrices.map((prices) => prices[1]),
              pointBorderWidth: 0.1,
              pointRadius: 0.1,
              tension: 0.2,
            },
          ],
        }}
        options={{
          interaction: {
            intersect: false,
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default Chart;
