import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyRole: "",
    linkedin: "",
    challenge: "",
    agreement: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please confirm your understanding of the selection process.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {


      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'application-form',
          fullName: formData.fullName,
          email: formData.email,
          companyRole: formData.companyRole,
          linkedin: formData.linkedin,
          challenge: formData.challenge,
          agreement: formData.agreement.toString(),
          submittedAt: new Date().toISOString()
        }).toString()
      });


      if (response.ok) {
        toast({
          title: "Application Submitted Successfully",
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
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="apply" className="py-24 px-6 bg-primary text-white relative overflow-hidden">
      {/* Background elements for premium feel */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Request Your Invitation
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto mb-8 rounded" />
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Applications close <strong>October 30</strong>. Acceptance is limited and selective.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Curated by Committee</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Invitation Only</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Senior Leaders Only</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Selection Criteria
              </h3>
              <ul className="space-y-3 text-white/90 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  <span>Senior-level technical leadership experience (5+ years)</span>
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

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Review Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-accent-gold font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Application Review</h4>
                    <p className="text-white/80 text-sm">Personal review by organizing committee within 48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-accent-gold font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Brief Interview</h4>
                    <p className="text-white/80 text-sm">10-minute call to ensure mutual fit and discuss topics</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-accent-gold font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Invitation</h4>
                    <p className="text-white/80 text-sm">Final confirmation with venue details and agenda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative">
            {/* Premium form styling indicator */}
            <div className="absolute -top-3 left-8 bg-accent-gold px-4 py-1 rounded-full">
              <span className="text-primary text-sm font-semibold">Exclusive Application</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4" name="application-form" data-netlify="true">
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
                disabled={isSubmitting}
                className="btn-luxury w-full text-lg py-6 relative overflow-hidden group disabled:opacity-70"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Submitting..." : "Request Invitation"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              {/* Additional trust elements */}
              <div className="text-center text-white/70 text-sm mt-4">
                <p>🔒 Your information is kept strictly confidential</p>
                <p className="mt-1">⚡ Response within 48 hours guaranteed</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};