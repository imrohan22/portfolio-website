import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}
export const Carousel = ({ images }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider main">
        {images?.map((item) => {
          return (
            <img
              key={item}
              className="keen-slider__slide "
              src={item?.url}
              style={{ height: 400, width: "100%" }}
            />
          );
        })}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images?.map((item) => {
          return (
            <img key={item} className="keen-slider__slide" src={item?.url} />
          );
        })}
      </div>
      <style jsx global>
        {`
          .main {
            border-radius: 12px;
            border: 4px solid #ffcc00;
          }

          .thumbnail .keen-slider__slide {
            font-size: 30px;
            margin-top: 10px;
            height: 100px;
          }
          .thumbnail .keen-slider__slide {
            cursor: pointer;
          }
          .thumbnail .keen-slider__slide.active {
            border: 4px solid #ffcc00;
          }
        `}
      </style>
    </>
  );
};
