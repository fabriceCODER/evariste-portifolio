
import { Card } from "@/components/ui/card";
import { Users, Mail, Briefcase } from "lucide-react";

const Referees = () => {
  const referees = [
    {
      name: "Gedeon MANIRAKIZA",
      title: "Head of Forestry Department",
      organization: "IPRC Kitabi",
      icon: Briefcase,
    },
    {
      name: "Beatrice NZAMUKOSHA",
      title: "Lecturer",
      organization: "RP-Kitabi College",
      icon: Users,
    }
  ];

  return (
    <section id="referees" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest mb-4">Professional References</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mentors and educators who have guided my forestry journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {referees.map((referee, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-forest/20">
              <div className="flex items-start space-x-4">
                <div className="bg-forest/10 p-3 rounded-lg">
                  <referee.icon className="w-6 h-6 text-forest" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-forest mb-1">{referee.name}</h3>
                  <p className="text-forest-light font-medium mb-1">{referee.title}</p>
                  <p className="text-muted-foreground text-sm">{referee.organization}</p>
                  <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>Available upon request</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Referees;
