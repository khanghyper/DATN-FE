import GuestHeader from "@/app/(guest)/_components/guest-header";
import GuestFooter from "./_components/guest-footer";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-full">
      <GuestHeader />
      {children}
      <GuestFooter/>
    </div>
  )
}
