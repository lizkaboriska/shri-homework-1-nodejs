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
                        mods: {underline: "grey", "indent-t": "10"},
                        content: [{
                            block: "text",
                            mods: {size: "s", line: "m", weight: "bold", color: "grey"},
                            content: "DETAILS"
                        },
                            {
                                block: "text",
                                mods: {size: "s", line: "m", weight: "bold", "indent-l": "30"},
                                content: "HISTORY",
                                mix: {block: "section", elem: "selected-item"}
                            }]
                    }]
            },
            {
                elem: 'container',
                elemMods: {'indent-h': 's'},
                content: [{
                    block: 'history',
                    content: [{
                        elem: 'date',
                        content: 'Today',
                        mix: {block: 'text', mods: {size: 'sm', line: 'm', color: 'grey'}}
                    },
                    {
                        elem: "container",
                        content: [{
                            elem: 'visual',
                            content: [{
                                block: 'commit-icon'
                            },
                            {
                                block: "palka-vniz"
                            },
                            {
                                block: 'commit-icon'
                            },
                            {
                                block: "palka-vniz"
                            },
                            {
                                block: 'commit-icon'
                            }]
                        },
                        {
                            elem: 'text',
                            content: [
                            {
                            elem: "info",
                            content: [
                                {
                                    elem: 'commit-message',
                                    content: 'Support new distbuild protocol',
                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                },
                                {
                                    elem: 'comment',
                                    content: 'Не очень качественно написаны некоторые функции. Предлагаю исправить это.',
                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                },
                                {
                                    elem: 'lower-str',
                                    content: [{
                                        elem: 'hash',
                                        content: 's324e8',
                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                    },
                                    {
                                        elem: 'author',
                                        content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    },
                                    {
                                        elem: 'update',
                                        content: '4 s ago',
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    }]
                                }]
                            },
                            {
                            elem: "info",
                            content: [
                                {
                                    elem: 'commit-message',
                                    content: 'Force executing on MULTISLOT hosts by declaring Caches',
                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                },
                                {
                                    elem: 'comment',
                                    content: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это. ',
                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                },
                                {
                                    elem: 'lower-str',
                                    content: [{
                                        elem: 'hash',
                                        content: 's324e8',
                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                    },
                                    {
                                        elem: 'author',
                                        content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    },
                                    {
                                        elem: 'update',
                                        content: '4 s ago',
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    }]
                                }]
                            },
                            {
                            elem: "info",
                            content: [
                                {
                                    elem: 'commit-message',
                                    content: 'Fixed run_diff_test in the realm',
                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                },
                                {
                                    elem: 'comment',
                                    content: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это. ',
                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                },
                                {
                                    elem: 'lower-str',
                                    content: [{
                                        elem: 'hash',
                                        content: 's324e8',
                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                    },
                                    {
                                        elem: 'author',
                                        content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    },
                                    {
                                        elem: 'update',
                                        content: '4 s ago',
                                        mix: {block: 'text', mods: {size: 's', line: 's'}}
                                    }]
                                }]
                            }]
                        },
                        {
                            elem: 'hash-column',
                            content: [
                                {
                                    elem: "hash-sep",
                                    content: 's324e8',
                                    mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                },
                                {
                                    elem: "hash-sep",
                                    content: 's324e8',
                                    mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                },
                                {
                                    elem: "hash-sep",
                                    content: 's324e8',
                                    mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                }
                            ]
                        },
                        {
                            elem: 'icons',
                            content: [
                                {
                                    elem: 'icon',
                                    mix:{block: 'go-to-file'}
                                },
                                {
                                    elem: 'icon',
                                    mix: { block: 'go-to-file' }
                                },
                                {
                                    elem: 'icon',
                                    mix:{block: 'go-to-file'}
                                }
                            ]
                        }]
                    }]
                },
                {
                    block: 'history',
                    content: [{
                        elem: 'date',
                        content: 'Yesterday',
                        mix: {block: 'text', mods: {size: 'sm', line: 'm', color: 'grey'}}
                    },
                        {
                            elem: "container",
                            content: [{
                                elem: 'visual',
                                content: [{
                                    block: 'commit-icon'
                                },
                                    {
                                        block: "palka-vniz"
                                    },
                                    {
                                        block: 'commit-icon'
                                    },
                                    {
                                        block: "palka-vniz"
                                    },
                                    {
                                        block: 'commit-icon'
                                    }]
                            },
                                {
                                    elem: 'text',
                                    content: [
                                        {
                                            elem: "info",
                                            content: [
                                                {
                                                    elem: 'commit-message',
                                                    content: 'Support HTTP resources',
                                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                                },
                                                {
                                                    elem: 'comment',
                                                    content: 'Не очень качественно написаны некоторые функции. Предлагаю исправить это недоразумение.',
                                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                },
                                                {
                                                    elem: 'lower-str',
                                                    content: [{
                                                        elem: 'hash',
                                                        content: 's324e8',
                                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                                    },
                                                        {
                                                            elem: 'author',
                                                            content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        },
                                                        {
                                                            elem: 'update',
                                                            content: '4 s ago',
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        }]
                                                }]
                                        },
                                        {
                                            elem: "info",
                                            content: [
                                                {
                                                    elem: 'commit-message',
                                                    content: 'Fixed run_diff_test',
                                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                                },
                                                {
                                                    elem: 'comment',
                                                    content: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это. ',
                                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                },
                                                {
                                                    elem: 'lower-str',
                                                    content: [{
                                                        elem: 'hash',
                                                        content: 's324e8',
                                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                                    },
                                                        {
                                                            elem: 'author',
                                                            content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        },
                                                        {
                                                            elem: 'update',
                                                            content: '4 s ago',
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        }]
                                                }]
                                        },
                                        {
                                            elem: "info",
                                            content: [
                                                {
                                                    elem: 'commit-message',
                                                    content: 'Update ya-bin and test_tool',
                                                    mix: {block: 'text', mods: {size: 'sm', weight: 'bold'}}
                                                },
                                                {
                                                    elem: 'comment',
                                                    content: 'Не очень правильно с точки зрения ООП написаны некоторые функции. Предлагаю исправить это. ',
                                                    mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                },
                                                {
                                                    elem: 'lower-str',
                                                    content: [{
                                                        elem: 'hash',
                                                        content: 's324e8',
                                                        mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                                    },
                                                        {
                                                            elem: 'author',
                                                            content: [{content: 'by'}, {content: 'woodcutter', block: 'nickname'}, {content: ','}],
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        },
                                                        {
                                                            elem: 'update',
                                                            content: '4 s ago',
                                                            mix: {block: 'text', mods: {size: 's', line: 's'}}
                                                        }]
                                                }]
                                        }]
                                },
                                {
                                    elem: 'hash-column',
                                    content: [
                                        {
                                            elem: "hash-sep",
                                            content: 's324e8',
                                            mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                        },
                                        {
                                            elem: "hash-sep",
                                            content: 's324e8',
                                            mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                        },
                                        {
                                            elem: "hash-sep",
                                            content: 's324e8',
                                            mix: {block: 'text', mods: {size: 's', line: 's', color: 'blue'}}
                                        }
                                    ]
                                },
                                {
                                    elem: 'icons',
                                    content: [
                                        {
                                            elem: 'icon',
                                            mix:{block: 'go-to-file'}
                                        },
                                        {
                                            elem: 'icon',
                                            mix: { block: 'go-to-file' }
                                        },
                                        {
                                            elem: 'icon',
                                            mix:{block: 'go-to-file'}
                                        }
                                    ]
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
fs.writeFile("../1-6_page.html", html_gen.buildHtml(body), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File. YAAAAY!!!!");
});