import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SellerRegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Introduction */}
      <div className="w-1/2 p-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bán hàng chuyên nghiệp</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người Bán
        </p>
        <Image
          src="/images/seller-illustration.png"
          alt="Seller Illustration"
          width={300}
          height={200}
          className="mb-8"
        />
      </div>

      {/* Right side - Login form */}
      <div className="w-1/2 bg-gray-100 p-12 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Đăng nhập</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email/Số điện thoại/Tên đăng nhập</label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email hoặc số điện thoại"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Mật khẩu</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              ĐĂNG NHẬP
            </button>
          </form>
          <div className="mt-4 flex justify-between items-center">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Quên mật khẩu?
            </Link>
            <Link href="/login-sms" className="text-sm text-blue-600 hover:underline">
              Đăng nhập với SMS
            </Link>
          </div>
          <div className="mt-6">
            <button className="w-full mb-2 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center">
              <Image src="/images/facebook-icon.png" alt="Facebook" width={20} height={20} className="mr-2" />
              Facebook
            </button>
            <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center">
              <Image src="/images/google-icon.png" alt="Google" width={20} height={20} className="mr-2" />
              Google
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Bạn mới biết đến Shopee? <Link href="/seller-signup" className="text-blue-600 hover:underline">Đăng ký</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerRegisterPage;