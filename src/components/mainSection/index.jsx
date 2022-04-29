import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Logo from "../../assets/svg/logo-icon.svg";
import TelegramIcon from "../../assets/svg/telegram-icon.svg";
import TopImage from "../../assets/png/top-img.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ArrowRight from "../../assets/svg/arrowRight-icon.svg";

const MainSection = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <header>
          <div>
            <a href="#">
              <h2>EasyVisaCard</h2>
            </a>
          </div>
          <div className={style.navs}>
            <a href="tel:">(Номер телефона)</a>
            <span className={style.divider} />
            <a href="mailto:easyvisacard@gmail.com">easyvisacard@gmail.com</a>
            <span className={style.divider} />
            <a target={"_blank"} rel="noreferrer" href="https://t.me/easyvisacardbot">
              <Image width={"24px"} src={TelegramIcon} />
            </a>
          </div>
        </header>

        <div className={style.block}>
          <h1>
            Дистанционно открываем счета и банковские карты в банках Кыргызстана
          </h1>
          <h3>БЫСТРО, ЛЕГАЛЬНО, НАДЕЖНО</h3>
          <Image src={TopImage} />
        </div>
      </div>
      <div className={style.radioBlock}>
        <div className={style.radioWrapper}>
          <div className={style.first}>
            <div className={style.second}>
              <h3>
                Денежные переводы в любой валютепо всему миру из России и в
                Россию в одном приложении.
              </h3>
            </div>
          </div>
        </div>
        <div className={style.tarifs}>
          <a href="#">
            <span className={style.tarifBlock}>
              <h3>Ознакомиться с тарифами</h3>
              <Image src={ArrowRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
