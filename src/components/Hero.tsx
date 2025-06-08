
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a downloadable CV link
    const link = document.createElement('a');
    link.href = '/evascv.pdf';
    link.download = 'evascv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"
          />
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&q=80"
            alt="Forest landscape"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="mx-auto mb-6 sm:mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
              <img 
                src="/profile.jpg"
                alt="Evariste NSABIMANA" 
                className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-forest/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Button 
              onClick={scrollToExperience}
              size="lg"
              className="bg-forest hover:bg-forest-light text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 btn-touch w-full sm:w-auto"
            >
              {t('hero.cta')}
            </Button>
            
            <Button 
              onClick={downloadCV}
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 btn-touch w-full sm:w-auto"
            >
              {t('hero.downloadCV')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
