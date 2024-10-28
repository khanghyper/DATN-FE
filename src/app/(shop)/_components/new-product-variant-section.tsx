'use client'

import { CreateProductFormData } from "@/app/(shop)/_components/new-product-form";
import NewProductVariantWithVariantPart from "@/app/(shop)/_components/new-product-variant-with-variant-part";
import NewProductVariantWithVariantPartTest from "@/app/(shop)/_components/new-product-variant-with-variant-part-test";
import NewProductVariantWithoutVariantPart from "@/app/(shop)/_components/new-product-variant-without-variant-part";
import { useAppSelector } from "@/redux/store"
import { Plus } from "lucide-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

export default function NewProductVariantSection({ handleVariant, register }: { handleVariant: (data: any) => void, register: UseFormRegister<CreateProductFormData> }) {
  const isConfirmCategories = useAppSelector(state => state.shopListProduct.category.isConfirmCategories);
  // const isConfirmCategories = true;
  const isChangeVariantMode = useAppSelector(state => state.shopListProduct.varriant.isChangeVariantMode);


  return (
    <div className="px-6 py-6 bg-white shadow rounded">
      <div className={`text-[20px] font-semibold mb-6 ${!isConfirmCategories && 'text-gray-400'}`}>Thông tin bán hàng</div>
      {isConfirmCategories && (
        <div>
          {!isChangeVariantMode && (<NewProductVariantWithoutVariantPart register={register} />)}
          {isChangeVariantMode && (
            <NewProductVariantWithVariantPartTest handleVariant={handleVariant} />
          )}
        </div>
      )}
      {!isConfirmCategories && (
        <div className={`-mt-2 text-[14px] ${!isConfirmCategories && 'text-gray-400'}`}>Có thể điều chỉnh sau khi chọn ngành hàng</div>
      )}
    </div>
  )
}
