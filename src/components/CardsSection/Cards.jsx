import React from "react";
import Image from "next/image";
import style from "./Cards.module.scss";
import { Box } from "@mui/material";
import MarkIcon from "../../assets/svg/Mark-icon.svg";

const list1 = [
  "VISA и MasterCard работают по всему миру без каких-либо ограничений",
  "Банковские карты могут быть привязаны к Apple pay/Google pay",
  "Карты иностранных банков принимаются к оплате всеми европейскими и американскими online-сервисами",
  "Удобно пополнять счета из России",
  "Сохранность Ваших сбережений в случае наступления экономических и политических рисков в РФ.",
];

const list2 = [
  "Мультивалютный счет в иностранном банке (доллары, евро и местная валюта)",
  "Активированная дебетовая карта, привязанная к любой выбранной Вами валюте",
  "Банк-клиент (веб и мобильное приложение)",
  "Активированная местная сим-карта (понадобится для регистрации в сервисах, попавших под санкции).",
];
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.cardBlock}>
        <Box sx={{ background: "#0090ff" }}>
          <h3>
            Расплачивайтесь банковскими картами в путешествиях без ограничений
          </h3>
          <p>
            Банковские карты VISA и MasterCard, выпущенные за пределами
            Российской Федерации, принимаются за границей без сбоев. Совершайте
            покупки в offline магазинах и не переживайте об ограничениях.
          </p>
        </Box>
        <Box sx={{ background: "#00dfbd" }}>
          <h3>Оплачивайте покупки через Apple Pay и Google Pay</h3>
          <p>
            Вернитесь к привычному способу оплаты товаров и услуг как в пределах
            Российской Федерации, так и за ее пределами. Ограничения на
            использование Apple Pay и Google Pay не распространяются на карты
            VISA и MasterCard, выпущенные зарубежными банками.
          </p>
        </Box>
      </div>
      <div className={style.secondCardsBlock}>
        <div className={style.cardBlock}>
          <Box className={style.background} sx={{ backgroundColor: "#1b1a22" }}>
            <h3>В чем преимущества счета в иностранном банке:</h3>
            {list1.map((item, index) => (
              <p key={index}>
                <Image src={MarkIcon} />
                {item}
              </p>
            ))}
          </Box>
          <Box className={style.secondCardsBlock_2} sx={{ background: "#fff" }}>
            <h3>Что Вы получаете:</h3>
            {list2.map((item, index) => (
              <p key={index}>
                <Image src={MarkIcon} />
                {item}
              </p>
            ))}
            <a href={"#"}>Оставить заявку</a>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Cards;
