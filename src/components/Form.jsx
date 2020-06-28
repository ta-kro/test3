import React from 'react';

const Form = (props) => {
  let contactForm;
  if (props.hasGottenItem) {
    
    contactForm = (
      <form className="App-form" onSubmit={props.addEditTodo}>
        <input type="text" id="title" onChange={props.updateItem}/>
        <input type="submit" value="追加"/>
      </form>
    );
    

  } else {

    contactForm = (
      <form className="App-form" onSubmit={props.addTodo}>
        <input type="text" id="title" onChange={props.updateItem}/>
        <input type="submit" value="追加"/>
      </form>
    );

  }

  document.getElementById("text")
  return (
    <div className="Form">
      {contactForm}
    </div>
  );
}

export default Form;