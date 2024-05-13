"use client"

import { useState } from 'react'
import SideNav from '@/components/SideNav'
import MainView from '@/components/MainView'
import data from '@/data/data.json'

export default function Home() {
  const [selectedCommand, setSelectedCommand] = useState(data.categories[0].commands);

  return (
    <div style={{ display: 'flex' }}>
      <SideNav commands={data.categories[0].commands} onSelect={setSelectedCommand} />
      <MainView command={selectedCommand} options={data.categories[0].options} examples={data.categories[0].examples} />
    </div>
  );
}
