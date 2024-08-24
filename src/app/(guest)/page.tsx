import BannerHomeGuest from "./_components/banner";
import CategoriesGuest from "./_components/categories";



export default function HomePage() {

  return (
    <div className="w-full py-4 h-auto flex justify-center bg-white">
      <div className="w-content">
        <BannerHomeGuest/>
        <CategoriesGuest/>
      </div>

    </div>
  )
}
