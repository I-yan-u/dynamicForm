import { useState } from 'react';
import style from './Question.module.css';
import Options from './options/Options';

function Question() {
  const [options, setOptions] = useState([]);

  function handleAddOption(){
    setOptions(o => [...o, <Options key={o.length} type='radio' />])
  }

  function handleRemoveOption(){
    setOptions(options.filter((_, index) => index !== options.length - 1));
  }

  return (
      <div className={style.contain}>
        <div className={style.question}>
            <input className={style.textbox} type='text' placeholder='Enter your qusetion' />
              {options.map((item, index) =>
                <div key={index}>{item}</div>
              )}
        </div>
        <select>
            <option className={style.drop} value="radio">Radio</option>
            <option value="checkbox">CheckBox</option>
            <option value="text">Text</option>
        </select>
        <div className={style.buttons}>
            <button className={style.button_a} onClick={handleAddOption}>Add</button>
            <button className={style.button_r} onClick={handleRemoveOption}>Remove</button>
        </div>
    </div>
  );
}
export default Question;