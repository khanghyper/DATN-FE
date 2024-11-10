import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  MapPinIcon,
  MessageCircleMore,
  Ticket,
} from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="w-full text-[#888888]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Thanh Toán</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="header  bg-white border rounded p-4 mt-5 text-[#000000]">
            <div className="title flex" style={{ color: "#00aaff" }}>
              <MapPinIcon color="#00aaff" />
              <h4 className="ml-2">Địa Chỉ Nhận Hàng</h4>
            </div>
            <div className="header-content flex mt-4">
              <div className="w-[25%]">
                <b>Nguyễn Hữu Tường (+84)9920938848</b>
              </div>
              <div className="w-[70%]">nghi xuân nghi lộc nghệ an</div>
              <div
                className="w-[80px] float-right"
                style={{ color: "#00aaff" }}
              >
                <b>Thay Đổi</b>
              </div>
            </div>
          </div>
          <div className="content bg-white border rounded p-4 mt-3">
            <section className="headerCart w-full h-[55px]  mt-5 flex items-center gap-4 text-[14px] bg-white text-[#000000]">
              <div className="w-[506px] h-[20px] ">
                <b>Sản Phẩm</b>
              </div>
              <div className="w-[173px] h-[20px]">Đơn giá</div>
              <div className="w-[168px] h-[20px]">Số lượng</div>
              <div className="w-[114px] h-[20px]">Thành tiền</div>
            </section>
            <div className="title w-full text-sm flex items-center gap-4">
              <div>Gaming Store HCM</div>
              <MessageCircleMore size={16} />
            </div>
            <section>
              <div className="products w-full mt-5 flex items-center gap-4 text-[14px] bg-white">
                <div className="w-[506px] flex">
                  <div className="w-[120px] h-[90px] ">
                    <img
                      className="border size-full object-cover"
                      src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0onee5bmb8cc"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <b>Pin Panasonic</b>
                    <h4>CR2032/2025/2016/1632/1616/16...</h4>
                    <div className="w-[200px] flex justify-center border border-red-300 p-1 rounded-[10px]  text-red-600">
                      Đổi hàng miễn phí 15 ngày
                    </div>
                  </div>
                </div>
                <div className="w-[173px]  text-center ">15.000 vnđ</div>
                <div className="w-[168px]  text-center ">2</div>
                <div className="w-[138px]  text-center ">35.000 vnđ</div>
              </div>
            </section>
          </div>
          <div className="ship  bg-white border rounded p-4 mt-[-1px] text-[#000000]">
            <div className="flex">
              <div className="note w-[40%]">
                <Input
                  className="ww-[90%] h-8 text-[14px]"
                  placeholder="Bạn nhập lưu ý cho người bán ở đây"
                />
              </div>
              <div className="ship-information  w-[60%]">
                <ul className="flex justify-around">
                  <li>Phương thức vận chuyển: Nhanh</li>
                  <li>Thay Đổi</li>
                  <li>16.500 vnđ</li>
                </ul>
                <div className="flex justify-center">
                  <h4 className="w-[70%] mt-4 text-[#868585]">
                    Đảm bảo nhận hàng vào 29 Tháng 10 Nhận Voucher trị giá
                    ₫15.000 nếu đơn hàng được giao đến bạn sau ngày 29 Tháng 10
                    2024.
                  </h4>
                </div>
                <div className="border border-red-300 flex justify-around p-3 mt-3">
                  <h4 className="">
                    Hoặc chọn phương thức{" "}
                    <span className="text-[#399fff]">Hỏa Tốc</span> để Đảm bảo
                    nhận hàng vào ngày mai
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-end">
              Tổng số tiền (1 sản phẩm):{" "}
              <span className="ml-2 text-[#2eabff]">30.000 vnđ</span>
            </div>
          </div>
          <div className="voucher  bg-white border rounded p-4 mt-3 text-[#000000]">
            <div className="title flex justify-between">
              <div className="flex">
                <Ticket color="#00aaff" />
                <h4 className="ml-2">VNShop Voucher</h4>
              </div>
              <div className="text-[#00aaff]">Chọn Voucher</div>
            </div>
          </div>
          <div className="payment-type  bg-white border rounded p-4 mt-3 text-[#000000]">
            <div className="title flex justify-between">
              <div className="flex">
                <CreditCard color="#00aaff" />
                <h4 className="ml-2">Phương thức thanh toán</h4>
              </div>
              <div>
                Thanh toán khi nhận hàng
                <b className="text-[#00aaff] ml-3">Thay đổi</b>
              </div>
            </div>
            <div className="content flex justify-end mt-4">
              <ul className="w-[230px]">
                <li>Tổng tiền hàng</li>
                <li>Tổng tiền phí vận chuyển</li>
                <li>Tổng thanh toán</li>
              </ul>
              <ul className="w-[130px]">
                <li>: 1.000.000 vnđ</li>
                <li>: 21.000.000 vnđ</li>
                <li className="text-[#00aaff]">: 31.000.000 vnđ</li>
              </ul>
            </div>
            <div className="footer mt-4 h-[50px] flex justify-between border-t items-end">
              <div className="text">
                <h5>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <span>Điều khoản Shopee</span></h5>
              </div>
              <div className="btn">
                <Button className="bg-[#00aaff] text-white"><b>Đặt hàng</b></Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;