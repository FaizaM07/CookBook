// import axios from 'axios';
// import React, { useState } from 'react';

// export default function InputForm({ setIsOpen }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [error, setError] = useState("");

//     const handleOnSubmit = async (e) => {
//         e.preventDefault();
//         let endpoint = isSignUp ? "signUp" : "login";
//         await axios.post(`http://localhost:5000/${endpoint}`, { email, password })
//             .then((res) => {
//                 localStorage.setItem("token", res.data.token);
//                 localStorage.setItem("user", JSON.stringify(res.data.user));
//                 setIsOpen();
//             })
//             .catch(data => setError(data.response?.data?.error));
//     };

//     const handleGoogleLogin = () => {
//         window.location.href = 'http://localhost:5000/auth/google';
//     };

//     const handleGitHubLogin = () => {
//         window.location.href = 'http://localhost:5000/auth/github';
//     };

//     return (
//         <>
//             <form className='form' onSubmit={handleOnSubmit}>
//                 <div className='form-control'>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         className='input'
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div className='form-control'>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className='input'
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <button type='submit'>{isSignUp ? "Sign Up" : "Login"}</button><br />
//                 {error !== "" && <h6 className='error'>{error}</h6>}<br />
//                 <p onClick={() => setIsSignUp((pre) => !pre)}>
//                     {isSignUp ? "Already have an account" : "Create new account"}
//                 </p>
//             </form>
//             <div className="oauth-buttons">
//                 <button onClick={handleGoogleLogin} className="google-login">Login with Google</button>
//                 <button onClick={handleGitHubLogin} className="github-login">Login with GitHub</button>
//             </div>
//         </>
//     );
// }


//--------------------------------------------------------


import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function InputForm({ setIsOpen }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    // Handle form submission for manual login
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let endpoint = isSignUp ? "signUp" : "login";
        await axios.post(`http://localhost:5000/${endpoint}`, { email, password })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setIsOpen();
            })
            .catch(data => setError(data.response?.data?.error));
    };

    // Handle Google Login Redirect
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    // Handle GitHub Login Redirect
    const handleGitHubLogin = () => {
        window.location.href = 'http://localhost:5000/auth/github';
    };

    // Extract OAuth Token from URL and Store it
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem("token", token);

            // Fetch user data with token
            axios.get("http://localhost:5000/user/me", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data));
                setIsOpen();
            })
            .catch(() => {
                setError("Authentication failed.");
            });

            // Remove token from URL for cleaner navigation
            window.history.replaceState(null, "", window.location.pathname);
        }
    }, []);

    return (
        <>
            <form className='form' onSubmit={handleOnSubmit}>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type="email"
                        className='input'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type="password"
                        className='input'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                </div>
                <button type='submit'>{isSignUp ? "Sign Up" : "Login"}</button><br />
                {error !== "" && <h6 className='error'>{error}</h6>}<br />
                <p onClick={() => setIsSignUp((pre) => !pre)}>
                    {isSignUp ? "Already have an account" : "Create new account"}
                </p>
            </form>
            <div className="oauth-buttons">
                <button onClick={handleGoogleLogin} className="google-login">Login with Google</button>
                <button onClick={handleGitHubLogin} className="github-login">Login with GitHub</button>
            </div>
        </>
    );
}
