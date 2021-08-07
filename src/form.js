import React from 'react';

const Form = (props) => {
  return (
  <div onChange={props.turn} >
    <input class="individ" placeholder="Введите ваше имя" value={props.todos.individ}></input>
    <input class="text" placeholder="Введите ваш комментарий..." value={props.todos.text}></input>
    <button class="send" onClick={props.storageTurn}>Отправить</button>
  </div>
  )
}

export default Form;
