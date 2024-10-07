import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react"
import { CategoryAttribute, CategoryTypeValue, showAttributesByIndex } from "@/redux/slices/shop-new-product.slice"
import { useAppDispatch, useAppSelector } from "@/redux/store"

export default function NewProductAttribute({ categoryAttribute, index }: { categoryAttribute: CategoryAttribute, index: number }) {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([])
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const categoryIndex = useAppSelector(state => state.shopListProduct.categoryAttributesIndex);

  return (
    <div className="flex mb-6">
      <div>
        <div className="w-[144px] h-10 mr-6 flex justify-end items-center gap-1">
          <span className="text-[12px] text-blue-700">*</span>
          <div className="text-[14px] h-full font-medium flex items-center">{categoryAttribute.key}</div>
        </div>
      </div>
      <div className="w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="w-[90%] min-h-4 p-3 flex justify-between border cursor-pointer shadow-sm rounded hover:border-[#cccccc] transition-all">
              {categoryAttribute.categoryTypeValue === CategoryTypeValue.MULTIPLE
                ? (values.length === 0
                  ? (<div className="text-[14px] text-gray-400">Vui lòng chọn</div>)
                  : (
                    <div className="flex gap-2 w-full flex-wrap">
                      {values.map(item => (
                        <div className="border rounded text-[12px] px-2">{item}</div>
                      ))}
                    </div>
                  ))
                : (
                  value
                    ? (
                      <div className="flex gap-2 w-full flex-wrap">
                        <div className="border rounded text-[12px] px-2">{value}</div>
                      </div>
                    )
                    : (<div className="text-[14px] text-gray-400">Vui lòng chọn</div>)
                )
              }
              {open && (
                <ChevronUp size={20} strokeWidth={1} className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              )}
              {!open && (
                <ChevronDown size={20} strokeWidth={1} className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[358px] p-0">
            <Command>
              <CommandInput placeholder="Vui lòng nhập tối thiểu 2 ký tự." className="h-9" />
              <CommandList >
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup >
                  {categoryAttribute.values.map((it) => (
                    <CommandItem
                      key={it.value}
                      value={it.value}
                      onSelect={(currentValue) => {
                        if (categoryAttribute.categoryTypeValue === CategoryTypeValue.MULTIPLE) {
                          setValues(prev => {
                            if (prev.includes(currentValue)) {
                              const a = prev.filter(val => val !== currentValue);
                              return a;
                            } else {
                              const a = [...prev, currentValue];
                              return a;
                            }
                          })
                        } else {
                          setValue(currentValue);
                          setOpen(false)
                        }
                      }}
                    >
                      {it.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          categoryAttribute.categoryTypeValue === CategoryTypeValue.MULTIPLE
                            ? (values.includes(it.value) ? "opacity-100" : "opacity-0")
                            : (value === it.value ? "opacity-100" : "opacity-0")
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
