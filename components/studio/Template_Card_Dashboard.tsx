import Image from "next/image";

interface Template_Card_Dashboard_Interface {
  img: string;
}
const Template_Card_Dashboard = ({
  img,
}: Template_Card_Dashboard_Interface) => {
  return (
    <div
      className={`relative h-[280px] w-[420px] cursor-pointer rounded-[12px] border bg-white`}
    >
      <Image src={img} alt="t1" fill />
    </div>
  );
};

export default Template_Card_Dashboard;
