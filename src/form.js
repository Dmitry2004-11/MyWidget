import React from 'react';

const Form = (props) => {
  return (
  <form onChange={props.turn} onSubmit={ e => {e.preventDefault();
   props.storageTurn()
   }} >
    <input id="individ" placeholder="Введите ваше имя" value={props.todos.individ} required></input>
    <textarea id="text" placeholder="Введите ваш комментарий..." value={props.todos.text} required></textarea>
    <input class="send" type="submit" value="Отправить"></input>
  </form>
  )
}

export default Form;
