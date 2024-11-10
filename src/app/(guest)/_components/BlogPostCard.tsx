import Link from 'next/link';
import { Calendar, User } from 'lucide-react';


const BlogPostCard = ({ data }: { data: any }) => {
  return (
    <div className="card-blog py-1 shadow rounded border">
      <div className="img w-full px-5 pt-2 h-[200px] relative">
        <Link href={`/blog/${data.slug}`}>
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        </Link>
        <div className="absolute top-3 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          BLOG
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Link href={`/blog/${data.slug}`} className="text-[16px] font-medium hover:text-blue-600 transition-colors duration-300">
          {data.title}
        </Link>
        <p className="text-[14px] text-gray-600 line-clamp-2">{data.excerpt}</p>
        <div className="flex justify-between items-center text-[12px] text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{data.created_at}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{data.author}</span>
          </div>
        </div>
        <div className="text-[12px] bg-gray-100 rounded-sm px-2 py-1 inline-block">
          {data.category}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;