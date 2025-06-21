// prism-m.js
(function (Prism) {
  Prism.languages.m = {
    'comment': /\/\/.*|\/\*[\s\S]*?\*\//, // 单行/多行注释
    'string': /"(?:[^"\\]|\\.)*"/, // 字符串
    'keyword': /\b(?:let|in|as|if|then|else|each|try|otherwise|meta|section)\b/, // 关键字
    'function': /\b(?:Table\.\w+|List\.\w+|Date\.\w+|Text\.\w+)\b/, // 内置函数（如 Table.SelectRows）
    'operator': /=>|[\+\-\*\/=<>]/, // 运算符（如 =>）
    'number': /\b\d+(?:\.\d+)?\b/, // 数字
    'punctuation': /[{}[\],;:()]/, // 标点符号
  };
})(window.Prism);