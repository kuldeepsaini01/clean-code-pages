import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import affiliateIllustration from "@/assets/affiliate-illustration.jpg";

interface AffiliateIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AffiliateIntroModal = ({ isOpen, onClose }: AffiliateIntroModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="text-center space-y-4">
          <div className="mx-auto w-32 h-32 mb-4">
            <img 
              src={affiliateIllustration}
              alt="Affiliate Earnings Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <DialogTitle className="text-xl font-semibold">
            Introducing Affiliate Earnings
          </DialogTitle>
          
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Start earning by recommending Amrutam products in your patient routines.
            <br /><br />
            Get commissions for every successful referral through your unique link or coupon.
          </DialogDescription>
          
          <Button 
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Started
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AffiliateIntroModal;