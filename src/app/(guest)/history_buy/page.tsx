import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bell, Calendar, MailPlus, Pencil, Store, TicketIcon, Truck, UserRound } from 'lucide-react';

const iconProfile: { title: string, icon: any }[] = [
  {
    title: 'Đại Hội Siêu Sale',
    icon: <UserRound color='blue' />
  },
  {
    title: 'Tài Khoản Của Tôi ',
    icon: <UserRound color='blue' />
  },
  {
    title: 'Đơn Mua',
    icon: <Calendar color='blue' />
  },
  {
    title: 'Thông Báo',
    icon: <Bell color='orange' />
  },
  {
    title: 'Kho Voucher',
    icon: <TicketIcon color='orange' />
  }
]

const HistoryBuyPage = () => {
  return (
    <div className='w-content h-auto bg-white'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lịch sử mua hàng</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='body-page w-full flex justify-between gap-1 mt-4'>
        <div className='left-body w-[275px] h-[318px] border shadow rounded flex flex-col items-center justify-center pt-4 '>
          <div className='w-[240px] h-[80px] flex gap-5 '>
            <img src="" className='w-[80px] h-full rounded-[60px] bg-slate-500' />
            <div className='w-[195px] h-full flex flex-col justify-center'>
              <span className='text-[18px] font-semibold'>Tuân Nguyễn</span>
              <div className='flex items-center gap-2'>
                <Pencil size={16} color='#888888' />
                <span className='text-[#888888] cursor-pointer'>Sửa Hồ Sơ</span>
              </div>
            </div>
          </div>
          <div className='w-full h-[202px] flex flex-col mt-2 gap-4 pl-5'>
            {
              iconProfile.map(it => (
                <div className='flex gap-3 w-full items-end cursor-pointer' key={it.title}>
                  {it.icon}
                  <p className='text-[14px]'>{it.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='right-body w-[920px] h-auto'>
          <div className='nav-menu w-full h-[50px] flex items-center justify-around border rounded shadow'>
            <span className='border-b-2 border-b-blue-500 font-semibold text-blue-500 cursor-pointer'>Tất cả</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Chờ thanh toán</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Vận chuyển</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Chờ giao hàng</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Hoàn thành</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Đã hủy</span>
            <span className='border-b-2 border-b-blue-500 font-medium cursor-pointer'>Trả hàng/Hoàn tiền</span>
          </div>
          <div className='listProduct w-full h-[475px] mt-2 border rounded shadow flex flex-col gap-3'>
            <div className='nav-list-product w-full h-[35px] flex justify-between mt-2 px-3'>
              <div className='flex gap-3 items-end '>
                <p className='font-semibold text-[16px]'>UKmart - Hàng Anh Thủ Đức</p>
                <div className='w-[76px] h-[31px] flex items-center justify-center gap-1 border bg-blue-500 rounded-[5px] text-white'>
                  <MailPlus size={20} />
                  <p>Chat</p>
                </div>
                <div className='w-[117px] h-[31px] flex items-center justify-center gap-1 border-[2px] rounded-[5px] text-gray-500 font-bold'>
                  <Store size={20} />
                  <p>Xem Shop</p>
                </div>
              </div>
              <div className='flex gap-2 items-end font-semibold text-[#0A68FF]'>
                <Truck />
                <p>Giao hàng thành công</p>
              </div>
            </div>
            <div className='w-full h-[350px] flex flex-col justify-between px-3'>
              <div className='h-[165px] flex gap-3 pt-2'>
                <img src="./images/banner1.webp" className='w-[136px] h-full border object-cover' />
                <div className='flex flex-col justify-center'>
                  <span >Can Phun Khói Nano Bạc Diệt Khuẩn Khử Mùi Ô TÔ, Nhà Cửa Nano Reiwa</span>
                  <span className='text-[14px] text-gray-500'>Phân loại: Nano Bạc</span>
                  <span>x1</span>
                  <div className='flex gap-1 text-red-500'>
                    <span>422.000</span>
                    <span>đ</span>
                    <span className='text-[12px]'>-20%</span>
                  </div>
                  <span className='px-2 py-2 border border-[#4A4AFF] w-[190px] text-[14px] text-[#4A4AFF] '>Trả hàng miển phí 15 ngày</span>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-300'></div>
              <div className='h-[165px] flex gap-3 pt-2'>
                <img src="./images/banner1.webp" className='w-[136px] h-full border object-cover' />
                <div className='flex flex-col justify-center'>
                  <span >Can Phun Khói Nano Bạc Diệt Khuẩn Khử Mùi Ô TÔ, Nhà Cửa Nano Reiwa</span>
                  <span className='text-[14px] text-gray-500'>Phân loại: Nano Bạc</span>
                  <span>x1</span>
                  <div className='flex gap-1 text-red-500'>
                    <span>422.000</span>
                    <span>đ</span>
                    <span className='text-[12px]'>-20%</span>
                  </div>
                  <span className='px-2 py-2 border border-[#4A4AFF] w-[190px] text-[14px] text-[#4A4AFF] '>Trả hàng miển phí 15 ngày</span>
                </div>
              </div>
            </div>
            <div className='bottom-list-product w-full h-[47px] flex justify-around'>
              <div className='w-[257px] flex flex-col gap-1 text-[14px] justify-center '>
                <p>Đánh giá trước ngày 02 - 08- 2024</p>
                <p className='text-[#7777FF]'>Đánh giá và nhận ngay voucher</p>
              </div>
              <div className='w-[334px] flex gap-5 items-center justify-center '>
                <span className='px-4 py-2 border cursor-pointer bg-[#0A68FF] text-white  hover:bg-gray-400 hover:text-black'>Đánh giá</span>
                <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Liên hệ</span>
                <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Mua lại</span>
              </div>
            </div>
          </div>
          <div className='listProduct w-full h-[475px] mt-2 border rounded shadow flex flex-col gap-3'>
            <div className='nav-list-product w-full h-[35px] flex justify-between mt-2 px-3'>
              <div className='flex gap-3 items-end '>
                <p className='font-semibold text-[16px]'>UKmart - Hàng Anh Thủ Đức</p>
                <div className='w-[76px] h-[31px] flex items-center justify-center gap-1 border bg-blue-500 rounded-[5px] text-white'>
                  <MailPlus size={20} />
                  <p>Chat</p>
                </div>
                <div className='w-[117px] h-[31px] flex items-center justify-center gap-1 border-[2px] rounded-[5px] text-gray-500 font-bold'>
                  <Store size={20} />
                  <p>Xem Shop</p>
                </div>
              </div>
              <div className='flex gap-2 items-end font-semibold text-[#0A68FF]'>
                <Truck />
                <p>Giao hàng thành công</p>
              </div>
            </div>
            <div className='w-full h-[350px] flex flex-col justify-between px-3'>
              <div className='h-[165px] flex gap-3 pt-2'>
                <img src="./images/banner1.webp" className='w-[136px] h-full border object-cover' />
                <div className='flex flex-col justify-center'>
                  <span >Can Phun Khói Nano Bạc Diệt Khuẩn Khử Mùi Ô TÔ, Nhà Cửa Nano Reiwa</span>
                  <span className='text-[14px] text-gray-500'>Phân loại: Nano Bạc</span>
                  <span>x1</span>
                  <div className='flex gap-1 text-red-500'>
                    <span>422.000</span>
                    <span>đ</span>
                    <span className='text-[12px]'>-20%</span>
                  </div>
                  <span className='px-2 py-2 border border-[#4A4AFF] w-[190px] text-[14px] text-[#4A4AFF] '>Trả hàng miển phí 15 ngày</span>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-300'></div>
              <div className='h-[165px] flex gap-3 pt-2'>
                <img src="./images/banner1.webp" className='w-[136px] h-full border object-cover' />
                <div className='flex flex-col justify-center'>
                  <span >Can Phun Khói Nano Bạc Diệt Khuẩn Khử Mùi Ô TÔ, Nhà Cửa Nano Reiwa</span>
                  <span className='text-[14px] text-gray-500'>Phân loại: Nano Bạc</span>
                  <span>x1</span>
                  <div className='flex gap-1 text-red-500'>
                    <span>422.000</span>
                    <span>đ</span>
                    <span className='text-[12px]'>-20%</span>
                  </div>
                  <span className='px-2 py-2 border border-[#4A4AFF] w-[190px] text-[14px] text-[#4A4AFF] '>Trả hàng miển phí 15 ngày</span>
                </div>
              </div>
            </div>
            <div className='bottom-list-product w-full h-[47px] flex justify-around'>
              <div className='w-[257px] flex flex-col gap-1 text-[14px] justify-center '>
                <p>Đánh giá trước ngày 02 - 08- 2024</p>
                <p className='text-[#7777FF]'>Đánh giá và nhận ngay voucher</p>
              </div>
              <div className='w-[334px] flex gap-5 items-center justify-center '>
                <span className='px-4 py-2 border cursor-pointer bg-[#0A68FF] text-white  hover:bg-gray-400 hover:text-black'>Đánh giá</span>
                <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Liên hệ</span>
                <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Mua lại</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBuyPage;