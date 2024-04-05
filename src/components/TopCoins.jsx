import React from "react";

function TopCoins(props) {
  return (
    <div className="top-coins mb-5">
      <div className="text-center py-5">
        <h2 className="mb-0 display-5 fw-semibold">Top Coins</h2>
        <p className="lead text-muted">Most Popular Coins Now</p>
      </div>
      <table className="table table-hover pe-*">
        <thead>
          <tr>
            <th className="py-3 ps-4" scope="col">
              Name
            </th>
            <th className="py-3" scope="col">
              Price
            </th>
            <th className="py-3" scope="col">
              Last 24h
            </th>
            <th className="py-3" scope="col">
              Charts
            </th>
          </tr>
        </thead>
        <tbody>
          {props.coins.slice(0, 5).map((coin, index) => (
            <tr key={index}>
              <td className="align-middle py-4 ps-2 ps-lg-4">
                {/* mobile */}
                <div className="d-flex d-lg-none align-items-center">
                  <img
                    className="rounded-1"
                    src={coin.image}
                    width={28}
                    alt="coin_image"
                  />
                  <p className="mb-0 ms-1">{coin.name}</p>
                </div>
                {/* desktop */}
                <div className="d-none d-lg-flex align-items-center">
                  <img
                    className="rounded-1"
                    src={coin.image}
                    width={35}
                    alt="coin_image"
                  />
                  <h4 className="mb-0 ms-1 ms-lg-2 ">{coin.name}</h4>
                </div>
              </td>

              <td className="align-middle">
                <p className="mb-0">{props.USD.format(coin.current_price)}</p>
              </td>
              <td className="align-middle">
                <p className="mb-0">
                  {props.USD.format(coin.price_change_24h)}
                </p>
                <p
                  className={`mb-0 ${
                    coin.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {`${
                    coin.price_change_percentage_24h.toFixed(2) > 0
                      ? "+" + coin.price_change_percentage_24h.toFixed(2)
                      : coin.price_change_percentage_24h.toFixed(2)
                  }`}
                  %
                  {coin.price_change_percentage_24h > 0 ? (
                    <i className="bi bi-arrow-up-right"></i>
                  ) : (
                    <i className="bi bi-arrow-down-right"></i>
                  )}
                </p>
              </td>
              <td className="align-middle">Chart</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopCoins;
