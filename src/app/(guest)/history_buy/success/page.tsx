'use client'
import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bell, Calendar, MailPlus, Pencil, Store, TicketIcon, Truck, UserRound } from 'lucide-react';
import { clientAccessToken } from '@/lib/http';
import { useAppDispatch } from '@/redux/store';
import { useAppInfoDispatch, useAppInfoSelector } from '@/redux/stores/profile.store';
import { formattedPrice } from '@/lib/utils';

const SuccesOrderChild = ({ status }: { status: number }) => {
  const statusOrder = status;
  const tokenUser = clientAccessToken.value
  const [isCheckedTitle, setIsCheckedTitle] = useState<number>(1);
  const [orders, setOrders] = useState<any>([]);
  const [orderDetails, setOrderDetails] = useState<any>([]);
  const [shops, setShops] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  const titles: { id: number, title: string }[] = [
    { id: 1, title: "Tất cả" },
    { id: 2, title: "Chờ thanh toán" },
    { id: 3, title: "Chờ giao hàng" },
    { id: 4, title: "Hoàn thành" },
    { id: 5, title: "Trả hàng/Hoàn tiền" }
  ]

  // useEffect(() => {
  //   const getApiOrder = async () => {
  //     try {
  //       const apiOrder = await fetch(`http://vnshop.top/api/order/user`, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${tokenUser}`,
  //           'Content-Type': 'application/json',
  //         }
  //       });
  //       const payLoad = await apiOrder.json();
  //       console.log(payLoad);

  //       if (apiOrder.ok) {
  //         setOrders([...payLoad.data])
  //       } else {
  //         throw new Error('Lỗi lấy Api kìa');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getApiOrder();
  // }, [orders])


  // useEffect(() => {
  //   const getShop = async () => {
  //     try {
  //       const apiShop = await fetch(`http://vnshop.top/api/shops`);
  //       const payLoad = await apiShop.json();
  //       if (apiShop.ok) {
  //         setShops([...payLoad.data.shops]);
  //       } else {
  //         throw new Error('Lỗi api kìa')
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getShop();
  // }, [orders])


  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const apiProducts = await fetch('https://vnshop.top/api/products');
  //       const payLoad = await apiProducts.json();
  //       if (apiProducts.ok) {
  //         setProducts([...payLoad.data.data])
  //       } else {
  //         throw new Error('Lấy api lỗi rồi kìa');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getProduct();
  // }, [])

  useEffect(() => {
    const controller = new AbortController(); // Khởi tạo AbortController
    const signal = controller.signal;
    const getData = async () => {
      try {
        const [ordersRes, shopsRes] = await Promise.all([
          fetch('http://vnshop.top/api/order/user', {
            headers: {
              "Authorization": `Bearer ${clientAccessToken.value}`
            },
            signal
          }),
          fetch('http://vnshop.top/api/shops', {
            headers: {
              "Authorization": `Bearer ${clientAccessToken.value}`
            },
            signal
          })
        ])

        if (!ordersRes.ok || !shopsRes.ok) {
          throw 'Error nè';
        }
        const ordersPayload = await ordersRes.json();
        const shopsPayload = await shopsRes.json();
        // const data = shopsPayload.data.shops.map((s:any) => {
        //   let id = s.id;
        //   let orders = ordersPayload.data.filter((o:any) => id === +o.shop_id);
        //   return {...s, orders}
        // }).filter((s:any) => s.orders.length > 0);
        // setShops([...data])
        // console.log('check data: ====>', data);
        const data = ordersPayload.data.filter((prFil:any) => prFil.status == isCheckedTitle).map((o: any) => {
          let id = o.shop_id
          let shopData = shopsPayload.data.shops.find((s: any) => s.id === +id);
          return { ...o, shopData }
        }).filter((o: any) => o.shopData)
        console.log(data);
        setOrders([...data]);

      } catch (error) {
        console.log(error);
      }
    }
    getData();
    return () => {
      controller.abort();
    };
  }, [isCheckedTitle])

  const handleStyle = (id: number) => {
    setIsCheckedTitle(id);
  }
  return (
    <div>
      <div className='nav-menu w-full h-[52px] flex items-center bg-white border rounded shadow'>
        {
          titles.map((item: any) => (
            <span key={item.id} onClick={() => handleStyle(item.id)} className={`h-full flex flex-1 items-center justify-center text-sm font-semibold cursor-pointer ${isCheckedTitle == item.id ? 'text-blue-500 border-b-blue-600 border-b-2' : 'text-black border-b-[1px]'}`}>{item.title}</span>
          ))
        }
      </div>
      {
        orders.filter((d:any) => d.status == 1).map((o: any) => {
          return (
            <div className='listProduct w-full mt-2 border rounded shadow flex flex-col gap-3 py-4 bg-white' key={o.id}>
              <div className='nav-list-product w-full h-[35px] flex justify-between mt-2 px-3'>
                <div className='flex gap-3 items-end '>
                  <p className='font-semibold text-[16px]'>{o.shopData.shop_name ? o.shopData.shop_name : 'Shop đã biến mất'}</p>
                  <div className='w-[76px] h-[31px] flex items-center justify-center gap-1 border bg-blue-500 rounded-[5px] text-white'>
                    <MailPlus size={20} />
                    <p>Chat</p>
                  </div>
                  <div className='w-[117px] h-[31px] flex items-center justify-center gap-1 border-[2px] rounded-[5px] text-gray-500 font-bold'>
                    <Store size={20} />
                    <p>Xem Shop</p>
                  </div>
                </div>
                <div className='flex gap-2 items-end font-semibold text-[#0A68FF]'>
                  <Truck />
                  {
                    o.status == 2 && (
                      <p>Chờ duyệt đơn hàng</p>
                    )
                  }
                  {
                    o.status == 3 && (
                      <p>Đơn hàng đang giao</p>
                    )
                  }
                  {
                    o.status == 4 && (
                      <p>Đơn hàng giao thành công</p>
                    )
                  }
                  {
                    o.status == 5 && (
                      <p>Đơn hàng đã hoàn trả</p>
                    )
                  }
                </div>
              </div>
              <div className='w-full flex flex-col justify-between px-3 '>
                {
                  o.order_details.map((d: any) => {
                    return (
                      <div className='h-[165px] w-full px-2 flex items-center gap-3 pt-2'>
                        <div className='w-[80px] h-[80px] '>
                          <img src={`${d.product.image ? d.product.image : ''}`} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full flex gap-6 justify-between px-4'>
                          <div className='flex flex-col justify-center'>
                            <span >{d.product.name ? d.product.name : 'Sản phẩm không hoạt động'}</span>
                            <span className='text-[14px] text-gray-500'>Phân loại: { }</span>
                            <span>x{d.quantity}</span>
                            <span className='px-2 py-2 border border-[#4A4AFF] w-[190px] text-[14px] text-[#4A4AFF] '>Trả hàng miển phí 15 ngày</span>
                          </div>
                          <div className='flex items-center gap-1 text-red-500 font-semibold'>
                            <span>
                              {formattedPrice(+d.product.price)}
                            </span>
                            {/* <span className='text-[12px]'>-20%</span> */}
                          </div>
                        </div>
                      </div>
                      
                    )
                  })
                }
                <div className='w-full h-[1px] bg-gray-300'></div>
              </div>
              <div className='bottom-list-product w-full h-[47px] flex justify-around'>
                <div className='w-[257px] flex flex-col gap-1 text-[14px] justify-center '>
                  <p>Đánh giá trước ngày 02 - 08- 2024</p>
                  <p className='text-[#7777FF]'>Đánh giá và nhận ngay voucher</p>
                </div>
                <div className='w-[334px] flex gap-5 items-center justify-center '>
                  <span className='px-4 py-2 border cursor-pointer bg-[#0A68FF] text-white  hover:bg-[#455B80] '>Đánh giá</span>
                  <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Liên hệ</span>
                  <span className='px-4 py-2 border cursor-pointer text-[#4E4E4E] hover:bg-[#0A68FF] hover:text-white'>Mua lại</span>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default SuccesOrderChild;