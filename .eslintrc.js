module.exports = {
  root: true,
  env: {
      browser: true,
      node: true
  },
  parserOptions: {
      parser: 'babel-eslint'
  },
  extends: ['react-app'],
  plugins: ['react', 'import', 'flowtype', 'jsx-a11y'],
  // add your custom rules here
  rules: {
      'jsx-a11y/anchor-has-content': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // 一般运算符放置行尾
      // 三目运算符放置行首
      'operator-linebreak': [
          'error',
          'after',
          { overrides: { '?': 'before', ':': 'before' } }
      ],
      eqeqeq: 'error', // ===
      quotes: ['error', 'single'], // ''
      // 不允许未使用变量存在
      'no-unused-vars': [
          'error',
          {
              /** 需要忽略 no-unused-vars 检测的变量名正则 */
              varsIgnorePattern: '',
              /** 允许存在未使用函数参数 */
              args: 'none'
          }
      ]
  }
};
