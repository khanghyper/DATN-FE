import React from 'react';
import BannerHomeGuest from '../_components/banner';
import { Button } from '@/components/ui/button';
import CategoriesIconGuest from '../_components/categoriesIcon';
import { array } from 'zod';
import CardProduct from '../_components/card-product';

const SieuSalePage = () => {
  return (
    <div className='w-content h-auto '>
      <div className="banner-sale w-[1179px] h-[247px] flex gap-3 mt-3">
        <div className="banner-left w-1/2  h-[247px] ">
          <img src="./images/banner1.webp" className="rounded-[5px] w-[587px] h-[247px]" />
        </div>
        <div className="banner-right w-1/2 h-[247px] ">
          <img src="./images/banner2.webp" className="rounded-[5px] w-[587px] h-[247px]" />
        </div>
      </div>
      <div className="section2 w-full h-[154px] mt-6">
        <h1 className='font-bold text-[28px] w-full h-[24px] text-[#FF0000] flex justify-center items-center pt-2'>ĐẠI HỘI SIÊU SALE</h1>
        <div className="sale-voucher-section flex w-full h-[92px] justify-center items-center mt-5 gap-3">
          <div className='w-[318px] h-[92px] flex'>
            <div className='w-[212px] h-full shadow border-y-2 border-l-2'>
              <div className='top w-full h-[60px] flex justify-between  px-1 rounded-l-[5px]'>
                <div className='w-[157px] flex flex-col font-bold text-[15px] justify-center text-[#D5600C]'>
                  <span>Giảm giá 200K đơn từ</span>
                  <span>2Tr</span>
                </div>
                <div className='w-[48px] h-[38px] text-[12px] flex items-center justify-end'>
                  <span className='text-[#0F62FE]'>Chi tiết</span>
                </div>
              </div>
              <div className='bottom w-full h-[32px] flex gap-2 px-1 items-center '>
                <span className='text-[11px] font-semibold text-gray-400'>HSD</span>
                <span className='text-[12px] font-bold text-[#3F4B53]'>16:59 31/08/2024</span>
              </div>
            </div>
            <div className='w-[16px] h-full flex flex-col'>
              <div className='border-b-4  w-[16px] h-[10px] rounded-b-[44px]'>

              </div>
              <div className=' w-[16px] h-[72px]  rounded-t-[-24px]'>

              </div>
              <div className='border-t-4 w-[16px] h-[10px] rounded-t-[44px]'>

              </div>
            </div>
            <div className='w-[90px] h-full flex items-center justify-center rounded-r-[5px] shadow border-y-2 border-r-2'>
              <Button className='bg-blue-600'>Lưu</Button>
            </div>
          </div>
          <div className='w-[318px] h-[92px] flex'>
            <div className='w-[212px] h-full shadow border-y-2 border-l-2'>
              <div className='top w-full h-[60px] flex justify-between  px-1 rounded-l-[5px]'>
                <div className='w-[157px] flex flex-col font-bold text-[15px] justify-center text-[#D5600C]'>
                  <span>Giảm giá 200K đơn từ</span>
                  <span>2Tr</span>
                </div>
                <div className='w-[48px] h-[38px] text-[12px] flex items-center justify-end'>
                  <span className='text-[#0F62FE]'>Chi tiết</span>
                </div>
              </div>
              <div className='bottom w-full h-[32px] flex gap-2 px-1 items-center '>
                <span className='text-[11px] font-semibold text-gray-400'>HSD</span>
                <span className='text-[12px] font-bold text-[#3F4B53]'>16:59 31/08/2024</span>
              </div>
            </div>
            <div className='w-[16px] h-full flex flex-col'>
              <div className='border-b-4  w-[16px] h-[10px] rounded-b-[44px]'>

              </div>
              <div className=' w-[16px] h-[72px]  rounded-t-[-24px]'>

              </div>
              <div className='border-t-4 w-[16px] h-[10px] rounded-t-[44px]'>

              </div>
            </div>
            <div className='w-[90px] h-full flex items-center justify-center rounded-r-[5px] shadow border-y-2 border-r-2'>
              <Button className='bg-blue-600'>Lưu</Button>
            </div>
          </div>
          <div className='w-[318px] h-[92px] flex'>
            <div className='w-[212px] h-full shadow border-y-2 border-l-2'>
              <div className='top w-full h-[60px] flex justify-between  px-1 rounded-l-[5px]'>
                <div className='w-[157px] flex flex-col font-bold text-[15px] justify-center text-[#D5600C]'>
                  <span>Giảm giá 200K đơn từ</span>
                  <span>2Tr</span>
                </div>
                <div className='w-[48px] h-[38px] text-[12px] flex items-center justify-end'>
                  <span className='text-[#0F62FE]'>Chi tiết</span>
                </div>
              </div>
              <div className='bottom w-full h-[32px] flex gap-2 px-1 items-center '>
                <span className='text-[11px] font-semibold text-gray-400'>HSD</span>
                <span className='text-[12px] font-bold text-[#3F4B53]'>16:59 31/08/2024</span>
              </div>
            </div>
            <div className='w-[16px] h-full flex flex-col'>
              <div className='border-b-4  w-[16px] h-[10px] rounded-b-[44px]'>

              </div>
              <div className=' w-[16px] h-[72px]  rounded-t-[-24px]'>

              </div>
              <div className='border-t-4 w-[16px] h-[10px] rounded-t-[44px]'>

              </div>
            </div>
            <div className='w-[90px] h-full flex items-center justify-center rounded-r-[5px] shadow border-y-2 border-r-2'>
              <Button className='bg-blue-600'>Lưu</Button>
            </div>
          </div>
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