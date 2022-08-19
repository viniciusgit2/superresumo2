


import classeporta from "../../model/classeporta"
import styles from "../../styles/porta.module.css"

interface porta {
  classeporta:porta 

}
 
const alterarselelecao=e=>onchange(classeporta.alterarselecao())
const abrir =(classeporta.aberta())
export default function Porta ({ props }: { props: porta }){
 

function renderizar(){

  return(

    <><div className={styles["porta"]} /><div {...classeporta} onClick ={alterarselelecao}>{">"}
  <div className={styles["maçaneta"]}>
    <div className={styles["porta2"]}>

      <div className={styles["cenario"]}>era pr ser neve em baixo</div>
    </div>
  </div>
</div></>
    );


}

	


  return(
    <>
    {renderizar()}
    
    </>
   
  
  )
  
  }
