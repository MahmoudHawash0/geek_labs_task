import React, { useState } from "react";
import alert from "../assets/alert.png";
import automation from "../assets/automation.png";
import trading from "../assets/trading.png";
import trainig from "../assets/trainig.png";
import person from "../assets/person.png";
import profile from "../assets/profile.png";
import street_suite_logo from "../assets/street_suite_logo.png";
import './test.css';

export const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      name: "Alerts",
      icon: <img src={alert}/>,
    },
    {
      name: "Trainig",
      icon: <img src={trainig}/>,
    },
    {
      name: "Automation",
      icon: <img src={automation}/>,
    },
    {
      name: "Portfolio",
      icon: <img src={profile}/>,
    },
    {
      name: "Trading",
      icon: <img src={trading}/>,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            {/* <street_suite_logo onClick={toggle} /> */}
            <img src={street_suite_logo} onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <>
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
