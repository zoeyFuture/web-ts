module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "typescript"
  ],
  "extends": "airbnb",
  "parserOptions": { // 解析器配置
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "legacyDecotators": true,
      "jsx": true,
      "useJSXTextNode": true
    },
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2], // 一个缩进必须用2个空格替代
    "array-callback-return": [2], // 数组的方法除了 forEach 之外，回调函数必须有返回值
    "react/sort-comp": [0], // 组件内方法必须按照一定规则排序
    "prefer-destructuring": [0], // 必须使用解构
    "generator-star-spacing": [0], // generator 的 * 前面禁止有空格，后面必须有空格
    "no-param-reassign": [2], // 禁止对函数的参数重新赋值
    "consistent-return": [0], // 禁止函数在不同分支返回不同类型的值
    "react/forbid-prop-types": [0], // // 禁止使用一些指定的 propTypes
    "react/jsx-filename-extension": [0],
    "global-require": [0], // require 必须在全局作用域下
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0], // // jsx 中禁止使用 bind
    "react/prop-types": [0], // 组件必须写 propType
    "react/prefer-stateless-function": [0], // 必须使用 pure function
    "react/jsx-first-prop-new-line": [0], // 第一个 prop 必须得换行
    "react/jsx-wrap-multilines": [ // 多行的 jsx 必须有括号包起来
      "error", {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "ignore"
      }
    ],
    "no-unused-expressions": [0], //  禁止无用的表达式
    "no-else-return": [0], // 禁止在 else 内使用 return，必须改为提前结束, else 中使用 return 可以使代码结构更清晰
    "no-restricted-syntax": [0],  // 禁止使用特定的语法，它用于限制某个具体的语法不能使用
    "import/no-extraneous-dependencies": [0],
    "import/no-dynamic-require": [0],
    "no-use-before-define": [0], // 变量必须先定义后使用
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "no-nested-ternary": [0], // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    "arrow-body-style": [0],   // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 } @off 箭头函数的返回值，应该允许灵活设置
    "import/extensions": [0],
    "no-bitwise": [0], // 禁止使用位运算
    "no-cond-assign": [0], // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
    "import/no-unresolved": [0],
    "comma-dangle": [ // 对象的最后一个属性末尾必须有逗号
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "object-curly-newline": [0], // 大括号内的首尾必须有换行
    "function-paren-newline": [0],
    "no-restricted-globals": [0], //  // 禁止使用指定的全局变量
    "require-yield": [1], // generator 函数内必须有 yield
    "semi": [0], // 尾部逗号
    "typescript/class-name-casing": [2],
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "none",
        caughtErrors: "none",
        ignoreRestSiblings: true
      }
    ],
  }
}
