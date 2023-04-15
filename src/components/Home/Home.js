import "./Home.css";
import Image from 'react-bootstrap/Image';
const Home=()=>{
// eslint-disable-next-line 
    return(
    <div className="myimage">
        <p>Shyam Prasad</p>
        <br/>
        <br/>
        <span>I'm a Student</span>
     <Image className="image" src="../Shyam.jpg" fluid />
    </div>
    )

}

export default Home;