import LogoIcon from "../../images/svg/logo.svg";
import { Logo, LogoName, LogoText, LogoSpan } from "./Footer.styled";
import ContactsInf from "../../data/contactsData.json";

export const Footer = () => {
  return (
    <footer>
      <Logo>
        <img src={`${LogoIcon}`} alt="logo" width={31} />
        <LogoName>ecosolution</LogoName>
        <LogoText>
          <LogoSpan>green</LogoSpan>ergy <br /> for life
        </LogoText>
      </Logo>
      <a href="#main-section">{/* <ArrowIcon aria-label="arrow up" /> */}</a>
      <ul>
        <li>
          <a
            href=" "
            target="_blank"
            rel="noreferrer"
            aria-label="facebook link"
          ></a>
        </li>
        <li>
          <a
            href=" "
            target="_blank"
            rel="noreferrer"
            aria-label="instagram link"
          ></a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href={`http://maps.google.com/?q=:${ContactsInf.address}`}
            target="_blank"
            rel="noreferrer"
          >
            {ContactsInf.address}
          </a>
        </li>
        <li>
          <a href={`mailto:${ContactsInf.email}`}> {ContactsInf.email}</a>
        </li>
      </ul>
      <p>ecosolution &#169; 2023</p>
    </footer>
  );
};
