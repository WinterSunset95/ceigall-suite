import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { RFPSectionsData } from '@/lib/types/analyze.type';

interface RFPSectionsProps {
  rfpSections: RFPSectionsData;
}

export default function RFPSections({ rfpSections }: RFPSectionsProps) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold">RFP Summary</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Sections</p>
            <p className="text-2xl font-bold">{rfpSections.rfp_summary.total_sections}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total Requirements</p>
            <p className="text-2xl font-bold">{rfpSections.rfp_summary.total_requirements}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Critical</p>
            <p className="text-2xl font-bold text-red-600">{rfpSections.rfp_summary.criticality.high}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Medium</p>
            <p className="text-2xl font-bold text-yellow-600">{rfpSections.rfp_summary.criticality.medium}</p>
          </div>
        </div>
      </Card>

      {/* RFP Sections */}
      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Sections</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {rfpSections.sections.map((section, idx) => (
            <AccordionItem key={idx} value={`section-${idx}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{section.section_number}</Badge>
                    <p className="font-semibold">{section.section_name}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {section.summary && (
                    <div>
                      <h4 className="font-semibold mb-2">Summary</h4>
                      <p className="text-sm text-muted-foreground">{section.summary}</p>
                    </div>
                  )}

                  {section.key_points && section.key_points.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Points</h4>
                      <ul className="space-y-1 text-sm">
                        {section.key_points.map((point, pidx) => (
                          <li key={pidx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.critical_requirements && section.critical_requirements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">Critical Requirements</h4>
                      <ul className="space-y-1 text-sm">
                        {section.critical_requirements.map((req, ridx) => (
                          <li key={ridx} className="text-muted-foreground">• {req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.considerations && section.considerations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Considerations</h4>
                      <ul className="space-y-1 text-sm">
                        {section.considerations.map((cons, cidx) => (
                          <li key={cidx} className="text-muted-foreground">• {cons}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.risks && section.risks.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Risks</h4>
                      <ul className="space-y-1 text-sm">
                        {section.risks.map((risk, ridx) => (
                          <li key={ridx} className="text-muted-foreground">• {risk}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.action_items && section.action_items.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">Action Items</h4>
                      <ul className="space-y-1 text-sm">
                        {section.action_items.map((item, aidx) => (
                          <li key={aidx} className="text-muted-foreground">✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}
