/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Mail,
  Twitter,
  Smartphone,
  Code,
  Zap,
  ExternalLink,
  Play,
  Youtube,
  Star,
} from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "Aividly: AI Generated Videos",
      description:
        "Create short AI videos on your phone using cutting-edge AI models.",
      image: "/images/aividly.png",
      link: "https://apps.apple.com/us/app/aividly-ai-video-creator-pro/id6698894140",
      type: "app",
      status: "current",
      tech: ["React Native", "AI/ML", "Video Processing"],
    },
    {
      title: "Newsletterytics",
      description:
        "Your Beehiiv newsletter statistics and analytics, on the go.",
      image: "/images/newsletterytics.png",
      link: "https://apps.apple.com/us/app/newsletterytics-beehiivs-app/id6505141597",
      type: "app",
      status: "current",
      tech: ["React Native", "Analytics", "API Integration"],
    },
    {
      title: "Coldsmith",
      description:
        "Track your cold exposure sessions and build mental resilience.",
      image: "/images/coldsmith.png",
      link: "https://apps.apple.com/pl/app/wim-hof-method-whm-coldsmith/id6469033824",
      type: "app",
      status: "current",
      tech: ["React Native", "Health", "Tracking"],
    },
    {
      title: "TeleprompterX",
      description: "Keep scripts synced with a creator-first teleprompter experience.",
      image: "/images/icon.png",
      link: "/terms/teleprompterx",
      type: "app",
      status: "current",
      tech: ["iOS", "Productivity", "Creators"],
    },
    {
      title: "MoonLatte",
      description: "A minimalist caffeine tracker that stays entirely on-device.",
      image: "/images/icon.png",
      link: "/terms/moonlatte",
      type: "app",
      status: "current",
      tech: ["iOS", "Health", "Privacy"],
    },
    {
      title: "VidNotes",
      description: "Private-first video notes to capture ideas without tracking.",
      image: "/images/icon.png",
      link: "/terms/vidnotes",
      type: "app",
      status: "current",
      tech: ["iOS", "Notes", "Privacy"],
    },
    {
      title: "Countdown Nuts",
      description: "Smart management and tracking of your consumable items.",
      image: "/images/countownnuts.png",
      link: "https://countdownnuts.com/",
      type: "web",
      status: "released",
      tech: ["Next.js", "PWA", "Management"],
    },
    {
      title: "Themegen.xyz",
      description:
        "Create and customize dependency-free themes for React Native",
      image: "/images/themegen.png",
      link: "https://themegenrn.netlify.app/",
      type: "web",
      status: "released",
      tech: ["React", "Tools", "Theming"],
    },
    {
      title: "The Fitmate App",
      description: "Find your perfect workout partner and stay motivated.",
      image: "/images/fitmate.png",
      link: "https://apps.apple.com/pl/app/the-fitmate-app/id6450453721?l=pl",
      type: "app",
      status: "released",
      tech: ["React Native", "Social", "Fitness"],
    },
    {
      title: "Selfmade.dev",
      description:
        "My personal blog about programming and React Native development.",
      image: "/images/selfmadedev.png",
      link: "https://selfmadedev.com/",
      type: "web",
      status: "released",
      tech: ["Blog", "Education", "React Native"],
    },
  ];

  const articles = [
    {
      title: "The best React Native date picker libraries",
      link: "https://blog.logrocket.com/best-react-native-date-picker-libraries/",
      date: "Feb 22, 2024",
      publisher: "LogRocket",
    },
    {
      title: "React Native iOS and Android development guide",
      link: "https://www.netguru.com/blog/react-native-ios-and-android",
      date: "Feb 22, 2024",
      publisher: "Netguru",
    },
    {
      title: "Designing a custom UI using React Native Paper",
      link: "https://blog.logrocket.com/designing-custom-ui-using-react-native-paper/",
      date: "May 2, 2023",
      publisher: "LogRocket",
    },
    {
      title: "Detox Tool for React Native testing",
      link: "https://www.netguru.com/blog/detox-tool-react-native",
      date: "May 2, 2023",
      publisher: "Netguru",
    },
    {
      title: "Common bugs in React Native ScrollView",
      link: "https://blog.logrocket.com/common-bugs-react-native-scrollview/",
      date: "Aug 6, 2020",
      publisher: "LogRocket",
    },
    {
      title: "How to make Tinder-like card animations with React Native",
      link: "https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/",
      date: "Sep 2, 2019",
      publisher: "LogRocket",
    },
  ];

  const stats = [
    { label: "Apps Launched", value: "10+", icon: Smartphone },
    { label: "Years Experience", value: "6+", icon: Code },
    { label: "Articles Written", value: "15+", icon: Zap },
  ];

  // Update these with your actual latest 3 YouTube shorts
  const youtubeVideos = [
    {
      id: "1",
      title: "How I Built 10+ Apps and Made $100k+ Revenue 💰",
      thumbnail: "/images/youtube-thumb-1.jpg",
      url: "https://www.youtube.com/@thepawelk/shorts",
      duration: "0:45",
    },
    {
      id: "2",
      title: "React Native vs Flutter: The TRUTH in 2024 🔥",
      thumbnail: "/images/youtube-thumb-2.jpg",
      url: "https://www.youtube.com/@thepawelk/shorts",
      duration: "0:58",
    },
    {
      id: "3",
      title: "5 Mistakes That Will KILL Your App Performance ⚡",
      thumbnail: "/images/youtube-thumb-3.jpg",
      url: "https://www.youtube.com/@thepawelk/shorts",
      duration: "1:12",
    },
  ];

  // TODO: Implement YouTube API integration
  // For now, manually update these with your latest 3 videos
  // See YOUTUBE_SETUP.md for API integration instructions

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="status-badge">Available for new projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="gradient-text">Hi, I&apos;m Paweł</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-zinc-400 max-w-2xl leading-relaxed"
              >
                I&apos;ve been building mobile applications using React Native
                since 2018.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <GradientButton
                  href="/contact"
                  variant="primary"
                  icon={ArrowRight}
                  size="lg"
                >
                  Get In Touch
                </GradientButton>
                <GradientButton
                  href="#projects"
                  variant="secondary"
                  className="dark"
                  size="lg"
                >
                  View Projects
                </GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/pawelkarniej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Twitter className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://github.com/karniej"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
                  </a>
                  <a
                    href="mailto:contact@pawelkarniej.com"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                  <Image
                    src="/images/me.jpg"
                    alt="Pawel Karniej"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Appiarist Project Showcase - COMMENTED OUT FOR NOW */}
      {/* 
      <section className="relative py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Star className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Featured Project
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">The Appiarist Project</span>
            </h2>

            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Documenting my journey to $10k MRR with mobile apps. Follow along
              as I build, launch, and scale multiple React Native applications
              while sharing every lesson learned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                href="https://theappiarist.com"
                variant="primary"
                icon={ExternalLink}
                size="lg"
              >
                Visit The Appiarist
              </GradientButton>
              <GradientButton
                href="#projects"
                variant="secondary"
                className="dark"
                size="lg"
              >
                Learn More
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>
      */}

      {/* YouTube Reel Section - HIDDEN FOR NOW */}
      {false && (
        <section className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
                <Youtube className="h-4 w-4 text-red-400" />
                <span className="text-red-300 text-sm font-medium">
                  Latest Content
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                YouTube Shorts & Insights
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Quick tips, tutorials, and insights about React Native
                development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gradient-to-br from-red-500/20 to-purple-500/20 border border-white/10 group-hover:border-red-500/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Duration Badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                        {video.duration}
                      </div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-500/80 flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-sm font-medium line-clamp-3 leading-tight">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <GradientButton
                href="https://www.youtube.com/@thepawelk/shorts"
                variant="secondary"
                icon={Youtube}
                className="dark"
              >
                View All Videos
              </GradientButton>
            </div>

            {/* Small Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap justify-center gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="h-4 w-4 text-emerald-400" />
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Current Projects Section */}
      <section id="projects" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Currently Working On
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Building the next generation of AI-powered mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.status === "current")
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="modern-card h-full glow-effect transition-all duration-300 group-hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white/10 p-2">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Badge
                          variant={
                            project.type === "app" ? "default" : "secondary"
                          }
                        >
                          {project.type === "app" ? "Mobile App" : "Web App"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Released Projects Section */}
      <section className="relative py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Released Projects
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A portfolio of successful applications and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects
              .filter((p) => p.status === "released")
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="modern-card h-full transition-all duration-300 group-hover:scale-105 group-hover:glow-effect">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-white/10 p-2 mb-3">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <CardTitle className="text-base group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-zinc-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        View <ExternalLink className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Technical Writing
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Sharing knowledge about React Native development and mobile app
              best practices
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="modern-card transition-all duration-300 group-hover:glow-effect">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-hover"
                          >
                            {article.title}
                          </a>
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                          <span>{article.publisher}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                      >
                        Read Article <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="/contact"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="link-hover text-zinc-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-zinc-500">
              © 2024 Pawel Karniej. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
