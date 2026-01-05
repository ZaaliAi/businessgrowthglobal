import { TrendingUp, AlertTriangle, Users } from 'lucide-react';

export default function ScaleSmarterMarketStats() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://loirhexauyamqihgphsu.supabase.co/storage/v1/object/public/site-images/pexels-shvetsa-5953714.jpg')" 
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-primary-foreground">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Reality of UK Business Growth
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            The ambition is there, but the execution is where most falter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">99.9%</h3>
            </div>
            <p className="font-medium text-lg mb-2">The SME Engine</p>
            <p className="text-sm text-primary-foreground/70">
              SMEs make up 99.9% of the UK private sector business population. You are the backbone of the economy.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">70%</h3>
            </div>
            <p className="font-medium text-lg mb-2">Optimism is High</p>
            <p className="text-sm text-primary-foreground/70">
              70% of UK businesses expect turnover to increase in 2025. The market opportunity exists for those ready to seize it.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold">50%+</h3>
            </div>
            <p className="font-medium text-lg mb-2">The Execution Gap</p>
            <p className="text-sm text-primary-foreground/70">
              Over half of decision-makers identify talent and capability gaps as the primary barrier to delivering their strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
