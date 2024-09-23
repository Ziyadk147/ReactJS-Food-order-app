export default function Modal({children}) {
    return (
        <dialog className="modal" open>

            {children}
            <div className="modal-actions">
                <button className="text-button">
                    Close
                </button>
                <button className="button">
                    Go to Checkout
                </button>
            </div>
        </dialog>
    )
}