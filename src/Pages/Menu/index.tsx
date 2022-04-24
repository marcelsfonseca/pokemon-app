import style from "./Menu.module.scss"
import { ReactComponent as Logo } from "assets/logo.svg";

function Menu() {
    return (
        <main >
            <section className={style.centered}>
                <div className={style.logo}>
                    <Logo />
                    </div>
                    <div>
                    <button type="button" className={style.botao}>Start</button>
                </div>
            </section>

        </main >
    );
}

export default Menu;