import React, { createContext, useState } from 'react'

// context

interface ModalContextProps {
  modalVisible: boolean
  changeModalView: () => void
}

const ModalContext = createContext<ModalContextProps>({
  modalVisible: false,
} as ModalContextProps)

// Provider
const ModalProvider: React.FC = ({ children }) => {
  //modal addpokemon
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const changeModalView = () => setModalVisible(!modalVisible)

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        changeModalView,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext)
  return context
}

export { useModal, ModalProvider }
