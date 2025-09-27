import { Award, Users, MapPin, Target, Heart, Leaf, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ayurBackground1 from '@/assets/ayur-background-1.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer Care",
      description: "Prioritizing customer satisfaction and well-being in every interaction and product we offer."
    },
    {
      icon: Leaf,
      title: "Tradition",
      description: "Preserving ancient Ayurvedic wisdom while embracing modern quality standards."
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building lasting relationships through consistent quality and authentic products."
    },
    {
      icon: Users,
      title: "Employee Well-being",
      description: "Creating a supportive environment where our team can grow and contribute meaningfully."
    }
  ];

  const milestones = [
    { year: "1944", event: "Founded S.H.G. Hela Osu with a vision to serve authentic Ayurveda" },
    { year: "2010", event: "Opened our first 3 outlets in Colombo suburbs" },
    { year: "2015", event: "Established our own manufacturing unit for Itura products" },
    { year: "2020", event: "Expanded to 8+ outlets and 100+ employees" },
    { year: "2024", event: "Planning expansion to 40 outlets in Colombo region" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ayurBackground1})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-ayur-gold/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-ayur-sage/35 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 backdrop-blur-sm">
              <Leaf className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-ayur-deep-green">
              80+ Years of Ayurvedic Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ayur-deep-green/90 leading-relaxed">
              From humble beginnings in 1944 to becoming Sri Lanka's trusted leader in authentic 
              Ayurvedic products, our journey is built on tradition, quality, and unwavering 
              commitment to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="about-us" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Founded on the Principles of Authentic Ayurveda
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  S.H.G. Hela Osu (Pvt) Ltd was established in 1944 with a simple yet profound mission: 
                  to make authentic Ayurvedic medicine accessible to every Sri Lankan family. What started 
                  as a small pharmacy has evolved into a trusted network of 8+ outlets serving communities 
                  across the island.
                </p>
                <p>
                  Our founder's vision was to bridge the gap between ancient Ayurvedic wisdom and modern 
                  lifestyle needs. Today, with over 100 dedicated employees and expanding operations, we 
                  continue to honor this vision while setting new standards in herbal medicine quality 
                  and customer service.
                </p>
                <p>
                  As we prepare to expand to 40 outlets in the Colombo region, our commitment remains 
                  unchanged: delivering authentic, high-quality Ayurvedic products that enhance lives 
                  and preserve our rich healing traditions for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-ayur-sage/20 to-secondary/40 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Since 1944</h3>
                  <p className="text-muted-foreground">Serving Sri Lanka with Authentic Ayurveda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-ayur-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Sri Lanka's leading supplier of authentic Ayurvedic products, 
                  preserving traditional healing wisdom while meeting modern wellness needs 
                  with uncompromising quality and service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-ayur-gold/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-ayur-gold to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver authentic, high-quality Ayurvedic products with excellent customer service, 
                  while fostering employee well-being and contributing to the preservation of 
                  Sri Lanka's rich Ayurvedic heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gradient-to-b from-ayur-light-green/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Locate our head office and all branch locations easily with our interactive map
            </p>
          </div>

          <div className="mb-16 animate-fade-in">
            <Card className="overflow-hidden shadow-2xl border-2 border-ayur-sage/20">
              <div className="relative">
                {/* Map Container */}
                <div className="w-full h-96 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center relative">
                  {/* Map Placeholder with Google Maps Integration */}
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d79.8760997!3d6.9019249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDYuOSJOIDc5wrA1MiczOS45IkU!5e0!3m2!1sen!2slk!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  
                  {/* Map Overlay with Action Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 pointer-events-auto">
                    <Button
                      onClick={() => window.open('https://www.google.com/maps/search/shg+hela+osu/@6.9019249,79.8760997,12.18z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                      className="bg-white text-ayur-deep-green hover:bg-ayur-light-green hover:text-ayur-deep-green shadow-xl font-semibold px-6 py-3"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every product we create, 
              ensuring we stay true to our mission of promoting wellness and preserving tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-ayur-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="py-20 bg-gradient-to-br from-ayur-light-green/30 via-ayur-sage/20 to-ayur-light-green/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Corporate Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Official company details and leadership information for transparency and trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary/20 shadow-lg bg-ayur-light-green/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Company Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Company Name:</p>
                    <p className="text-muted-foreground">S.H.G. Hela Osu (Pvt) Ltd</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Registration:</p>
                    <p className="text-muted-foreground">PV00210568</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Address:</p>
                    <p className="text-muted-foreground">108C, Colombo Road, Borlesgamuwa</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Office Address:</p>
                    <p className="text-muted-foreground">No 10, School Lane, Borlesgamuwa</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-ayur-gold/20 shadow-lg bg-ayur-light-green/10">
                <CardHeader>
                  <CardTitle className="text-xl text-ayur-gold flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Leadership Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Managing Director:</p>
                    <p className="text-muted-foreground">S.H.G. Isira Upul Shantha</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Finance & HR Director:</p>
                    <p className="text-muted-foreground">S.H.G. Janitha Maheshakya</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Director Board:</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>• A.G.B.M.N. Chulasinghe</p>
                      <p>• S.H.G. Masitha Adweeth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-ayur-sage/20 shadow-lg bg-ayur-light-green/10">
              <CardHeader>
                <CardTitle className="text-xl text-ayur-sage flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Email:</p>
                    <p className="text-muted-foreground">shghelaosuhala@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Telephone:</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>0112 545 497</p>
                      <p>077 442 2479</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-ayur-light-green/30 via-ayur-sage/20 to-ayur-light-green/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Journey Through the Years
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a single vision to a network of wellness centers, explore the key milestones 
              that have shaped our company's growth and success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-ayur-sage"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-ayur-gold rounded-full border-4 border-background shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="border-border/50 shadow-md bg-ayur-light-green/10">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                          {milestone.year}
                        </Badge>
                        <p className="text-foreground leading-relaxed">
                          {milestone.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;