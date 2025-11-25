import { useState, useEffect } from "react";
import { Slide } from "@/components/Slide";
import { SlideNavigation } from "@/components/SlideNavigation";
import { StatCard } from "@/components/StatCard";
import { Droplets, TrendingDown, Building2, Factory, Home, AlertTriangle } from "lucide-react";

import heroImage from "@/assets/hero-classroom.jpg";
import crisisImage from "@/assets/water-crisis.jpg";
import cityImage from "@/assets/city-skyline.jpg";
import tapImage from "@/assets/tap-moment.jpg";
import actionImage from "@/assets/action-hands.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Opening
    <Slide key={0} backgroundImage={heroImage}>
      <div className="text-center space-y-6 fade-in">
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-balance">
          The Topic They All Chose
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed fade-in-delay">
          In our school's speech competition, students were given six topics. Technology, sports, dreams, leadership… and Water.
        </p>
      </div>
    </Slide>,

    // Slide 2: The Surprise
    <Slide key={1}>
      <div className="text-center space-y-8 fade-in">
        <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full border border-primary/30 mb-8">
          <Droplets className="h-8 w-8 text-primary" />
          <span className="text-2xl font-semibold">The Surprising Choice</span>
        </div>
        <h2 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-br from-primary to-stat-highlight bg-clip-text text-transparent">
          70%
        </h2>
        <p className="text-3xl md:text-4xl text-foreground max-w-4xl mx-auto text-balance leading-relaxed fade-in-delay">
          Almost 70% of students chose the same topic.
        </p>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto fade-in-delay">
          Not dreams. Not sports. Not technology. They chose <span className="text-primary font-bold">water</span>.
        </p>
      </div>
    </Slide>,

    // Slide 3: Why They're Right
    <Slide key={2} backgroundImage={crisisImage}>
      <div className="space-y-12 fade-in">
        <h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
          And honestly, they're not wrong.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <StatCard
            number="18%"
            label="Of world's population"
            icon={<Building2 className="h-12 w-12" />}
          />
          <StatCard
            number="4%"
            label="Of freshwater resources"
            icon={<Droplets className="h-12 w-12" />}
            variant="urgent"
          />
        </div>
      </div>
    </Slide>,

    // Slide 4: 2030 Crisis
    <Slide key={3}>
      <div className="text-center space-y-12 fade-in">
        <div className="inline-flex items-center gap-4 bg-crisis-urgent/10 px-8 py-4 rounded-full border border-crisis-urgent/30 mb-8">
          <AlertTriangle className="h-8 w-8 text-crisis-urgent" />
          <span className="text-2xl font-semibold">By 2030</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-balance max-w-4xl mx-auto">
          Our demand will be <span className="text-crisis-urgent">double</span> our supply
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 fade-in-delay">
          <StatCard
            number="6%"
            label="GDP loss projected"
            variant="urgent"
          />
          <p className="text-xl text-muted-foreground">
            A shortage big enough to cut 6% of our GDP
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 5: Cities at Risk
    <Slide key={4} backgroundImage={cityImage}>
      <div className="space-y-12 fade-in">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Cities on the Edge
          </h2>
          <StatCard
            number="21"
            label="Major cities heading to zero groundwater"
            icon={<Building2 className="h-12 w-12" />}
            variant="urgent"
            className="max-w-2xl mx-auto"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto fade-in-delay">
          {["Delhi", "Bengaluru", "Chennai", "Hyderabad"].map((city) => (
            <div key={city} className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border text-center">
              <p className="text-2xl font-bold text-crisis-urgent">{city}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    // Slide 6: Consumption Breakdown
    <Slide key={5}>
      <div className="space-y-12 fade-in">
        <h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
          Where Water Goes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard
            number="78%"
            label="Agriculture"
            icon={<TrendingDown className="h-12 w-12" />}
            variant="warning"
          />
          <StatCard
            number="16%"
            label="Households"
            icon={<Home className="h-12 w-12" />}
          />
          <StatCard
            number="6%"
            label="Industries"
            icon={<Factory className="h-12 w-12" />}
          />
        </div>
      </div>
    </Slide>,

    // Slide 7: Infrastructure Crisis
    <Slide key={6}>
      <div className="text-center space-y-12 fade-in">
        <h2 className="text-5xl md:text-7xl font-black mb-12 text-balance">
          The Hidden Waste
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StatCard
            number="₹60,000 Cr"
            label="Lost yearly through leaks"
            variant="urgent"
          />
          <StatCard
            number="18%"
            label="Wastewater treated"
            variant="urgent"
          />
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-delay">
          We lose thousands of crores every year through broken infrastructure
        </p>
      </div>
    </Slide>,

    // Slide 8: The Moment
    <Slide key={7} backgroundImage={tapImage}>
      <div className="text-center space-y-8 fade-in">
        <h2 className="text-6xl md:text-8xl font-black mb-8 text-balance">
          The Moment of Truth
        </h2>
        <p className="text-3xl md:text-4xl text-foreground max-w-4xl mx-auto text-balance leading-relaxed fade-in-delay">
          Powerful speeches ended. The applause faded.
        </p>
        <p className="text-3xl md:text-4xl font-bold text-crisis-urgent max-w-4xl mx-auto text-balance fade-in-delay">
          And someone left the tap running backstage.
        </p>
      </div>
    </Slide>,

    // Slide 9: The Truth
    <Slide key={8}>
      <div className="text-center space-y-12 fade-in">
        <h2 className="text-6xl md:text-8xl font-black mb-12 text-balance">
          The Truth
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl font-bold text-balance leading-relaxed">
            India doesn't lack awareness.
          </p>
          <p className="text-4xl md:text-5xl font-black text-crisis-urgent text-balance fade-in-delay">
            India lacks action.
          </p>
          <p className="text-2xl text-muted-foreground text-balance leading-relaxed fade-in-delay">
            We don't need more competitions on saving water—we need habits that save water.
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 10: Call to Action
    <Slide key={9} backgroundImage={actionImage}>
      <div className="text-center space-y-12 fade-in">
        <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full border border-primary/30 mb-8">
          <Droplets className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-12 text-balance">
          Be The Change
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-balance leading-relaxed max-w-4xl mx-auto fade-in-delay">
          In the end, the winner isn't the best speech…
        </p>
        <p className="text-4xl md:text-5xl font-black text-primary text-balance max-w-4xl mx-auto fade-in-delay">
          It's the person who actually turns the tap off.
        </p>
      </div>
    </Slide>,
  ];

  return (
    <div className="relative">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              {slide}
            </div>
          ))}
        </div>
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
        onNext={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
      />
    </div>
  );
};

export default Index;
