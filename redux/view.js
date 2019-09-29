function createView(store) {
    let render = function () {
        let html = '<div class="list__container list__container_header"><div class="list__item list__name">Name</div><div class="list__item list__brunch">Brunch</div><div class="list__item list__hash">Commit</div><div class="list__item list__message">Commit message</div><div class="list__item list__author">Committer</div><div class="list__item list__time">Updated</div></div>';
        for (const file of store.getState()) {
            html += `<div class="list__container">` +
                `<div class="list__item list__name">` +
                `<div class="folder-icon"></div>` +
                `<div>${file.name}</div>` +
                `</div>` +
                `<div class="list__item list__brunch">${file.branch}:</div>` +
                `<div class="list__item list__hash">${file.commit}</div>` +
                `<div class="list__item list__message">${file.commit_message}</div><br class="list__break">` +
                `<div class="list__item list__hash-mob">${file.commit}</div>` +
                `<div class="list__item list__author-mob">, by ${file.committer},</div>` +
                `<div class="list__item list__author nickname">${file.committer}</div>` +
                `<div class="list__item list__time">${file.updated}</div>` +
                `</div>`
        }
        return html;
    };

    // РЕВЬЮВЕРУ: непонятно, зачем мы делаем подписку здесь,
    // ведь тогда метод render нигде не используется.
    //
    // В задании было указано, что subscribe() должен быть частью view.
    store.subscribe(function () {
        const html = render();
        document.getElementById("files-list").innerHTML = html;
    });

    return {
        render: render,
    }
}

module.exports = {
    "createView": createView
};
