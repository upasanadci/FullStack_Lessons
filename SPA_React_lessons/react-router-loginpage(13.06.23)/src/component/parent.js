import { Outlet, Link } from "react-router-dom";

function Parent() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/Login">Home</Link>
          <Link to="/ClearInput">ClearInput</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Parent;
