import ejs from 'ejs';
import fs from 'fs';
import { Octokit } from '@octokit/core';
import { minify } from 'html-minifier';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const template = fs.readFileSync('./template.ejs', { encoding: 'utf8' });
const mdContent = fs.readFileSync('./README.md', { encoding: 'utf8' });

const res = await octokit.request('POST /markdown', {
  headers: {
    accept: 'application/vnd.github+json',
  },
  text: mdContent,
});

if (res.status === 200) {
  const mdHtml = res.data;

  const htmlContent = ejs.render(template, { content: mdHtml });

  const miniHtml = minify(htmlContent, { collapseWhitespace: true, minifyCSS: true });

  fs.writeFileSync('./public/index.html', miniHtml);
}
