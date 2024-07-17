import { Button, Divider } from "antd";
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
        <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 float-right">
          <ul>
            <li className="inline transition-all hover:font-bold px-2">
              <a href="/about">About Us</a>
            </li>
            <li className="inline transition-all hover:font-bold px-2 pr-4">
              <a href="/services">Our Services</a>
            </li>
            <a href="/contact">
              <Button type="primary" danger>
                <p className="font-bold">Contact Us</p>
              </Button>
            </a>
          </ul>
        </div>
        <Button
          className="md:hidden absolute right-12 top-1/2 -translate-y-1/2 scale-150"
          type="text"
          shape="circle"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Button>
      </nav>
      {mobileNavOpen && (
        <div className="md:hidden text-center py-4 shadow-b shadow-lg">
          <ul>
            <li className="py-2">
              <a href="/about">About Us</a>
            </li>
            <div className="border-b border w-1/2 mx-auto"></div>
            <li className="py-2">
              <a href="/services">Our Services</a>
            </li>
            <div className="border-b border w-1/2 mx-auto"></div>
            <li className="py-2">
              <a href="/contact">
                <Button type="primary" className="bg-red-800" danger>
                  Contact Us
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
