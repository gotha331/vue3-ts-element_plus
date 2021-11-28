module.exports = {
  semi: false, // 行尾是否使用分号，默认为true
  trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数
  useTabs: false, // 启用tab缩进
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  // printWidth: 100, // 超过最大值换行
  // tabWidth: 2, // 缩进字节数
  // useTabs: false, // 缩进使用tab
  // semi: false, // 句尾添加分号
  // singleQuote: true, // 使用单引号代替双引号
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore',
  ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  trailingComma: 'none'
}
