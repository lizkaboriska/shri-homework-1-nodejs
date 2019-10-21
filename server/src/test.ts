export = {}

import { expect } from 'chai';
import * as parsing from './parsing';
import {repositoryFullPathByRepositoryId, validRepositoryId} from './utils';
import {Commit, FileDetails, Branch} from './interfaces';

describe('repository name checker', () => {
  it('validRepositoryId пропускает валидные пути', () => {
    expect(validRepositoryId("valid_path")).equal(true);
    expect(validRepositoryId("valid-path")).equal(true);
  })

  it('validRepositoryId не пропускает пути со слэшем', () => {
    expect(validRepositoryId("incorrect/path")).equal(false);
  })

  it('validRepositoryId не позволяет уйти в родительскую папку', () => {
    expect(validRepositoryId("../incorrect-path")).equal(false);
  })
});

describe('repository full path construction', () => {
    it('repositoryFullPathByRepositoryId корректно формирует путь к папке', () => {
        expect(repositoryFullPathByRepositoryId("root")('folder')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
        expect(repositoryFullPathByRepositoryId("root/")('folder')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
        expect(repositoryFullPathByRepositoryId("root/./")('/folder')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
        expect(repositoryFullPathByRepositoryId("root")('folder///')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
        expect(repositoryFullPathByRepositoryId("root////")('folder')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
        expect(repositoryFullPathByRepositoryId("root/subfolder/..")('//////folder')).equal("/Users/elizavetaborisova/WebstormProjects/shri/git-http-api/root/folder");
    })
});

function expectGitLogParsingIsCorrect(text: string, commits_expected: Commit[]) {
    const commits_got = parsing.parseCommitsFromGitLog(text);
    expect(commits_got).to.deep.equal(commits_expected);
}

describe('git log parsing', () => {
    it('works', () => {
        expectGitLogParsingIsCorrect(
            `3f343c3\tElizaveta Borisova\tSun Oct 6 22:37:30 2019 +0300\tAdd repositories folder to .gitignore\n` +
                 `684f0dc\tElizaveta Borisova\tSun Sep 29 18:54:25 2019 +0300\tAdd redux README\n` +
                 `e8be43b\tElizaveta Borisova\tSun Sep 29 16:04:21 2019 +0300\tAdd redux bundle to html`,
            [
                {
                    sha: "3f343c3",
                    author: "Elizaveta Borisova",
                    date: "Sun Oct 6 22:37:30 2019 +0300",
                    message: "Add repositories folder to .gitignore"
                },
                {
                    sha: "684f0dc",
                    author: "Elizaveta Borisova",
                    date: "Sun Sep 29 18:54:25 2019 +0300",
                    message: "Add redux README"
                },
                {
                    sha: "e8be43b",
                    author: "Elizaveta Borisova",
                    date: "Sun Sep 29 16:04:21 2019 +0300",
                    message: "Add redux bundle to html"
                },
            ]
        )
    })
});

function expectGitLsTreeParsingIsCorrect(text: string, expected: FileDetails[]) {
    const actual = parsing.parseFilesFromGitLsTree(text);
    expect(actual).to.deep.equal(expected);
}

describe('git ls-tree parsing', () => {
    it('works', () => {
        expectGitLsTreeParsingIsCorrect(
            `100644 blob 4f7589ecc9615cd763e38fcf8293d7ddab305d18\t.gitignore\n` +
            `100644 blob ae6093028e78d26247c043c087df4afaeceba8c7\tREADME.md\n` +
            `100644 blob 314dae420e7dadc6ba3bc40df596c2a49a3e9059\tpackage.json`,
            [
                {
                    type: "blob",
                    object: "4f7589ecc9615cd763e38fcf8293d7ddab305d18",
                    name: ".gitignore",
                },
                {
                    type: "blob",
                    object: "ae6093028e78d26247c043c087df4afaeceba8c7",
                    name: "README.md",
                },
                {
                    type: "blob",
                    object: "314dae420e7dadc6ba3bc40df596c2a49a3e9059",
                    name: "package.json",
                },
            ]
        )
    })
});

function expectGitForEachRefParsingIsCorrect(text: string, expected: Branch[]) {
    const actual = parsing.parseBranchesFromGitForEachRef(text);
    expect(actual).to.deep.equal(expected);
}

describe('git for-each-ref parsing', () => {
    it('works', () => {
        expectGitForEachRefParsingIsCorrect(
            `5b1f318776b4a557312c7355dcef5a42460217e0 commit\trefs/heads/master\n` +
            `3f343c3a73ef92fbef722eb45de73e556c0a3f02 commit\trefs/heads/redux\n` +
            `71921375cf6088dd1167dbf18803fc17a254e7bb commit\trefs/remotes/origin/homework-2`,
            [
                {
                    type: "commit",
                    sha: "5b1f318776b4a557312c7355dcef5a42460217e0",
                    name: "refs/heads/master"
                },
                {
                    type: "commit",
                    sha: "3f343c3a73ef92fbef722eb45de73e556c0a3f02",
                    name: "refs/heads/redux"
                },
                {
                    type: "commit",
                    sha: "71921375cf6088dd1167dbf18803fc17a254e7bb",
                    name: "refs/remotes/origin/homework-2"
                }
            ]
        )
    })
});


function expectGitForShowParsingIsCorrect(text: string, expected: string[]) {
    const actual = parsing.parseFileLinesFromGitShow(text);
    expect(actual).to.deep.equal(expected);
}

describe('git show parsing', () => {
    it('works', () => {
        expectGitForShowParsingIsCorrect('# Домашнее задание по node.js\n' +
            '\n' +
            '## Что сделано\n' +
            '- [x] GET /api/repos\n' +
            '- [x] GET /api/repos/:repositoryId/commits/:commitHash\n' +
            '- [x] GET /api/repos/:repositoryId/commits/:commitHash/diff\n' +
            '- [x] GET /api/repos/:repositoryId(/tree/:commitHash/:path)\n' +
            '- [x] GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile\n' +
            '- [x] DELETE /api/repos/:repositoryId\n' +
            '- [x] POST /api/repos/:repositoryId + { url: ‘repo-url’ }\n' +
            '- [x] Бонус: [пагинация](#api-bonus).\n' +
            '- [ ] Супер Бонус\n' +
            '\n' +
            '## Запуск сервера\n' +
            '```bash\n' +
            'npm start <repositories_dir>\n' +
            '```\n' +
            '\n' +
            '## Тестирование\n' +
            '```bash\n' +
            'curl -v localhost:3000/api/repo\n' +
            '```\n' +
            '\n' +
            '## API bonus\n' +
            'Пагинация реализована в эндпоинте `localhost:3000/api/repos/:repositoryId/:commitHash/`.\n' +
            '\n' +
            'Query-параметрами передаются:\n' +
            '1. `skip` (по умолчанию 0). Сколько коммитов пропустить от последнего коммита в ветке :commitHash.\n' +
            '2. `number` (по умолчанию 10). Сколько коммитов выдать.\n' +
            '\n' +
            'Пример получения предпоследнего коммита в ветке master репозитория nginx:\n' +
            '```bash\n' +
            'curl \'localhost:3000/api/repos/nginx/master/?skip=1&number=1\'\n' +
            '```', [
            '# Домашнее задание по node.js',
            '## Что сделано',
            '- [x] GET /api/repos',
            '- [x] GET /api/repos/:repositoryId/commits/:commitHash',
            '- [x] GET /api/repos/:repositoryId/commits/:commitHash/diff',
            '- [x] GET /api/repos/:repositoryId(/tree/:commitHash/:path)',
            '- [x] GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile',
            '- [x] DELETE /api/repos/:repositoryId',
            '- [x] POST /api/repos/:repositoryId + { url: ‘repo-url’ }',
            '- [x] Бонус: [пагинация](#api-bonus).',
            '- [ ] Супер Бонус',
            '## Запуск сервера',
            '```bash',
            'npm start <repositories_dir>',
            '```',
            '## Тестирование',
            '```bash',
            'curl -v localhost:3000/api/repo',
            '```',
            '## API bonus',
            'Пагинация реализована в эндпоинте `localhost:3000/api/repos/:repositoryId/:commitHash/`.',
            'Query-параметрами передаются:',
            '1. `skip` (по умолчанию 0). Сколько коммитов пропустить от последнего коммита в ветке :commitHash.',
            '2. `number` (по умолчанию 10). Сколько коммитов выдать.',
            'Пример получения предпоследнего коммита в ветке master репозитория nginx:',
            '```bash',
            'curl \'localhost:3000/api/repos/nginx/master/?skip=1&number=1\'',
            '```']);
    })
});

function expectLastShaFromGitRevListParsingIsCorrect(text: string, expected: string) {
    const actual = parsing.parseLastShaFromGitRevList(text);
    expect(actual).to.deep.equal(expected);
}

describe('git show parsing', () => {
    it('works', () => {
        expectLastShaFromGitRevListParsingIsCorrect(
            "110fc8cae82bd7292ac54aa8897776e43687cb81",
            "110fc8cae82bd7292ac54aa8897776e43687cb81"
        );
    });
});
