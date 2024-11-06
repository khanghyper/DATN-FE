import Image from 'next/image';
import BlogPostCard from '@/app/(guest)/_components/BlogPostCard';
import BlogSection from '../_components/blog-section';

// const blogPosts = [
//   {
//     image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lmzxvxvxvxvxvx',
//     title: 'Tổng hợp 7+ review mặt nạ Foodaholic đáng mua nhất',
//     excerpt: 'Review mặt nạ Foodaholic một cách chi tiết về thiết kế bao bì cũng như công dụng chăm sóc da ...',
//     date: '19/09/2024',
//     category: 'Chăm Sóc Da Mặt',
//     author: 'Ngân Phạm',
//     slug: 'review-mat-na-foodaholic'
//   },
//   {
//     image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lmzxvxvxvxvxy',
//     title: 'Mặt nạ Bioaqua có tốt không? Review chi tiết từng loại',
//     excerpt: 'Mặt nạ Bioaqua được nhiều tín đồ làm đẹp yêu thích, nhưng liệu mặt nạ Bioaqua có tốt không? Bài ...',
//     date: '18/09/2024',
//     category: 'Chăm Sóc Da Mặt',
//     author: 'Ngân Phạm',
//     slug: 'review-mat-na-bioaqua'
//   },
// ];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <img src="/images/logo.png" alt="VNSHOP News" className="h-12 w-auto" />
      </div>
      <BlogSection/>
    </div>
  );
}