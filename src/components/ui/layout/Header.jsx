import { PackageSearch } from "lucide-react";
import { Banana } from "lucide-react";
import { Info } from "lucide-react";
import { House } from "lucide-react";
import { NavLink } from "react-router";
import DropDown from "../../pages/cosepiccole/DropDown";

const pages = [
  { id: 1, text: <House />, path: "/" },
  { id: 2, text: <Info />, path: "/about-us" },
  { id: 3, text: <PackageSearch />, path: "/products" },
];

export default function Header() {
  return (
    <header className="bg-body-secondary px-1 py-2 d-flex justify-content-around align-items-center">
      <h1 className="my-0">
        <Banana /> Welcome "<code>React Routing</code>"!
      </h1>
      <ul className="d-flex align-items-center gap-2 list-unstyled mb-0 p-0">
        {pages.map((item) => (
          <li key={item.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black" : "text-muted"
              }
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <DropDown />
        </li>
      </ul>
    </header>
  );
}
