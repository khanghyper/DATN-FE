'use client'
import AttributesTable from "@/app/(guest)/_components/attributes-table";
import Comment from "@/app/(guest)/_components/comment";
import { GuestBreadCrumb } from "@/app/(guest)/_components/guest-breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, PhoneCall, ShoppingBasket, SquareCheckBig, Star, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { number } from "zod";

export default function ProductDetailPage({ params }: { params: { id: number } }) {
  let id: number = params.id;
  const [idShop, setIdShop] = useState<number>();
  const [products, setProducts] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [attributes, setAtributes] = useState<any>([]);
  const [attributesValue, setAtributesValue] = useState<any>([]);
  const [variants, setVariants] = useState<any>([]);
  const [choiceOpt, setChoiceOpt] = useState<any>([]);

  useEffect(() => {
    const getDetail = (async () => {
      const apiProduct = await fetch(`https://vnshop.top/api/products/${id}`).then(res => res.json());
      console.log(apiProduct.data);
      setImages([...apiProduct.data.images])
      setProducts(apiProduct.data)
      setIdShop(apiProduct.data.shop_id);
    })()
  }, [idShop])

  useEffect(() => {
    const getIdShop = (async () => {
      try {
        const apiVariant = await fetch(`https://vnshop.top/api/variantattribute/${idShop}/${id}`);
        const payload = await apiVariant.json();
        // console.log(payload?.data?.attribute);
        // console.log(payload?.data?.value);
        if (apiVariant.ok) {
          setAtributes([...payload.data.attribute]);
          setAtributesValue([...payload.data.value]);
          setVariants([...payload.data.data])
        } else {
          console.log('Lỗi kìa', payload);
        }
      } catch (error) {
        console.log('Lỗi rồi kìa', error);
      }

    })()
  }, [idShop])

  const onclickChoice = (idAttribute: number) => {
    console.log(idAttribute);

  }


  return (
    <div className="w-full">
      <GuestBreadCrumb />
      <div className="w-full flex border shadow">
        <div className="w-2/5 p-4">
          <div className="w-full">
            <div className="w-full h-[450px]">
              <img className="border size-full object-cover" src={`${products.image ?? 'https://salt.tikicdn.com/cache/750x750/ts/product/59/6d/d2/3a4ee4a2ffbae124699e5a01ab5cf5db.jpg.webp'}`} alt="" />
            </div>
            <div className=" my-[5px] -mx-[5px] flex">
              {
                images.map((item: any, index: number) => (
                  <div className="p-[5px] size-[92px]" key={index}>
                    <div className="size-full">
                      <img className="border size-full object-cover" src={`${item.url ?? 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc'}`} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-3/5 p-4">
          <div className="w-full">
            <div className="w-full h-[180px] relative">
              <div className="w-full mb-2">
                <span className="text-[20px] font-bold">{products.name}</span>
              </div>
              <div className="w-full">
                <span className="text-[14px] font-normal">Thương hiệu: {products.brand ?? 'Chưa có thương hiệu'}</span>
              </div>
              <div className="w-full">
                <span className="text-[24px] font-bold text-red-500">
                  {products?.show_price
                    ? products.show_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                    : 'Lỗi giá tiền'}
                </span>
              </div>

              <div className="w-full">
                <span className="text-[14px] font-normal">
                  <del className="text-gray-400">190.000đ</del>
                  <span className="text-red-500 ml-1">Giảm 43%</span>
                </span>
              </div>
              <div className="absolute bottom-0 w-full left-0">
                <div className="w-full flex gap-3 items-center">
                  <div className="flex gap-1">
                    <Star size={16} className="text-yellow-500" />
                    <Star size={16} className="text-yellow-500" />
                    <Star size={16} className="text-yellow-500" />
                    <Star size={16} className="text-yellow-500" />
                    <Star size={16} className="text-yellow-500" />
                  </div>
                  <span className="text-[14px] text-blue-500">71 đánh giá</span>
                  <div className="flex gap-1 items-center">
                    <ShoppingBasket size={16} className="text-gray-400" />
                    <span className="text-[14px] text-gray-400">254 lượt mua</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 py-[5px] border-t">
              {
                attributes.map((item: any, index: number) => {
                  var filterVariant = attributesValue.filter((item2: any) => item2.attribute_id == item.id)


                  return (
                    <div className="w-full flex flex-col" key={index}>
                      <div className="w-[160px] text-gray-500 text-[14px] leading-8">
                        {item[0].name}
                      </div>
                      <div className="w-[calc(100%-160px)] flex gap-2">
                        {filterVariant.map((item2: any, idx: number) => {
                          if (item2[0].attribute_id == item[0].id) {
                            return (
                              <div className="px-[10px] py-[5px] bg-white text-blue-500 border flex justify-center items-center rounded hover:text-white hover:bg-blue-500" key={idx}>
                                <span onClick={() => { onclickChoice(item2[0].id) }}>
                                  {item2[0].value}
                                </span>
                              </div>
                            )
                          }
                        }
                        )}
                      </div>
                    </div>
                  )
                })
              }
              <div className="w-full flex mt-2">
                <div className="w-[160px] text-gray-500 text-[14px] leading-8">
                  Chọn số lượng:
                </div>
                <div className="w-[calc(100%-160px)] flex">
                  <div className="p-[5px]">
                    <Button className="bg-gray-100 size-8 hover:bg-gray-100 text-gray-500">-</Button>
                  </div>
                  <div className="p-[5px]">
                    <Input className="w-10 h-8 text-[14px]" placeholder="1" />
                  </div>
                  <div className="p-[5px]">
                    <Button className="bg-gray-100 size-8 hover:bg-gray-100 text-gray-500">+</Button>
                  </div>
                </div>
              </div>
              <div className="w-full flex my-2">
                <Button className="bg-gray-100 h-12 w-60 rounded-none hover:bg-gray-100 text-gray-500 mr-4">Thêm vào giỏ</Button>
                <Button className="bg-red-600 h-12 w-60 rounded-none hover:bg-red-600 text-white">Mua ngay</Button>
              </div>
            </div>
            <div className="w-full border-t">
              <div className="font-bold py-5 text-[16px]">Ưu đãi dành cho bạn</div>
              <div className="w-full flex flex-wrap">
                <div className="w-1/2 mb-4 flex gap-2">
                  <img className="size-6" src="https://media3.scdn.vn/img4/2023/08_29/HDgWOVQr93hTWAFmecC3.png" alt="" />
                  <span className="text-[14px] font-normal">Trả góp qua AFTEE</span>
                </div>
                <div className="w-1/2 mb-4 flex gap-2">
                  <img src="https://media3.scdn.vn/img4/2023/04_17/9wtTH9rjcQ4CVH1s7SeW.png" className="size-6" />
                  <span className="text-[14px] font-normal">Trả góp Muadee</span>
                </div>
                <div className="w-1/2 mb-4 flex gap-2">
                  <img src="https://media3.scdn.vn/img4/2022/12_19/k4fhvv3i925lb0CUgGn4.png" className="size-6" />
                  <span className="text-[14px] font-normal">Trả góp Kredivo</span>
                </div>
              </div>
            </div>
            <div className="w-full border-t">
              <div className="font-bold py-5 text-[16px]">Quyền lợi khách hàng & Bảo hành</div>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <SquareCheckBig size={20} color="green" />
                  <span className="text-[14px]">48 giờ hoàn trả</span>
                </div>
                <div className="flex gap-2">
                  <SquareCheckBig size={20} color="green" />
                  <span className="text-[14px]">Bảo hành theo chính sách từ Nhà bán hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-6">
        <div className="w-2/5 pr-4 ">
          <div className="shadow border p-4 w-full">
            <div className="font-bold text-[16px]">Thông tin nhà cung cấp</div>
            <div className="flex mt-4 gap-4">
              <div className="size-16">
                <div className="size-full border-2 rounded-full">
                  <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" alt="" />
                </div>
              </div>
              <div>
                <div className="font-bold text-[16px]">NextJS Fashion</div>
                <span className="text-[12px] text-gray-400">
                  Đồng Nai |
                  <span> 4.7 <span className="text-[#f0ce11] text-[14px]">★</span></span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5 mt-4">
              <div className="text-center">
                <span className="text-[16px] font-bold mb-2">1 năm</span>
                <div className="text-[12px] font-normal">Bán ở VNShop</div>
              </div>
              <div className="text-center">
                <span className="text-[16px] font-bold mb-2">100</span>
                <div className="text-[12px] font-normal">Sản phẩm</div>
              </div>
              <div className="text-center">
                <span className="text-[16px] font-bold mb-2">1 ngày</span>
                <div className="text-[12px] font-normal">Chuẩn bị hàng</div>
              </div>
              <div className="text-center">
                <span className="text-[16px] font-bold mb-2">--</span>
                <div className="text-[12px] font-normal">Tỉ lệ phản hồi</div>
              </div>
              <div className="text-center">
                <span className="text-[16px] font-bold mb-2">--</span>
                <div className="text-[12px] font-normal">Shop phản hồi</div>
              </div>
            </div>
            <div className="w-full flex gap-2 mt-4">
              <Button className="bg-gray-100 h-10 p-2 rounded-none hover:bg-gray-100 w-[45%] text-black">
                <Heart size={20} />
                <span className="ml-2">Theo dõi shop</span>
              </Button>
              <Button className="bg-gray-100 h-10 p-2 rounded-none hover:bg-gray-100 w-[45%] text-black">
                <Store size={20} />
                <span className="ml-2">Vào shop</span>
              </Button>
              <Button className="bg-gray-100 h-10 p-2 rounded-none hover:bg-gray-100 w-[10%] text-black">
                <PhoneCall size={20} />
              </Button>
            </div>
            <div className="mt-4 border-t">
              <div className="mt-4 text-[14px] font-bold">
                Gợi ý thêm từ shop
              </div>
              <div className="mt-4 w-full bg-gradient-to-b from-white to-blue-200">
                <div className="w-full border overflow-hidden">
                  <div className="w-[600px] translate-x-2 flex gap-2">
                    <div className="mb-3 w-[120px] shadow-sm bg-white rounded-sm">
                      <div className="size-[120px]">
                        <img className="size-full object-cover" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="text-[14px] font-normal text-ellipsis">Áo sơ mi nam vải dài tay vải ...</p>
                        <div className="w-full h-4"></div>
                        <span className="text-[16px] text-red-500 font-bold">70.000đ</span>
                      </div>
                    </div>
                    <div className="mb-3 w-[120px] shadow-sm bg-white rounded-sm">
                      <div className="size-[120px]">
                        <img className="size-full object-cover" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="text-[14px] font-normal text-ellipsis">Áo sơ mi nam vải dài tay vải ...</p>
                        <div className="w-full h-4"></div>
                        <span className="text-[16px] text-red-500 font-bold">70.000đ</span>
                      </div>
                    </div>
                    <div className="mb-3 w-[120px] shadow-sm bg-white rounded-sm">
                      <div className="size-[120px]">
                        <img className="size-full object-cover" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="text-[14px] font-normal text-ellipsis">Áo sơ mi nam vải dài tay vải ...</p>
                        <div className="w-full h-4"></div>
                        <span className="text-[16px] text-red-500 font-bold">70.000đ</span>
                      </div>
                    </div>
                    <div className="mb-3 w-[120px] shadow-sm bg-white rounded-sm">
                      <div className="size-[120px]">
                        <img className="size-full object-cover" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="text-[14px] font-normal text-ellipsis">Áo sơ mi nam vải dài tay vải ...</p>
                        <div className="w-full h-4"></div>
                        <span className="text-[16px] text-red-500 font-bold">70.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="w-full p-4 shadow border mb-4">
            <div className="text-[16px] font-bold mb-4">
              Mô tả sản phẩm
            </div>
            <p className="text-[14px] font-normal mb-4">
              THÔNG TIN SẢN PHẨM Áo Croptop Len LÊ HUY FASHION*Chất liệu: Thun Gân co dãn. * Sản phẩm có các màu: đen, trắng, hồng* Hàng freesize: từ 38-54kg* Bảng size chỉ mang tính chất tham khảo, tùy thuộc vào số đo cơ thể* Độ dài ngang eo còn tùy thuộc vào...
            </p>
            <div className="text-[16px] font-bold mb-4">
              Thông tin cơ bản
            </div>
            <div className="mb-4">
              <AttributesTable />
            </div>
            <div className="text-[16px] font-bold mb-4">
              Chi tiết sản phẩm
            </div>
            <p className="text-[14px] font-normal">
              Chi tiết sản phẩm
            </p>
          </div>
          <div className="w-full p-4 shadow border">
            <span className="text-[16px] font-bold mb-4">
              Đánh giá và nhận xét sản phẩm <span className="text-gray-400 font-normal text-[14px] text-">( 71 lượt đánh giá)</span>
            </span>
            <div className="flex gap-8">
              <div className="w-1/2 flex flex-col justify-center">
                <span>
                  <span className="font-bold text-black text-[30px]">4.6</span>
                  <span className="font-bold text-black text-[22px]">/</span>
                  <span className="font-bold text-red-500 text-[22px]">5</span>
                  <span className="ml-4 text-[#f0ce11] text-[20px]">★★★★★</span>
                </span>
                <span className="italic text-[14px] text-gray-500">
                  Đây là thông tin người mua đánh giá shop bán sản
                  phẩm này có đúng mô tả không.
                </span>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="flex">
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-56 h-3 bg-gray-200 rounded-sm">
                      <div className="w-40 h-3 bg-red-500 rounded-bl-sm rounded-tl-sm"></div>
                    </div>
                    <span className="text-[14px] font-bold">10</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-56 h-3 bg-gray-200 rounded-sm">
                      <div className="w-40 h-3 bg-red-500 rounded-bl-sm rounded-tl-sm"></div>
                    </div>
                    <span className="text-[14px] font-bold">10</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-56 h-3 bg-gray-200 rounded-sm">
                      <div className="w-40 h-3 bg-red-500 rounded-bl-sm rounded-tl-sm"></div>
                    </div>
                    <span className="text-[14px] font-bold">10</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-56 h-3 bg-gray-200 rounded-sm">
                      <div className="w-40 h-3 bg-red-500 rounded-bl-sm rounded-tl-sm"></div>
                    </div>
                    <span className="text-[14px] font-bold">10</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                    <span className="text-[#f0ce11]">★</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-56 h-3 bg-gray-200 rounded-sm">
                      <div className="w-40 h-3 bg-red-500 rounded-bl-sm rounded-tl-sm"></div>
                    </div>
                    <span className="text-[14px] font-bold">10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button>Tất cả</Button>
              <Button className="bg-gray-100 rounded-none hover:bg-gray-100 w-[10%] text-black">
                1 sao
              </Button>
              <Button className="bg-gray-100 rounded-none hover:bg-gray-100 w-[10%] text-black">
                2 sao
              </Button>
              <Button className="bg-gray-100 rounded-none hover:bg-gray-100 w-[10%] text-black">
                3 sao
              </Button>
              <Button className="bg-gray-100 rounded-none hover:bg-gray-100 w-[10%] text-black">
                4 sao
              </Button>
              <Button className="bg-gray-100 rounded-none hover:bg-gray-100 w-[10%] text-black">
                5 sao
              </Button>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-8 flex flex-col gap-6">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}
