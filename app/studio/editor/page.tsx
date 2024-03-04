import Image_Toolbox_Studio from "@/components/studio/Image_Toolbox_Studio";
import Mockup_Studio from "@/components/studio/Mockup_Studio";
import Page_Sidebar_Studio from "@/components/studio/Page_Sidebar_Studio";
import Text_Toolbox_Studio from "@/components/studio/Text_Toolbox_Studio";

const editor = () => {
  return (
    <div className="relative bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black"></div>
      <div className={`flex w-full max-w-[1536px]`}>
        <Page_Sidebar_Studio />
        <Text_Toolbox_Studio />
        <Image_Toolbox_Studio />
        <div className={`flex w-full items-center justify-center p-[24px]`}>
          <Mockup_Studio />
        </div>
      </div>
    </div>
  );
};

export default editor;
