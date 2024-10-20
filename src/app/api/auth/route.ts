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
    const resMe = await getMe.json();

    cookieStore.set('accessToken', accessToken, { path: '/', httpOnly: true });
    cookieStore.set('info', JSON.stringify(resMe.data), { path: '/', httpOnly: true });

    return Response.json(resMe.data, {
      status: 200,
    });


  } catch (error) {
    return Response.json({}, {
      status: 401,
    });
  }
} 