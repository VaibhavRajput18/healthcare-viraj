import React, { useEffect } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Medical Director",
    image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
    bio: "Specialist in global health with 15+ years of experience developing healthcare solutions for underserved populations."
  },
  {
    name: "Michael Chen",
    role: "Technology Lead",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Expert in developing accessible technology solutions with a focus on offline-first applications for rural communities."
  },
  {
    name: "Aisha Nkosi",
    role: "Community Partnerships",
    image: "https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg",
    bio: "Experienced in building sustainable partnerships between technology providers and healthcare systems in developing regions."
  },
  {
    name: "Dr. James Wilson",
    role: "Research Director",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    bio: "Leading our evidence-based approach to healthcare innovation with rigorous evaluation methodologies."
  }
];

const partners = [
  "Global Health Initiative",
  "Tech For Good Foundation",
  "Rural Healthcare Alliance",
  "Medical Innovation Fund",
  "Community Health Network"
];

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="fade-in text-lg text-gray-700">
            Meet the dedicated experts working to transform healthcare access
            through innovation and community-centered approaches.
          </p>
        </div>
        
        <div className="fade-in grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="card overflow-hidden group"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Partners</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We collaborate with leading organizations to amplify our impact
              and create sustainable healthcare solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-xl font-semibold text-gray-500 hover:text-teal-600 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;