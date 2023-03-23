import newsbtc from "../../assets/hero/newbtc-min.png";
import coingape from "../../assets/hero/coingape-min.png";
import hackernoon from "../../assets/hero/hackernoon-min.png";
import newsaffinity from "../../assets/hero/newsaffinity-min.png";
import s from "./style.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.contentWrapper}>
        <h1 className={s.title}>
          Web3 Agency Making Dream Projects a Reality!
        </h1>

        {/* <div className={s.contentWrapper}> */}
        <form className={s.form}>
          <h2 className={s.formTitle}>Collaborate with TokenMinds</h2>
          <label className={s.formLabel}>
            Name
            <input />
          </label>
          <label className={s.formLabel}>
            Email
            <input />
          </label>
          <label className={s.formLabel}>
            Company/projects name
            <input />
          </label>
          <p className={s.formText}>TokenMinds’ Minimum Budget Is $3,000</p>
          <button className={s.formBtn}>Request Free Consultaion</button>
        </form>
        <ul className={s.clientsList}>
          <li className={s.logo}>
            <img src={hackernoon} alt="hackernoon" />
          </li>
          <li className={s.logo}>
            <img src={newsbtc} alt="newsbtc" />
          </li>
          <li className={s.logo}>
            <img src={coingape} alt="coingape" />
          </li>
          <li className={s.logo}>
            <img src={newsaffinity} alt="newsaffinity" />
          </li>
        </ul>
      </div>
    </section>
  );
};
