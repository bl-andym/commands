"use client"

import { useState } from 'react'
import SideNav from '@/components/SideNav'
import MainView from '@/components/MainView'
import data from '@/data/data.json'

export default function Home() {
  const [selectedCommand, setSelectedCommand] = useState(data.commands[0]);

  return (
    <div style={{ display: 'flex' }}>
      <SideNav commands={data.commands} onSelect={setSelectedCommand} />
      <MainView command={selectedCommand} options={data.options} examples={data.examples} />
    </div>
  );
}
