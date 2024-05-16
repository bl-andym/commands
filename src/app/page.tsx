"use client"
import React, { useState, useEffect } from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import exampleData from '@/data/example.json'
import { NavProps } from './types'
import SideNav from '@/components/SideNav'

export default function Home() {
  const [data, setData] = useState<NavProps["data"]>([])
  useEffect(() => {
    setData(exampleData)
  }, [])

  return (
    <>
      <SideNav data={data} />
    </>
  );
}