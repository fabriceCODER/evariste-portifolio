
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from "./PhotoGallery";
import { Leaf, TreePine, Users, Droplets } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Community Tree Planting Initiative",
      description: "Led a community-based reforestation project in collaboration with local farmers, planting over 500 indigenous tree seedlings to restore degraded land and improve soil conservation.",
      icon: TreePine,
      tags: ["Reforestation", "Community Engagement", "Soil Conservation"],
      photos: [
        {
          id: "1-1",
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Tree planting activity",
          caption: "Community members planting seedlings"
        },
        {
          id: "1-2",
          src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Seedling care",
          caption: "Watering newly planted trees"
        },
        {
          id: "1-3",
          src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Team working",
          caption: "Team collaboration in the field"
        },
        {
          id: "1-4",
          src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Forest growth",
          caption: "Monitoring tree growth progress"
        }
      ]
    },
    {
      id: 2,
      title: "Seedling Nursery Management",
      description: "Managed a forest seedling nursery, overseeing the propagation and care of native tree species. Implemented sustainable watering systems and monitored growth patterns for optimal survival rates.",
      icon: Leaf,
      tags: ["Nursery Management", "Native Species", "Sustainable Practices"],
      photos: [
        {
          id: "2-1",
          src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Seedling nursery",
          caption: "Organized seedling nursery setup"
        },
        {
          id: "2-2",
          src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Watering seedlings",
          caption: "Daily care and watering routine"
        },
        {
          id: "2-3",
          src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Growth monitoring",
          caption: "Monitoring seedling development"
        }
      ]
    },
    {
      id: 3,
      title: "Forest Ecosystem Research",
      description: "Conducted field research on forest biodiversity and ecosystem health, collecting data on tree species, soil quality, and wildlife habitats to support conservation efforts.",
      icon: Users,
      tags: ["Research", "Biodiversity", "Ecosystem Health"],
      photos: [
        {
          id: "3-1",
          src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Field research",
          caption: "Conducting forest ecosystem research"
        },
        {
          id: "3-2",
          src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Data collection",
          caption: "Collecting biodiversity data"
        }
      ]
    },
    {
      id: 4,
      title: "Sustainable Water Management",
      description: "Developed water conservation strategies for forest areas, including rainwater harvesting systems and efficient irrigation methods for newly planted trees.",
      icon: Droplets,
      tags: ["Water Conservation", "Irrigation", "Sustainability"],
      photos: [
        {
          id: "4-1",
          src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Water management",
          caption: "Implementing water conservation methods"
        },
        {
          id: "4-2",
          src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Irrigation system",
          caption: "Sustainable irrigation setup"
        }
      ]
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
                  <PhotoGallery photos={project.photos} columns={2} />
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
