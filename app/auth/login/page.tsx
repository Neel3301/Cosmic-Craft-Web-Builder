import { salsa, titillium_Web } from "@/assets/Fonts";
import { GoogleIcon } from "@/assets/Svgs";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <main
      className={`flex ${titillium_Web.className} h-[100vh] max-h-[720px] w-full min-w-[1200px] items-start justify-center gap-[200px]`}
    >
      {/* left  */}
      <div className={`flex h-full flex-col items-start justify-center`}>
        {/* login title  */}
        <div className={`flex flex-col`}>
          <h2 className={`text-[52px] font-bold text-main `}>Log in</h2>
          <p className={`max-w-[400px]  text-[14px] font-light`}>
            Login to continue and explore{" "}
            <span className={`${salsa.className}`}>Cosmic Craft</span>. an old
            school web builder
          </p>
        </div>
        {/* form  */}
        <form action="">
          {/* email add  */}
          <div className={`mt-[52px] flex flex-col `}>
            <label htmlFor="" className={`text-[16px]`}>
              Email Address :
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className={`w-[400px] border-b border-main py-[8px] text-[18px] outline-none`}
            />
          </div>
          {/* password */}
          <div className={`mt-[32px] flex flex-col `}>
            <label htmlFor="" className={`text-[16px]`}>
              Password :
            </label>
            <input
              type="password"
              placeholder="******"
              className={`w-[400px] border-b border-main py-[8px] text-[18px] outline-none`}
            />
          </div>
          {/* btn  */}
          <Button
            className={`mt-[32px] w-full bg-main py-[24px] hover:bg-main/75  `}
          >
            <Link href={"/auth/register"} className={`text-[18px] text-white`}>
              Login to Continue
            </Link>
          </Button>
        </form>
        {/* dont have acc  */}
        <Button className={`mt-[12px] p-0 text-[14px]`} variant={"link"}>
          <Link href={"/auth/signup"}>
            {"Don't have an account?"}{" "}
            <span className={`font-semibold text-[#00b6ff]`}>Sign Up</span>
          </Link>
        </Button>
        {/* Google Login  */}
        <div
          className={`mt-[12px]  flex w-full items-center justify-start gap-[24px]`}
        >
          <p className={`text-nowrap text-[20px] font-normal`}>
            or continue with
          </p>
          <Button
            variant={"outline"}
            className={`flex  w-full items-center justify-center gap-[12px] py-[24px]`}
          >
            <GoogleIcon classname={`h-[24px] w-[24px]`} />
            <p className={`text-[16px] font-normal`}>Google</p>
          </Button>
        </div>
      </div>
      {/* right  */}
      <div className={`flex h-full  items-center justify-center`}>
        {/* img  */}
        <Image src={`/Block.png`} height={380} width={490} alt="bg" />
      </div>
    </main>
  );
};

export default login;
