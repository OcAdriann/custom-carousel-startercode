import { useState } from "react";

export const useCarousel = (carouselImages) => {
    const [index, setIndex] = useState(0);

    const handleBoundary = (index) => (index + carouselImages.length) % carouselImages.length
  
  
    const handlePrev = () => {
      setIndex((currentIndex) => handleBoundary(currentIndex + 1))
      
    }
    
    const handleNext = () => { 
      setIndex((currentIndex) => handleBoundary(currentIndex - 1))
    }

    return {handlePrev, handleNext, index}
}