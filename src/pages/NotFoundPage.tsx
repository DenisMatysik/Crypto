import { NavLink } from "react-router-dom";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <div className="notFound">
      <div className="notFound__title">
        The page you are looking for can't be found. Go to{" "}
        <NavLink to="/Crypto">main</NavLink>
      </div>
      <div className="notFound__subtitle">404</div>
    </div>
  );
}
