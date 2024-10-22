'use client'
import { Button } from '@/components/ui/button'
import { addAccessToken, addInfo } from '@/redux/slices/profile.slice';
import { useAppInfoDispatch } from '@/redux/stores/profile.store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ButtonLogout() {
  const router = useRouter();
  const dispatch = useAppInfoDispatch();

  const handleLogout = async () => {
    try {
      const a = await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        body: JSON.stringify({})
      });
      const res = await a.json();
      dispatch(addAccessToken(''));
      dispatch(addInfo(null));
      router.push('/');
    } catch (error) {

    }
  }

  return (
    <li onClick={handleLogout} className='p-3 text-[14px] hover:text-blue-700 hover:bg-gray-50 cursor-pointer'>
      Đăng xuất
    </li>
  )
}
