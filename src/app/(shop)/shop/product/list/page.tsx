import { Button } from "@/components/ui/button";
import { Pen, Plus, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ListProductItem from "@/app/(shop)/_components/list-product-item";
import ListProductPagination from "@/app/(shop)/_components/list-product-pagination";
import Link from "next/link";
import PopupCategory from "@/app/(shop)/_components/popup-category";


const status = [
  'Tất cả', 'Đang hoạt động', 'Vi phạm', 'Chờ duyệt', 'Chưa đăng được'
]
const filters = [
  {
    id: '0',
    name: 'Mã đơn hàng',
    placehoder: 'Nhập mã đơn hàng'
  }, {
    id: '1',
    name: 'Mã vận đơn',
    placehoder: 'Nhập mã vận đơn'
  }, {
    id: '2',
    name: 'Tên người mua',
    placehoder: 'Nhập tên người mua'
  }, {
    id: '3',
    name: 'Sản phẩm',
    placehoder: 'Nhập tên sản phẩm/SKU'
  }
];

export default function ListProductPage() {
  return (
    <div className="w-full overflow-auto">
      <div className="flex p-4 items-center justify-between">
        <span className="text-[20px] font-semibold">Sản phẩm</span>
        <div className="flex items-center gap-2">
          <Link href={'/shop/product/new'}>
            <Button className="flex items-center gap-2" variant={"outline"}>
              <Plus strokeWidth={1.25} size={16} />
              Thêm 1 sản phẩm mới
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex p-2 px-3 gap-2">
        {status.map((item => (
          <div key={item}
            className={`
                text-[14px] text-[#3e3e3e] font-semibold cursor-pointer px-5 border-b-white border-b-2
                 hover:text-blue-500 hover:border-b-blue-500
            `}
          >
            {item}
          </div>
        )))}
      </div>
      <div className="flex items-center justify-between w-full p-4 px-3">
        <div className="flex">
          <div className="px-2 border border-r-0 flex items-center rounded-tl rounded-bl">
            <Search color="#ababab" strokeWidth={1.25} size={20} className="" />
          </div>
          <Input className="px-3 w-[300px] text-[14px] border-l-0 outline-none rounded-none rounded-tr rounded-br" placeholder="Tìm tên sản phẩm, SKU sản phẩm" />
        </div>
        <PopupCategory />
        <div className="flex gap-2">
          <button className="border-blue-500 text-blue-500 hover:border-blue-500 border text-[14px] p-2 rounded">Áp dụng</button>
          <Button variant={'default'}>Đặt lại</Button>
        </div>
      </div>
      <div className="px-4 py-2 text-[16px] font-semibold">1 Sản phẩm</div>
      <div className="px-4 py-2">
        <div className="flex rounded-tl rounded-tr bg-[#F0F0F0] border border-b-0 items-center">
          <div className="py-6 pl-4 pr-2">
            <Checkbox className="size-[14px]" />
          </div>
          <div className="w-full h-full  text-[14px] flex items-center  text-[#000000ba]">
            <div className="w-[364px] p-2 pl-4 flex gap-4 items-center">
              <span>Sản phẩm</span>
            </div>
            <div className="w-[200px] p-2">Doanh số</div>
            <div className="w-[280px] p-2">Giá</div>
            <div className="w-[200px] p-2">Kho hàng</div>
            <div className="">Thao tác</div>
          </div>
        </div>
        <div className="border border-t-0 rounded-br rounded-bl">
          <ListProductItem isExistedVariant={true} />
          <ListProductPagination />
        </div>
        {/* <OrderItem />
        <OrderItem /> */}
        {/* <EmptyOrder /> */}
      </div>
    </div>
  )
}
