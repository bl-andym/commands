"use client"

export default function SideNav({ commands, onSelect }) {
    const sortedCommands = commands.sort((a, b) => a.name.localeCompare(b.name));

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

