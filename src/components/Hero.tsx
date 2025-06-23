
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_eptysxn',
        'template_3twd94h',
        {
          name: name,
          email: email,
          Phone: phone,
          company: company,
        },
        'DvSabakc7wadOFZ1l'
      );

      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon with exclusive AI insights.",
      });
      
      // Reset form
      setEmail("");
      setName("");
      setPhone("");
      setCompany("");
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
                disabled={isSubmitting}
              />
              <Input
                type="email"
                placeholder="Business Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                required
                disabled={isSubmitting}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                disabled={isSubmitting}
              />
              <Input
                type="text"
                placeholder="Company Name (Optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Exclusive Access"} 
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
