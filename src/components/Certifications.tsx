
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized achievements in academic and professional development
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-forest/20">
            <div className="flex items-center space-x-4">
              <div className="bg-forest p-3 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest mb-1">
                  Secondary Education Certificate
                </h3>
                <p className="text-forest-light font-medium">GS. MUHURA</p>
                <p className="text-muted-foreground text-sm">2019 - 2022</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
