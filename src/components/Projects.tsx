
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Smartphone, UtensilsCrossed } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "7S Sales Technologies Website",
      category: "Web Design",
      tools: ["Wix"],
      icon: Globe,
      description: "Designed and developed a complete website for 7S Sales Technologies, focusing on a clean layout, intuitive navigation, and a user-friendly experience aligned with the brand's goals.",
      achievements: [
        "Designed the full website UI/UX, from wireframes to final layout",
        "Built the website using Wix with a responsive, mobile-friendly design",
        "Structured content for easy readability and user engagement",
        "Focused on clear navigation, strong CTAs, and visual consistency"
      ],
      gradient: "from-green-400 to-blue-500",
      link: "https://salessupport69.wixsite.com/7s-sales-technolog-2"
    },
    {
      id: 2,
      title: "Mobile Login Flow",
      category: "Mobile App Design",
      tools: ["Figma"],
      icon: Smartphone,
      description: "Designed the complete login flow for a mobile app, covering multiple user authentication methods including Google sign-in, email verification, password reset, and two-factor authentication.",
      achievements: [
        "Created wireframes and high-fidelity screens for multiple auth methods",
        "Continue with Google & Email authentication flows",
        "Email Verification and Reset Password screens",
        "Two-Factor Authentication implementation",
        "Focused on seamless and secure user journey",
        "Ensured consistent UI elements and clear visual hierarchy"
      ],
      gradient: "from-purple-400 to-pink-500",
      link: "https://www.figma.com/design/u59njIJFbIjbJdoJi0IJ1y/Mobile--Login-Flow?node-id=0-1&t=RldRD3Ef2PLUMaZf-1"
    },
    {
      id: 3,
      title: "Food Delivery App UI",
      category: "Mobile App Design",
      tools: ["Figma"],
      icon: UtensilsCrossed,
      description: "Designed a simple, mobile-friendly food delivery app with user flow for login, menu, cart, and checkout screens.",
      achievements: [
        "Created wireframes and high-fidelity screens",
        "Designed a smooth user journey from login to checkout",
        "Focused on minimal UI and clear CTAs",
        "Optimized for mobile-first experience"
      ],
      gradient: "from-orange-400 to-red-500",
      link: "https://www.figma.com/design/F43F3Kl3t0HQE8sCjqUHM8/Food-delivery-App?node-id=0-1&t=r48ELA0b43QXwiHn-1"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my design process and problem-solving approach.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white p-8`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <project.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="h-6 w-6" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tools Used:</h4>
                  <div className="flex gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="border-gray-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview:</h4>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Did:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
