"use client"
import { MainViewProps } from '@/app/types'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import CopyToClipboardButton from '../CopyToClipboardButton'
import style from './MainView.module.scss'

export default function MainView({ data, selected }: MainViewProps) {
    const selectedCategory = data.find(category => category.id === selected.categoryId);
    const selectedCommand = selectedCategory?.commands.find(command => command.id === selected.commandId);

    return (
        <Stack
            component="section"
            sx={{ p: 2 }}
            className={`${style.border} ${style.bg} ${style.dimensions}`}
        >
            {
                selectedCommand && (
                    <div>
                        <Card sx={{ marginBottom: 1 }}>
                            <CardContent>
                                <Typography component="h1" sx={{
                                    fontSize: 24,
                                    fontWeight: 'bold',

                                }}>
                                    {selectedCategory?.name}
                                    <Typography component="span" sx={{
                                        fontSize: 16,
                                        fontWeight: 'normal',
                                    }}> Commands</Typography>
                                </Typography>
                                <Typography component="h2" sx={{
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    marginBottom: 1,
                                }}>
                                    <Typography component="span" sx={{
                                        fontWeight: 'normal',
                                        fontSize: 16,
                                    }}>Command:</Typography>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                        }}
                                    > {selectedCommand.name}</Typography>
                                    <Typography component="span" sx={{
                                        fontSize: 12,
                                        fontWeight: 'normal',
                                    }}> {`#flags: ${selectedCommand.options.length}`}</Typography>
                                </Typography>
                                <Typography component="p">
                                    {selectedCommand.description}
                                </Typography>
                            </CardContent>
                        </Card>

                        {selectedCommand.options.map((option, index) => (
                            <Card sx={{ marginBottom: 1 }} key={option.option}>
                                <CardContent>
                                    <Typography component="span" sx={{
                                        border: '1px solid lightgrey',
                                        padding: '1px 6px',
                                        backgroundColor: 'WhiteSmoke',
                                        color: 'black',
                                        fontSize: 12,
                                        marginBottom: 2,
                                        display: 'inline-block',
                                    }}>{`#Flag: ${index + 1}`}</Typography>
                                    <Typography component="p">
                                        <strong>{option.option}</strong>
                                    </Typography>
                                    {/* <Typography component="p">
                                        {option.description}
                                    </Typography> */}
                                    <Typography component="p">
                                        Shorthand: {option.shorthand && <span> {option.shorthand}</span>}
                                    </Typography>
                                    <Typography component="p">
                                        Arguments: {option.arguments}
                                    </Typography>
                                    <Typography component="p">
                                        Use case: <Typography component="code"
                                            sx={{
                                                backgroundColor: 'WhiteSmoke',
                                                padding: '2px 4px',
                                                fontSize: '1rem',
                                                fontFamily: 'monospace',
                                            }}>
                                            {option.example}
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{ marginTop: 1 }}><CopyToClipboardButton text={option.example} /></Typography>
                                </CardContent>
                                {/* <CardContent>
                                    <Card>
                                        <Typography component="h3">Description:</Typography>
                                        <Typography component="p">
                                            {option.description}
                                        </Typography>
                                        <Typography component="h3">Rational:</Typography>
                                        <Typography component="p">
                                            {option.description}
                                        </Typography>
                                    </Card>
                                </CardContent> */}
                            </Card>
                        ))}
                    </div>
                )
            }
        </Stack>
    );
}
