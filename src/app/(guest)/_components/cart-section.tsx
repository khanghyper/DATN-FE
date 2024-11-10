'use client'
import { Car, MessageCircleMore, Store, TicketPercent, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppInfoDispatch, useAppInfoSelector } from '@/redux/stores/profile.store';
import { formattedPrice } from '@/lib/utils';
import { Checkbox } from "@/components/ui/checkbox"
import { addCart, changeQuantity, selectAllProducts, selectAllShopProducts, selectItem } from '@/redux/slices/profile.slice';
import envConfig from '@/config';
import { clientAccessToken } from '@/lib/http';
import LoadingScreen from '@/app/(guest)/_components/loading-screen';
import { useState } from 'react';

export default function CartSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppInfoDispatch();
  const cart = useAppInfoSelector(state => state.profile.cart?.cartInfo) as any[];
  const selectedItems = useAppInfoSelector(state => state.profile.cart?.selectedItems) as any[]
  const cartItemsCount = cart.reduce((acc: number, cur: any) => acc + cur.items.reduce((acc: number, cur: any) => acc + (+cur.quantity), 0), 0);
  const cartItemsLength = cart.reduce((acc: number, cur: any) => acc + cur.items.length, 0);
  const totalPrice = selectedItems.reduce((acc: number, cur) => acc + ((+cur.quantity) * (cur.product_price ? +cur.product_price : +cur.variant_price)), 0)

  console.log({ cart });

  return (
    <div className='w-full'>
      <section className='headerCart w-full h-[55px] border rounded mt-5 flex items-center gap-4 text-[14px] bg-white'>
        <Checkbox
          checked={selectedItems.length === cartItemsLength}
          onCheckedChange={(c) => {
            let checked = c as boolean;
            dispatch(selectAllProducts(checked));
          }}
          className='size-4 ml-4 mr-2'
        />
        <div className='w-[506px] h-[20px] '>
          Sản phẩm
        </div>
        <div className='w-[173px] h-[20px] text-center text-[#888888]'>
          Đơn giá
        </div>
        <div className='w-[168px] h-[20px] text-center text-[#888888]'>
          Số lượng
        </div>
        <div className='w-[114px] h-[20px] text-center text-[#888888]'>
          Số tiền
        </div>
        <div className='w-[138px] h-[20px] text-center text-[#888888]'>
          Thao tác
        </div>
      </section>
      {cart.map((c: any, index: number) => {
        let checked = (c.items.length === selectedItems.filter((i) => (+i.shop_id) === c.id).length);

        return (
          <section key={c.id} className='productCartSection w-full border rounded bg-white mt-5'>
            <div className='w-full h-[60px] flex items-center gap-3 border-b-[0.5px]'>
              <Checkbox
                checked={checked}
                onCheckedChange={(c) => {
                  let checked = c as boolean;
                  dispatch(selectAllShopProducts({ checked, index }));
                }}
                className='size-4 ml-4 mr-2'
              />
              <Store color="#545454" size={18} />
              <div className='h-[20px] text-[14px] text-center'>
                {c.shop_name}
              </div>
              <MessageCircleMore className='text-blue-500' />
            </div>
            <div className='w-full '>
              <div className='w-[1160px] rounded m-5 border'>
                {/* <div className='w-[1158px] h-[47px] bg-blue-200 flex gap-4 items-center px-3 py-[9px]'>
                <span className='p-1 border rounded border-blue-500 text-blue-500 text-[10px] '>Mua kèm</span>
                <span className='text-[14px]'>Bạn đã chọn 2 quà tặng</span>
                <span className='text-[14px] text-blue-500 border-blue-500 border-b-[1px]'>Thay đổi </span>
              </div> */}
                {c.items.map((i: any, subIndex: number) => {
                  let checked = selectedItems.some((si) => si.id === i.id);
                  return (
                    <div key={i.id} className='w-[1158px] h-[141px] flex items-center border-b'>
                      <div className='w-[58px]'>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(c) => {
                            let checked = c as boolean;
                            dispatch(selectItem({ checked, id: i.id, shop_id: +i.shop_id }))
                          }}
                          className='size-4 ml-4 mr-2'
                        />
                      </div>
                      <div className='w-[317px] h-[109px] flex-col '>
                        <div className='w-full h-[83px] flex items-center gap-2'>
                          <div className='w-[80px] h-[80px]'>
                            <img src={i.product_image ? i.product_image : i.variant_image} className='w-full h-full object-cover' alt="" />
                          </div>
                          <div className='w-[calc(100%-80px-8px)] h-full p-1 px-2'>
                            <p className='text-[14px]'>{i.product_name ? i.product_name : i.variant_name}</p>
                            {/* <span className='w-[74px] px-[4px] py-[2px] border rounded border-blue-500 text-blue-500 text-[10px] '>Đổi ý 15 ngày</span> */}
                          </div>
                        </div>
                        <div className='w-full h-[20px] flex items-center'>
                          <span className='text-[12px] text-blue-500'>Fash Sale kết thúc lúc 23:59:00</span>
                        </div>
                      </div>
                      <div className='w-[188px] h-[80px] flex flex-col justify-center text-[14px] text-[#0000008a]'>
                        {i.variant_name && (
                          <>
                            <p >Phân loại hàng : </p>
                            <span>{i.variant_name}</span>
                          </>
                        )}
                      </div>
                      <div className='w-[173px] h-[80px] flex items-center justify-center text-[14px]'>
                        {/* <s className='text-[#0000008a]'><sup>đ</sup>280.000</s> */}
                        {/* <span><sup>đ</sup>189.000</span> */}
                        <span>{i.variant_price ? formattedPrice(+i.variant_price) : formattedPrice(+i.product_price)}</span>
                      </div>
                      <div className='w-[168px] h-[80px] flex justify-center items-center'>
                        <span className='px-1 border w-[30px] text-center'>-</span>
                        <input onChange={async (e) => {
                          let quantity = +e.target.value;
                          try {
                            setLoading(true);
                            const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT_1}/api/carts/${i.id}`, {
                              method: "PUT",
                              body: JSON.stringify({ quantity }),
                              headers: {
                                'Authorization': `Bearer ${clientAccessToken.value}`,
                                "Content-Type": "application/json"
                              }
                            })
                            const payload = await res.json();
                            if (!res.ok) {
                              console.log(payload);
                              throw 'Error'
                            }
                            // const resToCart = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT_1}/api/carts`, {
                            //   headers: {
                            //     "Authorization": `Bearer ${clientAccessToken.value}`
                            //   }
                            // });
                            // const payloadToCart = await resToCart.json();
                            // if (!resToCart.ok) {
                            //   return 'Error';
                            // }
                            // const newCart = payloadToCart.shop.map((shop: any) => {
                            //   const shop_id = shop.id;
                            //   const items = payloadToCart.cart.filter((p: any) => +p.shop_id === shop_id).map((p: any) => ({ ...p }));

                            //   return {
                            //     ...shop,
                            //     items
                            //   }
                            // })
                            dispatch(changeQuantity({ index, quantity, subIndex }))
                          } catch (error) {
                            console.log(error);
                          } finally {
                            setLoading(false);
                          }
                        }} type="number" className='text-sm border-b border-t w-[36px] h-[25.6px] text-center' value={i.quantity} />
                        <span className='px-1 border w-[30px] text-center'>+</span>
                      </div>
                      <div className='w-[113px] h-[80px] font-bold flex items-center justify-center text-[14px] text-[#ff424e]'>
                        {i.variant_price ? formattedPrice(+i.variant_price * i.quantity) : formattedPrice(+i.product_price * i.quantity)}
                      </div>
                      <div className='w-[139px] h-[80px] flex justify-center items-center text-sm'>
                        Xóa
                      </div>
                    </div>
                  )
                })}

              </div>
              <div className='w-full border-t-[0.5px]'>
                <div className='w-[1160px] h-[28px] my-[16px] ml-[40px] flex gap-4 text-[14px] items-center'>
                  <TicketPercent className='text-blue-500' />
                  <span className='text-blue-500'>Thêm mã giảm giá của Shop</span>
                </div>
              </div>
              <div className='w-full border-t-[0.5px]'>
                <div className='w-[1160px] h-[28px] my-[16px] ml-[40px] flex gap-4 text-[14px] items-center'>
                  <Car className='text-blue-500' />
                  <span className=''>Giảm ₫300.000 phí vận chuyển đơn tối thiểu <sup>₫</sup>0; Giảm <sup>₫</sup>500.000 phí vận chuyển đơn tối thiểu <sup>₫</sup>500.000
                    Tìm hiểu thêm</span>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="checkPrice w-full border sticky bottom-0 bg-white mt-4">
        <div className='w-full h-[44px] py-3 flex justify-end border-dashed border-b-[1px]'>
          <div className='w-[515px] h-5 flex justify-around mr-4'>
            <div className='w-[300px] flex gap-4 text-[16px]'>
              <TicketPercent className='text-blue-500' />
              <span>VNShop Voucher</span>
            </div>
            <span className='text-blue-500'>Chọn thêm mã Voucher</span>
          </div>
        </div>
        <div className='w-full h-[50px] py-4 flex justify-end border-dashed border-b-[1px] '>
          <p className='mr-4'>Chưa xác định được mình có tích xu không ?</p>
        </div>
        <div className='w-full h-[64px] flex items-center justify-between py-3 px-5'>
          <div className='h-full flex items-center gap-4 text-[16px]'>
            <Checkbox
              checked={selectedItems.length === cartItemsLength}
              onCheckedChange={(c) => {
                let checked = c as boolean;
                dispatch(selectAllProducts(checked));
              }}
              className='size-4 ml-4 mr-2'
            />
            <span>Chọn Tất Cả ({cartItemsCount})
            </span>
            <span>Xóa</span>
            <span>Bỏ sản phẩm không hoạt động</span>
          </div>
          <div className='h-full flex gap-4 justify-center items-center text-[16px]'>
            <span>Tổng thanh toán ({selectedItems.length} Sản phẩm):</span>
            <span className='text-[#ff424e] text-[24px] font-bold'>{formattedPrice(totalPrice)}</span>
            <Button className='px-10 bg-blue-500 hover:bg-white hover:text-blue-500 border'>Mua Hàng</Button>
          </div>
        </div>
      </section>
      {loading && (<LoadingScreen />)}
    </div>
  )
}
