import React from "react";
import style from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={style.block}>
      <h3>
        Консалтинговая компания <span className={style.logoText}>PeoplePay</span> оперативно и легально открывает
        банковские карты со счетами <span>в долларах, евро и местной валюте на граждан
        Российской Федерации</span> по нотариально заверенной доверенности <span>в различных</span>
        иностранных банках.
      </h3>

      <p>
        Список банков постоянно пополняется, но <span>из-за большого количества обращений, имеются <br/>
        ограничения по квотам для граждан Российской Федерации.</span>
      </p>

    </div>
  );
};

export default AboutUs;
