import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import { Img } from './components/Img/Img';
import { HeroImage } from './components/HeroImage/HeroImage';
import { Card } from './components/Card/Card';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Portfolio data - UPDATE THESE SECTIONS WITH YOUR ACTUAL CONTENT
  const works = [
    {
      title: "Volunteer Website — for Web Development 1",
      description:
        "Built a non-profit website dedicated to recommending volunteer projects worldwide, sharing inspiring volunteer stories, and offering valuable experiences. Visitors can discover and apply for reliable volunteer opportunities.",
      image: "/img1.jpg", 
      link: "http://onmyway.myartsonline.com/index.html",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Movie CMS — for Web Development 2",
      description:
        "Developed a movie content management system using the TMDb API. The system allows users to log in and recommend their favorite movies, with dynamic data fetching and user-friendly content management.",
      image: "/img2.jpg", 
      link: "https://github.com/zoeyChenCap/CineEclipse",
      tech: ["PHP", "JavaScript"],
    },
    {
      title: "E-commerce Website for Paper Goods — for Web Development 3",
      description:
        "Created an e-commerce platform with Ruby on Rails to sell postcards and other printed goods. Admins can add or update products, and customers can log in, add items to their cart, and place orders.",
      image: "/img3.jpg", 
      link: "https://github.com/yourusername/paper-ecommerce",
      tech: ["Ruby", "Rails"],
    },
    {
      title: "Website Deployment with Docker — for System Build and Testing",
      description:
        "Built and deployed a React-based component library project using Docker. This included implementing code quality checks (Prettier, ESLint), setting up pre-commit hooks with Husky, configuring GitHub Actions for CI/CD, and containerizing the production build.",
      image: "/img4.jpg", 
      link: "https://github.com/zoeyChenCap/RRC_DockerBuild",
      tech: ["React", "Docker", "TypeScript"],
    },
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "PHP", "Ruby", "Python"],
    frameworks: ["React", "Node.js", "Express.js", "Ruby on Rails", "Laravel", "Bootstrap"],
    tools: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Figma", "Postman"],
    databases: ["MySQL", "PostgreSQL", "SQLite"]
  };

  const resources = [
    {
      title: "React Documentation",
      summary: "Official React documentation and guides",
      image: "/logo512.png", // TODO: update with actual resource icon
      link: "https://react.dev/"
    },
    {
      title: "CSS-Tricks",
      summary: "Tips, tricks, and techniques for CSS development",
      image: "/CSSTrick.png", // TODO: update with actual resource icon
      link: "https://css-tricks.com/"
    },
    {
      title: "Stack Overflow",
      summary: "Community-driven Q&A platform for developers",
      image: "/StackOverview.png", // TODO: update with actual resource icon
      link: "https://stackoverflow.com/"
    }
  ];

  const developerSetup = {
    vscode: {
      extensions: ["ES7+ React/Redux/React-Native snippets", "Prettier - Code formatter", "ESLint", "GitLens", "Live Server"],
      settings: "Dark theme, Fira Code font, 2-space indentation, auto-save enabled"
    },
    terminal: {
      shell: "Zsh with Oh My Zsh",
      theme: "agnoster",
      plugins: ["git", "zsh-autosuggestions", "zsh-syntax-highlighting"]
    },
    font: "Fira Code (with ligatures enabled)",
    colorScheme: "Dark theme for better eye comfort during long coding sessions"
  };

  // Filter projects based on search term
  const filteredWorks = works.filter(work => {
    const matchesSearch = !searchTerm || 
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  // Get current 3 projects for display
  const currentProjects = filteredWorks.slice(currentProjectIndex, currentProjectIndex + 3);
  const canGoNext = currentProjectIndex + 3 < filteredWorks.length;
  const canGoPrev = currentProjectIndex > 0;

  const nextProjects = () => {
    if (canGoNext) {
      setCurrentProjectIndex(prev => prev + 1);
    }
  };

  const prevProjects = () => {
    if (canGoPrev) {
      setCurrentProjectIndex(prev => prev - 1);
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      {/* Hero Section - Basic Information */}
      <section style={{ marginBottom: '3rem' }}>
        <HeroImage
          imageUrl="/heroimage.jpg"
          alt="Full Stack Developer"
          heading="Zoey Chen"
          description="Full Stack Web Development Student at RRC Polytech<br />Bridging business and technology with a hybrid skill set<br />Passionate about creating meaningful web experiences"
        />
      </section>

      {/* Basic Information Section */}
      <section style={{ 
        maxWidth: '800px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <Card
          title="About Me"
          content="I'm a dedicated web development student passionate about creating user-friendly, accessible, and performant web applications. I enjoy solving complex problems and learning new technologies to stay current with industry best practices."
        />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem', 
          marginTop: '2rem' 
        }}>
          <Card
            title="Education"
            content="Full Stack Web Development Diploma at RRC Polytech"
          />
          <Card
            title="Location"
            content="Winnipeg, Manitoba, Canada"
          />
          <Card
            title="Experiences"
            content="With more than 5 years working as a Business Analyst, now adding web development to my skill set"
          />
        </div>
      </section>

      {/* Work Section with Sliding Functionality */}
      <section style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#333', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '600'
        }}>
          My Work
        </h2>

        {/* Search Controls */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <Label text="Search Projects" htmlFor="project-search" />
          </div>
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <Text
              value={searchTerm}
              placeholder="Search by title, description, or tech..."
              disabled={false}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Projects Display with Navigation */}
        <div style={{ position: 'relative' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {currentProjects.map((work, index) => (
              <Card
                key={currentProjectIndex + index}
                title={work.title}
                content={
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <Img src={work.image} alt={work.title} />
                    </div>
                    <p style={{ marginBottom: '1rem' }}>{work.description}</p>
                    <div style={{ marginBottom: '1rem' }}>
                      <Label text="Tech List" htmlFor={`tech-${currentProjectIndex + index}`} />
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.5rem', 
                        marginTop: '0.5rem',
                        justifyContent: 'center'
                      }}>
                        {work.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            style={{
                              backgroundColor: '#007bff',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '20px',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Button
                        text="View Project"
                        backgroundColor="#28a745"
                        disabled={false}
                        onClick={() => window.open(work.link, '_blank')}
                      />
                    </div>
                  </div>
                }
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem',
            alignItems: 'center'
          }}>
            <Button
              text="← Previous"
              backgroundColor="#6c757d"
              disabled={!canGoPrev}
              onClick={prevProjects}
            />
            <span style={{ color: '#666' }}>
              {currentProjectIndex + 1}-{Math.min(currentProjectIndex + 3, filteredWorks.length)} of {filteredWorks.length}
            </span>
            <Button
              text="Next →"
              backgroundColor="#6c757d"
              disabled={!canGoNext}
              onClick={nextProjects}
            />
          </div>
        </div>
      </section>

      {/* Skills Section - 4-column layout */}
      <section style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#333', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '600'
        }}>
          Skills & Expertise
        </h2>
        
        {/* Skills Overview - No Card */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>Technical Skills Overview</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            I've developed a strong foundation in both front-end and back-end development, with experience in modern web technologies and best practices.
          </p>
        </div>

        {/* Skills Cards - 4-column layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.5rem'
        }}>
          <Card
            title="Programming Languages"
            content={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#6f42c1',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            }
          />
          
          <Card
            title="Frameworks & Libraries"
            content={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {skills.frameworks.map((framework, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#fd7e14',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            }
          />
          
          <Card
            title="Development Tools"
            content={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#20c997',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            }
          />
          
          <Card
            title="Databases"
            content={
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                {skills.databases.map((db, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {db}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* Resources Section*/}
      <section style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#333', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '600'
        }}>
          Learning Resources
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              content={
                <div>
                  <div style={{ marginBottom: '1rem' }}>
                    <Img src={resource.image} alt={resource.title} />
                  </div>
                  <p style={{ marginBottom: '1rem' }}>{resource.summary}</p>
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      text="Visit Resource"
                      backgroundColor="#17a2b8"
                      disabled={false}
                      onClick={() => window.open(resource.link, '_blank')}
                    />
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* Developer Setup Section - Left-aligned text */}
      <section style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#333', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '600'
        }}>
          Developer Setup
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <Card
            title="VS Code Configuration"
            content={
              <div style={{ textAlign: 'left' }}>
                <p><strong>Extensions:</strong></p>
                <ul style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                  {developerSetup.vscode.extensions.map((ext, index) => (
                    <li key={index}>{ext}</li>
                  ))}
                </ul>
                <p><strong>Settings:</strong> {developerSetup.vscode.settings}</p>
              </div>
            }
          />
          
          <Card
            title="Terminal Setup"
            content={
              <div style={{ textAlign: 'left' }}>
                <p><strong>Shell:</strong> {developerSetup.terminal.shell}</p>
                <p><strong>Theme:</strong> {developerSetup.terminal.theme}</p>
                <p><strong>Plugins:</strong></p>
                <ul style={{ marginLeft: '1rem' }}>
                  {developerSetup.terminal.plugins.map((plugin, index) => (
                    <li key={index}>{plugin}</li>
                  ))}
                </ul>
              </div>
            }
          />
          
          <Card
            title="Editor Preferences"
            content={
              <div style={{ textAlign: 'left' }}>
                <p><strong>Font:</strong> {developerSetup.font}</p>
                <p><strong>Color Scheme:</strong> {developerSetup.colorScheme}</p>
                <p><strong>Indentation:</strong> 2 spaces</p>
                <p><strong>Line Endings:</strong> LF (Unix)</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        maxWidth: '600px', 
        margin: '0 auto 3rem auto', 
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#333', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '600'
        }}>
          Get In Touch
        </h2>
        
        <Card
          title="Let's Connect"
          content="I'm always interested in new opportunities, interesting projects, and connecting with fellow developers. Feel free to reach out!"
        />
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <Button
            text="Email Me"
            backgroundColor="#007bff"
            disabled={false}
            onClick={() => window.open('mailto:capchen113@163.com', '_blank')}
          />
          <Button
            text="LinkedIn"
            backgroundColor="#0077b5"
            disabled={false}
            onClick={() => window.open('https://www.linkedin.com/in/zoey-chen-maohua/', '_blank')}
          />
          <Button
            text="GitHub"
            backgroundColor="#333"
            disabled={false}
            onClick={() => window.open('https://github.com/zoeyChenCap', '_blank')}
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #dee2e6',
        marginTop: '3rem',
        color: '#6c757d',
        backgroundColor: '#f8f9fa'
      }}>
        <p style={{ margin: '0.5rem 0' }}>© 2025 Zoey Chen. All rights reserved.</p>
        <p style={{ margin: '0.5rem 0' }}>Built with React, TypeScript, and Styled Components</p>
        <p style={{ margin: '0.5rem 0' }}>Portfolio created for RRC Polytech Web Development Program</p>
      </footer>
    </div>
  );
}

export default App;
