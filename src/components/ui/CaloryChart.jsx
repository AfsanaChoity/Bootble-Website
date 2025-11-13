import React from 'react';
import { Line } from '@ant-design/charts';
import Heading from '@/UI/Heading';

const CaloryChart = () => {
  const data = [
    { day: 'M', value: 2200 },
    { day: 'T', value: 2000 },
    { day: 'W', value: 2000 },
    { day: 'T', value: 1900 },
    { day: 'F', value: 1850 },
    { day: 'Sa', value: 1800 },
    { day: 'S', value: 1800 },
  ];

  const config = {
    data,
    xField: 'day',
    yField: 'value',
    smooth: false,
    height: 200,
    padding: [40, 40, 60, 60],
    xAxis: {
      label: {
        style: {
          fontSize: 14,
          fill: '#000',
          fontWeight: 500,
        },
        offset: 15,
      },
      line: null,
      tickLine: null,
    },
    yAxis: {
      min: 0,
      max: 2500,
      tickCount: 6,
      label: {
        style: {
          fontSize: 14,
          fill: '#000',
          fontWeight: 500,
        },
        offset: 10,
      },
      grid: {
        line: {
          style: {
            stroke: '#d1d5db',
            lineDash: [4, 4],
          },
        },
      },
    },
    lineStyle: {
      stroke: '#1e293b',
      lineWidth: 3,
    },
    point: {
      size: 8,
      shape: 'circle',
      style: {
        fill: '#1e293b',
        stroke: '#1e293b',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: true,
      formatter: (datum) => {
        return { name: datum.day, value: datum.value };
      },
    },
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  return (
    <div className="">
       <div className='pb-6'>
         <Heading text="Calories"/>
       </div>
      <div className="w-full  bg-white rounded-[20px] shadow-lg p-8">
        <Line {...config} />
      </div>
    </div>
  );
};

export default CaloryChart;