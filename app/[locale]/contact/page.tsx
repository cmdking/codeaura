// app/contact/page.tsx
import ContactForm from '../../../components/contactForm';
import SVGNoiseBackground from "@/components/SVGNoiseBackground";
import Navbar from "../../../components/navbar";

export default function ContactPage() {
    return (
      <>

        <div className="navbar">
            <Navbar />
        </div>
        <SVGNoiseBackground />
        <ContactForm />
      </>
    );
  }
  