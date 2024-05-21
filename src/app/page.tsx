"use client"
import React, { useState, useEffect } from 'react'
import { NavProps, Selected, Category } from './types'
import Container from '@mui/material/Container'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import exampleData from '@/data/example.json'
import SideNav from '@/components/SideNav'
import MainView from '@/components/MainView'
import Header from '@/components/Header'

export default function Home() {
  const [data, setData] = useState<NavProps["data"]>([])
  const [defaultCategory, setDefaultCategory] = useState<Category | null>(null)
  const [selected, setSelected] = useState<Selected>({ commandId: 0, categoryId: 0 })

  const handleSelected = (commandId: number, categoryId: number) => {
    setSelected({ commandId, categoryId });
  };

  useEffect(() => {
    // Step 1: Set the component's state 'data' with exampleData
    setData(exampleData)

    // Step 2: Find the default category in the exampleData array
    const defaultCat = exampleData.find((item: Category) => item.default === true)

    // Step 3: Set the component's state 'defaultCategory' with the found default category
    // If no default category is found, set it to null
    setDefaultCategory(defaultCat || null)

    // Step 4: If a default category is found and it has commands
    if (defaultCat && defaultCat.commands.length > 0) {
      // Set the component's state 'selected' to the first command of the default category
      setSelected({ commandId: defaultCat.commands[0].id, categoryId: defaultCat.id })
    }
  }, [])


  return (
    <Container
      component="div"
      sx={{
        display: 'flex',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {data.length === 0 && <div>Loading...</div>}
      {data.length > 0 &&
        <>
          <SideNav data={data} handleSelected={handleSelected} defaultCategory={defaultCategory} />
          <MainView data={data} selected={selected} />
        </>
      }
    </Container>
  );
}
