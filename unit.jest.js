/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 17:42:57
 * @LastEditTime: 2021-09-21 17:42:57
 * @LastEditors: changqing
 * @Usage:
 */
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom', // 运行测试的环境
  setupFiles: ['./tests/setup.js'],
  testMatch: ['**/unit/**/*.(spec|test).(js|ts|jsx|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.(js|ts|jsx|tsx)',
    '!components/**/*.stories.(js|ts|jsx|tsx)',
    '!components/**/*.(spec|test).(js|ts|jsx|tsx)',
  ],
};
