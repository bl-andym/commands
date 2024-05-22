"use client"
import { MainViewProps } from '@/app/types'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import CopyToClipboardButton from '../CopyToClipboardButton'

export default function MainView({ data, selected }: MainViewProps) {
    const selectedCategory = data.find(category => category.id === selected.categoryId);
    const selectedCommand = selectedCategory?.commands.find(command => command.id === selected.commandId);

    return (
        <Stack
            component="section"
            sx={{
                p: 2,
                border: '1px solid grey',
                borderRadius: 1,
                flexGrow: 1,
                backgroundColor: 'WhiteSmoke ',
                height: 'auto',
                minHeight: '100vh',
            }}
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
                                </Typography>
                                <Typography component="h2" sx={{
                                    fontSize: 22,
                                    fontWeight: 'bold',
                                    marginBottom: 1,
                                }}>
                                    <Typography component="span" sx={{
                                        fontWeight: 'normal',
                                        fontSize: 16,
                                    }}>Command:</Typography> {selectedCommand.name}
                                </Typography>
                                <Typography component="p">
                                    {selectedCommand.description}
                                </Typography>
                            </CardContent>
                        </Card>

                        {selectedCommand.options.map(option => (
                            <Card sx={{ marginBottom: 1 }} key={option.option}>
                                <CardContent>
                                    <Typography component="span" sx={{
                                        border: '1px solid lightgrey',
                                        padding: '1px 6px',
                                        backgroundColor: 'WhiteSmoke',
                                        color: 'black',
                                        fontSize: 14,
                                        marginBottom: 2,
                                        display: 'inline-block',
                                    }}>Flag:</Typography>
                                    <Typography component="p">
                                        <strong>{option.option}</strong>
                                    </Typography>
                                    <Typography component="p">
                                        {option.description}
                                    </Typography>
                                    <Typography component="p">
                                        Shorthand: {option.shorthand && <span> {option.shorthand}</span>}
                                    </Typography>
                                    <Typography component="p">
                                        Arguments: {option.arguments}
                                    </Typography>
                                    <Typography component="p">
                                        Example: {option.example}
                                    </Typography>
                                    <Typography sx={{ marginTop: 1 }}><CopyToClipboardButton text={option.example} /></Typography>
                                </CardContent>
                            </Card>
                        ))}


                    </div>

                )
            }
        </Stack>
    );
}
