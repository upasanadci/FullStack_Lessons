import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  console.log("child is:", children);
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Protected;
