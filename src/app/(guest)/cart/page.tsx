import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Car, MessageCircleMore, TicketPercent, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CartPageGuest = () => {
  return (
    <div className='w-full'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components" className='text-black'>Giỏ hàng</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='w-full'>
        <section className='headerCart w-full h-[55px] border rounded mt-5 flex items-center gap-4 text-[14px] bg-white'>
          <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
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
        <section className='productCartSection w-full border rounded bg-white mt-5'>
          <div className='w-full h-[60px] flex items-center gap-2 border-b-[0.5px]'>
            <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
            <div className='w-10 h-[20px] '>
              <p className='border w-full text-[14px] rounded text-white bg-blue-500 text-center'>Mall</p>
            </div>
            <div className='h-[20px] text-[14px] text-center'>
              TUÂN BÁN HÀNG OFFICAL
            </div>
            <MessageCircleMore className='text-blue-500' />
          </div>
          <div className='w-full '>
            <div className='w-[1160px] rounded m-5 border'>
              <div className='w-[1158px] h-[47px] bg-blue-200 flex gap-4 items-center px-3 py-[9px]'>
                <span className='p-1 border rounded border-blue-500 text-blue-500 text-[10px] '>Mua kèm</span>
                <span className='text-[14px]'>Bạn đã chọn 2 quà tặng</span>
                <span className='text-[14px] text-blue-500 border-blue-500 border-b-[1px]'>Thay đổi </span>
              </div>
              <div className='w-[1158px] h-[141px] flex items-center'>
                <div className='w-[58px] '>
                  <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
                </div>
                <div className='w-[317px] h-[109px] flex-col '>
                  <div className='w-full h-[83px] flex items-center gap-2'>
                    <div className='w-[80px] h-[80px]'>
                      <img src="./images/bacRank.png" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='w-[calc(100%-80px-8px)] h-[83px] flex flex-col justify-center'>
                      <p className='text-[14px]'>Quần tây đen nam hàn quốc Jbagy dáng co giãn ...</p>
                      <span className='w-[74px] px-[4px] py-[2px] border rounded border-blue-500 text-blue-500 text-[10px] '>Đổi ý 15 ngày</span>
                    </div>
                  </div>
                  <div className='w-full h-[20px] flex items-center'>
                    <span className='text-[12px] text-blue-500'>Fash Sale kết thúc lúc 23:59:00</span>
                  </div>
                </div>
                <div className='w-[188px] h-[80px] flex flex-col items-center justify-center text-[14px] text-[#0000008a]'>
                  <p >Phân Loại Hàng : </p>
                  <span>Đen,33</span>
                </div>
                <div className='w-[173px] h-[80px] flex items-center justify-center text-[14px]'>
                  <s className='text-[#0000008a]'><sup>đ</sup>280.000</s>
                  <span><sup>đ</sup>189.000</span>
                </div>
                <div className='w-[168px] h-[80px] flex justify-center items-center'>
                  <span className='px-1 border w-[30px] text-center'>-</span>
                  <span className='px-1 border w-[50px] text-center text-[16px]'>2</span>
                  <span className='px-1 border w-[30px] text-center'>+</span>
                </div>
                <div className='w-[113px] h-[80px] flex items-center justify-center text-[14px] text-blue-500'>
                  <span><sup>đ</sup>378.000</span>
                </div>
                <div className='w-[139px] h-[80px] flex justify-center items-center'>
                  <Trash color='blue' className='cursor-pointer' />
                </div>
              </div>
              <div className='w-[1158px] h-[141px] flex items-center'>
                <div className='w-[58px] '>
                  <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
                </div>
                <div className='w-[317px] h-[109px] flex-col '>
                  <div className='w-full h-[83px] flex items-center gap-2'>
                    <div className='w-[80px] h-[80px]'>
                      <img src="./images/bacRank.png" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='w-[calc(100%-80px-8px)] h-[83px] flex flex-col justify-center'>
                      <p className='text-[14px]'>Quần tây đen nam hàn quốc Jbagy dáng co giãn ...</p>
                      <span className='w-[74px] px-[4px] py-[2px] border rounded border-blue-500 text-blue-500 text-[10px] '>Đổi ý 15 ngày</span>
                    </div>
                  </div>
                  <div className='w-full h-[20px] flex items-center'>
                    <span className='text-[12px] text-blue-500'>Fash Sale kết thúc lúc 23:59:00</span>
                  </div>
                </div>
                <div className='w-[188px] h-[80px] flex flex-col items-center justify-center text-[14px] text-[#0000008a]'>
                  <p >Phân Loại Hàng : </p>
                  <span>Đen,33</span>
                </div>
                <div className='w-[173px] h-[80px] flex items-center justify-center text-[14px]'>
                  <s className='text-[#0000008a]'><sup>đ</sup>280.000</s>
                  <span><sup>đ</sup>189.000</span>
                </div>
                <div className='w-[168px] h-[80px] flex justify-center items-center'>
                  <span className='px-1 border w-[30px] text-center'>-</span>
                  <span className='px-1 border w-[50px] text-center text-[16px]'>2</span>
                  <span className='px-1 border w-[30px] text-center'>+</span>
                </div>
                <div className='w-[113px] h-[80px] flex items-center justify-center text-[14px] text-blue-500'>
                  <span><sup>đ</sup>378.000</span>
                </div>
                <div className='w-[139px] h-[80px] flex justify-center items-center'>
                  <Trash color='blue' className='cursor-pointer' />
                </div>
              </div>
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
        <section className='productCartSection w-full border rounded bg-white mt-5'>
          <div className='w-full h-[60px] flex items-center gap-2 border-b-[0.5px]'>
            <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
            <div className='w-10 h-[20px] '>
              <p className='border w-full text-[14px] rounded text-white bg-blue-500 text-center'>Mall</p>
            </div>
            <div className='h-[20px] text-[14px] text-center'>
              TUÂN BÁN HÀNG OFFICAL
            </div>
            <MessageCircleMore className='text-blue-500' />
          </div>
          <div className='w-full '>
            <div className='w-[1160px] rounded m-5 border'>
              <div className='w-[1158px] h-[47px] bg-blue-200 flex gap-4 items-center px-3 py-[9px]'>
                <span className='p-1 border rounded border-blue-500 text-blue-500 text-[10px] '>Mua kèm</span>
                <span className='text-[14px]'>Bạn đã chọn 2 quà tặng</span>
                <span className='text-[14px] text-blue-500 border-blue-500 border-b-[1px]'>Thay đổi </span>
              </div>
              <div className='w-[1158px] h-[141px] flex items-center'>
                <div className='w-[58px] '>
                  <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
                </div>
                <div className='w-[317px] h-[109px] flex-col '>
                  <div className='w-full h-[83px] flex items-center gap-2'>
                    <div className='w-[80px] h-[80px]'>
                      <img src="./images/bacRank.png" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='w-[calc(100%-80px-8px)] h-[83px] flex flex-col justify-center'>
                      <p className='text-[14px]'>Quần tây đen nam hàn quốc Jbagy dáng co giãn ...</p>
                      <span className='w-[74px] px-[4px] py-[2px] border rounded border-blue-500 text-blue-500 text-[10px] '>Đổi ý 15 ngày</span>
                    </div>
                  </div>
                  <div className='w-full h-[20px] flex items-center'>
                    <span className='text-[12px] text-blue-500'>Fash Sale kết thúc lúc 23:59:00</span>
                  </div>
                </div>
                <div className='w-[188px] h-[80px] flex flex-col justify-center text-[14px] text-[#0000008a]'>
                  <p >Phân Loại Hàng : </p>
                  <span>Đen,33</span>
                </div>
                <div className='w-[173px] h-[80px] flex items-center justify-center text-[14px]'>
                  <s className='text-[#0000008a]'><sup>đ</sup>280.000</s>
                  <span><sup>đ</sup>189.000</span>
                </div>
                <div className='w-[168px] h-[80px] flex justify-center items-center'>
                  <span className='px-1 border w-[30px] text-center'>-</span>
                  <span className='px-1 border w-[50px] text-center text-[16px]'>2</span>
                  <span className='px-1 border w-[30px] text-center'>+</span>
                </div>
                <div className='w-[113px] h-[80px] flex items-center justify-center text-[14px] text-blue-500'>
                  <span><sup>đ</sup>378.000</span>
                </div>
                <div className='w-[139px] h-[80px] flex justify-center items-center'>
                  <Trash color='blue' className='cursor-pointer' />
                </div>
              </div>
              <div className='w-[1158px] h-[141px] flex items-center'>
                <div className='w-[58px] '>
                  <span className='w-[20px] h-[20px] border ml-4 flex items-center justify-center'></span>
                </div>
                <div className='w-[317px] h-[109px] flex-col '>
                  <div className='w-full h-[83px] flex items-center gap-2'>
                    <div className='w-[80px] h-[80px]'>
                      <img src="./images/bacRank.png" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='w-[calc(100%-80px-8px)] h-[83px] flex flex-col justify-center'>
                      <p className='text-[14px]'>Quần tây đen nam hàn quốc Jbagy dáng co giãn ...</p>
                      <span className='w-[74px] px-[4px] py-[2px] border rounded border-blue-500 text-blue-500 text-[10px] '>Đổi ý 15 ngày</span>
                    </div>
                  </div>
                  <div className='w-full h-[20px] flex items-center'>
                    <span className='text-[12px] text-blue-500'>Fash Sale kết thúc lúc 23:59:00</span>
                  </div>
                </div>
                <div className='w-[188px] h-[80px] flex flex-col justify-center text-[14px] text-[#0000008a]'>
                  <p >Phân Loại Hàng : </p>
                  <span>Đen,33</span>
                </div>
                <div className='w-[173px] h-[80px] flex items-center justify-center text-[14px]'>
                  <s className='text-[#0000008a]'><sup>đ</sup>280.000</s>
                  <span><sup>đ</sup>189.000</span>
                </div>
                <div className='w-[168px] h-[80px] flex justify-center items-center'>
                  <span className='px-1 border w-[30px] text-center'>-</span>
                  <span className='px-1 border w-[50px] text-center text-[16px]'>2</span>
                  <span className='px-1 border w-[30px] text-center'>+</span>
                </div>
                <div className='w-[113px] h-[80px] flex items-center justify-center text-[14px] text-blue-500'>
                  <span><sup>đ</sup>378.000</span>
                </div>
                <div className='w-[139px] h-[80px] flex justify-center items-center'>
                  <Trash color='blue' className='cursor-pointer' />
                </div>
              </div>
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
          <div className='w-full h-[64px] flex items-center py-3 px-5'>
            <div className='w-[650px] h-full flex items-center gap-4 text-[16px]'>
              <span className='w-[20px] h-[20px] border flex items-center justify-center'></span>
              <span>Chọn Tất Cả (4)</span>
              <span>Xóa</span>
              <span>Bỏ sản phẩm không hoạt động</span>
            </div>
            <div className='w-[calc(100%-650px)] h-full flex gap-4 justify-center items-center text-[16px]'>
              <span>Tổng thanh toán (0 Sản phẩm):</span>
              <span className='text-blue-500 text-[24px] font-bold'><sup className='underline'>đ</sup>0</span>
              <Button className='px-10 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border'>Mua Hàng</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPageGuest;