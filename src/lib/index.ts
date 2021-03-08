import fs from 'fs';
import { join } from 'path';

import grayMatter from 'gray-matter';
import markdownToHtml from './markdownToHtml';

interface Post {
  title?: string;
  date?: string;
  thumbnail?: string;
  content?: string;
  excerpt?: string;
  slug?: string;
}

const postsDirectory = join(process.cwd(), 'src', '_posts');

export function getPostsSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContent = fs.readFileSync(`${fullPath}`, 'utf-8'); 
  const { content, data } = grayMatter(fileContent);

  const post = {} as Post;

  fields.forEach(field => {
    if(field === 'slug') post[field] = realSlug;
    
    if(field === 'content') {
      const htmlContent = markdownToHtml(content);

      post[field] = htmlContent;
    };
    
    if(data[field]) post[field] = data[field];
  });

  return post;
}

export function getAllPosts(fields: string[] = []): Post[] {
  const allPostsSlugs = getPostsSlugs();
  const posts = allPostsSlugs
    .map(postSlug => getPostBySlug(postSlug, fields))
    .sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return posts;
}

