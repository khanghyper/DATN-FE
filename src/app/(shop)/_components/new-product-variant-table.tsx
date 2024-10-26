'use client'

import { changeInputInStockVariantProduct, changeInputPriceVariantProduct, changeInputSkuVariantProduct, VariantItem } from "@/redux/slices/shop-new-product.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { FormEvent, useEffect } from "react";

export default function NewProductVariantTable() {
  const variantItems = useAppSelector(state => state.shopListProduct.varriant.variantItems);
  const variantProducts = useAppSelector(state => state.shopListProduct.varriant.variantProducts);
  const dispatch = useAppDispatch();

  const handleChangeInputPriceVariantProduct = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(changeInputPriceVariantProduct({ index, value: + e.target.value }))
  }
  const handleChangeInputInStockVariantProduct = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(changeInputInStockVariantProduct({ index, value: + e.target.value }))
  }
  const handleChangeInputSkuVariantProduct = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(changeInputSkuVariantProduct({ index, value: e.target.value }))
  }

  return (
    <div className="w-full">
      <div className='w-full flex'>
        <table className="w-full">
          <thead>
            <tr>
              {variantItems.map((item, index) => (
                <td key={index} className="h-20 w-[120px]">
                  <div className="h-full w-full p-3 flex items-center justify-center text-[14px] text-center">{item.name || `Nhóm phân loại ${index + 1}`}</div>
                </td>
              ))}
              <td className="h-20 w-[120px]">
                <div className="h-full w-full p-3 flex items-center justify-center text-[14px] text-center">Giá</div>
              </td>
              <td className="h-20 w-[120px]">
                <div className="h-full w-full p-3 flex items-center justify-center text-[14px] text-center">Kho hàng</div>
              </td>
              <td className="h-20 w-[120px]">
                <div className="h-full w-full p-3 flex items-center justify-center text-[14px] text-center">SKU phân loại</div>
              </td>
            </tr>
          </thead>
          <tbody>
            {variantProducts.map((item, index) => (
              <tr key={index}>
                {item.variants.map(it => (
                  <td key={it.value} className="w-[120px]">
                    <div className="px-4 py-6 flex items-center justify-center text-[14px]">{it.value}</div>
                  </td>
                ))}
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <div className="flex items-center text-[12px] pr-2 text-gray-400">
                        ₫
                        <div className="ml-2 border-r h-full"></div>
                      </div>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputPriceVariantProduct(e, index)}
                        value={item.price}
                        className="w-full h-full outline-none text-[14px]" placeholder="Giá"
                      />
                    </div>
                  </div>
                </td>
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputInStockVariantProduct(e, index)}
                        value={item.inStock}
                        className="w-full h-full outline-none text-[14px]" placeholder="Nhập vào"
                      />
                    </div>
                  </div>
                </td>
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputSkuVariantProduct(e, index)}
                        value={item.sku}
                        className="w-full h-full outline-none text-[14px]"
                        placeholder="Nhập vào"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
