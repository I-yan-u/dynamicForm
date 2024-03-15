import { useState } from "react";
import Question from "./Question";
import style from './Container.module.css';

function Container(){
    const [questions, setQuestions] = useState([<Question key={0}/>]);

    function handleAddQuestion(){
        setQuestions(q => [...q , <Question key={q.length}/>]);
    }

    function handleRemoveQuestion() {
        setQuestions(questions.filter((_, index) => index !== questions.length - 1));
      }

    return(
        <div>
            {questions.map((question, index) => (
                <div key={index}>{question}</div>
                )            
            )}
            <div className={style.buttons}>
                <button className={style.button} onClick={handleAddQuestion}>➕</button>
                <button className={style.button} onClick={handleRemoveQuestion}>➖</button>
            </div>
        </div>
    );

}
export default Container;   