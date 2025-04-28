
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Search, ShieldCheck, Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions and get support for your account
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search for help topics..." 
              className="pl-10 h-12"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Trading Help</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn how to buy and sell crypto securely on our platform
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Account Security</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tips and best practices to keep your account secure
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Contact Support</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reach out to our customer support team for assistance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Quick answers to common questions about using our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Register" button in the navigation bar and fill out the registration form with your email, username, and password. After submitting the form, you'll receive a confirmation email to verify your account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I buy cryptocurrency?</AccordionTrigger>
                  <AccordionContent>
                    To buy cryptocurrency, navigate to the "Buy" page, select your desired cryptocurrency, choose a seller, and follow the prompts to complete your purchase. Our escrow service ensures your transaction is secure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How does the escrow service work?</AccordionTrigger>
                  <AccordionContent>
                    Our escrow service holds the seller's cryptocurrency until the buyer confirms payment. This ensures that buyers receive their crypto and sellers receive their payment, providing security for both parties throughout the transaction.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    Payment methods vary by seller, but commonly include bank transfers, mobile money, and other local payment options. Each listing specifies which payment methods the seller accepts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I enable two-factor authentication?</AccordionTrigger>
                  <AccordionContent>
                    To enable two-factor authentication, go to Settings, then Security Settings. Toggle on the Two-Factor Authentication option and follow the instructions to set it up using your preferred authenticator app.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-lg font-medium mb-4">Still have questions?</h3>
            <Button size="lg">Contact Support</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
