import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const emailData = email.current.value;
    const passwordData = password.current.value;
    const userNameData = userName?.current?.value;

    const userMessage = userNameData ? null : "UserName is not valid";
    const message = checkValidData(emailData, passwordData);
    console.log(userMessage, userNameData);

    setErrorMessage(message);
    if (!isSignInForm) {
      setErrorMessage(userMessage);
      setErrorMessage(message);
    }
    // setErrorMessage(userMessage);

    if (message || userMessage) return;

    // Sign In Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      console.log("hello");

      // createUserWithEmailAndPassword(auth, emailData, passwordData)
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user;
      //     console.log(user);
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     setErrorMessage(errorCode + "-" + errorMessage);
      //   });
    } else {
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-[100vw] h-[100vh]">
        <img
          className="w-full h-full"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black my-36 mx-auto right-0 left-0 w-3/12 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-2 py-4 mx-2 my-4 w-full bg-gray-600 outline-none"
          />
        )}
        <input
          ref={email}
          userMessage
          type="text"
          placeholder="Email Address"
          className="px-2 py-4 mx-2 my-4 w-full bg-gray-600 outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 py-4 mx-2 my-4 w-full bg-gray-600 outline-none"
        />

        <p className="text-red-500 font-bold text-lg  p-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="py-4 px-2 mx-2 my-4 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignIn} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;