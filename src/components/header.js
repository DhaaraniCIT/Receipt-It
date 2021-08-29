import logo from '../logo.png';
import '../App.css';

function Header() {
return(
    <nav className="navbar fixed-top navbar-light bg-light p-0">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-centerp-0 sans" href="/">
                <img src={logo} alt="" className="d-inline-block align-text-top"/><h1>Receipt It</h1>
            </a>
        </div>
    </nav>
)
}

export default Header;