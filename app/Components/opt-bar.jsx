// "use client";
// import Image from "next/image";

export function OptionBar() {
  return (
    <nav
      id="optionBar"
      className="flex items-center justify-between bg-gray-500 px-7 py-3"
    >
      <div>
        <label className="px-8 cursor-pointer hover:text-gray-300">
          Products
        </label>
        <label className="px-8 cursor-pointer hover:text-gray-300">
          Today's deals
        </label>
        <label className="px-8 cursor-pointer hover:text-gray-300">
          Buy again
        </label>
        <label className="px-8 cursor-pointer hover:text-gray-300">
          Latest arrivals
        </label>
        <label className="px-8 cursor-pointer hover:text-gray-300">Sell</label>
      </div>
      <div>
        <label className="px-8 cursor-pointer hover:text-gray-300">
          Customer service
        </label>
      </div>
    </nav>
  );
}
