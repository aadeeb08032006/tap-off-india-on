import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideNavigationProps) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-card/80 backdrop-blur-lg px-6 py-4 rounded-full border border-border print:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrint}
        className="rounded-full"
        title="Print to PDF"
      >
        <Printer className="h-5 w-5" />
      </Button>

      <div className="w-px h-6 bg-border" />
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="rounded-full disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30"
            )}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="rounded-full disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
};
