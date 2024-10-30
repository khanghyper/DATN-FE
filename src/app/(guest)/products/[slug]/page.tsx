import AttributesTable from "@/app/(guest)/_components/attributes-table";
import Comment from "@/app/(guest)/_components/comment";
import { GuestBreadCrumb } from "@/app/(guest)/_components/guest-breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, PhoneCall, ShoppingBasket, SquareCheckBig, Star, Store } from "lucide-react";
import ProductDetailSection from "../../_components/product-detail-section";
import { notFound } from "next/navigation";
import envConfig from "@/config";



export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  let slug:string = params.slug;
  const apiProduct = await fetch(`https://vnshop.top/api/products/slug/${slug}`).then(res=>res.json());      

  try {
    if (slug && apiProduct) {
      return (
        <div className="w-full">
          <GuestBreadCrumb />
          <ProductDetailSection product={apiProduct.data} />
        </div>
      )
    }else{
      throw new Error('Lỗi nè')
    }
  } catch (error) {
    return notFound()
  }

}
