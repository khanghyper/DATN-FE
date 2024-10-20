'use client'

import withAuth from '@/app/(guest)/login/test';
import AbxTest from '@/app/(guest)/login/test';
import { clientAccessToken } from '@/lib/http';
import { addAccessToken, addInfo } from '@/redux/slices/profile.slice';
import { useAppDispatch, useAppSelector } from '@/redux/stores/profile.store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
export default function LoginForm() {
  const [email, setEmail] = useState<string>('ngodinhtungthi@gmail.com');
  const [password, setPassword] = useState<string>('1234');
  const router = useRouter();
  const dispatch = useAppDispatch();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = { email, password }
    try {
      const login = await fetch('https://vnshop.top/api/users/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        cache: 'no-cache'
      });
      if (login.ok) {
        const res: { message: string, status: boolean, data: { token: string } } = await login.json();
        const accessToken = res.data.token;
        const a = await fetch('http://localhost:3000/api/auth', {
          method: "POST",
          body: JSON.stringify({ accessToken })
        });
        const info = await a.json();
        // dispatch(addAccessToken(accessToken));
        // dispatch(addInfo(info));
        // router.push('/');
        window.location.href = '/'
      } else {
        const res = await login.json();
        console.log(res);
      }



    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-1/2 bg-gray-100 p-12 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email/Số điện thoại/Tên đăng nhập</label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Mật khẩu</label>
            <input
              // type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
  )
}
