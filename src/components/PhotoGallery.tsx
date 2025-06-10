import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageData } from '@/lib/imageUtils';

interface PhotoGalleryProps {
  photos: ImageData[];
  columns?: number;
}

const PhotoGallery = ({ photos, columns = 4 }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<ImageData | null>(null);

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
  };

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-2 sm:gap-4`}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="overflow-hidden cursor-pointer card-hover group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  style={{ aspectRatio: '1/1', display: 'block' }}
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
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="object-contain rounded-lg max-h-[80vh] max-w-full"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              {selectedPhoto.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <p className="text-sm">{selectedPhoto.caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
