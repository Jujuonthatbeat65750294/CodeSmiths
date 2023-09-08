import React from 'react';
import "../loginCss/login.css";

function Field({ type, id, name, placeholder}) {

  return (
   <div>
     <input className="button" type={type} id={id} name={name} placeholder={placeholder}/>
     </div>
        
  );
}

export default Field;