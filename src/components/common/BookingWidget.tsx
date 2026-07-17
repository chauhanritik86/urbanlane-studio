import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/config";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

const services = [
  "Luxury Residential",
  "Commercial Interiors",
  "Architecture",
  "Turnkey Project",
  "Landscape Design",
  "Furniture Design",
  "Renovation",
  "Interior Consultancy",
];

const budgets = [
  { label: "Under ₹50 Lakhs", value: "Under ₹50 Lakhs" },
  { label: "₹50L – ₹1 Crore", value: "₹50L – ₹1 Crore" },
  { label: "₹1 – 3 Crore", value: "₹1 – 3 Crore" },
  { label: "₹3 Crore+", value: "₹3 Crore+" },
];

const timelines = [
  "Under 3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
];

export function BookingWidget() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsApp = () => {
    const message = `Hello, I'm reaching out from URBANLANE STUDIO's website.

*Name:* ${name || "Not provided"}
*Service Interest:* ${service}
*Budget Range:* ${budget}
*Project Timeline:* ${timeline}
*Contact Number:* ${phone || "Not provided"}

I'd love to schedule a design consultation. Looking forward to hearing from you.`;

    const encoded = encodeURIComponent(message);
    window.open(`${config.whatsappLink}?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const canProceedStep1 = service !== "";
  const canProceedStep2 = budget !== "" && timeline !== "";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl mb-4">WhatsApp Opening</h3>
        <p className="text-muted-foreground font-light max-w-sm mx-auto mb-8">
          Your consultation request has been prepared. Complete the chat on WhatsApp — our team responds within a few hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setService(""); setBudget(""); setTimeline(""); setName(""); setPhone(""); }}
          className="text-xs uppercase tracking-widest border border-border px-6 py-3 hover:border-primary transition-colors"
        >
          Start over
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                step > s
                  ? "bg-primary text-primary-foreground cursor-pointer"
                  : step === s
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground cursor-default"
              }`}
            >
              {step > s ? <Check className="w-4 h-4" /> : s}
            </button>
            {s < 3 && (
              <div
                className={`w-16 h-[1px] transition-all duration-500 ${
                  step > s ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 text-center">Step 1 of 3</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">What are you planning to design?</h3>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`px-5 py-3 text-sm transition-all duration-200 border ${
                    service === s
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary/60 text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => canProceedStep1 && setStep(2)}
                disabled={!canProceedStep1}
                className="flex items-center gap-2 text-xs uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Budget + Timeline */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 text-center">Step 2 of 3</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">Budget & Timeline</h3>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Investment Range</p>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b.value}
                    onClick={() => setBudget(b.value)}
                    className={`px-5 py-3 text-sm transition-all duration-200 border ${
                      budget === b.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/60 text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Desired Timeline</p>
              <div className="flex flex-wrap gap-3">
                {timelines.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`px-5 py-3 text-sm transition-all duration-200 border ${
                      timeline === t
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/60 text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => canProceedStep2 && setStep(3)}
                disabled={!canProceedStep2}
                className="flex items-center gap-2 text-xs uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Details + WhatsApp */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 text-center">Step 3 of 3</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">Let us know who you are</h3>

            <div className="space-y-8 mb-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Mehta"
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Your Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-card border border-border p-6 mb-8 space-y-3 text-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Your request summary</p>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium">{service}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Budget</span>
                <span className="font-medium">{budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Timeline</span>
                <span className="font-medium">{timeline}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setStep(2)}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-xs uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Opens WhatsApp with your details pre-filled. We respond within a few hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
