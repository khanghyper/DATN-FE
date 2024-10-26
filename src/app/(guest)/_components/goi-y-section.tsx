'use client'
import CardProduct from "@/app/(guest)/_components/card-product";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function GoiYSection() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const getProduct = async () => {
      const apiProduct = await fetch('https://vnshop.top/api/products').then(res => res.json());
      console.log(apiProduct);
      setProducts([...apiProduct.data.data]);
    }
    getProduct()
  }, [])

  return (
    <div className="w-full">
      <div className="w-full py-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="text-[18px] font-bold">Gợi ý hôm nay</span>
        </div>
        <div className="text-[13px] text-blue-500 cursor-pointer underline font-semibold">Xem tất cả</div>
      </div>
      <div className="list-card-product py-3 grid grid-cols-5 gap-4">
        {/* {
          Array.from({ length: 20 }, (_, i) => i + 1).map(item => (
            <CardProduct key={item} />
          ))
        } */}

        {
          products.map((item: any, index: number) => (
            <div className="card-product py-1 shadow rounded border" key={index}>
              <div className="img w-full px-5 pt-2 h-[200px]">
                <Link href={`/products/${item.id}`}>
                  <img className="size-full object-cover" src={`${item.image ?? 'https://salt.tikicdn.com/cache/750x750/ts/product/59/6d/d2/3a4ee4a2ffbae124699e5a01ab5cf5db.jpg.webp'}`} alt="Lỗi ảnh" />
                </Link>
              </div>
              <div className="p-2 flex flex-col gap-0.5">
                <span className="text-[16px] font-medium">{item.name}</span>
                <span className="text-[18px] font-semibold text-red-600">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
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
          ))
        }
        {/* <CardProduct data={products} /> */}
      </div>
    </div>
  )
}
