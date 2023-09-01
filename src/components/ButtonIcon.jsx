const ButtonIcon = (prop) => {
    return (
        <button className="button-icon" onClick={prop.onClick}>
            <img src={prop.icon}></img>
        </button>
    )
}

export default ButtonIcon