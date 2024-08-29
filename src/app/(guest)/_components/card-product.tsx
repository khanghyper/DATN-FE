import { Star } from "lucide-react";
import Link from "next/link";

export default function CardProduct() {
  return (
    <div className="card-product py-1 shadow rounded border">
      <div className="img w-full px-5 pt-2 h-[200px]">
        <Link href={'/products/1'}>
          <img className="size-full object-cover" src="https://salt.tikicdn.com/cache/750x750/ts/product/59/6d/d2/3a4ee4a2ffbae124699e5a01ab5cf5db.jpg.webp" alt="" />
        </Link>
      </div>
      <div className="p-2 flex flex-col gap-0.5">
        <span className="text-[16px] font-medium">Điện thoại SAMSUNG</span>
        <span className="text-[18px] font-semibold text-red-600">345.000đ</span>
        <div className="inline">
          <span className="text-[13px] bg-gray-100 rounded-sm px-2">Trả góp Muadee</span>
        </div>
        <div className="text-[12px]">Đã bán 128</div>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex gap-1 items-center">
            <div className="leading-4">5/5</div>
            <Star size={12} className="text-yellow-500" />
          </div>
          <span>Đồng Nai</span>
        </div>
      </div>
    </div>
  )
}
