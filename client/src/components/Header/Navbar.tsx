import * as S from "./styles";
import img from "../../assets/img/opus_logo.jpeg";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handShow = () => {
    setShow(!show); // aqui ele muda o valor boolean da variavel ao clicar
  };
  return (
    <>
      <S.Main>
        <S.Nav>
          <S.LogoOpus src={img} />
          {/* <img src={img} height={50} width={50} alt="" /> */}

          {show /**aqui é uma condição ternaria se ficar true ele mostra se for falsa ele remove */ ? (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ ease: "easeOut" }}
            >
              <S.DivR>
                <S.DivM>
                  <S.iconResponsi onClick={handShow}>
                    <FiX />
                  </S.iconResponsi>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1.3 }}
                  >
                    <S.StyledLinkMobile to="">Destaques</S.StyledLinkMobile>
                  </motion.div>
                  <motion.div
                    initial={{ x: 48, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1.1 }}
                  >
                    <S.StyledLinkMobile to="">Vagas</S.StyledLinkMobile>
                  </motion.div>
                  <motion.div
                    initial={{ x: 45, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.9 }}
                  >
                    <S.StyledLinkMobile to="">Sobre</S.StyledLinkMobile>
                  </motion.div>
                  <motion.div
                    initial={{ x: 44, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                  >
                    <S.Button onClick={handleOpen}>entrar</S.Button>
                  </motion.div>
                </S.DivM>
              </S.DivR>
            </motion.div>
          ) : (
            <S.iconResponsi onClick={handShow}>
              <FiAlignJustify />
            </S.iconResponsi>
          )}

          <S.Div>
            <S.StyledLink to="">Destaques</S.StyledLink>
            <S.StyledLink to="">Vagas</S.StyledLink>
            <S.StyledLink to="">Sobre</S.StyledLink>
            <S.Button onClick={handleOpen}>entrar</S.Button>
          </S.Div>
        </S.Nav>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <S.Modal>
              <S.PositionI>
                <FiX onClick={handleClose} />
              </S.PositionI>
              <S.H1>Cadastro</S.H1>
            </S.Modal>
          </Box>
        </Modal>
      </S.Main>
    </>
  );
}
