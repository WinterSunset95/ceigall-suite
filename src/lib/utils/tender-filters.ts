import { Tender } from '@/lib/types/tenderiq';

/**
 * Parse tender value string to number
 * @param value - Tender value string (e.g., "30 Cr", "Ref Document")
 * @returns Parsed numeric value or null if not parseable
 */
export const parseTenderValue = (value: string): number | null => {
  if (value === "Ref Document") return null;
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : null;
};

/**
 * Get color class for tender value display
 * @param value - Tender value string
 * @returns Tailwind color class
 */
export const getValueColor = (value: string): string => {
  const numValue = parseTenderValue(value);
  if (numValue === null) return "text-muted-foreground";
  if (numValue >= 30) return "text-green-600 font-semibold";
  if (numValue >= 10) return "text-blue-600 font-semibold";
  return "text-muted-foreground";
};

export interface TenderFilterParams {
  searchTerm?: string;
  category?: string;
  location?: string;
  minValue?: number | null;
  maxValue?: number | null;
}

/**
 * Filter tenders based on multiple criteria
 * @param tenders - Array of tenders to filter
 * @param params - Filter parameters
 * @returns Filtered array of tenders
 */
export const filterTenders = (
  tenders: Tender[],
  params: TenderFilterParams
): Tender[] => {
  return tenders.filter(tender => {
    // Search filter
    if (params.searchTerm) {
      const search = params.searchTerm.toLowerCase();
      const matchesSearch =
        tender.organization.toLowerCase().includes(search) ||
        tender.tdrNumber.toLowerCase().includes(search) ||
        tender.description.toLowerCase().includes(search) ||
        tender.category.toLowerCase().includes(search);

      if (!matchesSearch) return false;
    }

    // Category filter
    if (params.category && params.category !== "all") {
      if (tender.category !== params.category) return false;
    }

    // Location filter
    if (params.location && params.location !== "all") {
      if (!tender.location.includes(params.location)) return false;
    }

    // Value range filter
    const tenderVal = parseTenderValue(tender.tenderValue);
    if (tenderVal !== null) {
      if (params.minValue !== undefined && params.minValue !== null) {
        if (tenderVal < params.minValue) return false;
      }
      if (params.maxValue !== undefined && params.maxValue !== null) {
        if (tenderVal > params.maxValue) return false;
      }
    }

    return true;
  });
};

/**
 * Group tenders by category
 * @param tenders - Array of tenders to group
 * @returns Object with categories as keys and tender arrays as values
 */
export const groupTendersByCategory = (
  tenders: Tender[]
): Record<string, Tender[]> => {
  const grouped: Record<string, Tender[]> = {};
  tenders.forEach(tender => {
    if (!grouped[tender.category]) {
      grouped[tender.category] = [];
    }
    grouped[tender.category].push(tender);
  });
  return grouped;
};

/**
 * Auto-select the first "Civil" category from available categories
 * @param tenders - Array of tenders
 * @returns Selected category or "all"
 */
export const getDefaultCategory = (tenders: Tender[]): string => {
  const categories = new Set(tenders.map(t => t.category));
  for (const cat of categories) {
    if (cat.includes("Civil")) {
      return cat;
    }
  }
  return "all";
};
