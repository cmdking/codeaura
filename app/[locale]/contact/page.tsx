// app/contact/page.tsx
import ContactForm from '../../../components/contactForm';
import SVGNoiseBackground from "@/components/SVGNoiseBackground";
import Navbar from "../../../components/navbar";
import { ToastContainer } from 'react-toastify';

export default function ContactPage() {
    return (
      <>

        <div className="navbar">
            <Navbar />
        </div>
        <SVGNoiseBackground />
        <ContactForm />
        <ToastContainer position="top-center" />
      </>
    );
  }
  