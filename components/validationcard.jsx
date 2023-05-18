import React from "react";

const Validationcard = () => {
  return (
    <div>
      <div className="cardloader">
        <button className="dismiss" type="button">
          ×
        </button>
        <div className="bedder">
          <div className="scrimage">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 7L9.00004 18L3.99994 13"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="pontent">
            <span className="pitle">Order validated</span>
            <p className="message">
              Thank you for your purchase. you package will be delivered within
              2 days of your purchase
            </p>
          </div>
          <div className="fractions">
            <button className="fishty" type="button">
              fishty
            </button>
            <button className="track" type="button">
              Track my package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validationcard;
