import Image from "next/image";

const CoverImage = ({ title, src, slug, imageCaption }) => {
  return (
    <div className="sm:mx-0">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
        width={1300}
        height={630}
      />
      <div
        className="text-center mt-2 text-sm image-caption text-gray-400"
        dangerouslySetInnerHTML={{ __html: imageCaption }}
      />
    </div>
  );
};

export default CoverImage;
