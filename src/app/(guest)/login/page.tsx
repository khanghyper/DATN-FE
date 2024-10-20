import LoginForm from "@/app/(guest)/_components/login-form";
import TestWrap from "@/app/(guest)/login/test";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";



const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Introduction */}
      <div className="w-1/2 p-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bán hàng chuyên nghiệp</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người Bán
        </p>
        <Image
          src="/images/seller-illustration.png"
          alt="Seller Illustration"
          width={300}
          height={200}
          className="mb-8"
        />
      </div>

      {/* Right side - Login form */}
      <LoginForm />
    </div>
  );

};

export default LoginPage;