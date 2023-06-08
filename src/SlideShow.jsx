import Carousel from "react-bootstrap/Carousel";
import banner1 from "/banner1.jpg";
import banner2 from "/banner2.jpg";
import banner3 from "/banner3.jpg";
import banner4 from "/banner4.jpg";

function SlideShow() {
    return (
        <Carousel className="mt-4">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                    height="500px"
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                    height="500px"
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="Third slide"
                    height="500px"
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                    height="500px"
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;
