import React, { useEffect, useState } from 'react';

const stories = [
  {
    location: "Rural Kenya",
    title: "Telehealth Expanding Specialist Access",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
    quote: "The mobile clinic connected me to a doctor who diagnosed my condition. I didn't have to travel 200km to the city hospital.",
    person: "Sarah Mwangi",
    impact: "87% reduction in travel time for specialty consultations"
  },
  {
    location: "Urban India",
    title: "AI-Powered Screening Programs",
    image: "https://images.pexels.com/photos/8460057/pexels-photo-8460057.jpeg",
    quote: "The early detection program found my diabetes before complications developed. The community health worker helped me manage it.",
    person: "Raj Patel",
    impact: "12,000+ early diagnoses of chronic conditions"
  },
  {
    location: "Remote Brazil",
    title: "Mobile Health Record System",
    image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
    quote: "Having my health history available digitally means I get consistent care even when different providers are visiting our village.",
    person: "Maria Oliveira",
    impact: "63% improvement in treatment consistency"
  }
];

const Impact = () => {
  const [activeStory, setActiveStory] = useState(0);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">Real Impact, Real Lives</h2>
          <p className="fade-in text-lg text-gray-700">
            Our innovations are making a measurable difference in communities around the world.
            These are the stories of transformation and improved healthcare access.
          </p>
        </div>
        
        <div className="fade-in relative overflow-hidden rounded-2xl shadow-xl">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`transition-opacity duration-1000 ${
                activeStory === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {story.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                  <blockquote className="italic text-gray-600 border-l-4 border-teal-500 pl-4 mb-6">
                    "{story.quote}"
                  </blockquote>
                  <p className="font-medium mb-6">— {story.person}</p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-teal-800 font-medium">Impact: {story.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeStory === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                aria-label={`View story ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="fade-in mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 rounded-full p-3 mr-4">
                <span className="text-2xl font-bold text-teal-600">01</span>
              </div>
              <h3 className="text-xl font-semibold">Identify Needs</h3>
            </div>
            <p className="text-gray-700">
              We work directly with communities to understand their unique healthcare challenges and barriers to access.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <span className="text-2xl font-bold text-purple-600">02</span>
              </div>
              <h3 className="text-xl font-semibold">Develop Solutions</h3>
            </div>
            <p className="text-gray-700">
              Our team creates innovative, affordable, and sustainable technologies tailored to specific community needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <span className="text-2xl font-bold text-orange-500">03</span>
              </div>
              <h3 className="text-xl font-semibold">Measure Impact</h3>
            </div>
            <p className="text-gray-700">
              We track health outcomes, accessibility metrics, and community feedback to continually improve our approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;