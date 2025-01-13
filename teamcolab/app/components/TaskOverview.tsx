'use client'

import { motion } from 'framer-motion'

const tasks = [
  { id: 1, title: 'Design new landing page', status: 'In Progress' },
  { id: 2, title: 'Implement user authentication', status: 'To Do' },
  { id: 3, title: 'Write API documentation', status: 'Done' },
]

export default function TaskOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
      <ul>
        {tasks.map((task, index) => (
          <motion.li
            key={task.id}
            className="mb-3 p-3 bg-gray-50 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <span>{task.title}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                task.status === 'Done' ? 'bg-green-200 text-green-800' :
                task.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
                'bg-gray-200 text-gray-800'
              }`}>
                {task.status}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

