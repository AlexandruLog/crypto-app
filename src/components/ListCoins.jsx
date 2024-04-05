import React from "react";

function ListCoins(props) {
  return (
    <div className="list-coins ">
      <div className="text-center z-3 position-relative shadow-lg pt-5 pb-3 d-block d-lg-none">
        <h2 className="mb-0 display-5 fw-semibold">More Coins</h2>
        <p className="lead text-muted">Popular Coins</p>
      </div>
      <ul
        className="list-group list-group-flush overflow-y-scroll"
        style={{ height: "1250px" }}
      >
        {props.coins.map((coin, index) => (
          <a className="text-decoration-none" href="#top-page-nav" key={index}>
            <li
              className="list-group-item p-4 d-flex"
              onClick={() => {
                props.setSelectedCoin(coin);
                props.getHistoryData(coin.id, 1);
                props.setOpened(true);
              }}
            >
              <div className="d-flex align-items-center">
                <img src={coin.image} width={35} alt="coin_image" />
                <span className="ms-3 text-dark fw-medium fs-5">
                  {coin.name}
                </span>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default ListCoins;
