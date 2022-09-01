import ejs from 'ejs';
import fs from 'fs';
import showdown from 'showdown';
import { minify } from 'html-minifier';

const converter = new showdown.Converter();
converter.setFlavor('github');

const mdContent = fs.readFileSync('./README.md', { encoding: 'utf8' });
const mdHtml = converter.makeHtml(mdContent);

const template = fs.readFileSync('./template.ejs', { encoding: 'utf8' });
const htmlContent = ejs.render(template, { content: mdHtml });

const miniHtml = minify(htmlContent, { collapseWhitespace: true, minifyCSS: true });

fs.writeFileSync('./public/index.html', miniHtml);
