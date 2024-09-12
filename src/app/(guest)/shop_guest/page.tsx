import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import VoucherComponent from '../_components/voucher';


const ShopPageGuest = () => {
  return (
    <div className='w-content h-auto '>
      <Breadcrumb className="pb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-semibold'>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='header_page_shop w-full h-[130px] flex flex-col justify-center gap-2 border rounded bg-gradient-to-r from-[#569BDF] to-[#3181d1]'>
        <div className='section1 w-full h-[70px] flex gap-3 items-center pl-10 text-white'>
          <img src="./images/banner1.webp" className='object-cover w-[68px] h-[68px] border rounded-full' />
          <p className='text-[20px] font-bold'>Nano AHT</p>
          <span>|</span>
          <Button className='bg-blue-700'>Theo dõi</Button>
          <Star color='yellow' />
          <span>4.6 / 5</span>
          <span>|</span>
          <PersonIcon />
          <p>Người theo dõi: <span>520</span></p>
        </div>
        <div className='section2 w-full h-[36px] flex gap-6 justify-around items-center '>
          <div className='w-[618px] h-full flex justify-around items-center text-white'>
            <p>Cửa Hàng</p>
            <p>Tất Cả Sản Phẩm</p>
            <p>Bộ Sưu Tập</p>
            <p>Giá sốc hôm nay</p>
            <p>Hồ Sơ Cửa Hàng</p>
          </div>
          <div className='w-[320px] h-full flex justify-start '>
            <Input placeholder='Tìm sản phẩm cửa hàng' className='bg-white outline-none'></Input>
          </div>
        </div>
      </div>
      <div className='voucher_list w-full flex justify-center py-3'>
        <div className='w-[1000px] grid grid-cols-3 gap-3'>
          {
            Array.from({ length: 3 }, (_, i) => i + 1).map(item => (
              <VoucherComponent key={item} />
            ))
          }
        </div>
      </div>
      <div className='banner w-full h-[247px] flex gap-2'>
        <div className='w-1/2 drop-shadow-md'>
          <img src="./images/banner1.webp" className='w-full h-full object-fill rounded' />
        </div>
        <div className='w-1/2 drop-shadow-md'>
          <img src="./images/banner2.webp" className='w-full h-full object-fill rounded' />
        </div>
      </div>
      <div className='product_top_sale w-full h-[234px] mt-2'>
        <div className='w-full h-[28px] flex items-center justify-between mt-2 px-2'>
          <h3 className='text-[18px] font-bold'>Bán chạy nhất</h3>
          <span className='text-[#0B74E5] font-semibold cursor-pointer'>Xem tất cả</span>
        </div>
        <div className='w-full h-auto flex '>
          <div className='w-1/3 h-[182px] flex items-center gap-3 pl-4'>
            <div className='w-[137px] h-[164px]'>
              <img src="./images/banner1.webp" className='w-full h-full object-cover' />
            </div>
            <div className='w-[200px] h-[182px] flex flex-col gap-2 pt-2'>
              <div className='w-[89px] h-[20px] flex items-center gap-[2px] justify-center border rounded-[15px] bg-blue-50'>
                <Check color='white' size={12} className='bg-blue-600 rounded-full' />
                <span className='text-[10px] font-bold text-blue-600'>CHÍNH HÃNG</span>
              </div>
              <div className='w-full h-auto'>
                <p className='text-[12px]'>Can Phun Khói Nano Bạc Diệt Khuẩn Khử
                  Mùi Ô TÔ, Nhà Cửa Nano Reiwa</p>
              </div>
              <div className='w-[110px] h-[16px] flex items-center gap-1 text-gray-500 text-[12px]'>
                <div className='w-[34px] h-full flex items-center gap-1 '>
                  <span>4.6</span>
                  <Star color='yellow' size={12} />
                </div>
                <span className='text-gray-200'>|</span>
                <div className='w-[66px] h-full '>
                  <p>Đã bán <span>462</span></p>
                </div>

              </div>
              <div className='w-full flex gap-1 text-red-500 font-semibold'>
                <span>422.000</span>
                <span>đ</span>
                <span className='text-[12px]'>-20%</span>
              </div>
              <Button className='bg-[#0A68FF]'>Mua ngay</Button>
            </div>
          </div>
          <div className='w-1/3 h-[182px] flex items-center gap-3 pl-4'>
            <div className='w-[137px] h-[164px]'>
              <img src="./images/banner1.webp" className='w-full h-full object-cover' />
            </div>
            <div className='w-[200px] h-[182px] flex flex-col gap-2 pt-2'>
              <div className='w-[89px] h-[20px] flex items-center gap-[2px] justify-center border rounded-[15px] bg-blue-50'>
                <Check color='white' size={12} className='bg-blue-600 rounded-full' />
                <span className='text-[10px] font-bold text-blue-600'>CHÍNH HÃNG</span>
              </div>
              <div className='w-full h-auto'>
                <p className='text-[12px]'>Can Phun Khói Nano Bạc Diệt Khuẩn Khử
                  Mùi Ô TÔ, Nhà Cửa Nano Reiwa</p>
              </div>
              <div className='w-[110px] h-[16px] flex items-center gap-1 text-gray-500 text-[12px]'>
                <div className='w-[34px] h-full flex items-center gap-1 '>
                  <span>4.6</span>
                  <Star color='yellow' size={12} />
                </div>
                <span className='text-gray-200'>|</span>
                <div className='w-[66px] h-full '>
                  <p>Đã bán <span>462</span></p>
                </div>

              </div>
              <div className='w-full flex gap-1 text-red-500 font-semibold'>
                <span>422.000</span>
                <span>đ</span>
                <span className='text-[12px]'>-20%</span>
              </div>
              <Button className='bg-[#0A68FF]'>Mua ngay</Button>
            </div>
          </div>
          <div className='w-1/3 h-[182px] flex items-center gap-3 pl-4'>
            <div className='w-[137px] h-[164px]'>
              <img src="./images/banner1.webp" className='w-full h-full object-cover' />
            </div>
            <div className='w-[200px] h-[182px] flex flex-col gap-2 pt-2'>
              <div className='w-[89px] h-[20px] flex items-center gap-[2px] justify-center border rounded-[15px] bg-blue-50'>
                <Check color='white' size={12} className='bg-blue-600 rounded-full' />
                <span className='text-[10px] font-bold text-blue-600'>CHÍNH HÃNG</span>
              </div>
              <div className='w-full h-auto'>
                <p className='text-[12px]'>Can Phun Khói Nano Bạc Diệt Khuẩn Khử
                  Mùi Ô TÔ, Nhà Cửa Nano Reiwa</p>
              </div>
              <div className='w-[110px] h-[16px] flex items-center gap-1 text-gray-500 text-[12px]'>
                <div className='w-[34px] h-full flex items-center gap-1 '>
                  <span>4.6</span>
                  <Star color='yellow' size={12} />
                </div>
                <span className='text-gray-200'>|</span>
                <div className='w-[66px] h-full '>
                  <p>Đã bán <span>462</span></p>
                </div>

              </div>
              <div className='w-full flex gap-1 text-red-500 font-semibold'>
                <span>422.000</span>
                <span>đ</span>
                <span className='text-[12px]'>-20%</span>
              </div>
              <Button className='bg-[#0A68FF]'>Mua ngay</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='findCategories w-full h-[190px] mt-2'>
        <div className='w-full h-[28px] flex items-center justify-between px-2 mt-2'>
          <h3 className='text-[18px] font-bold'>Mua sắm theo danh mục</h3>
          <span className='text-[#0B74E5] font-semibold cursor-pointer'>Xem tất cả</span>
        </div>
        <div className='w-full h-[121px] flex justify-around text-[14px] font-semibold'>
          <div className='w-[277px] h-full flex items-center gap-3 cursor-pointer bg-[#F5F5FA]'>
            <div className='w-[110px] h-full'>
              <img src="./images/banner1.webp" className='w-full h-full object-cover' />
            </div>
            <div>
              <p>Nhà cửa - Đời sống</p>
            </div>
          </div>
          <div className='w-[277px] h-full flex items-center gap-3 cursor-pointer bg-[#F5F5FA]'>
            <div className='w-[110px] h-full'>
              <img src="./images/banner2.webp" className='w-full h-full object-cover' />
            </div>
            <div>
              <p>Làm đẹp - Sức khỏe</p>
            </div>
          </div>
          <div className='w-[277px] h-full flex items-center gap-3 cursor-pointer bg-[#F5F5FA]'>
            <div className='w-[110px] h-full'>
              <img src="./images/banner2.webp" className='w-full h-full object-cover' />
            </div>
            <div>
              <p>Xe máy - Xe đạp</p>
            </div>
          </div>
          <div className='w-[277px] h-full flex items-center gap-3 cursor-pointer bg-[#F5F5FA]'>
          <div className='w-[110px] h-full'>
              <img src="./images/banner2.webp" className='w-full h-full object-cover' />
            </div>
            <div>
              <p>Ô tô</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageGuest;