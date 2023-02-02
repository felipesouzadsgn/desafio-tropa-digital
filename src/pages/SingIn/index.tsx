import "./styles.scss";
import logo from "../../assets/svg/logo-tropa-digital.png";
import imgPosition from "../../assets/img/img-position.png";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  return (
    <section className="signin">
      <div className="signin__container">
        <div className="signin__content">
          <div className="signin__content-left">
            <a href="/" className="signin__logo">
              <img className="signin__logo-img" src={logo} alt="" />
            </a>
            <h2 className="signin__title">
              Bem vindo ao <span> Painel </span>
            </h2>
            <form className="signin__form">
              <input
                className="signin__form-input"
                placeholder="Digite seu e-email"
                type="text"
              />
              <input
                className="signin__form-input"
                type="password"
                placeholder="Digite sua senha"
              />
              <button
                onClick={() => navigate("/home")}
                className="signin__form-btn"
              >
                Acessar
              </button>
            </form>
          </div>
          <div className="signin__content-right">
            <img className="signin__content-img" src={imgPosition} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
