import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import CalendarView from "@/components/CalendarView";
import { Button } from "@/components/ui/button";
import { Plus, BarChart3, Home, Video, Moon, Bell, User } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Home className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistiques des Véhicules
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Moon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <StatsCard title="Véhicules disponibles" value={1} />
          <StatsCard title="Contrats actifs" value={8} />
          <StatsCard title="Réservations en attente" value={1} />
          <Button className="bg-secondary hover:bg-secondary/90 h-auto py-6 text-base font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Nouveau contrat
          </Button>
          <Button className="bg-primary hover:bg-primary/90 h-auto py-6 text-base font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Nouvelle réservation
          </Button>
        </div>

        {/* Calendar */}
        <CalendarView />
      </div>
    </DashboardLayout>
  );
};

export default Index;
