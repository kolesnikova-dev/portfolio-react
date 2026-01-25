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
      <div className="flex items-center">
        <DateBox>{date}</DateBox>
        <h2 className="p-4 text-6xl tracking-wider">{title}</h2>
      </div>

      <div className="p-4 text-5xl whitespace-break-spaces text-left">
        {content}
      </div>
    </BlogBox>
  );
};

export const BlogPage = () => {
  return (
    <div className="sm:py-10 md:py-52">
      {Object.entries(blogs)
        .reverse()
        .map(([id, blog]) => (
          <BlogPost key={id} blog={blog} />
        ))}
    </div>
  );
};
