import React from 'react'

import * as S from './styles'
import Button from 'components/Button'

export type ModalDeleteProps = {
  visible: boolean
  hideModal: () => void
  pokemonId: string
  handleDelete: (id: string) => void
}

const ModalConfirmation = ({
  handleDelete,
  hideModal,
  pokemonId,
  visible,
}: ModalDeleteProps) => {
  return (
    <>
      <S.Wrapper isOpen={visible}>
        <S.ModalWrapper>
          <h1>Deseja realmente remover o pokemon?</h1>
          <S.ButtonsWrapper>
            <Button type="reset" onClick={hideModal}>
              Cancelar
            </Button>
            <Button onClick={() => handleDelete(pokemonId)}>
              Sim, remover
            </Button>
          </S.ButtonsWrapper>
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  )
}

export default ModalConfirmation
