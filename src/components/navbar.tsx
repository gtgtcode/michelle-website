import { Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <nav className="md:container mx-auto py-4 px-4 shadow-b shadow-lg relative">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="md:h-[80px] h-[65px] inline"
          />
        </Link>
        <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 float-right">
          <ul>
            <li className="inline transition-all hover:font-bold hover:text-blue-900 px-2">
              <Link href="/about">About Us</Link>
            </li>
            <li className="inline transition-all hover:font-bold hover:text-blue-900 px-2 pr-4">
              <Link href="/services">Our Services</Link>
            </li>

            <Button variant="contained" href="/contact" color="error">
              <p className="font-bold">Contact Us</p>
            </Button>
          </ul>
        </div>
        <Button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 scale-150"
          variant="text"
          color="error"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Button>
      </nav>
      {mobileNavOpen && (
        <div className="md:hidden text-center py-4 shadow-b shadow-lg">
          <ul>
            <li className="py-2">
              <Link href="/about">About Us</Link>
            </li>
            <div className="border-b border w-1/2 mx-auto"></div>
            <li className="py-2">
              <Link href="/services">Our Services</Link>
            </li>
            <div className="border-b border w-1/2 mx-auto"></div>
            <li className="py-2">
              <Link href="/contact">
                <Button variant="contained" href="/contact" color="error">
                  Contact Us
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
