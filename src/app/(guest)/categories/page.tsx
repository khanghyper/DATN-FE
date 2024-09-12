import { ChevronDown, FileLineChart, Filter, Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import CardProduct from '../_components/card-product';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import CategoriesIconGuest from '../_components/categoriesIcon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { title } from 'process';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const categoriesList: any = [
  {
    title: 'Dụng cụ nhà bếp',
    categoryChildren: [
      { title: 'Ấm nước các loại' },
      { title: 'Dụng cụ chứa đựng thực phẩm' },
      { title: 'Dao, kéo và phụ kiện' },
      { title: 'Dụng cụ làm bánh' },
      { title: 'Kệ nhà bếp' },
      { title: 'Bếp nướng, vỉ nướng' },
      { title: 'Phụ kiện nhà bếp' },
      { title: 'Nồi và chảo' },
      { title: 'Bộ hộp cơm và phụ kiện' },
      { title: 'Thùng đựng gạo' },
    ],
  }, {
    title: 'Đồ dùng nấu ăn'
  }, {
    title: 'Nội thất'
  }
];

const filterCate: any = [
  {
    title: 'Thương hiệu',
    opt: [
      { title: 'Tundo' },
      { title: 'DAICAT' },
      { title: 'Total' },
      { title: 'Makita' },
      { title: 'Khác' },
    ],
  },
  {
    title: 'Phân loại',
    opt: [
      { title: 'Bộ chăn ga gối' },
      { title: 'Bộ ga gối' },
      { title: 'Gối' },
      { title: 'Khác' },
    ],
  },
];


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
            <h2 className='font-bold text-[17px] mt-2'>Khám phá theo danh mục</h2>
            <div className="section1-list-cate w-full flex flex-col gap-1 pl-[4px] mt-2">
              <Accordion type="single" collapsible>
                {
                  categoriesList.map((it: any, index: number) => (
                    <AccordionItem value={`item-${index}`} key={index} >
                      <AccordionTrigger className='font-semibold text-[16px] pb-2'>{it.title}</AccordionTrigger>
                      {
                        it.categoryChildren && it.categoryChildren.map((ct: any, childIndex: number) => (
                          <AccordionContent className='pl-1 text-[14px] font-medium pb-2' key={childIndex}>
                            {ct.title}
                          </AccordionContent>
                        ))
                      }
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </div>
          <div className="list-cate flex flex-col w-full ">
            <h2 className='font-bold text-[17px] mt-2'>Lọc sản phẩm</h2>
            <div className="section1-list-cate w-full flex flex-col gap-1 pl-[4px] mt-2">
              <Accordion type="single" collapsible>
                {
                  filterCate.map((it: any, index: number) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className='font-semibold text-[16px] pb-2'>{it.title}</AccordionTrigger>
                      {
                        it.opt && it.opt.map((cd: any, index: number) => (
                          <AccordionContent key={index} className='pl-1 text-[14px] font-medium pb-2'>
                            {cd.title}
                          </AccordionContent>
                        ))
                      }
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </div>

        </div>
        <div className="right-bottom-cate w-[971px] h-auto">
          {/* <div className="title-right-cate w-full h-[74px] flex items-center">
            <h1 className='font-extrabold text-[20px] pl-[14px]'>Nhà cửa & Đời sống</h1>
          </div> */}
          <div className="banner-right-cate w-full h-[190px] flex gap-3">
            <img src="./images/banner1.webp" className='w-1/2 rounded ' />
            <img src="./images/banner1.webp" className='w-1/2 rounded' />
          </div>
          <CategoriesIconGuest />
          <div className="option-cate-right w-full h-[103px] pt-4 ">
            <div className='w-full flex items-center'>
              <div className="title w-full h-[24px] ">
                <h2 className='font-bold text-[18px]'>Tất cả sản phẩm</h2>
              </div>
              <div className="mt-2 right-opt w-[95px] h-[36px] flex gap-3 border rounded-[15px] px-2 py-1 items-center cursor-pointer">
                <Filter size={18} />
                <h2 className='text-[14px]'>Tất cả</h2>
              </div>
            </div>
            <div className="opt-bottom w-full h-[24px] flex justify-between items-center mt-4 text-[14px]">
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;