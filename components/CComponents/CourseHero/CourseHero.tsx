import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
  RiComputerFill,
  RiDownloadLine,
  RiDraftLine,
  RiTimeFill,
} from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";

function CourseHero({
  h1,
  h2,
  p1,
  p2,
  price,
  disPrice,
  disPercentage,
  duration,
  image,
  bCrumpLink,
  bCrump,
}: {
  h1: string;
  h2: string;
  p1: string;
  p2: string;
  price: number;
  disPrice: number;
  disPercentage: number;
  duration: string;
  image: StaticImageData;
  bCrumpLink: string;
  bCrump: string;
}) {
  return (
    <section className="courseHero flex alignCenter justifyCenter spaceBtw width100 flexColumn">
      <div className="courseHeroContainer flex alignCenter justifyCenter spaceBtw width95 maxWidth">
        <div className="courseHeroLeft width50">
          <div className="breadCrumps marginBottom1">
            <a href="/">{`Home > `}</a>
            <a href="/courses">{`Courses > `}</a>
            <a href={bCrumpLink}>{bCrump}</a>
          </div>
          <h1>{h1}</h1>
          <BigDivider />
          <h2>{h2}</h2>
          <p className="marginBottom1">{p1}</p>
          <p className="marginBottom05">{p2}</p>
          <div className="courseDetails width100">
            <div className="coursePrice">
              <h3>
                ₹{price} <span>₹{disPrice}</span>{" "}
                <span className="discountPercent">
                  {disPercentage}% Discount
                </span>
              </h3>
            </div>
            <div className="courseDiscount">
              <p>
                Early Bird Discount Available{" "}
                <span>
                  <RiCheckboxCircleFill className="icoMargin18" />
                </span>
              </p>
            </div>
            <div className="courseDuration">
              <h4>
                <RiTimeFill className="icoMargin18" /> Duration -{" "}
                <span>{duration}</span>
              </h4>
            </div>
            <div className="courseMode">
              <h4>
                <RiComputerFill className="icoMargin18" /> Mode:{" "}
                <span>
                  <RiCheckboxBlankCircleFill className="onlineIcon icoMargin15" />{" "}
                  Online{" "}
                </span>
                |{" "}
                <span>
                  <RiCheckboxBlankCircleFill className="offlineIcon icoMargin15" />{" "}
                  Offline
                </span>{" "}
                <span>[Both Available]</span>
              </h4>
            </div>
          </div>
          <div className="courseHeroBtns flex alignCenter justifyStart">
            <div className="courseHeroBtn width50">
              <a href="/">
                Enroll Now <RiDraftLine className="icoMargin18" />
              </a>
            </div>
            <div className="courseHeroBtn2 width50">
              <a href="/">
                Download Course Content{" "}
                <RiDownloadLine className="icoMargin18" />
              </a>
            </div>
          </div>
        </div>
        <div className="courseHeroRight flex alignCenter justifyCenter">
          <Image src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
