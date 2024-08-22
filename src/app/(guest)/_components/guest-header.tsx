import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";

export default function GuestHeader() {
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
        <div className="bottom-nav w-full flex ">

        </div>
      </div>

    </div>
  )
}
