
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send, Heart, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together!</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Ready to bring fresh perspectives and enthusiasm to your team. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-400 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-purple-100 mb-4">niharika.sureddi2@gmail.com</p>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
                onClick={() => window.open('mailto:niharika.sureddi2@gmail.com')}
              >
                <Send className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-400 to-teal-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <p className="text-purple-100 mb-4">+91 9876543210</p>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
                onClick={() => window.open('tel:+919876543210')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
              <p className="text-purple-100 mb-4">Connect with me professionally</p>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">What I'm Looking For</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-purple-200 mb-2">Internship Opportunities</h4>
              <p className="text-sm text-purple-100">UI/UX Design roles where I can contribute and grow</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-200 mb-2">Real-World Projects</h4>
              <p className="text-sm text-purple-100">Hands-on experience with actual user problems</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-200 mb-2">Learning Environment</h4>
              <p className="text-sm text-purple-100">Mentorship and collaborative team culture</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-400" /> by Niharika Sureddi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
