
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-teal/20 to-teal-light/20 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Crypto Sokoni</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're building the most secure, reliable, and easy-to-use peer-to-peer
                cryptocurrency marketplace for Africa and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to make cryptocurrency accessible to everyone, regardless of
                location or financial background. We believe in the power of blockchain technology
                to transform financial inclusion across Africa and the world.
              </p>
              <p className="mt-4 text-muted-foreground">
                By building a secure, reliable peer-to-peer platform, we enable users to buy and sell
                cryptocurrencies using local payment methods, breaking down barriers to entry and
                fostering a more inclusive financial ecosystem.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-[400px] rounded-lg bg-gradient-to-r from-teal/30 to-teal-light/30 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-teal to-teal-light">
                    <svg viewBox="0 0 30 30" className="h-10 w-10 text-white">
                      <path
                        fill="currentColor"
                        d="M15 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-3c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm9 0a3 3 0 110 6 3 3 0 010-6zm-18 0a3 3 0 110 6 3 3 0 010-6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center">Our Values</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Security</h3>
                  <p className="mt-2 text-muted-foreground">
                    We prioritize the security of our users' funds and personal information above all else,
                    implementing industry-leading security measures and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Community</h3>
                  <p className="mt-2 text-muted-foreground">
                    We build trusted communities of buyers and sellers, fostering a culture of
                    mutual respect, trust, and cooperation among our users.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-light text-teal">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Accessibility</h3>
                  <p className="mt-2 text-muted-foreground">
                    We're committed to making cryptocurrency accessible to everyone by supporting
                    local payment methods and building an intuitive, user-friendly platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
