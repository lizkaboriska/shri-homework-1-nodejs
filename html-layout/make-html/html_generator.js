exports.buildHtml = function(body) {
    return '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<title>SECOND HW</title>\n' +
            '<meta charset="UTF-8">\n' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<link rel="stylesheet" href="style.css">\n' +
            '</head>' +
            '<body>' +
             body +
            '<script type="text/javascript" src="script.js"></script>' +
            '</body>' +
            '</html>';
}