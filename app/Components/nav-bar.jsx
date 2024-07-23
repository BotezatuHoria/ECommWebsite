"use client";
import Image from "next/image";

export function NavBar() {
  return (
    <div id="navBar" className="inline-block">
      <Image
        src="/resources/ECommLogo.png"
        alt="EComm Logo"
        width={100}
        height={100}
      />
      <input></input>

      <label>Account</label>
      <label>Favourites</label>
      <label>Cart</label>
    </div>
  );
}
