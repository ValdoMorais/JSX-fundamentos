import styles from './Frase.modules.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}> Este componente e uma Frase</p>
        </div>
    )
}

export default Frase