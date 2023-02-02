import "./styles.scss";
import logo from "../../assets/svg/logo-tropa-digital.png";
import { House, AddressBook, TrendUp } from "phosphor-react";

import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="nav">
      <a href="/home">
        <img src={logo} alt="Logo Tropa Digital" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/home" className="nav__link active">
            <House size={24} weight="fill" />
            Ìnicio
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            <AddressBook size={24} />
            Contatos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/report" className="nav__link">
            <TrendUp size={24} />
            Relatórios
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            <AddressBook size={24} />
            Contatos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            <AddressBook size={24} />
            Contatos
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            <AddressBook size={24} />
            Contatos
          </Link>
        </li>
      </ul>
    </aside>
  );
}
