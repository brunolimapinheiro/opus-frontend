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
                  <S.tituloTwo type="text" placeholder="email" />
                </S.inputs>
                <S.inputsTwo>
                  <S.tituloTwo type="text" placeholder="endereço" />
                  <S.tituloTwo type="text" placeholder="telefone" />
                </S.inputsTwo>
              </S.inputsForm>

              <S.divTextarea>
                <S.inputText placeholder="sobre" />
              </S.divTextarea>

              <S.upload>
                <S.uploadIcon>
                  <MdCloudUpload />
                </S.uploadIcon>
                <S.p>Upload Foto de Perfil</S.p>
              </S.upload>
              <S.inputsPasswords>
                <S.passwords type="text" placeholder="Senha" />
                <S.passwords type="text" placeholder="Confirme sua senha" />
              </S.inputsPasswords>

              <S.cxTwo>
                <S.btnEntrar>Cadastrar</S.btnEntrar>
              </S.cxTwo>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
