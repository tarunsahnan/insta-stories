"use client";
import { RefAttributes, lazy, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StoryInterface } from "@/types/StoryInterface";
import { EffectCube, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { IoIosClose } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";

interface StoryExpandedProps {
  data: StoryInterface[];
  currStoryIndex: number;
  setSelectedStoryIndex: (index: number) => void;
}

const StoryExpanded: React.FC<StoryExpandedProps> = ({
  data,
  currStoryIndex,
  setSelectedStoryIndex,
}) => {
  const sliderRef = useRef<SwiperRef>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const divWidth = rect.width;

    const isCloseIconClicked =
      e.target instanceof HTMLElement && e.target.closest(".close-icon");

    if (isCloseIconClicked) {
      closeClickHandler();
      return;
    }

    if (!sliderRef.current) return;

    if (clickX < divWidth * 0.3) sliderRef.current.swiper.slidePrev();
    else sliderRef.current.swiper.slideNext();
  };

  const closeClickHandler = () => {
    setSelectedStoryIndex(-1);
  };
  return (
    <div
      className="bg-black absolute top-0 w-full h-full overflow-hidden"
      onClick={handleClick}
      data-testid="story-expanded-main"
    >
      <Swiper
        ref={sliderRef}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: true,
          pauseOnMouseEnter: true,
        }}
        initialSlide={currStoryIndex}
        modules={[EffectCube, Navigation, Autoplay]}
        effect="cube"
        className="h-full w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="bg-black">
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={item.userStory}
                alt={item.userName}
                className="w-full max-h-full object-cover"
                width={140}
                height={140}
              />
              <div className="flex justify-between items-center  text-white pl-3 pt-3 absolute top-0 w-full">
                <div className="flex text-white items-center gap-3">
                  <Image
                    loading="eager"
                    src={item.userImage}
                    alt="userImage"
                    className="w-10 h-10 rounded-full border border-white p-[1px]"
                    width={15}
                    height={15}
                  />
                  <div>
                    <p>
                      {item.userName}
                      <span className="text-gray-400 text-sm"> 5h</span>
                    </p>
                    <div className="flex items-center gap-1">
                      <FaCamera />
                      <p className="text-gray-300 text-sm">One Take </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosClose size={56} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* swiper js prevents click listens in order to prevent accidental clicks, close event was not working perfectly when given to individual close button */}
      {/* So we created a transparent div that will handle all the close clicks */}
      <div
        data-testid="close-button"
        className="absolute top-0 h-[56px] w-[56px] right-0 mt-3 z-10"
        onClick={closeClickHandler}
      ></div>
    </div>
  );
};

export default StoryExpanded;
