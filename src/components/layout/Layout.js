import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Home from "../home/HomePage";
import News from "../news/NewsPage";
import Contact from "../contact/ContactPage";
import Footer from "../layout/Footer"

function Layout() {
	return (
        <>
            <div className="wrapper">
                <Router>
                    <Navbar bg="transparent" expand="lg" variant="dark">
                        <Container>
                            <NavLink to="/" exact className="logo">
                                <Navbar.Brand>The YAY Company</Navbar.Brand>
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink to="/" exact className="nav-link">
                                        Home
                                    </NavLink>
                                    <NavLink to="/news" className="nav-link">
                                        News
                                    </NavLink>
                                    <NavLink to="/contact" className="nav-link">
                                        Contact
                                    </NavLink>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Go</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/news">
                                <News />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                </Router>
            </div>
            <Footer />
        </>
	);
}

export default Layout;