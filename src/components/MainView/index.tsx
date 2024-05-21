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
                        <h2>{selectedCategory?.name}</h2>
                        <div key={selectedCommand.id}>
                            <h3>{selectedCommand.name}</h3>
                            <p>{selectedCommand.description}</p>
                            <ul>
                                {selectedCommand.options.map(option => (
                                    <li key={option.option}>
                                        <strong>{option.option}</strong> - {option.description}
                                        {/*option.shorthand && <span> ({option.shorthand})</span>*/}
                                        {option.arguments && <div>Arguments: {option.arguments}</div>}
                                        <div>Example: {option.example}</div>
                                        <CopyToClipboardButton text={option.example} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </Stack>
    );
}
