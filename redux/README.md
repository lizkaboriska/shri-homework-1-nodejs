# Домашнее задание "Архитектура"

## Структура файлов
- dist/ -- здесь будет лежать js-бандл
- index.js -- главный js-файл страницы `1-1_page.html`
- store.js -- redux Store
- view.js -- view для списка отфильтрованных файлов в `1-1_page.html`

## Как протестировать
```bash
cd <repo>/redux
npm install

# сгенерирует файл <repo>/dist/index.bundle.js
npx webpack

# откроет HTML с поиском по файлам
open <repo>/html-layout/1-1_page.html
```
