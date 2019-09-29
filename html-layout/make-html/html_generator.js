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
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>' +
            '<script src="../redux/dist/index.bundle.js"></script>' +
             body +
            '<script type="text/javascript" src="script.js"></script>' +
            '</body>' +
            '</html>';
}