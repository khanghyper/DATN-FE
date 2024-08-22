import GuestHeader from "@/app/(guest)/_components/guest-header";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-full">
      <GuestHeader />
      {children}
      footer guest
    </div>
  )
}
