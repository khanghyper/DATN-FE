import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import CardProduct from '../../_components/card-product';
import VoucherComponent from '../../_components/voucher';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ShopGuestSection from '../../_components/shop-guest-section';


const ShopPageGuestDetail = ({ params }: { params: { id: number } }) => {
  return (
    <div className='w-content h-auto '>
      <Breadcrumb className="pb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-semibold'>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ShopGuestSection id={params.id}/>
    </div>
  );
};

export default ShopPageGuestDetail;