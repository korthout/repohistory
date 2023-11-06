'use client';

import { Spinner } from '@nextui-org/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        color: '#00000000',
      },
      ticks: {
        maxTicksLimit: 5,
      },
    },
    y: {
      grid: {
        color: '#202225',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface Props {
  title: string;
  data: {
    labels: string[];
    datasets: any[];
  } | null;
}

export default function LineChart({ title, data }: Props) {
  return (
    <div className="flex flex-col items-center rounded-medium border border-[#202225] bg-[#111111] p-2 sm:p-5 xl:w-2/3">
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      {data ? (
        <Line options={options} data={data} />
      ) : (
        <Spinner color="primary" className="py-10" />
      )}
    </div>
  );
}
