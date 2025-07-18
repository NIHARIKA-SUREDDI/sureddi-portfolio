
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const tools = ["Figma", "Canva", "Wix"];
  const skills = ["Wireframing", "Prototyping", "Visual Design"];
  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Curiosity", icon: Lightbulb },
    { name: "Detail-Oriented", icon: Eye }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate beginner UI/UX designer with a strong interest in creating clean, 
              intuitive digital experiences. I've been learning through hands-on projects in Figma, 
              designing mobile app and website interfaces with a focus on usability and visual clarity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm actively looking for a UI/UX design internship where I can contribute, grow, 
              and learn from real-world projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool) => (
                <Badge 
                  key={tool} 
                  variant="secondary" 
                  className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 text-sm font-medium"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Design Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 justify-center">
                  <skill.icon className="h-4 w-4 text-cyan-500" />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
