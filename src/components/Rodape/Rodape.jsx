import style from "./Rodape.module.css";

const anoAtual = (new Date()).getFullYear();

const Rodape = (props) => {
    const {criador} = props
    return(
        <div className={style.Rodape}>
            React Básico - {anoAtual} - {criador}
        </div>
    )
}

export {Rodape};