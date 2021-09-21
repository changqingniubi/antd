/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-21 16:58:04
 * @LastEditTime: 2021-09-21 16:58:05
 * @LastEditors: changqing
 * @Usage: 
 */
module.exports = {
  //如何查找故事 story book
  stories: [
      "../components/Introduction.stories.mdx",
      "../components/Install.stories.mdx",
      "../components/Components.stories.mdx",
      "../components/**/*.stories.mdx",
      "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ['@storybook/addon-essentials'],
};