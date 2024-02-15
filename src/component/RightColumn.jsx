import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useCollapse } from "react-collapsed";
import { MdHealthAndSafety } from "react-icons/md";

export const RightColumn = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="mt-5 p-8 bg-zinc-950 h-full">
      <p className="text-slate-50 text-center font-extrabold">Filters</p>
      <div className="flex justify-between">
        <p className="text-zinc-800">Filters Applied</p>
        <p className="text-slate-50">Clear All</p>
      </div>
      <div>
        <input type="text" className="w-full mb-1 p-2 bg-zinc-700 rounded-md" />
      </div>
      <div className="w-full mt-2 p-2 bg-zinc-700 rounded-md">
        <p className="text-slate-50 font-bold">Stock</p>
        <input
          className="w-full mb-1 p-1 bg-zinc-500 rounded-md"
          placeholder="$ Ticker"
        />
        <>
          <div
            className="flex flex-row mt-8"
            {...getToggleProps({ onClick: handleOnClick })}
          >
            <TiArrowSortedDown className="text-slate-50 mt-1" />
            <p className="text-slate-50 font-bold">Stock</p>
          </div>
          <div {...getCollapseProps()}>
            <div className="flex justify-between">
              <div className="border-l-1 border-colo pr-1 pb-2 ml-4">
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">Test</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
              </div>
              <div className="border-l-1 border-colo pr-1 pb-2 ml-4">
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">Test</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
                <div className="flex">
                  <MdHealthAndSafety className="text-slate-50 mt-1 mr-1" />
                  <p className="text-slate-50">lorem</p>
                </div>
              </div>
            </div>
          </div>
        </>
        <div
          className="flex flex-row mt-8"
          {...getToggleProps({ onClick: handleOnClick })}
        >
          <TiArrowSortedDown className="text-slate-50 mt-1" />
          <p className="text-slate-50 font-bold">Stock</p>
        </div>
        <div {...getCollapseProps()}>
          <div className="flex justify-between">
            <div className="border-l-1 border-colo pr-1 pb-2 ml-4">
              <div className="flex">
                <label>
                  <input type="radio" value="option1" checked={true} />
                  Option 1
                </label>
              </div>
              <div className="flex">
                <label>
                  <input type="radio" value="option1" checked={true} />
                  Option 1
                </label>
              </div>
              <div className="flex">
                <label>
                  <input type="radio" value="option1" checked={true} />
                  Option 1
                </label>
              </div>
            </div>
          </div>
        </div>
        <></>
      </div>
    </div>
  );
};
