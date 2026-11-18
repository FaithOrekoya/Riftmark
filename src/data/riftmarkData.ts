export interface KeyMetric {
  value: string;
  label: string;
  note: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  focus: string;
}

export interface WhyBenefit {
  id: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  context: string;
}

export interface CaseStudyItem {
  number: string;
  id: string;
  industry: string;
  headline: string;
  description: string;
  figure: string;
  figureCaption: string;
  image: string;
  imageAlt: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  readTime: string;
  sourceLabel: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
  takeaway: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const ASSETS = {
  heroPanel: '/src/assets/images/hero_stravelle_aec_1794968482042.jpg',
  aboutDocs: '/src/assets/images/case_study_engineering_1794927518700.jpg',
  aboutLeadership: '/src/assets/images/insight_leadership_meeting_1794927519659.jpg',
  caseStudyMep: '/src/assets/images/insight_proposal_pipeline_1794927518348.jpg',
  caseStudyAec: '/src/assets/images/insight_site_walkthrough_1794927519880.jpg',
  founderPortrait: '/src/assets/images/founder_david_chaidez_1794927517467.jpg',
  finalCta: '/src/assets/images/final_cta_aec_meeting_1794968482863.jpg',
  studioConference: '/src/assets/images/hero_aec_architecture_1794927517472.jpg',
} as const;

export const KEY_METRICS: KeyMetric[] = [
  {
    value: '$71K',
    label: 'Reported revenue recovered',
    note: 'Reported result shared by David across follow-up on previously stalled bids.',
  },
  {
    value: '8',
    label: 'Proposals involved in recovery',
    note: 'Existing submitted proposals revisited in the reported recovery.',
  },
  {
    value: '$15.5K',
    label: 'Proposals approved in October',
    note: 'Reported by David from maintaining momentum on open proposals.',
  },
  {
    value: 'AEC',
    label: 'Specialized industry focus',
    note: 'Dedicated exclusively to architecture, engineering, and construction.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    id: 'proposal-pipeline-review',
    title: 'Proposal Pipeline Review',
    description:
      'Identify proposals that have stalled, understand where conversations stopped, and uncover opportunities that may still be recoverable.',
    focus: 'Pipeline audit & stalled bid identification',
  },
  {
    number: '02',
    id: 'revenue-recovery',
    title: 'Revenue Recovery',
    description:
      'Re-engage prospects and bring structure to follow-up conversations to help move outstanding proposals toward a decision.',
    focus: 'Structured outreach & decision resolution',
  },
  {
    number: '03',
    id: 'followup-systems',
    title: 'Follow-Up Systems & Accountability',
    description:
      "Establish clear ownership, next steps, and follow-up dates so opportunities don't disappear after a proposal is sent.",
    focus: 'Ownership cadence & next-step tracking',
  },
];

export const WHY_BENEFITS: WhyBenefit[] = [
  {
    id: 'clearer-view',
    title: 'A Clearer View of Your Pipeline',
    description:
      'Understand which proposals need attention and where opportunities are getting stuck.',
  },
  {
    id: 'ownership',
    title: 'Ownership That Drives Action',
    description: 'Give every important opportunity a clear owner and next step.',
  },
  {
    id: 'consistent-followup',
    title: 'Consistent Follow-Up',
    description: 'Build a repeatable approach to reconnecting with prospects.',
  },
  {
    id: 'revenue-within-reach',
    title: 'Focus on Revenue Already Within Reach',
    description:
      'Make better use of the opportunities your team has already invested time and effort in creating.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Review',
    description: 'Assess the proposal pipeline and identify opportunities that have stalled.',
  },
  {
    number: '02',
    title: 'Prioritize',
    description: 'Determine which opportunities deserve attention and establish clear priorities.',
  },
  {
    number: '03',
    title: 'Reconnect',
    description:
      'Put a structured follow-up process into action and reopen relevant conversations.',
  },
  {
    number: '04',
    title: 'Recover & Improve',
    description:
      'Track progress, learn from outcomes, and improve the follow-up process moving forward.',
  },
];

export const SUPPORTED_INDUSTRIES: IndustryItem[] = [
  {
    id: 'architecture',
    title: 'Architecture Firms',
    context: 'Design proposals, schematic scopes, and multi-phase studio bids.',
  },
  {
    id: 'engineering',
    title: 'Engineering Firms',
    context: 'Civil, structural, geotechnical, and specialized technical consulting.',
  },
  {
    id: 'mep',
    title: 'MEP Consultants',
    context: 'Mechanical, electrical, and plumbing fee letters awaiting sign-off.',
  },
  {
    id: 'construction',
    title: 'Construction Companies',
    context: 'Preconstruction, general contracting, and negotiated project bids.',
  },
  {
    id: 'aec-services',
    title: 'Other AEC Professional Services',
    context: 'Environmental, surveying, and specialty building advisory practices.',
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    number: 'CASE STUDY 01',
    id: 'case-study-01',
    industry: 'MEP Engineering',
    headline: 'Recovering $71K Across 8 Proposals',
    description:
      'A reported revenue recovery result shared by David, demonstrating the value of revisiting proposals that had not received consistent follow-up.',
    figure: '$71K',
    figureCaption: 'Reported recovery across 8 proposals',
    image: ASSETS.caseStudyMep,
    imageAlt: 'Engineering proposal documents and brass architectural scale ruler on an oak desk',
  },
  {
    number: 'CASE STUDY 02',
    id: 'case-study-02',
    industry: 'AEC',
    headline: '$15,500 in Proposals Approved',
    description:
      'A result David shared for October, highlighting the importance of maintaining visibility and momentum across outstanding proposals.',
    figure: '$15,500',
    figureCaption: 'Reported proposals approved in October',
    image: ASSETS.caseStudyAec,
    imageAlt: 'Contemporary commercial architecture exterior with limestone and steel framing',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'quiet-proposals',
    category: 'Pipeline Discipline',
    readTime: '4 min read',
    sourceLabel: 'David Chaidez · LinkedIn Perspective',
    title: 'Why Good AEC Proposals Go Quiet (And Why It Rarely Means "No")',
    excerpt:
      'When a technical proposal sits unanswered, silence usually stems from competing project deadlines on both sides rather than rejection.',
    image: ASSETS.caseStudyMep,
    imageAlt: 'Bound engineering proposal documents on a studio desk',
    body: [
      'In architecture, engineering, and construction firms, writing a proposal takes real technical focus. Principals and project managers scope deliverables, coordinate subconsultants, and price hours carefully before sending a fee letter.',
      'Once the proposal leaves the inbox, active project delivery takes over. Urgent RFIs, permitting reviews, and client deadlines naturally pull attention away from following up on bids sent two or three weeks earlier.',
      'On the receiving end, prospective clients face the same operational noise. Without a timely, respectful check-in, an unreviewed proposal drifts down their inbox—not because they chose another firm, but because nothing prompted a clear decision.',
    ],
    takeaway:
      'Before investing more resources into finding new leads, review the proposals your team has already invested time in writing.',
  },
  {
    id: 'seller-doer-ownership',
    category: 'Follow-Up Systems',
    readTime: '3 min read',
    sourceLabel: 'David Chaidez · LinkedIn Perspective',
    title: 'Clear Ownership Without Handing Off Client Trust',
    excerpt:
      'Technical principals hold the client relationship. Structured follow-up accountability supports those principals without inserting generic sales scripts.',
    image: ASSETS.aboutLeadership,
    imageAlt: 'AEC leadership team discussing open project timelines',
    body: [
      'Most AEC firms operate on a seller-doer model because clients want to work with the senior professionals who will actually deliver the project.',
      'That strength creates a predictable bottleneck: the exact people responsible for client trust have the least uninterrupted time for routine proposal tracking.',
      'Bringing structure to follow-up does not mean handing relationships to cold callers. It means establishing clear ownership, calendarized next steps, and practical visibility so conversations stay warm and respectful.',
    ],
    takeaway:
      'Consistent follow-up protects your team’s reputation while keeping client relationships firmly with your principals.',
  },
  {
    id: 'clarity-over-guessing',
    category: 'Revenue Recovery',
    readTime: '4 min read',
    sourceLabel: 'David Chaidez · LinkedIn Perspective',
    title: 'Moving Open Proposals Toward a Clear Decision',
    excerpt:
      'Ambiguous "pending" proposals distort capacity planning and hide recoverable work. A disciplined follow-up rhythm brings clarity.',
    image: ASSETS.studioConference,
    imageAlt: 'AEC leadership reviewing blueprints in a sunlit boardroom',
    body: [
      'Almost every AEC proposal log contains a gray zone of bids sent months ago that have neither been signed nor formally closed.',
      'Leaving those proposals unaddressed creates uncertainty for staffing and leaves recoverable fees on the table.',
      'A practical follow-up process guides each open proposal toward an explicit answer—whether that is an approval to proceed, a confirmed timeline, or clean closure so your team can focus elsewhere.',
    ],
    takeaway:
      'Visibility and momentum across existing proposals often unlock opportunities that already exist inside your pipeline.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-recovery',
    question: 'What is proposal revenue recovery?',
    answer:
      'Proposal revenue recovery focuses on reviewing, prioritizing, and following up on proposals your firm has already qualified, scoped, and sent—helping reconnect with stalled conversations so outstanding bids reach a clear decision rather than fading into silence.',
  },
  {
    id: 'aec-firms',
    question: 'Which types of AEC firms does Riftmark work with?',
    answer:
      'Riftmark works specifically with architecture firms, engineering practices (civil, structural, geotechnical), MEP consultants, construction companies, and related AEC professional services firms.',
  },
  {
    id: 'identify-stalled',
    question: 'How do you identify stalled proposals?',
    answer:
      'We begin with a structured Proposal Pipeline Review—examining open fee letters, submission dates, and where client communication slowed down—to separate dormant opportunities worth revisiting from closed or inactive bids.',
  },
  {
    id: 'crm-and-followup',
    question: 'Does Riftmark help with existing CRM and follow-up processes?',
    answer:
      'Yes. Rather than forcing complex software overhauls, we work with how your firm already tracks proposals to establish clear ownership, practical next steps, and consistent follow-up dates that busy project leads can sustain.',
  },
  {
    id: 'how-it-begins',
    question: 'How does the revenue recovery process begin?',
    answer:
      'It starts with a straightforward Revenue Recovery Call to discuss how proposals currently move through your firm after they are sent, where follow-up tends to drop off, and whether a focused pipeline review makes sense for your team.',
  },
];
