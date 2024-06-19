import { ParsedPost } from "@/utils/mdParser";
import fs from 'fs';


const PostPage = async ({ params }: any) => {
  const { slug } = params;
  
  const parsedPosts: ParsedPost[] = JSON.parse(fs.readFileSync('posts/parsedPosts.json', 'utf8'));
  const postContent = parsedPosts.find(p => p.slug === slug);
  if(postContent){
  return (
    <div>
      <h1>{postContent?.frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postContent.htmlContent }}/>
    </div>
  );
}
else{
  return (
    <h1> 404 NOT FOUND</h1>
  )
}
};
export default PostPage;

