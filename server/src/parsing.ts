import { Commit, Branch, FileDetails } from './interfaces';

export function parseCommitsFromGitLog(output: string): Commit[] {
    let commits = [];

    for (let line of output.split('\n')) {
        let commit = line.split('\t');

        commits.push({
            sha: commit[0],
            author: commit[1],
            date: commit[2],
            message: commit[3]
        });
    }

    return commits;
}

export function parseFilesFromGitLsTree(output: string): FileDetails[] {
    let lines = output.split('\n');
    let filtered = lines.filter((value) => value !== '');

    let files = [];
    for (let line of filtered) {
        let file = line.split(' ');
        let rest = file[2].split('\t');
        files.push({
            type: file[1],
            object: rest[0],
            name: rest[1]
        });
    }
    return files;
}

export function parseBranchesFromGitForEachRef(output: string): Branch[] {
    let lines = output.split('\n');
    let filtered = lines.filter((value) => value !== '');

    let branches = [];
    for (let line of filtered) {
        let branch = line.split(' ');
        let rest = branch[1].split('\t');
        branches.push({
            type: rest[0],
            sha: branch[0],
            name: rest[1]
        });
    }
    return branches;
}

export function parseFileLinesFromGitShow (lines: string): string[] {
    return lines.split('\n').filter((line) => line !== '');
}

export function parseLastShaFromGitRevList (last_sha: string): string {
    return last_sha.split('\n').filter((line) => line !== '')[0];
}
