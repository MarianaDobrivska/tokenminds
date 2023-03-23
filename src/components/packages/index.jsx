import data from "../../assets/packages/packages.json";
import s from "./style.module.scss";

export const Packages = () => {
  return (
    <section className={s.packages}>
      <h2 className={s.packagesTitle}>Our Optimized Packages</h2>
      <ul className={s.packagesCardsList}>
        {data.articles.map((article) => (
          <li key={Math.random()} className={s.packagesCard}>
            <h3 className={s.cardTitle}>{article.title}</h3>
            <p className={s.cardPrice}>{article.price}</p>
            <ul className={s.cardList}>
              {article.text.map((el) => (
                <li key={Math.random()} className={s.cardListItem}>
                  {el}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
