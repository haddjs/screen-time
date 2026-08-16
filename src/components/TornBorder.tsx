type TornBorderProps = {
  src: string;
  bgClass: string;
};

const TornBorder = ({ src, bgClass }: TornBorderProps) => {
  return (
    <div className={bgClass} aria-hidden="true">
      <img
        src={src}
        alt=""
        className="block w-full h-6 md:h-8 object-cover object-bottom"
      />
    </div>
  );
};

export default TornBorder;
