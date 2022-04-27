import ash from "assets/ash.svg";
import style from "./Ash.module.scss"

function Ash() {
    return ( 
        <div className={style.personagem}><img src={ash} alt="Personagem" /></div>
     );
}
export default Ash;