
const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-1 rounded-lg">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
                  alt="Harshdeep Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              About <span className="text-primary">Me</span>
            </h2>
            <h3 className="text-xl mb-4 font-medium">
              A passionate Front-end & Node.js Developer
            </h3>
            <p className="text-foreground/80 mb-4">
              I am a dedicated web developer with expertise in creating seamless, user-centric 
              digital experiences. With a strong foundation in modern JavaScript frameworks, 
              I bring ideas to life through clean, efficient code and thoughtful user interfaces.
            </p>
            <p className="text-foreground/80 mb-6">
              My journey in tech has equipped me with a solid understanding of both front-end 
              and back-end technologies, allowing me to build complete, scalable solutions.
              I'm constantly learning and experimenting with new tools to stay at the cutting edge
              of web development.
            </p>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-foreground/80">Harshdeep Singh</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-foreground/80">contact@harshdeep.dev</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-foreground/80">Punjab, India</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-primary font-medium">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
