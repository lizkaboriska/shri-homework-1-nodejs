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
            block:"show-btn",
            content: [{
                block: "show-icon"
            },
                {   block: "text",
                    mods: {size: "s", line: "s"},
                    content: "Show files at 6l8fsh"
                }]
        },
        {
            elem: "container",
            elemMods: {"indent-h": 's'},
            content: [{
                block: "section",
                mods: {"space-v": "8"},
                content: [
                {
                    block: "back-btn",
                    content: [{
                        block: 'arrow-back'
                    },
                    {
                        elem: "back",
                        mix: {block: "text", mods: {size: "s", line: "s", color: "grey"}},
                        content: "Back"
                    }]
                }]
            },
            {
                block: "section",
                content: [{
                    block: "text",
                    mods: {size: 'm', weight: "bold", line: "sm"},
                    content: "DEVTOOLS-4599: Add option to add extra whitespace between projects"
                }]
            },
            {
                block: "section",
                mods: {"space-v": "10"},
                content: [{
                    block: 'text',
                    mods: {size: "sm", line: "xs", "indent-r": "5", color: "blue"},
                    content: 'c4d248'
                    },
                    {
                        block: 'text',
                        mods: {size: "sm", line: "xs", "indent-r": "5"},
                        content: 'on'
                    },
                    {
                        block: 'text',
                        mods: {size: "sm", line: "xs", "indent-r": "5", color: "blue"},
                        content: '20 Oct 2017, 12:24'
                    },
                    {
                        block: 'text',
                        mods: {size: "sm", line: "xs", "indent-r": "5"},
                        content: 'by'
                    },
                    {
                        block: 'text',
                        mods: {size: "sm", line: "xs"},
                        content: 'robot-srch-releaser',
                        mix: {block: 'nickname'}
                    }
                ]
            }
            ]
        },
        {
            elem: "container",
            mods: {size: "full"},
            mix: {block: "diff"},
            content: [{
                block: "diff-path",
                mix: {block: "section"},
                content: [
                {
                    elem: "first-str",
                    content: [{
                        block: "text",
                        mods: {color: "purple"},
                        content: "M"
                    },
                    {
                        block: "diff-icon"
                    },
                    {
                        block: "text",
                        mods: {size: "sm"},
                        content: "/trunk/arcadia/devtools/intellij/src/main/jav..."
                    }]
                },
                {
                    elem: "second-str",
                    content: [{
                        elem: "plus",
                        content: "+100"
                    },
                    {
                        elem: "minus",
                        content: "-81"
                    }]
                },
                {
                    block: "quadrarrow"
                }]
            },
            {
                block: "blue-str",
                mix: [{block: "section"}, {block: "text", mods: {size: "s"}}],
                content: "@@  -270, 160   +270, 161 @@"
            },
            {
                block: 'code-view',
                mix: {block: "section"},
                content: [{
                    elem: "table",
                    content: [{
                        elem: "row",
                        content: [
                        {
                            elem: 'cell',
                            mix: {elem: "count"},
                            content: '1'
                        },
                        {
                            elem: "cell",
                            mix: {elem: "count"},
                            content: "1"
                        },
                        {
                            elem: "cell",
                            content: "package ru.yandex.devtools.intellij.arc.client;"
                        }]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: '2'
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "2"
                            },
                            {
                                elem: "cell",
                                content: ""
                            }
                        ]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: ''
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "3"
                            },
                            {
                                elem: "cell",
                                content: "import java.util.ArrayList;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: ''
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "4"
                            },
                            {
                                elem: "cell",
                                content: "import java.util.Collection;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        mix: {elem: "green"},
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: ''
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "5"
                            },
                            {
                                elem: "cell",
                                content: "import java.util.List;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        mix: {elem: "green"},
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: ''
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "6"
                            },
                            {
                                elem: "cell",
                                content: ""
                            }
                        ]
                    },
                    {
                        elem: "row",
                        mix: {elem: "green"},
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: '3'
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "7"
                            },
                            {
                                elem: "cell",
                                content: "import com.intellij.openapi.diagnostic.Logger;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: ''
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "8"
                            },
                            {
                                elem: "cell",
                                content: "import com.intellij.openapi.project.Project;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: '4'
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "9"
                            },
                            {
                                elem: "cell",
                                content: "import com.intellij.openapi.vcs.FilePath;"
                            }
                        ]
                    },
                    {
                        elem: "row",
                        content: [
                            {
                                elem: 'cell',
                                mix: {elem: "count"},
                                content: '5'
                            },
                            {
                                elem: "cell",
                                mix: {elem: "count"},
                                content: "10"
                            },
                            {
                                elem: "cell",
                                content: "import com.intellij.openapi.vcs.VcsException;"
                            }
                        ]
                    },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '6'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "11"
                                },
                                {
                                    elem: "cell",
                                    content: "import com.intellij.openapi.vfs.VirtualFile;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "green"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '7'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "12"
                                },
                                {
                                    elem: "cell",
                                    content: "import com.intellij.vcsUtil.VcsUtil;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "green"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: ''
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "13"
                                },
                                {
                                    elem: "cell",
                                    content: "import org.jetbrains.annotations.NotNull;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: ''
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "14"
                                },
                                {
                                    elem: "cell",
                                    content: ""
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '8'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "15"
                                },
                                {
                                    elem: "cell",
                                    content: "import ru.yandex.devtools.intellij.arc.ArcContext;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '9'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "16"
                                },
                                {
                                    elem: "cell",
                                    content: "import ru.yandex.devtools.intellij.arc.ArcRevisionNumber;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '10'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "17"
                                },
                                {
                                    elem: "cell",
                                    content: "import ru.yandex.devtools.intellij.arc.ArcStatus;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "green"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: ''
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "18"
                                },
                                {
                                    elem: "cell",
                                    content: "import ru.yandex.devtools.intellij.arc.ui.ArcResetDialog;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '11'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "19"
                                },
                                {
                                    elem: "cell",
                                    content: ""
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "red"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '12'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: ""
                                },
                                {
                                    elem: "cell",
                                    content: "import java.util.ArrayList;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "red"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '13'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: ""
                                },
                                {
                                    elem: "cell",
                                    content: "import java.util.Collection;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "red"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '14'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: ""
                                },
                                {
                                    elem: "cell",
                                    content: "import java.util.List;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            mix: {elem: "red"},
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '15'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: ""
                                },
                                {
                                    elem: "cell",
                                    content: ""
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '16'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "20"
                                },
                                {
                                    elem: "cell",
                                    content: "/**"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '17'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "21"
                                },
                                {
                                    elem: "cell",
                                    content: "\t* @author Dmitry Andreev <a href=\"mailto:AndreevDm@yandex-team.ru\"></a>"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: ''
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "22"
                                },
                                {
                                    elem: "cell",
                                    content: "\t* @date 11/10/2018"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '18'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "23"
                                },
                                {
                                    elem: "cell",
                                    content: "*/"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '19'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "24"
                                },
                                {
                                    elem: "cell",
                                    content: "\tpublic ArcCli(String arcBinaryPath) {"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '20'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "25"
                                },
                                {
                                    elem: "cell",
                                    content: "        this.arcBinaryPath = arcBinaryPath;"
                                }
                            ]
                        },
                        {
                            elem: "row",
                            content: [
                                {
                                    elem: 'cell',
                                    mix: {elem: "count"},
                                    content: '21'
                                },
                                {
                                    elem: "cell",
                                    mix: {elem: "count"},
                                    content: "26"
                                },
                                {
                                    elem: "cell",
                                    content: " }"
                                }
                            ]
                        }]
                    }]
                },
                {
                    block: "blue-str",
                    mix: [{block: "section"}, {block: "text", mods: {size: "s"}}],
                    content: "@@  -270, 160   +270, 161 @@"
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
fs.writeFile("../3_page.html", html_gen.buildHtml(body), (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File. YAAAAY!!!!");
});