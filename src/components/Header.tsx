
import { Instagram, Twitter } from "lucide-react";

const Header = () => {
  return (
    <header 
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80")'
      }}
    >
      {/* White overlay at 80% opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Logo centered and higher up */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <img 
          src="/lovable-uploads/f5e152d9-3466-4d7a-85d1-25980a2c497c.png" 
          alt="AI for Business Today" 
          className="w-2/5 h-auto max-w-none"
        />
      </div>

      {/* Social links in top right */}
      <div className="absolute top-6 right-6 z-20 flex space-x-3">
        <a 
          href="https://twitter.com/ai4b2day" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-600 hover:text-[#1877f2] transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a 
          href="https://instagram.com/ai4b2day" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-600 hover:text-[#1877f2] transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;
