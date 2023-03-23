

const Form = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="userKeyword"></label>
            <input type="text" id="userKeyword" placeholder="Keyword" />
            <button>Search</button>
        </form>
    )
}

export default Form;