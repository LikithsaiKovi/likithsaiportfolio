import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import AnimateIn from "./AnimateIn";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_as8t0sf', 'template_fg449t2', {
        from_name: formData.name, from_email: formData.email,
        subject: formData.subject, message: formData.message,
        to_name: "Kovi Venkata Likith Sai",
      }, 'pjMwaBkXXdFR2QrP-');
      toast({ title: "Message Sent Successfully!", description: "Thank you! I'll get back to you soon!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({ title: "Failed to Send Message", description: "Please try again or contact me directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sailikith511@gmail.com", link: "mailto:sailikith511@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-8522831788", link: "tel:+918522831788" },
    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana", link: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">Reach out</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimateIn direction="left" className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-neon" />
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects. Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="glass-card hover:border-neon/30 transition-all duration-300 hover-lift rounded-xl">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-neon/10 rounded-xl">
                          <IconComponent className="w-5 h-5 text-neon" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{info.label}</p>
                          {info.link !== "#" ? (
                            <a href={info.link} className="text-muted-foreground hover:text-neon transition-colors text-sm">{info.value}</a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, link: "https://github.com/LikithsaiKovi" },
                  { icon: Linkedin, link: "https://linkedin.com/in/likithsaikovi" },
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                    className="p-3 glass-card rounded-xl hover:border-neon/30 hover:bg-neon/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-neon transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <Card className="glass-card hover:border-neon/30 transition-colors duration-300 rounded-xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-neon via-neon-glow to-neon" />
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="border-border/50 focus:border-neon rounded-xl bg-background/50" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="border-border/50 focus:border-neon rounded-xl bg-background/50" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="border-border/50 focus:border-neon rounded-xl bg-background/50" placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="border-border/50 focus:border-neon resize-none rounded-xl bg-background/50" placeholder="Tell me about your project..." />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-neon text-neon-foreground hover:bg-neon/90 neon-glow rounded-xl font-medium">
                    {isSubmitting ? (
                      <><div className="w-4 h-4 border-2 border-neon-foreground/30 border-t-neon-foreground rounded-full animate-spin mr-2" />Sending...</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" />Send Message</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
