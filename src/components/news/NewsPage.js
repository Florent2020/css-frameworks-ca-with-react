import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Pagination from "./Pagination";
import Products from "./Products";

function News() {
    return (
            <>
                <Container>
                    <Heading content="News" />
                    <Pagination />
                    <Products />
                    <Pagination />
                </Container>
            </>

    );
}

export default News;