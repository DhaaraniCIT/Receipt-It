import Header from '../components/header';
import '../App.css';

function Front() {
return(
    <div className="header">
        <Header/>
        <div className="container-sm content text-center sans">
            <h1>Generate your <br/> House rent receipt here</h1> 
            <a href="#form"><button type="button" className="btn btn-light"><b>Receipt It</b></button></a>
        </div>
    </div>
)
}

export default Front;