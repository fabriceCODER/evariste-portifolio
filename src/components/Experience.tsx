import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Experience = () => {
  // State for lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of showcase images
  const showcaseImages = [
    "/showcase.jpg",
    "/showcase1.jpg",
    "/showcase3.jpg",
    "/showcase4.jpg",
    "/showcase5.jpg",
    "/showcase6.jpg",
    "/Seedling.jpg",
  ];

  // Function to format image filename into alt text
  const formatAltText = (src: string) => {
    const filename = src.split("/").pop()?.split(".")[0] || "";
    return filename
      .split(/(?=[A-Z])|_/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowLeft":
          setPhotoIndex((prev) => (prev + showcaseImages.length - 1) % showcaseImages.length);
          break;
        case "ArrowRight":
          setPhotoIndex((prev) => (prev + 1) % showcaseImages.length);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showcaseImages.length]);

  return (
    <section id="experience" className="py-20 bg-earth/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gaining practical experience in forest management and conservation
          </p>
        </div>
        
        {/* Experience Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-forest/20">
            <div className="flex items-start space-x-4">
              <div className="bg-forest p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-forest mb-1">INTERNEE</h3>
                    <p className="text-forest-light font-medium text-lg">Rwanda Forest Authority</p>
                  </div>
                  <Badge variant="secondary" className="bg-forest/10 text-forest mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    Oct 15 - Nov 20, 2024
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Rwanda</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gained hands-on experience in forest management techniques and team collaboration. 
                  Worked alongside experienced forestry professionals to understand practical applications 
                  of sustainable forest resource management principles.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-forest/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-forest mb-2">Key Learnings</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Forest inventory and assessment techniques</li>
                      <li>• Sustainable harvesting practices</li>
                      <li>• Wildlife habitat conservation</li>
                    </ul>
                  </div>
                  <div className="bg-forest/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-forest mb-2">Skills Developed</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Team collaboration in field work</li>
                      <li>• Data collection and analysis</li>
                      <li>• Community engagement strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-forest text-center mb-6">Field Work Gallery</h3>
          <p className="text-center text-muted-foreground mb-10">
            A visual showcase of my hands-on forestry and environmental fieldwork
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseImages.map((src, index) => (
              <div 
                key={src} 
                className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="aspect-[4/3] p-2">
                  <img
                    src={src}
                    alt={formatAltText(src)}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Lightbox */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setPhotoIndex((prev) => (prev + showcaseImages.length - 1) % showcaseImages.length);
              }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <div 
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={showcaseImages[photoIndex]}
                alt={formatAltText(showcaseImages[photoIndex])}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {formatAltText(showcaseImages[photoIndex])}
              </div>
            </div>
            
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setPhotoIndex((prev) => (prev + 1) % showcaseImages.length);
              }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
