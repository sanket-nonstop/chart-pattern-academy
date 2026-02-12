import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface InteractiveChartProps {
  image: string;
  alt: string;
  annotations?: {
    label: string;
    description: string;
    color: string;
  }[];
}

const InteractiveChart = ({ image, alt, annotations = [] }: InteractiveChartProps) => {
  const [showAnnotations, setShowAnnotations] = useState(false);

  if (annotations.length === 0) {
    return (
      <div className="overflow-hidden rounded-lg border border-border">
        <img src={image} alt={alt} className="w-full" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-border">
        <img src={image} alt={alt} className="w-full" loading="lazy" />
      </div>
      
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAnnotations(!showAnnotations)}
          className="gap-2"
        >
          {showAnnotations ? (
            <>
              <EyeOff className="h-4 w-4" />
              Hide Key Points
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              Show Key Points
            </>
          )}
        </Button>
      </div>

      {showAnnotations && (
        <div className="space-y-3 rounded-lg border border-border bg-card p-4">
          {annotations.map((annotation, i) => (
            <div key={i} className="flex gap-3">
              <div
                className="mt-1 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: annotation.color }}
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{annotation.label}</p>
                <p className="text-sm text-muted-foreground">{annotation.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveChart;
