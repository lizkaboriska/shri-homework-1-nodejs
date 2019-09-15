var express = require('express');
var path = require('path');
var logger = require('morgan');
const fs = require('fs');
const exec = require('child_process').exec;

const REPOSITORIES_DIR = path.normalize(process.argv[2]);
if (!fs.existsSync(REPOSITORIES_DIR)) {
    console.log(`${REPOSITORIES_DIR} directory doesn't exist`);
    process.exit(1);
}

var app = express();

app.use(logger('dev'));
app.use(express.json({type: 'application/*'})); // чтобы не отправлять каждый раз заголовок во время тестирования

// part 1
app.get('/api/repos', (req, res) => {
    if (fs.statSync(REPOSITORIES_DIR).isDirectory()) {
        let repos = [];

        let files = fs.readdirSync(REPOSITORIES_DIR);
        files.forEach(function (filename) {
            let p = path.join(REPOSITORIES_DIR, filename);
            let git_folder = path.join(p, '.git');
            if (fs.statSync(p).isDirectory() &&
                fs.existsSync(git_folder) &&
                fs.statSync(git_folder).isDirectory()) {
                    repos.push(filename);
            }
        });

        res.json(repos);
    };
});

// part 2
app.get('/api/repos/:repositoryId/commits/:commitHash', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let commit_hash = req.params.commitHash;

    let command = `cd ${repo_dir} && git log --pretty=format:"%h%x09%an%x09%ad%x09%s" ${commit_hash}`;

    exec(command, (e, stdout)=> {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }

        let commits = [];
        for (let line of stdout.split('\n')) {
            let commit = line.split('\t');

            commits.push({
                sha: commit[0],
                author: commit[1],
                date: commit[2],
                message: commit[3]
            });
        }
        res.json(commits);
    });
});

// part 3
app.get('/api/repos/:repositoryId/commits/:commitHash/diff', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let commit_hash = req.params.commitHash;

    let command = `cd ${repo_dir} && git show --pretty=format:%b ${commit_hash}`;
    exec( command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        res.json({'diff': stdout});
    });
});

// part 5
app.get('/api/repos/:repositoryId/blob/:commitHash/:pathToFile', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let commit_hash = req.params.commitHash;
    let path_to_file = req.params.pathToFile;

    let command = `cd ${repo_dir}  && git show ${commit_hash}:${path_to_file}`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        res.json({'file': stdout.split('\n').filter((line) => line !== '')});
    });
});

// part 4
app.get('/api/repos/:repositoryId', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);

    let command = `cd ${repo_dir} && git ls-tree -r master --name-only`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        let lines = stdout.split('\n');
        let filtered = lines.filter((value) => value !== '');
        res.json({'files': filtered});
    });
});

// app.get('/api/repos/:repositoryId/tree/:commitHash/:path', (req, res) => {
//     if (!validRepositoryId(req.params.repositoryId)) {
//         res.status(400).end();
//         return;
//     }
//     let repo_dir = repositoryFullPath(req.params.repositoryId);
//     let commit_hash = req.params.commitHash;
//     let path_to_folder = req.params.path;
//
//     let command = `cd ${repo_dir} && git show ${commit_hash}:${path_to_folder}`;
//     exec(command, (e, stdout, stderr) => {
//         if (e instanceof Error) {
//             res.status(404).end();
//             return;
//         }
//         let lines = stdout.split('\n');
//         let filtered = lines.filter((value, index) => value !== '' && index !== 0);
//         res.json({'files': filtered});
//     });
// });

// part 6
app.delete('/api/repos/:repositoryId', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);

    let command = `rm -rf ${repo_dir}`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        res.status(200).end();
    });
});

//part 7
app.post('/api/repos/:repositoryId', (req, res) => {
    let repo_to_clone_url = req.body.url;
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);

    let command = `git clone ${repo_to_clone_url} ${repo_dir}`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            console.log("Error occured: " + e);
            res.status(400).end();
            return;
        }
        res.status(200).end();
    });
});

//bonus

// /api/repos/:repositoryId/:commitHash/?skip=2&number=3
app.get('/api/repos/:repositoryId/:commitHash/', (req, res) => {
    if (!validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let skip = req.query.skip;
    let number = req.query.number;
    let commit_hash = req.params.commitHash;

    let command = `cd ${repo_dir} && git log --pretty=format:"%h%x09%an%x09%ad%x09%s" --skip=${skip} -n ${number} ${commit_hash}`;
    exec(command, (e, stdout, stderr)=> {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }

        stdout = stdout.split('\n').filter((line) => line !== '');
        let commits = [];

        for (let line of stdout) {
            let commit = line.split('\t');

            commits.push({
                sha: commit[0],
                author: commit[1],
                date: commit[2],
                message: commit[3]

            });
        }
        res.json(commits);
    });
});

// Function to check letters and numbers
function validRepositoryId(repository_id) {
    let regex = /^[a-zA-Z0-9_\-]*$/;
    return regex.test(repository_id);
}

function repositoryFullPath(repository_id) {
    return path.resolve(path.join(REPOSITORIES_DIR, repository_id));
}


module.exports = app;
