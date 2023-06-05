"use client";

import React, { useState } from "react";
import './style.css'

import {faqs} from './faqdatas'
import { RiArrowDownSLine } from "react-icons/ri";
import BigDivider from "@/components/BigDivider/BigDivider";

const faqTab1 = faqs.slice(0, 2)
const faqTab2 = faqs.slice(2, 4)
const faqTab3 = faqs.slice(4, 6)
const faqTab4 = faqs.slice(6, 8)
const faqTab5 = faqs.slice(8, 10)

function FaqSection() {
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const handleQuestionClick = (index: any) =>{
    if(selectedQuestion === index){
      setSelectedQuestion(null)
    }else{
      setSelectedQuestion(index)
    }
  }
  return (
    <section className="faq flex alignCenter justifyCenter flexColumn width100">
      <div className="faqContainer width95 maxWidth">
        <h2>Frequently Asked Questions</h2>
        <BigDivider/>
        <p>Find Everything You Need to Know</p>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab1.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab2.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab3.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab4.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
        <div className="faqTab flex alignStart justifyCenter spaceBtw">
          {faqTab5.map((faq) => {
            return (
              <>
                <div
                  className="faqBox"
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq.id)}
                >
                  <div className="faqHead flex alignCenter justifyCenter spaceBtw">
                    <h4>
                      {faq.id}. {faq.ques}
                    </h4>
                    <RiArrowDownSLine />
                  </div>
                  {selectedQuestion === faq.id && <p>{faq.ans}</p>}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection