
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, Utensils } from 'lucide-react';
import { getCulinaryDescription, getProTip } from '@/utils/culinaryUtils';
import { microgreensData } from '@/data/microgreens';

// Type for our microgreen variety
export type MicrogreenVariety = typeof microgreensData[0];

interface VarietyCardProps {
  variety: MicrogreenVariety;
}

const VarietyCard: React.FC<VarietyCardProps> = ({ variety }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={variety.image} 
          alt={variety.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{variety.name}</CardTitle>
        <CardDescription>Growth time: {variety.growthTime}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{variety.description}</p>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Flavor Profile:</h4>
            <p className="text-sm">{variety.flavorProfile}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1">Nutritional Highlights:</h4>
            <ul className="space-y-1">
              {variety.nutritionalHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <Utensils className="mr-2 h-4 w-4" />
              Culinary Uses
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Culinary Uses for {variety.name}
              </DialogTitle>
              <DialogDescription>
                Discover delicious ways to incorporate {variety.name.toLowerCase()} into your meals.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <ul className="space-y-3">
                {variety.culinaryUses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-md bg-secondary/50">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{use}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getCulinaryDescription(variety.id, use)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Pro Tip:</h4>
                <p className="text-sm text-muted-foreground">
                  {getProTip(variety.id)}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default VarietyCard;
