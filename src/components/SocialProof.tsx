
import { Instagram, Twitter } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Growing Community</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-green-100">Community Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-green-100">Partner Organizations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-green-100">Free Access</div>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-xl mb-6">Follow us for daily AI insights and updates</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://twitter.com/ai4b2day" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#1877f2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Twitter className="h-5 w-5 mr-2" />
              @ai4b2day
            </a>
            <a 
              href="https://instagram.com/ai4b2day" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @ai4b2day
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
