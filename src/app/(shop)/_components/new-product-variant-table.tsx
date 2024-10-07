'use client'

import { VariantItem } from "@/redux/slices/shop-new-product.slice";
import { useAppSelector } from "@/redux/store"
import { useEffect } from "react";

export default function NewProductVariantTable() {
  const variantItems = useAppSelector(state => state.shopListProduct.varriant.variantItems);

  const combineVariants = (variants: VariantItem[]) => {
    return variants.reduce((acc: (string[])[], curr) => {
      const result: string[][] = []
      acc.forEach(a => {
        curr.values.forEach(v => {
          result.push([...a, v.value]);
        })
      })
      return result
    }, [[]]);
  };

  useEffect(() => {
    console.log({ variantItems: combineVariants(variantItems) });
  }, [variantItems])

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
            {combineVariants(variantItems).map((item, index) => (
              <tr key={index}>
                {item.map(it => (
                  <td key={it} className="w-[120px]">
                    <div className="px-4 py-6 flex items-center justify-center text-[14px]">{it}</div>
                  </td>
                ))}
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <div className="flex items-center text-[12px] pr-2 text-gray-400">
                        ₫
                        <div className="ml-2 border-r h-full"></div>
                      </div>
                      <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="Giá" />
                    </div>
                  </div>
                </td>
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="Nhập vào" />
                    </div>
                  </div>
                </td>
                <td className="">
                  <div className="px-4 py-6 flex items-center justify-center text-[14px]">
                    <div className="border w-56 h-8 px-3 py-1 flex rounded">
                      <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="Nhập vào" />
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
