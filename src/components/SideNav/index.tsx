"use client"

import { NavProps, Category } from '../../app/types'
import { Box, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'

export default function SideNav({ data, handleSelected, defaultCategory }: NavProps) {
    const [expanded, setExpanded] = useState<number>(defaultCategory ? defaultCategory.id : 0)
    const [activeNavItem, setActiveNavItem] = useState<number | null>(null)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setActiveNavItem(index)
    }

    useEffect(() => {
        if (defaultCategory) {
            setExpanded(defaultCategory.id);
            if (defaultCategory.commands.length > 0) {
                setActiveNavItem(defaultCategory.commands[0].id)
            }
        }
    }, [defaultCategory])

    const handleChange =
        (categoryId: number) => () => {
            setExpanded(categoryId)
        };

    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name))

    return (
        <Stack component="section" sx={{
            p: 2,
            border: '1px solid grey',
            minWidth: 300,
            maxWidth: 300,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            height: 'auto',
            minHeight: '100vh',
            backgroundColor: 'lightblue',
            marginRight: 1,
        }}>
            {sortedData.map((category: Category) => (
                <Accordion
                    key={category.id}
                    expanded={expanded === category.id}
                    onChange={handleChange(category.id)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{
                        backgroundColor: 'DarkGray',
                    }}>
                        <Typography component="h2">{category.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: 'LightGray',
                    }}>
                        <List>
                            {category.commands.map(command => (
                                <ListItem key={command.id} component="div" disablePadding>
                                    <ListItemButton
                                        selected={activeNavItem === command.id}
                                        onClick={(event) => {
                                            handleListItemClick(event, command.id)
                                            handleSelected(command.id, category.id)
                                        }}
                                        style={{ cursor: 'pointer', width: '100%' }}
                                    >
                                        <ListItemText>{command.name}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    )
}
