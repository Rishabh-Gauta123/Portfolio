import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Download,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Ecommerce Web Application",
      description:
        "A fully functional e-commerce platform with user authentication, product catalog, shopping cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
      github: "https://github.com/Rishabh-Gauta123/Ecommerce-Web-Application",
      live: "https://ecommerce-web-application-smnw.onrender.com/",
      period: "Dec 2024 - Jan 2025",
      image: "/modern-ecommerce-interface.png",
    },
     {
      title: "Home Rental Application",
      description:
        "A comprehensive home rental platform with property listings, user authentication, booking system, and payment integration for seamless rental experiences.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Tailwind CSS",
      ],
      github: "https://github.com/Rishabh-Gauta123/Home-Rental",
      live: "https://home-rental-forntend.onrender.com/",
      period: "Jul 2025 - Sep 2025",
      image: "/cybersecurity-dashboard-with-threat-analytics.jpg",
    },
    {
      title: "Video Chat Application",
      description:
        "WebRTC-based video calling app with screen sharing, chat functionality, and recording features for connecting with strangers or known contacts.",
      tech: ["React", "WebRTC", "Socket.io", "JavaScript"],
      github: "https://github.com/Rishabh-Gauta123/Video_Call_aplication",
      live: "https://wemeet.onrender.com/",
      period: "Jan 2023 - May 2023",
      image: "/video-chat-application-interface-with-multiple-par.jpg",
    },
   
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Neural Foundry",
      location: "Hyderabad",
      period: "Feb 2025 – Present",
      description:
        "Contributing to scalable full-stack web applications using modern frameworks, collaborating with cross-functional teams for seamless integrations and performance optimization.",
      tech: [
        "React.js",
        "Redux",
        "TypeScript",
        "Joy UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Jest",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Descriptive Solution Private Limited",
      location: "New Delhi",
      period: "September 2024 – January 2025",
      description:
        "Continued from internship into a full-time role based on performance.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "Descriptive Solution Private Limited",
      location: "New Delhi",
      period: "February 2024 – August 2024",
      description:
        "Developed cyber threat intelligence application with modules for phishing, vishing, smishing, and deepfake awareness campaigns.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        id="hero"
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-5"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />

          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full text-sm font-medium shadow-lg animate-fade-in">
                  <Zap className="w-4 h-4 animate-pulse" />
                  Full Stack Developer
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Rishabh
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
                  Passionate about building scalable, user-centric solutions
                  with{" "}
                  <span className="text-primary font-semibold">1+ years</span>{" "}
                  of hands-on experience in modern web technologies and a strong
                  foundation in problem-solving.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 animate-fade-in delay-300">
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-primary mr-2 group-hover:animate-spin" />
                    <div className="text-3xl font-bold text-primary">600+</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    DSA Problems Solved
                  </div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Code className="w-6 h-6 text-primary mr-2 group-hover:animate-bounce" />
                    <div className="text-3xl font-bold text-primary">
                      Multiple
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-primary mr-2 group-hover:animate-pulse" />
                    <div className="text-3xl font-bold text-primary">
                      In Top 1%
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    In collage on GFG
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
                <Link href="/Rishabh-gautam.pdf" download="Your-Name-Resume.pdf">
                  <Button size="lg" variant="outline" className="...">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 animate-fade-in delay-500">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/Rishabh-Gauta123" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/rishabh-gautam-48a7b0249/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:rgiiitdwd@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end animate-fade-in delay-600">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-cyan-500/10 rounded-full blur-2xl scale-125 animate-pulse delay-1000" />
                <div className="relative w-80 h-80 rounded-full overflow-hidden ring-8 ring-background shadow-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/rishabh-profile.jpg"
                    alt="Rishabh Gautam"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute -top-4 -left-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20 hover:scale-110 transition-transform duration-300 animate-bounce">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20 hover:scale-110 transition-transform duration-300 animate-bounce delay-200">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-background rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20 hover:scale-110 transition-transform duration-300 animate-bounce delay-100">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-1/4 -left-6 w-10 h-10 bg-background rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20 hover:scale-110 transition-transform duration-300 animate-bounce delay-300">
                  <Star className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-primary/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in the{" "}
                <span className="text-primary font-semibold">MERN stack</span>,
                dedicated to creating innovative and scalable web solutions.
                With a strong foundation in data structures and algorithms, I
                bring both technical depth and creative problem-solving to every
                project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to
                build solutions that make a real difference. From developing
                cyber threat intelligence applications to creating seamless
                e-commerce experiences, I focus on writing clean, maintainable
                code that scales.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Problem Solver
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Team Player
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Growth Mindset
                </Badge>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Adaptable
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-transparent bg-gradient-to-r from-primary/10 to-blue-500/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Education</h3>
                      <p className="text-sm text-muted-foreground">
                        Academic Excellence
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Bachelor of Technology in Computer Science
                    </strong>
                    <br />
                    Indian Institute of Information Technology, Dharwad
                    <br />
                    <span className="text-sm">November 2020 - May 2024</span>
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary/5 to-blue-500/5">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      600+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      DSA Problems
                    </div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      11th
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Rank at IIIT
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/abstract-tech-pattern.png"
            alt="Tech Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardHeader className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">React.js / Next.js</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">TypeScript</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">HTML5 / CSS3</span>
                    <Badge variant="secondary" className="text-xs">
                       Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Tailwind CSS</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                   <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Joy UI</span>
                    <Badge variant="secondary" className="text-xs">
                     intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardHeader className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Node.js</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Express.js</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">MongoDB</span>
                    <Badge variant="secondary" className="text-xs">
                      Intermediate
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">RESTful APIs</span>
                    <Badge variant="secondary" className="text-xs">
                     intermediate
                    </Badge>
                  </div>
                   <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">SQL</span>
                    <Badge variant="secondary" className="text-xs">
                     intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-green-500/5">
              <CardHeader className="text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Git / GitHub</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">VS Code</span>
                    <Badge variant="secondary" className="text-xs">
                      Expert
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Postman</span>
                    <Badge variant="secondary" className="text-xs">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-primary/5 transition-colors">
                    <span className="font-medium">Jest Testing</span>
                    <Badge variant="secondary" className="text-xs">
                      Intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-primary/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="gap-1 bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="gap-1 hover:scale-105 transition-transform duration-300"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-primary/5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm always excited to work on
            new projects and collaborate with passionate teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  rgiiitdwd@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+91 9759790159</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-500/5 to-green-500/5">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Hyderabad, Telangana
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Rishabh Gautam.
          </p>
        </div>
      </footer>
    </div>
  );
}
