// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your login logic
//     if (username === 'admin' && password === 'password') {
//       // Successful login
//       console.log('Login successful');
      
//       // You can redirect the user to another page here
//       //history.push('/');
//     } else {
//       // Failed login
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
//import styles from './styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button>
            <Link to="/" className="text-dark">
              Login
            </Link>
            </button>
          
      </form>
    </div>
  );
};

export default Login;

