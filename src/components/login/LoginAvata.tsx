import React from "react";
import avata from "../../img/Avata-baby.png"

const Login :React.FC = () => {
  return (
    <div className="login">
      <div className='login__img'>
          <img className='login__img-avata' src={avata} alt="img avata" />
        </div>
    </div>
  )
}

export default Login;