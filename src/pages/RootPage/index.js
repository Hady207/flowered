import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthSelectors from "../Authentication/selectors";
import { LoginActions } from "../Authentication/reducer";
import Navbar from "../../components/Navbar";
import Routes from "../../routes";

const RootPage = () => {
  const { userProfile } = useSelector(AuthSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = window.localStorage.getItem("userProfile");
    if (user) {
      dispatch(LoginActions?.userSignIn(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <>
      {userProfile && <Navbar />}
      <Routes />
    </>
  );
};

export default RootPage;
