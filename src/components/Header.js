import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [shouldSignout, setShoudlSignout] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="fixed w-screen z-50 px-4 lg:px-8 pb-40 bg-gradient-to-b from-black flex justify-between">
      <div>
        <img
          className="w-10 lg:w-44 aspect-[6/5] h-auto"
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex items-center px-2">
          <div className="flex flex-col items-end">
            <img
              onClick={() => setShoudlSignout(!shouldSignout)}
              className="w-8 h-8 lg:w-12 lg:h-12"
              alt="user"
              src={
                user?.photoURL ||
                "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png"
              }
            />
            {shouldSignout && (
              <button
                onClick={handleSignOut}
                className="lg:font-bold text-white"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
