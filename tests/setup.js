/*
 * @Description:
 * @Author: changqing
 * @Date: 2021-09-21 17:41:01
 * @LastEditTime: 2021-09-21 23:58:10
 * @LastEditors: changqing
 * @Usage:
 */
// const React = require('react');
const Enzyme = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
