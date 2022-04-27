import ash from "assets/ash.svg";
import style from "./Ash.module.scss"

function Ash() {

    var x_axis = 0;
    var y_axis = 0;
    const movePersonagem = document.getElementsByClassName("personagem");

    document.body.onkeydown = (e: any | null) => {
        e = e || window.Event;
        if (e.key == "w") {
            console.log("Teste W")
        } else if (e.key == "s") {
            console.log("Teste s")
        } else if (e.key == "a") {
            console.log("Teste a")
        } else if (e.key == "d") {
            console.log("Teste d")
        }
    }

    function movAsh(a: string) {
        if (a == 'right') {
            x_axis = x_axis + 10;
            $("personagem").css ({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'left') {
            x_axis = x_axis - 10;
            $("personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'up') {
            y_axis = y_axis - 10;
            $("personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'down') {
            y_axis = y_axis + 10;
            $("personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        }
    }

    return (
        <div className={style.personagem}><img src={ash} alt="Personagem" /></div>
    );
}
export default Ash;