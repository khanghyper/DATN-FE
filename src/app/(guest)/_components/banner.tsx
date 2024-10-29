'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

const apiBanner:string = 'https://vnshop.top/api/banners/client';

const arrayBanner = [
  { id: 1, image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/d0/92/f9/fec2f5a2d44bef09a26ffbd8a65a47fa.png.webp', title: 'banner1' },
  { id: 2, image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/a6/09/ab/f9ef8f222038884c6387524a65f23525.png.webp', title: 'banner2' },
  { id: 3, image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/97/af/de/03c85cacdea94e2eee4d02dca29a4645.png.webp', title: 'banner3' },
  { id: 4, image: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/98/e6/f0/04ef25bbbc11628e5bd9d55973163f92.jpg.webp', title: 'banner4' },
];

const BannerHomeGuest = () => {
  return (
    <div className="banner-home w-full h-[337px] flex gap-3">
      <Swiper
        modules={[Autoplay, Scrollbar, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={2}
        scrollbar = {{draggable:true}}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop
      >
        {arrayBanner.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner-left w-full  h-full ">
              <img src={banner.image} className="rounded-[5px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerHomeGuest;
