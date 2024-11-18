const Logo  = ({name,img}) => {
    return (
        <div className="cardBottom">
          <img src={img} alt="lang" />
          <h3>{name}</h3>
        </div>
    )
};
export default Logo;