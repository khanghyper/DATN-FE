import { Checkbox } from "@/components/ui/checkbox";
import { formattedPrice } from "@/lib/utils";



export default function ListProductItem({ isExistedVariant = true }: { isExistedVariant?: boolean }) {
  return (
    <div className="py-4 border-b flex">
      <div className="py-6 pl-4 pr-2">
        <Checkbox className="size-[14px]" />
      </div>
      <div className="">
        <div className="w-full text-[14px] flex">
          <div className="w-[364px] p-2 pl-4 flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <div className="size-14 border rounded-sm">
                  <img className="size-full object-cover" src="https://cf.shopee.vn/file/vn-11134207-7r98o-m0d4u3p2pckt0d_tn" alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-bold cursor-pointer hover:text-blue-700">Nước hoa GIO GIO-1 hương thơm</span>
                  <span className="text-[13px] text-gray-500">SKU sản phẩm: </span>
                  <span className="text-[13px] text-gray-600">ID sản phẩm: 123456789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[200px] p-2">
            <div className="text-black font-medium">0</div>
          </div>
          <div className="w-[280px] p-2">
            <div className="text-black font-medium">{formattedPrice(200000)}</div>
          </div>
          <div className="w-[200px] p-2">
            <div className="text-black font-medium">10</div>
          </div>
          <div className="text-blue-500 flex flex-col gap-2">
            <div className="cursor-pointer">Cập nhật</div>
            <div className="cursor-pointer">Xem thêm</div>
          </div>
        </div>
        {isExistedVariant && (
          <div className="text-[14px] flex">
            <div className="w-[364px] p-2 pl-4 flex items-center gap-4 bg-gray-50">
              <div className="w-full">
                <div className="flex items-center gap-4">
                  <div className="size-14 pl-4 rounded-sm flex items-center justify-center">
                    <img className="size-10 object-cover border rounded-sm" src="https://cf.shopee.vn/file/vn-11134207-7r98o-m0d4u3p2pckt0d_tn" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-bold">Nước hoa GIO GIO-2</span>
                    <span className="text-[13px] text-gray-500">SKU phân loại: GIO-ĐEN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[200px] p-2 bg-gray-50">
              <div className="text-black font-medium">0</div>
            </div>
            <div className="w-[280px] p-2 bg-gray-50">
              <div className="text-black font-medium">{formattedPrice(200000)}</div>
            </div>
            <div className="w-[200px] p-2 bg-gray-50">
              <div className="text-black font-medium">10</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
