'use client';

import { Card, CardContent, Stack, Typography } from '@mui/material'
import CopyToClipboardButton from '../CopyToClipboardButton'
import style from './FlagContent.module.scss'
import { OptionType } from '@/app/types';

export default function SideNav({
    option,
    shorthand,
    args,
    description,
    example,
    idx,
}: OptionType) {
    return (
        <>
            <Card sx={{ marginBottom: 1 }} key={option}>
                <CardContent>
                    <Typography component="div"
                        className={style.objKey}>
                        <span>{`#Flag: ${idx + 1}`}</span>
                        <span>{option}</span>
                    </Typography>
                    <Typography component="div"
                        className={style.objKey}>
                        <span>#Shorthand:</span>
                        <span>{shorthand}</span>
                    </Typography>
                    <Typography component="div"
                        className={style.objKey}>
                        <span>#Arguments</span>
                        <span>{args}</span>
                    </Typography>
                    <Typography component="p"
                        className={style.content}
                    >
                        {description}
                    </Typography>
                    <Typography component="div"
                        className={style.objKey}>
                        <span>Use case:</span>
                        <span>{example}</span>
                    </Typography>
                    <Typography component="div"
                        className={style.objKey}
                        sx={{ marginTop: 1 }}>
                        <CopyToClipboardButton text={example} />
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
