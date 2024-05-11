"use client"

import { useState } from 'react';

export default function MainView({ command, options, examples }) {
    const [copiedIndex, setCopiedIndex] = useState(null);  // State to track copied option index
    const commandOptions = options.filter(option => option.commandId === command.id);
    const commandExamples = commandOptions.map(option =>
        ({ ...option, usage: examples.find(ex => ex.optionId === option.id).usage })
    );

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);  // Set index of copied example
            setTimeout(() => setCopiedIndex(null), 2000);  // Reset after 2 seconds
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

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
                    <button onClick={() => copyToClipboard(commandExamples[index].usage, index)} style={{ cursor: 'pointer' }}>
                        {copiedIndex === index ? '✓ Copied' : 'Copy to Clipboard'}
                    </button>
                </div>
            ))}
        </div>
    );
}

