import { useState } from "react";
import data from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const App = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = data[index]

    const checkNumber = (num)=> {
      if(num < 0){
        return data.length-1;
      }
      if (num > data.length -1){
        return 0;
      }
      return num;
    }

    const prevPerson = () => {
      setIndex((currentIndex) => {
          const newIndex = currentIndex -1
          
          return checkNumber(newIndex);
      })
    };
    const nextPerson = () => {
      setIndex((currentIndex) => {
        const newIndex = currentIndex +1
        
        return checkNumber(newIndex);
    })
    };

    const randomPerson = () => {
      let randomNum = Math.floor(Math.random() * data.length)
      if(randomNum === index) {
        randomNum = index + 1
      }
       
      setIndex(checkNumber(randomNum))
    }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name}/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
      </article>
    </main>
  )
}
export default App;
