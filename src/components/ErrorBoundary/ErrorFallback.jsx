import ImageContainer from "../ImageContainer/ImageContainer";
import errorFallbackImage from "../../assets/images/error.png";

const errorUI = {
    src: errorFallbackImage,
    alt: 'Error!',
}

export function ErrorFallback() {
    return (
      <div role="alert">
        <h2>Oops! Something went wrong.</h2>
        {/* ImageContainer takes thisClass props */}
        <ImageContainer  src={errorUI.src} alt={errorUI.alt} /> 
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }
  