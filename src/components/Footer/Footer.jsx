import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../assets/svg/creativeTeam-icon.svg";
import TelegramIcon from "../../assets/svg/telegram-icon.svg";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <svg
        width={"48px"}
        height={"38px"}
        className="footer__logo"
        viewBox="0 0 48 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.7582 0C23.5337 0 18.8082 2.1263 15.3911 5.55096C21.9052 6.4918 26.9226 12.0804 26.9226 18.845C26.9226 25.6097 21.9146 31.2077 15.3911 32.1391C18.8082 35.5638 23.5337 37.6901 28.7582 37.6901C39.1694 37.6901 47.6133 29.2507 47.6133 18.845C47.6133 8.43934 39.1694 0 28.7582 0Z"
          fill="#00DFBD"
        ></path>
        <path
          d="M15.391 5.55141C14.7603 5.45733 14.1202 5.40088 13.4612 5.40088C6.0246 5.40088 0 11.4223 0 18.8549C0 26.2875 6.0246 32.3089 13.4612 32.3089C14.1202 32.3089 14.7603 32.2431 15.391 32.1584C11.9927 28.7526 9.89352 24.0483 9.89352 18.8643C9.89352 13.6803 11.9927 8.97607 15.391 5.57023V5.55141Z"
          fill="#0090FF"
        ></path>
        <path
          d="M26.9132 18.8449C26.9132 12.0708 21.9052 6.48221 15.3817 5.55078C11.9835 8.95663 9.88428 13.6608 9.88428 18.8449C9.88428 24.0289 11.9835 28.7331 15.3817 32.1389C21.8958 31.1981 26.9132 25.6095 26.9132 18.8449Z"
          fill="#0079C5"
        ></path>
      </svg>
      <div className={style.content}>
        <div className={style.navs}>
          <a href="tel:+7 (495) 023-84-28">+7 (495) 023-84-28</a>
          <span className={style.divider} />
          <a href="mailto:easyvisacard@gmail.com">easyvisacard@gmail.com</a>
          <span className={style.divider} />
          <a target={"_blank"} rel="noreferrer" href="https://t.me/easyvisacardbot">
            <Image width={"24px"} src={TelegramIcon} />
          </a>
          <span className={style.divider} />
          <a target={"_blank"} rel="noreferrer" href="https://t.me/easyvisacardbot">
            Оставить заявку
          </a>
        </div>
      </div>
      <span className={style.thirdBlock}>
        <p>создание сайтов —</p>{" "}
        <svg
          width="121"
          height="14"
          viewBox="0 0 121 14"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mainGrandient">
              <stop offset="0%" stopColor="#00DFBD"></stop>
              <stop offset="100%" stopColor="#0090FF"></stop>
            </linearGradient>
          </defs>
          <path d="M55.2453 3.2334L52.6275 10.433L50.0098 3.2334H47.3047L51.2168 13.9933H54.0383L57.9526 3.2334H55.2453Z"></path>
          <path
            d="M1.60953 4.77116C1.08583 5.25789 0.671453 5.85169 0.394164 6.51276C0.116874 7.17384 -0.0169237 7.88694 0.00171052 8.60431C-0.0154106 9.32648 0.118933 10.0442 0.395981 10.7105C0.67303 11.3768 1.08655 11.9768 1.60953 12.4713C2.68216 13.4769 4.2116 13.9865 6.15308 13.9865H7.48099V11.4657H6.15308C3.90034 11.4657 2.6105 10.4262 2.6105 8.61334C2.6105 6.80048 3.90034 5.76102 6.15308 5.76102H7.48099V3.2334H6.15308C4.20041 3.2334 2.67096 3.75199 1.60953 4.77116Z"
            fill=""
          ></path>
          <path
            d="M31.2984 3.229C29.8813 3.23079 28.5227 3.79842 27.5207 4.80739C26.5186 5.81636 25.9549 7.1843 25.9531 8.6112C25.9543 10.0385 26.5178 11.407 27.5199 12.4165C28.522 13.4259 29.8809 13.9939 31.2984 13.9957H36.6302V8.30905C36.5535 6.93695 35.9586 5.64633 34.9672 4.70178C33.9758 3.75722 32.6632 3.23029 31.2984 3.229ZM34.2095 8.6112V11.5424H31.2984C30.5263 11.5424 29.7858 11.2336 29.2399 10.6839C28.694 10.1342 28.3873 9.38861 28.3873 8.6112C28.3873 7.83379 28.694 7.08822 29.2399 6.53851C29.7858 5.98879 30.5263 5.67997 31.2984 5.67997C32.0704 5.67997 32.8109 5.98879 33.3568 6.53851C33.9028 7.08822 34.2095 7.83379 34.2095 8.6112Z"
            fill="#"
          ></path>
          <path
            d="M118.681 10.1714C118.177 10.1714 117.694 10.3728 117.338 10.7314C116.982 11.09 116.782 11.5764 116.782 12.0835C116.782 12.5906 116.982 13.0769 117.338 13.4355C117.694 13.7941 118.177 13.9955 118.681 13.9955H120.575V11.9662C120.546 11.4803 120.334 11.0239 119.982 10.6903C119.629 10.3567 119.164 10.1711 118.681 10.1714Z"
            fill=""
          ></path>
          <path
            d="M11.7313 3.86423L11.5947 4.04235L11.1827 3.21484H8.94336V13.995H11.4872V6.76389C11.4658 6.48748 11.5517 6.21347 11.7268 5.99951C11.8903 5.82815 12.1747 5.74472 12.571 5.74472H14.0467V3.21484H13.2182C12.5419 3.22837 12.0582 3.44032 11.7313 3.86423Z"
            fill=""
          ></path>
          <path
            d="M42.6674 5.73395V3.20857H40.6206V0H38.0566V10.9493C38.0578 11.755 38.3762 12.5275 38.9421 13.0972C39.5079 13.667 40.275 13.9876 41.0752 13.9888H42.6674V11.4341H41.5298C41.2885 11.4335 41.0572 11.3365 40.8868 11.1645C40.7164 10.9925 40.6206 10.7594 40.6206 10.5164V5.73395H42.6674Z"
            fill=""
          ></path>
          <path
            d="M46.6083 3.25146H44.0801V13.9933H46.6083V3.25146Z"
            fill=""
          ></path>
          <path
            d="M114.003 4.45534C113.162 3.66005 112.048 3.22227 110.894 3.23324C109.737 3.21913 108.619 3.6581 107.777 4.45759L107.737 4.49818L107.694 4.45534C106.854 3.65884 105.74 3.22087 104.586 3.23324C103.941 3.23019 103.303 3.36626 102.714 3.63233V3.25127H100.186V13.9954H102.714V8.05174C102.741 6.52299 103.399 5.67969 104.586 5.67969C105.773 5.67969 106.481 6.57034 106.487 8.12164V13.9954H109.011V8.11712C109.011 6.53877 109.683 5.67743 110.888 5.67743C112.092 5.67743 112.789 6.57936 112.789 8.13742V13.9999H115.313V8.13742C115.319 6.5027 114.876 5.26255 114.003 4.45534Z"
            fill=""
          ></path>
          <path
            d="M76.0753 5.73395V3.20857H74.0286V0H71.4668V10.9493C71.4674 11.7548 71.7853 12.5272 72.3508 13.0971C72.9163 13.6669 73.6831 13.9876 74.4832 13.9888H76.0753V11.4341H74.94C74.6984 11.4335 74.467 11.3366 74.2962 11.1646C74.1254 10.9927 74.0292 10.7596 74.0286 10.5164V5.73395H76.0753Z"
            fill=""
          ></path>
          <path
            d="M64.8972 10.9223C64.4507 11.2768 63.9099 11.4902 63.3431 11.5356H63.1035C62.5897 11.5338 62.0855 11.396 61.6413 11.136C61.1972 10.876 60.8288 10.5029 60.5731 10.0542H68.2494L68.274 9.95722C68.3798 9.54002 68.4354 9.11155 68.4397 8.68101V8.61336V8.04515L68.4218 8.06094C68.3512 7.37885 68.1513 6.71674 67.8329 6.11053L67.8217 6.08799C67.806 6.05642 67.7881 6.02486 67.7702 5.99555L67.7388 5.94142C67.7226 5.9089 67.7047 5.8773 67.6851 5.84672L67.6538 5.79487C67.1797 5.0105 66.5126 4.3626 65.717 3.91386C64.9215 3.46513 64.0243 3.23077 63.1124 3.23342C62.996 3.23342 62.8751 3.23341 62.7317 3.24919C61.3993 3.35326 60.1531 3.95352 59.2364 4.93282C58.3197 5.91212 57.7983 7.20021 57.7739 8.54572V8.60885V9.18156L57.7941 9.16579C57.8636 9.84952 58.0636 10.5133 58.383 11.1207V11.1387L58.4368 11.2334L58.4681 11.2898C58.4838 11.3214 58.5017 11.3507 58.5196 11.38L58.551 11.4341C59.0257 12.2184 59.6933 12.8661 60.4891 13.3148C61.285 13.7635 62.1824 13.998 63.0945 13.9956C63.2087 13.9956 63.3296 13.9956 63.4752 13.9798C64.645 13.889 65.7529 13.4137 66.6281 12.6269L64.9084 10.8952L64.8972 10.9223ZM62.8616 5.69114H63.1035C63.697 5.6886 64.277 5.8701 64.7646 6.21097C65.2521 6.55184 65.6237 7.03557 65.8287 7.59645H60.3738C60.5656 7.07353 60.9015 6.61653 61.3422 6.27906C61.7829 5.94159 62.3099 5.73765 62.8616 5.69114Z"
            fill=""
          ></path>
          <path
            d="M21.4992 10.9223C21.0528 11.2768 20.512 11.4902 19.9452 11.5356H19.7056C19.1918 11.5338 18.6875 11.396 18.2434 11.136C17.7992 10.876 17.4308 10.5029 17.1751 10.0542H24.8515L24.8761 9.95722C24.9818 9.54002 25.0375 9.11155 25.0418 8.68101V8.61336V8.04515L25.0239 8.06094C24.9533 7.37885 24.7534 6.71674 24.435 6.11053V6.08799C24.4193 6.05642 24.4014 6.02486 24.3835 5.99555L24.3544 5.94142C24.3364 5.90985 24.3185 5.87829 24.2984 5.84672L24.267 5.79487C23.793 5.0105 23.1259 4.3626 22.3303 3.91386C21.5347 3.46513 20.6376 3.23077 19.7257 3.23342C19.6093 3.23342 19.4884 3.23341 19.345 3.24919C18.0125 3.35326 16.7664 3.95352 15.8497 4.93282C14.933 5.91212 14.4116 7.20021 14.3872 8.54572V8.60885V9.18156L14.4074 9.16579C14.4769 9.84952 14.6769 10.5133 14.9963 11.1207V11.1387L15.05 11.2334L15.0814 11.2898C15.0971 11.3214 15.115 11.3507 15.1329 11.38L15.1642 11.4341C15.639 12.2184 16.3065 12.8661 17.1024 13.3148C17.8983 13.7635 18.7957 13.998 19.7078 13.9956C19.822 13.9956 19.9317 13.9956 20.0885 13.9798C21.2583 13.889 22.3661 13.4137 23.2414 12.6269L21.5216 10.8952L21.4992 10.9223ZM19.4637 5.69114H19.7056C20.2991 5.6886 20.8791 5.8701 21.3666 6.21097C21.8542 6.55184 22.2257 7.03557 22.4308 7.59645H16.9758C17.1691 7.07443 17.5054 6.61831 17.9458 6.28106C18.3862 5.9438 18.9125 5.73924 19.4637 5.69114Z"
            fill=""
          ></path>
          <path
            d="M93.4098 3.22852C91.9939 3.23209 90.637 3.8005 89.6365 4.80928C88.6359 5.81806 88.0731 7.18498 88.0713 8.61071C88.0725 10.038 88.6359 11.4065 89.638 12.416C90.6402 13.4254 91.999 13.9934 93.4165 13.9952H98.7483V8.30856C98.6716 6.93529 98.0757 5.64369 97.0829 4.69896C96.0901 3.75423 94.7758 3.22808 93.4098 3.22852ZM96.3209 8.61071V11.5419H93.4098C92.6377 11.5419 91.8973 11.2331 91.3513 10.6834C90.8054 10.1337 90.4987 9.38812 90.4987 8.61071C90.4987 7.8333 90.8054 7.08773 91.3513 6.53802C91.8973 5.9883 92.6377 5.67948 93.4098 5.67948C93.7923 5.67918 94.1711 5.75478 94.5245 5.90196C94.878 6.04913 95.1992 6.265 95.4697 6.53722C95.7403 6.80944 95.9549 7.13268 96.1013 7.48846C96.2478 7.84424 96.3231 8.22559 96.3231 8.61071H96.3209Z"
            fill=""
          ></path>
          <path
            d="M83.6106 10.9223C83.1649 11.2768 82.6249 11.4902 82.0587 11.5356H81.8169C81.3034 11.5341 80.7993 11.3964 80.3555 11.1363C79.9116 10.8762 79.5437 10.503 79.2887 10.0542H86.9628L86.9875 9.95721C87.0932 9.54001 87.1488 9.11155 87.1532 8.681V8.61336V8.04514L87.133 8.06093C87.0635 7.37863 86.8635 6.71632 86.5441 6.11052V6.08798C86.5284 6.05642 86.5105 6.02485 86.4926 5.99554L86.4635 5.94142L86.4097 5.84672L86.3784 5.79486C85.9036 5.01061 85.2361 4.36286 84.4402 3.91418C83.6443 3.46549 82.7469 3.23103 81.8348 3.23342C81.7206 3.23342 81.5997 3.2334 81.4541 3.24919C80.1209 3.3508 78.8736 3.95038 77.9568 4.93027C77.0399 5.91015 76.5199 7.19963 76.4985 8.54572V8.60884V9.18156L76.5187 9.16578C76.5882 9.84951 76.7882 10.5133 77.1076 11.1207L77.1188 11.1387C77.1342 11.1713 77.1514 11.2029 77.1703 11.2334L77.2017 11.2898L77.2532 11.38L77.2868 11.4341C77.7608 12.2185 78.4279 12.8664 79.2235 13.3151C80.0191 13.7638 80.9162 13.9982 81.8281 13.9956C81.9445 13.9956 82.0655 13.9956 82.2088 13.9798C83.3787 13.8895 84.4867 13.4141 85.3617 12.6269L83.6419 10.8952L83.6106 10.9223ZM81.575 5.69114H81.8169C82.4105 5.68827 82.9906 5.86965 83.4782 6.21056C83.9659 6.55148 84.3373 7.03538 84.5421 7.59644H79.0872C79.2806 7.0741 79.6172 6.61776 80.058 6.28047C80.4988 5.94319 81.0257 5.73883 81.5773 5.69114H81.575Z"
            fill=""
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default Footer;
