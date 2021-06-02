import Heading from "../layout/Heading";
import CarouselPage from "./Carousel";
import Container from "react-bootstrap/Container";
import AccordionPage from "./Accordion";
import Tabs from "./Tabs";

function Home() {
    return (
            <>
                <CarouselPage />
                <Container>
                    <Heading content="We do YAY things" />
                    <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
                    Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
                    <AccordionPage />
                    <Tabs />
                </Container>


            </>

    );
}

export default Home;