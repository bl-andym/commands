'use client';

import { NavProps, Category } from '../../app/types';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

import style from './SideNav.module.scss';

export default function SideNav({
    data,
    handleSelected,
    defaultCategory,
}: NavProps) {
    const [expanded, setExpanded] = useState<number>(
        defaultCategory ? defaultCategory.id : 0
    );
    const [activeNavItem, setActiveNavItem] = useState<number | null>(null);

    const handleListItemClick = (
        //event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setActiveNavItem(index);
    };

    useEffect(() => {
        if (defaultCategory) {
            setExpanded(defaultCategory.id);
            // Reset active item when default category changes
            setActiveNavItem(defaultCategory.commands[0].id);
        }
    }, [defaultCategory]);

    const handleChange = (categoryId: number) => () => {
        setExpanded(categoryId);
        // Reset active item when changing category
        setActiveNavItem(null);
    };

    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Stack
            component="section"
            sx={{
                p: 2,
                minWidth: 300,
                maxWidth: 300,
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                minHeight: '100vh',
                marginRight: 1,
            }}
            className={`${style.border} ${style.background}`}
        >
            {sortedData.map((category: Category) => (
                <Accordion
                    key={category.id}
                    expanded={expanded === category.id}
                    onChange={handleChange(category.id)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            backgroundColor: 'DarkGray',
                        }}
                    >
                        <Typography component="h2">{category.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: 'LightGray',
                        }}
                    >
                        <List>
                            {category.commands
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((command) => (
                                    <ListItem
                                        key={command.id}
                                        component="div"
                                        disablePadding
                                    >
                                        <ListItemButton
                                            selected={activeNavItem === command.id}
                                            onClick={() => {
                                                handleListItemClick(command.id);
                                                handleSelected(
                                                    command.id,
                                                    category.id
                                                );
                                            }}
                                            style={{
                                                cursor: 'pointer',
                                                width: '100%',
                                            }}
                                        >
                                            <ListItemText>
                                                {command.name}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    );
}
