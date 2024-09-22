import { LogOut, Settings, Store } from "lucide-react"

const accountSlections = [
  {
    icon: <Store strokeWidth={1.2} size={20} />,
    title: 'Hồ sơ Shop'
  }, {
    icon: <Settings strokeWidth={1.2} size={20} />,
    title: 'Thiết lập Shop'
  }
]

export default function AccountInfo() {
  return (
    <div className="w-[250px]">
      <div className="w-full p-4 py-2">
        <div className="w-full flex flex-col items-center ">
          <img className='size-[48px] object-cover rounded-full border' src="https://phunuvietnam.mediacdn.vn/media/news/33abffcedac43a654ac7f501856bf700/anh-profile-tiet-lo-g-ve-ban-1.jpg" alt="" />
          <span className="mt-2 text-[14px] font-semibold">TuanGay69</span>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="border-b border-t py-2">
          {accountSlections.map(item => (
            <div key={item.title} className="flex gap-3 px-4 py-1 -mx-4 items-center cursor-pointer hover:bg-gray-100">
              {item.icon}
              <span className="text-[14px]">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-2">
        <div className="flex gap-3 p-4 py-1 items-center cursor-pointer hover:bg-gray-100">
          <LogOut strokeWidth={1.2} size={20} />
          <span className="text-[14px]">Đăng xuất</span>
        </div>
      </div>
    </div>
  )
}
