import { ChevronDown, ChevronLeft, ChevronRight, FileLineChart, Filter, LayoutPanelLeft, Star, ThumbsUp } from 'lucide-react';
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
import { Button } from '@/components/ui/button';

const categoriesList: any[] = [
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

const categoriesListChildren: { id: number, title: string, parentId: number }[] = [
  { id: 1, title: 'Đồ dùng nhà cửa', parentId: 0 },
  { id: 2, title: 'Nước lau nhà', parentId: 1 },
  { id: 3, title: 'Nước lau nhà 2', parentId: 1 },
  { id: 4, title: 'Nước lau nhà 3', parentId: 1 },
  { id: 5, title: 'Dọn dẹp vệ sinh', parentId: 0 },
  { id: 6, title: 'Nước rửa chén', parentId: 5 },
  { id: 7, title: 'Nước rửa chén 2', parentId: 5 },
  { id: 8, title: 'Nước rửa chén 3', parentId: 5 },
  { id: 9, title: 'Nước rửa chén 4', parentId: 5 },
]

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

const onclickProductCate = (cateId: number) => {

}


const CategoriesPage = async () => {
  try {
    const apiProduct = await fetch('https://vnshop.top/api/products').then(res => res.json());
    if (apiProduct) {
      return (
        <>
          <Breadcrumb className="pb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='font-semibold'>Danh mục sản phẩm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='bottom-cate w-content flex py-4 justify-between'>
            <div className="left-bottom-cate w-[208px] h-auto">
              <div className="list-cate flex flex-col w-full ">
                <div className='w-full h-[50px] flex gap-2 items-center border-b-2'>
                  <LayoutPanelLeft size={20} />
                  <h2 className='font-bold text-[18px]'>Tất cả danh mục</h2>
                </div>
                <div className="section1-list-cate w-full flex flex-col gap-1 pl-[4px] mt-4">
                  <Accordion type="single" collapsible>
                    {/* {
                      categoriesListChildren.filter(item => item.parentId == 0).map((item: any) => (
                        <AccordionItem value={item.id} key={item.id} >
                          <AccordionTrigger className='font-semibold text-[16px] pb-2'>{item.title}</AccordionTrigger>
                          {
                            categoriesListChildren.filter(parentId => parentId.parentId == item.id).map((item2: any) => (
                              <AccordionContent className='pl-2 text-[14px] font-medium pb-2' key={item2.id}>
                                - {item2.title}
                              </AccordionContent>
                            ))
                          }
                        </AccordionItem>
                      ))
                    } */}
                    {
                      categoriesListChildren.filter(filterCate => filterCate.parentId == 0).map((item: any, index: number) => (
                        <AccordionItem value={item.id} key={index} >
                          <AccordionTrigger className=' text-[16px] pb-2 '>{item.title}</AccordionTrigger>
                        </AccordionItem>
                      ))
                    }
                  </Accordion>
                </div>
              </div>
              <div className="filter-cate flex flex-col w-full mt-2 border-b-2 ">
                <div className='w-full h-[50px] flex gap-2 items-center border-b-2  '>
                  <Filter size={20} />
                  <h2 className='font-bold text-[18px]'>Lọc sản phẩm</h2>
                </div>
                <div className="section1-list-cate w-full flex flex-col gap-2 pl-[4px] mt-2 ">
                  <span>Theo danh mục</span>
                  <div className='w-full flex flex-col gap-2 mb-2'>
                    {
                      categoriesListChildren.filter(filterCate => filterCate.parentId == 0).map((item: any, index: number) => (
                        <div className='w-full flex h-[32px] gap-2 items-center' key={index}>
                          <span className='size-4 border'></span>
                          <span className='text-[14px]'>{item.title}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className='khoangGiaSection w-full h-[140px] border-b-2 flex flex-col gap-3 py-4'>
                <span>Khoảng Giá</span>
                <div className='w-full h-[30px] flex gap-2 items-center'>
                  <input type="number" placeholder='đ TỪ' className='w-[80px] text-[12px] h-full outline-none border pl-2' />
                  <span className='w-[30px] border h-0'></span>
                  <input type="number" placeholder='đ ĐẾN' className='w-[80px] text-[12px] h-full outline-none border pl-2' />
                </div>
                <Button className='h-[32px] rounded-none bg-blue-500'>Áp dụng</Button>
              </div>
              <div className='danhGiaSection w-full  flex flex-col gap-2 border-b-2 py-4'>
                <span>Đánh Giá</span>
                <div className='w-full h-[25px] flex gap-2 pl-4 items-center'>
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                </div>
                <div className='w-full h-[25px] flex gap-2 pl-4 items-center'>
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='black' />
                  <span>trở lên</span>
                </div>
                <div className='w-full h-[25px] flex gap-2 pl-4 items-center'>
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <span>trở lên</span>
                </div>
                <div className='w-full h-[25px] flex gap-2 pl-4 items-center'>
                  <Star size={16} color='orange' />
                  <Star size={16} color='orange' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <span>trở lên</span>
                </div>
                <div className='w-full h-[25px] flex gap-2 pl-4 items-center'>
                  <Star size={16} color='orange' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <Star size={16} color='black' />
                  <span>trở lên</span>
                </div>
              </div>
              <div className='w-full h-[30px] pt-4'>
                <Button className='w-full rounded-none bg-blue-500'>Xóa tất cả</Button>
              </div>
            </div>
            <div className="right-bottom-cate w-[971px] h-auto ">
              {/* <div className="title-right-cate w-full h-[74px] flex items-center">
                <h1 className='font-extrabold text-[20px] pl-[14px]'>Nhà cửa & Đời sống</h1>
              </div> */}
              {/* <div className="banner-right-cate w-full h-[190px] flex gap-3">
                <img src="./images/banner1.webp" className='w-1/2 rounded ' />
                <img src="./images/banner1.webp" className='w-1/2 rounded' />
              </div> */}
              {/* <CategoriesIconGuest /> */}
              <div className="option-cate-right w-full h-[50px] border-b-2 bg-gray-200 flex justify-between">
                <div className='w-[700px] h-full flex gap-4 px-4 items-center '>
                  <span>Sắp xếp theo</span>
                  <Button className=' h-[34px] px-[15px] rounded-none bg-blue-500'>Phổ biến</Button>
                  <Button className=' h-[34px] px-[15px] rounded-none bg-white text-black hover:bg-white'>Mới Nhất</Button>
                  <Button className=' h-[34px] px-[15px] rounded-none bg-white text-black hover:bg-white'>Bán Chạy</Button>
                  <div className='w-[200px] h-[34px] flex justify-between items-center bg-white px-2 py-2 relative'>
                    <span>Giá</span>
                    <ChevronDown />
                    <div className='hidden w-full bg-white absolute top-[33px] left-0 flex flex-col gap-2 p-2'>
                      <span>Giá: Thấp đến Cao</span>
                      <span>Giá: Cao đến Thấp</span>
                    </div>
                  </div>
                </div>
                <div className='w-[calc(100% - 700px)] flex items-center gap-2 px-4'>
                  <div className=''>
                    <span className='text-orange-500'>1</span>
                    <span>/</span>
                    <span>17</span>
                  </div>
                  <div className='flex'>
                    <ChevronLeft size={12} className='px-1 w-[30px] h-[30px] border bg-white' />
                    <ChevronRight size={12} className='px-1 w-[30px] h-[30px] border bg-white' />
                  </div>
                </div>
              </div>
              <div className='card-product w-full'>
                <div className="list-card-product py-3 grid grid-cols-4 gap-4">
                  {
                    apiProduct.data.data.map((item: any, index: number) => (
                      <CardProduct key={index} p={item} />
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
    } else {
      throw new Error('Lỗi lấy api kìa');
    }
  } catch (error) {
    console.log(error);
  }
};

export default CategoriesPage;