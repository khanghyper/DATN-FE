import { cookies } from "next/headers";
import { serialize } from 'cookie';
import Crypto from 'crypto-js'

export async function POST(request: Request) {
  const cookieStore = cookies();
  try {
    const res = await request.json();
    const accessToken = res.accessToken;
    const getMe = await fetch('https://vnshop.top/api/user/me', {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })
    if (getMe.ok) {
      const resMe = await getMe.json();

      cookieStore.set('accessToken', accessToken, { path: '/', httpOnly: true });
      cookieStore.set('info', JSON.stringify(resMe.data), { path: '/', httpOnly: true });

      return Response.json({}, {
        status: 200,
      });
    } else {
      const error = await getMe.json();
      throw error.message ? 'Đăng nhập thất bại!' : 'Internal Server'
    }
  } catch (error) {
    return Response.json({ message: error }, {
      status: 400,
    });
  }
} 