import { useAppSelector } from '@/redux/store';
import { X } from 'lucide-react';
import React from 'react'

export default function NewProductShippingSection() {
  const isConfirmCategories = useAppSelector(state => state.shopListProduct.category.isConfirmCategories);

  return (
    <div className="px-6 py-6 bg-white shadow rounded">
      <div className={`text-[20px] font-semibold mb-6 ${!isConfirmCategories && 'text-gray-400'}`}>Vận chuyển</div>
      {isConfirmCategories ? (
        <div className="">
          <div className="w-full flex mb-6">
            <div>
              <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
                <span className="text-[12px] text-blue-700">*</span>
                <div className="text-[14px] h-full font-medium flex items-center">Cân nặng (Sau khi đóng gói)</div>
              </div>
            </div>
            <div className="w-full">
              <div className="h-10 w-[210px] px-3 border rounded-sm flex">
                <input className="h-full w-[150px] outline-none text-[14px]" placeholder="Input" />
                <div className="pl-2 h-full flex items-center">
                  <div className="h-6 border-l pl-2 text-[14px] text-gray-400">Gr</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex mb-6">
            <div>
              <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
                <div className="text-[14px] h-full font-medium flex items-center">Kích thước đóng gói</div>
              </div>
            </div>
            <div className="w-full flex gap-4 items-center">
              <div className="h-10 w-[210px] px-3 border rounded-sm flex">
                <input className="h-full w-[150px] outline-none text-[14px]" placeholder="Rộng" />
                <div className="pl-2 h-full flex items-center">
                  <div className="h-6 border-l pl-2 text-[14px] text-gray-400">cm</div>
                </div>
              </div>
              <X color="#ababab" />
              <div className="h-10 w-[210px] px-3 border rounded-sm flex">
                <input className="h-full w-[150px] outline-none text-[14px]" placeholder="Dài" />
                <div className="pl-2 h-full flex items-center">
                  <div className="h-6 border-l pl-2 text-[14px] text-gray-400">cm</div>
                </div>
              </div>
              <X color="#ababab" />
              <div className="h-10 w-[210px] px-3 border rounded-sm flex">
                <input className="h-full w-[150px] outline-none text-[14px]" placeholder="Cao" />
                <div className="pl-2 h-full flex items-center">
                  <div className="h-6 border-l pl-2 text-[14px] text-gray-400">cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className={`-mt-2 text-[14px] ${!isConfirmCategories && 'text-gray-400'}`}>Có thể điều chỉnh sau khi chọn ngành hàng</div>
      )}
    </div>
  )
}
