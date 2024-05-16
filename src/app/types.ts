export interface Option {
    option: string;
    shorthand?: string;
    description: string;
    arguments?: string;
    required: boolean;
    example: string;
}

export interface Command {
    name: string;
    description: string;
    options: Option[];
}

export interface Category {
    id: number;
    name: string;
    commands: Command[];
}

export type Data = Category[];

export interface NavProps {
    data: Data;
}


