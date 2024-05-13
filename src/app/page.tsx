"use client"

import { useState } from 'react'
import SideNav from '@/components/SideNav'
import MainView from '@/components/MainView'
import data from '@/data/data.json'

export default function Home() {
  // Aggregate all commands into a single array
  // 'acc': an array of objects with the properties id, name, and description, 
  // starts as an empty array, passed to SideNav component
  const allCommands = data.categories.reduce<{ id: string; name: string; description: string; }[]>((acc, category) => acc.concat(category.commands), [])

  // Initially select the first command from the first category
  const [selectedCommand, setSelectedCommand] = useState(allCommands[0])

  return (
    <div style={{ display: 'flex' }}>
      <SideNav commands={allCommands} onSelect={setSelectedCommand} />
      <MainView
        command={selectedCommand}
        options={data.categories.find(cat => cat.commands.includes(selectedCommand))?.options}
        examples={data.categories.find(cat => cat.commands.includes(selectedCommand))?.examples}
      />
    </div>
  )
}

