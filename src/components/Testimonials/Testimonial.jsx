import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile5.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "It is easy to use and keeps me really organised and on task, plus the price is great. I highly recommend it to both teams and solo-preneurs who are looking for a reliable tool to keep them on task.",
    },
    {
      img: profilePic2,
      review:
      "Thanks to MAK for creating such a easy to use and very powerful project management platform. The Payment option and the custom domain option is very useful to promote my own brand.",
    },
    {
      img: profilePic3,
      review:
      "Simple and quick. Way to manage projects is very easy because you have few right options to manage normal projects and task without many subtask or complicated structure as many of other solutions.",
    },
    {
      img: profilePic4,
      review:
        "Simple enough to learn quickly and get around easily, complicated enough to get really organized and track a lot of info. Love the visually simple design. And love the collaboration possible with clients",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
