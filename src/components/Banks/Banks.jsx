import React from "react";
import Image from "next/image";
import style from "./Banks.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UZ from "../../assets/png/UZ.png";
import KG from "../../assets/png/KG.jpeg";
import GE from "../../assets/png/GE.jpeg";
import RS from "../../assets/png/RS.jpeg";
import { Box } from "@mui/material";
import MarkIcon from "../../assets/svg/Mark-icon.svg";
import { accGE, accKG, accRS, accUZ } from "../../constants/constants";
import Plus from "../../common/components/Plus/Plus";

const theads = ["Банки", "Стоимость услуги", "Необходимые документы", "Сроки"];

const Banks = () => {
  const [expandedUZ, setExpandedUZ] = React.useState(false);
  const [expandedKG, setExpandedKG] = React.useState(false);
  const [expandedGE, setExpandedGE] = React.useState(false);
  const [expandedRS, setExpandedRS] = React.useState(false);

  return (
    <div className={style.wrapper}>
      <Accordion
        className={style.accordion}
        sx={{ padding: "40px", borderRadius: "30px", border: "none" }}
        expanded={expandedUZ}
        onChange={() => setExpandedUZ(!expandedUZ)}
      >
        <AccordionSummary
          className={style.wrappHeaderAcc}
          expandIcon={<Plus expanded={expandedUZ} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexShrink: 0,
              justifyContent: "flex-start",
            }}
          >
            <Image width={60} height={30} src={UZ} />
            <span className={`${style.nameOfCountry} titleAcc`}>Узбекистан</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={style.accordion}>
          <Box className={style.detailHeader}>
            {theads.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className={style.detailBody}>
            {accUZ.map(({ id, logoBank, url, price, docks, deadLine }) => (
              <>
                <div key={id} className={style.detail}>
                  <div className={style.bank}>
                    <Image src={logoBank} />
                    <a href={url}>{url}</a>
                  </div>
                  <h4 className={style.price}>{price}</h4>

                  <div className={style.docks}>
                    {docks.map((item, index) => (
                      <p key={index}>
                        <Image src={MarkIcon} />
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className={style.deadLine}>{deadLine}</p>
                </div>
                {accUZ[accUZ.length - 1].id !== id && (
                  <Box sx={{ borderTop: "1px dotted #000" }}></Box>
                )}
              </>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={style.accordion}
        sx={{ padding: "40px", borderRadius: "30px" }}
        expanded={expandedKG}
        onChange={() => setExpandedKG(!expandedKG)}
      >
        <AccordionSummary
          className={style.wrappHeaderAcc}
          expandIcon={<Plus expanded={expandedKG} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexShrink: 0,
              justifyContent: "flex-start",
            }}
          >
            <Image width={60} height={30} src={KG} />
            <span className={`${style.nameOfCountry} titleAcc`}>Киргизия</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={style.detailHeader}>
            {theads.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className={style.detailBody}>
            {accKG.map(
              ({ id, logoBank, url, price, docks, deadLine, helperText }) => (
                <>
                  <div key={id} className={style.detail}>
                    <div className={style.bank}>
                      <Image src={logoBank} />
                      <a href={url}>{url}</a>
                    </div>
                    <div className={style.price}>
                      <h4>{price}</h4>
                      <p>{helperText}</p>
                    </div>

                    <div className={style.docks}>
                      {docks.map((item, index) => (
                        <p key={index}>
                          <Image src={MarkIcon} />
                          {item}
                        </p>
                      ))}
                    </div>
                    <p className={style.deadLine}>{deadLine}</p>
                  </div>
                  {accKG[accKG.length - 1].id !== id && (
                    <Box sx={{ borderTop: "1px dotted #000" }}></Box>
                  )}
                </>
              )
            )}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={style.accordion}
        sx={{ padding: "40px", borderRadius: "30px" }}
        expanded={expandedGE}
        onChange={() => setExpandedGE(!expandedGE)}
      >
        <AccordionSummary
          className={style.wrappHeaderAcc}
          expandIcon={<Plus expanded={expandedGE} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexShrink: 0,
              justifyContent: "flex-start",
            }}
          >
            <Image width={60} height={30} src={GE} />
            <span className={`${style.nameOfCountry} titleAcc`}>Грузия</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={style.detailHeader}>
            {theads.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className={style.detailBody}>
            {accGE.map(({ id, logoBank, url, price, docks, deadLine }) => (
              <>
                <div key={id} className={style.detail}>
                  <div className={style.bank}>
                    <Image src={logoBank} />
                    <a href={url}>{url}</a>
                  </div>
                  <h4 className={style.price}>{price}</h4>

                  <div className={style.docks}>
                    {docks.map((item, index) => (
                      <p key={index}>
                        <Image src={MarkIcon} />
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className={style.deadLine}>{deadLine}</p>
                </div>
                {accGE[accGE.length - 1].id !== id && (
                  <Box sx={{ borderTop: "1px dotted #000" }}></Box>
                )}
              </>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ padding: "40px", borderRadius: "30px" }}
        expanded={expandedRS}
        onChange={() => setExpandedRS(!expandedRS)}
      >
        <AccordionSummary
          className={style.wrappHeaderAcc}
          expandIcon={<Plus expanded={expandedRS} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexShrink: 0,
              justifyContent: "flex-start",
            }}
          >
            <Image width={60} height={30} src={RS} />
            <span className={`${style.nameOfCountry} titleAcc`}>
              Сербия
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={style.detailHeader}>
            {theads.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className={style.detailBody}>
            {accRS.map(({ id, logoBank, url, price, docks, deadLine }) => (
              <>
                <div key={id} className={style.detail}>
                  <div className={style.bank}>
                    <Image src={logoBank} />
                    <a href={url}>{url}</a>
                  </div>
                  <h4 className={style.price}>{price}</h4>

                  <div className={style.docks}>
                    {docks.map((item, index) => (
                      <p key={index}>
                        <Image src={MarkIcon} />
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className={style.deadLine}>{deadLine}</p>
                </div>
                {accRS[accRS.length - 1].id !== id && (
                  <Box sx={{ borderTop: "1px dotted #000" }}></Box>
                )}
              </>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Banks;
