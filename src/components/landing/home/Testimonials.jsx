"use client";
import Heading from "@/components/common/Heading";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "Rozieventures Florals made our wedding day absolutely magical. The arrangements were beyond beautiful and exceeded all our expectations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Planner",
      content:
        "I've worked with many florists, but the quality and attention to detail from Rozieventures is unmatched. Truly premium service.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Corporate Client",
      content:
        "The monthly office arrangements have transformed our workspace. Our clients always compliment the beautiful fresh flowers.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Anniversary Gift",
      content:
        "Ordered flowers for our anniversary and my wife was thrilled. The presentation was elegant and the flowers stayed fresh for weeks.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Heading text={" What Our Customers Say"} />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card border-0 text-center">
                    <CardContent className="p-4 md:p-12">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16  bg-gradient-to-l from-secondary to-primary  rounded-full flex items-center justify-center">
                          <Quote className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-accent fill-accent"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="sm:text-xl text-lg md:text-2xl font-inter text-foreground mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 sm:w-16 h-10 sm:h-16 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div className="text-left">
                          <div className="font-playfair text-lg font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-muted-foreground font-inter">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold font-playfair text-primary mb-2">
              4.9/5
            </div>
            <div className="text-muted-foreground font-inter text-sm">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-playfair text-primary mb-2">
              10K+
            </div>
            <div className="text-muted-foreground font-inter text-sm">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-playfair text-primary mb-2">
              99%
            </div>
            <div className="text-muted-foreground font-inter text-sm">
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-playfair text-primary mb-2">
              5K+
            </div>
            <div className="text-muted-foreground font-inter text-sm">
              5-Star Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
