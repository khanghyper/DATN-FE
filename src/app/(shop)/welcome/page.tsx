import ShopHeader from "@/app/(shop)/_components/shop-header";

export default function WelcomeShopPage() {
  return (
    <div className="">
      <ShopHeader />
      <div className="bg-gray-100 flex items-center justify-center py-10">
        <div className="w-content bg-white border shadow rounded px-6">
          <div className="w-full border-b p-4">
            Thông tin Shop
          </div>
          <div className="p-4 py-12 w-full flex justify-center">
            <div className="">
              <div className="flex items-center gap-6 mb-6 -ml-10">
                <div className="text-[14px] w-[100px] text-right">Tên Shop</div>
                <input type="text" className="w-[360px] border rounded p-2 py-1 text-[14px]" />
              </div>
              <div className="flex items-center gap-6 mb-6 -ml-10">
                <div className="text-[14px] w-[100px] text-right">Địa chỉ lấy hàng</div>
                <input type="text" className="w-[360px] border rounded p-2 py-1 text-[14px]" />
              </div>
              <div className="flex items-center gap-6 mb-6 -ml-10">
                <div className="text-[14px] w-[100px] text-right">Email</div>
                <input type="text" readOnly defaultValue={'khang@gmail.com'} disabled className="w-[360px] border rounded p-2 py-1 text-[14px] cursor-not-allowed" />
              </div>
              <div className="flex items-center gap-6 mb-6 -ml-10">
                <div className="text-[14px] w-[100px] text-right">Số điện thoại</div>
                <input type="text" className="w-[360px] border rounded p-2 py-1 text-[14px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
