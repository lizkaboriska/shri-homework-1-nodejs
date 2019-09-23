const bemxjst = require('bem-xjst');

let bemhtml = bemxjst.bemhtml;
let templates = bemhtml.compile(() => {
    //block('text')({ tag: 'span' });
});
exports.applyTemplates = function(bemjson) {
    return templates.apply(bemjson);
}