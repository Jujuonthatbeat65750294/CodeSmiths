import React from 'react';
import "../loginCss/login.css";

function Field({ type, id, name, placeholder}) {

  return (
    <form> 
      {/* action.php method=POST */}
          <input className="button" type={type} id={id} name={name} placeholder={placeholder}/>
        </form>
  );
}

export default Field;