import Navbar from "../../components/Header/Navbar";
import { Main } from "../../components/Main/Main";
import { useState } from "react";
import ModalLogin from "../../components/modal/Modal";
import ModalForm from "../../components/modal/ModalForm";
import ModalCadastre from "../../components/modal/ModalCadastre";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openCadastre, setOpenCadastre] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpenForm(false);
  const handOpenNext = () => {
    setOpenForm(false);
    setTimeout(() => {
      setOpenCadastre(true);
    }, 2000);
  };
  const handModalForm = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setOpenForm(true);
      }, 2000);
    }
  };
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <ModalLogin
        handleOpen={handleOpen}
        open={open}
        handModalForm={handModalForm}
      />

      <ModalForm
        open={openForm}
        handleOpen={handleClose}
        handOpenNext={handOpenNext}
      />
      <ModalCadastre open={openCadastre} handleOpen={handleClose} />

      <Main />
    </>
  );
}
