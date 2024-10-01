import React from "react";
import data from "../../../data/data";

import Paperplane from "../Paperplane/Paperplane";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <div>
      <Paperplane />
      <div className="relative z-10 flex flex-col  place-items-center ">
        <span className="text-7xl">⏳</span>
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-main dark:to-accent from-main to-alarm">
            {title}
          </span>
        </h2>
        
        <p
          className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </div>
    </div>
  );
}

export default ComingSoonContent;
