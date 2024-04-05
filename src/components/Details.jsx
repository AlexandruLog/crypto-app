import React from "react";

function Details(props) {
  return (
    <div className="details shadow bg-secondary-subtle">
      {/* for desktop */}
      {props.opened ? (
        <div className="row p-4 d-none d-lg-flex">
          <div className="col-1 col-lg-3">
            <h2 className="text-uppercase mb-0 mt-2 ">
              {`${props.selectedCoin.symbol}/USD`}
            </h2>
          </div>
          <div className="col-2">
            <p className="lead mb-0">Last Price</p>
            <h3 className="mb-0">
              {props.USD.format(props.selectedCoin.current_price)}
            </h3>
          </div>
          <div className="col-2">
            <p className="lead mb-0">Daily change</p>
            <h3
              className={`mb-0 ${
                props.selectedCoin.price_change_24h > 0
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {props.selectedCoin.price_change_24h > 0
                ? "+" + props.USD.format(props.selectedCoin.price_change_24h)
                : props.USD.format(props.selectedCoin.price_change_24h)}
            </h3>
          </div>
          <div className="col-2">
            <p className="lead mb-0">Circulating coins</p>
            <h3 className="mb-0">
              {parseInt(props.selectedCoin.circulating_supply).toLocaleString()}
            </h3>
          </div>
          <div className="col-2">
            <p className="lead mb-0 d-flex align-items-center">
              <span className="me-2">Total Volume</span>
              <img src={props.selectedCoin.image} width={26} alt="coin_image" />
            </p>
            <h3 className="mb-0">
              {parseInt(props.selectedCoin.total_volume).toLocaleString()}
            </h3>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* for mobile */}
      {props.opened ? (
        <div className="d-flex flex-column d-lg-none">
          <div className="mb-1">
            <h2 className="text-uppercase mt-3 d-flex justify-content-center align-items-center gap-1">
              <img src={props.selectedCoin.image} width={30} alt="coin_image" />
              {`${props.selectedCoin.symbol}/USD`}
            </h2>
          </div>
          <div className="body-container d-flex justify-content-around">
            <div className="column-1">
              <div className="mb-3">
                <p className="lead mb-0">Last Price</p>
                <h3 className="mb-0">
                  {props.USD.format(props.selectedCoin.current_price)}
                </h3>
              </div>
              <div className="mb-3">
                <p className="lead mb-0">Daily change</p>
                <h3
                  className={`mb-0 ${
                    props.selectedCoin.price_change_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {props.selectedCoin.price_change_24h > 0
                    ? "+" +
                      props.USD.format(props.selectedCoin.price_change_24h)
                    : props.USD.format(props.selectedCoin.price_change_24h)}
                </h3>
              </div>
            </div>
            <div className="column-2">
              <div className="mb-3">
                <p className="lead mb-0">Circulating coins</p>
                <h3 className="mb-0">
                  {parseFloat(
                    props.selectedCoin.circulating_supply.toFixed(0)
                  ).toLocaleString()}
                </h3>
              </div>
              <div className="">
                <p className="lead mb-0 "></p>
                <span className="lead me-2">Total Volume</span>
                <h3 className="mb-0">
                  {parseFloat(props.selectedCoin.total_volume).toLocaleString()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
