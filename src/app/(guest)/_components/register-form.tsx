'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { email, fullname, password, role_id: 5 };
    try {
      const registerUser = await fetch('https://vnshop.top/api/users/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      });
      if (registerUser.ok) {
        const res = await registerUser.json();
        console.log(res);
      } else {
        const res = await registerUser.json();
        console.log(res);
      }

    } catch (error) {

    }
  }

  return (
    <div className="w-1/2 bg-gray-100 p-12 flex flex-col justify-center rounded">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Đăng ký tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Họ tên</label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập họ tên"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Nhập lại mật khẩu</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Xác thực mật khẩu"
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Đăng ký
          </button>
          {errorMessage && (
            <div className="text-red-500 mt-4">{errorMessage}</div>
          )}
        </form>
        <div className="mt-4 flex justify-end items-center">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Quên mật khẩu?
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
  )
}
