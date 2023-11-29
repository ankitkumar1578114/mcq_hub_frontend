import styles from './styles.module.css'
const Welcome = () => {
  const galaryImages = [
    // {
    //   text: 'Player',
    //   url: 'https://github.com/ankitkumar1578114/crick-admin-frontend/assets/57772916/8e5bc310-1d4e-4b83-adb6-a7ba8d77892d'
    // }
  ]
  return <>
      <div className = {styles.parent}>
        <div className={styles.flex}>
            {/* <div className={styles.welcome_text}>
              <div>
                <h1 className={styles.h1}>WELCOME !</h1>
                <h4 className={styles.h4}>WHY WASTING TIME ON PEN & PAPER ?<br/>
                    TIME TO BE DIGITAL
                </h4>

              </div>
            </div>
            <div className={styles.center}>
              <IconScreen />
            </div> */}
        </div>
      </div>
      <div className={styles.how_does_it_work}>
        <h2>How Does It Work ?</h2>
        <div className={styles.galary}>
            {
              galaryImages?.map((image) => (
                <div key={image?.url}>
                  <img src ={image?.url} style={{ width: '100%' }}/>
                  {image?.text}
                </div>
              ))
            }
        </div>
      </div>
    </>
}
export default Welcome
