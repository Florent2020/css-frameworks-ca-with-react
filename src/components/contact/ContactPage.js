import InfoPage from "./InfoPage"
import ContactForm from "../forms/ContactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Contact() {
    return (
            <>
                <div className="main--contact">
                    <Container>
                        <Row>
                            <InfoPage />
                            <ContactForm />
                        </Row>
                    </Container>
                </div>
            </>

    );
}

export default Contact;