import React from "react";
import Image from "next/image";
import style from "./Services.module.scss";
import NetflixPic from "../../assets/png/Netflix.png";
import SteamPic from "../../assets/png/Steam.png";
import SpotifyPic from "../../assets/png/Spotify.png";
import AppStorePic from "../../assets/png/AppStore.png";
import PokerStarPic from "../../assets/png/PokerStar.png";
import BinancePic from "../../assets/png/Binance.png";
import Background from "../../assets/svg/Bacgkground.svg";

const Services = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.firstBlock}>
        <h3>
          Получите доступ к европейским и американским online сервисам, попавшим
          под санкции
        </h3>
        <div className={style.brands}>
          <Image src={NetflixPic} />
          <Image src={SteamPic} />
          <Image src={SpotifyPic} />
          <Image src={AppStorePic} />
          <Image src={PokerStarPic} />
          <Image src={BinancePic} />
        </div>
        <p>
          Карты иностранных банков принимаются к оплате всеми европейскими и
          американскими online-сервисами без ограничений. Продлевайте
          действующие аккаунты или оплачивайте новые.
        </p>
        <button>Оставить заявку</button>
      </div>
      <div className={style.secondBlock}>
        <Image src={Background} />
        <div className={style.content}>
          <h3>
            Храните свои сбережения в долларах и евро в надежных иностранных
            банках
          </h3>
          <p>
            <span>Будьте уверены в сохранности своих средств</span> и управляйте операциями
            через online-банк. <span>При необходимости конвертируйте по разумным
            курсам</span> или совершайте переводы online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
