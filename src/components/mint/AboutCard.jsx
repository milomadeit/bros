
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutCard() {
  return (
    <Card className="retro-card">
            <CardHeader className="px-6 pt-6 pb-4 flex flex-col space-y-1.5">
                <CardTitle className="text-3xl text-center font-bold text-foreground">WHY GNARLY BROS?</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg text-foreground font-medium space-y-4 leading-relaxed">
                <p className="">Brother, bro-cha-cho, bro-ritto, bro. In a world where you can be anything; be gnarly, bro.
        </p>
               
                <p className="text-sm text-muted-foreground">Built on Monad • For the Bros • By the Bros</p>
            </CardContent>
        </Card>);

}