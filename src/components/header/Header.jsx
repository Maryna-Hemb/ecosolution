// import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../images/logo.svg";
import burgerMenuBtn from "../../images/burgerMenu.svg";
import { Modal } from "../modal/Modal";
import {
  HeaderSection,
  Logo,
  LogoName,
  LogoText,
  LogoSpan,
  BurgerMenuBtn,
} from "./Header.styled";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HeaderSection>
      <Logo>
        <img src={`${logo}`} alt="logo" width={31} />
        <LogoName>ecosolution</LogoName>
        <LogoText>
          <LogoSpan>green</LogoSpan>ergy <br /> for life
        </LogoText>
      </Logo>

      <BurgerMenuBtn
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src={`${burgerMenuBtn}`}
          alt="Button for burger menu"
          width={16}
          height={16}
        />
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
      </BurgerMenuBtn>
    </HeaderSection>
  );
};
