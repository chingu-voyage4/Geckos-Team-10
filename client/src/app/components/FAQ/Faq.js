import React from "react";
import "./styles.css";

const FAQ = () => (
  <ul className="faq-container">
    {faqs.map((faq, i) => (
      <li key={i} className="faq-item">
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </li>
    ))}
  </ul>
);

const faqs = [
  {
    question: "Curabitur aliquet quam id dui posuere blandit?",
    answer:
      "Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
  },
  {
    question: "Nulla quis lorem ut libero malesuada feugiat?",
    answer:
      "Pellentesque in ipsum id orci porta dapibus.Vivamus suscipit tortor eget felis porttitor volutpat."
  },
  {
    question: "Nulla porttitor accumsan tincidunt?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit."
  },
  {
    question: "Donec sollicitudin molestie malesuada?",
    answer:
      "Curabitur aliquet quam id dui posuere blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a?",
    answer:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat."
  }
];

export default FAQ;
