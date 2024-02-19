import styles from './styles.module.css'
const Block = ({number=0,title='Text',index = 0} ) =>{

    const colors = ['rgb(208, 255, 154)','rgb(110, 241, 241)','rgb(248, 137, 137)']

    const color = colors[index]

    return (<div className={styles.parent}>
                <div className={styles.block}>
                    <div className={styles.block_number} style={{color}}>
                        {number}
                    </div>
                    <div className={styles.title} style={{color}}>
                        {title}
                    </div>
                </div>
            </div>)   
}

export default Block;