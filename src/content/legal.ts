export type LegalSection = {
  id: string;
  title: string;
  inShort: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDoc = {
  slug: "privacy" | "terms" | "disclaimer";
  title: string;
  description: string;
  updated: string;
  draft?: boolean;
  sections: LegalSection[];
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How Inner Mirror Coaching collects, uses, and looks after personal information when you visit the site, book a session, or join the Circle.",
    updated: "August 15, 2026",
    draft: true,
    sections: [
      {
        id: "who-this-covers",
        title: "Who this covers",
        inShort: "This policy applies to anyone who uses the Inner Mirror website, books coaching, or joins the Circle.",
        paragraphs: [
          "This Privacy Policy describes how Inner Mirror LLC (“Inner Mirror,” “we,” “us”) handles personal information in connection with theinnermirrorcoaching.com, related booking pages, and The Inner Mirror Circle.",
          "Placeholder names, processors, and retention periods below are for design and review. They should be confirmed with counsel and our actual vendors before launch.",
        ],
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        inShort: "We keep what we need to know you, book you, and run the work — not a profile of your private life.",
        paragraphs: [
          "The information we receive depends on how you use Inner Mirror. Typical categories include:",
        ],
        bullets: [
          "Identity and contact details: name, email address, and any phone number you choose to share.",
          "Booking details: session type, date, time zone, and notes you add when you schedule.",
          "Payment details: handled by our payment and scheduling providers. We do not store full card numbers on this site.",
          "Communications: emails, form messages, and information you share in sessions or Circle spaces.",
          "Technical data: browser type, device, approximate location derived from IP, and pages visited.",
        ],
      },
      {
        id: "how-we-use-it",
        title: "How we use information",
        inShort: "We use your information to deliver coaching, run the Circle, and keep the site working — not to sell a list of names.",
        paragraphs: ["We use personal information to:"],
        bullets: [
          "Schedule, host, and follow up on discovery calls and coaching sessions.",
          "Process payments, send receipts, and handle cancellations or reschedules.",
          "Operate The Inner Mirror Circle, including membership communications.",
          "Respond to questions sent to help@innermirror.com.",
          "Improve the website, diagnose issues, and keep it secure.",
          "Meet legal, tax, and record-keeping duties.",
        ],
      },
      {
        id: "booking-and-payments",
        title: "Booking and payments",
        inShort: "Scheduling runs through Cal.com. Payment details stay with the processor, not in a spreadsheet on this site.",
        paragraphs: [
          "Session booking is currently facilitated through Cal.com. When you choose a time, you leave Inner Mirror’s pages and interact with that provider’s forms and policies as well as ours.",
          "If a paid session or program is processed online, card details are collected by the payment processor connected to that booking flow. Inner Mirror receives confirmation that a payment succeeded, not your full card number.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies and similar tools",
        inShort: "The site needs a few technical cookies to function. Anything extra will be named here before it ships.",
        paragraphs: [
          "We use strictly necessary cookies and similar storage so the site can remember basic preferences and keep booking embeds working.",
          "If we later add analytics or marketing pixels, this section will name the tools, what they measure, and how to opt out. Until then, treat any unnamed tracker as out of scope for this draft.",
        ],
      },
      {
        id: "who-we-share-with",
        title: "Who we share with",
        inShort: "We share information with the services that help us operate — not with advertisers buying an audience.",
        paragraphs: [
          "We do not sell personal information. We share it only with people and companies who need it to provide Inner Mirror’s services, including:",
        ],
        bullets: [
          "Scheduling, video, and payment providers.",
          "Email and hosting vendors who process data on our instructions.",
          "Professional advisers (for example, accountants or counsel) when required.",
          "Authorities if the law requires disclosure, or to protect someone’s safety.",
        ],
      },
      {
        id: "how-long",
        title: "How long we keep it",
        inShort: "We keep records only as long as the work, the law, or a genuine follow-up still needs them.",
        paragraphs: [
          "Booking and billing records are typically kept for up to seven years to meet tax and accounting needs (placeholder period — confirm with counsel).",
          "Session notes and Circle membership records are kept for as long as the coaching relationship continues, then deleted or archived according to our retention practice once they are no longer needed.",
          "You may ask us to delete information we do not need to keep. Some records cannot be erased immediately where the law requires us to retain them.",
        ],
      },
      {
        id: "your-rights",
        title: "Your choices and rights",
        inShort: "You can ask what we hold, ask us to correct it, or ask us to delete what we no longer need.",
        paragraphs: [
          "Depending on where you live, you may have the right to access, correct, delete, or receive a copy of personal information, or to object to certain uses.",
          "To make a request, email help@innermirror.com with enough detail for us to find your records. We may need to verify that the request comes from you.",
          "You may unsubscribe from non-essential email at any time using the link in those messages, or by writing to us.",
        ],
      },
      {
        id: "children",
        title: "Children",
        inShort: "Inner Mirror is for adults. We do not knowingly collect information from anyone under 18.",
        paragraphs: [
          "Coaching, the Circle, and this website are intended for people 18 and older. If we learn that we have collected personal information from a child, we will delete it.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        inShort: "If the way we handle information changes, we will update this page and the date at the top.",
        paragraphs: [
          "We may revise this Privacy Policy from time to time. The “Last updated” date shows the current version. Material changes will be posted here, and we may also notify you by email when we have an address for you.",
        ],
      },
      {
        id: "contact",
        title: "How to reach us",
        inShort: "Privacy questions go to the same inbox as everything else: help@innermirror.com.",
        paragraphs: [
          "Inner Mirror LLC, Atlanta, Georgia. Email help@innermirror.com. We aim to reply within a few business days.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "The agreement between you and Inner Mirror Coaching when you use this website, book a session, buy a program, or join the Circle.",
    updated: "August 15, 2026",
    draft: true,
    sections: [
      {
        id: "agreement",
        title: "The agreement",
        inShort: "Using the site or booking a session means you accept these terms. If you do not, please do not use the services.",
        paragraphs: [
          "These Terms of Service (“Terms”) are a contract between you and Inner Mirror LLC, operating Inner Mirror Coaching from Atlanta, Georgia.",
          "They cover the website, discovery calls, 1:1 coaching, the twelve-week program, The Inner Mirror Circle, and related materials including the book where sold or distributed by us.",
          "This draft is placeholder language for layout and review. It is not in force until replaced with a counsel-reviewed version.",
        ],
      },
      {
        id: "eligibility",
        title: "Who may use these services",
        inShort: "You need to be 18 or older, and able to enter a contract, to book coaching or join the Circle.",
        paragraphs: [
          "You confirm that you are at least 18 years old and that the information you give us is accurate.",
          "The Inner Mirror Circle is described as a community for women. Eligibility for a particular offering may be stated on that offering’s page. We may decline or end a booking if it is not a fit, including for safety or scope reasons.",
        ],
      },
      {
        id: "coaching-services",
        title: "Coaching services",
        inShort: "Coaching is a partnership for reflection and change. It is not therapy, medical care, or a guarantee of a particular outcome.",
        paragraphs: [
          "Inner Mirror provides life coaching, including wellness, burnout recovery, and related personal development work. Sessions are typically held by video.",
          "You remain responsible for your decisions and for seeking licensed clinical, medical, or legal help when that is what the situation requires. See the Disclaimer for the full notice.",
          "Discovery calls are free and without obligation. Paid 1:1 sessions and the twelve-week program are described on the coaching pages; the details on those pages at the time you book form part of this agreement.",
        ],
      },
      {
        id: "circle",
        title: "The Inner Mirror Circle",
        inShort: "The Circle is a community space with its own rhythm. Membership is not a substitute for 1:1 coaching or clinical care.",
        paragraphs: [
          "Circle membership, when offered, may include group gatherings, shared resources, and community guidelines we will provide at enrollment.",
          "You agree to treat other members with care, keep what is shared in confidence, and follow any house rules posted for the Circle. We may suspend access if those rules are broken.",
        ],
      },
      {
        id: "the-book",
        title: "The book",
        inShort: "The book is a written guide, not a personal coaching engagement and not medical or therapeutic advice.",
        paragraphs: [
          "Return To Baseline: A Guide Back To Yourself and any related excerpts on this site are for personal, non-commercial use unless we agree otherwise in writing.",
          "Purchasing or reading the book does not create a coaching relationship. Coaching begins only when you book and we accept a session or program.",
        ],
      },
      {
        id: "fees-and-cancellation",
        title: "Fees, booking, and cancellation",
        inShort: "Show up when you book. If you cannot, give enough notice so the hour can be released.",
        paragraphs: [
          "Prices are shown at checkout or on the coaching pages. Unless stated otherwise, fees are in US dollars and are due when you book.",
          "Placeholder cancellation policy for review: discovery calls may be cancelled or rescheduled at any time. Paid 1:1 sessions may be rescheduled with at least 24 hours’ notice. Late cancellations or no-shows may be charged in full.",
          "Program refunds, if any, will be described at enrollment. Until that language is finalized, treat program fees as earned as sessions are delivered, unless required otherwise by law.",
        ],
      },
      {
        id: "your-responsibilities",
        title: "Your responsibilities",
        inShort: "Come as you are, tell the truth you can tell, and keep the space respectful.",
        paragraphs: [
          "You agree to provide accurate booking information, attend sessions on time, and use the site and Circle in a lawful, respectful way.",
          "You will not share login links, record sessions without consent, harass anyone, or use Inner Mirror materials to offer competing coaching as if they were your own.",
          "If you are in crisis or at risk of harm, you will seek emergency or clinical help rather than relying on coaching or this website. See the Disclaimer.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        inShort: "The words, marks, and materials on this site belong to Inner Mirror unless we say otherwise.",
        paragraphs: [
          "The Inner Mirror name, logos, website, program materials, and book remain our intellectual property (or that of our licensors).",
          "You receive a limited, personal license to use materials we give you in the course of coaching or Circle membership. You may not copy, sell, or republish them without written permission.",
        ],
      },
      {
        id: "liability",
        title: "Limitation of liability",
        inShort: "We take care with the work. We do not accept open-ended responsibility for how life unfolds after a session.",
        paragraphs: [
          "To the fullest extent permitted by law, Inner Mirror and its owners, contractors, and affiliates are not liable for indirect, incidental, or consequential damages, or for loss of profit, data, or opportunity, arising from your use of the site or services.",
          "Our total liability for any claim relating to the services will not exceed the amount you paid us for the specific service giving rise to the claim in the three months before the claim (placeholder cap — confirm with counsel).",
          "Some jurisdictions do not allow certain limitations. In those places, our liability is limited to the maximum extent permitted.",
        ],
      },
      {
        id: "termination",
        title: "Ending the relationship",
        inShort: "Either of us can end coaching if it is no longer the right container.",
        paragraphs: [
          "You may stop using the site at any time. You may end a coaching engagement by written notice, subject to the cancellation rules above.",
          "We may suspend or end access, or decline further sessions, if these Terms are broken, if the work is outside our scope, or if we reasonably believe continuing is unsafe or unworkable.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing law",
        inShort: "These terms are written for a practice based in Georgia.",
        paragraphs: [
          "These Terms are governed by the laws of the State of Georgia, without regard to conflict-of-law rules, except where a mandatory consumer law in your place of residence says otherwise.",
          "If a court finds any part of these Terms unenforceable, the rest still applies.",
        ],
      },
      {
        id: "changes-terms",
        title: "Changes",
        inShort: "We may update these terms as the practice grows. The date at the top is the current version.",
        paragraphs: [
          "We may revise these Terms from time to time. Continued use of the site or services after a change is posted constitutes acceptance of the updated Terms, except where the law requires a different process.",
        ],
      },
      {
        id: "contact-terms",
        title: "Contact",
        inShort: "Questions about these terms: help@innermirror.com.",
        paragraphs: [
          "Inner Mirror LLC, Atlanta, Georgia. Email help@innermirror.com.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description:
      "Inner Mirror coaching provides coaching services intended to support personal and professional development. The information on this website and in our programs is for general informational and educational purposes only.",
    updated: "August 15, 2026",
    sections: [
      {
        id: "purpose",
        title: "Purpose",
        inShort: "This page explains the limits of our coaching, this website, and our programs.",
        paragraphs: [
          "Inner Mirror coaching provides coaching services intended to support personal and professional development. The information on this website and in our programs is for general informational and educational purposes only.",
        ],
      },
      {
        id: "not-medical",
        title: "Not medical or mental health care",
        inShort: "Coaching is not psychotherapy, counseling, diagnosis, or medical care.",
        paragraphs: [
          "Coaching (including life coaching and wellness coaching) is not psychotherapy, counseling, mental health treatment, diagnosis, or medical care. We do not provide medical, psychological, or other licensed healthcare services unless explicitly stated in writing. Nothing on this website or in our services is a substitute for professional medical advice, diagnosis, or treatment.",
          "If you have—or suspect you may have—a medical or mental health condition, or if you are experiencing a crisis, seek help from a qualified healthcare professional and/or emergency services immediately.",
        ],
      },
      {
        id: "results-vary",
        title: "No guarantees; results vary",
        inShort: "Outcomes depend on you. We do not promise any specific result.",
        paragraphs: [
          "Your outcomes depend on many factors, including your background, effort, commitment, and circumstances. We make no guarantees regarding any specific results.",
        ],
      },
      {
        id: "assumption-of-risk",
        title: "Assumption of risk",
        inShort: "You remain responsible for your decisions, actions, and wellbeing.",
        paragraphs: [
          "You are responsible for your own decisions, actions, and results. By using this website and participating in our services, you acknowledge and accept that you assume full responsibility for your wellbeing and any outcomes that arise from your choices.",
        ],
      },
      {
        id: "professional-advice",
        title: "Professional advice",
        inShort: "What we discuss is general. It is not a substitute for licensed professional advice.",
        paragraphs: [
          "We may discuss topics related to health, stress management, performance, habits, relationships, career, or finances. Any such discussions are general in nature and should not be relied upon as a substitute for advice from appropriately qualified professionals (e.g., physicians, therapists, attorneys, financial advisors).",
        ],
      },
      {
        id: "limitations",
        title: "Limitations and boundaries",
        inShort: "If specialized care would serve you better, we may say so. You stay in control of your choices.",
        paragraphs: [
          "If at any time it becomes clear that you would benefit from therapy, medical care, or other specialized support, we may recommend that you seek help from a licensed professional. You understand that coaching is a collaborative process and that you remain in control of your decisions.",
        ],
      },
      {
        id: "contact-disclaimer",
        title: "Contact",
        inShort: "Questions about this disclaimer can be sent to us directly.",
        paragraphs: [
          "If you have questions about this disclaimer, contact us via the website’s Contact page or at help@innermirror.com.",
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: LegalDoc["slug"]): LegalDoc {
  const doc = LEGAL_DOCS.find((item) => item.slug === slug);
  if (!doc) throw new Error(`Unknown legal document: ${slug}`);
  return doc;
}
