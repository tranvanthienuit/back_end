import {Component} from "react";
import './Admin.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: ['a', 'b', 'c']
        }

    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">DBook Inc</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ms-auto ">
                                    <li className="nav-item">
                                        <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2" href="#">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-2" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link mx-2 dropdown-toggle" href="#"
                                           id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Company
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            {
                                                this.state.array.map(item=>{
                                                    return(
                                                        <div>
                                                            <li><a>{item}</a></li>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                                    <li className="nav-item mx-2">
                                        <a className="nav-link text-dark h5" href="" target="blank"><i
                                            className="fab fa-google-plus-square"></i></a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link text-dark h5" href="" target="blank"><i
                                            className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link text-dark h5" href="" target="blank"><i
                                            className="fab fa-facebook-square"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Admin;