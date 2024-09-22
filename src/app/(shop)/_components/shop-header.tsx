'use client'
import './shop-header.css';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Bell, BookOpen, ChevronDown, ChevronUp, GripHorizontal, User } from "lucide-react"
import { useState } from 'react';
import AccountInfo from '@/app/(shop)/_components/account-info';
import Notifications from '@/app/(shop)/_components/notifications';


export default function ShopHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowNoti, setIsShowNoti] = useState(false);
  const [isShowAccountInfo, setIsShowAccountInfo] = useState(false);

  return (
    <header className="w-full h-[56px] bg-white sticky top-0 z-50">
      <div className="w-full h-full flex justify-between">
        <div className="flex items-center gap-4">
          <div className="logo w-40 h-[48px]">
            <img className="size-full object-cover" src="./images/logo.png" alt="" />
          </div>
          <Breadcrumb>
            <BreadcrumbList className="text-[16px] font-normal">
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sản phẩm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center">
          <div className="flex h-full px-4 border-r-[2px] items-center">
            {/* <div
              className="cart-container h-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="cart-button h-full">Giỏ hàng</button>
              <div className={`minicart ${isHovered ? 'animate-in' : 'animate-out'}`}>
                <p>Sản phẩm 1</p>
                <p>Sản phẩm 2</p>
              </div>
            </div>
            <div className="">
              <div className='px-3 hover:bg-gray-200'>
                <GripHorizontal strokeWidth={1.5} className="h-[56px] w-6" />
              </div>
              <div className=''></div>
            </div>
            <div className="">
              <div className='px-3 hover:bg-gray-200'>
                <BookOpen strokeWidth={1.5} className="h-[56px] w-6" />
              </div>
              <div className={``}></div>
            </div> */}
            <div className="relative">
              <div
                className='px-3 hover:bg-gray-200'
                onMouseEnter={() => setTimeout(() => setIsShowNoti(true))}
                onMouseLeave={() => setTimeout(() => setIsShowNoti(false))}
              >
                <Bell strokeWidth={1.5} className="h-[56px] w-6" />
                <div className={`minicart ${isShowNoti ? 'animate-in' : 'animate-out'}`}>
                  <Notifications />
                </div>
                <div className="absolute top-2 right-1 bg-blue-500 flex items-center justify-center text-white rounded-full text-[12px] size-4">0</div>
              </div>
            </div>
          </div>
          <div className='h-full pl-4'>
            <div
              className="flex w-full h-full px-4 items-center gap-2 hover:bg-gray-200"
              onMouseEnter={() => setTimeout(() => setIsShowAccountInfo(true), 100)}
              onMouseLeave={() => setTimeout(() => setIsShowAccountInfo(false))}
            >
              <div className="size-[30px] rounded-full flex items-center justify-center">
                <img className='size-full object-cover rounded-full' src="https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg" alt="" />
              </div>
              <span className="text-[14px] font-medium">TuanGay69</span>
              {isShowAccountInfo ? (
                <ChevronDown strokeWidth={1.5} size={20} />
              ) : (
                <ChevronUp strokeWidth={1.5} size={20} />
              )}
              <div className={`minicart ${isShowAccountInfo ? 'animate-in' : 'animate-out'}`}>
                <AccountInfo />
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
