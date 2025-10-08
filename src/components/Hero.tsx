import React from 'react';
import { Shield, Truck, Factory, Award } from 'lucide-react';
import EditableText from './EditableText';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f0fdf4,transparent)] opacity-70"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-3 animate-fade-in-down">
          <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            PRODUCENT • PODLASKIE
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        </div>

        {/* GŁÓWNY NAGŁÓWEK SEO */}
        <div className="mb-4 animate-fade-in-up" style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
          <h1 
            className="font-extrabold text-center"
            style={{
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              overflow: 'visible'
            }}
          >
            <span
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                paddingTop: '0.5rem',
                paddingBottom: '0.25rem',
                overflow: 'visible'
              }}
            >
              <EditableText
                id="hero-title-1"
                initialText="Stalowe stojaki na choinki"
                component="Hero"
                file="src/components/Hero.tsx"
                as="span"
              />
            </span>
            <span
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 30%, #22c55e 70%, #4ade80 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                textShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                fontWeight: '900',
                paddingTop: '0.25rem',
                paddingBottom: '0.5rem',
                overflow: 'visible'
              }}
            >
              <EditableText
                id="hero-title-2"
                initialText="z pojemnikiem na wodę"
                component="Hero"
                file="src/components/Hero.tsx"
                as="span"
              />
            </span>
          </h1>
        </div>

        <EditableText
          id="hero-description"
          initialText="Wybierz stojak, który nie tylko utrzyma choinkę, ale też stanie się ozdobą Twojego salonu."
          component="Hero"
          file="src/components/Hero.tsx"
          as="p"
          className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-90"
        />

        {/* Ikony cech */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
          <div className="group flex items-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
              <Factory className="w-6 h-6 text-green-600" />
            </div>
            <EditableText
              id="hero-feature-1"
              initialText="Własna produkcja"
              component="Hero"
              file="src/components/Hero.tsx"
              as="span"
              className="text-gray-700 ml-4 font-medium"
            />
          </div>
          <div className="group flex items-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <EditableText
              id="hero-feature-2"
              initialText="Dostawa w całej Polsce"
              component="Hero"
              file="src/components/Hero.tsx"
              as="span"
              className="text-gray-700 ml-4 font-medium"
            />
          </div>
          <div className="group flex items-center bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white transition-all duration-300 border border-gray-100">
            <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <EditableText
              id="hero-feature-3"
              initialText="Gwarancja jakości"
              component="Hero"
              file="src/components/Hero.tsx"
              as="span"
              className="text-gray-700 ml-4 font-medium"
            />
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center animate-fade-in-up delay-300">
          <a
            href="/#stojaki"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white transition-all duration-300 bg-gradient-to-br from-green-600 to-green-700 rounded-xl hover:shadow-[0_20px_50px_rgba(22,_163,_74,_0.7)] hover:translate-y-[-2px]"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-green-600/0 to-green-700/0 group-hover:from-green-600/10 group-hover:to-green-700/10 transition-all duration-300"></span>
            <EditableText
              id="hero-cta-text"
              initialText="Zamów swój stojak na choinkę"
              component="Hero"
              file="src/components/Hero.tsx"
              as="span"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
