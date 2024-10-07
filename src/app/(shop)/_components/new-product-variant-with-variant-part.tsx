'use client'
import './table.css';
import NewProductVariantItem from "@/app/(shop)/_components/new-product-variant-item";
import NewProductVariantRow from "@/app/(shop)/_components/new-product-variant-row";
import NewProductVariantTable from '@/app/(shop)/_components/new-product-variant-table';
import { addVariant, changeVariantMode } from "@/redux/slices/shop-new-product.slice";
import { useAppSelector } from "@/redux/store";
import { ImagePlus, Plus, Trash2, X } from "lucide-react";
import { useDispatch } from "react-redux";

export default function NewProductVariantWithVariantPart() {
  const dispatch = useDispatch();
  const variantItems = useAppSelector(state => state.shopListProduct.varriant.variantItems);
  const variantProducts = useAppSelector(state => state.shopListProduct.varriant.variantProducts);

  const handleChangeVariantMode = () => {
    dispatch(changeVariantMode())
  }


  const handleAddVariantItem = () => {
    dispatch(addVariant())
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
          {variantItems.map((item, index) => (
            <NewProductVariantItem key={index} variantItem={item} index={index} />
          ))}
          {
            variantItems.length < 2 && (
              <div className="bg-[#f6f6f6] p-4 rounded relative">
                <button onClick={handleAddVariantItem} className="border-2 bg-white rounded border-dashed p-2 px-4 text-[14px] text-blue-600 hover:bg-blue-50 hover:border-blue-400">
                  Thêm nhóm phân loại 2
                </button>
              </div>
            )
          }
          <div>
            <button onClick={() => console.log({ variantProducts })} className="border-2 bg-white rounded border-dashed p-2 px-4 text-[14px] text-blue-600 hover:bg-blue-50 hover:border-blue-400">
              xem
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-6">
        <div>
          <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
            <span className="text-[12px] text-blue-700">*</span>
            <div className="text-[14px] h-full font-medium flex items-center">
              Danh sách phân loại hàng
            </div>
          </div>
        </div>
        <div className="w-full mt-1 flex flex-wrap">
          <div className="w-full flex mb-4">
            <div className="flex h-8">
              <div className="border border-r-0 w-56 h-full px-3 py-1 flex rounded-tl rounded-bl">
                <div className="flex items-center text-[12px] pr-2">
                  ₫
                  <div className="ml-2 border-r h-full"></div>
                </div>
                <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="Giá" />
              </div>
              <div className="border border-r-0 w-56 h-full px-3 py-1 flex">
                <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="Kho hàng" />
              </div>
              <div className="border w-56 h-full px-3 py-1 flex rounded-tr rounded-br">
                <input type="text" className="w-full h-full outline-none text-[14px]" placeholder="SKU phân loại" />
              </div>
            </div>
            <button className="w-full h-8 ml-6 border text-[14px]">
              Áp dụng cho tất cả sản phẩm phân loại
            </button>
          </div>
          {variantItems.length > 0 && (
            <NewProductVariantTable />
          )}
        </div>
      </div>

    </div >
  )
}
