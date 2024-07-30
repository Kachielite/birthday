const HeaderToggle = ({isOpen, menuHandler}) => {
    return (
        <button className="block lg:hidden" onClick={menuHandler}>
            {isOpen ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#646C64" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="#646C64" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                :
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 24H28" stroke="#646C64" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M4 16H28" stroke="#646C64" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M4 8H28" stroke="#646C64" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>

            }
        </button>
    )
}

export default HeaderToggle;