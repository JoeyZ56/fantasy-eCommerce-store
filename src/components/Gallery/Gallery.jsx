import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./Gallery.scss";

const Gallery = () => {
  const [galleryImage, setGalleryImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/gallery.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch gallery image");
        }

        const data = await response.json();
        setGalleryImage(data);
      } catch (error) {
        console.error("Error fetching gallery image:", error.message);
      }
    };

    fetchGalleryImage();
  }, []);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-images">
        {galleryImage.map((image) => (
          <img
            key={image.id}
            src={image.image_url}
            alt={image.name}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {showModal && selectedImage && (
        <Modal>
          <div>
            <h1>{selectedImage.name}</h1>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.name}
              width={300}
              height={200}
            />
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedImage(null);
              }}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
