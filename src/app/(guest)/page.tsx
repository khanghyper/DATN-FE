import GoiYSection from "@/app/(guest)/_components/goi-y-section";
import BannerHomeGuest from "./_components/banner";
import CategoriesGuest from "./_components/categories";
import Categories2 from "@/app/(guest)/_components/categories2";
import HangXinSection from "@/app/(guest)/_components/hang-xin-section";
import Link from "next/link";



export default function HomePage() {
  return (
    <>
      <div className="w-content">
        <BannerHomeGuest />
        <CategoriesGuest />
        <Link href='/shops/38'>Test</Link>
      </div>
      <div className="w-content">
        <HangXinSection />
        <Categories2 />
        <GoiYSection />
      </div>
    </>
  )
}
