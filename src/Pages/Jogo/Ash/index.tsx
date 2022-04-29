import style from "./Ash.module.scss"

function Ash() {
    function trocaImg() {
        var moveAsh = document.getElementById('movimentacao')
        if (moveAsh?.getElementsByClassName('style.personagemParado')) {
            console.log("teste")
            moveAsh?.classList.remove('style.personagemParado')
            moveAsh?.classList.add('style.personagemMove')
        }
    }
    return (
        <>
            <div >
                <img
                    id="movimentacao"
                    className={style.personagemMove}
                    onClick={trocaImg}
                    alt="Personagem" />
            </div>
        </>

    );
}
export default Ash;