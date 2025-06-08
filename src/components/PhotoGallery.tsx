
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: number;
}

const PhotoGallery = ({ photos, columns = 4 }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
  };

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-2 sm:gap-4`}>
        {photos.map((photo) => (
          <Card 
            key={photo.id}
            className="overflow-hidden cursor-pointer card-hover group"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View</span>
              </div>
            </div>
            {photo.caption && (
              <div className="p-3">
                <p className="text-sm text-muted-foreground">{photo.caption}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </Button>
            <img 
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            {selectedPhoto.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                <p className="text-sm">{selectedPhoto.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
