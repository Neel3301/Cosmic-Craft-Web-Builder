"use client";

import { poppins } from "@/assets/Fonts";
import { SearchIcon } from "@/assets/Svgs";
import Editable_Image from "@/lib/Editable_Image";
import Editable_Text from "@/lib/Editable_Text";
import use_Model_Store_Studio from "@/store/studio/Model_Store_Studio";

const Mockup_Studio = () => {
  const isNavbarVisible = use_Model_Store_Studio((s) => s.isNavbarVisible);

  return (
    <div
      className={`flex w-full max-w-[1380px] flex-col overflow-hidden rounded-[24px] border-2 border-[#f2f2f2] bg-white`}
      style={{
        height: ` ${isNavbarVisible == true ? `calc(100vh - 168px)` : `calc(100vh - 72px)`} `,
      }}
    >
      {/* top  */}
      <div
        className={`flex items-center justify-between gap-[24px] border-b p-[16px]`}
      >
        {/* 3 dots  */}
        <div className={`flex items-center  justify-center gap-[12px]`}>
          <div className={`h-[16px] w-[16px] rounded-full bg-red-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-yellow-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-green-400`}></div>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
        {/* url  */}
        <div
          className={`flex w-[550px] items-center justify-start gap-[8px] rounded-full bg-[#f1f1f1] p-[10px]`}
        >
          <SearchIcon classname={`h-[18px] w-[18px] fill-[#909090] `} />
          <span
            className={`${poppins.className} text-[14px] font-normal text-[#9ca3af]`}
          >
            https://cosmiccraft/shop.co/
          </span>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
      </div>
      {/* bottom  */}
      <div className={`custom-scrollbar h-full w-full overflow-y-scroll`}>
        <div className="flex h-full w-full flex-col items-start  justify-start">
          <Editable_Text cid="apple" tag={`h1`} content="Click to Edit" />
          <Editable_Image
            cid="greenapple"
            img="/Block.png"
            height={200}
            width={200}
          />
          {/* <Template_1 /> */}
        </div>
      </div>
    </div>
  );
};

export default Mockup_Studio;
