'use client';
import Footer from '@/Components/footer/footer';
import Navbar from '@/Components/NavBar/Navbar';
import '@/Pages/contact.css';

export default function Contact() {
  return (
    <>
        <Navbar />
        <div className="contact-form">
            <h1>Contact Us</h1>
            <hr className="divider" />
            <form>
                <div className="input-group">
                    <input type="text" placeholder="Name" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                </div>
                <input type="text" placeholder="Phone Number" className="input-field full-width" />
                <textarea placeholder="Message" className="input-field full-width"></textarea>
                <button type="submit" className="submit-button">SEND</button>
            </form>
        </div>
        <br></br>
        <Footer />
    </>
  );
}
