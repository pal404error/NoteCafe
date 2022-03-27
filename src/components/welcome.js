import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./wel.css"
class App extends Component{
    render(){
        return(
            <>
            <div id="page-top">
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" ></script>
            <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#page-top">Note Cafe</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Functions</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase" >NoteCafé</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">A  page where coders and people who want to learn coding get to work in good environment.</h2>
                            <a className="btn btn-primary" href="Choices.html">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
    
        
    
            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">Built for coders</h2>
                            <p className="text-white-50">
                                Note cafe is a place where people get to do multi-purpose  work with, | TO-DO list | Notes Page | Community chat | Text editor. 
                            </p>
                            <p className="text-white-50">Notecafe hopes that by using this website/webapp, will be able to assist individuals with solutions to the challenges and problems they may have when using another online text editor. The Notecafe claims to solve some of the biggest issues that developers have while using alternative online text editors.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
    

            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/Notes_img.jpg" alt="..." /></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Notes & Task</h4>
                                <p className="text-black-50 mb-0">This function helps people save their data of their  notes. So that they can look at what  stuff they have to work on.</p>
                            </div>
                        </div>
                    </div>
             
                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/Todo_list_img.jpg" alt="..." /></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">To-Do List</h4>
                                        <p className="mb-0 text-white-50">These helps people to mark and save the data of the task they have to do.Which works like a todo list where u can check mark the tasks completed.</p>
                                        <hr className="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid" src="assets/img/Community_chat_img.jpg" alt="..." /></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Community Chat-Box</h4>
                                        <p className="mb-0 text-white-50">Another thing which helps people and coders with Community chat-box ,which is used to share ur query and code with in the people using our page which also has a function of uploading images or screenshots. </p>
                                        <hr className="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

            <section className="contact-section bg-black" id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50">MS University baroda</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a href="#!">notecafe.team@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50">+1 (555) 1111111</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-flex justify-content-center">
                        
                        <a className="mx-2" href="https://github.com/pal404error/NoteCafe"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            
            <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">Copyright &copy;  2022</div></footer>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            
            <script src="js/scripts.js"></script>
    
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </div>
        </>
        )
    }


    
}
export default App