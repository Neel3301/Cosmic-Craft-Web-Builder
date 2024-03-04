import { poppins, salsa, titillium_Web } from "@/assets/Fonts";
import {
  SocialInstagramIcon,
  SocialLinkedinIcon,
  SocialWhatsappIcon,
  SocialXIcon,
} from "@/assets/Svgs";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-w-[1200px] bg-white bg-dot-black/[0.3] dark:bg-black dark:bg-dot-white/[0.3]">
      <Navbar />
      <div
        className={`flex flex-col items-center  ${titillium_Web.className} justify-center p-[12px] text-[#202020] `}
      >
        <h3
          className={`mt-[24px] rounded-full bg-[#efefef] px-[28px] py-[16px]  text-[18px] font-bold`}
        >
          An Old School Web-Builder
        </h3>
        <h1 className={` max-w-[1120px] text-center text-[62px] font-bold`}>
          Empower Your Business with a{" "}
          <span className={`text-main`}>Stunning Website</span> – No Coding
          Required!
        </h1>
        <p className={`max-w-[1200px] ${poppins.className} text-center`}>
          At <span className={`${salsa.className}`}>Cosmic Craft</span>, we
          empower small businesses to shine online with customizable, no-code
          website solutions. Our mission is to simplify website creation,
          enabling entrepreneurs to connect with their audience effortlessly.
          Join us in revolutionizing the digital landscape, one website at a
          time.
        </p>
        <div className={`mt-[24px] flex gap-[24px]`}>
          <Button
            className={`rounded-full bg-main px-[42px] py-[28px] font-bold  hover:bg-main/75`}
          >
            <Link href={"#"} className="text-[18px] text-[#fff]">
              Get Started
            </Link>
          </Button>
          <Button
            className={`rounded-full px-[42px] py-[28px]  font-bold`}
            variant={"outline"}
          >
            <Link href={"#"} className="text-[18px]">
              View Documentation
            </Link>
          </Button>
        </div>
        <div className={`mt-[32px] rounded-[12px] border-2  border-[#f2f2f2]`}>
          <Image
            src={"/Landing-Studio.png"}
            height={500}
            width={1300}
            alt="cover"
            className={`rounded-[12px] `}
          />
        </div>
      </div>

      <div
        className={`flex w-full flex-col items-center justify-center py-[62px] text-center `}
      >
        <h1 className={`max-w-[1120px] text-[62px] font-extrabold`}>
          Unleash Your Creativity :{" "}
          <span className={`text-main`}>Customize Your Website </span> Your Way!
        </h1>
        <div className="mt-[24px] flex w-full items-start justify-center gap-[62px] ">
          <div className={`h-[220px] p-[24px] `}>
            <h3
              className={`border-b-[3px] border-[#202020] text-start text-[24px] font-bold`}
            >
              Our Powerfull <span className={`text-main`}> Text-Editor </span>
            </h3>
            <p className={`mt-[12px] max-w-[500px] text-start`}>
              Take full control of your websites appearance with our powerful
              text editor. Customize fonts, colors, sizes, and more to reflect
              your unique style and brand identity. With endless possibilities
              at your fingertips, create a website that truly stands out from
              the crowd.
            </p>
          </div>

          <div className={`h-[220px] p-[24px] `}>
            <h3
              className={`border-b-[3px] border-[#202020] text-start text-[24px] font-bold`}
            >
              Our Powerfull <span className={`text-main`}> Image-Editor </span>
            </h3>
            <p className={`mt-[12px] max-w-[500px] text-start`}>
              Transform your websites visuals with our powerful Image Editor.
              Customize images in every possible way – from adjusting colors and
              sizes to adding filters and effects. Elevate your online presence
              with stunning visuals that truly represent your brand.
            </p>
          </div>
        </div>
        <div className={`mt-[32px] w-full`}>
          <Button
            className={`rounded-full bg-main px-[42px] py-[28px] font-bold  hover:bg-main/75`}
          >
            <Link href={"#"} className="text-[18px] text-[#fff]">
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      {/* contact us  */}
      <div
        id="contact-us"
        className={`flex h-full w-full items-center justify-center gap-[200px]`}
      >
        {/* left  */}
        <div className={`flex h-full flex-col items-start justify-center`}>
          {/* login title  */}
          <div className={`flex flex-col`}>
            <h2 className={`text-[52px] font-bold text-main `}>Contact Us</h2>
            <p className={`max-w-[500px]  text-[14px] font-light`}>
              {`Please feel free to reach out to us via email or by filling out
              the text area below. Whether you have a suggestion for improving
              our website, a question about our products or services, or just
              want to say hello, we'd love to hear from you!`}
              <span className={`${salsa.className}`}> - Cosmic Craft</span>. an
              old school web builder
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
                className={`w-[500px] border-b border-main bg-transparent py-[8px] text-[18px] outline-none`}
              />
            </div>
            {/* password */}
            <div className={`mt-[32px] flex flex-col `}>
              <label htmlFor="" className={`text-[16px]`}>
                Text Area :
              </label>
              <textarea
                placeholder="Write Something..."
                className={`hw-[500px] border-b border-main bg-transparent py-[8px] text-[18px] outline-none`}
              />
            </div>
            {/* btn  */}
            <Button
              className={`mt-[32px] w-full bg-main py-[24px] hover:bg-main/75  `}
            >
              <Link
                href={"/auth/register"}
                className={`text-[18px] text-white`}
              >
                Contact Now
              </Link>
            </Button>
          </form>
        </div>
        {/* right  */}
        <div className={`flex h-full  items-center justify-center`}>
          {/* img  */}
          <Image src={`/Block.png`} height={380} width={390} alt="bg" />
        </div>
      </div>

      {/* footer  */}
      <footer
        className={`mt-[42px] flex w-full flex-col items-center justify-center gap-[24px] bg-[#202020] p-[24px]`}
      >
        <div>
          <h2 className={`${salsa.className} w-full text-[32px] text-[#fff]`}>
            Cosmic Craft
          </h2>
        </div>
        <div className={`flex w-full items-center justify-center gap-[24px]`}>
          <h5 className={`text-[18px] text-[#fff]`}>Follow Us On :</h5>
          <div className={`flex gap-[24px]`}>
            <Link href={""}>
              <SocialInstagramIcon classname="h-[20px] w-[20px]" />
            </Link>
            <Link href={""}>
              <SocialLinkedinIcon classname="h-[20px] w-[20px]" />
            </Link>
            <Link href={""}>
              <SocialWhatsappIcon classname="h-[20px] w-[20px]" />
            </Link>
            <Link href={""}>
              <SocialXIcon classname="h-[20px] w-[20px]" />
            </Link>
          </div>
        </div>
        <div>
          <h5 className={`font-[16px] text-[#fff]`}>
            Created By :{" "}
            <span className={`${salsa.className}`}>Chotaliya Neel</span>
          </h5>
        </div>
      </footer>
    </div>
  );
}
