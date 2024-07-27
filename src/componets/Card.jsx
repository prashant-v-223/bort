import Link from "next/link";
import React from "react";
// import { Link } from 'react-router-dom';

function Card({ item, index }) {
  const percentageOff = ((item.mrp - item.selling_price) / item.mrp) * 100;
  return (
    <a
      href={`/product-details/${item._id}`}
      onClick={() => {
        localStorage.setItem("d1", JSON.stringify(item));
      }}
      key={index}
      className="Cs7ycL TcKeCe  col-6"
      style={{
        textDecoration: "none",
        padding: "2px",
        margin: "auto",
      }}
    >
      <div className="_2enssu px-3">
        <div>
          <img className="mt-3 img-fluid" src={item.images0} style={{

            minHeight: "131px",
            maxHeight: "131px",
            objectFit: "cover"

          }} />
        </div>
        <div
          className="_24B_AU _3SexMn "
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            textAlign: "left",
            marginTop: 15,
            fontSize: 14,
            color: "#007185",
            fontWeight: 700,
          }}
        >
          {item.Title}
        </div>
        <div
          className="_24B_AU _1AQnZC"
          style={{
            fontSize: 14,
            color: "#fb3030	",
            marginTop: 8,
            textAlign: "left",
          }}
        >
          <b>- {percentageOff.toFixed(1)}% Off</b>
          <span
            className="mrp"
            style={{
              color: "#9A9A9A",
              margin: "0 5px",
              textDecoration: "line-through",
            }}
          >
            <b>   ₹ {item.mrp}</b>
          </span>
        </div>

        {/* <div
          className="_24B_AU _1AQnZC"
          style={{ color: "#000", fontWeight: 600, fontSize: 16 }}
        >
          - {percentageOff.toFixed(1)}% Off
          <span className="mrp">₹{item.mrp}</span>
        </div> */}
        <div
          className="_24B_AU _1AQnZC"
          style={{
            display: "flex",
          }}
        >
          <b
            className="selling-price"
            style={{ color: "#000", fontWeight: 600, fontSize: 16 }}
          >
            ₹{item.selling_price}
          </b>
          <img
            src="https://i.ibb.co/t4RsPCf/SwOvZ3r.png"
            height="10px"
            width={70}
            className="img-fluid"
          />
        </div>
        <button
          className="btn w-100 mt-4"
          style={{ background: "rgb(255, 194, 99)", color: "rgb(0, 0, 0)" }}
        >
          Limited time deal
        </button>
        <div
          className="_3Nxu4r delivery-txt text-dark"
          style={{ marginTop: 10, fontSize: 12 }}
        >
          Free Delivery in Two  Days
        </div>
      </div>
    </a>
  );
}

export default Card;
