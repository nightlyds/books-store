export type BookType = {
    id: number;
    title: string;
    author: string;
    ISBN: string;
};

export type BooksObjectTypes = {
    [key: string]: any;
}; // Types for the Book Object

export interface LoadUpTypes {
    type: string;
}

export interface LoadUpBookTypes {
    type: string;
    id: number;
}

export interface BooksTypes {
    type: string;
    books: BooksObjectTypes;
}

export interface BookLoadTypes {
    type: string;
    book: BooksObjectTypes;
}

export interface AddBookTypes {
    type: string;
    data: BookType;
}

export interface EditBookTypes {
    type: string;
    data: BookType;
    id: number;
}

export interface LoadingTypes {
    type: string;
    loading: boolean;
}

export interface ErrorTypes {
    type: string;
    error: boolean;
}

export interface BookDeleteTypes {
    type: string;
    id: number;
}
