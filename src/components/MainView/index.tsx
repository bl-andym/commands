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
                        <Card className={`${style.commandHeader}`}>
                            <CardContent>
                                <Typography component="h1">
                                    {selectedCategory?.name}
                                    <span> Commands</span>
                                </Typography>
                                <Typography component="h2">
                                    <span>Command:</span>
                                    <span> {selectedCommand.name}</span>
                                    <span> {`#flags: ${selectedCommand.options.length}`}</span>
                                </Typography>
                                <p>{selectedCommand.description}</p>
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
