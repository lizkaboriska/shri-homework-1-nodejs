const fs = require('fs');
const html_gen = require('../make-html/html_generator');
const templater = require('../make-html/templater');

let bemjson = {
    block: 'theme',
    mods: {color: "default"},
    content: {
        block: 'layout',
        content: [{
            elem: 'container',
            elemMods: {size: 'full'},
            content: [{
                block: 'header',
                content: [{
                    elem: 'item',
                    content: {
                        elem: "logo",
                        mix: {block: "logo"}
                    }
                },
                {
                    elem: "item",
                    content: {
                        elem: "menu",
                        mix: {block: "dd-menu"},
                        content: [{
                            block: "text",
                            mods: {line: "l", weight: "bold", size: "s"},
                            content: 'Repository'
                        },
                        {
                            block: "text",
                            mods: {line: "m", size: "s"},
                            content: 'Arc'
                        },
                        {
                            block:'header-arrow'
                        }]
                    }
                }]
            }]
        },
        {
            elem: "container",
            elemMods: {"indent-h": "s"},
            content: [{
                block: 'section',
                mods: {'space-b': '2', 'underline': 'grey'},
                content: {
                    block: "text",
                    mods: {line: "m", weight: "bold", size: "s"},
                    content: "arcadia"
                }
            },
            {
                block: 'section',
                content: [{
                    block: 'text',
                    mods: {size: 'm', line: "l"},
                    content: 'arcadia'
                },
                {
                    block: 'text',
                    mods: {size: 'm', line: "l", color: 'grey', 'indent-l': '5'},
                    //mix: {block: 'menu', mods: {type: 'dropdown'}},
                    content: 'trunk'
                },
                {
                    // TODO: decide with spaces between words of different blocks
                    block: 'trunk-arrow'
                }]
            },
            {
                block: 'section',
                content: [{
                    block: 'text',
                    mods: {size: "s", "indent-r": "5", line: "xs"},
                    content: 'Last commit'
                },
                {
                    block: 'text',
                    mods: {size: "s", line: "xs", "indent-r": "5", color: "blue"},
                    content: 's324e8'
                },
                {
                    block: 'text',
                    mods: {size: "s", line: "xs", "indent-r": "5"},
                    content: 'on'
                },
                {
                    block: 'text',
                    mods: {size: "s", line: "xs", "indent-r": "5", color: "blue"},
                    content: '20 Oct 2017, 12:24'
                },
                {
                    block: 'text',
                    mods: {size: "s", line: "xs", "indent-r": "5"},
                    content: 'by'
                },
                {
                    block: 'text',
                    mods: {size: "s", line: "xs"},
                    content: 'robot-srch-releaser',
                    mix: {block: 'nickname'}
                }]
            },
            {
                block: "section",
                mods: {"indent-t": "10"},
                content: [{
                    block: "search",
                    content: [{
                        tag: "input",
                        elem: "input",
                        attrs: {placeholder: "Начните вводить имя для поиска", id: "files-search"}
                    }]
                }]
            },
            {
                block: "section",
                mods: {underline: "grey", "indent-t": "10"},
                content: [{
                    block: "text",
                    mods: {size: "s", line: "m", weight: "bold"},
                    content: "FILES",
                    // TODO: underline fo selected item
                    mix: {block: "section", elem: "selected-item"}
                },
                {
                    block: "text",
                    mods: {size: "s", line: "m", weight: "bold", color: "grey", "indent-l": "30"},
                    content: "BRANCHES",
                }]
            },
            {
                block: "section",
                content: [{
                    // TODO: templater for table tag
                    block: 'list',
                    attrs: {id: "files-list"},
                    content: [{
                        elem: 'container',
                        elemMods: {header: true},
                        content: [{
                            elem: 'item',
                            mix: {elem: 'name'},
                            content: 'Name'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'brunch'},
                                content: 'Brunch'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'hash'},
                                content: 'Commit'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'message'},
                                content: 'Commit message'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'author'},
                                content: 'Committer'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'time'},
                                content: 'Updated'
                            }]
                        },
                        {
                        elem: 'container',
                        content: [{
                            elem: 'item',
                            mix: {elem: 'name'},
                            content: [{block:'folder-icon'},{content: 'api'}]
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'brunch'},
                            content: 'ARCADIA-771:'
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'hash'},
                            content: 'd53dsv'
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'message'},
                            content: '[vcs] move http to arc'
                        },
                        {
                            elem: 'break',
                            tag: 'br'
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'hash-mob'},
                            content: 'd53dsv'
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'author-mob'},
                            content: ',  Alexey Besedin, '
                        },
                        {
                            elem: 'item',
                            mix: [{elem: 'author'}, {block: "nickname"}],
                            content: 'Alexey Besedin'
                        },
                        {
                            elem: 'item',
                            mix: {elem: 'time'},
                            content: '4s ago'
                        }]
                    },

                    {
                        block: 'list-arrow'
                    },
                    {
                        elem: 'container',
                        content: [{
                            elem: 'item',
                            mix: {elem: 'name'},
                            content: [{block:'folder-icon'},{content: 'ci'}]
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'brunch'},
                                content: 'ARCADIA-771::'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'hash'},
                                content: 'c53dsv'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'message'},
                                content: '[vcs] test for empty commit message'
                            },
                            {
                                elem: 'break',
                                tag: 'br'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'hash-mob'},
                                content: 'c53dsv'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'author-mob'},
                                content: ', by nikitxskv,'
                            },
                            {
                                elem: 'item',
                                mix: [{elem: 'author'}, {block: 'nickname'}],
                                content: 'nikitxskv'
                            },
                            {
                                elem: 'item',
                                mix: {elem: 'time'},
                                content: '1 min ago'
                            }]
                    },
                    {
                        block: 'list-arrow'
                    },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'contrib'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'http'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'lib'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'local'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'packages'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'robots'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'server'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        },
                        {
                            elem: 'container',
                            content: [{
                                elem: 'item',
                                mix: {elem: 'name'},
                                content: [{block:'folder-icon'},{content: 'ut'}]
                            },
                                {
                                    elem: 'item',
                                    mix: {elem: 'brunch'},
                                    content: 'ARCADIA-771::'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'message'},
                                    content: '[vcs] test for empty commit message'
                                },
                                {
                                    elem: 'break',
                                    tag: 'br'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'hash-mob'},
                                    content: 'c53dsv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'author-mob'},
                                    content: ', by nikitxskv,'
                                },
                                {
                                    elem: 'item',
                                    mix: [{elem: 'author'}, {block: 'nickname'}],
                                    content: 'nikitxskv'
                                },
                                {
                                    elem: 'item',
                                    mix: {elem: 'time'},
                                    content: '1 min ago'
                                }]
                        },
                        {
                            block: 'list-arrow'
                        }]
                }]
            }]
        },
        {
            elem: 'container',
            elemMods: {size: 'full'},
            content: [{
                block: 'footer',
                content: {
                    block: 'text',
                    mods: {size: "xs", line: "l", color: "footer"},
                    content: 'Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia, 119021.'
                }
            }]
        }]
    }
}

let body = templater.applyTemplates(bemjson);
fs.writeFile("../1-1_page.html", html_gen.buildHtml(body), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File. YAAAAY!!!!");
});