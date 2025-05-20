
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium font-poppins text-lg">
              Harshdeep<span className="text-primary">.</span>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/70">
              © {currentYear} Harshdeep Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
