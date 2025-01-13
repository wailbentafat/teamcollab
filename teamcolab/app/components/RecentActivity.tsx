'use client'

import { motion } from 'framer-motion'

const activities = [
  { id: 1, user: 'Alice', action: 'commented on', item: 'Project Roadmap' },
  { id: 2, user: 'Bob', action: 'completed', item: 'User Research' },
  { id: 3, user: 'Charlie', action: 'created', item: 'New Design Mockup' },
]

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((activity, index) => (
          <motion.li
            key={activity.id}
            className="mb-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="font-medium">{activity.user}</span>{' '}
            {activity.action}{' '}
            <span className="text-blue-600">{activity.item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

