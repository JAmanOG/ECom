import React from 'react';
import Modal from 'react-modal';

const OrderConfirmationModal = ({ isOpen, onRequestClose, orderId }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Order Confirmation"
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center relative"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            ariaHideApp={false}
            shouldCloseOnOverlayClick={false} // This prevents closing when clicking outside the modal
        >
            <button
                onClick={onRequestClose}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
                &times;
            </button>
            <div className="mb-4">
                <div className="text-4xl text-green-500 mb-4">&#10004;</div>
                <h2 className="text-xl font-semibold">Your order is confirmed!</h2>
                <p className="text-gray-700 mt-2">
                    Your order <strong>#{orderId}</strong> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
                </p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none">
                    Track your order
                </button>
                <button
                    onClick={onRequestClose}
                    className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                    Return to shopping
                </button>
            </div>
        </Modal>
    );
};

export default OrderConfirmationModal;
