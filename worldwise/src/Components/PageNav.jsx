import { NavLink } from "react-router-dom";
export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Procduct</NavLink>
        </li>
      </ul>
    </nav>
  );
}
