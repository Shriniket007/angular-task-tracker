export interface Task {
    // ? means optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;   
}