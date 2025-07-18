
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and create something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-gray-600 mb-6">niharika.sureddi@gmail.com</p>
              <a 
                href="mailto:niharika.sureddi@gmail.com" 
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <p className="text-gray-600 mb-6">8309827641</p>
              <a 
                href="tel:+918309827641" 
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
              <p className="text-gray-600 mb-6">linkedin.com/in/niharika-sureddi</p>
              <a 
                href="https://www.linkedin.com/in/niharika-sureddi-4a6166247/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                View Profile
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              I'm always open to discussing new opportunities and creative projects.
            </p>
            <a 
              href="mailto:niharika.sureddi@gmail.com?subject=Let's%20work%20together" 
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
