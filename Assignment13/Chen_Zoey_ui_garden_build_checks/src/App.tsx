import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import { Dropdown } from './components/Dropdown/Dropdown';
import RadioButton from './components/RadioButton';
import { Img } from './components/Img/Img';
import { HeroImage } from './components/HeroImage/HeroImage';
import { Card } from './components/Card/Card';
import { TableHeader } from './components/Table/TableHeader/TableHeader';
import { TableRow } from './components/Table/TableRow/TableRow';
import { TableFooter } from './components/Table/TableFooter/TableFooter';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const handleTermsChange = (value: string) => {
    setAgreedToTerms(value === 'agree');
  };

  const handleSubmit = () => {
    alert(
      `Form submitted!\nUsername: ${username}\nEmail: ${email}\nCountry: ${selectedCountry}\nAgreed to Terms: ${agreedToTerms ? 'Yes' : 'No'}`
    );
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setSelectedCountry('');
    setAgreedToTerms(false);
  };

  return (
    <div
      className="App"
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '2rem' }}>
        My Component Library
      </h1>

      {/* Hero Section */}
      <section style={{ marginBottom: '3rem' }}>
        <HeroImage
          imageUrl="/heroimage.jpg"
          alt="Beautiful sunset landscape"
          heading="Welcome to My Component Library!"
          description="Just for System Building and Testing Demo."
        />
      </section>

      {/* Interactive Form Section */}
      <section
        style={{
          background: '#f8f9fa',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '3rem'
        }}
      >
        <h2 style={{ color: '#495057', marginBottom: '1.5rem', textAlign: 'center' }}>
          User Registration Form
        </h2>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Label
              text="Username *"
              htmlFor="username"
              style={{ minWidth: '120px', textAlign: 'right' }}
            />
            <div style={{ flex: 1 }}>
              <Text
                value={username}
                placeholder="Enter your username"
                disabled={false}
                onChange={handleUsernameChange}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Label
              text="Email *"
              htmlFor="email"
              style={{ minWidth: '120px', textAlign: 'right' }}
            />
            <div style={{ flex: 1 }}>
              <Text
                value={email}
                placeholder="Enter your email address"
                disabled={false}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div
            style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <Label
              text="Country"
              htmlFor="country"
              style={{ minWidth: '120px', textAlign: 'right' }}
            />
            <div style={{ flex: 1 }}>
              <Dropdown
                options={[
                  'United States',
                  'Canada',
                  'United Kingdom',
                  'Germany',
                  'France',
                  'Japan',
                  'Australia'
                ]}
                value={selectedCountry}
                placeholder="Please select your country"
                disabled={false}
                onChange={handleCountryChange}
              />
            </div>
          </div>

          <div
            style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ minWidth: '120px' }}></div>
            <div style={{ flex: 1 }}>
              <RadioButton
                label="I agree to the Terms and Conditions"
                name="terms"
                value="agree"
                checked={agreedToTerms}
                disabled={false}
                onChange={handleTermsChange}
              />
            </div>
          </div>

          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}
          >
            <Button
              text="Register"
              backgroundColor="#007bff"
              disabled={false}
              onClick={handleSubmit}
            />
            <Button text="Reset" backgroundColor="#6c757d" disabled={false} onClick={handleReset} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#495057', marginBottom: '1.5rem', textAlign: 'center' }}>
          Image Gallery
        </h2>
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            padding: '0 2rem',
            boxSizing: 'border-box'
          }}
        >
          <Img src="/img1.jpg" alt="forest" />
          <Img src="/img2.jpg" alt="greece" />
          <Img src="/img3.jpg" alt="night sky" />
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#495057', marginBottom: '1.5rem' }}>Feature Cards</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <Card
            title="Fast Performance"
            content="These components are optimized for speed and efficiency, ensuring your applications run smoothly across all devices and browsers."
          />
          <Card
            title="Beautiful Design"
            content="Every component is crafted with attention to detail, following modern design principles and best practices for user experience."
          />
          <Card
            title="Responsive Layout"
            content="All components are fully responsive and adapt beautifully to different screen sizes, from mobile phones to desktop displays."
          />
        </div>
      </section>

      {/* Data Table Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#495057', marginBottom: '1.5rem' }}>Employee Directory</h2>
        <table
          style={{
            border: '1px solid #dee2e6',
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <thead>
            <TableHeader headers={['Name', 'Email', 'Department', 'Phone']} />
          </thead>
          <tbody>
            <TableRow
              cells={[
                'Alice Johnson',
                'alice.johnson@company.com',
                'Engineering',
                '+1 (555) 123-4567'
              ]}
            />
            <TableRow
              cells={['Bob Smith', 'bob.smith@company.com', 'Marketing', '+1 (555) 234-5678']}
            />
            <TableRow
              cells={['Carol Davis', 'carol.davis@company.com', 'Design', '+1 (555) 345-6789']}
            />
            <TableRow
              cells={['David Wilson', 'david.wilson@company.com', 'Sales', '+1 (555) 456-7890']}
            />
            <TableRow
              cells={['Eva Martinez', 'eva.martinez@company.com', 'HR', '+1 (555) 567-8901']}
            />
          </tbody>
          <tfoot>
            <TableFooter content="Total: 5 Employees | Last Updated: December 2024" />
          </tfoot>
        </table>
      </section>

      {/* Component Showcase */}
      <section
        style={{
          background: '#e9ecef',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}
      >
        <h2 style={{ color: '#495057', marginBottom: '1.5rem' }}>Additional Component Examples</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <Button text="Primary Action" backgroundColor="#007bff" disabled={false} />
          <Button text="Success Action" backgroundColor="#28a745" disabled={false} />
          <Button text="Warning Action" backgroundColor="#ffc107" disabled={false} />
          <Button text="Disabled Action" backgroundColor="#6c757d" disabled={true} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <RadioButton
            label="Feature Enabled"
            name="feature1"
            value="enabled"
            checked={true}
            disabled={false}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <RadioButton
            label="Feature Disabled"
            name="feature2"
            value="disabled"
            checked={false}
            disabled={true}
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '2rem',
          borderTop: '1px solid #dee2e6',
          marginTop: '3rem',
          color: '#6c757d'
        }}
      >
        <p>Copyright:@ZoeyChen</p>
        <p>Built with React, TypeScript, and Styled Components</p>
      </footer>
    </div>
  );
}
export default App;
