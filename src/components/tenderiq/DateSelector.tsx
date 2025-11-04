import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, Loader2, ChevronDown } from "lucide-react";
import { useDateSelector } from "@/hooks/useDateSelector";

interface DateSelectorProps {
  onDateSelect: (date: string | null, dateRange: string | null, includeAll: boolean) => void;
  selectedDate?: string;
  selectedDateRange?: string;
  includeAllDates?: boolean;
}

const DateSelector = ({
  onDateSelect,
  selectedDate,
  selectedDateRange,
  includeAllDates
}: DateSelectorProps) => {
  const { availableDates, isLoading, displayLabel } = useDateSelector(
    selectedDate,
    selectedDateRange,
    includeAllDates
  );

  const handleDateSelect = (date: string) => {
    onDateSelect(date, null, false);
  };

  const handleDateRangeSelect = (range: 'last_1_day' | 'last_5_days' | 'last_7_days' | 'last_30_days') => {
    onDateSelect(null, range, false);
  };

  const handleAllDates = () => {
    onDateSelect(null, null, true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          <Calendar className="h-4 w-4 mr-2" />
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              {displayLabel}
              <ChevronDown className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-96 overflow-y-auto">
        {/* Quick Filters */}
        <DropdownMenuLabel className="font-semibold">Quick Filters</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleDateRangeSelect('last_1_day')}>
          <span>Last 1 Day</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDateRangeSelect('last_5_days')}>
          <span>Last 5 Days</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDateRangeSelect('last_7_days')}>
          <span>Last 7 Days</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDateRangeSelect('last_30_days')}>
          <span>Last 30 Days</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleAllDates}>
          <span>All Dates</span>
        </DropdownMenuItem>

        {/* Separator */}
        {availableDates.length > 0 && <DropdownMenuSeparator />}

        {/* Available Dates */}
        {availableDates.length > 0 && (
          <>
            <DropdownMenuLabel className="font-semibold">Specific Dates</DropdownMenuLabel>
            {availableDates.map((dateObj) => (
              <DropdownMenuItem
                key={dateObj.date}
                onClick={() => handleDateSelect(dateObj.date)}
              >
                <div className="flex justify-between w-full">
                  <span>{dateObj.date_str}</span>
                  <span className="text-xs text-muted-foreground ml-4">
                    ({dateObj.tender_count})
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </>
        )}

        {/* Empty State */}
        {!isLoading && availableDates.length === 0 && (
          <div className="px-2 py-6 text-center text-sm text-muted-foreground">
            No dates available
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DateSelector;
