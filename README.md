# Домашнее задание по node.js

## Что сделано
- [x] GET /api/repos
- [x] GET /api/repos/:repositoryId/commits/:commitHash
- [x] GET /api/repos/:repositoryId/commits/:commitHash/diff
- [x] GET /api/repos/:repositoryId(/tree/:commitHash/:path)
- [x] GET /api/repos/:repositoryId/blob/:commitHash/:pathToFile
- [x] DELETE /api/repos/:repositoryId
- [x] POST /api/repos/:repositoryId + { url: ‘repo-url’ }
- [x] Бонус: пагинация. См. ниже.
- [ ] Супер Бонус

## Запуск сервера
```bash
npm start <repositories_dir>
```

## Тестирование
```bash
curl -v localhost:3000/api/repo
```

## API bonus
Пагинация реализована в эндпоинте `localhost:3000/api/repos/:repositoryId/:commitHash/`.  

Query-параметрами передаются:
1. `skip` (по умолчанию 0). Сколько коммитов пропустить от последнего коммита в ветке :commitHash.
2. `number` (по умолчанию 10). Сколько коммитов выдать.  

Пример получения предпоследнего коммита в ветке master репозитория nginx:
```bash
curl 'localhost:3000/api/repos/nginx/master/?skip=1&number=1'
```
