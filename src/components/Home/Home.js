import "./Home.css";
import Image from 'react-bootstrap/Image';
const Home=()=>{
// eslint-disable-next-line 
    return(
    <div className="homepage">
    <div className="home">
    <p class="home-text"><span className="home-para">DailyLeetCode website is my personal blog, Where I am sharing my knowledge in python Programming, Data Structures and Algorithms to the students. Anyone who are intrested to learn the leetcode and Algorithms, It's the place you are looking for. This courses are free of cost. </span></p>
    </div>
    <div className="myimage">
 <p className="ok">Shyam Prasad</p><br/><br/>
 <p className="span">I am a Student</p>
     <Image className="image" src="../Shyam.jpg" fluid />
    </div>
    
    </div>
    
    )

}

export default Home;