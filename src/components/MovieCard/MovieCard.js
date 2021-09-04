import React,{useState} from 'react';
import styles from './MovieCard.module.css';
import 'font-awesome/css/font-awesome.min.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const data = {
    img: process.env.PUBLIC_URL + '/Images/persuit_image.jpeg',
    description : "This is a sample description",
    match : "97% Match",
    age : "13+",
    duration : "1h 57m",
    quality : "HD",
    genere : ["Heartfelt","Inspiring", "Emotional"]
}

const SingleDot = ()=>{
    return <div className={styles.small_dot}></div>
}

function MovieCard() {

    const [showDesc,setShowDesc] = useState(false);

    var genereList = [];
    data.genere.forEach((item,index) => {
        genereList.push( <div className={styles.genere_text}>{item}</div>);
        if(index < data.genere.length - 1){
             genereList.push(<SingleDot/>)
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img className={styles.image} src={data.img} alt="title img"/>
            </div>
            <div className={styles.details}>
                <div className={styles.buttons}>
                    <div className={styles.play_to_like}>
                        <button className={`${styles.round_button} ${styles.dark}`} title="Play">
                        <i class="fa fa-play fa-lg"></i>
                        </button>
                        <button className={`${styles.round_button} ${styles.light}`} title="check">
                        <i class="fa fa-check white fa-lg" aria-hidden="true"></i>
                        </button>
                        <button className={`${styles.round_button} ${styles.light}`} title="like">
                        <i class="fa fa-thumbs-o-up white fa-lg" aria-hidden="true"></i>
                        </button>
                        <button className={`${styles.round_button} ${styles.light}`} title="dislike">
                        <i class="fa fa-thumbs-o-down white fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className={styles.dropdown}>
                        <button className={`${styles.round_button} ${styles.light}`} onClick={() =>setShowDesc(!showDesc)} title="description">
                            {showDesc ? <i class="fa fa-chevron-up fa-lg white" aria-hidden="true"></i> : 
                            <i class="fa fa-chevron-down fa-lg white" aria-hidden="true"></i>}
                        </button>
                    </div>
                </div>
                {showDesc ? 
                    <div className={styles.description}>
                    {data.description}
                </div> : null}
                
                <div className={styles.match_and_duration}>
                    <div className={styles.match}>{data.match}</div>
                    <div className={styles.age}>{data.age}</div>
                    <div className={styles.duration}>{data.duration}</div>
                    <div className={styles.quality}>{data.quality}</div>
                </div>
                <div className={styles.genere}>
                    {genereList}
                </div>
                <ProgressBar initial_progress='50'/>
            </div>
        </div>
    )
}

export default MovieCard
