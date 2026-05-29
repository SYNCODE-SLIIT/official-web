import { TestimonialSlider } from "@/components/ui/testimonial-slider-1";

const reviews = [
  {
    id: 1,
    name: "Nathan Reid",
    affiliation: "China Lanka Motors",
    quote:
      "SYNCODE rebuilt our platform exactly the way we needed - fast, stable, and easy for our team to manage day to day.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&auto=format",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Ashley Jordan",
    affiliation: "Jayas Victory Travels",
    quote:
      "From inquiry flow to booking pages, everything feels cleaner now. We saw better conversion within weeks of launch.",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&auto=format",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=120&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Daniel Carter",
    affiliation: "Unicare Connect",
    quote:
      "The team understood our healthcare requirements and delivered with real ownership. Reliable communication and solid execution.",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&auto=format",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=120&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Sophie Bennett",
    affiliation: "Maison Ashri",
    quote:
      "SYNCODE gave our brand a premium digital experience without overcomplicating it. Design quality and performance are both excellent.",
    imageSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&auto=format",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=120&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Marcus Lane",
    affiliation: "Hotel Seven Way",
    quote:
      "They handled the full delivery smoothly - UI, content flow, responsiveness, and deployment. Exactly the partner we hoped for.",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&auto=format",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=120&fit=crop&auto=format",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-[#0a0a0a] w-full">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <TestimonialSlider reviews={reviews} />
      </div>
    </section>
  );
};

export default Testimonials;
