import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ContactModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='Modal'
        overlayClassName='Overlay'
        contentLabel='Contact Modal'
      >
        <h2>Message sent!</h2>

        <div>
          Thank you! Your message was received. I'll get back to you as soon as
          possible.
        </div>
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
