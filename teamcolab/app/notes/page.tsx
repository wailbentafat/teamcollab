'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Project Ideas', content: 'Brainstorm new features for our app' },
    { id: 2, title: 'Meeting Notes', content: 'Discuss Q3 goals and objectives' },
  ])

  const [newNote, setNewNote] = useState({ title: '', content: '' })

  const addNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (newNote.title && newNote.content) {
      setNotes([...notes, { id: Date.now(), ...newNote }])
      setNewNote({ title: '', content: '' })
    }
  }

  return (
    <div className="p-6">
      <motion.h1
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shared Notes
      </motion.h1>
      <motion.form
        onSubmit={addNote}
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Note Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Note Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
          rows={3}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </motion.form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p>{note.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

