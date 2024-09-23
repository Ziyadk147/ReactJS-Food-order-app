import Modal from "../Modal/Modal";

export default function Cart() {

    return (
        <Modal >
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    <li>
                        <div className="cart-item">
                            <p>Seafood</p>
                            <div className="cart-item-actions">
                                <button > - </button>
                                2
                                <button> + </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-item">
                            <p>Seafood</p>
                            <div className="cart-item-actions">
                                <button > - </button>
                                2
                                <button> + </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-item">
                            <p>Seafood</p>
                            <div className="cart-item-actions">
                                <button > - </button>
                                2
                                <button> + </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="cart-total">
                $2.39
            </div>
        </Modal>
    )

}