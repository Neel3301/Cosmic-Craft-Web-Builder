import { titillium_Web } from "@/assets/Fonts";
import Navbar_Dashboard from "@/components/studio/Navbar_Dashboard";
import Template_Card_Dashboard from "@/components/studio/Template_Card_Dashboard";

const dashboard = () => {
  return (
    <>
      <Navbar_Dashboard />
      <div className="relative bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black"></div>
        {/* <Navbar_Dashboard /> */}
        <div className="flex h-full w-full">
          {/* sidebar  */}
          <div
            className={`h-[90vh] w-[80px] border-r-2 border-[#f2f2f2] bg-white`}
          ></div>

          {/* Your Project  */}
          <div
            className={`custom-scrollbar flex h-[90vh] w-full flex-col gap-[32px] overflow-y-scroll p-[24px]`}
          >
            <div className={`h-full`}>
              {/* Select Template  */}
              <h2
                className={`${titillium_Web.className} text-[28px] font-semibold`}
              >
                Your Website
              </h2>
              {/* template */}
              <div
                className={`mt-[18px] flex w-full flex-wrap items-start justify-start gap-[24px]`}
              >
                <Template_Card_Dashboard img="/template-4.png" />
                <div className={`flex gap-[24px]`}>
                  <button
                    className={`rounded-[8px] border border-[#f2f2f2] bg-white px-[18px] py-[12px]`}
                  >
                    Add / Delete Product
                  </button>
                  <button
                    className={`rounded-[8px] border border-[#f2f2f2] bg-white px-[18px] py-[12px]`}
                  >
                    Customize This Website
                  </button>
                  <button
                    className={`rounded-[8px] border border-[#f2f2f2] bg-white px-[18px] py-[12px]`}
                  >
                    View Pending Order
                  </button>
                  <button
                    className={`rounded-[8px] border border-[#f2f2f2] bg-white px-[18px] py-[12px]`}
                  >
                    View Sales
                  </button>
                </div>
              </div>
            </div>

            {/* select template  */}
            <div className={``}>
              {/* Select Template  */}
              <h2
                className={`${titillium_Web.className} text-[28px] font-semibold`}
              >
                Select Template For Your Website
              </h2>
              {/* template */}
              <div
                className={`mt-[18px] flex flex-wrap items-start justify-start gap-[24px]`}
              >
                <Template_Card_Dashboard img="/template-1.png" />
                <Template_Card_Dashboard img="/template-2.png" />
                <Template_Card_Dashboard img="/template-3.png" />
                <Template_Card_Dashboard img="/template-4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
