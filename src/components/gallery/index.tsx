interface GalleryProps {
  images: ImagesData[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return <div>Gallery</div>;
};

export default Gallery;
