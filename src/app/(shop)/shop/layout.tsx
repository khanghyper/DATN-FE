import ShopHeader from "@/app/(shop)/_components/shop-header";
import ShopSidebar from "@/app/(shop)/_components/shop-sidebar";


export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <ShopHeader />
      <main className="w-full bg-[#F4F4F4] py-2.5">
        <div className="w-full flex">
          <ShopSidebar />
          <div className=" w-[calc(100vw-292px)] pl-2.5 pr-4">
            <div className="w-full h-auto bg-white rounded">
              {children}
            </div>
          </div>
        </div>
      </main>
      footer Shop
    </div>
  )
}