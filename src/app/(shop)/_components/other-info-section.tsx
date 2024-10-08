'use client'

import { useAppSelector } from "@/redux/store";

export default function OtherInfoSection() {
  const isConfirmCategories = useAppSelector(state => state.shopListProduct.isConfirmCategories);

  return (
    <div className="px-6 py-6 bg-white shadow rounded">
      <div className={`text-[20px] font-semibold mb-6 ${!isConfirmCategories && 'text-gray-400'}`}>Thông tin khác</div>
      {isConfirmCategories ? (
        <div className="w-full flex mb-6">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">Tên sản phẩm</div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-10 w-[400px] px-3 border rounded-sm flex">
              <input className="h-full w-full outline-none text-[14px]" placeholder="-" />

            </div>
          </div>
        </div>

      ) : (
        <div className={`-mt-2 text-[14px] ${!isConfirmCategories && 'text-gray-400'}`}>Có thể điều chỉnh sau khi chọn ngành hàng</div>
      )}
    </div>
  )
}
