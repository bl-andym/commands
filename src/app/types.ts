export interface Option {
    option: string;
    shorthand?: string;
    description: string;
    arguments?: string;
    required: boolean;
    example: string;
}

export interface Command {
    id: number;
    name: string;
    description: string;
    options: Option[];
}

export interface Category {
    id: number;
    name: string;
    commands: Command[];
    default: boolean;
}

export type Data = Category[];

export interface NavProps {
    data: Data;
    handleSelected: (commandId: number, categoryId: number) => void;
}

export interface MainViewProps {
    data: Data;
    selected: Selected;
}

export interface Selected {
    commandId: number;
    categoryId: number;
}

export interface CopyToClipboardButtonProps {
    text: string;
    onCopy?: () => void;
}


