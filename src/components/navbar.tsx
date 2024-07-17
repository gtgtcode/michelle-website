import { useState } from "react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <nav className="container mx-auto py-4 px-12 shadow-b shadow-lg relative">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="md:h-[80px] h-[50px] inline"
        />
        <i
          className="fa fa-bars scale-150 md:hidden absolute right-12 top-1/2 -translate-y-1/2 align-middle"
          aria-hidden="true"
        ></i>
      </nav>
    </div>
  );
}
