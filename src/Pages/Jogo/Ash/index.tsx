import ash from "assets/ash.svg";
import style from "./Ash.module.scss"

function Ash() {
    var x_axis = 0;
    var y_axis = 0;

    document.onkeydown = check_key;

    function check_key(e: any | null) {
        e = e || window.Event;
        if (e.keyCode == '87') {
            movAsh("up");
            console.log(KeyboardEvent.DOM_KEY_LOCATION_STANDARD)
        } else if (e.keyCode == '83') {
            movAsh("down");
        } else if (e.keyCode == '65') {
            movAsh("left");
        } else if (e.keyCode == '68') {
            movAsh("right");
        }
    }

    function movAsh(a: string) {
        if (a == 'right') {
            x_axis = x_axis + 10;
            $(".personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'left') {
            x_axis = x_axis - 10;
            $(".personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'up') {
            y_axis = y_axis - 10;
            $(".personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        } else if (a == 'down') {
            y_axis = y_axis + 10;
            $(".personagem").css({ "transform": "translate(" + x_axis + "px," + y_axis + "px)" });
        }
    }
    return (
        <div className={style.personagem}><img src={ash} alt="Personagem" /></div>
    );
}
export default Ash;