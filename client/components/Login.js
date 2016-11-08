import React, {PropTypes} from 'react';

const Login = ({}) => {
  const styles = {
    btn: {
      color: 'white',
      display: 'block',
      margin: 'auto',
      padding: '10px'
    }
  }

  return (
    <div>
        <button className='btn-warning btn-lg' style = { styles.btn }>
          <a href="/auth/google">Login with Google</a>
        </button>
    </div>
  );
};

export default Login;