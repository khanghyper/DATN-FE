'use client'

import LoadingScreen from "@/app/(guest)/_components/loading-screen"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { decodeData } from "@/helpers"
import { clientAccessToken } from "@/lib/http"
import { formattedPrice } from "@/lib/utils"
import { useAppInfoSelector } from "@/redux/stores/profile.store"
import { CreditCard, MapPinIcon, MessageCircleMore, Store, Ticket, TicketCheck } from "lucide-react"
import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function CheckoutSection({ stateCheckout }: { stateCheckout: string | undefined | null }) {
  // let a = ''
  // if (!stateCheckout) {
  //   a = useAppInfoSelector(state => state.profile.checkoutState)
  // };
  // a = stateCheckout as string;
  // console.log(a);
  const [checkoutItems, setCheckoutItems] = useState<any[]>([]);
  const stateCheckoutInProfle = useAppInfoSelector(state => state.profile.checkoutState);
  const [loading, setLoading] = useState<boolean>(true);
  const cart = useAppInfoSelector(state => state.profile.cart?.cartInfo) as any[];
  const selectedItems = useAppInfoSelector(state => state.profile.cart?.selectedItems) as any[];



  useEffect(() => {
    const controller = new AbortController(); // Khởi tạo AbortController
    const signal = controller.signal;

    const getData = async () => {
      if (!stateCheckout && !stateCheckoutInProfle) return notFound();

      let decodeSelectedItems = stateCheckout ? JSON.parse(decodeData(stateCheckout)) : selectedItems;
      let a: any[] = [];
      cart.forEach((s) => {
        let items: any[] = [];
        s.items.forEach((i: any) => {
          if ((decodeSelectedItems).includes(i.id)) {
            items.push(i);
          }
        });
        if (items.length) {
          a.push({ ...s, items });
        }
      });

      console.log(a);

      const body = a.map(s => ({ shop_id: s.id, items: s.items.map((i: any) => i.id) }));

      try {
        const calShipFeeRes = await fetch('https://vnshop.top/api/calculate/ship_fee', {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${clientAccessToken.value}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body),
          signal // Thêm signal để có thể hủy yêu cầu khi cần thiết
        });

        if (!calShipFeeRes.ok) throw new Error('Failed to fetch');

        const payload = await calShipFeeRes.json();
        setCheckoutItems([...a.map((s, index: number) => ({ ...s, ship_fee: payload[index].ship_fee }))])
        setLoading(false);
      } catch (error: any) {
        if (error.name !== 'AbortError') {
          console.error("Fetch error: ", error); // Xử lý lỗi khác ngoài AbortError
        }
      }
    };

    getData();


    // Cleanup function để hủy request khi component unmount
    return () => {
      controller.abort();
    };
  }, [selectedItems.length])

  console.log();

  return (

    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="w-full flex justify-center">
          <div className="w-full">
            <div className="header  bg-white border rounded px-[30px] pt-7 pb-6 mt-5 text-[#000000]">
              <div className="title flex items-center" >
                <MapPinIcon color="#2969d1" strokeWidth={1.25} size={16} />
                <div className="ml-2 text-blue-700 text-[18px]">Địa Chỉ Nhận Hàng</div>
              </div>
              <div className="header-content flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="text-[16px] font-bold">
                    Nguyễn Hữu Tường (+84)9920938848
                  </div>
                  <div className="ml-4 text-[16px]">nghi xuân nghi lộc nghệ an</div>
                </div>
                <div className="text-blue-700">
                  Thay đổi
                </div>
              </div>
            </div>
            {checkoutItems.map((s: any) => (
              <div key={s.id} className="w-full mt-3 rounded-sm bg-white">
                <div className="w-full pt-6 px-[30px] flex items-center">
                  <div className="w-full h-[50px] flex items-center">
                    <div className="w-[380px] flex-[4] text-left">
                      <span className="text-[18px] font-normal text-black">Sản phẩm</span>
                    </div>
                    <div className="flex-[2]"></div>
                    <div className="flex-[2] text-sm text-right">Đơn giá</div>
                    <div className="flex-[2] text-sm text-right">Số lượng</div>
                    <div className="flex-[2] text-sm text-right">Thành tiền</div>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="w-full">
                    <div className="w-full">
                      <div className="px-[30px] w-full h-[50px] flex items-center">
                        <Store color="#545454" size={18} strokeWidth={1.25} />
                        <div className="ml-[8px] text-sm text-black">{s.shop_name}</div>
                      </div>
                      <div className="w-full pb-5 border-b">
                        {s.items.map((i: any) => (
                          <div key={i.id} className="flex items-center mx-[30px] mt-3">
                            <div className="flex items-center justify-start overflow-hidden flex-[4]">
                              <img src={i.product_image ? i.product_image : i.variant_image} className="size-10 object-cover" />
                              <span className="flex flex-col justify-center mx-[15px] overflow-hidden text-sm">{i.product_name}</span>
                            </div>
                            <div className="flex-[2] text-sm flex justify-start text-[#929292]">
                              {i.variant_name && (
                                <span className="pl-3 text-ellipsis whitespace-nowrap overflow-hidden">Loại: {i.variant_name}</span>
                              )}
                            </div>
                            <div className="flex-[2] text-sm text-black flex justify-end">{i.product_price ? formattedPrice(+i.product_price) : formattedPrice(+i.variant_price)}</div>
                            <div className="flex-[2] text-sm text-black flex justify-end">{i.quantity}</div>
                            <div className="flex-[2] text-sm text-black flex justify-end">{i.product_price ? formattedPrice(+i.product_price * (+i.quantity)) : formattedPrice(+i.variant_price * (+i.quantity))}</div>
                          </div>
                        ))}

                      </div>
                      <div className="grid grid-cols-2 border-b border-dashed w-full">
                        <div></div>
                        <div className="p-[25px]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <TicketCheck size={20} color="#2969d1" strokeWidth={1.25} />
                              <span className="ml-1.5 text-sm">Voucher của shop</span>
                            </div>
                            <div className="flex items-center">
                              <div className="flex items-center text-[12px] text-blue-500 mr-[15px] border border-blue-500 h-5 p-1">-30k</div>
                              <div className="text-sm text-blue-600">Chọn Voucher khác</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-[#fafdff]">
                        <div className="grid grid-cols-[40%_60%] border-b border-dashed">
                          <div className="p-[25px]">
                            <div className="flex items-center text-sm text-black">
                              <span>Lời nhắn:</span>
                              <div className="flex-1">
                                <div className="ml-[15px] text-[12px] font-light mb-0">
                                  <div className="bg-white flex items-center border rounded-sm box-border h-10">
                                    <input
                                      type="text"
                                      className="h-full py-1 px-3 w-full border-0 text-black flex-1 text-sm outline-none"
                                      placeholder="Lưu ý cho người bán"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-l border-dashed grid gap-[10px]">
                            <div className="w-full p-[25px] grid border-dashed col-end-5 col-start-1 items-center">
                              <div className="col-end-2 col-start-1 text-sm font-medium text-black">Phương thức vận chuyển:</div>
                              <div className="col-start-2 row-end-2 row-start-1 text-sm font-medium text-black">Nhanh</div>
                              <div className="col-start-1"></div>
                              <div className="text-[#888] text-[12px] col-start-2 mt-[10px] row-end-auto row-start-auto">
                                Đảm bảo nhận hàng từ 13 Tháng 11 - 14 Tháng 11
                              </div>
                              <div className="col-start-3 row-end-2 row-start-1"></div>
                              <div className="col-start-4 row-end-2 row-start-1 text-right text-sm font-medium">{formattedPrice(s.ship_fee)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#fafdff] w-full py-[15px] flex flex-col">
                        <div className="flex h-10  items-center justify-end">
                          <div className="text-sm font-normal">Tổng số tiền ({s.items.reduce((acc: number, i: any) => acc + (+i.quantity), 0)} sản phẩm):</div>
                          <div className="pl-[10px] pr-[25px] h-full flex items-center text-[#ee4d2d] text-[24px] font-semibold">
                            {formattedPrice(+s.items.reduce((acc: number, i: any) => acc + (+i.quantity * (i.product_price ? (+i.product_price) : (+i.variant_price))), 0) + s.ship_fee)}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


            <div className="voucher  bg-white border rounded px-[30px] py-7 mt-3 text-[#000000]">
              <div className="title flex items-center justify-between">
                <div className="flex items-center">
                  <Ticket color="#2969d1" strokeWidth={1.25} size={24} />
                  <div className="ml-3 text-[20px]">VNShop Voucher</div>
                </div>
                <div className="text-blue-700 text-sm">Chọn Voucher</div>
              </div>
            </div>
            <div className="payment-type  bg-white border rounded mt-3">
              <div className="title flex items-center justify-between px-[30px] h-[90px] border-b">
                <div className="flex">
                  <div className="text-[20px] text-black">Phương thức thanh toán</div>
                </div>
                <div className="flex">
                  <span className="text-sm">Thanh toán khi nhận hàng</span>
                  <span className="text-blue-700 text-sm ml-[60px] uppercase">Thay đổi</span>
                </div>
              </div>
              <div className="content flex justify-end pt-[15px] bg-[#fffefb]">
                <ul className="w-[230px] text-gray-500">
                  <li className="h-10 flex text-sm items-center">Tổng tiền hàng</li>
                  <li className="h-10 flex text-sm items-center">Tổng tiền phí vận chuyển</li>
                  <li className="h-10 flex text-sm items-center">Tổng cộng voucher giảm giá</li>
                  <li className="h-10 flex text-sm items-center">Tổng thanh toán</li>
                </ul>
                <ul className="pr-[25px]">
                  <li className="justify-end h-10 flex text-sm items-center text-black font-medium">{
                    formattedPrice(checkoutItems.reduce((acc: number, s: any) => acc + s.items.reduce((acc: number, i: any) => acc + (+i.quantity * (i.product_price ? (+i.product_price) : (+i.variant_price))), 0), 0))
                  }
                  </li>
                  <li className="justify-end h-10 flex text-sm items-center text-black font-medium">
                    {
                      formattedPrice(checkoutItems.reduce((acc: number, s: any) => acc + s.ship_fee, 0))
                    }
                  </li>
                  <li className="justify-end h-10 flex text-sm items-center text-black font-medium">-0đ</li>
                  <li className="text-[#ee4d2d] justify-end h-10 flex text-[28px] font-semibold items-center">
                    {

                      formattedPrice(checkoutItems.reduce((acc: number, s: any) => acc + s.ship_fee + s.items.reduce((acc: number, i: any) => acc + (+i.quantity * (i.product_price ? (+i.product_price) : (+i.variant_price))), 0), 0))
                    }
                  </li>
                </ul>
              </div>
              <div className="footer mt-[10px] h-[100px] px-[30px] flex items-center justify-between border-t">
                <div className="text pt-10 pb-8 pr-[25px]">
                  <div className="text-sm">Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <span>Điều khoản VNShop</span></div>
                </div>
                <div className="btn">
                  <Button onClick={async () => {
                    const carts = checkoutItems.reduce((acc: any, s: any) => [...acc, ...s.items.map((i: any) => i.id)], []);
                    try {
                      const res = await fetch('https://vnshop.top/api/purchase_to_cart', {
                        method: "POST",
                        body: JSON.stringify({ carts, payment: 11 }),
                        headers: {
                          "Authorization": `Bearer ${clientAccessToken.value}`,
                          "Content-Type": "application/json"
                        }
                      });
                      const payload = await res.json();
                      if (!res.ok) {
                        console.log(payload);

                      }
                      console.log(payload);
                    } catch (error) {

                    }
                  }} className="bg-blue-700 w-[200px] h-[40px] text-[16px] text-white font-bold">Đặt hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
