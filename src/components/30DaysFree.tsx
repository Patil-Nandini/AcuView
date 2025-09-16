import React from 'react';
import Image from 'next/image';

const ThirtyDaysFree: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading and subtitle */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            30 Days FREE — No Strings Attached
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            We're so confident <span className="font-semibold">AcuView</span> will transform your lending that we're{' '}
            giving you <span className="font-semibold">30 days</span> completely <span className="font-semibold">FREE</span>.
          </p>
        </div>

        {/* Icon and section title */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/30-days-icon.png"
                alt="30 Days Icon"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
              Your 30-Day Risk-Free Trial Includes:
            </h2>
          </div>
        </div>

        {/* Desktop grid with 5 cards */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mb-16 justify-items-center">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
          <Card
            icon="/implementation-icon.png"
            alt="Full Implementation"
            title="Full Implementation"
            subtitle="Support Included"
          />
          <Card
            icon="/customer-success-icon.png"
            alt="Customer Success Manager"
            title="Dedicated Customer"
            subtitle="Success Manager"
          />
        </div>

        {/* Tablet grid with first 3 cards */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-6 justify-items-center mb-6">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
        </div>

        {/* Tablet layout: last 2 cards centered in a row */}
        <div className="hidden sm:flex lg:hidden gap-6 mb-16 justify-center items-stretch flex-wrap">
          <div className="w-full max-w-[240px] h-[160px]">
            <Card
              icon="/implementation-icon.png"
              alt="Full Implementation"
              title="Full Implementation"
              subtitle="Support Included"
            />
          </div>
          <div className="w-full max-w-[240px] h-[160px]">
            <Card
              icon="/customer-success-icon.png"
              alt="Customer Success Manager"
              title="Dedicated Customer"
              subtitle="Success Manager"
            />
          </div>
        </div>

        {/* Mobile layout: 2 rows with 2 cards and 1 centered below */}
        <div className="sm:hidden grid grid-cols-2 gap-6 justify-items-center mb-6">
          <Card
            icon="/lifetime-founding-icon.png"
            alt="Lifetime Founding Members"
            title="Lifetime Founding"
            subtitle="Members Pricing"
          />
          <Card
            icon="/direct-input-icon.png"
            alt="Direct Input"
            title="Direct Input On"
            subtitle="Product Development"
          />
          <Card
            icon="/no-contracts-icon.png"
            alt="No Long-Term Contracts"
            title="No Long-Term"
            subtitle="Contracts"
          />
          <Card
            icon="/implementation-icon.png"
            alt="Full Implementation"
            title="Full Implementation"
            subtitle="Support Included"
          />
        </div>

        {/* Mobile layout: last card centered */}
        <div className="sm:hidden flex justify-center mb-16">
          <Card
            icon="/customer-success-icon.png"
            alt="Customer Success Manager"
            title="Dedicated Customer"
            subtitle="Success Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirtyDaysFree;

interface CardProps {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, alt, title, subtitle }) => (
  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 w-full h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 mb-4 relative flex-shrink-0">
      <Image
        src={icon}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
    <h3 className="text-base font-semibold text-black leading-tight">
      {title}<br />{subtitle}
    </h3>
  </div>
);
