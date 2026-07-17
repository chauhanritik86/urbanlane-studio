import { ImageGallery as CommonImageGallery } from "@/components/common/ImageGallery";
import { SectionHeader } from "@/components/common/SectionHeader";

const galleryImages = [
  "/images/hero-1.jpg",
  "/images/kitchen-1.jpg",
  "/images/bedroom-1.jpg",
  "/images/bathroom-1.jpg",
  "/images/villa-1.jpg",
  "/images/commercial-1.jpg",
  "/images/architecture-detail-1.jpg",
  "/images/material-stone.jpg",
  "/images/material-wood.jpg",
  "/images/landscape-1.jpg",
  "/images/portfolio-1.jpg",
  "/images/portfolio-2.jpg",
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Visual Archive"
          title="Moments of restraint."
          className="mb-16"
        />
        <CommonImageGallery images={galleryImages} />
      </div>
    </div>
  );
}
