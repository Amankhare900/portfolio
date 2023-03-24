import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import "./testimonials.css";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "rahul tiwari",
    review: `One of the things I appreciated most about working with Aman was their collaborative approach.
      They were always willing to lend a hand and worked closely with the team to ensure that everyone 
      was aligned and moving forward together.Their ability to work effectively with others was key to 
      the success of the project.I would highly recommend Aman for any IT project.
      Their technical skills, attention to detail, and collaborative approach make them an asset to any team.`,
  },
  {
    avatar: AVTR2,
    name: "ayush Chandrawar",
    review:
      "I had the pleasure of working with Aman Khare on a complex IT project for our college, and I can confidently say that their contributions were invaluable. Aman is an excellent communicator, always keeping the team informed of project updates and progress. They demonstrated great attention to detail and an ability to navigate complex technical issues with ease.",
  },
  // {
  //   avatar: AVTR3,
  //   name: "Shubham Shrivastava",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde exercitationem similique dolor enim facere ullam est nesciunt, suscipit dignissimos maxime vitae aliquam quas facilis fugiat, minus corrupti sit natus.",
  // },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        Navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
