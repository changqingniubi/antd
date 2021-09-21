/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 17:45:30
 * @LastEditTime: 2021-09-21 17:45:31
 * @LastEditors: changqing
 * @Usage:
 */
module.exports = {
  verbose: true,
  testEnvironment: 'jest-environment-puppeteer',
  setupFiles: ['./tests/setup.js'],
  preset: 'jest-puppeteer',
  testMatch: ['**/e2e/**/*.(spec|test).(j|t)sx'],
};
