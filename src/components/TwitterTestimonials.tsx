import { Card } from "@/components/ui/card";
import { Twitter } from "lucide-react";

const TwitterTestimonials = () => {
  const testimonials = [
    {
      quote: "I quit drinking and 100x my productivity",
      author: "Alan Shepard",
    },
    {
      quote: "I focused on meditation and removed the urge to drink",
      author: "Lisa Penderton",
    },
    {
      quote: "The respect that I gained from family was well worth me leaving alcohol behind me!",
      author: "Vijay Kumar",
    },
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-white/50"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <p className="text-lg font-medium text-slate-800">"{testimonial.quote}"</p>
                  <Twitter className="h-5 w-5 text-[#1DA1F2] flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600">- {testimonial.author}, Twitter</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwitterTestimonials;