var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

const fs = require('fs');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;

const REPOSITORIES_DIR = path.normalize(process.argv[2]);
if (!fs.existsSync(REPOSITORIES_DIR)) {
    console.log(`${REPOSITORIES_DIR} directory doesn't exist`);
    process.exit(1);
}

const parsing = require("./parsing");
const utils = require("./utils");
const repositoryFullPath = utils.repositoryFullPathByRepositoryId(REPOSITORIES_DIR);

var app = express();
app.use(cors({origin: true}));
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
    if (!utils.validRepositoryId(req.params.repositoryId)) {
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

        let commits = parsing.parseCommitsFromGitLog(stdout);
        res.json(commits);
    });
});

// part 3
app.get('/api/repos/:repositoryId/commits/:commitHash/diff', (req, res) => {
    if (!utils.validRepositoryId(req.params.repositoryId)) {
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

// part 4
// app.get('/api/repos/:repositoryId', (req, res) => {
//     if (!utils.validRepositoryId(req.params.repositoryId)) {
//         res.status(400).end();
//         return;
//     }
//     let repo_dir = repositoryFullPath(req.params.repositoryId);
//
//     let command = `cd ${repo_dir} && git ls-tree -r master --name-only`;
//     exec(command, (e, stdout, stderr) => {
//         if (e instanceof Error) {
//             res.status(404).end();
//             return;
//         }
//         let lines = stdout.split('\n');
//         let filtered = lines.filter((value) => value !== '');
//         res.json({'files': filtered});
//     });
// });

// список файлов и директорий в репозиторие
app.get('/api/repos/:repositoryId', (req, res) => {
    if (!utils.validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }

    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let relative_path = req.query.path || ".";
    let full_path = path.join(repo_dir, relative_path);
    console.log("full_path: ", full_path);


    let command = `cd ${full_path} && git ls-tree master`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        const files = parsing.parseFilesFromGitLsTree(stdout);
        res.json(files);
    });
});

// список бранчей для вкладки
app.get('/api/repos/:repositoryId/branches', (req, res) => {
    if (!utils.validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);

    let command = `cd ${repo_dir} && git for-each-ref --sort=-committerdate`;
    exec(command, (e, stdout, stderr) => {
        if (e instanceof Error) {
            res.status(404).end();
            return;
        }
        const branches = parsing.parseBranchesFromGitForEachRef(stdout);
        res.json(branches);
    });
});


// part 5
app.get('/api/repos/:repositoryId/blob/:commitHash/:pathToFile(*)', (req, res) => {
    // query parameters
    const skip_content = req.query.skip_content;

    if (!utils.validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let commit_hash = req.params.commitHash;
    let path_to_file = req.params.pathToFile;

    let response = {};
    let command;

    if (!skip_content) {
        command = `cd ${repo_dir} && git show ${commit_hash}:${path_to_file}`;
        let output = execSync(command).toString();
        response.lines = parsing.parseFileLinesFromGitShow(output);
        console.log("lines: " + response.lines);
    }

    command = `cd ${repo_dir} && git rev-list -1 ${commit_hash} ${path_to_file}`;
    let output = execSync(command).toString();
    response.last_sha = parsing.parseLastShaFromGitRevList(output);
    console.log("last_sha: " + response.last_sha);


    console.log(response);
    res.json(response);
});

// part 6
app.delete('/api/repos/:repositoryId', (req, res) => {
    if (!utils.validRepositoryId(req.params.repositoryId)) {
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
    if (!utils.validRepositoryId(req.params.repositoryId)) {
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


// /api/repos/sixth-dir/master/?number=1
// /api/repos/:repositoryId/:commitHash/?skip=2&number=3
app.get('/api/repos/:repositoryId/:commitHash/', (req, res) => {
    if (!utils.validRepositoryId(req.params.repositoryId)) {
        res.status(400).end();
        return;
    }
    let repo_dir = repositoryFullPath(req.params.repositoryId);
    let skip = req.query.skip || 0;
    let number = req.query.number || 10;
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



// FOR REACT HOMEWORK




// Список веток с хэшами
//
// app.get('/api/repos/:repositoryId/b/', (req, res) => {
//     if (!utils.validRepositoryId(req.params.repositoryId)) {
//         res.status(400).end();
//         return;
//     }
//     let repo_dir = repositoryFullPath(req.params.repositoryId);
//
//     let command = `cd ${repo_dir} && git ls-tree master`;
//     exec(command, (e, stdout, stderr) => {
//         if (e instanceof Error) {
//             res.status(404).end();
//             return;
//         }
//         let lines = stdout.split('\n');
//         let filtered = lines.filter((value) => value !== '');
//         let files = [];
//         for (let line of filtered) {
//             let file = line.split(' ');
//             let rest = file[2].split('\t');
//             files.push({
//                 type: file[1],
//                 sha: rest[0],
//                 name: rest[1]
//             });
//         }
//         res.json(files);
//     });
// });




module.exports = app
