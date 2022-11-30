import Frase from "./Frase";
import styles from "./Frase.modules.css";
function HelloWord(){
    return (
        
        <div className={styles.fraseContainer}> 
            <h1> Meu Primeiro Componente</h1>    
        </div>
    )
}
export default HelloWord;