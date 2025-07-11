import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyRole: "",
    linkedin: "",
    challenge: "",
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please confirm your understanding of the selection process.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. You'll hear from us within 48 hours.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      companyRole: "",
      linkedin: "",
      challenge: "",
      agreement: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="apply" className="py-24 px-6 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Apply Now
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Applications close <strong>October 30</strong>. Acceptance is limited and selective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                What We're Looking For
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span>Senior-level technical leadership experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span>Track record of driving engineering excellence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span>Genuine interest in peer-to-peer learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span>Commitment to confidential, honest dialogue</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Selection Process
              </h3>
              <p className="text-white/90 leading-relaxed">
                Each application is personally reviewed by our organizing committee. 
                We prioritize diversity of thought, company stage, and technical expertise 
                to create the most valuable discussions for all participants.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="input-luxury bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="input-luxury bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="companyRole"
                  value={formData.companyRole}
                  onChange={handleChange}
                  placeholder="Company + Role *"
                  required
                  className="input-luxury bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn or GitHub Profile"
                  className="input-luxury bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="What topic or challenge would you bring to the roundtable? *"
                  required
                  rows={4}
                  className="input-luxury bg-white/10 border-white/30 text-white placeholder:text-white/60 resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-accent-gold bg-white/10 border-white/30 rounded focus:ring-accent-gold"
                />
                <label htmlFor="agreement" className="text-white/90 text-sm leading-relaxed">
                  I understand this is a selective event and acceptance is not guaranteed. 
                  I commit to participating in good faith and maintaining confidentiality.
                </label>
              </div>

              <Button
                type="submit"
                className="btn-luxury w-full text-lg py-6"
              >
                Request Invitation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};