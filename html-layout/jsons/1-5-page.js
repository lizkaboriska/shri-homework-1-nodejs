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
                        mods: {underline: "grey", "indent-t": "10"},
                        content: [{
                            block: "text",
                            mods: {size: "s", line: "m", weight: "bold"},
                            content: "DETAILS",
                            mix: {block: "section", elem: "selected-item"}
                        },
                            {
                                block: "text",
                                mods: {size: "s", line: "m", weight: "bold", "indent-l": "30", color: "grey"},
                                content: "HISTORY"
                            }]
                    }]
            },
            {
                elem: 'container',
                mix: {block: "code"},
                content: [{
                    block: "code-viewer",
                    content: [{
                        elem: "header",
                        content: [{
                            elem: "name",
                            content: [{block: "code-icon"},{content: 'ya.make'}, {elem: "file-size", content: "(4347 bytes)"}]
                        },
                        {
                            elem: "download-btn",
                            content: {block: "download-icon"}
                        }]
                    },
                    // {
                    //     elem: "code",
                    //     content: [{
                    //         elem: "numbers",
                    //         content: [{content: '1'},{content: '2'},{content: '3'},{content: '4'},{content: '5'},{content: '6'},{content: '7'},{content: '8'},{content: '9'},{content: '10'},{content: '11'},{content: '12'},{content: '13'},{content: '14'},{content: '15'}]
                    //     },
                    //     {
                    //         elem: "strings",
                    //         content: [{
                    //             content: "#!/usr/bin/env python",
                    //             elem: 'comment'
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{
                    //                 block: "text",
                    //                 mods: {weight: "bold"},
                    //                 content: "import"
                    //             },
                    //             {
                    //                 content: 'os'
                    //             }]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{
                    //                 block: "text",
                    //                 mods: {weight: "bold"},
                    //                 content: "import"
                    //             },
                    //             {content: 'sys'}]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{
                    //                 block: "text",
                    //                 mods: {weight: "bold"},
                    //                 content: "import"
                    //             },
                    //             {content: 'platform'}]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{
                    //                 block: "text",
                    //                 mods: {weight: "bold"},
                    //                 content: "import"
                    //             },
                    //             {content: 'json'}]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{content: "URLS = ["}, {block: "text", mods:{color: 'blue'}, content: "'https://proxy.sandbox.yandex-team.ru/453818264', 'http://storage-int.mds.yandex.net/get-sandbox/110738/by_platform.json.453815347'"}, {content: "]"}]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: [{content: "MD5 = "}, {block: "text", mods:{color: 'blue'}, content: "'7f5a85f9c28d35c3a76d8cea7af51106'"}]
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: "RETRIES = 5"
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: "HASH_PREFIX = 10"
                    //         },
                    //         {
                    //             elem: 'string',
                    //             content: "HOME_DIR = os.path.expanduser('~')"
                    //         }]
                    //     }]
                    // },
                    {
                        block: "code-view",
                        mix: [{block: "section"}],
                        content: [{
                            elem: "table",
                            content: [{
                                elem: "row",
                                content: [{
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "1"
                                },
                                {
                                    elem: "cell",
                                    content: "#!/usr/bin/env python"
                                }]
                            },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "2"
                                    },
                                        {
                                            elem: "cell",
                                            content: "import os"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "3"
                                    },
                                        {
                                            elem: "cell",
                                            content: "import sys"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "4"
                                    },
                                        {
                                            elem: "cell",
                                            content: "import platform"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "5"
                                    },
                                        {
                                            elem: "cell",
                                            content: "import json"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "6"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "7"
                                    },
                                        {
                                            elem: "cell",
                                            content: "URLS = ['https://proxy.sandbox.yandex-team.ru/453818264', 'http://storage-int.mds.yandex.net/get-sandbox/110738/by_platform.json.453815347']"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "8"
                                    },
                                        {
                                            elem: "cell",
                                            content: "MD5 = '7f5a85f9c28d35c3a76d8cea7af51106'"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "9"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "10"
                                    },
                                        {
                                            elem: "cell",
                                            content: "RETRIES = 5"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "11"
                                    },
                                        {
                                            elem: "cell",
                                            content: "HASH_PREFIX = 10"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "12"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "13"
                                    },
                                        {
                                            elem: "cell",
                                            content: "HOME_DIR = os.path.expanduser('~')"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "14"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "15"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "16"
                                    },
                                        {
                                            elem: "cell",
                                            content: "def create_dirs(path):"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "17"
                                    },
                                        {
                                            elem: "cell",
                                            content: "    try:"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "18"
                                    },
                                        {
                                            elem: "cell",
                                            content: "        os.makedirs(path)"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "19"
                                    },
                                        {
                                            elem: "cell",
                                            content: "    except OSError as e:"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "20"
                                    },
                                        {
                                            elem: "cell",
                                            content: "        import errno"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "21"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "22"
                                    },
                                        {
                                            elem: "cell",
                                            content: "        if e.errno != errno.EEXIST:"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "23"
                                    },
                                        {
                                            elem: "cell",
                                            content: "raise"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "24"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "25"
                                    },
                                        {
                                            elem: "cell",
                                            content: "    return path"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "26"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "27"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "28"
                                    },
                                        {
                                            elem: "cell",
                                            content: "def misc_root():"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "29"
                                    },
                                        {
                                            elem: "cell",
                                            content: "    return create_dirs(os.getenv('YA_CACHE_DIR') or os.path.join(HOME_DIR, '.ya'))"
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "30"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                },
                                {
                                    elem: "row",
                                    content: [{
                                        elem: "cell",
                                        mix: {elem: "count"},
                                        content: "31"
                                    },
                                        {
                                            elem: "cell",
                                            content: ""
                                        }]
                                }]
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
fs.writeFile("../1-5_page.html", html_gen.buildHtml(body), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File. YAAAAY!!!!");
});