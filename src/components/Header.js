import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-tuscany-300 p-2 flex-grow py-1">
        <div className="flex items-center flex-grow sm:flex-grow-0 px-3">
          <Image
            src="https://github.com/Just-M-Code/A-hope/blob/main/logo2.png?raw=true"
            width={150}
            height={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-champagne_pink hover:bg-tuscany-300">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 text-tuscany-300 hover:text-white" />
        </div>

        {/* right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Magnus Engberg</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-champagne_pink text-center text-tuscany-300 rounded-full font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-semibold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-champagne_pink text-tuscany-500 text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>

        <p></p>
      </div>
    </header>
  );
}

export default Header;
