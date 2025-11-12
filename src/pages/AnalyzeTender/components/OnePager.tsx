import { DollarSign, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { OnePagerData } from '@/lib/types/analyze.type';

interface OnePagerProps {
  onePager: OnePagerData;
}

export default function OnePager({ onePager }: OnePagerProps) {
  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Project Overview</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {onePager.project_overview}
        </p>
      </Card>

      {/* Financial Requirements */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Financial Requirements
        </h3>
        <ul className="space-y-2">
          {onePager.financial_requirements.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Eligibility Highlights */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Eligibility Highlights</h3>
        <ul className="space-y-2">
          {onePager.eligibility_highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Key Dates */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Important Dates
        </h3>
        <ul className="space-y-2">
          {onePager.important_dates.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Risk Analysis */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Risk Analysis
        </h3>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
          {onePager.risk_analysis.summary}
        </p>
      </Card>
    </div>
  );
}
