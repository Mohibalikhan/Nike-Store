'use client'
import Link from "next/link";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

function Sale() {
  // State for managing the sidebar toggle in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        {/* Sidebar Section */}
        <div className="lg:w-[250px] w-full">
          {/* Mobile toggle button */}
          <div className="flex justify-between items-center lg:hidden mt-6 mb-2">
            <h3 className="text-lg font-semibold">Categories</h3>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-xl"
            >
              {isSidebarOpen ? <FaCaretUp /> : <FaCaretDown />}
            </button>
          </div>

          {/* Categories list */}
          <ul
            className={`flex flex-col gap-6 border-r border-gray-300 pt-10 pr-6 lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:flex`}
          >
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Hoodies & Sweatshirts",
              "Tops & T-shirts",
              "Shorts",
              "Sports & Outdoor",
              "Trackcuits",
              "Jumpsuits & Rompers",
              "Socks",
              "Accessories & Equipment"
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center w-full cursor-pointer hover:text-gray-500"
              >
                <Link href="#" className="text-sm sm:text-base">
                  {item}
                </Link>
                {index < 2 && (
                  <FaAngleRight className="text-sm hidden lg:block mr-4" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* Product Card 1 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s1.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Force 1 React</p>
            <p>Men's Shoes</p>
            <p>MRP : ₹ 13 295.00</p>
          </div>
          
          {/* Product Card 2 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s2.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Air Jordan 1 Elevate Low</p>
            <p>Women's shoes</p>
            <p>₹ 11 895.00</p>
          </div>

          {/* Product Card 3 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s3.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Standard Issue</p>
            <p>Women Basketball Jersey</p>
            <p>₹ 2 895.00</p>
          </div>

          {/* Product Card 4 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s4.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Dunk Low Retro SE</p>
            <p>Men's shoes</p>
            <p>₹ 9 695.00</p>
          </div>

          {/* Product Card 5 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s5.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Max 97 SE</p>
            <p>Men's shoes</p>
            <p>₹ 9 695.00</p>
          </div>

          {/* Product Card 6 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s6.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Dri-Fit UV Hyverse</p>
            <p>Men's short</p>
            <p>₹ 2 495.00</p>
          </div>

          {/* Product Card 7 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s7.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Court Vision Low</p>
            <p>Men's shoes</p>
            <p>₹ 5 695.00</p>
          </div>

          {/* Product Card 8 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s8.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Dri-Fit Ready</p>
            <p>Men's short</p>
            <p>₹ 2 495.00</p>
          </div>

          {/* Product Card 9 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s9.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike One Leak Protection:Period</p>
            <p>Women Mid-Rise 18cm Biker Shorts</p>
            <p>₹ 3 395.00</p>
          </div>

          {/* Product Card 10 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s10.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Force 1 LV8 3</p>
            <p>Older Kids</p>
            <p>₹ 7 495.00</p>
          </div>

          {/* Product Card 11 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s11.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Blazer Low Platform</p>
            <p>Women shoes</p>
            <p>₹ 8 195.00</p>
          </div>

          {/* Product Card 12 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s12.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Force 1'07</p>
            <p>Women shoes</p>
            <p>₹ 8 195.00</p>
          </div>

          {/* Product Card 13 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s13.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Pro Dri-FIT</p>
            <p>Men's Tights-Fit Sleeveless Top</p>
            <p>₹ 1 495.00</p>
          </div>

          {/* Product Card 14 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s14.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Dunk Low Retro</p>
            <p>Men's shoes</p>
            <p>₹ 8 695.00</p>
          </div>

          {/* Product Card 15 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s15.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Max SC</p>
            <p>Women shoes</p>
            <p>
</p>
          </div>

          {/* Product Card 16 */}
          <div className="font-bold text-slate-600">
            <Image src={"/s16.png"} alt={"shoes"} width={500} height={200} />
            <p className="mt-2">Nike Air Max 97 SE</p>
            <p>Men's shoes</p>
            <p>₹ 9 695.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;