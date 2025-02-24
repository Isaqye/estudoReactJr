import { useState } from "react"
import { useAppContext } from "../../../hooks"
import { Botao, TIPO_BOTAO } from "../../Botao"
import style from "./ListaTarefasItem.module.css"
import { CampoTexto } from "../../CampoTexto"
import { Loading } from "../../Loading"

const ListaTarefasItem = (props) => {
    const { id, nome } = props 

    const { removerTarefa, alterarTarefa, loadingEditar, loadingDeletar } = useAppContext();

    const [editando, setEditando] = useState(false);

    const ativarEdicao = () => setEditando(true);
    const desativarEdicao = () => setEditando(false);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            desativarEdicao();
        }
    };

    const onBluerTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        alterarTarefa(id, nomeTarefa)

        setEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;


    return(
        <li className={style.ListaTarefasItem}>
            {loadingEstaEditando || editando && (

                <CampoTexto 
                defaultValue = {nome} 
                onBlur={onBluerTarefa} // Sai do modo edição ao perder o foco
                onKeyDown={handleKeyDown} // Salva ao pressionar "Enter"
                autoFocus
                />

            )}
            
            {!loadingEstaEditando &&  !editando && (
                <span onDoubleClick={ativarEdicao} style={{ cursor: "pointer" }}>
                    {nome}
                </span>
            )}

            {loadingEstaEditando && (
                <loading/>
            )}
            
            <Botao 
            texto = {loadingEstaDeletando ? <Loading/> : "-"}
            tipo= {TIPO_BOTAO.SECUNDARIO} 
            onClick = {() => removerTarefa(id)}      
            />
        </li>
    )
}

export {ListaTarefasItem}