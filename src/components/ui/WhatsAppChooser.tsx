import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type NumberItem = {
  label?: string;
  number: string; // in E.164 without +
};

type Props = {
  numbers: NumberItem[];
  message?: string;
  triggerLabel?: string;
};

const formatDisplay = (num: string) => {
  // simple formatting for +91 numbers
  if (num.startsWith("91") && num.length === 12) {
    return `+${num.slice(0, 2)} ${num.slice(2, 7)} ${num.slice(7)}`;
  }
  if (num.startsWith("+")) return num;
  return `+${num}`;
};

const WhatsAppChooser: React.FC<Props> = ({ numbers, message = "Hi, I'm interested in your photography services", triggerLabel = "Contact via WhatsApp" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2" aria-label="Open WhatsApp chooser">
          <MessageCircle className="w-4 h-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact on WhatsApp</DialogTitle>
          <DialogDescription>Select a number to start a WhatsApp chat. You will be redirected to WhatsApp.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {numbers.map((n, i) => {
            const tel = n.number.startsWith("+") ? n.number.replace(/\+/g, "") : n.number;
            const url = `https://wa.me/${tel}?text=${encodeURIComponent(message)}`;
            return (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`WhatsApp ${n.label ?? formatDisplay(tel)}`}
              >
                <Button variant="default" className="w-full justify-start"> 
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  <div className="text-left">
                    <div className="font-medium">{n.label ?? formatDisplay(tel)}</div>
                    <div className="text-sm text-muted-foreground">{formatDisplay(tel)}</div>
                  </div>
                </Button>
              </a>
            );
          })}
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChooser;