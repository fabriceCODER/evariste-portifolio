
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      period: "2022 – Present",
      institution: "Rwanda Polytechnic – Kitabi College",
      degree: "Advanced Diploma in Forest Resources Management",
      status: "Current",
      description: "Comprehensive study of sustainable forestry practices, ecosystem management, and environmental conservation."
    },
    {
      period: "2019 – 2022",
      institution: "GS. MUHURA, Gatsibo",
      degree: "Secondary Education",
      status: "Completed",
      description: "Strong foundation in sciences and mathematics, preparing for advanced forestry studies."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in forestry science and environmental stewardship
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-forest/20"></div>
              )}
              
              <Card className="p-6 ml-14 hover:shadow-lg transition-all duration-300 border-forest/20">
                <div className="absolute -left-3 top-6 w-12 h-12 bg-forest rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest mb-1">{edu.degree}</h3>
                    <p className="text-forest-light font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-sky/20 text-sky' 
                        : 'bg-forest/20 text-forest'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
