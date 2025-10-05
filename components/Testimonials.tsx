
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="flex-shrink-0 w-96 bg-white border border-[#E0D6FF] rounded-2xl p-8 flex gap-6 shadow-lg">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-lg object-cover"/>
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <span className="text-sm text-[#4A4A6A]">{testimonial.handle}</span>
                </div>
                <p className="text-sm text-[#4A4A6A] mt-3 leading-relaxed">{testimonial.quote}</p>
            </div>
        </div>
    );
};

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <section className="py-24 bg-[#F0F0F5]">
             <div className="container mx-auto">
                <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar px-4">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} testimonial={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};