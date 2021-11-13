import React, {useCallback, useState} from "react";
import {Legend, PieChart, Cell, Pie, Sector} from "recharts";

import "./TimeTrackingReports.css";
const COLORS = ["#6d5ed3", "#dfdfe2"];
const data = [
  {name: "Invoiced", value: 70},
  {name: "Not invoiced", value: 30},
];
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
  } = props;

  return (
    <g>
      <text
        className='TimeTrackingReports-Percentage-PieChart'
        x={cx + 3}
        y={cy + 5}
        textAnchor='middle'
        fill={"#1a1a1a"}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const renderColorfulLegendText = (value) => {
  return <span className='TimeTrackingReports-PieChart-Legend'>{value}</span>;
};

const PieChartGraph = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //   const onPieEnter = useCallback(
  //     (_, index) => {
  //       setActiveIndex(index);
  //     },
  //     [setActiveIndex]
  //   );

  return (
    <>
      <PieChart width={300} height={110}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={100}
          cy={50}
          innerRadius={30}
          outerRadius={40}
          dataKey='value'
          //   onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign='middle'
          layout='vertical'
          align='right'
          iconType='square'
          iconSize='12'
          formatter={renderColorfulLegendText}
        />
      </PieChart>
    </>
  );
};

export default PieChartGraph;
