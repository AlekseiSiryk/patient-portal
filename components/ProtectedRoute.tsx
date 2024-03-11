import { useSelector } from "react-redux";
import React, { PropsWithChildren } from "react";
import { Redirect } from "expo-router";
import { RootState } from "@/store";

const ProtectedRoute = (props: PropsWithChildren) => {
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  return isAuthorized ? props.children : <Redirect href={"/login"} />;
};

export default ProtectedRoute;
