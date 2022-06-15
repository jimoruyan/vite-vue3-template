/**
 * @fixable 表示此配置支持 --fix
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {
    // @fixable This rule enforces a consistent indentation style in <template>. The default style is 2 spaces.
    // "vue/html-indent": ["error", 'number', {
    //   "attribute": 2,
    //   "baseIndent": 2,
    //   "closeBracket": 2,
    //   "alignAttributesVertically": true,
    //   "ignores": []
    // }],
    // @fixable 去除标签中间空格
    "vue/no-multi-spaces": ["error", {
      "ignoreProperties": false
    }],
    // @fixable 去除标签首尾空格
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    // @fixable 使用两个空格进行缩进
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    // 不要混合使用空格与制表符作为缩进
    'no-mixed-spaces-and-tabs': 'error',
    // @fixable 关键字后面加空格
    'keyword-spacing': [
      'error', 
      { 
        "after": true
      }
    ],
    // @fixable function 的小括号之前必须要有空格
    'space-before-function-paren': [
        'error',
        'never'
    ],

    // @fixable 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': [
      'error',
      'never'
    ],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }
    ],
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // @fixable 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': [
      'error',
      'always'
    ],
    // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    // 禁止使用 tabs
    'no-tabs': 'off',
    // @fixable 禁止行尾有空格
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
        ignoreComments: true
      }
    ],
    // @fixable 禁止属性前有空格，比如 foo. bar()
    'no-whitespace-before-property': 'error',
    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': [
      'error',
      'always'
    ],
    // @fixable 小括号内的首尾禁止有空格
    'space-in-parens': [
      'error',
      'never'
    ],
    // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
    // let foo = new Person();
    // bar = bar++;
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // @fixable else、catch需要和花括号在一行
    'brace-style': 'error',
    // @off 有时放在第二行开始处更易读
    'operator-linebreak': 'off',
    // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'dot-location': [
      'error',
      'property'
    ],
    // @fixable 文件最后一行必须有一个空行
    'eol-last': 'error',

    // @fixable 对象属性换行时注意统一代码风格, 要么都在同一行，要么一个一行
    'object-property-newline': [
      'error', 
      { 
        'allowMultiplePropertiesPerLine': true 
      }
    ],
    // @fixable if 后面必须要有 {，除非是单行 if
    'curly': [
      'error',
      'multi-line',
      'consistent'
    ],
    // @fixable new 后面的类必须有小括号
    'new-parens': 'error',
    // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
    'no-extra-parens': [
      'error',
      'functions'
    ],
    // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
    'no-cond-assign': [
      'error',
      'except-parens'
    ],
    // 禁止在 return 语句里赋值
    'no-return-assign': [
      'error',
      'always'
    ],
    // @fixable 必须使用单引号，禁止使用双引号
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // @fixable 最后一行不要逗号
    'comma-dangle': 'error',
    // 对于变量和函数名统一使用驼峰命名法
    'camelcase': 'off',
    // 禁止变量申明时用逗号一次申明多个
    'one-var': [
      'error',
      'never'
    ],
    // 禁止直接 new 一个类而不赋值
    'no-new': 'error',
    // 禁止重复定义变量
    'no-redeclare': 'error',
    // @fixable 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止修改原生对象
    'no-extend-native': 'error',
    // 禁止将一个函数声明重新赋值，如：
    // function foo() {}
    // foo = bar
    'no-func-assign': 'error',
    // 禁止对全局变量赋值
    'no-global-assign': 'error',
    // 禁止在 if 代码块内出现函数声明
    'no-inner-declarations': 'error',
    // 禁止 label 名称与定义过的变量重复
    'no-label-var': 'error',
    // 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'error',
    // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
    'no-new-func': 'error',
    // 禁止直接 new Object
    'no-new-object': 'error',
    // 禁止直接 new require('foo')
    'no-new-require': 'error',
    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'error',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',
    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    'no-obj-calls': 'error',
    // 禁止使用 __proto__
    'no-proto': 'error',
    // 禁止将自己赋值给自己
    'no-self-assign': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    'no-sparse-arrays': 'error',
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    'no-throw-literal': 'error',
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'error',
    // 禁止在 finally 中出现 return, throw, break 或 continue
    'no-unsafe-finally': 'error',
    // @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
    'no-unsafe-negation': 'error',
    // 禁止出现没必要的转义
    'no-useless-escape': 'error',
    // callback 中的 error 必须被处理
    'handle-callback-err': 'error',
    // @fixable 始终使用 === 替代 ==。例外： obj == null 可以用来检查 null || undefined
    'eqeqeq': [
      'error', 
      'always', 
      { 
        'null': 'ignore' 
      }
    ],
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    // 禁止使用 eval
    'no-eval': 'error',
    // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
    'no-implied-eval': 'error',
    // @fixable 禁止在测试表达式中使用 !! 或 Boolean
    'no-extra-boolean-cast': 'error',
    // @fixable 表示小数时，禁止省略 0，比如 .5
    'no-floating-decimal': 'error',
    // 禁止使用 label
    'no-labels': 'error',
    // 禁止使用 \ 来换行字符串,可使用+
    'no-multi-str': 'error',
    // 禁止对 __dirname 或 __filename 使用字符串连接
    'no-path-concat': 'error',
    // 循环内必须对循环条件的变量有修改
    'no-unmodified-loop-condition': 'error',
    // @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
    'no-useless-computed-key': 'error',
    // 必须使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',
    // @fixable 禁止出现 foo['bar']，必须写成 foo.bar
    'dot-notation': 'error',
    // @fixable 注释的斜线或 * 后必须有空格
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ],
    // @fixable 不加分号
    'semi': ['error', 'never'],
    // 禁止出现难以理解的多行表达式，如：
    // let foo = bar
    // [1, 2, 3].forEach(baz);
    'no-unexpected-multiline': 'error',
  }
};
