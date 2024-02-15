import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { CiMoneyBill } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { TbLocationDollar } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useCollapse } from "react-collapsed";

export const LeftColumn = () => {
  const dataStats = [
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
    {
      icon1: <TbLocationDollar />,
      title: "AMZN",
      icon2: <FaFileInvoiceDollar />,
      amount1: "200",
      icon3: <FaArrowTrendUp />,
      amount2: "-0.25%",
      icon4: <CiMoneyBill />,
      desc: "Low Risk",
      pcColor: "green-600",
    },
  ];

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="m-4">
      <Navbar />
      <div
        className="flex flex-col gap-6 mx-6"
        {...getToggleProps({ onClick: handleOnClick })}
      >
        {dataStats.map((item, index) => (
          <>
            <div className="flex bg-zinc-700 rounded-md p-2">
              <div className="flex flex-row gap-6 text-slate-50 justify-between align-middle flex-1">
                {item.icon1}
                <p>{item.title}</p>
                <span className="text-gray-500">|</span>
                {item.icon2}
                <p>{item.amount1}</p>
                <span className="text-gray-500">|</span>
                {item.icon3}
                <p className={`text-${item.pcColor}`}>{item.amount2}</p>
                <span className="text-gray-500">|</span>
                {item.icon4}
                <p>{item.desc}</p>
              </div>
            </div>
            <div {...getCollapseProps()}>
              <div>
                Now you can see the hidden content.
                <br />
                Click again to hide...
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
