interface Vehicle {
  id: number;
  name: string;
  image: string;
}

interface Booking {
  vehicleId: number;
  clientName: string;
  startDate: number;
  endDate: number;
  color: "primary" | "secondary" | "tertiary";
}

const vehicles: Vehicle[] = [
  { id: 1, name: "BMW Series 3", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=120&fit=crop" },
  { id: 2, name: "Toyota RAV4", image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=200&h=120&fit=crop" },
  { id: 3, name: "Mercedes GLE", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=120&fit=crop" },
  { id: 4, name: "Range Rover", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=120&fit=crop" },
  { id: 5, name: "BMW X5", image: "https://images.unsplash.com/photo-1617531653520-bd4f8e968a9d?w=200&h=120&fit=crop" },
  { id: 6, name: "Audi Q7", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&h=120&fit=crop" },
  { id: 7, name: "Volkswagen Tiguan", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=120&fit=crop" },
  { id: 8, name: "Nissan Patrol", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=200&h=120&fit=crop" },
  { id: 9, name: "Toyota Land Cruiser", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=120&fit=crop" },
];

const bookings: Booking[] = [
  { vehicleId: 2, clientName: "Hafdi Mohammed", startDate: 23, endDate: 27, color: "primary" },
  { vehicleId: 3, clientName: "Ahmed Elamrani", startDate: 23, endDate: 27, color: "primary" },
  { vehicleId: 4, clientName: "Asmae Essaidi", startDate: 25, endDate: 28, color: "primary" },
  { vehicleId: 5, clientName: "Rakia Tabriquet", startDate: 23, endDate: 29, color: "primary" },
  { vehicleId: 6, clientName: "Rakia Tabriquet", startDate: 25, endDate: 30, color: "primary" },
  { vehicleId: 7, clientName: "Redoune Saidi", startDate: 23, endDate: 30, color: "primary" },
  { vehicleId: 8, clientName: "Zakaria Hajji", startDate: 23, endDate: 31, color: "primary" },
  { vehicleId: 9, clientName: "SAID AIT ALI OUHADDOU", startDate: 25, endDate: 3, color: "primary" },
  { vehicleId: 1, clientName: "Hamid Serghini", startDate: 28, endDate: 2, color: "secondary" },
];

const januaryDates = Array.from({ length: 9 }, (_, i) => 23 + i);
const februaryDates = Array.from({ length: 8 }, (_, i) => 1 + i);

const weekDays = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];

export default function CalendarView() {
  const getBookingStyle = (booking: Booking, date: number, month: "january" | "february") => {
    const isInRange = month === "january" 
      ? date >= booking.startDate && (booking.endDate <= 31 ? date <= booking.endDate : true)
      : booking.endDate > 31 && date <= (booking.endDate - 31);
    
    if (!isInRange) return null;

    const colorMap = {
      primary: "bg-booking-primary",
      secondary: "bg-booking-secondary",
      tertiary: "bg-booking-tertiary",
    };

    return colorMap[booking.color];
  };

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="grid grid-cols-[240px_1fr_1fr] gap-0">
        {/* Vehicle Column */}
        <div className="border-r border-border">
          <div className="h-16 border-b border-border" />
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="h-16 border-b border-border p-2 flex items-center">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-20 h-12 object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* January Calendar */}
        <div className="border-r border-border">
          <div className="h-16 border-b border-border flex items-center justify-center">
            <h3 className="text-lg font-semibold text-foreground">January</h3>
          </div>
          <div className="grid grid-cols-9 border-b border-border">
            {weekDays.map((day, i) => (
              <div key={i} className="h-12 border-r border-border flex flex-col items-center justify-center text-xs">
                <span className="font-medium text-muted-foreground">{day}</span>
                <span className="text-foreground">{januaryDates[i]}</span>
              </div>
            ))}
            <div className="h-12 border-r border-border flex flex-col items-center justify-center text-xs">
              <span className="font-medium text-muted-foreground">Thu</span>
              <span className="text-foreground">30</span>
            </div>
            <div className="h-12 flex flex-col items-center justify-center text-xs">
              <span className="font-medium text-muted-foreground">Fri</span>
              <span className="text-foreground">31</span>
            </div>
          </div>
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="h-16 border-b border-border grid grid-cols-9 relative">
              {januaryDates.concat([30, 31]).map((date, i) => (
                <div key={i} className="border-r border-border" />
              ))}
              {bookings
                .filter((b) => b.vehicleId === vehicle.id)
                .map((booking, idx) => {
                  const startCol = booking.startDate - 22;
                  const endCol = booking.endDate > 31 ? 10 : booking.endDate - 22;
                  const width = endCol - startCol;
                  
                  return (
                    <div
                      key={idx}
                      className={`absolute h-10 top-3 rounded-lg flex items-center px-3 ${
                        booking.color === "primary" ? "bg-booking-primary" : "bg-booking-secondary"
                      }`}
                      style={{
                        left: `${((startCol - 1) / 9) * 100}%`,
                        width: `${(width / 9) * 100}%`,
                      }}
                    >
                      <span className="text-sm font-medium text-white truncate">
                        {booking.clientName}
                      </span>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        {/* February Calendar */}
        <div>
          <div className="h-16 border-b border-border flex items-center justify-center">
            <h3 className="text-lg font-semibold text-foreground">February</h3>
          </div>
          <div className="grid grid-cols-8 border-b border-border">
            {februaryDates.map((date, i) => (
              <div key={i} className="h-12 border-r border-border last:border-r-0 flex flex-col items-center justify-center text-xs">
                <span className="font-medium text-muted-foreground">{["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}</span>
                <span className="text-foreground">{date}</span>
              </div>
            ))}
          </div>
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="h-16 border-b border-border grid grid-cols-8 relative">
              {februaryDates.map((date, i) => (
                <div key={i} className="border-r border-border last:border-r-0" />
              ))}
              {bookings
                .filter((b) => b.vehicleId === vehicle.id && b.endDate > 31)
                .map((booking, idx) => {
                  const endCol = booking.endDate - 31;
                  
                  return (
                    <div
                      key={idx}
                      className={`absolute h-10 top-3 left-0 rounded-lg flex items-center px-3 ${
                        booking.color === "primary" ? "bg-booking-primary" : "bg-booking-secondary"
                      }`}
                      style={{
                        width: `${(endCol / 8) * 100}%`,
                      }}
                    >
                      <span className="text-sm font-medium text-white truncate">
                        {booking.clientName}
                      </span>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
