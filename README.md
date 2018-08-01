# danmakufuph3-language-support

This is a working-in-progress of danmakufuph3 scripting language support built in TypeScript. The support consists of crude structure of danmakufuph3 language. The support's output is aimed to be a lexer and a parser. Both output is expected can be utilized for higher-level functionality such as source code diagnosis and autocomplete feature.

Compilation can be done using the following minimum setting

``` tsc -t 'ES5' --lib 'es6' ```
