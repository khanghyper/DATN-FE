'use client';
import { Button } from "@/components/ui/button";
import { BadgeCheck, BadgeDollarSign, Ban, LayoutGrid, Package, Search, ShoppingBag, Tag, Truck } from "lucide-react";

export default function GuestHeader() {
  const navIcons: { title: string; icon: any }[] = [
    {
      icon: <BadgeCheck size={24} color={"blue"}/>,
      title: 'Cam kết'
    },
    {
      icon: <Ban size={24} color={"blue"} />,
      title: '100% hàng thật'
    },
    {
      icon: <BadgeDollarSign size={24} color={"blue"} />,
      title: 'Hoàn 200% nếu hàng giả'
    }
    ,
    {
      icon: <Package size={24} color={"blue"} />,
      title: '30 ngày đổi trả'
    },
    {
      icon: <Truck size={24} color={"blue"} />,
      title: 'Giao nhanh 2h'
    },
    {
      icon: <Tag size={24} color={"blue"} />,
      title: 'Giá siêu rẻ'
    }
  ]

  return (
    <div className="w-full flex justify-center">
      <div className="w-content border h-[130px]">
        <div className="top-nav w-full flex gap-4 py-2 text-[14px] text-[#8E8181] font-semibold">
          <span>Tải ứng dụng</span>
          <span>Chăm sóc khách hàng</span>
          <span>Nhà cung cấp</span>
        </div>
        <div className="mid-nav w-full h-[70px] flex items-center gap-[30px] ">
          <div className="logo w-[120px] h-[48px] border mr-5">
            <span>Logo</span>
          </div>
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="icon-cate size-6 ">
                <LayoutGrid />
              </div>
              <div className="input-nav w-[785px] h-10 flex">
                <input type="text" placeholder="Tìm trên VNShop" className="w-[743px] h-full px-5 border rounded-tl-[16px] rounded-bl-[16px] outline-none text-[13px] bg-gray-50" />
                <div className="icon-input flex items-center justify-center w-[42px] h-full border-b border-t border-r  rounded-tr-[16px] rounded-br-[16px] bg-gray-50">
                  <Search size={20} />
                </div>
              </div>
            </div>
            <div className="nav-dangnhap flex items-center justify-end w-[156px] h-full gap-2">
              <ShoppingBag />
              <Button className="bg-[#0E6AFF] h-8">Đăng nhập</Button>
            </div>
          </div>
        </div>
        <div className="bottom-nav w-full h-[24px] flex items-center gap-6 ">
          {
            navIcons.map(it => (
              <div className="flex gap-1 " key={it.title}>
                  {it.icon}
                <span className="text-[14px] font-medium">{it.title}</span>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
