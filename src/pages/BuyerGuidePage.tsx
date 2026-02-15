import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiQuestionMarkCircle, HiCurrencyRupee, HiShieldCheck, HiCog, HiDocumentText } from 'react-icons/hi';
import Layout from '@/components/Layout';

const guideContent = [
  {
    id: 'what-is-superbike',
    icon: HiQuestionMarkCircle,
    title: 'What is a Superbike?',
    content: `A superbike is a high-performance motorcycle typically featuring an engine displacement above 600cc, with extreme power-to-weight ratios designed for speed and agility. These machines are derived from racing technology and offer cutting-edge electronics, premium suspension, and aerodynamic designs.

In India, superbikes are classified under motorcycles with engine capacity above 500cc. They require special registration and come with higher insurance premiums due to their performance capabilities.

Key characteristics of superbikes:
• Engine capacity: 600cc to 1800cc+
• Power output: 100 PS to 240+ PS
• Top speeds exceeding 200 km/h
• Advanced electronics (ABS, traction control, riding modes)
• Premium brakes and suspension systems`,
  },
  {
    id: 'practical-in-india',
    icon: HiDocumentText,
    title: 'Is a Superbike Practical in India?',
    content: `Owning a superbike in India comes with unique considerations:

**Road Conditions**: Indian roads vary significantly. While city roads and highways are improving, potholes and uneven surfaces can be challenging for low-ground-clearance sports bikes. Adventure and touring bikes handle these better.

**Traffic**: Dense urban traffic limits the ability to utilize a superbike's performance. However, highway cruises and weekend rides offer opportunities to enjoy these machines.

**Climate**: India's diverse climate means considering monsoons, extreme heat, and dust. Quality riding gear and regular maintenance become essential.

**Infrastructure**: Premium dealerships are concentrated in metro cities. Service networks are expanding but may require travel for specialized maintenance.

**Fuel**: Most superbikes require premium fuel (95+ octane), which is available at select fuel stations in major cities.

Despite these challenges, the superbike community in India is growing rapidly with dedicated riding groups, track days, and touring events.`,
  },
  {
    id: 'license',
    icon: HiShieldCheck,
    title: 'License Requirements',
    content: `To legally ride a superbike in India, you need:

**Driving License**: A valid motor vehicle license with motorcycle endorsement. While there's no separate "superbike license" in India, riders must be at least 18 years old.

**Learner's License**: Valid for 6 months, allows practice with a licensed rider.

**Permanent License**: Obtained after passing practical and written tests at your local RTO.

**Recommendations**:
• Take a professional riding course before buying a superbike
• Start with a smaller capacity bike to build skills
• Practice in controlled environments before highway riding
• Join a riding school that offers advanced training

**Important**: Some states may have additional requirements for high-capacity motorcycles. Always check with your local RTO for specific regulations.`,
  },
  {
    id: 'maintenance',
    icon: HiCog,
    title: 'Maintenance & Service Costs',
    content: `Superbike maintenance is significantly higher than regular motorcycles:

**Service Intervals**:
• Oil changes: Every 3,000-5,000 km
• Major service: Every 10,000-15,000 km
• Valve clearance check: Every 20,000-40,000 km (varies by brand)

**Typical Service Costs**:
• Basic service: ₹8,000 - ₹15,000
• Major service: ₹25,000 - ₹50,000
• Tire replacement: ₹25,000 - ₹60,000 per set
• Brake pads: ₹5,000 - ₹15,000

**Parts & Consumables**:
• Engine oil: ₹2,000 - ₹4,000 per liter (synthetic)
• Chain & sprocket: ₹15,000 - ₹35,000
• Air filter: ₹3,000 - ₹8,000

**Tips to Reduce Costs**:
• Follow the maintenance schedule strictly
• Use genuine parts for critical components
• Store the bike properly during monsoon
• Join owner communities for shared knowledge
• Consider extended warranty options`,
  },
  {
    id: 'insurance',
    icon: HiCurrencyRupee,
    title: 'Insurance Basics',
    content: `Superbike insurance is mandatory and typically more expensive:

**Types of Coverage**:
• **Third-party**: Mandatory, covers damage to others (₹3,000-8,000/year)
• **Comprehensive**: Covers your bike + third-party (2-5% of bike value/year)
• **Zero Depreciation**: Recommended for superbikes (adds 15-20% to premium)

**Factors Affecting Premium**:
• Bike value and engine capacity
• Rider's age and experience
• City of registration
• Claim history
• Add-on covers selected

**Recommended Add-ons**:
• Zero depreciation cover
• Engine protect
• Roadside assistance
• Personal accident cover
• Key replacement

**Insurance Tips**:
• Compare quotes from multiple insurers
• Declare accurate IDV (Insured Declared Value)
• Document your bike's condition with photos
• Understand claim process before buying
• Consider 2-3 year policies for discounts

**Note**: High-performance modifications may void insurance coverage. Always inform your insurer about any modifications.`,
  },
];

const BuyerGuidePage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              Buyer <span className="text-primary">Guide</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know before buying a superbike in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-card p-6"
          >
            <h2 className="font-orbitron text-lg font-bold mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {guideContent.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors duration-200 group"
                >
                  <section.icon className="w-5 h-5 text-primary" />
                  <span className="font-rajdhani font-semibold group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {guideContent.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="premium-card p-8 scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-orbitron text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-orbitron text-3xl font-bold mb-6">
              Ready to Explore <span className="text-primary">Superbikes?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Now that you're informed, browse our complete collection and find your dream machine.
            </p>
            <Link to="/explore" className="btn-hero-primary inline-flex items-center gap-3">
              Explore All Superbikes
              <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BuyerGuidePage;
