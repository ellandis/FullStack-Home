const Info = ({options}) => {
    return (
        <ul className="cardInfo">
            {options.map( (item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
};
export default Info;