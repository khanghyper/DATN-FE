'use client'
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { any } from "zod";

export default function CardProduct(props: any,limit:number) {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    if (Array.isArray(props.data)) {
      const randomData = [...props.data].sort(()=> Math.random() - 0.5)
      randomData.slice(0,5);
      setProducts(randomData); 
    }
  }, [props.data]); 

  
  return (
    <>
      {
        products.slice(0,5).map((item:any, index:number) => (
          <div className="card-product py-1 shadow rounded border" key={index}>
            <div className="img w-full px-5 pt-2 h-[200px]">
              <Link href={`/products/${item.id}`}>
                <img className="size-full object-cover" src="https://salt.tikicdn.com/cache/750x750/ts/product/59/6d/d2/3a4ee4a2ffbae124699e5a01ab5cf5db.jpg.webp" alt="" />
              </Link>
            </div>
            <div className="p-2 flex flex-col gap-0.5">
              <span className="text-[16px] font-medium">{item.title}</span>
              <span className="text-[18px] font-semibold text-red-600">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}đ</span>
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
    </>
  )
}
