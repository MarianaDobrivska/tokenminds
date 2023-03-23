import advantage1 from "../../assets/advantage/advantage1.png";
import advantage2 from "../../assets/advantage/advantage2.png";
import advantage3 from "../../assets/advantage/advantage3.png";
import s from "./style.module.scss";

export const Advantages = () => {
  return (
    <section className={s.section}>
      <div className={s.advantages}>
        <h2 className={s.advantagesTitle}>Why Choose us?</h2>
        <p className={s.advantagesSubtitle}>
          Trusted by clients all across the globe
        </p>
        <ul className={s.advantagesList}>
          <li className={s.advantagesListItem}>
            <img src={advantage1} alt={advantage1} className={s.cardImage} />
            <h3 className={s.cardTitle}>One-Stop Service Provider</h3>
            <p className={s.cardText}>
              No need for multiple service providers, your needs from marketing
              to development to token sale strategy are all covered.
            </p>
          </li>
          <li className={s.advantagesListItem}>
            <img src={advantage2} alt={advantage2} className={s.cardImage} />
            <h3 className={s.cardTitle}>
              Industry <span>Leader</span>
            </h3>
            <p className={s.cardText}>
              Leading Crypto/NFT agency with recognition from Hackernoon and
              Coingape, with a track record since 2017.
            </p>
          </li>
          <li className={s.advantagesListItem}>
            <img src={advantage3} alt={advantage3} className={s.cardImage} />
            <h3 className={s.cardTitle}>Transparent Pricing</h3>
            <p className={s.cardText}>
              Helping you with battle-tested solutions with the most effective
              and economical results for your business
            </p>
          </li>
        </ul>
      </div>
      <div className={s.achievement}>
        <h2 className={s.achievementTitle}>Our Achievement</h2>
        <ul className={s.achievementList}>
          <li className={s.achievementListItem}>
            <p>Credential</p>
            <p>Certified Expert</p>
          </li>
          <li className={s.achievementListItem}>
            <p>Amount Raised</p>
            <p>$250MM</p>
          </li>
          <li className={s.achievementListItem}>
            <p>Project Helped</p>
            <p>100+</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
