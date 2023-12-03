import { useState } from "react";
import { Accordion } from "./accordion/Accordion";
import FAQ_answers from "../../data/FAQsData.json";

export const FAQ = () => {
  const [active, setActive] = useState(0);

  const handleActiveClick = (id) => {
    if (id === active) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <section id="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {FAQ_answers.length > 0 &&
          FAQ_answers.map(({ question, answer }, id) => (
            <Accordion
              key={id}
              question={question}
              answer={answer}
              isActive={id === active}
              setActive={() => handleActiveClick(id)}
            />
          ))}
      </ul>
      <div>
        <p>Didn't find the answer to your question?</p>
        <a href="#contactSection">
          Contact Us
          {/* <ArrowIcon aria-label="arrow down" /> */}
        </a>
      </div>
    </section>
  );
};
