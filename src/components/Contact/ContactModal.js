import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ContactModal = ({
  modalTitle,
  modalMessage,
  setModalTitle,
  setModalMessage,
}) => {
  function closeModal() {
    setModalTitle('');
    setModalMessage('');
  }

  return (
    <div>
      <Modal
        isOpen={modalTitle !== ''}
        onRequestClose={closeModal}
        className='Modal'
        overlayClassName='Overlay'
        contentLabel='Contact Modal'
      >
        <h2>{modalTitle}!</h2>

        <div>{modalMessage}</div>
        <div className='text-center'>
          <button className='btn btn-primary mt-3' onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
