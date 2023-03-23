import coingape from "../../assets/awards/coingape-min.png";
import hackernoon from "../../assets/awards/hackernoon-min.png";
import newbtc from "../../assets/awards/newbtc-min.png";
import newsaffinity from "../../assets/awards/newsaffinity-min.png";
import leaf from "../../assets/awards/leaf.png";
import stars from "../../assets/awards/stars.png";
import s from "./style.module.scss";

export const Awards = () => {
  return (
    <section className={s.awards}>
      <h2 className={s.awardsTitle}>Awards</h2>
      <ul className={s.awardsList}>
        <li className={s.awardsItem}>
          <img src={leaf} alt={leaf} className={s.leaf} />
          <img src={stars} alt={stars} className={s.stars} />
          <img src={newbtc} alt={newbtc} className={s.logo} />
          <p className={s.text}>2022</p>
        </li>
        <li className={s.awardsItem}>
          <img src={leaf} alt={leaf} className={s.leaf} />
          <img src={stars} alt={stars} className={s.stars} />
          <img src={coingape} alt={coingape} className={s.logo} />
          <p className={s.text}>2021</p>
        </li>
        <li className={s.awardsItem}>
          <img src={leaf} alt={leaf} className={s.leaf} />
          <img src={stars} alt={stars} className={s.stars} />
          <img src={newsaffinity} alt={newsaffinity} className={s.logo} />
          <p className={s.text}>2020</p>
        </li>
        <li className={s.awardsItem}>
          <img src={leaf} alt={leaf} className={s.leaf} />
          <img src={stars} alt={stars} className={s.stars} />
          <img src={hackernoon} alt={hackernoon} className={s.logo} />
          <p className={s.text}>2019</p>
        </li>
      </ul>
    </section>
  );
};
