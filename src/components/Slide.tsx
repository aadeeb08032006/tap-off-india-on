import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export const Slide = ({ children, className, backgroundImage }: SlideProps) => {
  return (
    <div className={cn("min-h-screen w-full flex items-center justify-center relative overflow-hidden", className)}>
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </>
      )}
      <div className="relative z-10 container max-w-6xl px-6 md:px-12">
        {children}
      </div>
    </div>
  );
};
