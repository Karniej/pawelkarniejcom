/** @format */

// One source for the two founder quotes. The homepage shows them under the
// hero and the mobile apps page shows them under the product proof, so a
// second copy of this array would drift.
export type Testimonial = {
  quote: string[];
  name: string;
  role: string;
  context: string;
  image: string;
  href: string;
  linkLabel: string;
  objectClass: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: [
      "I bought AIVidly from him because the app shipped as a real business: subscriptions, analytics, App Store execution, retention loops, all done. I didn't have to fix anything.",
      "We then chose to co-found VidNotes together because, having seen how he ships, I didn't want to launch another AI product without him.",
    ],
    name: "Duc Lai",
    role: "Founder, AAAI Studio",
    context: "Bought AIVidly. Co-founded VidNotes with Paweł.",
    image: "/images/testimonials/duc-lai-x-avatar.jpg",
    href: "https://x.com/aaaistudio",
    linkLabel: "@aaaistudio",
    objectClass: "object-cover",
  },
  {
    quote: [
      "I had an app idea. Paweł turned it into a real business in 4 weeks.",
      "In 4 weeks the entire product was live: AI conversation flows, a subscription paywall with trials, onboarding, analytics, and a full App Store submission handled.",
    ],
    name: "Calbert Clarke",
    role: "Founder, Bibleily",
    context: "Founder of Bibleily, an AI app for conversations with Scripture.",
    image: "/images/testimonials/calbert-clarke-bibleily.png",
    href: "https://bibleily.com/",
    linkLabel: "bibleily.com",
    objectClass: "object-cover object-top",
  },
];
