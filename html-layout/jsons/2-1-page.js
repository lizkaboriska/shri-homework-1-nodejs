const fs = require('fs');
const html_gen = require('../make-html/html_generator');
const templater = require('../make-html/templater');

let bemjson;
bemjson = {
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
                                    block: 'header-arrow'
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
                            mods: {size: "s", line: "m", weight: "bold", color: "grey"},
                            content: "FILES"
                        },
                            {
                                block: "text",
                                mods: {size: "s", line: "m", weight: "bold", "indent-l": "30"},
                                content: "BRANCHES",
                                mix: {block: "section", elem: "selected-item"}
                            }]
                    },
                    {
                        block: "section",
                        content: [{
                            // TODO: templater for table tag
                            block: 'list',
                            content: [{
                                elem: 'container',
                                elemMods: {header: true},
                                content: [{
                                    elem: 'item',
                                    mix: {elem: 'br-name'},
                                    content: 'Name'
                                },
                                    {
                                        elem: 'item',
                                        mix: {elem: 'full-hash'},
                                        content: {content: 'Commit hash'}
                                    }]
                            },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'trunk'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "6748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-2'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "7748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-3'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "8748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-5'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "9748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-6'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "1748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-7'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "2748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-8'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "3748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-9'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "4748ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-11'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "4548ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-12'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "3248ds893432438dsd823329d923482d"}
                                        }]
                                },
                                {
                                    elem: "container",
                                    content: [
                                        {
                                            elem: "item",
                                            mix: {elem: "br-name"},
                                            content: [{block: 'branch-icon'}, {content: 'users/a-aidyn00/my-feature-13'}]
                                        },
                                        {
                                            elem: "item",
                                            mix: {elem: "full-hash"},
                                            content: {content: "1348ds893432438dsd823329d923482d"}
                                        }]
                                }
                                // {
                                //     block: 'list-arrow'
                                // },
                            ]
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
};

let body = templater.applyTemplates(bemjson);
fs.writeFile("../2-1_page.html", html_gen.buildHtml(body), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File. YAAAAY!!!!");
});