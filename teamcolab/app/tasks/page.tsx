'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import TaskModal from '../components/TaskModal'

interface Task {
  id: string
  content: string
}

interface TaskColumns {
  [key: string]: Task[]
}

const initialTasks: TaskColumns = {
  todo: [
    { id: 'task-1', content: 'Design new logo' },
    { id: 'task-2', content: 'Implement user authentication' },
  ],
  inProgress: [
    { id: 'task-3', content: 'Develop landing page' },
  ],
  done: [
    { id: 'task-4', content: 'Set up CI/CD pipeline' },
  ],
}

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [currentColumn, setCurrentColumn] = useState<string | null>(null)

  const openModal = (column: string, task: Task | null = null) => {
    setCurrentColumn(column)
    setCurrentTask(task)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentTask(null)
    setCurrentColumn(null)
  }

  const addOrUpdateTask = (column: string, taskContent: string) => {
    if (currentTask) {
      // Update existing task
      const updatedTasks = tasks[column].map(task =>
        task.id === currentTask.id ? { ...task, content: taskContent } : task
      )
      setTasks({ ...tasks, [column]: updatedTasks })
    } else {
      // Add new task
      const newTask = { id: `task-${Date.now()}`, content: taskContent }
      setTasks({ ...tasks, [column]: [...tasks[column], newTask] })
    }
    closeModal()
  }

  const deleteTask = (column: string, taskId: string) => {
    const updatedTasks = tasks[column].filter(task => task.id !== taskId)
    setTasks({ ...tasks, [column]: updatedTasks })
  }

  return (
    <div className="p-6">
      <motion.h1
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Task Board
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(tasks).map(([columnId, columnTasks], index) => (
          <motion.div
            key={columnId}
            className="bg-gray-100 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4 capitalize flex justify-between items-center">
              {columnId}
              <motion.button
                onClick={() => openModal(columnId)}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={20} />
              </motion.button>
            </h2>
            <ul className="min-h-[200px] space-y-2">
              <AnimatePresence>
                {columnTasks.map((task, index) => (
                  <motion.li
                    key={task.id}
                    className="bg-white p-3 rounded shadow-sm flex justify-between items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{task.content}</span>
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => openModal(columnId, task)}
                        className="text-blue-500 hover:text-blue-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit2 size={16} />
                      </motion.button>
                      <motion.button
                        onClick={() => deleteTask(columnId, task.id)}
                        className="text-red-500 hover:text-red-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        ))}
      </div>
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={(content) => currentColumn && addOrUpdateTask(currentColumn, content)}
        initialContent={currentTask?.content}
      />
    </div>
  )
}
