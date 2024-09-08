import Image from "next/image";


export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] relative flex items-center justify-center">
      <div className="bg-white w-[320px] h-[500px] rounded-[20px] flex flex-col items-center text-center shadow-[0_25px_25px_0_rgba(0,0,0,0.05)]">
        <Image src="/image-qr-code.png" alt="QR Code" width={288} height={288} className="rounded-[10px] mt-4" />
        <h1 className="text-[22px] font-bold px-8 mt-[24px] text-[#1F314F] leading-[120%]">Improve your front-end skills by building projects</h1>
        <p className="text-[15px] font-normal px-8 mt-4 tracking-[0.2px] text-[#68778D] leading-[140%]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}
