export type LegalGroup = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  id: string;
  title: string;
  inShort: string;
  paragraphs: string[];
  bullets?: string[];
  groups?: LegalGroup[];
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
    description:
      "This Privacy Policy explains how Inner Mirror Coaching collects, uses, shares, and protects personal information when you visit our website, contact us, or participate in our coaching services.",
    updated: "August 16, 2026",
    sections: [
      {
        id: "about-this-policy",
        title: "About this policy",
        inShort: "This policy covers the website, contact with us, and our coaching services. If you do not agree, please do not use the Services.",
        paragraphs: [
          "This Privacy Policy explains how Inner Mirror Coaching collects, uses, shares, and protects personal information when you visit our website, contact us, or participate in our coaching services (including life coaching and wellness coaching) and related offerings (collectively, the “Services”).",
          "If you do not agree with this Privacy Policy, please do not use the Services.",
        ],
      },
      {
        id: "information-we-collect",
        title: "Information we collect",
        inShort: "We collect what you give us, and some technical information collected automatically when you use the website.",
        paragraphs: ["We may collect the following categories of information:"],
        groups: [
          {
            heading: "Information you provide",
            bullets: [
              "Contact information (such as your name, email address, phone number) when you fill out a form, request information, or contact us.",
              "Inquiry details you choose to include in messages (for example, what you’re looking for support with).",
              "Scheduling and intake information you submit when booking or applying for services.",
              "Payment information if you purchase services (note: payments are typically processed by third-party payment processors; we do not store full payment card numbers).",
            ],
          },
          {
            heading: "Information collected automatically",
            paragraphs: ["When you use the website, we (or service providers) may automatically collect:"],
            bullets: [
              "Device and browser information",
              "IP address and approximate location",
              "Pages viewed, links clicked, and referring/exit pages",
              "Cookies or similar technologies (see “Cookies and analytics” below)",
            ],
          },
        ],
      },
      {
        id: "session-records",
        title: "Notes and coaching session records",
        inShort: "We aim to collect as little as we need. Live session notes are not kept by default.",
        paragraphs: ["We respect your privacy and aim to minimize data collection."],
        bullets: [
          "We do not keep written notes of live coaching conversations as a default practice.",
          "We may keep minimal administrative records (for example: your name, contact details, scheduling information, service package purchased, invoices/receipts, and high-level goals you choose to provide in writing).",
          "If we ever want to keep written notes, summaries, or recordings for a specific purpose (for example, with your request or to support continuity of care), we will ask for your explicit consent first and you can decline.",
        ],
        groups: [
          {
            paragraphs: [
              "Because our Services are coaching and not medical or mental health treatment, information you share is generally not subject to healthcare privacy laws like HIPAA. We still treat your information with care and use it only as described in this Privacy Policy.",
            ],
          },
        ],
      },
      {
        id: "how-we-use-it",
        title: "How we use information",
        inShort: "We use your information to run the Services, communicate with you, and keep required records.",
        paragraphs: ["We use personal information to:"],
        bullets: [
          "Provide, operate, and improve the Services",
          "Respond to inquiries and communicate with you",
          "Schedule sessions and manage client relationships",
          "Process payments and send receipts/invoices",
          "Maintain business records and comply with legal obligations",
          "Protect against fraud, misuse, or security incidents",
        ],
      },
      {
        id: "how-we-share-it",
        title: "How we share information",
        inShort: "We do not sell your personal information. We share it only as needed to operate, comply, or transfer the business.",
        paragraphs: [
          "We do not sell your personal information.",
          "We may share personal information with:",
        ],
        bullets: [
          "Service providers that help us run the business (e.g., website hosting, scheduling tools, email services, payment processors, analytics providers), only as needed for them to perform services for us.",
          "Legal and compliance: if required by law, subpoena, court order, or to protect our rights and safety.",
          "Business transfers: if we are involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies and analytics",
        inShort: "Cookies may remember preferences, measure usage, and help us improve the site. You can control them in your browser.",
        paragraphs: ["We may use cookies and similar technologies to:"],
        bullets: [
          "Remember preferences",
          "Understand website performance and usage",
          "Improve the website and marketing",
        ],
        groups: [
          {
            paragraphs: [
              "You can control cookies through your browser settings. Some site features may not function properly if cookies are disabled.",
            ],
          },
        ],
      },
      {
        id: "data-retention",
        title: "Data retention",
        inShort: "We keep information only as long as we reasonably need it for the Services, records, and the law.",
        paragraphs: ["We keep personal information only as long as reasonably necessary to:"],
        bullets: [
          "Provide the Services",
          "Maintain business and financial records",
          "Comply with legal obligations",
          "Resolve disputes and enforce agreements",
        ],
      },
      {
        id: "security",
        title: "Security",
        inShort: "We take reasonable steps to protect personal information. No system is completely secure.",
        paragraphs: [
          "We use reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no method of transmission or storage is 100% secure.",
        ],
      },
      {
        id: "your-rights",
        title: "Your choices and rights",
        inShort: "You may ask to see, correct, or delete your information, and you can opt out of marketing email.",
        paragraphs: ["Depending on where you live, you may have rights such as:"],
        bullets: [
          "Request access to the personal information we hold about you",
          "Request correction or deletion",
          "Opt out of marketing emails (you can also use the unsubscribe link if provided)",
        ],
        groups: [
          {
            paragraphs: ["To make a request, contact us using the information below."],
          },
        ],
      },
      {
        id: "children",
        title: "Children’s privacy",
        inShort: "The Services are not directed to children. Coaching a minor happens only with a parent or guardian’s written consent.",
        paragraphs: [
          "The Services are not directed to children under 13 (or under 16 in certain jurisdictions), and we do not knowingly collect personal information from children.",
        ],
        groups: [
          {
            paragraphs: [
              "If we agree in writing to provide coaching services to a minor with a parent or legal guardian’s consent, we may collect limited personal information about the minor and the parent/guardian as needed to:",
            ],
            bullets: [
              "verify consent and authority,",
              "schedule and provide the requested services,",
              "maintain appropriate administrative records, and",
              "communicate with the parent/guardian about logistics and billing.",
            ],
          },
          {
            paragraphs: ["In those situations:"],
            bullets: [
              "We will request a parent/legal guardian to provide the minor’s information, and we will not request that a minor submit personal information directly through the website unless we have confirmed appropriate consent.",
              "We will limit collection to what is reasonably necessary for the coaching engagement.",
              "The parent/legal guardian may request access to, correction of, or deletion of the minor’s information, subject to our legal and recordkeeping obligations.",
            ],
          },
        ],
      },
      {
        id: "third-party-links",
        title: "Third-party links",
        inShort: "Links to other sites are not covered by this policy.",
        paragraphs: [
          "The website may link to third-party sites. We are not responsible for the privacy practices of those sites.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this Privacy Policy",
        inShort: "We may update this page. The “Last updated” date will change when we do.",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date.",
        ],
      },
      {
        id: "contact",
        title: "Contact us",
        inShort: "Privacy questions can be sent to us directly.",
        paragraphs: [
          "Questions about this Privacy Policy? Contact us via the website’s Contact page or at info@theinnermirrorcoaching.com.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "These Terms of Service govern your access to and use of The Inner Mirror LLC’s website and the services. By accessing or using the Services, you agree to these Terms.",
    updated: "August 16, 2026",
    sections: [
      {
        id: "about-these-terms",
        title: "About these Terms",
        inShort: "Using the website or the Services means you agree to these Terms. If you do not, please do not use them.",
        paragraphs: [
          "These Terms of Service govern your access to and use of The Inner Mirror LLC’s website and the services. By accessing or using the Services, you agree to these Terms.",
          "If you do not agree to these Terms, do not use the Services.",
        ],
      },
      {
        id: "who-we-are",
        title: "Who we are",
        inShort: "The Services are provided by The Inner Mirror LLC.",
        paragraphs: ["The Services are provided by The Inner Mirror LLC."],
      },
      {
        id: "services-disclaimer",
        title: "Services; coaching disclaimer",
        inShort: "We offer coaching and educational support. It is not medical, mental health, or licensed professional care.",
        paragraphs: [
          "We provide coaching services, including life coaching and wellness coaching, as well as education and wellness-related information intended to support personal and professional development.",
          "Coaching is not medical, mental health, or licensed professional care. The Services are not a substitute for therapy, counseling, diagnosis, or treatment. If you are in crisis or may be experiencing a medical or mental health emergency, contact emergency services and/or a qualified professional immediately.",
        ],
      },
      {
        id: "eligibility",
        title: "Eligibility",
        inShort: "You must be 18 or older, unless we agree in writing to work with a minor with appropriate permissions.",
        paragraphs: [
          "You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Services, unless we explicitly agree in writing to work with a minor with appropriate permissions.",
        ],
      },
      {
        id: "user-responsibilities",
        title: "User responsibilities",
        inShort: "Give accurate information, use the Services lawfully, and own your decisions.",
        paragraphs: ["You agree to:"],
        bullets: [
          "Provide accurate information when you contact us, apply, or purchase services.",
          "Use the Services lawfully and respectfully.",
          "Take full responsibility for your decisions, actions, and results.",
        ],
      },
      {
        id: "scheduling",
        title: "Scheduling, cancellations, and no-shows",
        inShort: "The written policy given for the service you booked is the one that applies.",
        paragraphs: [
          "Specific scheduling, rescheduling, cancellation, and no-show policies may be provided at booking, in onboarding materials, or in a separate agreement. If there is a conflict, the written policy provided to you for the relevant service controls.",
        ],
      },
      {
        id: "payment",
        title: "Payment and refunds",
        inShort: "Fees, timing, and any refunds are shown at checkout or in a written agreement. Delivered services are generally non-refundable.",
        paragraphs: [
          "Prices, payment timing, and any refund policy (if offered) will be presented at checkout or in a written agreement. Unless otherwise stated in writing, all fees are non-refundable once services have been delivered.",
          "If you use a third-party payment processor, your payment is also subject to that processor’s terms.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        inShort: "The site and our materials belong to us or our licensors. Do not copy them without written permission.",
        paragraphs: [
          "All content on the website and in our materials (including text, graphics, downloads, frameworks, and branding) is owned by us or our licensors and is protected by intellectual property laws.",
          "You may not copy, reproduce, distribute, or create derivative works from our content without our prior written permission, except for personal, non-commercial use where explicitly permitted.",
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        inShort: "What you share in coaching is generally treated as confidential. The law and safety can require disclosure.",
        paragraphs: ["We aim to create a respectful, privacy-conscious environment."],
        bullets: [
          "Information you share in coaching is generally treated as confidential.",
          "However, confidentiality is not absolute. We may disclose information if required by law, court order, or if we believe disclosure is necessary to protect rights, safety, or prevent fraud.",
        ],
      },
      {
        id: "privacy",
        title: "Privacy",
        inShort: "These Terms work together with our Privacy Policy.",
        paragraphs: ["Your use of the Services is also governed by our Privacy Policy."],
      },
      {
        id: "third-party",
        title: "Third-party links and tools",
        inShort: "We do not control third-party sites or tools linked from the Services.",
        paragraphs: [
          "The Services may reference or link to third-party websites or tools. We do not control and are not responsible for third-party content, policies, or practices.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers",
        inShort: "The Services are provided as is. We do not guarantee specific outcomes.",
        paragraphs: [
          "The Services are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
          "We do not guarantee specific outcomes. Results vary based on individual circumstances.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "Limitation of liability",
        inShort: "Liability is limited to what you paid for the relevant service in the prior three months, or $100 if you have not paid.",
        paragraphs: [
          "To the fullest extent permitted by law, The Inner Mirror LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising out of or related to your use of the Services.",
          "To the fullest extent permitted by law, our total liability for any claim arising out of or relating to the Services will not exceed the amount you paid us for the relevant service in the 3 months before the event giving rise to the claim (or $100 if you have not paid us).",
        ],
      },
      {
        id: "indemnification",
        title: "Indemnification",
        inShort: "You agree to cover The Inner Mirror LLC if your use of the Services or a breach of these Terms causes a claim.",
        paragraphs: [
          "You agree to indemnify and hold harmless The Inner Mirror LLC from and against claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to your use of the Services or your violation of these Terms.",
        ],
      },
      {
        id: "termination",
        title: "Termination",
        inShort: "We may suspend or end access if these Terms are broken or the Services are misused.",
        paragraphs: [
          "We may suspend or terminate access to the Services if we believe you have violated these Terms or misused the Services.",
        ],
      },
      {
        id: "changes",
        title: "Changes to the Services or Terms",
        inShort: "We may update these Terms. Continued use after a change is posted means you accept the update.",
        paragraphs: [
          "We may update the Services and these Terms from time to time. The updated Terms will be posted with a new “Last updated” date. Your continued use of the Services after changes become effective constitutes acceptance of the updated Terms.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing law",
        inShort: "These Terms follow the law of the jurisdiction where The Inner Mirror LLC is organized.",
        paragraphs: [
          "These Terms are governed by the laws of the jurisdiction where The Inner Mirror LLC is organized, without regard to conflict of law principles.",
        ],
      },
      {
        id: "contact-terms",
        title: "Contact",
        inShort: "Questions about these Terms can be sent to us directly.",
        paragraphs: [
          "Questions about these Terms? Contact us via the website’s Contact page or at info@theinnermirrorcoaching.com.",
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
          "If you have questions about this disclaimer, contact us via the website’s Contact page or at info@theinnermirrorcoaching.com.",
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
