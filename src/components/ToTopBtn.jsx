

function ToTopBtn() {   
    // make a button to scroll to top of the page. place it at the bottom right corner of the page [fixed]
    return (
        <button 
            className="button fixed bottom-0 right-0 m-4 rounded-lg w-16 h-16 items-center text-center" id="totopbtn"
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }}
            style={
                {
                    fontSize: '1.5rem',
                    backgroundColor: '#efe8e0',
                    color: "#1b1b1b",
                }
            }
        >
            <i>&#8593;</i>
        </button>
    );
}

export default ToTopBtn;