import React from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip, LabelList} from "recharts";

import "./TimeTrackingReports.css";

const daysData = [
  {
    days: "Sunday",
    hours: 4,
  },
  {
    days: "Monday",
    hours: 3,
  },
  {
    days: "Tuesday",
    hours: 2,
  },
  {
    days: "Wednesday",
    hours: 2,
  },
  {
    days: "Thursday",
    hours: 1,
  },
  {
    days: "Friday",
    hours: 7,
  },
  {
    days: "Saturday",
    hours: 12,
  },
];

const CustomTooltip = ({active, payload, label}) => {
  if (active) {
    return (
      <div className='TimeTrackingReports-Tooltip-Rectangle'>
        <p className='TimeTrackingReports-Tooltip-label'>{`${label}`}</p>
        <p className='TimeTrackingReports-Tooltip-Payload'>{`${payload[0].value} hours`}</p>
      </div>
    );
  }

  return null;
};

const CustomizedLabel = (props) => {
  const {x, y, height, width, value} = props;

  return (
    <>
      <text
        className='TimeTrackingReports-CustomizedLabel'
        x={x + width / 2}
        y={width}
        fill='#7d7e82'
        textAnchor='middle'
        position='top'>
        {value.split("")[0]}
      </text>
    </>
  );
};

const BarChartGraph = () => {
  return (
    <BarChart
      width={350}
      height={100}
      data={daysData}
      margin={{
        top: 30,
        right: 40,
        left: 40,
        bottom: 5,
      }}
      barSize={20}>
      <XAxis dataKey='days' hide='true' />
      <YAxis hide='true' />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey='hours'
        fill='#6d5ed3'
        background={{fill: "#eee"}}
        minPointSize={0}>
        <LabelList dataKey='days' content={CustomizedLabel} />
      </Bar>
    </BarChart>
  );
};

export default BarChartGraph;
