import HeaderBtnImg from "../../assets/img/search.png"
import "./button.css"

export const HeaderBtn = () => {
  return(
    <form className="header-form"> 
      <input type="text" className="header-input" placeholder="Search"/>
      <button className="header-btn">
        <img src={HeaderBtnImg} alt="imig" />
      </button>
    </form>
  )
}