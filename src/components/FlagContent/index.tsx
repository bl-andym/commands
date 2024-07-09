// src/components/FlagContent/index.tsx
'use client';

import { Card, CardContent, Box, Typography } from '@mui/material'
import CopyToClipboardButton from '../CopyToClipboardButton'
import style from './FlagContent.module.scss'
import { OptionType } from '@/app/types'
import { useState } from 'react';

export default function FlagContent({
    option,
    shorthand,
    args,
    description,
    example,
    idx,
    arg_combinations = [], // default to an empty array
}: OptionType) {

    // Step 1: Initialize state
    const [isChecked, setIsChecked] = useState(false);
    // Step 3: Handle changes
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <Card sx={{ marginBottom: 1 }} key={option} className={`${style.flagWrap}`}>
                <CardContent className={`${style.flagContent}`}>
                    <Typography component="div" className={`${style.flagHeading}`}>
                        <span>{`#Flag: ${idx + 1}`}</span>
                        <span>{option}</span>
                    </Typography>
                    <Typography component="div" className={`${style.flagHeading}`}>
                        <span>#Shorthand:</span>
                        <span>{shorthand}</span>
                    </Typography>
                    <Typography component="div" className={`${style.flagHeading}`}>
                        <span>#Argument:</span>
                        <span>{args}</span>
                    </Typography>
                    <Typography component="p" className={`${style.description}`}>
                        {description}
                    </Typography>
                    <Box
                        component="div"
                        className={style.cardFooter}>
                        <Typography component="div" className={`${style.flagHeading}`}>
                            <span>Use case:</span>
                            <span>{example}</span>
                        </Typography>
                        <Typography component="div" className={`${style.flagHeading}`} sx={{ marginTop: 1 }}>
                            <CopyToClipboardButton text={example} />
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ marginTop: 1 }}
                            className={`${style.toggleWrap}`}
                        >
                            <input
                                id={`id_${idx + 1}`}
                                type="checkbox"
                                name={`name_${idx + 1}`}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label
                                htmlFor={`id_${idx + 1}`}
                                className={`${style.toggleControl}`}
                            ><span>Args</span> <span>(#{arg_combinations.length})</span>:</label>


                            <Typography component="div" className={`${style.toggle}`} sx={{ marginTop: 1 }}>
                                <h3 className={`${style.toggleHeading}`}>Argument combinations:</h3>
                                {
                                    arg_combinations.map((item, idx) => (
                                        <>
                                            <Card component="div" className={`${style.innerCard}`} key={idx}>
                                                <Typography component="div" className={`${style.flagHeading}`}>
                                                    <span>#Argument:</span>
                                                    <span>{item.arg}</span>
                                                </Typography>
                                                <p className={`${style.content}`}>
                                                    {item.description}
                                                </p>
                                                <Typography component="div" className={`${style.flagHeading}`}>
                                                    <span>Use case:</span>
                                                    <span>{item.example}</span>
                                                </Typography>
                                                <Typography component="div" className={`${style.flagHeading}`} sx={{ marginTop: 1 }}>
                                                    <CopyToClipboardButton text={item.example} />
                                                </Typography>
                                            </Card>
                                        </>
                                    ))
                                }
                            </Typography>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
