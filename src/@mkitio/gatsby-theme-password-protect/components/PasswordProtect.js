/**
 * Write-only the password as cookie
 */
 import React, { useState } from 'react';
 import { Helmet } from "react-helmet"
 import { setSessionPassword } from '../utils/utils';
 import { colors } from '../../../styles/colors';
 
 const PasswordProtect = () => {
   const [password, setPassword] = useState('');
 
   const onSubmit = event => {
     event.preventDefault();
     setSessionPassword(password);
     window.location.reload(); // eslint-disable-line
   };
 
   return (
     <div
      css={`
        align-items: center;
        background: ${password == '' || password == null ? '#f3f3f3' : ''};
        display: ${password == '' || password == null ? 'flex' : 'block'};
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        line-height: 1;
        padding: 0 24px;
        width: 100vw;
      `}
     >
       <h1
        css={`
          font-size: 40px;
          margin-bottom: 16px;
          text-align: center;
        `}
       >The content is protected.</h1>
       <p
        css={`
          font-size: 16px;
          margin-bottom: 32px;
          text-align: center;
        `}
       >To view, please enter the password.</p>
       <form
        onSubmit={onSubmit}
        css={`
          max-width: 400px;
          text-align: center;
          width: 100%;
        `}
      >
         <input
           name="password"
           type="password"
           value={password}
           placeholder="Password"
           onChange={event => setPassword(event.target.value)}
           css={`
            border-radius: 4px;
            border: 1px solid #e1e1e1;
            display: block;
            height: 48px;
            margin-bottom: 16px;
            padding: 0 16px;
            text-align: left;
            transition: all 0.25s;
            width: 100%;

            &:focus {
              border-color: ${colors.blue};
            }
           `}
         />
 
         <button
           type="submit"
           css={`
            background: ${colors.gray400};
            border: none;
            border-radius: 8px;
            color: #fff;
            cursor: pointer;
            font-weight: 700;
            height: 48px;
            transition: all 0.25s;
            width: 100%;

            &:hover {
              background: ${colors.gray300};
              transform: scale(1.05);
            }

            &:active {
              transform: scale(0.95);
            }
          `}
         >
           ENTER
         </button>
       </form>
       <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&amp;display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.typekit.net/nsk0omo.css"/>
        </Helmet>
     </div>
   );
 };
 
 export default PasswordProtect;
 