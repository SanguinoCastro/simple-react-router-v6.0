import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container">
      <Outlet />

      <footer>Éste es el footer</footer>
    </div>
  );
};

export default LayoutPublic;
