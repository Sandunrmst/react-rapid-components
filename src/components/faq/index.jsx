import { useState } from "react";
import faqData from "./data";
import "./styles.css";

const Faqs = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleFaqs, setMultipleFaqs] = useState([]);

  const handleSingaleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiselection = (getCurrentId) => {
    let copyMultiple = [...multipleFaqs];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultipleFaqs(copyMultiple)
  };

  return (
    <div className="wrapper">
      <button
        className="btn"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="faq">
        {faqData && faqData.length > 0 ? (
          faqData.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiselection(item.id)
                    : () => handleSingaleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleFaqs.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No data </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
