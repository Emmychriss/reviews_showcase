import { useState } from "react";
import People from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = People[index];

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % People.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + People.length) % People.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * People.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex();
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          Random
        </button>
      </article>
    </main>
  );
};
export default App;
