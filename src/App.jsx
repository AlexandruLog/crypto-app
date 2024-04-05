import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import TopCoins from "./components/TopCoins";
import Chart from "./components/Chart";
import Details from "./components/Details";
import ListCoins from "./components/ListCoins";
import PageUp from "./components/PageUp";
import Intervals from "./components/Intervals";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const USD = new Intl.NumberFormat("un-US", {
  style: "currency",
  currency: "USD",
});

function App() {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [historyPrices, setHistoryPrices] = useState([]);
  const [opened, setOpened] = useState(false);

  const getCoinsData = () => {
    console.log("getCoinsData here");
    axios
      .get(
        `${API_URL}/coins/markets?x_cg_demo_api_key=${API_KEY}&vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=2`
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  };

  const getHistoryData = (id, interval) => {
    console.log("getHistoryData here");
    axios
      .get(
        `${API_URL}/coins/${id}/market_chart?x_cg_demo_api_key=${API_KEY}&vs_currency=usd&days=${interval}&precision=2`
      )
      .then((res) => setHistoryPrices(res.data.prices))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className="app bg-light p-0 m-0">
      <section id="top-page-nav">
        <Navbar />
      </section>
      <div className="container-fluid row m-0 p-0">
        <div className="col-lg-3 ps-0 d-none d-lg-block">
          <ListCoins
            coins={coins}
            setSelectedCoin={setSelectedCoin}
            getHistoryData={getHistoryData}
            setOpened={setOpened}
          />
        </div>
        <div className="col-lg-9 p-0">
          <Details selectedCoin={selectedCoin} USD={USD} opened={opened} />
          <Chart
            historyPrices={historyPrices}
            selectedCoin={selectedCoin}
            opened={opened}
          />
          <Intervals
            selectedCoin={selectedCoin}
            getHistoryData={getHistoryData}
            opened={opened}
          />
          <section id="top-coins">
            <TopCoins coins={coins} USD={USD} />
          </section>
        </div>
      </div>

      <div className="d-lg-none">
        <section id="more-coins">
          <ListCoins
            coins={coins}
            setSelectedCoin={setSelectedCoin}
            getHistoryData={getHistoryData}
            setOpened={setOpened}
          />
        </section>
      </div>
      <PageUp />
    </div>
  );
}

export default App;
