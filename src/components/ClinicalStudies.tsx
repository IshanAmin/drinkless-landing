import { clinicalStudies } from "@/data/clinicalStudies";

const ClinicalStudies = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Clinically Proven
          <span className="gradient-text block">Research-Backed Approach</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our approach is grounded in extensive clinical research and proven methodologies.
          Here are some key studies that validate our methods:
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {clinicalStudies.map((study, index) => (
          <div 
            key={index}
            className="p-8 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">{study.title}</h3>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 italic">{study.study}</p>
              <p className="text-slate-600">{study.findings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalStudies;