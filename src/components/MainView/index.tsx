"use client"
import { MainViewProps } from '@/app/types'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import FlagContent from '@/components/FlagContent'
import style from './MainView.module.scss'


export default function MainView({ data, selected }: MainViewProps) {
    const selectedCategory = data.find(category => category.id === selected.categoryId);
    const selectedCommand = selectedCategory?.commands.find(command => command.id === selected.commandId);

    return (
        <Stack
            component="section"
            sx={{ p: 2 }}
            className={`${style.container}`}
        >
            {
                selectedCommand && (
                    <>
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
                            <FlagContent
                                key={index}
                                option={option.option}
                                shorthand={option.shorthand}
                                args={option.arguments}
                                description={option.description}
                                example={option.example}
                                arg_combinations={option.arg_combinations}
                                idx={index}
                            />
                        ))}
                    </>
                )
            }
        </Stack>
    );
}
