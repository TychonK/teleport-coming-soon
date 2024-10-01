import React from "react";
import data from "../../../data/data";

import CTA from "../CTA/CTA";

function Footer() {
  const { copyrightText } = data;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-slate-500 text-center">
        <CTA />
        <div className="">
          
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: copyrightText,
            }}
          ></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
