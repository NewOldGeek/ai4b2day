
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, Star, ArrowRight } from "lucide-react";

const TrainingSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white text-green-600 hover:bg-gray-100 text-lg px-4 py-2">
            Free AI Training Event
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Free AI Business Summit
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Learn how to leverage AI to transform your business operations, increase efficiency, 
            and stay ahead of the competition. No cost, just value-packed insights from industry experts.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span className="text-lg">Multiple Dates Available</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-6 w-6 mr-2" />
              <span className="text-lg">Interactive Sessions</span>
            </div>
            <div className="flex items-center justify-center">
              <Star className="h-6 w-6 mr-2" />
              <span className="text-lg">100% Free</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">What You'll Learn:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" />
                <span>AI implementation strategies for your business</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" />
                <span>Cost-effective AI tools and solutions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" />
                <span>Real-world case studies and success stories</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" />
                <span>Q&A with AI experts and consultants</span>
              </div>
            </div>
          </div>

          <a 
            href="https://aiforbusinesstoday.com/go/free"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Register for Free Training <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
