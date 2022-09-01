import ejs from 'ejs';
import { markdown } from 'markdown';
import fs from 'fs';
import { minify } from 'html-minifier';

const mdContent = fs.readFileSync('./README.md', { encoding: 'utf8' });
const mdHtml = markdown.toHTML(mdContent);

const template = fs.readFileSync('./template.ejs', { encoding: 'utf8' });
const htmlContent = ejs.render(template, { content: mdHtml });

const miniHtml = minify(htmlContent, { collapseWhitespace: true });

fs.writeFileSync('./public/index.html', miniHtml);
