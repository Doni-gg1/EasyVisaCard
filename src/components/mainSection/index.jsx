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
            <Image src={Logo} />
          </div>
          <div className={style.navs}>
            <a href="tel:+7 (495) 023-84-28">+7 (495) 023-84-28</a>
            <span className={style.divider} />
            <a href="mailto:hello@people-pay.ru">hello@people-pay.ru</a>
            <span className={style.divider} />
            <a href="https://t.me/peoplepay_n/">
              <Image width={"24px"} src={TelegramIcon} />
            </a>
          </div>
        </header>

        <div className={style.block}>
          <h1>
            Дистанционно открываем счета и банковские карты в иностранных банках
          </h1>
          <h3>БЫСТРО, ЛЕГАЛЬНО, НАДЕЖНО</h3>
          <Image src={TopImage} />
        </div>
      </div>
      <div className={style.radioBlock}>
        <div className={style.radioWrapper}>
          <h3>В какой стране Вы хотите получить банковскую карту?</h3>
          <FormControl sx={{ display: "grid", rowGap: "60px" }}>
            <RadioGroup
              sx={{ color: "white" }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="KG"
                control={<Radio />}
                label="Киргизия"
              />
            </RadioGroup>
            <button className={style.nextButton}>
              Далее
              <Image src={ArrowRight} />
            </button>
          </FormControl>
        </div>
        <div className={style.tarifs}>
          <span className={style.tarifBlock}>
            <h3>Ознакомиться с тарифами</h3>
            <Image src={ArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
