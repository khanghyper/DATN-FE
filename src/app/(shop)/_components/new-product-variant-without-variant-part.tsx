'use client'

import { changeVariantMode } from "@/redux/slices/shop-new-product.slice";
import { useDispatch } from "react-redux"

export default function NewProductVariantWithoutVariantPart() {
  const dispatch = useDispatch();

  const handleChangeVariantMode = () => {
    dispatch(changeVariantMode())
  }

  return (
    <div className="">
      <div className="w-full flex mb-6">
        <div>
          <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
            <span className="text-[12px] text-blue-700">*</span>
            <div className="text-[14px] h-full font-medium flex items-center">
              Phân loại hàng
            </div>
          </div>
        </div>
        <div className="w-full">
          <button onClick={handleChangeVariantMode} className="border-2 rounded border-dashed p-2 px-4 text-[14px] text-blue-600 hover:bg-blue-50 hover:border-blue-400">
            Thêm nhóm phân loại
          </button>
        </div>
      </div>
      <div className="w-full flex mb-6">
        <div>
          <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
            <span className="text-[12px] text-blue-700">*</span>
            <div className="text-[14px] h-full font-medium flex items-center">
              Giá
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-10 w-72 border rounded px-3 py-2 flex shadow-sm">
            <div className="text-[10px] border-r pr-2 flex items-center">₫</div>
            <input type="text" className="w-full border-none text-[14px] outline-none pl-2" />
          </div>
        </div>
      </div>
      <div className="w-full flex mb-6">
        <div>
          <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
            <span className="text-[12px] text-blue-700">*</span>
            <div className="text-[14px] h-full font-medium flex items-center">
              Kho hàng
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-10 w-72 border rounded px-3 py-2 shadow-sm">
            <input type="text" defaultValue={0} className="w-full border-none text-[14px] outline-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
