// src/components/FlagContent/index.tsx
'use client';

import { Card, CardContent, Box, Typography } from '@mui/material'
import CopyToClipboardButton from '../CopyToClipboardButton'
import style from './FlagContent.module.scss'
import { OptionType } from '@/app/types'

export default function FlagContent({
    option,
    shorthand,
    args,
    description,
    example,
    idx,
    arg_combinations = [], // default to an empty array
}: OptionType) {
    return (
        <>
            <Card sx={{ marginBottom: 1 }} key={option}>
                <CardContent>
                    <Typography component="div" className={style.objKey}>
                        <span>{`#Flag: ${idx + 1}`}</span>
                        <span>{option}</span>
                    </Typography>
                    <Typography component="div" className={style.objKey}>
                        <span>#Shorthand:</span>
                        <span>{shorthand}</span>
                    </Typography>
                    <Typography component="div" className={style.objKey}>
                        <span>#Argument:</span>
                        <span>{args}</span>
                    </Typography>
                    <Typography component="p" className={style.content}>
                        {description}
                    </Typography>
                    <Typography component="div" className={style.objKey}>
                        <span>Use case:</span>
                        <span>{example}</span>
                    </Typography>
                    <Typography component="div" className={style.objKey} sx={{ marginTop: 1 }}>
                        <CopyToClipboardButton text={example} />
                    </Typography>
                    <Typography component="div" className={style.toggle} sx={{ marginTop: 1 }}>
                        <h3>Argument combinations:</h3>
                        {
                            arg_combinations.map((item, idx) => (
                                <>
                                    <Card component="div" className={style.innerCard}>
                                        <Typography component="div" className={style.objKey} key={idx}>
                                            <span>#Argument:</span>
                                            <span>{item.arg}</span>
                                        </Typography>
                                        <Typography component="p" className={style.content}>
                                            {item.description}
                                        </Typography>
                                        <Typography component="div" className={style.objKey}>
                                            <span>Use case:</span>
                                            <span>{item.example}</span>
                                        </Typography>
                                        <Typography component="div" className={style.objKey} sx={{ marginTop: 1 }}>
                                            <CopyToClipboardButton text={item.example} />
                                        </Typography>
                                    </Card>
                                </>
                            ))
                        }
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
