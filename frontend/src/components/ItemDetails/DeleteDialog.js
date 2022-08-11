function DeleteDialog({
    onClose,
    deleteHandler
}) {
    

    return (
        <section className='overlay'>
            <section className="backdrop" onClick={onClose}></section>
            <article className="modal">
                <p className="popup-text">Are you sure you want to delete this?</p>
                <div className="popup-btns">
                <button className="btn btn-delete" onClick={deleteHandler}>Yes</button>
                <button className="btn" onClick={onClose}>No</button>
                </div>             
            </article>
        </section>
    )
}

export default DeleteDialog