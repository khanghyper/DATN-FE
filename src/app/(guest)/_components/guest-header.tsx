'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BadgeCheck, BadgeDollarSign, LayoutGrid, Package, Search, ShoppingBag, Tag, Truck, Bell } from "lucide-react";
import Link from 'next/link';
import MiniCart from './MiniCart';
import Notifications from './MiniNotifications';

const tags: { title: string, icon: any }[] = [
  {
    title: 'Cam kết',
    icon: <BadgeCheck size={16} color="blue" />
  },
  {
    title: '100% Hàng thật',
    icon: <BadgeDollarSign size={16} color="blue" />
  },
  {
    title: 'Hoàn 200% nếu hàng giả',
    icon: <Package size={16} color="blue" />,
  },
  {
    title: '30 Ngày đổi trả',
    icon: <Truck size={16} color="blue" />
  }, {
    title: 'Giao nhanh 2h',
    icon: <Truck size={16} color="blue" />
  }, {
    title: 'Giá siêu rẻ',
    icon: <Tag size={16} color="blue" />
  }
]

export default function GuestHeader() {
  const [hienThiMiniCart, setHienThiMiniCart] = useState(false);
  const [hienThiThongBao, setHienThiThongBao] = useState(false);

  return (
    <div className="w-full flex justify-center border-b shadow-sm">
      <div className="w-content ">
        <div className="top-nav w-full flex gap-4 py-2 text-[14px] text-[#8E8181] font-semibold">
          <span>Tải ứng dụng</span>
          <span>Chăm sóc khách hàng</span>
          <span>Nhà cung cấp</span>
        </div>
        <div className="mid-nav w-full h-[70px] flex items-center ">
          <div className="logo w-40 h-[48px]">
            <img className="size-full object-cover" src="./images/logo.png" alt="" />
          </div>
          <div className="w-[calc(100%-10rem)] h-full flex items-center gap-5 justify-between pl-8">
            <div className="flex items-center gap-5">
              <div className="icon-cate size-6 ">
                <LayoutGrid />
              </div>
              <div className="input-nav h-10 flex">
                <input type="text" placeholder="Tìm trên VNShop" className="w-[600px] h-full px-5 border rounded-tl-[16px] rounded-bl-[16px] outline-none text-[13px] bg-gray-50" />
                <div className="icon-input flex items-center justify-center w-[42px] h-full border-b border-t border-r  rounded-tr-[16px] rounded-br-[16px] bg-gray-50">
                  <Search size={20} />
                </div>
              </div>
            </div>
            <div className="nav-dangnhap flex items-center justify-end w-[200px] h-full gap-4">
              <div className="relative">
                <Bell
                  className="cursor-pointer"
                  onClick={() => setHienThiThongBao(!hienThiThongBao)}
                  strokeWidth={1.5}
                />
                {hienThiThongBao && (
                  <div className="absolute right-0 mt-2 z-50">
                    <Notifications />
                  </div>
                )}
              </div>
              <div className="relative">
                <ShoppingBag
                  className="cursor-pointer"
                  onClick={() => setHienThiMiniCart(!hienThiMiniCart)}
                  strokeWidth={1.5}
                />
                {hienThiMiniCart && (
                  <div className="absolute right-[-150px] mt-2 z-50">
                    <MiniCart />
                  </div>
                )}
              </div>
              <Button className="bg-[#0E6AFF] h-8">Đăng nhập</Button>
            </div>
          </div>
        </div>
        <div className="bottom-nav flex w-full h-[23px] items-center gap-4 py-4">
          {tags.map(item => (
            <div key={item.title} className="flex gap-2 items-center">
              <span className="text-[14px] font-medium">{item.title}</span>
              {item.icon}
            </div>
          ))}
          <Link href="/blog" className="text-[14px] font-medium">VNSHOP News</Link>
        </div>
      </div>
    </div>
  )
}
