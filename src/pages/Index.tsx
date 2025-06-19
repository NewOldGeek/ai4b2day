
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, BookOpen, Mic, Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon with exclusive AI insights.",
    });
    
    // Reset form
    setEmail("");
    setName("");
    setCompany("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header with Background Image */}
      <header 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80")'
        }}
      >
        {/* White overlay at 80% opacity */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        
        {/* Logo centered */}
        <div className="relative z-10 flex justify-center items-center">
          <img 
            src="/lovable-uploads/fa6ecb54-4307-4e30-b31a-35af7c79eb28.png" 
            alt="AI for Business Today" 
            className="h-48 w-auto"
          />
        </div>
        
        {/* Instagram link in top right */}
        <div className="absolute top-6 right-6 z-20">
          <a 
            href="https://instagram.com/aiforbusinesstoday" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-4 py-2">
            Coming Soon: AI Business Podcast
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              {" "}AI Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of business leaders getting exclusive insights on AI development, 
            training, and educational services. Be first to access our upcoming podcast and premium content.
          </p>
          
          {/* Lead Capture Form */}
          <Card className="max-w-lg mx-auto shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Get Early Access</CardTitle>
              <CardDescription>
                Join our exclusive community and receive AI insights directly to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  required
                />
                <Input
                  type="email"
                  placeholder="Business Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  required
                />
                <Input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg"
                >
                  Get Exclusive Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Get Access To
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exclusive content and insights from industry experts and our network of AI development partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Exclusive Podcast</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Early access to episodes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Industry expert interviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Behind-the-scenes content
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">AI Training Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Educational materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Partner network access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Development insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Business Network</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Connect with leaders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Marketing strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Partnership opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Community */}
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
            <a 
              href="https://instagram.com/aiforbusinesstoday" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @aiforbusinesstoday
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/fa6ecb54-4307-4e30-b31a-35af7c79eb28.png" 
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
                  <Mail className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">info@aiforbusinesstoday.com</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-green-500 mr-2" />
                  <a 
                    href="https://instagram.com/aiforbusinesstoday" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    @aiforbusinesstoday
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
    </div>
  );
};

export default Index;
