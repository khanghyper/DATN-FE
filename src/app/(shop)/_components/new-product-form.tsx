'use client'

import { ChevronDown, ChevronUp, ImagePlus, Pen } from "lucide-react";
import NewProductPopupCategory from "@/app/(shop)/_components/new-product-popup-category";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { findCategoryList, findCategoryListById } from "@/redux/slices/shop-new-product.slice";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import NewProductAttribute from "@/app/(shop)/_components/new-product-attribute";
import NewProductVariantSection from "@/app/(shop)/_components/new-product-variant-section";
import OtherInfoSection from "@/app/(shop)/_components/other-info-section";
import { Button } from "@/components/ui/button";




export default function NewProductForm() {
  const [isShowPopupCategory, setIsShowPopupCategory] = useState<boolean>(false);
  const isConfirmCategories = useAppSelector(state => state.shopListProduct.isConfirmCategories);
  const categoryAttributesSelected = useAppSelector(state => state.shopListProduct.categoryAttributesSelected)
  const dispatch = useAppDispatch();


  useEffect(() => {
    const promise = dispatch(findCategoryListById(null));
    const b = dispatch(findCategoryList());
  }, [])


  return (
    <div className="flex flex-col gap-6">
      <div className="px-6 py-6 bg-white shadow rounded">
        <div className="text-[20px] font-semibold mb-6">Thông tin bán hàng</div>
        <div className="w-full flex mb-2">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">Hình ảnh sản phẩm</div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-2 h-10">
              <input type="radio" defaultChecked={true} />
              <div className="text-[14px] font-medium f-full flex items-center">Ảnh tỷ lệ 1:1</div>
            </div>
            <div>
              <div className="border-dashed border-gray-400 border size-20 cursor-pointer hover:bg-blue-100 rounded">
                <div className="size-full flex justify-center items-center">
                  <div className="px-1/2 flex flex-col justify-center items-center">
                    <input type="file" className="hidden" />
                    <ImagePlus color="#3389e6" strokeWidth={1} />
                    <div className="text-[12px] text-blue-600 text-center">Thêm hình ảnh (0/9)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-6">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">Ảnh bìa</div>
            </div>
          </div>
          <div className="">
            <div>
              <div className="border-dashed border-gray-400 border size-20 cursor-pointer hover:bg-blue-100 rounded">
                <div className="size-full flex justify-center items-center">
                  <div className="px-1/2 flex flex-col justify-center items-center">
                    <input type="file" className="hidden" />
                    <ImagePlus color="#3389e6" strokeWidth={1} />
                    <div className="text-[12px] text-blue-600 text-center">(0/1)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-6">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">Tên sản phẩm</div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-10 w-full px-3 border rounded-sm flex">
              <input className="h-full w-full outline-none text-[14px]" placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật" />
              <div className="pl-2 h-full flex items-center">
                <div className="h-6 border-l pl-2 text-[14px] text-gray-400">0/120</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mb-6">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">
                Ngành hàng
              </div>
            </div>
          </div>
          <div className="w-full">
            <NewProductPopupCategory isShowPopupCategory={isShowPopupCategory} setIsShowPopupCategory={setIsShowPopupCategory} />
          </div>
        </div>
        <div className="w-full flex mb-6">
          <div>
            <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
              <span className="text-[12px] text-blue-700">*</span>
              <div className="text-[14px] h-full font-medium flex items-center">Mô tả sản phẩm</div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full px-2 py-[5px] border rounded-sm flex">
              <textarea className="h-40 w-full outline-none text-[14px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-6 bg-white shadow rounded">
        <div className={`text-[20px] font-semibold mb-6 ${!isConfirmCategories && 'text-gray-400'}`}>{isConfirmCategories ? 'Thông tin chi tiết' : 'Thông tin bán hàng'} </div>
        {isConfirmCategories ? (
          <div className="grid grid-cols-2 gap-x-6">
            {categoryAttributesSelected.map((item, index) => (
              <NewProductAttribute key={item.id} categoryAttribute={item} index={index} />
            ))}
          </div>

        ) : (
          <div className={`-mt-2 text-[14px] ${!isConfirmCategories && 'text-gray-400'}`}>Có thể điều chỉnh sau khi chọn ngành hàng</div>
        )}
      </div>
      <NewProductVariantSection />
      <div className="px-6 py-6 bg-white shadow rounded">
        <div className={`text-[20px] font-semibold mb-6 ${!isConfirmCategories && 'text-gray-400'}`}>Vận chuyển</div>
        {isConfirmCategories ? (
          <div className="">
            Vận chuyển
          </div>

        ) : (
          <div className={`-mt-2 text-[14px] ${!isConfirmCategories && 'text-gray-400'}`}>Có thể điều chỉnh sau khi chọn ngành hàng</div>
        )}
      </div>
      <OtherInfoSection />
      <div className="px-6 py-4 mb-10 sticky bottom-0 right-[16px] bg-white w-[1205px] border shadow rounded">
        <div className="w-full flex justify-end">
          <div className="flex gap-6">
            <Button variant={'outline'}>Hủy</Button>
            <Button variant={'outline'}>Lưu & Ẩn</Button>
            <Button variant={'ghost'} className="bg-[#286dcf] text-white hover:opacity-80 hover:bg-[#286dcf] hover:text-white">Lưu & Hiển thị</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
