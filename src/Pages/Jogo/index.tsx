import style from "./Jogo.module.scss";
import fundo from "assets/fundo.svg";

function Jogo() {
    return (
        <main>
            <section className={style.fundo}>
                <div >
                <img src={fundo} alt="fundo" />
                </div>
                </section>
        </main>

    );
}

export default Jogo;