import { SectionHeader } from "@/components/common/SectionHeader";

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeader title="Privacy Policy" className="mb-12" />
        
        <div className="prose prose-stone dark:prose-invert font-light text-foreground/80 space-y-8">
          <p>
            Last updated: October 2023
          </p>
          
          <section>
            <h3 className="font-serif text-2xl text-foreground mb-4">1. Introduction</h3>
            <p>
              Urbanlane Studio respects your privacy and is committed to protecting your personal data. This privacy policy explains how we look after your personal data when you visit our website and tells you about your privacy rights.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-2xl text-foreground mb-4">2. The data we collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data</strong> includes first name, last name, title.</li>
              <li><strong>Contact Data</strong> includes email address, telephone numbers, and project location.</li>
              <li><strong>Project Data</strong> includes budget, timeline, and specific details you provide in your inquiry.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif text-2xl text-foreground mb-4">3. How we use your data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To respond to your inquiries and evaluate potential projects.</li>
              <li>To perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party).</li>
            </ul>
          </section>

          <section>
            <h3 className="font-serif text-2xl text-foreground mb-4">4. Client Confidentiality</h3>
            <p>
              As a luxury design practice, client confidentiality is paramount. We never disclose the identities, exact locations, or budgets of our private residential clients without explicit written consent. Portfolio imagery is carefully curated to respect privacy.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-2xl text-foreground mb-4">5. Contact us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at studio@urbanlanestudio.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
