'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getCategoryList } from "@/redux/slices/shop-new-product.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ChevronRight, Pen } from "lucide-react";
import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";

type Category = {
  id: number
  name: string
  parentId?: number | null
  children: Category[]
}
const categories: Category[] = [
  {
    "id": 1, "name": "Thời trang nam", "parentId": null,
    children: [
      {
        "id": 2, "name": "Quần jean", "parentId": 1, children: []
      },
      { "id": 3, "name": "Quần đùi", "parentId": 1, children: [] },
      {
        "id": 12, "name": "Áo", "parentId": 1, children: [
          { "id": 4, "name": "Áo polo", "parentId": 2, children: [] },
          { "id": 5, "name": "Áo thun", "parentId": 2, children: [] },
        ]
      },
    ]
  },

  {
    "id": 7, "name": "Giày dép nam", "parentId": null, children: [
      { "id": 8, "name": "Giày tây lười", "parentId": 7, children: [] },
    ]
  },
  { "id": 11, "name": "Máy tính và Laptop", "parentId": null, children: [] },
]


const getCategories = async () => {
  return categories;
}



function NewProductPopupCategory({ isShowPopupCategory, setIsShowPopupCategory, setIsSelectedCategory }: { isShowPopupCategory: boolean, setIsShowPopupCategory: Dispatch<SetStateAction<boolean>>, setIsSelectedCategory: Dispatch<SetStateAction<boolean>> }) {

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLevel1, setCategoriesLevel1] = useState<Category[]>([]);
  const [categoriesLevel2, setCategoriesLevel2] = useState<Category[]>([]);
  const [categoriesLevel3, setCategoriesLevel3] = useState<Category[]>([]);
  const [categoriesLevel4, setCategoriesLevel4] = useState<Category[]>([]);
  const [categoriesSelected, setCategoriesSelected] = useState<Category[]>([]);
  const [cloneCategoriesSelected, setCloneCategoriesSelected] = useState<Category[]>([]);
  const [isConfirmCategories, setIsConfirmCategoies] = useState<boolean>(false);

  const categoriesfake = useAppSelector(state => state.shopListProduct.data);
  console.log({ categoriesfake });

  useEffect(() => {
    const a = async () => {
      const b = await getCategories();
      setCategories([...b]);
    }
    a()
  }, [])



  const isCategoryHasChildren = (category: Category): boolean => {
    return category.children.length > 0;
  }
  const handleClickCategoryLevel1 = (category: Category) => {

    setCategoriesSelected([category])
    setCloneCategoriesSelected((prev) => {
      const a = [...prev];
      if (category.children.length) {
        a.pop();
        return a;
      }
      else return a;
    })
    setCategoriesLevel2(category.children);
    setCategoriesLevel3([])
    setCategoriesLevel4([])
    setIsConfirmCategoies((() => {
      return category.children.length === 0;
    }))
  }
  const handleClickCategoryLevel2 = (category: Category) => {
    setCategoriesLevel3(category.children)
    setCategoriesLevel4([])
    setCategoriesSelected((prev) => {
      const a = [...prev];
      a.splice(1, 3);
      a[1] = category;
      return a;
    })
    setCloneCategoriesSelected((prev) => {
      const a = [...prev];
      if (category.children.length) {
        a.pop();
        return a;
      }
      else {
        a.splice(1, 3);
        a[1] = category;
        return a;
      }
    })

    setIsConfirmCategoies((() => {
      return category.children.length === 0;
    }))
  }
  const handleClickCategoryLevel3 = (category: Category) => {
    setCategoriesLevel4(category.children)
    setCategoriesSelected((prev) => {
      const a = [...prev];
      a.splice(2, 2);
      a[2] = category;
      return a;
    })
    setCloneCategoriesSelected((prev) => {
      const a = [...prev];
      a.splice(2, 2);
      a[2] = category;
      return a;
    })
    setIsConfirmCategoies((() => {
      return category.children.length === 0;
    }))
  }



  const handleCancelPopup = () => {
    setIsShowPopupCategory(false);

    if (categoriesSelected[categoriesSelected.length - 1].children.length !== 0) {
      setCategoriesSelected([...cloneCategoriesSelected]);
      setIsConfirmCategoies(false);
    }
  }

  return (
    <Dialog open={isShowPopupCategory} onOpenChange={setIsShowPopupCategory}>
      <DialogTrigger asChild>
        <div className="w-[800px] h-full border rounded px-3 py-1 flex justify-between items-center cursor-pointer hover:border-gray-400">
          <div className="text-[14px] text-gray-400 flex gap-1">
            {
              cloneCategoriesSelected.length && isConfirmCategories
                ? cloneCategoriesSelected.map((item, index) => (
                  <span className="text-black font-medium">
                    <span>{item.name}</span>
                    <span className="ml-1">{index !== cloneCategoriesSelected.length - 1 && ' > '}</span>
                  </span>
                ))
                : 'Tìm kiếm theo ngành hàng'
            }
          </div>
          <Pen size={16} color="#ababab" strokeWidth={1.25} />
        </div>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()} className="w-[1200px]">
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
                {categories.map((item) => (
                  <li onClick={() => handleClickCategoryLevel1(item)} key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                    <p className={`text-[14px] ${categoriesSelected.some(it => it.id === item.id) && 'text-blue-600 font-semibold'}`}>{item.name}</p>
                    {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <ScrollArea className="border-r h-[300px] max-h-[300px]">
              <ul className="">
                {categoriesLevel2.length > 0 && (
                  categoriesLevel2.map((item) => (
                    <li onClick={() => handleClickCategoryLevel2(item)} key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                      <p className={`text-[14px] ${categoriesSelected.some(it => it.id === item.id) && 'text-blue-600 font-semibold'}`}>{item.name}</p>
                      {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
                    </li>
                  ))
                )}
              </ul>
            </ScrollArea>
            <ScrollArea className="border-r h-[300px] max-h-[300px]">
              <ul className="">
                {categoriesLevel3.length > 0 && (
                  categoriesLevel3.map((item) => (
                    <li onClick={() => handleClickCategoryLevel3(item)} key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                      <p className={`text-[14px] ${categoriesSelected.some(it => it.id === item.id) && 'text-blue-600 font-semibold'}`}>{item.name}</p>
                      {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
                    </li>
                  ))
                )}
              </ul>
            </ScrollArea>
            <ScrollArea className="border-r h-[300px] max-h-[300px]">
              <ul className="">
                {categoriesLevel4.length > 0 && (
                  categoriesLevel4.map((item) => (
                    <li key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                      <p className="text-[14px]">{item.name}</p>
                      {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
                    </li>
                  ))
                )}
              </ul>
            </ScrollArea>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[1200px] h-[81px] p-6 -left-[25px] top-0 border-t ">
            <div className="w-full h-full flex justify-between">
              <div className="flex gap-4">
                <span className="text-[14px] font-medium">Đã chọn:</span>
                <span className="text-[14px] font-medium">
                  {categoriesSelected.length ?
                    categoriesSelected.map((item, index) => `${item.name} ${index !== categoriesSelected.length - 1 ? ' > ' : ''}`)
                    : 'Chưa chọn ngành hàng nào'}
                </span>
              </div>
              <div className="flex gap-4">
                <Button onClick={handleCancelPopup}>Cancel</Button>
                <Button className={`${!isConfirmCategories ? 'bg-[#D3D3D3] opacity-60 cursor-not-allowed hover:bg-[#D3D3D3]' : ''}`} onClick={() => {
                  if (isConfirmCategories) {
                    const a = categoriesSelected[categoriesSelected.length - 1];
                    if (!isCategoryHasChildren(a)) {
                      setIsShowPopupCategory(false);
                      setIsSelectedCategory(true);
                    }
                  }
                }}>Confirm</Button>
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

export default memo(NewProductPopupCategory);

{/* <ScrollArea className="border-r h-[300px] max-h-[300px]">
<ul className="">
  {categories2.map((item) => (
    <li onClick={async () => {
      setCategoriesSelected(prev => {
        const a = [...prev];
        a.splice(1, 3)
        a[1] = item;
        if (!item.children.length) setIsConfirmCategoies(true);
        return a;
      });
      const a = await getCategories(item.id);
      setCategory3([...a]);
    }} key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
      <p className={`text-[14px] ${categoriesSelected.some(it => it.id === item.id) ? 'text-blue-700 font-semibold' : ''}`}>{item.name}</p>
      {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
    </li>
  ))}
</ul>
</ScrollArea>
<ScrollArea className="border-r h-[300px] max-h-[300px]">
<ul className="">
  {categories3.map((item) => (
    <li onClick={async () => {
      setCategoriesSelected(prev => {
        const a = [...prev];
        a.splice(2, 2)
        a[2] = item;
        return a;
      });
      const a = await getCategories(item.id);
      setCategory4([...a]);
    }} key={item.id} className="h-8 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
      <p className={`text-[14px] ${categoriesSelected.some(it => it.id === item.id) ? 'text-blue-700 font-semibold' : ''}`}>{item.name}</p>
      {item.children.length ? (<ChevronRight size={20} strokeWidth={1.25} />) : ''}
    </li>
  ))}
</ul>
</ScrollArea>
<ScrollArea className="border-r h-[300px] max-h-[300px]">
<ul className="">
</ul>
</ScrollArea> */}