import error from "../img/NotFound.jpg";


export const NotFound = () => {
  return (
    <div className='errorWrapper'>
      <img src={error} alt="error" />
    </div>
  )
}
export default NotFound;