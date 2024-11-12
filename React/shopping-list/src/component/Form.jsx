const Form = () => {
    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(e);
    }
    return (
    <form onSubmit={handleSubmit}>
        <select>
            {
            /* <option value={1}>1</option>
            <option value={2}>2</option> */}
            {[...Array(20)].map( (_,index) => (
                <option value={index+1} key={index+1}> {index+1} </option>
            )) }
        </select>
        <input className="input" type="text" placeholder="Enter item"/>
        <button className="addBtn">Add</button>
    </form>
    );
};

export default Form;