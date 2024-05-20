"use client"
import React, { useState, useEffect } from 'react'
import { NavProps, Selected } from './types'
import Container from '@mui/material/Container'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import exampleData from '@/data/example.json'
import SideNav from '@/components/SideNav'
import MainView from '@/components/MainView'

export default function Home() {
  const [data, setData] = useState<NavProps["data"]>([])

  // manage the state of the selected ID
  // pass it down to both the SideNav and MainView
  const [selected, setSelected] = useState<Selected>({ commandId: 0, categoryId: 0 })

  const handleSelected = (commandId: number, categoryId: number) => {
    setSelected({ commandId, categoryId });
  };

  useEffect(() => {
    setData(exampleData)
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
          <SideNav data={data} handleSelected={handleSelected} />
          <MainView data={data} selected={selected} />
        </>
      }
    </Container>
  );
} 