import style from "./Jogo.module.scss";
import fundo from "assets/fundo.svg";
import ash from "assets/ash.svg";
import "./Ash/moveAsh";

function Jogo() {
    return (
        <main>
            <section >
                <div className={style.fundo}>
                    <img src={fundo} alt="fundo" />
                </div>
                <div className={style.ash} ><img src={ash} alt="Personagem" /></div>
            </section>
            
        </main>

    );
}

export default Jogo;