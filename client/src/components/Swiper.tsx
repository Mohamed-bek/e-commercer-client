// // Import Swiper core and required modules
// import { Navigation, Pagination, A11y } from "swiper/modules";

// import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
// import SmallCard, { IProduct } from "./SmallCard";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { useEffect, useLayoutEffect, useRef } from "react";

// type Props = {
//   products: IProduct[];
//   numberOfElements: number;
// };

// const MySwiper = ({ products, numberOfElements }: Props) => {
//   return (
//     <div className="w-full relative">
//       <div
//         className="swiper-button-prev left-0"
//         style={{ position: "absolute", left: "-60px", zIndex: 30 }}
//       />
//       <div
//         className="swiper-button-next"
//         style={{ position: "absolute", right: "-60px", zIndex: 30 }}
//       />
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         slidesPerView={numberOfElements}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         pagination={{ clickable: true }}
//         onSwiper={(swiper: any) => console.log(swiper)}
//       >
//         {products.map((product) => (
//           <SwiperSlide className="border border-solid border-black bg-white rounded-md text-white ">
//             <SmallCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MySwiper;

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SmallCard, { IProduct } from "./SmallCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";

type Props = {
  products: IProduct[];
  numberOfElements: number;
  navigationClass: string; // Add a new prop for navigation class
};

const MySwiper = ({ products, numberOfElements, navigationClass }: Props) => {
  const prev = useRef<any>();
  const next = useRef<any>();
  return (
    <div className="w-full relative">
      <div
        ref={prev}
        className={`swiper-button-prev ${navigationClass}-prev reached-end iconSwiper swiper-button-prev left-0 top-[40%] cursor-pointer`} // Use unique class for prev button
        style={{ position: "absolute", left: "-60px", zIndex: 30 }}
      >
        {" "}
        <FaAngleLeft />{" "}
      </div>
      <div
        ref={next}
        className={`swiper-button-next ${navigationClass}-next iconSwiper swiper-button-next top-[40%] cursor-pointer`} // Use unique class for next button
        style={{ position: "absolute", right: "-60px", zIndex: 30 }}
      >
        <FaAngleRight />{" "}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={numberOfElements}
        navigation={{
          prevEl: `.${navigationClass}-prev`, // Update here
          nextEl: `.${navigationClass}-next`, // Update here
        }}
        pagination={{ clickable: true }}
        onReachBeginning={() => {
          prev.current.classList.add("reached-end");
          next.current.classList.remove("reached-end");
        }}
        onReachEnd={() => {
          next.current.classList.add("reached-end");
          prev.current.classList.remove("reached-end");
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product._id}
            className="border border-solid border-black bg-white rounded-md text-white "
          >
            <SmallCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
