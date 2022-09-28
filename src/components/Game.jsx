import '.././index.scss';
import questions from '../questions';

function Game({ question, onClickVariant, step }) {
    const persentage = Math.round((step / questions.length) * 100);
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
        </ul>
      </>
    );
  }

  export default Game;