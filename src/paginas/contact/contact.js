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
                    <h3 className="color pb-4 ">Leave us your information so we can contact you</h3>

                    <form class="row g-3 form-media">
                        <div class="col-md-6">
                          <label for="name" class="form-label">Name:</label>
                          <input type="text" class="form-control" id="name" required />
                        </div>

                        <div class="col-md-6">
                          <label for="email" class="form-label">Email:</label>
                          <input type="email" class="form-control" id="email" required />
                        </div>

                        <div class="col-12 d-flex flex-column">
                          <label for="message" class="form-label">Message</label>
                          <textarea id="message"></textarea>
                        </div>


                        <div class="col-12 pb-4">
                          <button type="submit" class="btn boton-contact">Send</button>
                        </div>
                    </form>
                </div>
            </section>

        </Fragment>
    )
}
export default Contact;