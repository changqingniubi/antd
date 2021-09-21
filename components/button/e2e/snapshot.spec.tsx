/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-09-21 17:53:17
 * @LastEditTime: 2021-09-21 18:12:12
 * @LastEditors: changqing
 * @Usage: 
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import Button from '..';
import 'jest-environment-puppeteer';
const toMatchSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: `${process.cwd()}/snapshots`,
  customDiffDir: `${process.cwd()}/diffSnapshots`,
});
expect.extend({ toMatchSnapshot });
describe('Button snapshot', () => {
  it('screenshot should correct', async () => {
    await jestPuppeteer.resetPage();
    await page.goto(`file://${process.cwd()}/tests/index.html`);
    const html = ReactDOMServer.renderToString(<Button>按钮</Button>);
    await page.evaluate((innerHTML:string) => {
      document.querySelector('#root')!.innerHTML = innerHTML;
    }, html);
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot();
  });
});
