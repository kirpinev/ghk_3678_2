import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";

import circle from "../../assets/credits-game/circle_white.svg";
import heroImage from "../../assets/credits-game/hero_image.png";

import styles from "./index.module.css";

export const CreditsGameHeroBanner = () => (
  <div className={styles.layout}>
    <div className={styles.content}>
      <Typography.TitleResponsive
        tag="h1"
        view="large"
        color="primary"
        weight="bold"
      >
        Выиграйте лучшие условия по кредиту
      </Typography.TitleResponsive>
      <Gap size={16} />
      <img src={heroImage} alt="Картинка со смайликами" />
    </div>
    <img
      className={styles.image}
      src={circle}
      alt="Картинка крутящегося круга"
    />
  </div>
);
