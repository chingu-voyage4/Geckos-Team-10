import React from "react";
import "./styles.css";

const FAQ = () => {
  return (
    <ul className="faq-container">
      {faqs.map((faq, i) => (
        <li key={i} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default FAQ;
