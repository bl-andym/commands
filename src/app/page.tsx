'use client';

import React, { useState, useEffect } from 'react';
import { NavProps, Selected, Category } from './types';
import { Box, Container } from '@mui/material';

import '../styles/global.scss';
import '../styles/variables.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SideNav from '@/components/SideNav';
import MainView from '@/components/MainView';
import Header from '@/components/Header';

export default function Home() {
    const [data, setData] = useState<NavProps['data']>([]);
    const [defaultCategory, setDefaultCategory] = useState<Category | null>(
        null
    );
    const [selected, setSelected] = useState<Selected>({
        commandId: 0,
        categoryId: 0,
    });

    const handleSelected = (commandId: number, categoryId: number) => {
        setSelected({ commandId, categoryId });
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                console.log('Fetched data:', result);

                if (!Array.isArray(result)) {
                    throw new Error('Fetched data is not an array');
                }

                setData(result);

                const defaultCat = result.find(
                    (item: Category) => item.default === true
                );
                setDefaultCategory(defaultCat || null);

                if (defaultCat && defaultCat.commands.length > 0) {
                    setSelected({
                        commandId: defaultCat.commands[0].id,
                        categoryId: defaultCat.id,
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <Container
            component="div"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                margin: 0,
                paddingLeft: 0,
                paddingRight: 0,
            }}
        >
            {data.length === 0 && <div>Loading...</div>}
            {data.length > 0 && (
                <>
                    <Header />
                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            width: '100%',
                            height: '100%',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <SideNav
                            data={data}
                            handleSelected={handleSelected}
                            defaultCategory={defaultCategory}
                        />
                        <MainView data={data} selected={selected} />
                    </Box>
                </>
            )}
        </Container>
    );
}
