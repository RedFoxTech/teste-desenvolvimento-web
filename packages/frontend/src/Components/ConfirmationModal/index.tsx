import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
    ConfirmActionModalProps,
    ConfirmActionModalState,
    ConfirmationCallback,
} from '@declarations/Types/confirmActionModal';

/**
 * @fileoverview Arquivo que implementa um modal para confirmar uma ação.
 * @module packages/frontend/Components/ConfirmationModal
 */
/**
 * Classe que implementa um modal de confirmacao, recebe duas props,
 * action e thing, action é o verbo (ex. deletar) e thing o substantivo
 * (ex. usuario) -> Vai mostrar "deseja deletar usuario?", caso seja
 * pressionado sim, o callback setado utilizando setConfirmationCallback
 * será executado. Para acessar essa classe, é sugerido que se utilize
 * uma ref no componente pai, para colocar um modal nesse e invocar ele
 * utilizando javascript.
 * use extraInformation para dar mais detalhes sobre o que estamos confimando
 */
class ConfirmActionModal extends React.PureComponent<
  ConfirmActionModalProps, ConfirmActionModalState
> {
  constructor(props: ConfirmActionModalProps) {
    super(props);
    this.state = {
      show: false,
      confirmationCallback: () => undefined,
    };
    /** Para que possamos chamar this.show ou this.hide no componente pai
     * utilizando uma ref
     */
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setConfirmationCallback = this.setConfirmationCallback.bind(this);
  }

  setConfirmationCallback(confirmationCallback: ConfirmationCallback): void {
    if (typeof confirmationCallback !== 'function') {
      throw new Error('callback function at confirmActionModal is not a function.');
    }
    this.setState({
      confirmationCallback,
    });
  }

  show(): void {
    this.setState({
      show: true,
    });
  }

  hide(): void {
    this.setState({
      show: false,
    });
  }

  render(): React.ReactNode {
    const { show, confirmationCallback } = this.state;
    const { action, thing, extra } = this.props;
    const confirmar = action;
    const isso = thing;
    const extraInformation = extra? ` ${extra}`: '';

    return (
      <>
        <div>
          <Modal show={show} onHide={this.hide}>
            <Modal.Header closeButton={false}>
              <Modal.Title>Confirmar ação</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {`Você tem certeza que deseja ${confirmar} ${isso}${extraInformation}?`}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hide}>
                Não
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  /** Faca hide primeiro para evitar que erros mantenham o
                   * modal fixado na tela depois de clicar em sim.
                   */
                  this.hide();
                  confirmationCallback();
                }}
              >
                Sim
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default ConfirmActionModal;
