import GuestHeader from "@/app/(guest)/_components/guest-header";
import GuestFooter from "./_components/guest-footer";
import GuestFooter2 from "./_components/guest-footer2";

export default function GuestLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className="bg-white w-full">
      <GuestHeader />
      <div className="w-full py-5 h-auto flex items-center flex-col bg-gray-100">
        <div className="w-content">
          {children}
        </div>
      </div>
      {/* <GuestFooter /> */}
      <GuestFooter2 />
    </div>
  )
}
