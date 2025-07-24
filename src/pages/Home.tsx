import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Users, Award, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import residentialProject from "@/assets/residential-project.jpg";
import commercialProject from "@/assets/commercial-project.jpg";
import renovationProject from "@/assets/renovation-project.jpg";

const Home = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes and residential developments built to your specifications.",
      icon: "🏠",
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities.",
      icon: "🏢",
    },
    {
      title: "Remodeling & Renovation",
      description: "Transform your existing space with our renovation expertise.",
      icon: "🔨",
    },
  ];

  const projects = [
    {
      title: "Luxury Family Home",
      category: "Residential",
      image: residentialProject,
      description: "5,000 sq ft custom home with modern amenities",
    },
    {
      title: "Corporate Office Complex",
      category: "Commercial",
      image: commercialProject,
      description: "50,000 sq ft office building with sustainable design",
    },
    {
      title: "Kitchen Renovation",
      category: "Renovation",
      image: renovationProject,
      description: "Complete kitchen makeover with premium finishes",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "BuildPros Hub exceeded our expectations. The quality of work and attention to detail was exceptional.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      content: "Professional, on-time, and within budget. They transformed our commercial space beautifully.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Property Developer",
      content: "We've worked with BuildPros on multiple projects. They consistently deliver excellence.",
      rating: 5,
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "BBB A+ Rated" },
    { icon: Users, text: "500+ Happy Clients" },
    { icon: Clock, text: "25+ Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Your Vision Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional construction services for residential and commercial projects. 
            Quality craftsmanship, on-time delivery, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-gray-900" onClick={() => window.location.href = '/projects'}>
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-construction-concrete">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <badge.icon className="w-12 h-12 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-construction-steel">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we deliver exceptional construction services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-center mt-6">
                    <Button variant="outline" onClick={() => {
                      const serviceMap: { [key: string]: string } = {
                        'Residential Construction': '/services#residential',
                        'Commercial Construction': '/services#commercial', 
                        'Remodeling & Renovation': '/services#renovation'
                      };
                      window.location.href = serviceMap[service.title] || '/services';
                    }}>Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our latest completed projects and construction excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" onClick={() => window.location.href = '/projects'}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-construction-steel mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-yellow text-construction-yellow" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote for your next construction project. 
            Our experts are ready to bring your vision to life.
          </p>
          <div className="flex justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;