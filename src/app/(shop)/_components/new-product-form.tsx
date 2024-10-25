'use client'

import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import NewProductVariantSection from "@/app/(shop)/_components/new-product-variant-section";
import { getListCategoryNested } from "@/redux/slices/shop-new-product.slice";
import NewProductFirstSection from "@/app/(shop)/_components/new-product-first-section";
import NewProductDetailSection from "@/app/(shop)/_components/new-product-detail-section";
import NewProductOtherInfoSection from "@/app/(shop)/_components/new-product-other-info-section";
import NewProductShippingSection from "@/app/(shop)/_components/new-product-shipping-section";
import NewProductFooterSection from "@/app/(shop)/_components/new-product-footer-section";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import NewProductVariantSectionTest from "@/app/(shop)/_components/new-product-variant-section-test";


const createProductFormSchema = z.object({
  images: z.array(z.string()).refine(val => val.length > 0, { message: "Vui lòng tải ảnh sản phẩm" }),
  name: z.string().min(5).max(120),
  category: z.number().min(-1).refine(val => val > 0, { message: "Vui long chon danh muc" }),
  description: z.string().min(1),
  variant: z.any(),
  price: z.number().nullable(),
  stock: z.number().nullable(),
  weight: z.number().min(1),
  width: z.number().min(1),
  length: z.number().min(1),
  height: z.number().min(1),
  sku: z.string().min(1),
  shop_id: z.number().min(1)
});

export type CreateProductFormData = z.infer<typeof createProductFormSchema>;

export default function NewProductForm() {
  const dispatch = useAppDispatch();
  const { register, getValues, handleSubmit, setValue, setError, formState: { errors }, watch } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      images: [],
      name: '',
      category: 0,
      description: '',
      variant: z.any(),
      price: null,
      stock: null,
      sku: '',
    },
    mode: 'all',  // Thực hiện validate khi mất focus
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: CreateProductFormData) => {
    console.log('Job form data:', data);
  };


  useEffect(() => {
    const promise = dispatch(getListCategoryNested());
    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <NewProductFirstSection
          register={register}
          errors={errors}
          getValues={getValues}
          watch={watch}
          setValue={setValue}
          setError={setError}
        />
        <NewProductDetailSection />
        <NewProductVariantSectionTest />
        <NewProductShippingSection />
        <NewProductOtherInfoSection />
        <NewProductFooterSection />
      </div>
    </form>
  )
}
