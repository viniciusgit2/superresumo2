


import classeporta from "../../model/classeporta"
import styles from "../../styles/porta.module.css"

interface porta {
  classeporta:porta 

}
const alterarselelecao=e=>onchange(classeporta.aberta())
export default function Porta ({ props }: { props: porta }){
 



	


  return(
  
  
    <><div className={styles["porta"]} /><div {...classeporta} onClick ="selecionada">{">"}
      <div className={styles["maçaneta"]}>
        <div className={styles["porta2"]}>

          <div className={styles["cenario"]}>era pr ser neve em baixo</div>
        </div>
      </div>
    </div></>
    
  
    )
  
  }
