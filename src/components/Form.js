

const Form = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="userKeyword"></label>
            <input type="text" id="userKeyword" placeholder="Keyword" onChange={props.handleChange} />
            <label htmlFor="countrySelection"></label>
            <select name="countrySelection" id="countrySelection">
                <option>{props.countrySelection}</option>
            </select>
            <label htmlFor="genre"></label>
            <select name="genre" id="genre">
                <option>{props.genreSearch}</option>
            </select>
            <button>Search</button>
        </form>
    )
}

export default Form;