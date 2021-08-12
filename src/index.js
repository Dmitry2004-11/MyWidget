import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';

import Form from './form.js';
import List from './list.js';
import timeDate from './time.js';

class MyWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: { individ: '', text: '', active: false },
      storage: localStorage
    };
  }

  turn(e) {
    let todos = this.state.todos;
    let txt = e.target.value;
    let check = e.target.id;
    (check == "text") ? todos.text = txt : todos.individ = txt;
    todos.active = ((todos.individ.length) && (todos.text.length)) && ((todos.individ[0] != ' ' ) && (todos.text[0] != ' ')) && (/\p{L}/gu.test(todos.individ)) ? true : false;
    this.setState({ todos });
  }

  storageTurn() {
    if (!this.state.todos.active){
      alert("Текст обоих полей не должен начинаться с пробела,\nа поле имени должно содержать хотя бы одну букву.")
    }
    else {
      const str = { individ: this.state.todos.individ, text: this.state.todos.text, time: timeDate() }
      localStorage.setItem(localStorage.length.toString(10), JSON.stringify(str));
      this.setState({ storage: localStorage });
      let todos = this.state.todos;
      [todos.individ, todos.text, todos.active] = ['', '', false];
      this.setState({ todos })
    }
  }

  delete(e) {
    const num = +e.target.id;
    localStorage.removeItem(num);
    let [t, a] = [ localStorage.length, false ];
    for (let j = 0; j < localStorage.length; j++) {
      if (j == t) {localStorage.removeItem(j)}
      else if ((localStorage[j] === undefined) || (a)) {
        localStorage[j] = localStorage[j+1];
        a = true;
        t = localStorage.length-1;
      }
    }
    this.setState({ storage: localStorage })
  }

  render() {
    return (
      <div>
        <h1 className="heading">Пятнадцатое домашнее задание</h1>
        <Form turn={this.turn.bind(this)} storageTurn={this.storageTurn.bind(this)} todos={this.state.todos} />
        <List storage={this.state.storage} delete={this.delete.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <MyWidget />,
  document.querySelector('#app')
)
