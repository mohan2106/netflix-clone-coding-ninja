import React,{useState,useEffect} from 'react';
import styles from './ProgressBar.module.css';
  
const ProgressBar = (initial_progress = 50) => {

    const [progress,setProgress] = useState(50);

    // useEffect(()=>{
    //     var number = parseInt(initial_progress , 10 );
    //     setProgress(number);
    // },[])
     
    const Parentdiv = {
        height: "32px",
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 0
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'orange',
        borderRadius:40,
        textAlign: 'right'
      }
      
        
      const handleIncrease = () => {
          if(progress < 100){
              setProgress(progress + 1);
          }
      }
      const handleDecrease = () => {
        if(progress > 0){
            setProgress(progress - 1);
        }
    }
    return (
        <div className={styles.container}>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span className={styles.progresstext}>{`${progress}%`}</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.square_button} ${styles.light}`} title="decrese rating" onClick={handleDecrease}>
                <i class="fa fa-minus white" aria-hidden="true"></i>
                </button>
                <button className={`${styles.square_button} ${styles.dark}`} title="increase rating" onClick={handleIncrease}>
                <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    
    )
}
  
export default ProgressBar;