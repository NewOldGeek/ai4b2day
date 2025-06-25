import { Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0543176a-f423-4f42-ba57-1038f41a1aaa.png" 
                alt="AI for Business Today" 
                className="h-12 w-auto"
              />
              <div className="text-xl font-bold">AI for Business Today</div>
            </div>
            <p className="text-gray-400 max-w-md">
              Empowering businesses through AI education, development, and strategic partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#1877f2] mr-2" />
                <span className="text-gray-400">info@aiforbusinesstoday.com</span>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 text-[#1877f2] mr-2" />
                <a 
                  href="https://twitter.com/ai4b2day" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @ai4b2day
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-green-500 mr-2" />
                <a 
                  href="https://instagram.com/ai4b2day" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @ai4b2day
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI for Business Today. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
