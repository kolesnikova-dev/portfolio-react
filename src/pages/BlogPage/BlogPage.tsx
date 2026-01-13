import { blogs } from "../../data/blogData";
import { BlogBox, DateBox } from "./BlogBox";

type BlogContent = {
  date: string;
  title: string;
  content: string;
};

type BlogPostProps = {
  blog: BlogContent;
};

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  const { date, title, content } = blog;
  return (
    <BlogBox>
      <div className="flex">
        <DateBox>{date}</DateBox>
        <h2 className="p-4 text-6xl">{title}</h2>
      </div>

      <div className="p-4 text-5xl">{content}</div>
    </BlogBox>
  );
};

export const BlogPage = () => {
  return (
    <div className="pd-block-pos-relative">
      {Object.entries(blogs).map(([id, blog]) => (
        <BlogPost key={id} blog={blog} />
      ))}
    </div>
  );
};
