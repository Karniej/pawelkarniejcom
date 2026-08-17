/** @format */

export type AppShowcaseItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  tagline: string;
  icon: string;
  features: string[];
  platforms: ("iOS" | "Android")[];
  gradient: string;
  color: "black" | "white" | "silver";
  screenshots: string[];
  detailedDescription?: string;
  techStack?: string[];
  results?: string[];
  appStoreUrl?: string;
  acquired?: boolean;
  /** Offer and /apps carousel. Keep this list short and production-only. */
  featured?: boolean;
};

// Every live app, shown with a full section on /our-work and a case study
// page at /apps/<id>. Names, icons, and screenshots pulled from the actual
// App Store listings (see scripts/fetch-appstore-assets.mjs). Verified live
// under the Pawel Karniej or Silpho LLC developer accounts, except Aividly,
// which we built and later sold to its current owner.
export const appShowcases: AppShowcaseItem[] = [
  {
    id: "vidnotes",
    title: "VidNotes",
    featured: true,
    description: "Transcribe any video into notes, summaries, and flashcards.",
    tagline: "Video to notes and flashcards",
    icon: "/images/apps/vidnotes/icon.png",
    detailedDescription:
      "VidNotes turns any video, YouTube link, or meeting recording into searchable text, AI summaries, smart flashcards, and SRT captions. Paste a link or upload from your library and every word becomes searchable, summarized, and study-ready. Built for students, creators, and professionals.",
    category: "Productivity",
    features: [
      "Transcription in 40+ languages with timestamps",
      "Paste YouTube, Instagram, or X links, or upload from your library",
      "AI summaries with key takeaways and action items",
      "Auto-generated flashcards with spaced repetition",
      "SRT caption export for creators",
      "Search and highlight across every transcript",
    ],
    platforms: ["iOS", "Android"],
    gradient: "from-violet-500/20 to-indigo-600/20",
    color: "black",
    screenshots: [
      "/images/apps/vidnotes/shot-1.webp",
      "/images/apps/vidnotes/shot-2.webp",
      "/images/apps/vidnotes/shot-3.webp",
    ],
    techStack: [
      "Swift",
      "Kotlin",
      "OpenAI API",
      "Supabase",
      "RevenueCat",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/video-transcriber-vidnotes/id6752721747",
  },
  {
    id: "aividly",
    title: "Aividly",
    featured: true,
    description: "AI video, image and voiceover creator. Built and sold.",
    tagline: "AI video creator, acquired",
    icon: "/images/apps/aividly/icon.png",
    detailedDescription:
      "A creative platform built on Flux for image generation, OpenAI for video processing, and ElevenLabs for voice synthesis. Wrapped in a mobile UX that lets creators ship full AI assets in minutes, not hours. We built it, grew it, and sold it. The app now runs under its new owner on the App Store.",
    category: "Media & Entertainment",
    features: [
      "AI Video Generation with Flux integration",
      "AI Image Creation and editing",
      "Professional AI Voiceover synthesis",
      "Real-time preview and editing",
      "Cloud-based rendering pipeline",
      "Social media optimization tools",
    ],
    platforms: ["iOS"],
    gradient: "from-green-500/20 to-emerald-600/20",
    color: "silver",
    screenshots: [
      "/images/apps/aividly/shot-1.webp",
      "/images/apps/aividly/shot-2.webp",
      "/images/apps/aividly/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Flux AI",
      "OpenAI API",
      "ElevenLabs",
      "AWS S3",
      "FFmpeg",
      "RevenueCat",
    ],
    results: [
      "40% reduction in content creation time for users",
      "200% user growth in first 3 months",
      "Successfully monetized with Apple Search Ads",
      "Acquired by its current owner",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/aividly-ai-video-creator-pro/id6698894140",
    acquired: true,
  },
  {
    id: "teleprompter",
    title: "Teleprompter Pro X",
    featured: true,
    description: "Autocue for iPad. Read scripts on camera.",
    tagline: "Autocue for iPad",
    icon: "/images/apps/teleprompter/icon.png",
    detailedDescription:
      "Teleprompter X keeps your eyes on the audience and your words on point. Read scripts smoothly, record HD video while you read, and control scrolling from your Apple Watch. Voice control syncs the scroll to your speaking pace, and mirror mode works with reflective glass teleprompter rigs.",
    category: "Media & Entertainment",
    features: [
      "Apple Watch companion for remote scroll control",
      "Voice control synced to your speaking pace",
      "HD video recording while reading",
      "Picture-in-picture scripts over any app or video call",
      "Mirror mode for glass teleprompter rigs",
      "Cue card mode and a speech timer",
    ],
    platforms: ["iOS"],
    gradient: "from-rose-500/20 to-red-600/20",
    color: "black",
    screenshots: [
      "/images/apps/teleprompter/shot-1.webp",
      "/images/apps/teleprompter/shot-2.webp",
      "/images/apps/teleprompter/shot-3.webp",
    ],
    techStack: ["Swift", "SwiftUI", "watchOS", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/teleprompter-pro-x-for-video/id6502788841",
  },
  {
    id: "newsletterytics",
    title: "Newsletterytics",
    featured: true,
    description: "Beehiiv newsletter analytics on the go.",
    tagline: "Beehiiv analytics on the go",
    icon: "/images/apps/newsletterytics/icon.png",
    detailedDescription:
      "Newsletter analytics that show creators what their subscribers actually do, not just open rates. AI surfaces engagement patterns, subscriber segments, and the content that drives retention. Built with React Native and a native iOS widget.",
    category: "Productivity",
    features: [
      "Beehiiv subscription tracker analytics",
      "Native iOS widget for at-a-glance metrics",
      "Real-time engagement metrics",
      "Subscriber behavior insights",
      "Performance trend analysis",
      "Custom dashboard creation",
    ],
    platforms: ["iOS"],
    gradient: "from-blue-500/20 to-purple-600/20",
    color: "black",
    screenshots: [
      "/images/apps/newsletterytics/shot-1.webp",
      "/images/apps/newsletterytics/shot-2.webp",
      "/images/apps/newsletterytics/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "OpenAI API",
      "RevenueCat",
    ],
    results: [
      "150% increase in user engagement tracking accuracy",
      "Launched to App Store in 2 weeks",
      "Featured in productivity app collections",
      "4.8/5 average user rating",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/newsletterytics-beehiivs-app/id6505141597",
  },
  {
    id: "coldsmith",
    title: "Coldsmith",
    featured: true,
    description: "Cold plunge and ice bath timer with Wim Hof breathwork.",
    tagline: "Cold plunge and breathwork",
    icon: "/images/apps/coldsmith/icon.png",
    detailedDescription:
      "Coldsmith is a wellness app for cold plunge, ice bath, and breathwork practitioners. Guided Wim Hof-method breathing sessions, cold exposure timers, streak tracking, and heart-rate integration via HealthKit. Built on Silpho Core with subscription paywalls, onboarding, and retention loops. Idea to App Store in 2 weeks.",
    category: "Health & Wellness",
    features: [
      "Guided Wim Hof breathwork sessions",
      "Cold exposure and ice bath timers",
      "Streak tracking with HealthKit integration",
      "Custom breathing protocols",
    ],
    platforms: ["iOS"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    color: "black",
    screenshots: [
      "/images/apps/coldsmith/shot-1.webp",
      "/images/apps/coldsmith/shot-2.webp",
      "/images/apps/coldsmith/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "HealthKit",
      "Supabase",
      "RevenueCat",
    ],
    results: [
      "Idea to App Store in 14 days",
      "Featured in wellness app collections",
      "Daily retention loops driving 3x return visits",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/cold-breathwork-coldsmith/id6469033824",
  },
  {
    id: "rewordly",
    title: "ReWordly",
    description: "AI rewrite, humanize, detect, and polish text.",
    tagline: "AI rewrite and humanize",
    icon: "/images/apps/rewordly/icon.png",
    detailedDescription:
      "ReWordly is an AI writing utility for rewriting, paraphrasing, humanizing, detecting AI-written text, and polishing grammar. Paste an email, essay, message, or post, choose a tone, and get a clearer version in seconds.",
    category: "Productivity",
    features: [
      "AI rewrite and paraphrase for emails, essays, messages, and posts",
      "Tone changer for professional, casual, friendly, persuasive, academic, creative, simple, and expanded writing",
      "AI humanizer for making ChatGPT, Claude, and Gemini drafts read more naturally",
      "AI detector with a clear probability score",
      "Grammar, punctuation, and style cleanup",
      "Rewrite history and before/after comparison",
    ],
    platforms: ["iOS"],
    gradient: "from-sky-500/20 to-fuchsia-600/20",
    color: "black",
    screenshots: [
      "/images/apps/rewordly/shot-1.webp",
      "/images/apps/rewordly/shot-2.webp",
      "/images/apps/rewordly/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "OpenAI API",
      "RevenueCat",
      "App Store Connect",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/rewordly-ai-detect-rewrite/id6761615714",
  },
  {
    id: "fishify",
    title: "Fishify",
    description: "AI fish ID, catch log, and fishing rules guide.",
    tagline: "AI fish ID and catch log",
    icon: "/images/apps/fishify/icon.png",
    detailedDescription:
      "Fishify helps anglers identify fish from photos, save catch logs, browse species details, and check fishing rules before keeping a catch. It combines AI fish identification with a practical fishing journal and regulation guidance.",
    category: "Identification",
    features: [
      "AI fish identification from camera or photo library",
      "Catch log with species, location, weight, length, bait, gear, and weather",
      "Fishing regulation guidance for size limits, bag limits, seasons, and restrictions",
      "Freshwater and saltwater species guide",
      "Habitat, typical size, and edibility notes",
      "Useful for fly fishing, spin fishing, lakes, rivers, and saltwater trips",
    ],
    platforms: ["iOS"],
    gradient: "from-cyan-500/20 to-emerald-600/20",
    color: "black",
    screenshots: [
      "/images/apps/fishify/shot-1.webp",
      "/images/apps/fishify/shot-2.webp",
      "/images/apps/fishify/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "OpenAI API",
      "RevenueCat",
      "App Store Connect",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/fishify-fish-id-catch-log/id6761615544",
  },
  {
    id: "check-writer",
    title: "CheckIt",
    description: "Write, print, export, and track personal checks.",
    tagline: "Write and print checks",
    icon: "/images/apps/check-writer/icon.png",
    detailedDescription:
      "Check Writer - CheckIt helps users format personal checks, convert amounts to words, generate PDFs, print with AirPrint, calibrate check stock, and keep a local check register with cleared, uncleared, and voided status tracking. Built as a local-first finance utility with StoreKit subscriptions and no bank verification or payment processing.",
    category: "Finance",
    features: [
      "Write personal checks with payee, date, memo, amount, and check number",
      "Automatic amount-to-words conversion",
      "PDF export and AirPrint support for check stock",
      "Multiple check templates with print calibration",
      "Local check register with cleared, uncleared, and voided tracking",
      "Sensitive bank details stored on device in protected app storage",
    ],
    platforms: ["iOS"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    color: "black",
    screenshots: [
      "/images/apps/check-writer/shot-1.webp",
      "/images/apps/check-writer/shot-2.webp",
      "/images/apps/check-writer/shot-3.webp",
    ],
    techStack: [
      "SwiftUI",
      "StoreKit",
      "AirPrint",
      "PDFKit",
      "Local persistence",
      "App Store Connect",
    ],
    appStoreUrl: "https://apps.apple.com/app/id6768260983",
  },
  {
    id: "fiftn",
    title: "FIFTN",
    featured: true,
    description: "Focus timer and app blocker. Earn your screen time.",
    tagline: "Earn your screen time",
    icon: "/images/apps/fiftn/icon.png",
    detailedDescription:
      "FIFTN is a discipline training app that makes you earn your screen time. Distracting apps stay locked until you complete 15-minute deep work sessions. No willpower needed, the system does the work. Three blocking modes, a structured focus timer, and AI coaching on top.",
    category: "Productivity",
    features: [
      "App blocking via the Screen Time API with session, scheduled, and achievement-unlock modes",
      "15-minute structured deep work intervals",
      "Focus Score tracking your deep work ratio over time",
      "Live Activity countdown on the Dynamic Island",
      "Daily AI coaching summaries",
    ],
    platforms: ["iOS"],
    gradient: "from-orange-500/20 to-red-600/20",
    color: "black",
    screenshots: [
      "/images/apps/fiftn/shot-1.webp",
      "/images/apps/fiftn/shot-2.webp",
      "/images/apps/fiftn/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Screen Time API",
      "Live Activities",
      "RevenueCat",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/focus-timer-app-block-fiftn/id6753712943",
  },
  {
    id: "mori",
    title: "Mori",
    description: "Stoic death clock. Life in weeks, lived well.",
    tagline: "Life in weeks, lived well",
    icon: "/images/apps/mori/icon.png",
    detailedDescription:
      "Mori is a calm life calendar and Stoic reflection app for remembering that time is limited. See your life as a calendar in weeks, follow an approximate countdown based on WHO life-expectancy data, and return each day to carefully chosen Stoic quotes. Widgets and Live Activities keep perspective close without demanding attention.",
    category: "Lifestyle",
    features: [
      "Life calendar in weeks",
      "Death clock with an approximate countdown",
      "Daily Stoic quotes",
      "Reflection widgets and Live Activities",
      "WHO-based life estimate as a rough approximation",
    ],
    platforms: ["iOS"],
    gradient: "from-zinc-500/20 to-stone-600/20",
    color: "black",
    screenshots: [
      "/images/apps/mori/shot-1.webp",
      "/images/apps/mori/shot-2.webp",
      "/images/apps/mori/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "WidgetKit",
      "Live Activities",
      "RevenueCat",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/mori-stoic-death-clock/id6760660720",
  },
  {
    id: "rancher-days",
    title: "Rancher Days",
    description: "Cozy western ranch tycoon for iOS.",
    tagline: "Cozy western ranch tycoon",
    icon: "/images/apps/rancher-days/icon.png",
    detailedDescription:
      "Rancher Days is a cozy western ranch simulator. Start with a humble homestead and a chicken coop, then raise and breed chickens, cows, sheep, pigs, goats, horses, and rare alpacas. Craft butter, cheese, jerky, and saddles, fulfill town orders, and send expeditions across the frontier from the Prairie to the Ghost Town.",
    category: "Games",
    features: [
      "Raise and breed seven animal types with rare and legendary breeds",
      "Craft goods at the Dairy, Bakery, Loom, and Smokehouse",
      "Idle production that keeps working while you are away",
      "Expeditions to six frontier regions",
      "Town orders and a growing homestead economy",
    ],
    platforms: ["iOS"],
    gradient: "from-amber-500/20 to-orange-600/20",
    color: "black",
    screenshots: [
      "/images/apps/rancher-days/shot-1.webp",
      "/images/apps/rancher-days/shot-2.webp",
      "/images/apps/rancher-days/shot-3.webp",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/rancher-days-frontier-life/id6762041245",
  },
  {
    id: "beatai",
    title: "BeatAI",
    description: "AI beat and music maker. Trap, hip hop, lo-fi studio.",
    tagline: "AI beat maker studio",
    icon: "/images/apps/beatai/icon.png",
    detailedDescription:
      "BeatAI is an AI beat maker and music production studio for iPhone. Generate trap, hip hop, lo-fi, drill, and EDM beats with one tap, then fine-tune tempo, key, and instruments. Layer drums, bass, melody, and samples like a portable MPC, and export high-quality tracks to SoundCloud, TikTok, or any DAW.",
    category: "Media & Entertainment",
    features: [
      "One-tap AI beat generation across trap, hip hop, lo-fi, drill, and EDM",
      "Tempo, key, and instrument customization",
      "Multi-layer drums, bass, melody, and samples",
      "High-quality export for SoundCloud, Instagram, TikTok, and DAWs",
    ],
    platforms: ["iOS"],
    gradient: "from-purple-500/20 to-pink-600/20",
    color: "black",
    screenshots: [
      "/images/apps/beatai/shot-1.webp",
      "/images/apps/beatai/shot-2.webp",
      "/images/apps/beatai/shot-3.webp",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/beatai-ai-beat-music-maker/id6751905341",
  },
  {
    id: "yapperx",
    title: "YapperX",
    featured: true,
    description: "Speechnotes. Talk to AI and generate X posts.",
    tagline: "Voice notes to X posts",
    icon: "/images/apps/yapperx/icon.png",
    detailedDescription:
      "YapperX is a voice-first content engine for creators who live on X. Hit record and talk. It transcribes instantly and turns the ramble into a polished, punchy post that still sounds like you. Big ideas become full threads automatically, broken into hook, body, and payoff.",
    category: "Productivity",
    features: [
      "Voice-to-post with instant transcription",
      "AI thread maker with hook, body, and payoff structure",
      "Idea refinement that keeps your voice, not the AI's",
      "Edit, remix, or re-roll any draft before posting",
    ],
    platforms: ["iOS"],
    gradient: "from-slate-500/20 to-blue-600/20",
    color: "black",
    screenshots: [
      "/images/apps/yapperx/shot-1.webp",
      "/images/apps/yapperx/shot-2.webp",
      "/images/apps/yapperx/shot-3.webp",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "OpenAI API", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/yapperx-app-speechnotes/id6755120132",
  },
  {
    id: "moonlatte",
    title: "MoonLatte",
    description: "Caffeine tracker. Coffee log, sleep, and energy.",
    tagline: "Caffeine and sleep tracker",
    icon: "/images/apps/moonlatte/icon.png",
    detailedDescription:
      "MoonLatte is a smart caffeine tracker for iPhone and Apple Watch. Log coffee, espresso, tea, matcha, energy drinks, and pre-workout from a database of hundreds of drinks, then watch the half-life visualization show exactly when caffeine leaves your system and when to stop drinking for better sleep.",
    category: "Health & Wellness",
    features: [
      "Quick logging from a database of hundreds of drinks",
      "Real-time caffeine half-life visualization",
      "Sleep and focus impact insights",
      "Apple Watch app with quick-log and daily balance",
    ],
    platforms: ["iOS"],
    gradient: "from-amber-500/20 to-yellow-600/20",
    color: "black",
    screenshots: [
      "/images/apps/moonlatte/shot-1.webp",
      "/images/apps/moonlatte/shot-2.webp",
      "/images/apps/moonlatte/shot-3.webp",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "watchOS",
      "HealthKit",
      "RevenueCat",
    ],
    appStoreUrl:
      "https://apps.apple.com/pl/app/caffeine-tracker-moonlatte/id6751758649",
  },
  {
    id: "splonkcam",
    title: "SplonkCam",
    description: "Wireless webcam and video editor.",
    tagline: "iPhone as wireless webcam",
    icon: "/images/apps/splonkcam/icon.png",
    detailedDescription:
      "SplonkCam is the iOS camera companion for Splonk, the screen recorder and video editor for macOS. Stream your iPhone camera wirelessly to your Mac at up to 1080p60 with zero setup over local Wi-Fi, then edit everything in a full multi-track timeline right on your phone. Everything stays on your local network, nothing goes to the cloud.",
    category: "Media & Entertainment",
    features: [
      "Live camera streaming to Splonk on Mac over local Wi-Fi",
      "Automatic discovery via Bonjour, zero setup",
      "Up to 1080p at 60fps with low-latency streaming",
      "Multi-track timeline editor with trim, layouts, and picture-in-picture",
      "Privacy first, nothing leaves the local network",
    ],
    platforms: ["iOS"],
    gradient: "from-teal-500/20 to-cyan-600/20",
    color: "black",
    screenshots: [
      "/images/apps/splonkcam/shot-1.webp",
      "/images/apps/splonkcam/shot-2.webp",
      "/images/apps/splonkcam/shot-3.webp",
    ],
    techStack: ["Swift", "AVFoundation", "Bonjour", "StoreKit"],
    appStoreUrl: "https://apps.apple.com/pl/app/splonkcam/id6759802009",
  },
  {
    id: "her-quantum-leap",
    title: "Quantum Leap Her",
    description: "Future-self rituals, affirmations, and manifestation journal.",
    tagline: "Future-self rituals for women",
    icon: "/images/apps/her-quantum-leap/icon.png",
    detailedDescription:
      "Quantum Leap Her helps you practice the woman you are becoming before the world catches up. Create private future-self rituals for love, money, confidence, career, or a custom desire, and the app turns your intention into guided audio, personalized affirmations, and reflection prompts. A manifestation journal and evidence tracker make sure small wins do not disappear.",
    category: "Lifestyle",
    features: [
      "Guided future-self audio for morning resets, getting ready, and bedtime",
      "Personalized affirmations based on your current desire",
      "Manifestation journal for thoughts, proof, and identity shifts",
      "Evidence tracker for small wins",
      "Voice-led ceremonies for deeper weekly resets",
      "Private reminders for your daily ritual",
    ],
    platforms: ["iOS"],
    gradient: "from-pink-500/20 to-purple-600/20",
    color: "black",
    screenshots: [
      "/images/apps/her-quantum-leap/shot-1.webp",
      "/images/apps/her-quantum-leap/shot-2.webp",
      "/images/apps/her-quantum-leap/shot-3.webp",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "OpenAI API", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/quantum-leap-her/id6771773948",
  },
  {
    id: "signit",
    title: "SignIt",
    description: "Signature generator and document signing.",
    tagline: "Signature maker and PDF signing",
    icon: "/images/apps/signit/icon.png",
    detailedDescription:
      "SignIt turns your name into a clean, professional signature you can use across PDFs, contracts, invoices, email, and personal branding. Compare cursive, calligraphy, modern, executive, and monogram styles, fine-tune color and stroke thickness, then export a transparent PNG. Document signing is built in: import or scan a PDF, place your saved signature, and export a signed copy.",
    category: "Productivity",
    features: [
      "Generate a signature from your name in eight styles",
      "Color and stroke thickness fine-tuning",
      "Transparent PNG export",
      "Draw your own signature with Apple Pencil or your finger",
      "Scan a paper signature or import an image",
      "Built-in PDF signing with resize and export",
    ],
    platforms: ["iOS"],
    gradient: "from-indigo-500/20 to-blue-600/20",
    color: "black",
    screenshots: [
      "/images/apps/signit/shot-1.webp",
      "/images/apps/signit/shot-2.webp",
      "/images/apps/signit/shot-3.webp",
    ],
    techStack: ["React Native", "TypeScript", "Expo", "RevenueCat"],
    appStoreUrl:
      "https://apps.apple.com/pl/app/signature-generator-signit/id6768051475",
  },
];

export const DEVELOPER_PAGES = {
  pawelKarniej:
    "https://apps.apple.com/pl/developer/pawel-karniej/id1693356080",
  silphoLLC: "https://apps.apple.com/pl/developer/silpho-llc/id1870904612",
};

export const getAppById = (id: string): AppShowcaseItem | undefined => {
  return appShowcases.find((app) => app.id === id);
};

export const getAllApps = (): AppShowcaseItem[] => {
  return appShowcases;
};

export const getFeaturedApps = (): AppShowcaseItem[] => {
  return appShowcases.filter((app) => app.featured);
};
