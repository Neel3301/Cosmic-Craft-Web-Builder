import Navbar_Studio from "@/components/studio/Navbar_Studio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`flex w-full flex-col items-center justify-center`}
      >
        <Navbar_Studio />
        {children}
      </body>
    </html>
  );
}
