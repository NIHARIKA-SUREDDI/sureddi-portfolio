
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-12 text-lg">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:niharika.sureddi@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                niharika.sureddi@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+918309827641" 
                className="text-blue-600 hover:underline"
              >
                +91 8309827641
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Linkedin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/niharika-sureddi-4a6166247/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                Connect with me
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-blue-600 text-white rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
            <p className="mb-6">
              I'm currently seeking internship opportunities in UI/UX design. 
              If you have an exciting project or opportunity, I'd love to hear from you!
            </p>
            <a 
              href="mailto:niharika.sureddi@gmail.com?subject=Let's%20work%20together" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
