import { Icon } from "@radix-ui/react-select";
import {
  ActivitySquare,
  AlignVerticalJustifyEnd,
  Apple,
  BadgeDollarSign,
  BookOpen,
  Clock,
  Dumbbell,
  FlipHorizontal,
  Globe2,
  Goal,
  GraduationCap,
  HeartHandshake,
  HelpingHand,
  Lightbulb,
  Mic,
  PenSquare,
  PhoneOff,
  PlaneTakeoff,
  SmilePlus,
  TrendingUp,
} from "lucide-react";
import React from "react";

const HabitIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Productivity":
      return <TrendingUp className="text-dark-purple" />;
    case "Health & Fitness":
      return <Dumbbell className="text-dark-purple" />;
    case "Creativity":
      return <Lightbulb className="text-dark-purple" />;
    case "Learning & Growth":
      return <GraduationCap className="text-dark-purple" />;
    case "Social Connection":
      return <HeartHandshake className="text-dark-purple" />;
    case "Sustainability":
      return <Globe2 className="text-dark-purple" />;
    case "Time Management":
      return <Clock className="text-dark-purple" />;
    case "Reading":
      return <BookOpen className="text-dark-purple" />;
    case "Healthy Eating":
      return <Apple className="text-dark-purple" />;
    case "Self-Care":
      return <ActivitySquare className="text-dark-purple" />;
    case "Travel & Adventure":
      return <PlaneTakeoff className="text-dark-purple" />;
    case "Digital Detox":
      return <PhoneOff className="text-dark-purple" />;
    case "Reflection":
      return <FlipHorizontal className="text-dark-purple" />;
    case "Finances":
      return <BadgeDollarSign className="text-dark-purple" />;
    case "Journaling":
      return <PenSquare className="text-dark-purple" />;
    case "Goal Setting":
      return <Goal className="text-dark-purple" />;
    case "Gratitude":
      return <SmilePlus className="text-dark-purple" />;
    case "Organization":
      return <AlignVerticalJustifyEnd className="text-dark-purple" />;
    case "Communication":
      return <Mic className="text-dark-purple" />;
    case "Volunteering":
      return <HelpingHand className="text-dark-purple" />;
  }
};

export default HabitIcon;
