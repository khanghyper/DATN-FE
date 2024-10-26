import React from 'react';
import BannerHomeGuest from '../_components/banner';
import { Button } from '@/components/ui/button';
import CategoriesIconGuest from '../_components/categoriesIcon';
import { array } from 'zod';
import CardProduct from '../_components/card-product';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import VoucherComponent from '../_components/voucher';

const SieuSalePage = () => {
  return (
    <div className='w-content h-auto '>
      <Breadcrumb className="pb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-semibold'>Sale</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="banner-sale w-[1179px] h-[247px] flex gap-3 mt-3">
        <div className="banner-left w-1/2  h-[247px] ">
          <img src="./images/banner1.webp" className="rounded-[5px] w-[587px] h-[247px]" />
        </div>
        <div className="banner-right w-1/2 h-[247px] ">
          <img src="./images/banner2.webp" className="rounded-[5px] w-[587px] h-[247px]" />
        </div>
      </div>
      <div className="section2 w-full h-auto mt-6">
        <h1 className='font-bold text-[28px] w-full h-[24px] text-[#FF0000] flex justify-center items-center pt-2'>ĐẠI HỘI SIÊU SALE</h1>
        <div className="sale-voucher-section grid grid-cols-3 w-full justify-center items-center mt-5 gap-3">
          {
            Array.from({ length: 6 }, (_, i) => i + 1).map(item => (
              <VoucherComponent key={item} />
            ))
          }
        </div>
      </div>
      <CategoriesIconGuest />
      <div className='card-product w-full'>
        <div className="list-card-product py-3 grid grid-cols-6 gap-4">
          {
            Array.from({ length: 18 }, (_, i) => i + 1).map(item => (
              <CardProduct key={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SieuSalePage;