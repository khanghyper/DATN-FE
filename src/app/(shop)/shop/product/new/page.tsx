import { Input } from "@/components/ui/input";
import { ImagePlus, Pen } from "lucide-react";
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
import { Button } from "@/components/ui/button";

export default function CreateProductPage() {
  return (
    <div className="w-full flex flex-col gap-6 bg-[#F4F4F4]">
      <div className="px-6 py-6 bg-white shadow rounded">
        <div className="text-[20px] font-semibold mb-6">Thông tin cơ bản</div>
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
              <div className="text-[14px] h-full font-medium flex items-center">Ngành hàng</div>
            </div>
          </div>
          <div className="w-full">
            {/* <div className="h-10 w-full px-3 border rounded-sm flex">
              <input className="h-full w-full outline-none text-[14px]" placeholder="Chọn ngàng hàng" />
              <div className="pl-2 h-full flex items-center">
                <div className="h-6 border-l pl-2 text-[14px] text-gray-400">0/120</div>
              </div>
            </div> */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full h-full border rounded px-3 py-1 flex justify-between items-center cursor-pointer hover:border-gray-400">
                  <span className="text-[14px] text-gray-400">Tìm kiếm theo ngành hàng</span>
                  <Pen size={16} color="#ababab" strokeWidth={1.25} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
              <div className="text-[14px] h-full font-medium flex items-center">Ngành hàng</div>
            </div>
          </div>
          <div className="w-full">
            {/* <div className="h-10 w-full px-3 border rounded-sm flex">
              <input className="h-full w-full outline-none text-[14px]" placeholder="Chọn ngàng hàng" />
              <div className="pl-2 h-full flex items-center">
                <div className="h-6 border-l pl-2 text-[14px] text-gray-400">0/120</div>
              </div>
            </div> */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full h-full border rounded px-3 py-1 flex justify-between items-center cursor-pointer hover:border-gray-400">
                  <span className="text-[14px] text-gray-400">Tìm kiếm theo ngành hàng</span>
                  <Pen size={16} color="#ababab" strokeWidth={1.25} />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
    </div>
  )
}
