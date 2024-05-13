"use client"

import { useState } from 'react';
import CopyToClipboardButton from '../CopyToClipboardButton';

export default function MainView({ command, options, examples }) {
    const [copiedIndex, setCopiedIndex] = useState(null);  // track copied option index state in copy to clipboard
    const commandOptions = options.filter(option => option.commandId === command.id);
    const commandExamples = commandOptions.map(option =>
        ({ ...option, usage: examples.find(ex => ex.optionId === option.id).usage })
    );

    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <h1>{command.name}</h1>
            <p>{command.description}</p>
            <h2>Options</h2>
            {commandOptions.map((option, index) => (
                <div key={option.id}>
                    <h3>{option.name}</h3>
                    <p>{option.description}</p>
                    <p><strong>Example:</strong> {commandExamples[index].usage}</p>
                    <CopyToClipboardButton
                        text={commandExamples[index].usage}
                        onCopy={() => setCopiedIndex(index)}
                    />
                </div>
            ))}
        </div>
    );
}
