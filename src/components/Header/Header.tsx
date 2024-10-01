import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

import Image from "next/image";

function Header() {
  const { sitename, sitetagline } = data;
  return (
    <>
    <section className="container mx-auto p-4 text-center">
      <Navigation />      
    </section>
      <header className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
          >
            <div className="flex flex-col text-center">
              <h1 className="flex mx-auto items-center  text-2xl uppercase lg:text-4xl dark:text-mint text-accent font-semibold	">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} /><span className="px-[10px]">{sitename}</span><Image src="/logo.svg" alt="Logo" width={50} height={50} />
              </h1>
              <p className="text-2xl font-xl m-2 text-slate-800 dark:text-slate-100">
                {sitetagline}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
