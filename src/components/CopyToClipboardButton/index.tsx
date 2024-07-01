"use client"

import { CopyToClipboardButtonProps } from '@/app/types'
import React, { useState } from 'react'
import style from './CopyToClipboardButton.module.scss'

function CopyToClipboardButton({ text, onCopy }: CopyToClipboardButtonProps) {
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
        <a onClick={handleCopy} className={style.copyCodeButton}>
            {copied ? '✓ Copied' : 'Copy to Clipboard'}
        </a>
    )
}

export default CopyToClipboardButton