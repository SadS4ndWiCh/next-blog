import remark from 'remark';
import remarkHtml from 'remark-html';
import remarkImages from 'remark-images';

export default function markdownToHtml(markdown: string) {
  const html = remark()
    .use(remarkHtml)
    .use(remarkImages)
    .processSync(markdown);
  return html.toString();
}