import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Bell, BookOpen, ChevronDown, GripHorizontal, User } from "lucide-react"


export default function ShopHeader() {
  return (
    <header className="w-full h-20 p-[15px] pr-[20px] bg-white border-b sticky top-0 z-50">
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
          <div className="flex px-4 border-r-[2px] border-black items-center gap-4">
            <GripHorizontal strokeWidth={1.5} className="cursor-pointer" />
            <BookOpen strokeWidth={1.5} className="cursor-pointer" />
            <div className="relative">
              <Bell strokeWidth={1.5} className="cursor-pointer" />
              <div className="absolute -top-2 -right-1 bg-blue-500 flex items-center justify-center text-white rounded-full text-[12px] size-4">0</div>
            </div>
          </div>
          <div className="flex px-4 items-center gap-2">
            <div className="size-[30px] rounded-full border-[2px] flex items-center justify-center">
              <User strokeWidth={1.5} size={20} />
            </div>
            <span className="text-[16px] font-medium">Tuangay110</span>
            <ChevronDown strokeWidth={1.5} size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}
