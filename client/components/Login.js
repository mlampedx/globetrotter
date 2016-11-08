import React, {PropTypes} from 'react';

const Login = ({}) => {
  const styles = {
    header: {
      textAlign: 'center'
    },
    btn: {
      color: 'white',
      display: 'block',
      margin: 'auto',
      padding: '10px'
    }
  }

  return (
    <div>
      <h1 style = { styles.header }>Globetrotter</h1>
        <button className='btn-warning btn-lg' style = { styles.btn }>
          <a href="/auth/google">Login with Google</a>
        </button>
    </div>
  );
};

// Login.propTypes = {
  
// };

export default Login;