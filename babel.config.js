/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 11:14:00
 * @LastEditTime: 2021-09-21 11:15:16
 * @LastEditors: changqing
 * @Usage:
 */
module.exports = {
  presets: [
    '@babel/preset-react', // 把React编译 成ES5
    [
      '@babel/preset-env', // 把ES6编译 成ES5
      {
        modules: 'auto',
        targets: {
          // 编译 兼容的目标
          browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
        },
      },
    ],
  ],
  plugins: [
    [
      // 支持typescript
      '@babel/plugin-transform-typescript',
      {
        isTSX: true,
      },
    ],
    // 提取一些编译运行时帮助方法
    ['@babel/plugin-transform-runtime'],
  ],
};
