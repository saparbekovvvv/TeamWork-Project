import React from "react";
import book from "../../component/images/card.png";
import book2 from "../../component/images/card (1).png";
import book3 from "../../component/images/card (2).png";
import book4 from "../../component/images/card (3).png";
import book5 from "../../component/images/card (4).png";
import book6 from "../../component/images/card (5).png";

export default function Section() {
  return (
    <div>
      <div className="container">
        <div className="section">
          <div className="flex justify-between">
            <h1
              style={{ fontSize: "48px", fontWeight: "500", color: "#19272E" }}
            >
              Genres
            </h1>
            <p
              style={{ fontSize: "18px", fontWeight: "500", color: " #818EEA" }}
            >
              View all
            </p>
          </div>
          <div className="flex justify-center gap-14">
            <img src={book} alt="" />
            <img src={book2} alt="" />
            <img src={book3} alt="" />
            <img src={book4} alt="" />
            <img src={book5} alt="" />
            <img src={book6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
