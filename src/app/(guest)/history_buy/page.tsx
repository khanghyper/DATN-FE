import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Bell, Calendar, MailPlus, Pencil, Store, TicketIcon, Truck, UserRound } from 'lucide-react';
import HistoryBuySection from '../_components/history-buy-section';
import { cookies } from 'next/headers';
import HistorySection from '../_components/history-buy-section';
import SuccesOrderChild from './success/page';

const HistoryBuyPage = async () => {
  const cookieToken = await cookies();
  const tokenUser = cookieToken.get('accessToken');
  // console.log(tokenUser?.value);
  return (
    <div className='w-[920px] h-auto'>
      <div className='right-body w-[920px]D h-auto'>
        <SuccesOrderChild status={1} />
      </div>
    </div >
  );
};

export default HistoryBuyPage;