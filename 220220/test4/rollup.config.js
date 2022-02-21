import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    commonjs({
      // plugin-commonjs 默认会跳过所有含 import/export 的模块，
      // 如果要支持 import + require 的混合写法，需要带上此属性
      transformMixedEsModules: true,
      sourceMap: false,
    })
  ]
};