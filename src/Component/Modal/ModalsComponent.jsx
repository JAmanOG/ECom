import React, { useState } from 'react';
import OrderConfirmationModal from './OrderConfirmationModal';

const ModalsComponent = ({order}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                onClick={openModal}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
                Show order confirmation modal
            </button>
            <OrderConfirmationModal isOpen={modalIsOpen} onRequestClose={closeModal} orderId={orderId} />
        </div>
    );
};

export default ModalsComponent;
