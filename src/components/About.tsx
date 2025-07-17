
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, MessageCircle, Eye, Lightbulb } from "lucide-react";

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
          
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
            <Palette className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design Philosophy</h3>
            <p className="text-gray-700">
              I believe great design is invisible. My focus is on creating user experiences that 
              feel natural, intuitive, and delightful while solving real problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Soft Skills</h3>
              <div className="space-y-3">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <skill.icon className="h-4 w-4 text-cyan-500" />
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
