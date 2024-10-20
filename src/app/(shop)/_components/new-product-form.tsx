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


const jobSchema = z.object({
  name:
    z.string().min(5).max(120)
});

type JobFormData = z.infer<typeof jobSchema>;

export default function NewProductForm() {
  const dispatch = useAppDispatch();
  const { register, getValues, handleSubmit, setValue, formState: { errors }, watch } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      name: ''
    },
    mode: 'onChange',  // Thực hiện validate khi mất focus
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: JobFormData) => {
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
        <NewProductFirstSection register={register} errors={errors} />
        <NewProductDetailSection />
        <NewProductVariantSection />
        <NewProductShippingSection />
        <NewProductOtherInfoSection />
        <NewProductFooterSection />
      </div>
    </form>
  )
}
