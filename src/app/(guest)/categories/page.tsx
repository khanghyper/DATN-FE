import { ChevronDown, FileLineChart, Filter, Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import CardProduct from '../_components/card-product';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import CategoriesIconGuest from '../_components/categoriesIcon';



const CategoriesPage = () => {
  return (
    <>
      <Breadcrumb className="pb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-semibold'>Nhà cửa - Đời sống</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='bottom-cate w-content flex py-4 justify-between'>
        <div className="left-bottom-cate w-[208px] h-auto ">
          <div className="list-cate flex flex-col w-full ">
            <h2 className='font-bold'>Khám phá theo danh mục</h2>
            <div className="section1-list-cate w-full flex flex-col gap-1 pl-[4px] mt-2">
              <div className="title-section flex justify-between pr-2">
                <h3 className='font-semibold'>Dụng cụ nhà bếp</h3>
                <ChevronDown className='' />
              </div>
              <div className='content-section flex flex-col w-full gap-2 mt-1'>
                <span className='cursor-pointer'>Ấm nước các loại</span>
                <span className='cursor-pointer'>Dụng cụ chứa đựng thực phẩm</span>
                <span className='cursor-pointer'>Dao, kéo và phụ kiện</span >
                <span className='cursor-pointer'>Dụng cụ làm bánh</span >
                <span className='cursor-pointer'>Kệ nhà bếp</span >
                <span className='cursor-pointer'>Bếp nướng, vỉ nướng</span >
                <span className='cursor-pointer'>Phụ kiện nhà bếp</span >
                <span className='cursor-pointer'>Nồi và chảo</span >
                <span className='cursor-pointer'>Bộ hộp cơm và phụ kiện</span >
                <span className='cursor-pointer'>Thùng đựng gạo</span >
              </div>
            </div>
            <div className="section2-list-cate w-full flex flex-col gap-1 pl-[4px] mt-2">
              <div className="title-section flex justify-between pr-2">
                <h3 className='font-semibold'>Đồ dùng phòng ăn</h3>
                <ChevronDown className='' />
              </div>
            </div>
            <div className="section3-list-cate w-full flex flex-col gap-1 pl-[4px] mt-2">
              <div className="title-section flex justify-between pr-2 ">
                <h3 className='font-semibold'>Trang bị nhà cửa</h3>
                <ChevronDown className='' />
              </div>
            </div>
          </div>
        </div>
        <div className="right-bottom-cate w-[971px] h-auto">
          <div className="title-right-cate w-full h-[74px] flex items-center">
            <h1 className='font-extrabold text-[20px] pl-[14px]'>Nhà cửa & Đời sống</h1>
          </div>
          <div className="banner-right-cate w-full h-[190px] flex gap-3">
            <img src="./images/banner1.webp" className='w-1/2 rounded ' />
            <img src="./images/banner1.webp" className='w-1/2 rounded' />
          </div>
          <CategoriesIconGuest/>
          <div className="option-cate-right w-full h-[153px] pt-4 ">
            <div className="title w-full h-[24px] ">
              <h2 className='font-bold text-[18px]'>Tất cả sản phẩm</h2>
            </div>
            <div className="opt-mid w-full h-[82px] flex justify-between items-center border-b-2">
              <div className="left-opt w-[774px] h-[57px] flex gap-5">
                <div className="thuongHieu w-[350px] flex flex-col">
                  <div className="title w-full">
                    <p className='text-gray-400 text-[12px]'>Thương hiệu</p>
                  </div>
                  <div className="opt flex w-full gap-2 items-center">
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Tundo</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>DAICAT</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Total</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Makita</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'><ChevronDown /></span>
                    <span className=' text-[24px] font-light text-gray-400'>|</span>
                  </div>
                </div>
                <div className="phanLoai w-[424px] flex flex-col">
                  <div className="title w-full">
                    <p className='text-gray-400 text-[12px]'>Phân loại</p>
                  </div>
                  <div className="opt flex w-full gap-2 items-center ">
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Bộ chăn ga</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Bộ ga gối</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Gối</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'>Khác</span>
                    <span className='text-[14px] border px-3 py-1 rounded-[15px] cursor-pointer'><ChevronDown /></span>
                    <span className='text-[24px] font-light text-gray-400'>|</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 right-opt w-[95px] h-[36px] flex gap-3 border rounded-[15px] px-2 py-1 items-center cursor-pointer">
                <Filter size={18} />
                <h2 className='text-[14px]'>Tất cả</h2>
              </div>
            </div>
            <div className="opt-bottom w-full h-[24px] flex justify-between items-center mt-1 text-[14px]">
              <div className="left-bottom w-600px h-full flex items-center gap-3">
                <div className='flex gap-1 items-center'>
                  <span className='border py-3 px-3 rounded-[10px] bg-gray-200'></span>
                  <span className='text-red-600 font-bold'>NOW</span>
                  <span>Giao hỏa tốc 2H</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <span className='border py-3 px-3 rounded-[10px] bg-gray-200'></span>
                  <ThumbsUp size={16} className='text-red-600' />
                  <span className='text-red-600 font-bold'>TOP DEAL 25.7</span>
                  <span>Siêu rẻ</span>
                </div>
                <div className='flex gap-1 items-center'>
                  <span className='border py-3 px-3 rounded-[10px] bg-gray-200'></span>
                  <Star size={16} color='yellow' />
                  <Star size={16} color='yellow' />
                  <Star size={16} color='yellow' />
                  <Star size={16} color='yellow' />
                  <Star size={16} color='black' />
                  <span>Từ 4 sao</span>
                </div>
              </div>
              <div className="right-bottom w-[182px] h-full flex items-center gap-2 ">
                <span>Sắp xếp</span>
                <div className='h-full flex border py-4 px-4 items-center rounded-[15px] '>
                  <span>Phổ biến</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className='card-product w-full'>
            <div className="list-card-product py-3 grid grid-cols-4 gap-4">
              {
                Array.from({ length: 20 }, (_, i) => i + 1).map(item => (
                  <CardProduct key={item} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;