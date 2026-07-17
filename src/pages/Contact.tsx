import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { config } from "@/config";
import { SectionHeader } from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please provide a valid phone number." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry received.",
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionHeader 
                subtitle="New Projects"
                title="Start your commission."
                className="mb-12"
              />
              <p className="text-lg font-light leading-relaxed text-foreground/80 mb-16 max-w-md">
                We accept a limited number of projects each year. Share your vision and we will respond within 24 hours.
              </p>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-4 block">Studio</h4>
                  <address className="not-italic text-sm font-light space-y-2 text-muted-foreground">
                    <p>{config.studio.address}</p>
                    <p>{config.studio.workingHours}</p>
                  </address>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-4 block">Contact</h4>
                  <div className="text-sm font-light space-y-2 text-muted-foreground">
                    <p><a href={`mailto:${config.studio.email}`} className="hover:text-foreground transition-colors">{config.studio.email}</a></p>
                    <p><a href={`tel:${config.studio.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-foreground transition-colors">{config.studio.phone}</a></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-4 block">Social</h4>
                  <p className="text-sm font-light text-muted-foreground">
                    <a href={config.studio.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{config.studio.instagram}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 md:p-12"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-normal">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Shubham S" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-normal">Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-normal">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="rc@example.com" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs font-light" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-normal">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-primary shadow-none">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="luxury-residential">Luxury Residential</SelectItem>
                              <SelectItem value="commercial">Commercial Interiors</SelectItem>
                              <SelectItem value="architecture">Architecture</SelectItem>
                              <SelectItem value="turnkey">Turnkey Project</SelectItem>
                              <SelectItem value="landscape">Landscape Design</SelectItem>
                              <SelectItem value="furniture">Furniture Design</SelectItem>
                              <SelectItem value="renovation">Renovation</SelectItem>
                              <SelectItem value="interior-consultancy">Interior Consultancy</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-normal">Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-primary shadow-none">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-3">Under 3 months</SelectItem>
                              <SelectItem value="3-to-6">3–6 months</SelectItem>
                              <SelectItem value="6-to-12">6–12 months</SelectItem>
                              <SelectItem value="over-12">12+ months</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-normal">Budget Estimation</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-primary shadow-none">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-50l">Under ₹50 Lakhs</SelectItem>
                            <SelectItem value="50l-1cr">₹50L–₹1 Crore</SelectItem>
                            <SelectItem value="1cr-3cr">₹1–3 Crore</SelectItem>
                            <SelectItem value="over-3cr">₹3 Crore+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs font-light" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest font-normal">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about the space, location, and your vision..." 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs font-light" />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-xs uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-primary transition-all duration-300 w-full md:w-auto disabled:opacity-50 mt-4"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
