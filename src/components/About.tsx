
import { Card } from "@/components/ui/card";
import { Users, MessageCircle, Lightbulb, Award, Heart, Zap } from "lucide-react";
import PhotoGallery from "./PhotoGallery";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "Leadership", icon: Award, description: "Guiding teams towards sustainable solutions" },
    { name: "Teamwork", icon: Users, description: "Collaborating effectively in diverse environments" },
    { name: "Communication", icon: MessageCircle, description: "Bridging technical and community perspectives" },
    { name: "Innovation", icon: Lightbulb, description: "Developing creative approaches to forest management" },
    { name: "Creativity", icon: Heart, description: "Finding artistic solutions to environmental challenges" },
    { name: "Hard Work", icon: Zap, description: "Dedicated commitment to environmental conservation" },
  ];

  const personalPhotos = [
    {
      id: "about-1",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Evariste in the field",
      caption: "Field work and research"
    },
    {
      id: "about-2",
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Studying in nature",
      caption: "Learning from nature"
    },
    {
      id: "about-3",
      src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Environmental conservation",
      caption: "Conservation activities"
    },
    {
      id: "about-4",
      src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team collaboration",
      caption: "Working with community"
    },
    {
      id: "about-5",
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Nature walks",
      caption: "Exploring forest ecosystems"
    },
    {
      id: "about-6",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Forestry studies",
      caption: "Academic pursuits"
    }
  ];

  const languages = [
    { name: "Kinyarwanda", level: "Native", flag: "🇷🇼" },
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "French", level: "Intermediate", flag: "🇫🇷" },
    { name: "Swahili", level: "Basic", flag: "🇹🇿" }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-earth/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-4 sm:mb-6">
                {t('about.title')}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                {t('about.description')}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey in forestry is driven by a deep commitment to environmental conservation 
                and sustainable development. I believe in the power of collaboration and innovation 
                to address the challenges facing our forests and communities.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-forest mb-4 sm:mb-6">Core Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <Card key={skill.name} className="p-4 sm:p-6 card-hover border-forest/20">
                    <div className="flex items-start space-x-3">
                      <div className="bg-forest/10 p-2 rounded-lg flex-shrink-0">
                        <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest text-sm sm:text-base">{skill.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-forest mb-4 sm:mb-6">Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {languages.map((lang) => (
                  <Card key={lang.name} className="p-3 sm:p-4 text-center border-forest/20">
                    <div className="text-2xl sm:text-3xl mb-2">{lang.flag}</div>
                    <h4 className="font-semibold text-forest text-sm sm:text-base">{lang.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{lang.level}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Photo Gallery */}
          <div className="order-first xl:order-last">
            <h3 className="text-xl sm:text-2xl font-semibold text-forest mb-4 sm:mb-6">Gallery</h3>
            <PhotoGallery photos={personalPhotos} columns={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
