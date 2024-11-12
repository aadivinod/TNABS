import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './homepage.css';
import logo from './logo1.png';
import about from './about.jpg'
import pic1 from './pic.jpg'
import pic2 from './pic1.jpg'
import pic3 from './pic2.jpg'
const UPI_ID = '8668926054969@cnrb';

export default function HomePage() {
  const [amount, setAmount] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQRCodeData] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleShowQRCode = () => {
    const qrData = `upi://pay?pa=${UPI_ID}&pn=Tilak%20Nagar%20Ayyappa%20Bhakta%20Samaj&am=${amount}&cu=INR`;
    setQRCodeData(qrData);
    setShowQRCode(true);
  };

  const handleClose = () => {
    setAmount('');
    setShowQRCode(false);
    setQRCodeData('');
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="container">
          <div className="logo-title">
            <img 
              src={logo} 
              alt="Tilak Nagar Ayyappa Bhakta Samaj Logo" 
              className="logo"
            />
            <h1>Tilak Nagar Ayyappa Bhakta Samaj</h1>
          </div>
          <nav>
            <ul>
              <li><a href='#donate'>Donate</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="event-notification" role="alert">
          <p>35th Mandala Pooja is on 7th December, 2024</p>
        </div>

        <section id="about" className="section">
          <div className="container">
            <h2>About Tilak Nagar Ayyappa Bhakta Samaj</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Tilak Nagar Ayyappa Bhakta Samaj is a vibrant community dedicated to the worship of Lord Ayyappa. 
                  Founded in 1989, our samaj has been a pillar of spiritual guidance and cultural preservation for 
                  devotees in the Tilak Nagar area and beyond. We organize annual poojas, bhajans, and cultural 
                  events to strengthen our community bonds and pass on our rich traditions to future generations.
                </p>
              </div>
              <div className="about-image">
                <img 
                  src={about}
                  height="300"
                  width="400" 
                  alt="Samaj Activities" 
                  className="activity-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section events-section">
          <div className="container">
            <h2>Photo Gallery</h2>
            <div className="events-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="event-card">
                  <img 
                    src={[pic1,pic2,pic3][i-1]}
                    alt={`Event ${i}`} 
                    height="400px"
                    width="400px"
                    className="event-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section donate-section" id='donate'>
          <div className="container">
            <h2>Support Our Samaj</h2>
            <p className="donate-description">
              Your generous contributions help us maintain our temple, organize events, and serve our community. 
              Every donation, big or small, makes a difference.
            </p>
            <button className="btn donate-btn" onClick={() => setShowQRCode(true)}>
              Donate Now
            </button>
            {showQRCode && (
              <div className="modal">
                <div className="modal-content">
                  <h3>Enter Amount to Donate</h3>
                  <p>Your contribution helps support our community activities.</p>
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Amount to be donated"
                    className="amount-input"
                  />
                 
                  <button onClick={handleShowQRCode} className="btn">
                    Show QR Code
                  </button>
                  {qrCodeData && (
                    <div className="qr-code-container">
                      <QRCodeSVG value={qrCodeData} size={200} />
                      <p>Scan the QR code to pay using Google Pay</p>
                    </div>
                  )}
                  <button onClick={handleClose} className="btn close-btn">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Tilak Nagar Ayyappa Bhakta Samaj<br />
              C/602, Bldg no.82, Amardeep Apt. Tilak Nagar<br />
              Mumbai, Maharashtra 400089
            </p>
            <p>
              Email: tnabs2016@gmail.com<br />
              Phone: +91 9833932313
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/TilakNagarAyyappaBhaktaSamaj"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/ayyappabhaktasamaj.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tilak Nagar Ayyappa Bhakta Samaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}