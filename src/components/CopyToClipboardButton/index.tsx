"use client"

import React, { useState } from 'react'

function CopyToClipboardButton({ text, onCopy }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000);  // Show copied status for 2 seconds
            if (onCopy) {
                onCopy()
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
        })
    }

    return (
        <button onClick={handleCopy} style={{ cursor: 'pointer' }}>
            {copied ? '✓ Copied' : 'Copy to Clipboard'}
        </button>
    )
}

export default CopyToClipboardButton