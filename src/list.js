import React from 'react';
import TimeDate from './time.js';
let t = new TimeDate();

const List = (props) => {
  let arr = [];
  for (let j = 0; j < props.storage.length; j++) {
    arr[j] = JSON.parse(props.storage[j]);
  }
  return (
    <ol className="list">
    {
      arr.map((arr1, i) => {
        return (
          <li className="li">
          <div>
            <div>
              <p1><b>{arr1.individ}  </b></p1>
              <p1>{arr1.time}</p1>
              <button className="delete" id={i} onClick={props.delete}>Удалить</button>
            </div>
            <div>
              <p1>{arr1.text}</p1>
            </div>
          </div>
          </li>
        )
     })
    }
    </ol>
  )
}

export default List;
