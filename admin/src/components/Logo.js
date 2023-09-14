import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="brand">
      <i class="bx bx-wink-smile"></i>
      <span className="text">AdminHub</span>
    </Link>
  );
};

export default Logo;
