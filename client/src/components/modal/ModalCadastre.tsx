import * as S from "./styledCadastre";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";

interface ModalProps {
  handleOpen: () => void;
  open: boolean;
  // handModalForm: () => void;
}

export default function ModalCadastre({
  handleOpen,
  open,
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
                <S.H1>Cadastro</S.H1>
              </S.cx>

              <S.inputsForm>
                <S.inputs>
                  <S.tituloTwo type="text" placeholder="Nome" />
                  <S.tituloTwo type="text" placeholder="senha" />
                </S.inputs>
                <S.inputsTwo>
                  <S.titulo type="text" placeholder="data de nasciemento" />

                  <S.titulo type="text" placeholder="telefone" />
                </S.inputsTwo>
              </S.inputsForm>

              <S.divTextarea>
                <S.inputText placeholder="sobre" />
              </S.divTextarea>

              <S.upload>
                <MdCloudUpload />
              </S.upload>

              <S.cx>
                <S.btnEntrar>Entrar</S.btnEntrar>
              </S.cx>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
