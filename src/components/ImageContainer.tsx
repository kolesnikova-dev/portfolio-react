type Props = {
  src: string;
  alt: string;
  thisClass?: string;
};

export const ImageContainer: React.FC<Props> = ({ thisClass, src, alt }) => {
  return (
    <div className={thisClass}>
      <img src={src} alt={alt} />
    </div>
  );
};
