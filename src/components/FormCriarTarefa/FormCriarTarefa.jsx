import { useState  } from "react";

import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";

import style from "./FormCriarTarefa.module.css";
import { useAppContext } from "../../hooks";
import { Loading } from "../Loading";

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState("");

    const onChangeNomeTarefa = (event) => {

    setNomeTarefa(event.currentTarget.value)

    }

    const submeterFormularario = (event) => {
    
       event.preventDefault();

       if(!nomeTarefa){
         return;
       }

       adicionarTarefa(nomeTarefa)

       setNomeTarefa("");

    }

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormularario} >

            <CampoTexto 
            value = {nomeTarefa} 
            onChange= {onChangeNomeTarefa}/>

            <Botao texto = {loadingCriar ? <Loading/> : "+"}/>
          
        </form>
    )
}

export {FormCriarTarefa};