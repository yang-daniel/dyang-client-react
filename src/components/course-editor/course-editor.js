
import React from 'react'
import {Link} from "react-router-dom";


const CourseEditor = ({history}) =>
    // <div>
    //   <h2>
    //     <Link to="/courses/table">
    //       <i className="fas fa-arrow-left"></i>
    //     </Link>
    //     Course Editor
    //     <i onClick={() => history.goBack()}
    //        className="fas fa-times float-right"></i>
    //   </h2>
    // </div>
    <body>

    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <a href="#" className="float-left">
          <button type="button" className="btn btn-danger float-left"
                  onClick={() => history.goBack()} >Return</button>
        </a>
        <a className="navbar-brand ml-3" href="#">Course Editor</a>
        <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item col-auto">
              <a className="nav-link active" aria-current="page"
                 href="../index.html">Home</a>
            </li>
            <li className="nav-item col-auto">
              <a className="nav-link" href="#">Lesson 1
                <i className="fa fa-trash ml-2 fa-sm"/></a>
            </li>

            <li className="nav-item col-auto">
              <a className="nav-link" href="#">Lesson 2
                <i className="fa fa-trash ml-2 fa-sm"/></a>
            </li>

            <li className="nav-item col-auto">
              <a className="nav-link" href="#">Lesson 3
                <i className="fa fa-trash ml-2 fa-sm"/></a>
            </li>

            <li className="nav-item col-auto">
              <a className="nav-link" href="#">Lesson 4
                <i className="fa fa-trash ml-2 fa-sm"/></a>
            </li>

            <li className="nav-item col-auto">
              <a href="#" className="fas fa-plus-circle mt-2 text-white"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container-fluid">
      <div className="row">
        <div className="float-left mt-4">
          <ul className="list-group">
            <li className="list-group-item active">
              <a href="#" className="text-white">
                Module 1
              </a>
              <a href="#">
                <i className="fas fa-trash float-right mt-1 ml-2 fa-sm btn-outline-light"></i>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                Module 2
              </a>
              <a href="#">
                <i className="fas fa-trash float-right mt-1 ml-2 fa-sm"></i>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                Module 3
              </a>
              <a href="#">
                <i className="fas fa-trash float-right mt-1 ml-2 fa-sm"></i>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                Module 4
              </a>
              <a href="#">
                <i className="fas fa-trash float-right mt-1 ml-2 fa-sm"></i>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                Module 5
              </a>
              <a href="#">
                <i className="fas fa-trash float-right mt-1 ml-2 fa-sm"></i>
              </a>
            </li>
            <li className="list-group-item">
              <a href="#">
                <i className="fas fa-plus-circle align-middle mt-2"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-4">
          <br/>
          <nav className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Topic 1
                <i className="fa fa-trash mt-2 ml-2 fa-sm float-right"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topic 2
                <i className="fa fa-trash mt-2 ml-2 fa-sm float-right"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topic 3
                <i className="fa fa-trash mt-2 ml-2 fa-sm float-right"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Topic 4
                <i className="fa fa-trash mt-2 ml-2 fa-sm float-right"/></a>
            </li>
            <li>
              <a href="#" className="fas fa-plus-circle mt-3"/>
            </li>
          </nav>

          <p className="mt-2">
            Content intentionally left blank. Modules go here. Will be made dynamic in a later assignment.
          </p>
        </div>
      </div>
    </div>
    </body>

export default CourseEditor