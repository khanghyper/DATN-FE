'use client'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

export default function NewProductFooterSection() {
  const state = useAppSelector(state => state.shopListProduct);
  const dispatch = useAppDispatch();
  const variantItems = useAppSelector(state => state.shopListProduct.varriant.variantItems);
  const variantProducts = useAppSelector(state => state.shopListProduct.varriant.variantProducts)

  const variant = { variantItems: variantItems.map(it => ({ name: it.name, values: it.values.map(i => i.value) })), variantProducts: variantProducts.map(it => ({ ...it, variants: undefined, attributes: it.variants })) };


  // const handleSubmit = async () => {
  //   const data = {
  //     ...state,
  //     description: "fdsafdasf",
  //     category_id: state.category.selectedCategories[state.category.selectedCategories.length - 1].id,
  //     currentRequestId: undefined,
  //     category: undefined,
  //     variant: null,
  //     shop_id: 20,
  //     thumbnail: state.images[0]
  //   };
  //   const dataWithVariant = {
  //     ...data,
  //     price: null,
  //     stock: null,
  //     variant,
  //     varriant: undefined
  //   }

  //   try {
  //     const createProduct = await fetch('https://vnshop.top/api/products', {
  //       method: "POST",
  //       body: JSON.stringify(dataWithVariant),
  //       headers: {
  //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Zuc2hvcC50b3AvYXBpL3VzZXJzL2xvZ2luIiwiaWF0IjoxNzI5MDU3MzM1LCJleHAiOjE3MjkxNDM3MzUsIm5iZiI6MTcyOTA1NzMzNSwianRpIjoielBQTVM0NzBpejNLM0ZDZyIsInN1YiI6IjQzIiwicHJ2IjoiYzc3ZWFiYzZkMjlkYmNlMGI1NWU5OGJkZWMzOTFiNTQ5YTVlZjFmMCJ9.xE0SpborxcqBFyE1nXi3LPgArejvVsr-9DqswhWoRT4",
  //         "Content-Type": "application/json"
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }


  return (
    <div className={`w-full px-6 py-4 mb-10 sticky bottom-0 right-[16px] bg-white shadow rounded border`}>
      <div className="w-full flex justify-end">
        <div className="flex gap-6">
          <Button variant={'outline'}>Hủy</Button>
          <Button variant={'outline'}>Lưu & Ẩn</Button>
          <Button type='submit' variant={'ghost'} className="bg-[#286dcf] text-white hover:opacity-80 hover:bg-[#286dcf] hover:text-white">Lưu & Hiển thị</Button>
        </div>
      </div>
    </div>
  )
}
