import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BlogDetailPage = () => {
  return (
    <div className='w-full'>
      <Breadcrumb className="pb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='w-full px-5'>
        <h1 className='font-bold text-[47px]'>21 + Cách phối đồ với áo gile trẻ trung sành điệu, cân mọi phong cách</h1>
        <div className='w-full h-[50px] flex items-center gap-2 text-[12px]'>
          <span className='font-semibold text-gray-500'>BY</span>
          <span className='size-5 border rounded-full'>
            <img src="" alt="" />
          </span>
          <span className='font-bold '>Châu Lê</span>
          <span>10/07/2024</span>
          <span className='font-semibold text-gray-500'>THỜI TRANG , THỜI TRANG NAM NỮ</span>
        </div>
        <div className='w-full h-[700px] flex justify-center items-center'>
          <img src="./images/banner1.webp" alt="Lỗi ảnh" className='size-full object-contain' />
        </div>
        <p className='text-[16px] font-semibold'>Áo gile là loại trang phục mang đậm chất Hàn Quốc, trở thành trào lưu trong những năm gần đây.
          Tuy nhiên, không phải ai cũng biết cách <span className='text-red-500'>phối đồ với áo gile</span> sao cho thật đẹp và hợp thời trang. Hãy cùng Shopee Blog tìm hiểu những
          cách phối đồ đầy thu hút cùng gile ngay dưới đây nhé!
        </p>
        <div className='blogSection w-full '>
          <h2 className='text-[42px] font-bold mt-4'>Tiêu chí khi phối đồ với áo gile</h2>
          <p className='text-[16px]'>Để có một bộ trang phục <span className='font-semibold'>phối đồ với áo gile</span> đầy cuốn hút, bạn đừng quên bỏ túi những lưu ý quan trọng dưới đây:</p>
          <div className='w-full pl-8 mt-4 text-[16px] flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
          </div>
          <div className='w-full flex flex-col gap-2 items-center py-4 mt-4'>
            <img src="./images/banner1.webp" alt="" className='size-[80%]' />
            <span>Bạn cần tuân thủ cách mặc áo gile sao cho đẹp (Nguồn: Kooding)</span>
          </div>
          <div className='w-full h-[80px] flex items-center justify-center'>
            <Button className='px-8 bg-blue-500'>MUA NGAY</Button>
          </div>
        </div>
        <div className='blogSection w-full '>
          <h2 className='text-[42px] font-bold mt-4'>Tiêu chí khi phối đồ với áo gile</h2>
          <p className='text-[16px]'>Để có một bộ trang phục <span className='font-semibold'>phối đồ với áo gile</span> đầy cuốn hút, bạn đừng quên bỏ túi những lưu ý quan trọng dưới đây:</p>
          <div className='w-full pl-8 mt-4 text-[16px] flex flex-col gap-2'>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
            <p>
              <span className='font-bold'>
                Màu sắc hài hòa giữa các lớp áo:
              </span>
              Nếu như chiếc gile đã mang nhiều họa tiết sặc sỡ thì bạn cần tối giản hóa lớp áo bên trong bằng những màu đơn sắc và
              ngược lại.
            </p>
          </div>
          <div className='w-full flex flex-col gap-2 items-center py-4 mt-4'>
            <img src="./images/banner1.webp" alt="" className='size-[80%]' />
            <span>Bạn cần tuân thủ cách mặc áo gile sao cho đẹp (Nguồn: Kooding)</span>
          </div>
          <div className='w-full h-[80px] flex items-center justify-center'>
            <Button className='px-8 bg-blue-500'>MUA NGAY</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;