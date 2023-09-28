import Nav from "../../componentes/nav-cont-char/Nav";
import "./contact.css"
import {Fragment} from "react";

function Contact() {
    return(
        <Fragment>
            <Nav itemsMenu={"Contact"}/>
            <section className="container-fluid d-flex justify-content-center align-items-center mt-5 color-fondo contact">
                <div className=" d-flex flex-column justify-content-center align-items-center ">

                    <h2 className="color mt-5 pb-4">Contact</h2>
                    <h3 className="color pb-4">Leave us your information so we can contact you</h3>

                    <form className="row g-3 form-media">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Name:</label>
                          <input type="text" className="form-control" id="name" required />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email:</label>
                          <input type="email" className="form-control" id="email" required />
                        </div>

                        <div className="col-12 d-flex flex-column">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea id="message"></textarea>
                        </div>


                        <div className="col-12 pb-4">
                          <button type="submit" className="btn boton-contact">Send</button>
                        </div>
                    </form>
                </div>
            </section>

        </Fragment>
    )
}
export default Contact;