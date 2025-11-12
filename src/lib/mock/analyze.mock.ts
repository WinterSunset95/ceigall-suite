/**
 * Mock data for TenderIQ Analyze Module
 * Complete response from single endpoint: GET /api/v1/tenderiq/analyze/{tenderId}
 */

import { TenderAnalysisResponse } from '@/lib/types/analyze.type';

export const mockTenderAnalysis: TenderAnalysisResponse = {
  id: 'analysis-001',
  tender_id: 'tender-2024-001',
  status: 'completed',
  analyzed_at: '2024-01-16T11:45:00Z',

  // ============================================================================
  // One-Pager Section
  // ============================================================================
  one_pager: {
    project_overview:
      'Construction and development of a smart road junction with integrated traffic management, real-time monitoring, and automated control systems. The project includes excavation, foundation work, PCC, reinforced concrete structure, and installation of smart infrastructure.',
    financial_requirements: [
      'Contract Value: ₹50,00,00,000 (Rs. 50 Crore)',
      'EMD: ₹2,50,00,000 (5% of contract value)',
      'Performance Guarantee: ₹5,00,00,000 (10% of contract value)',
      'Tender Document Fee: ₹50,000 (non-refundable)',
      'Total Upfront Cost: ₹7,57,50,000',
      'Payment Terms: 90% on certificate basis, 10% on final completion',
    ],
    eligibility_highlights: [
      'Minimum 10 years of experience in road infrastructure projects',
      'Minimum turnover of ₹25 crore in the last 3 years',
      'Valid GSTIN and statutory compliance required',
      'No blacklisting in past 5 years',
      'MSEs can participate with 50% reduced EMD',
      'Female-led enterprises get 5% price preference',
    ],
    important_dates: [
      'Pre-bid Meeting: 20-Feb-2024 at 14:00 hrs',
      'Bid Submission Deadline: 29-Feb-2024 at 17:00 hrs',
      'Technical Bid Opening: 05-Mar-2024 at 11:00 hrs',
      'Financial Bid Opening: 12-Mar-2024 at 14:00 hrs',
      'Expected Award Date: 20-Mar-2024',
      'Project Start Date: 15-Apr-2024',
      'Project Duration: 18 months from commencement',
    ],
    risk_analysis: {
      summary:
        'Overall Risk Level: MEDIUM\n\n' +
        'Key Risks:\n' +
        '• Weather-dependent construction activities - Impact: HIGH\n' +
        '• Traffic management challenges during implementation - Impact: HIGH\n' +
        '• Coordination with municipal utilities (water, electricity, telecom) - Impact: MEDIUM\n' +
        '• Land acquisition and clearance risks - Impact: MEDIUM\n' +
        '• Regulatory compliance and approvals - Impact: MEDIUM\n' +
        '• Skilled labor availability - Impact: LOW\n\n' +
        'Mitigation Strategy: Comprehensive planning, early coordination with authorities, robust quality control, and experienced project management team.',
    },
  },

  // ============================================================================
  // Scope of Work Section
  // ============================================================================
  scope_of_work: {
    project_details: {
      project_name: 'Smart Road Junction Construction',
      location: 'New Delhi, Central District',
      total_length: '250 meters',
      total_area: '15,000 square meters',
      duration: '18 months',
      contract_value: '₹50,00,00,000',
    },
    work_packages: [
      {
        id: 'wp-001',
        name: 'Site Preparation and Clearance',
        description: 'Land survey, marking, utility identification, and site establishment',
        components: [
          {
            item: 'Land Leveling',
            description: 'Cut and fill operations to achieve required levels',
            quantity: 15000,
            unit: 'Sq.m',
            specifications: 'As per site plan and design drawings',
          },
          {
            item: 'Utility Relocation',
            description: 'Relocation of water, electricity, and telecom lines',
            specifications: 'Coordination with respective authorities',
          },
          {
            item: 'Site Establishment',
            description: 'Office, store, and worker accommodation setup',
            quantity: 5000,
            unit: 'Sq.m',
          },
        ],
        estimated_duration: '3 months',
      },
      {
        id: 'wp-002',
        name: 'Structural Works',
        description: 'Excavation, foundation, and concrete works',
        components: [
          {
            item: 'Excavation',
            description: 'Bulk excavation for foundation and utilities',
            quantity: 50000,
            unit: 'Cu.m',
          },
          {
            item: 'Reinforced Concrete',
            description: 'Foundation, columns, and slab works',
            quantity: 35000,
            unit: 'Cu.m',
            specifications: 'M40 grade concrete, Fe500D reinforcement',
          },
          {
            item: 'Surface Finish',
            description: 'Concrete curing and finish coating',
            quantity: 15000,
            unit: 'Sq.m',
          },
        ],
        estimated_duration: '8 months',
        dependencies: ['wp-001'],
      },
      {
        id: 'wp-003',
        name: 'Smart Systems Installation',
        description: 'Installation of traffic management, sensors, and monitoring systems',
        components: [
          {
            item: 'Traffic Control Devices',
            description: 'Traffic signals, lane control signs, variable message signs',
          },
          {
            item: 'Sensor Installation',
            description: 'Vehicle detection, environmental sensors, IoT devices',
          },
          {
            item: 'Central Control System',
            description: 'Server setup, software installation, network infrastructure',
          },
        ],
        estimated_duration: '5 months',
        dependencies: ['wp-002'],
      },
    ],
    technical_specifications: {
      standards: [
        'Indian Roads Congress (IRC) guidelines - IRC:35-2015',
        'Ministry of Road Transport and Highways specifications',
        'National Building Code of India 2016',
        'ISO 9001:2015 for quality management',
        'ISO 14001:2015 for environmental management',
      ],
      quality_requirements: [
        'Concrete strength: M40 grade minimum',
        'Steel reinforcement: Fe500D grade, high yield strength',
        'Surface finish as per drawing specifications',
        'Quality assurance testing for all materials',
        'Third-party inspection at critical stages',
      ],
      materials_specification: [
        {
          material: 'Cement',
          specification: 'OPC Grade 53, IS 12269',
          source: 'Approved suppliers only',
          testing_standard: 'IS 4031',
        },
        {
          material: 'Steel Reinforcement',
          specification: 'Fe500D deformed bars, IS 1786',
          source: 'BIS certified manufacturers',
          testing_standard: 'IS 1608',
        },
        {
          material: 'Coarse Aggregate',
          specification: '20mm and 10mm graded, IS 2386',
          testing_standard: 'IS 2386',
        },
      ],
      testing_requirements: [
        'Concrete cube testing at 7 and 28 days strength',
        'Steel reinforcement certification',
        'Soil bearing capacity testing',
        'Quality control testing on all materials before use',
      ],
    },
    deliverables: [
      {
        item: 'Site Clearance Completion',
        description: 'All site preparation and utility relocation completed and approved',
        timeline: '3 months',
      },
      {
        item: 'Structural Completion Certificate',
        description: 'Completion of all structural works with inspection approval',
        timeline: '11 months',
      },
      {
        item: 'Smart Systems Operational',
        description: 'All smart systems installed, tested, and operational',
        timeline: '16 months',
      },
      {
        item: 'Project Completion and Handover',
        description: 'Final inspection, defect rectification, and handover to client',
        timeline: '18 months',
      },
    ],
    exclusions: [
      'Land acquisition and clearance (to be done by client)',
      'Utility maintenance post-completion (responsibility of respective authorities)',
      'Permanent staff deployment and operations',
    ],
  },

  // ============================================================================
  // RFP Sections
  // ============================================================================
  rfp_sections: {
    rfp_summary: {
      total_sections: 5,
      total_requirements: 45,
      criticality: {
        high: 18,
        medium: 15,
        low: 12,
      },
    },
    sections: [
      {
        section_number: '1',
        section_name: 'Eligibility Criteria',
        summary: 'Bidder must meet minimum experience, financial, and organizational requirements',
        key_points: [
          'Minimum 10 years experience in road construction projects',
          'Minimum average annual turnover of ₹25 crore in last 3 years',
          'No blacklisting by any government/semi-government authority in past 5 years',
          'Valid GSTIN registration and tax compliance',
          'Company must be registered as per Companies Act, 1956',
        ],
        critical_requirements: [
          'Company registration and incorporation documents mandatory',
          'CA-certified financial statements for last 3 years required',
          'Previous project completion certificates (minimum 3 projects)',
          'Auditor certificate confirming turnover and experience',
        ],
        considerations: [
          'Relaxation available for government PSUs',
          'MSE benefits applicable with supporting documents',
          'Joint venture allowed with minimum 51% participation',
          'Startup exemptions possible with DPIIT registration',
        ],
        risks: [
          'Stringent financial requirement may exclude smaller contractors',
          'Document verification process may be time-consuming',
          'Potential disputes over document authenticity',
        ],
        action_items: [
          'Prepare complete financial documentation and CA certificates',
          'Arrange all project completion certificates',
          'Maintain statutory compliance and tax filings',
          'Ensure GSTIN validity throughout project duration',
        ],
        documents: ['Incorporation Certificate', 'CA-certified Financials', 'Project Completion Certificates', 'GSTIN Certificate'],
      },
      {
        section_number: '2',
        section_name: 'Technical Specifications and Methodology',
        summary: 'Complete technical requirements including materials, methods, and quality standards',
        key_points: [
          'M40 grade concrete for all structural elements',
          'Fe500D reinforcement steel with proper testing',
          'All work as per IRC guidelines and NBC',
          'Smart systems integration with latest technology standards',
          'Environmental and safety compliance mandatory',
        ],
        critical_requirements: [
          'Detailed construction methodology for smart systems integration',
          'Comprehensive quality assurance and control plan',
          'Safety management plan and risk mitigation strategy',
          'Environmental management plan with waste handling',
          'Quality testing protocol for all materials',
        ],
        considerations: [
          'Latest technology adoption recommended for smart systems',
          'Sustainable and green construction practices preferred',
          'Minimal traffic disruption during construction',
          'Worker safety and site security measures',
        ],
        risks: [
          'Smart systems integration complexity may delay project',
          'Weather-dependent activities can cause delays',
          'Utility coordination challenges with municipal departments',
          'Quality control and inspection delays possible',
        ],
        action_items: [
          'Prepare detailed methodology for smart systems with timelines',
          'Develop comprehensive quality assurance and control plan',
          'Plan comprehensive traffic management strategy',
          'Prepare detailed safety and environmental management plans',
        ],
        documents: ['Technical Bid Form', 'Methodology Document', 'Quality Assurance Plan', 'Safety Plan', 'Environmental Plan'],
      },
      {
        section_number: '3',
        section_name: 'Financial Requirements and Payment Terms',
        summary: 'EMD, bid security, and financial terms for contract execution',
        key_points: [
          'EMD: ₹2.5 crore (5% of contract value) - mandatory before bid opening',
          'Performance guarantee: ₹5 crore (10% of contract value) - within 7 days of award',
          'Tender document fee: ₹50,000 non-refundable',
          'Payment: 90% on achievement certificates, 10% on final completion',
          'Advance payment up to 10% for material procurement allowed',
        ],
        critical_requirements: [
          'EMD submission in prescribed format before bid opening deadline',
          'Bank guarantee submission within 7 days of award',
          'Regular invoicing and payment claims submission',
          'Compliance with GST and income tax regulations',
        ],
        considerations: [
          'Advance payment facility available with proper documentation',
          'Retention money released on final completion and handover',
          'Interest payment on delayed payments as per contract terms',
          'Price variation clause not applicable for this contract',
        ],
        risks: [
          'High EMD requirement increases bid cost',
          'Late BG submission may result in disqualification',
          'Payment delays possible despite achievement certificates',
          'GST liability impact on project economics',
        ],
        action_items: [
          'Arrange bank guarantee facilities with bank at earliest',
          'Prepare detailed financial plan and cash flow projections',
          'Ensure adequate liquidity for project execution',
          'Set up invoicing and accounting systems in advance',
        ],
        documents: ['Bank Guarantee Template', 'Financial Plan', 'Payment Schedule', 'Invoicing Format'],
      },
      {
        section_number: '4',
        section_name: 'Project Execution and Timelines',
        summary: 'Project execution schedule, milestones, and timeline requirements',
        key_points: [
          'Total project duration: 18 months from commencement',
          'Milestone-based completion with penalties for delays',
          'Phased completion with specific deliverables at each stage',
          'Monthly reporting and progress documentation required',
          'Weekly site meetings and progress reviews mandatory',
        ],
        critical_requirements: [
          'Detailed Gantt chart showing all activities and dependencies',
          'Resource planning including manpower and equipment',
          'Quality milestones at each construction stage',
          'Monthly progress reports with photographic evidence',
        ],
        considerations: [
          'Flexibility for weather-related delays up to 2 weeks',
          'Extension possible for government authority delays',
          'Bonuses for early completion by more than 5%',
          'Penalty clauses for delays beyond permitted limits',
        ],
        risks: [
          'Aggressive timeline may be difficult to achieve',
          'Weather delays may exceed permitted limits',
          'Authority approvals may cause schedule slippage',
          'Labor availability issues during peak seasons',
        ],
        action_items: [
          'Prepare detailed Gantt chart with realistic timelines',
          'Identify critical path and potential bottlenecks',
          'Plan resource mobilization and equipment procurement',
          'Arrange backup plans for weather and authority delays',
        ],
        documents: ['Gantt Chart', 'Resource Plan', 'Equipment Schedule', 'Manpower Plan'],
      },
      {
        section_number: '5',
        section_name: 'Compliance and Regulatory Requirements',
        summary: 'Statutory compliance, permits, licenses, and regulatory approvals',
        key_points: [
          'All statutory approvals and permits to be obtained before work commencement',
          'Environmental clearance and pollution control compliance',
          'Labor law compliance and worker welfare provisions',
          'Safety standards as per Building and Other Construction Workers Act',
          'Regular compliance audits and third-party inspections',
        ],
        critical_requirements: [
          'Valid safety certification (ISO 45001 or equivalent)',
          'Environmental management system certification',
          'Labour compliance audit reports',
          'Insurance coverage for all risks',
        ],
        considerations: [
          'Sustainable practices for waste management',
          'Community engagement and neighborhood liaison',
          'Traffic and noise management during construction',
          'Heritage site sensitivity if applicable',
        ],
        risks: [
          'Delay in regulatory approvals',
          'Stringent environmental compliance requirements',
          'Labor disputes and workforce issues',
          'Third-party inspection delays',
        ],
        action_items: [
          'Obtain all regulatory approvals before mobilization',
          'Set up compliance management system',
          'Conduct pre-bid environmental impact assessment',
          'Arrange appropriate insurance and certifications',
        ],
        documents: ['Safety Certificate', 'Environmental Assessment', 'Labour Compliance Report', 'Insurance Policies'],
      },
    ],
  },

  // ============================================================================
  // Data Sheet
  // ============================================================================
  data_sheet: {
    project_information: [
      { label: 'Tender Number', value: 'MCD/2024/001', highlight: true },
      { label: 'Project Title', value: 'Construction and Development of Smart Road Junction', highlight: true },
      { label: 'Issuing Organization', value: 'Municipal Corporation of Delhi' },
      { label: 'Project Category', value: 'Civil Works - Road Infrastructure' },
      { label: 'Project Location', value: 'New Delhi, Central District, Delhi' },
    ],
    contract_details: [
      { label: 'Contract Type', value: 'Fixed price competitive bidding', highlight: true },
      { label: 'Contract Period', value: '18 months from project commencement' },
      { label: 'Contract Form', value: 'Standard CPWD Form' },
      { label: 'Governing Law', value: 'Indian Contract Act, 1872' },
    ],
    financial_details: [
      { label: 'Contract Value', value: '₹50,00,00,000', type: 'money', highlight: true },
      { label: 'EMD Amount', value: '₹2,50,00,000', type: 'money' },
      { label: 'EMD Percentage', value: '5% of contract value' },
      { label: 'Performance Guarantee', value: '₹5,00,00,000', type: 'money' },
      { label: 'Tender Document Fee', value: '₹50,000', type: 'money' },
    ],
    technical_summary: [
      { label: 'Scope Area', value: '15,000 square meters' },
      { label: 'Project Duration', value: '18 months' },
      { label: 'Quality Standards', value: 'IRC Guidelines and NBC 2016' },
      { label: 'Special Features', value: 'Smart traffic management and IoT monitoring systems' },
    ],
    important_dates: [
      { label: 'Pre-bid Meeting', value: '20-Feb-2024', type: 'date' },
      { label: 'Bid Submission Deadline', value: '29-Feb-2024 17:00 hrs', type: 'date', highlight: true },
      { label: 'Technical Bid Opening', value: '05-Mar-2024 11:00 hrs', type: 'date' },
      { label: 'Financial Bid Opening', value: '12-Mar-2024 14:00 hrs', type: 'date' },
      { label: 'Expected Award Date', value: '20-Mar-2024', type: 'date' },
      { label: 'Project Start Date', value: '15-Apr-2024', type: 'date' },
    ],
  },

  // ============================================================================
  // Templates
  // ============================================================================
  templates: {
    bid_submission_forms: [
      {
        id: 'form-001',
        name: 'Technical Bid Form',
        description: 'Main technical proposal document containing methodology and approach',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex A',
      },
      {
        id: 'form-002',
        name: 'Financial Bid Template',
        description: 'Detailed financial proposal with rate analysis',
        format: 'excel',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex B',
      },
      {
        id: 'form-003',
        name: 'Cover Letter and Declaration',
        description: 'Bidder information and compliance declaration',
        format: 'word',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex A1',
      },
    ],
    financial_formats: [
      {
        id: 'fin-001',
        name: 'Bill of Quantities (BOQ)',
        description: 'Itemized cost breakdown for all work items',
        format: 'excel',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex B1',
      },
      {
        id: 'fin-002',
        name: 'Rate Analysis Format',
        description: 'Detailed labor, material, and overhead costs analysis',
        format: 'excel',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex B2',
      },
      {
        id: 'fin-003',
        name: 'Financial Capacity Statement',
        description: 'CA-certified statement of financial capacity',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: false,
        annex: 'Annex B3',
      },
    ],
    technical_documents: [
      {
        id: 'tech-001',
        name: 'Construction Methodology Document',
        description: 'Detailed project execution plan and methodology with timelines',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex C',
      },
      {
        id: 'tech-002',
        name: 'Quality Assurance Plan',
        description: 'Quality control and testing procedures with inspection points',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex D',
      },
      {
        id: 'tech-003',
        name: 'Project Schedule (Gantt Chart)',
        description: 'Detailed project timeline with all milestones and dependencies',
        format: 'excel',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex E',
      },
      {
        id: 'tech-004',
        name: 'Safety and Environmental Plan',
        description: 'Comprehensive safety and environmental management strategy',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex F',
      },
    ],
    compliance_formats: [
      {
        id: 'comp-001',
        name: 'Experience Certificate Format',
        description: 'Template for previous project completion certificates',
        format: 'word',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex G',
      },
      {
        id: 'comp-002',
        name: 'Bank Guarantee Format',
        description: 'EMD and Performance Guarantee format as per specifications',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex H',
      },
      {
        id: 'comp-003',
        name: 'Eligibility Compliance Checklist',
        description: 'Checklist for verifying all eligibility requirements',
        format: 'word',
        downloadUrl: '#',
        mandatory: false,
        annex: 'Annex I',
      },
      {
        id: 'comp-004',
        name: 'Authority Compliance Certificate',
        description: 'Certificate of no blacklisting and statutory compliance',
        format: 'pdf',
        downloadUrl: '#',
        mandatory: true,
        annex: 'Annex J',
      },
    ],
  },
};
