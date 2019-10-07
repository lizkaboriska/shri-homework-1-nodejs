function parseCommitsFromGitLog(output) {
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

function parseFilesFromGitLsTree(output) {
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

function parseBranchesFromGitForEachRef(output) {
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

function parseFileLinesFromGitShow (lines) {
    return lines = lines.split('\n').filter((line) => line !== '');
}

function parseLastShaFromGitRevList (last_sha) {
    return last_sha = last_sha.split('\n').filter((line) => line !== '')[0];
}

module.exports = {
    parseCommitsFromGitLog,
    parseFilesFromGitLsTree,
    parseBranchesFromGitForEachRef,
    parseFileLinesFromGitShow,
    parseLastShaFromGitRevList
};