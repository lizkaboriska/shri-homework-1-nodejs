import * as path from 'path';

// Function to check letters and numbers
export function validRepositoryId(repository_id: string) {
    let regex = /^[a-zA-Z0-9_\-]*$/;
    return regex.test(repository_id);
}

export function repositoryFullPathByRepositoryId(REPOSITORIES_DIR: string) {
    return function (repository_id: string) {
        return path.resolve(path.join(REPOSITORIES_DIR, repository_id));
    }
}

