import React from "react";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

function Immersive() {
  return (
    <section className="immersive flex width100 alignStart justifyCenter">
      <div className="immersiveContainer width95 maxWidth">
        <h2>Immersive Learning Experience</h2>
        <BigDivider />
        <p>
          At Campus Sutras, we offer an immersive learning experience that takes
          your educational journey to new heights. Step into a world where
          learning becomes an adventure, where knowledge comes alive, and where
          you are fully engaged in the process.
        </p>
        <div className="immersiveTab flex alignStart justifyCenter spaceBtw marginBottom1">
          <div className="iBoxLeft">
            <h4>
              <RiNumber1 className="iBoxIcons" />. Collaborative Learning
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              Learning is not a solitary journey. Our immersive programs foster
              collaboration and teamwork, allowing you to connect with fellow
              learners, share ideas, and solve problems together. Through group
              projects, discussions, and peer feedback, you'll build valuable
              networks and develop essential collaboration skills.
            </p>
          </div>
          <div className="iBoxRight">
            <h4>
              <RiNumber2 className="iBoxIcons" />. Real-Life Scenarios
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              Dive into real-life situations that reflect the challenges and
              opportunities you'll encounter in your chosen field. Through case
              studies, role plays, and practical exercises, you'll develop the
              skills needed to navigate the professional world with confidence.
            </p>
          </div>
        </div>
        <div className="immersiveTab flex alignStart justifyCenter spaceBtw marginBottom1">
          <div className="iBoxLeft">
            <h4>
              <RiNumber3 className="iBoxIcons" />. Multi-Sensory Learning
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              We believe in stimulating all your senses for maximum
              understanding and retention. Our immersive learning environment
              incorporates visual, auditory, and kinesthetic elements to create
              a rich and multi-dimensional learning experience.
            </p>
          </div>
          <div className="iBoxRight">
            <h4>
              <RiNumber4 className="iBoxIcons" />. Total Engagement
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              Say goodbye to passive learning. Our immersive approach ensures
              you are an active participant in your educational journey. Through
              hands-on activities, simulations, and interactive exercises,
              you'll be fully engaged in every aspect of your learning.
            </p>
          </div>
        </div>
        <div className="immersiveTab flex alignStart justifyCenter spaceBtw">
          <div className="iBoxLeft">
            <h4>
              <RiNumber5 className="iBoxIcons" />. Expert Guidance
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              Our team of experienced instructors are here to guide you every
              step of the way. They provide personalized support, mentorship,
              and feedback, ensuring you have the resources and assistance you
              need to excel in your immersive learning experience.
            </p>
          </div>
          <div className="iBoxRight">
            <h4>
              <RiNumber6 className="iBoxIcons" />. Lifelong Impact
            </h4>
            <div className="immersiveBoxDivider"></div>
            <div className="immersiveBoxDivider2"></div>
            <p>
              Our immersive learning experience goes beyond the classroom. It
              equips you with practical skills, critical thinking abilities, and
              a deep understanding of your subject matter. These skills are
              transferable, enabling you to adapt and thrive in an ever-changing
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Immersive;
