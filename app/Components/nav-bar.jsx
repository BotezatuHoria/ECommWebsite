"use client";
import Image from "next/image";

export function NavBar() {
  return (
    <nav
      id="navBar"
      className="flex items-center justify-between bg-gray-800 px-2 py-3"
    >
      <div className="flex items-center">
        <Image
          src="/resources/ECommLogo.png"
          alt="EComm Logo"
          width={250}
          height={200}
        />
      </div>
      <div className="flex size-full">
        <input
          type="text"
          placeholder="Search"
          className="size-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <div className="flex items-center stext-white px-10">
        <label className="px-5 cursor-pointer hover:text-gray-300">
          Favourites
        </label>
        <label className="px-5 cursor-pointer hover:text-gray-300">
          Account
        </label>
        <label className="px-5 cursor-pointer hover:text-gray-300">Cart</label>
      </div>
    </nav>
  );
}
