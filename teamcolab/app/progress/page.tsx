'use client'

import { motion } from 'framer-motion'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Team Progress',
    },
  },
}

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

const data = {
  labels,
  datasets: [
    {
      label: 'Tasks Completed',
      data: [12, 19, 15, 22],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'Tasks In Progress',
      data: [8, 5, 10, 7],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
  ],
}

export default function Progress() {
  return (
    <div className="p-6">
      <motion.h1
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Progress Tracking
      </motion.h1>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Bar options={options} data={data} />
      </motion.div>
    </div>
  )
}

