import "./Home.css";
import Image from 'react-bootstrap/Image';
const Home=()=>{
// eslint-disable-next-line 
    return(
    <div className="myimage">
 <p className="ok">Shyam Prasad</p><br/><br/>
 <p className="span">I am a Student</p>
     <Image className="image" src="../Shyam.jpg" fluid />
     
    </div>
    )

}

export default Home;