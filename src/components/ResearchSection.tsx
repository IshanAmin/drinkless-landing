import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Lightbulb } from "lucide-react";

const ResearchSection = () => {
  const studies = [
    {
      title: "Self-Monitoring in Alcohol Treatment",
      study: "Moos, R. H., & Moos, B. S. (2007). \"Rates and predictors of relapse during the first year after treatment for alcohol use disorders.\" Journal of Studies on Alcohol and Drugs.",
      findings: "This research indicates that patients who actively monitor their drinking behavior and triggers are better able to manage their alcohol use after treatment. The act of keeping track can provide insights that lead to better coping strategies."
    },
    {
      title: "The Alcohol Use Disorders Identification Test (AUDIT)",
      study: "Babor, T. F., de la Fuente, J. R., Saunders, J., & Grant, M. (2001). \"AUDIT: The Alcohol Use Disorders Identification Test: Guidelines for Use in Primary Care.\" World Health Organization.",
      findings: "This tool not only helps to identify individuals with hazardous or harmful drinking patterns but also emphasizes the importance of self-monitoring as part of treatment. The feedback from tracking can motivate individuals to reduce their consumption."
    },
    {
      title: "Behavioral Interventions",
      study: "Heather, N., & Riper, H. (2016). \"Reducing alcohol consumption: the role of self-monitoring and feedback.\" Alcohol Research UK.",
      findings: "This review highlights the effectiveness of self-monitoring combined with personalized feedback in reducing alcohol consumption. Individuals who track their drinking behaviors typically show a significant decrease in intake."
    },
    {
      title: "The Role of Technology",
      study: "Riper, H., et al. (2014). \"Effectiveness of web-based interventions for problematic alcohol use: a meta-analysis.\" BMC Public Health.",
      findings: "This meta-analysis included studies where participants used mobile apps or online platforms to track their drinking, and it found significant reductions in alcohol consumption. The monitoring aspect played a critical role in these outcomes."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Research-Backed Approach</h2>
          <p className="text-lg text-slate-600">
            Our methodology is grounded in clinical research and proven studies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ScrollArea className="h-[200px] rounded-md p-4">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <BookOpen className="h-5 w-5" />
                        <h4 className="font-semibold">Research Publication</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 pl-7">{study.study}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Lightbulb className="h-5 w-5" />
                        <h4 className="font-semibold">Key Findings</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 pl-7">{study.findings}</p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;