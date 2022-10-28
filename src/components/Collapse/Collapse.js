import React from "react";
import { useState } from "react";
import "./Collapse.css";
import arrowDown from "../../assets/img/arrow_down.svg";

function Collapse({ title, content, text }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="collapse">
      <div className="collapse-title">
        {title}
        <img
          className="arrow-collapse"
          src={arrowDown}
          alt="arrow down"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse-title">
        {title}
        <img
          className="arrow-collapse rotate"
          src={arrowDown}
          alt="arrow down"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {typeof content === "object" ? (
        <ul className={"collapse-content-open"}>
          {content.map((item) => {
            return <li key={`${item}`}> {item}</li>;
          })}
        </ul>
      ) : (
        <p className="collapse-content-open">{content}</p>
      )}
    </div>
  );
}

export default Collapse;
