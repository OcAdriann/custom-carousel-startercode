import { useCarousel } from "./hooks/useCarousel";

export const Carousel = ({ carouselImages }) => {
    const {index, handleNext, handlePrev} = useCarousel(carouselImages)

    return (
      <>
        <h1 style={{ textAlign: "center"}}>Adrian's Custom React Carousel 🦄</h1>
        <img src={carouselImages[index]}  />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handlePrev}>{"<"} Prev</button>
          <button onClick={handleNext}>Next {">"}</button>
        </div>
      </>
    );
}