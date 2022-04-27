import style from "./Jogo.module.scss";
import fundo from "assets/fundo.svg";
import Ash from "./Ash";

function Jogo() {
    return (
        <main>
            <section className={style.container}>
                <div className={style.fundo}>
                    <img src={fundo} alt="fundo" className={style.fundo__img} />
                </div>
                <div><Ash /></div>
            </section>

        </main>

    );
}

export default Jogo;