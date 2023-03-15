function Button({children, isDisabled, typeOfButton, onClick, Alert})
{

    return (
        <button type={typeOfButton} disabled={isDisabled} onClick={onClick}>
            { children }
        </button>
    )

}
export default Button;