import React from 'react';

const List = (props) => {
  
  let displayList;
  if (props.isShowed && props.lists.length > 0) {

    displayList = (
      <div className="List">
        <button onClick={() => props.handleList()}>完了済みリスト非表示</button>
        <ul>
          {props.lists.map((list, i) => <li key={i}>{list.title}</li>)}
        </ul>
      </div>
    );

  } else {

    displayList = (
      <div className="List">
        <button onClick={() => props.handleList()}>完了済みリスト表示</button>
      </div>
    );

  };
  

  return (
    <div>
        {displayList}
    </div>
  );

}



export default List;
