'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Pen } from "lucide-react";
import { useEffect, useState } from "react";

type Category = {
  id: number
  name: string
  children: Category[]
  parentId?: number
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const categories: Category[] = [
  {
    id: 1,
    name: 'Thời trang nam',
    children: [
      {
        id: 2,
        name: 'Quần jean',
        children: [],
        parentId: 1
      },
      {
        id: 2,
        name: 'Áo',
        children: [
          {
            id: 4,
            name: 'Áo polo',
            children: [],
            parentId: 2
          },
          {
            id: 5,
            name: 'Áo thun',
            children: [],
            parentId: 2
          }
        ],
        parentId: 1
      },
      {
        id: 3,
        name: 'Quần đùi',
        children: [],
        parentId: 1
      }
    ]
  }, {
    id: 7,
    name: 'Giày dép nam',
    children: [
      {
        id: 8,
        name: 'Giày tây lười',
        children: [],
        parentId: 7
      }
    ]
  }
]

const getCategories = async () => {
  return categories;
}



export default function PopupCategory() {
  const [categories1, setCategory1] = useState<Category[]>([]);
  const [categories2, setCategory2] = useState([]);
  const [categories3, setCategory3] = useState([]);
  const [categories4, setCategory4] = useState([]);
  const [categoriesSelected, setCategorySelected] = useState<number[]>([])

  useEffect(() => {
    const a = async () => {
      const b = await getCategories();
      setCategory1([...b])
    }
    a()
  }, [])


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[300px] h-full border rounded px-3 py-1 flex justify-between items-center cursor-pointer hover:border-gray-400">
          <span className="text-[14px] text-gray-400">Tìm kiếm theo ngành hàng</span>
          <Pen size={16} color="#ababab" strokeWidth={1.25} />
        </div>
      </DialogTrigger>
      <DialogContent className="w-[1200px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa ngành hàng</DialogTitle>
        </DialogHeader>
        <div className="w-full max-h-[600px] bg-gray-50 rounded p-4">
          <div className="">
            <input type="text" className="h-8 border" />
          </div>
          <div className="w-full grid grid-cols-4 bg-white mt-4 py-2.5">
            <ScrollArea className="border-r h-[300px] max-h-[300px]">
              <ul className="">
                {categories1.map((item) => (
                  <li key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                    <p className="text-[14px]">{item.name}</p>
                    {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[1200px] h-[81px] p-6 -left-[25px] top-0 border-t ">
            <div className="w-full h-full flex justify-between">
              <div className="text-[14px] font-semibold">Đã chọn</div>
              <div className="flex gap-4">
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </div>
            </div>
          </div>
          <div className="h-[50px]">
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
