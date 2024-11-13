'use client'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import categoryApiRequest from "@/apiRequest/category";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import envConfig from "@/config";
import { Asterisk, Check, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function CategorySection() {
  const [open, setOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [showCategories, setShowCategories] = useState<{
    parent_id: number
    categories: any[]
  }[]>([]);
  const [categoriesSlected, setCategoriesSlected] = useState<any[]>([]);
  const [categoriesSlectedCopy, setCategoriesSlectedCopy] = useState<any[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);


  useEffect(() => {
    let item = categoriesSlected[categoriesSlected.length - 1];
    if (item) {
      let isHasChildren = categories.some((pc) => pc.parent_id === item.id);
      setIsValid(!isHasChildren);
    }
  }, [categoriesSlected])

  console.log({ isValid });


  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT_1}/api/categories`, {
          cache: 'no-cache'
        });
        if (!res.ok) {
          throw 'Error';
        }
        const payload = await res.json();
        console.log({ a: payload.data });
        payload.data.push(
          { id: 20, title: "Áo vải nam", parent_id: 6 },
          { id: 21, title: "Áo vải nam hoodie", parent_id: 20 },
          { id: 22, title: "Áo vải nam hoodie", parent_id: 21 },
          { id: 23, title: "Điện thoại", parent_id: 7 },
          { id: 25, title: "PC", parent_id: 7 }
        )
        setCategories([...payload.data]);
        setShowCategories([{ parent_id: 0, categories: payload.data.filter((c: any) => !c.parent_id) }])
      } catch (error) {
        console.log(error);
      }
    }
    getCategoryList()
  }, [])


  const handleClickCategory = (isHasChildren: boolean, id: number, index: number) => {
    setCategoriesSlected((prev) => {
      let item = categories.find(c => c.id === id);
      prev.splice(index, 100);
      prev.push(item);
      return [...prev]
    })
    if (isHasChildren) {
      let categoriesNest = categories.filter((pc) => pc.parent_id === id);

      setShowCategories((prev) => {
        prev.splice(index + 1, 100);
        prev.push({ parent_id: id, categories: categoriesNest })
        return [...prev]
      })
    } else {
      setShowCategories((prev) => {
        prev.splice(index + 1, 100);
        return [...prev]
      })
    }
  }

  return (
    <div className="my-6">
      <div className="text-sm mb-2 font-semibold flex items-center gap-1">
        <Asterisk size={16} color="#e83030" strokeWidth={1.25} />
        Danh mục ngành hàng
      </div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div className="border w-full h-[30px] rounded-xl px-4 text-sm flex items-center">
            {!isValid && (
              <span className="text-gray-400">Chọn danh mục</span>
            )}
            {isValid && (
              categoriesSlected.map((c, index) => (
                <span className="flex items-center gap-1 mr-1">
                  {c.title}
                  {index !== categoriesSlected.length - 1 && <ChevronRight size={16} strokeWidth={1.25} />}
                </span>
              ))
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[900px] bg-white p-0">
          <div className="w-full p-4 rounded-lg border">
            <div className="w-full">
              <div className="h-[30px] mb-4">
                <input type="text" placeholder="Tìm kiếm" className="outline-none rounded-xl border text-[12px] h-full px-3 w-[400px]" />
              </div>
              <ScrollArea className=" w-full rounded-md border pb-2">
                <div className="flex overflow-x-auto">
                  {showCategories.length > 0 && showCategories.map((s, index) => (
                    <div key={index} className="w-[240.5px] border-r h-[300px]">
                      <ul className="w-full">
                        {s.categories.map((c, subIndex) => {
                          let isHasChildren = categories.some((pc) => pc.parent_id === c.id);
                          let checked = categoriesSlected.some(pc => pc.id === c.id);
                          // if (isHasChildren) setIsValid(true);
                          // else setIsValid(false);
                          return (
                            <li
                              key={subIndex}
                              className={`pl-5 pr-[18px] text-sm h-8 flex items-center justify-between hover:bg-gray-100  cursor-pointer
                                  ${checked ? "bg-gray-100" : ""}
                                `}
                              onClick={() => handleClickCategory(isHasChildren, c.id, index)}
                            >
                              {c.title}
                              {isHasChildren &&
                                <ChevronRight size={16} color="#383838" strokeWidth={1.25} />
                              }
                              {!isHasChildren && checked && (
                                <Check size={16} color="#2347d7" strokeWidth={1.25} />
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <span className="relative z-50">
        <div className="border w-full h-[29.6px] rounded-lg"></div>
        {open && (
          <div className="w-[85%] p-4 rounded-lg border absolute bg-white top-[41.6px]">
            <div className="w-full">
              <div className="h-[30px] mb-3">
                <input type="text" placeholder="tìm kiếm" className="outline-none rounded-xl border text-[12px] h-full px-3 w-[400px]" />
              </div>
              <ScrollArea className=" w-full rounded-md border pb-2">
                <div className="flex overflow-x-auto">
                  {showCategories.length > 0 && showCategories.map((s, index) => (
                    <div key={index} className="w-[240.5px] border-r h-[300px]">
                      <ul className="w-full">
                        {s.categories.map((c, subIndex) => {
                          let isHasChildren = categories.some((pc) => pc.parent_id === c.id);
                          let checked = categoriesSlected.some(pc => pc === c.id);
                          // if (isHasChildren) setIsValid(true);
                          // else setIsValid(false);
                          return (
                            <li
                              key={subIndex}
                              className={`pl-5 pr-[18px] text-sm h-8 flex items-center justify-between hover:bg-gray-100  cursor-pointer
                                  ${checked ? "bg-gray-100" : ""}
                                `}
                              onClick={() => handleClickCategory(isHasChildren, c.id, index)}
                            >
                              {c.title}
                              {isHasChildren &&
                                <ChevronRight size={16} color="#383838" strokeWidth={1.25} />
                              }
                              {!isHasChildren && checked && (
                                <Check size={16} color="#2347d7" strokeWidth={1.25} />
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        )}
      </span> */}
    </div>
  )
}