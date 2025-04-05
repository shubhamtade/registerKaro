import React from "react";

const SecondPart = () => {
  return (
    <div className="border-t border-[#FFA22A] pt-8">
      <div className="grid grid-cols-1 gap-8 mb-8">
        {/* Elevate Your Business */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFA22A]">
            Elevate Your Business with RegisterKaro
          </h3>
          <p className="text-gray-200 text-justify">
            As a leading technology-driven legal services and advisory firm, we
            empower SMEs and entrepreneurs on their business journey. Our expert
            team covers business registration, legal compliance, tax filing, IPR
            registration, and more. With over 200 professionals, we've served
            50,000+ satisfied customers, ensuring startup compliance with our
            country's legal and regulatory systems.
          </p>
        </div>

        {/* Regulatory Affairs & Environmental Solutions */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFA22A]">
              Navigating Regulatory Affairs
            </h3>
            <p className="text-gray-200 text-justify">
              In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI
              hold the keys to licenses and registrations. We simplify this
              process by connecting you with our legal professionals who
              understand your needs, handle applications, and deliver required
              licenses.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFA22A]">
              Environmental Solutions
            </h3>
            <p className="text-gray-200 text-justify">
              Our seasoned environmental experts provide comprehensive solutions
              for environmental compliance including battery waste management,
              plastic waste management, and e-waste management.
            </p>
          </div>
        </div>

        {/* Business Registration & Other Services */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFA22A]">
              Business Registration Expertise
            </h3>
            <p className="text-gray-200 text-justify">
              We facilitate all forms of business registration including private
              limited companies, one-person companies, Section 8 companies,
              LLPs, public companies, and Nidhi companies. Our services cover
              everything from initial setup to ongoing compliance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFA22A]">
              Intellectual Property & Taxation
            </h3>
            <p className="text-gray-200 text-justify">
              We specialize in IP protection (trademarks, copyrights, patents)
              and comprehensive tax solutions (GST, TDS, income tax filings).
              Our professionals ensure your tax matters are handled efficiently.
            </p>
          </div>
        </div>
      </div>
      <p className="py-1 text-[10px] text-center text-gray-100/50 hover:text-gray-100 duration-300">
        ***Please note that we are a facilitating platform enabling access to
        reliable professionals. We are not a law firm and do not provide legal
        services ourselves. The information on this website is for the purpose
        of knowledge only and should not be relied upon as legal advice or
        opinion.
      </p>
    </div>
  );
};

export default SecondPart;
