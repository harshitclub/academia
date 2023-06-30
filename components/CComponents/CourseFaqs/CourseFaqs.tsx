import React from "react";
import "./style.css";
import BigDivider from "@/components/BigDivider/BigDivider";

function CourseFaqs({
  faqHeading,
  ques1,
  ans1,
  ques2,
  ans2,
  ques3,
  ans3,
  ques4,
  ans4,
  ques5,
  ans5,
}: {
  faqHeading: string;
  ques1?: string;
  ques2?: string;
  ques3?: string;
  ques4?: string;
  ques5?: string;
  ans1?: string;
  ans2?: string;
  ans3?: string;
  ans4?: string;
  ans5?: string;
}) {
  return (
    <section className="courseFaqs width95 maxWidth">
      <h2>{faqHeading}</h2>
      <BigDivider />
      <div className="courseFaqContainer flex alignStart justifyStart spaceBtw">
        <div className="cFaqs width48">
          <div className="cFaq">
            <h4>{ques1}</h4>
            <p>{ans1}</p>
          </div>
          <div className="cFaq">
            <h4>{ques2}</h4>
            <p>{ans2}</p>
          </div>
          <div className="cFaq">
            <h4>{ques3}</h4>
            <p>{ans3}</p>
          </div>
        </div>
        <div className="cFaqs width48">
          <div className="cFaq">
            <h4>{ques4}</h4>
            <p>{ans4}</p>
          </div>
          <div className="cFaq">
            <h4>{ques5}</h4>
            <p>{ans5}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseFaqs;
