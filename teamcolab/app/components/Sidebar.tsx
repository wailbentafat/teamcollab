'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, FileText, CheckSquare, BarChart2 } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: FileText, label: 'Notes', href: '/notes' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  { icon: BarChart2, label: 'Progress', href: '/progress' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="w-64 bg-white shadow-lg"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">TeamCollab</h1>
      </div>
      <ul className="mt-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <motion.div
                className={`flex items-center px-4 py-3 text-gray-700 ${
                  pathname === item.href ? 'bg-gray-200' : ''
                }`}
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

