export interface ResponseCustom {
    lines: string[];
    last_sha: string;
}

export interface Commit {
    sha: string;
    author: string;
    date: string;
    message: string;
}

export interface FileDetails {
    type: string;
    object: string;
    name: string;
}

export interface Branch {
    type: string;
    sha: string;
    name: string;
}