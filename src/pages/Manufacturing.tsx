import { Factory, Leaf, Shield, Users, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ayurBackground2 from '@/assets/ayur-background-2.jpg';

const Manufacturing = () => {
  const processes = [
    {
      icon: Leaf,
      title: "Raw Material Sourcing",
      description: "Partnering with certified farmers across Sri Lanka to source the finest herbs and natural ingredients.",
      features: ["Organic farming partnerships", "Quality certification", "Seasonal harvesting", "Sustainability focus"]
    },
    {
      icon: Factory,
      title: "Itura Production",
      description: "Our specialized facility for producing premium Itura powders using traditional grinding methods.",
      features: ["Traditional stone grinding", "Temperature controlled", "Small batch production", "Quality testing"]
    },
    {
      icon: Shield,
      title: "Herbal Processing",
      description: "Advanced herbal powdering and bottling processes maintaining the purity and potency of ingredients.",
      features: ["Clean room environment", "Automated bottling", "Moisture control", "Batch tracking"]
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control measures ensuring every product meets our high standards.",
      features: ["Laboratory testing", "Purity verification", "Potency analysis", "Safety compliance"]
    }
  ];

  const certifications = [
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "GMP Certified", description: "Good Manufacturing Practices" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
    { name: "Organic Certified", description: "Certified Organic Processing" }
  ];

  const sustainabilityFeatures = [
    "Eco-friendly cultivation methods",
    "Zero waste production goals",
    "Renewable energy usage",
    "Water conservation systems",
    "Biodegradable packaging options",
    "Local farmer support programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-ayur-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-ayur-sage/35 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 backdrop-blur-sm">
              <Factory className="w-4 h-4 mr-2 animate-pulse" />
              SHG Manufacturing Unit
            </Badge>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-ayur-deep-green">
              State-of-the-Art Ayurvedic Manufacturing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ayur-deep-green/90 leading-relaxed">
              Our advanced manufacturing facility combines traditional Ayurvedic methods with 
              modern technology to produce the highest quality herbal products while maintaining 
              the authenticity and potency of natural ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Processes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sourcing premium raw materials to final packaging, every step is carefully 
              monitored to ensure the highest quality standards in Ayurvedic manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-ayur-sage rounded-lg flex items-center justify-center">
                      <process.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{process.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {process.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-ayur-gold" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itura Production Focus */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-ayur-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-ayur-gold/20 text-ayur-gold border-ayur-gold/30">
                <Award className="w-4 h-4 mr-2" />
                Specialty Production
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Premium Itura Powder Manufacturing
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our flagship Itura powder production facility represents the pinnacle of traditional 
                  Ayurvedic manufacturing. Using time-honored stone grinding techniques combined with 
                  modern quality control, we create powders that retain maximum potency and therapeutic value.
                </p>
                <p>
                  Each batch is carefully monitored from raw material selection through final packaging, 
                  ensuring consistency and quality that meets both traditional standards and modern 
                  regulatory requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500kg</div>
                    <div className="text-sm">Daily Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm">Purity Standard</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-ayur-sage/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Modern Facility</h3>
                  <p className="text-muted-foreground">ISO Certified Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ayurBackground2})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-secondary/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Quality Certifications & Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by international certifications and 
              adherence to the highest manufacturing standards in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-2 border-ayur-gold/20 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-card/80">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ayur-gold to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainability
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Eco-friendly Manufacturing Practices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to sustainable manufacturing that protects our environment 
              while supporting local farming communities and preserving natural resources.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-ayur-sage flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Farmer Partnership */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-ayur-earth/20 to-secondary/40 rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-ayur-earth rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">250+ Farmers</h3>
                  <p className="text-muted-foreground">In our supply network</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Supporting Local Farming Communities
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We work directly with over 250 farmers across Sri Lanka, providing them with 
                  fair prices, technical support, and sustainable farming practices training. 
                  This partnership ensures a reliable supply of high-quality raw materials while 
                  supporting rural livelihoods.
                </p>
                <p>
                  Our farmer support programs include organic certification assistance, 
                  modern equipment access, and guaranteed purchase agreements that provide 
                  economic stability to our farming partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;