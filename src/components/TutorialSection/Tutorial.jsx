import React from "react";
import Image from "next/image";
import style from "./Tutorial.module.scss";
import HowPic from "../../assets/png/how.png";
import { useMediaQuery } from "@mui/material";

const Tutorial = () => {
  const isTabletMax = useMediaQuery("(min-width:1100px)");

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Как происходит оформление:</h2>
      <div className={style.blocks}>
        {isTabletMax && (
          <div>
            <Image src={HowPic} />
          </div>
        )}
        <div className={style.steps}>
          <div className={style.step}>
            <div>1</div>{" "}
            <p>
              Вы <span>оставляете заявку</span> на сайте, через Telegram или по
              телефону
            </p>
          </div>
          <div className={style.step}>
            <div>2</div>{" "}
            <p>
              Наш{" "}
              <span>менеджер предлагает Вам актуальные варианты банков</span>{" "}
              где есть квоты на открытие счетов и банковских карт
            </p>
          </div>
          <div className={style.step}>
            <div>3</div>{" "}
            <p>
              Вы <span>определяетесь со страной, банком и тарифным планом</span>
            </p>
          </div>
          <div className={style.step}>
            <div>4</div>{" "}
            <p>
              <span>Делаете нотариально заверенную доверенность</span> на нашего
              менеджера и предоставляете дополнительные документы при
              необходимости
            </p>
          </div>
        </div>
        <div className={style.steps}>
          <div className={style.step}>
            <div>5</div>{" "}
            <p>
              <span>Вносите предоплату 15%</span>
            </p>
          </div>
          <div className={style.step}>
            <div>6</div>{" "}
            <p>
              Мы <span>открываем</span> Вам{" "}
              <span>счет, выпускаем банковскую</span> карту{" "}
              <span>и сим-карту</span> местного оператора связи
            </p>
          </div>
          <div className={style.step}>
            <div>7</div>{" "}
            <p>
              Присылаем Вам фотографию Вашей карты,{" "}
              <span>Вы вносите остаточный платеж 70%</span>
            </p>
          </div>
          <div className={style.step}>
            <div>8</div>{" "}
            <p>
              <span className={style.lastStep}>
                Отправляем Вам банковскую карту, сим-карту и оригинал
                доверенности курьерской службой.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={style.btn}>
        {" "}
        <button>Оставить заявку</button>
      </div>
      <div className={style.footer}>
        <h2>Банки с которыми мы работаем</h2>
        <p>
          Список банков постоянно пополняется, но из-за большого количества
          обращений, имеются ограничения по квотам для граждан Российской
          Федерации.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
