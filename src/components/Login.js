import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVTAR } from "../utils/constants.js";
import { LOGIN_BG_URL } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const emailData = email.current.value;
    const passwordData = password.current.value;
    const nameData = username?.current?.value;

    const message = checkValidData(emailData, passwordData);

    setErrorMessage(message);

    if (message) return;


    // Sign In Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic

      createUserWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameData,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-[100vw] h-[100vh]">
        <img className="w-full h-full" alt="logo" src={LOGIN_BG_URL} />
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
            ref={username}
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
