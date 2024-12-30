import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export default defineEventHandler(async (event) => {
  const files = await fs.readdirSync(`./_posts`);


  const posts = files.map((filename) => {
    const file = fs.readFileSync(`./_posts/${filename}`).toString();

    const { data: metadata, content } = matter(file);
    const htmlContent = remark()
      .use(remarkHtml)
      .processSync(content)
      .toString()
  
    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent,
    };
  });

  return posts
})