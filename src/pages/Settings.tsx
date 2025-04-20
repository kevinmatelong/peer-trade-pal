
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SecuritySettings } from "@/components/settings/security-settings";

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          <SecuritySettings />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
