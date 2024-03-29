import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50">&copy; {new Date().getFullYear()} Vlad Drevilo. All rights reserved.</p>
    </div>
  );
};

export default Footer;
