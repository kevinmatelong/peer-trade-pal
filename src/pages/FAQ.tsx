
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">
            Find answers to the most common questions about Crypto Sokoni
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search for questions..." 
              className="pl-10 h-12"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Crypto Sokoni?</AccordionTrigger>
                  <AccordionContent>
                    Crypto Sokoni is a peer-to-peer cryptocurrency marketplace that allows users to buy and sell cryptocurrencies directly with each other using various local payment methods. Our platform provides a secure escrow service to ensure safe transactions between users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Register" button in the navigation bar and fill out the registration form with your email, username, and password. After submitting the form, you'll receive a confirmation email to verify your account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is Crypto Sokoni available worldwide?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Crypto Sokoni is available worldwide. However, the available payment methods and listings will vary depending on your location and the sellers in your region.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What cryptocurrencies are supported?</AccordionTrigger>
                  <AccordionContent>
                    Currently, we support Bitcoin (BTC), Ethereum (ETH), and other major cryptocurrencies. We are continually expanding our offerings based on user demand and market conditions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="trading">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I buy cryptocurrency?</AccordionTrigger>
                  <AccordionContent>
                    To buy cryptocurrency, navigate to the "Buy" page, select your desired cryptocurrency, choose a seller, and follow the prompts to complete your purchase. Our escrow service ensures your transaction is secure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I sell cryptocurrency?</AccordionTrigger>
                  <AccordionContent>
                    To sell cryptocurrency, navigate to the "Sell" page, select the cryptocurrency you want to sell, set your price and payment methods, and create a listing. When a buyer initiates a purchase, follow the instructions to complete the transaction.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What are the trading fees?</AccordionTrigger>
                  <AccordionContent>
                    Our platform charges a small fee for each completed transaction. The exact fee amount depends on the transaction volume and may vary by cryptocurrency. You can view the current fee structure on the transaction page before confirming any trade.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long do transactions take?</AccordionTrigger>
                  <AccordionContent>
                    The speed of transactions depends on several factors, including the cryptocurrency being traded, network congestion, and the payment method used. Once a buyer confirms payment and the seller verifies receipt, the cryptocurrency is released from escrow immediately.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="security">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the escrow service work?</AccordionTrigger>
                  <AccordionContent>
                    Our escrow service holds the seller's cryptocurrency until the buyer confirms payment. This ensures that buyers receive their crypto and sellers receive their payment, providing security for both parties throughout the transaction.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I enable two-factor authentication?</AccordionTrigger>
                  <AccordionContent>
                    To enable two-factor authentication, go to Settings, then Security Settings. Toggle on the Two-Factor Authentication option and follow the instructions to set it up using your preferred authenticator app.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What should I do if I suspect fraudulent activity?</AccordionTrigger>
                  <AccordionContent>
                    If you suspect fraudulent activity, immediately contact our support team through the Help Center. Do not proceed with any suspicious transactions, and keep all communication with the other party on our platform for documentation purposes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How is my personal information protected?</AccordionTrigger>
                  <AccordionContent>
                    We employ industry-standard encryption and security protocols to protect your personal information. We only collect information necessary for the platform's functionality and never share your data with third parties without your consent.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="payments">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    Payment methods vary by seller, but commonly include bank transfers, mobile money, and other local payment options. Each listing specifies which payment methods the seller accepts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I add a new payment method?</AccordionTrigger>
                  <AccordionContent>
                    To add a new payment method, go to your Profile settings, select "Payment Methods," and click "Add New Method." Follow the instructions to complete the setup for your preferred payment option.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any payment limits?</AccordionTrigger>
                  <AccordionContent>
                    Yes, there may be minimum and maximum transaction limits depending on your account verification level, the payment method used, and local regulations. These limits are displayed when you create or respond to a trade offer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if a payment is not received?</AccordionTrigger>
                  <AccordionContent>
                    If a seller does not receive payment after a buyer has marked it as sent, the seller can raise a dispute. Our support team will review the evidence from both parties and make a determination to release the cryptocurrency or cancel the transaction.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
