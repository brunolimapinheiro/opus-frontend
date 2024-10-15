import * as S from "./stylesForm";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";

interface ModalProps {
  handleOpen: () => void;
  handOpenNext: () => void;
  open: boolean;
  // handModalForm: () => void;
}

export default function ModalForm({
  handleOpen,
  open,
  handOpenNext,
  // handModalForm,
}: ModalProps) {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <S.Modal>
            <S.PositionI>
              <FiX onClick={handleOpen} />
            </S.PositionI>
            <S.conteiner>
              <S.cx>
                <S.H1>Formulario do candidato</S.H1>
              </S.cx>

              <S.inputsForm>
                <S.inputs>
                  <S.tituloTwo type="text" placeholder="Nome" />
                  <S.tituloTwo type="text" placeholder="E-mail" />
                </S.inputs>
                <S.inputsTwo>
                  <S.titulo type="text" placeholder="data de nasciemento" />

                  <S.titulo type="text" placeholder="telefone" />
                </S.inputsTwo>
              </S.inputsForm>

              <S.divTextarea>
                <S.inputText placeholder="sobre" />
              </S.divTextarea>

              <S.inputsFormTwo>
                <S.inputs>
                  <S.TituloExperiencia type="text" placeholder="Cargo" />

                  <S.TituloExperiencia type="text" placeholder="Formação" />
                </S.inputs>

                <S.inputs>
                  <S.TituloExperiencia type="text" placeholder="Empresa" />

                  <S.TituloExperiencia type="text" placeholder="Instituição" />
                </S.inputs>

                <S.inputs>
                  <S.TituloExperiencia type="text" placeholder="Duração" />

                  <S.TituloExperiencia type="text" placeholder="Duração" />
                </S.inputs>

                <S.inputs>
                  <S.buttonAdd>+</S.buttonAdd>
                  <S.buttonAdd>+</S.buttonAdd>
                </S.inputs>
              </S.inputsFormTwo>

              <S.cx>
                <S.btnCurriculo>Curriculo</S.btnCurriculo>
              </S.cx>
              <S.cx>
                <S.btnEntrar onClick={handOpenNext}>Entrar</S.btnEntrar>
              </S.cx>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
