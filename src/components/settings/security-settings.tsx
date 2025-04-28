
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Shield, Key, LockKeyhole } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SecuritySettings() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [showOTPSetup, setShowOTPSetup] = useState(false);
  const [otp, setOTP] = useState("");
  const [activeTab, setActiveTab] = useState("2fa");
  const { toast } = useToast();

  const handleToggle2FA = async () => {
    if (!is2FAEnabled) {
      setShowOTPSetup(true);
    } else {
      setIs2FAEnabled(false);
      setShowOTPSetup(false);
      toast({
        title: "2FA Disabled",
        description: "Two-factor authentication has been disabled for your account.",
      });
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setIs2FAEnabled(true);
      setShowOTPSetup(false);
      toast({
        title: "2FA Enabled",
        description: "Two-factor authentication has been enabled for your account.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal" />
            Security Settings
          </CardTitle>
          <CardDescription>
            Manage your account security and authentication preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="2fa">Two-Factor Authentication</TabsTrigger>
              <TabsTrigger value="password">Password Requirements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="2fa" className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <LockKeyhole className="h-4 w-4" />
                    <h4 className="font-medium">Two-Factor Authentication (2FA)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={is2FAEnabled}
                  onCheckedChange={handleToggle2FA}
                />
              </div>

              {showOTPSetup && (
                <div className="space-y-4 pt-4">
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Key className="h-4 w-4" />
                      Enter Verification Code
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Enter the 6-digit code from your authenticator app
                    </p>
                    <div className="flex justify-center py-4">
                      <InputOTP
                        value={otp}
                        onChange={setOTP}
                        maxLength={6}
                        render={({ slots }) => (
                          <InputOTPGroup>
                            {slots && slots.map((slot, index) => (
                              <InputOTPSlot key={index} {...slot} />
                            ))}
                          </InputOTPGroup>
                        )}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={handleVerifyOTP} disabled={otp.length !== 6}>
                        Verify and Enable 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="password">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium">Password Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure your password meets our security standards
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-4 text-sm space-y-2 text-muted-foreground">
                  <li>Minimum 8 characters long</li>
                  <li>Contains at least one uppercase letter</li>
                  <li>Contains at least one number</li>
                  <li>Contains at least one special character</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
