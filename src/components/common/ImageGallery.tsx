export function ImageGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {images.map((img, i) => (
        <div 
          key={i} 
          className={`overflow-hidden bg-secondary ${
            images.length % 2 !== 0 && i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
          }`}
        >
          <img 
            src={img} 
            alt={`Gallery image ${i + 1}`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
