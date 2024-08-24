import React from 'react';

const BannerHomeGuest = () => {
  return (
    <div className="banner-home w-full h-[337px] flex gap-3">
      <div className="banner-left w-1/2  h-full ">
        <img src="./images/banner1.webp" className="rounded-[5px]" />
      </div>
      <div className="banner-right w-1/2 h-full ">
        <img src="./images/banner2.webp" className="rounded-[5px]" />
      </div>
    </div>
  );
};

export default BannerHomeGuest;