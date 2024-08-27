import GuestHeader from "@/app/(guest)/_components/guest-header";
import GuestFooter from "./_components/guest-footer";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-full">
      <GuestHeader />
      <div className="w-full py-5 h-auto flex items-center flex-col bg-white">
        <div className="w-content">
          {children}
        </div>
      </div>
      <GuestFooter />
    </div>
  )
}
