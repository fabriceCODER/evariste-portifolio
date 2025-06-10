import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from "./PhotoGallery";
import { Leaf, TreePine, Users, Droplets } from "lucide-react";
import { useEffect, useState } from 'react';
import { ImageData, getImagesFromDirectory } from '@/lib/imageUtils';

const Projects = () => {
  const [projectPhotos, setProjectPhotos] = useState<ImageData[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = getImagesFromDirectory('projects');
      setProjectPhotos(images);
    };
    loadImages();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Community Tree Planting Initiative",
      description: "Led a community-based reforestation project in collaboration with local farmers, planting over 500 indigenous tree seedlings to restore degraded land and improve soil conservation.",
      icon: TreePine,
      tags: ["Reforestation", "Community Engagement", "Soil Conservation"]
    },
    {
      id: 2,
      title: "Seedling Nursery Management",
      description: "Managed a forest seedling nursery, overseeing the propagation and care of native tree species. Implemented sustainable watering systems and monitored growth patterns for optimal survival rates.",
      icon: Leaf,
      tags: ["Nursery Management", "Plant Care", "Sustainability"]
    },
    {
      id: 3,
      title: "Forest Ecosystem Research",
      description: "Conducted field research on forest biodiversity and ecosystem health, collecting data on tree species, soil quality, and wildlife habitats to support conservation efforts.",
      icon: Users,
      tags: ["Research", "Biodiversity", "Data Collection"]
    },
    {
      id: 4,
      title: "Sustainable Water Management",
      description: "Developed water conservation strategies for forest areas, including rainwater harvesting systems and efficient irrigation methods for newly planted trees.",
      icon: Droplets,
      tags: ["Water Conservation", "Irrigation", "Sustainability"]
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4">Projects & Showcase</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in forest management, conservation, and sustainable practices
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border-forest/20 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Content */}
                <div className="p-6 sm:p-8 order-2 lg:order-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-forest/10 p-3 rounded-lg">
                      <project.icon className="w-6 h-6 text-forest" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-forest">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-forest/10 text-forest">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Photo Gallery */}
                <div className="p-6 sm:p-8 order-1 lg:order-2">
                  <PhotoGallery photos={projectPhotos} columns={3} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
