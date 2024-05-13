"use client"

// [] indicates that multiple objects can be included in the array.
interface Command {
    commands: { name: string, id: string }[]
    onSelect: (command: { name: string, id: string }) => void
}

export default function SideNav({ commands, onSelect }: Command) {
    const sortedCommands = commands.sort((a, b) => a.name.localeCompare(b.name))

    // eslint-disable-next-line no-console
    console.log('SideNav: Receiving destructured commands from selectedCommands: ', commands)

    return (
        <div style={{ width: '200px', background: '#eee', padding: '20px' }}>
            {sortedCommands.map(command => (
                <div key={command.id} onClick={() => onSelect(command)} style={{ padding: '10px', cursor: 'pointer' }}>
                    {command.name}
                </div>
            ))}
        </div>
    );
}

