module.exports = {
  // 表示当前目录为根目录，ESLint 规则将被限制到该目录下
  root: true,
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  // env 表示启用 ESLint 检测的环境
  env: {
    // 在 node 环境下启动 ESLint 检测
    node: true
  },
  // ESLint 中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启用规则及其各自的错误级别
  /**
   * 错误级别分为三种：
   * 'off' 或 0 - 关闭规则
   * 'warn' 或 1 - 开启规则，使用警告级别的错误，warn
   * 'error' 或 2 - 开启规则，使用错误级别的错误，error
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  }
}
