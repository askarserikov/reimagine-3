import React from 'react';
import { Link } from 'react-router-dom';
import '../Landing.css';

function Landing() {
  const getProductDescription = (productName) => {
    const descriptions = {
      "WorkflowPro": "Streamline and automate your business processes end-to-end",
      "TaskMaster": "Comprehensive task management and team collaboration platform",
      "DocFlow": "Smart document management and automated processing system",
      "TimeTracker": "Efficient time tracking and project management solution",
      "ExpenseEase": "Simplified expense tracking and reporting automation",
      "HRConnect": "Complete human resource management and employee portal",
      "PayrollPlus": "Advanced payroll processing and tax management system",
      "RecruitRight": "Intelligent recruitment and applicant tracking platform",
      "TrainingHub": "Centralized learning and development management system",
      "PerformancePro": "Employee performance tracking and review automation",
      "AssetTrack": "Digital asset management and tracking solution",
      "InventoryIQ": "Smart inventory management and optimization system",
      "ProcurePro": "End-to-end procurement and vendor management platform",
      "ContractSmart": "Intelligent contract lifecycle management system",
      "VendorVault": "Secure vendor relationship and compliance management",
      "ComplianceGuard": "Automated compliance monitoring and risk management",
      "AnalyticsPro": "Advanced business intelligence and reporting platform",
      "IntegrationHub": "Seamless system integration and API management solution"
    };
    return descriptions[productName] || "Product description coming soon";
  };

  const renderProductCell = (productName) => {
    const imageFileName = productName.split(' ')[0];
    return (
      <td>
        <div className="product-cell">
          <img 
            src={`/logos/${imageFileName}.png`} 
            alt={`${productName} logo`}
            className="product-logo"
          />
          <div className="product-name">{productName}</div>
          <div className="product-description">
            {getProductDescription(productName)}
          </div>
        </div>
      </td>
    );
  };

  React.useEffect(() => {
    // Animate products on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Select all product cells
    document.querySelectorAll('.product-cell').forEach(cell => {
        cell.style.opacity = '0';
        cell.style.transform = 'translateY(20px)';
        cell.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(cell);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="landing-page">
      <section className="header-section">
        <h1>Omniflo Systems</h1>
        <h2>Transforming Business Operations Through Intelligent Automation</h2>
      </section>

      <section className="description-section">
        <p>
          Omniflo Systems is a pioneering force in enterprise business automation, delivering comprehensive solutions that seamlessly integrate every aspect of modern business operations.
        </p>
        <p>
          Since 2010, we've helped over 10,000 organizations worldwide transform their manual processes into streamlined, intelligent workflows.
        </p>
        <p>
          Our mission is to empower businesses with the tools they need to thrive in an ever-evolving digital landscape.
        </p>
      </section>

      <section className="solutions-section">
        <div className="solutions-table">
          <table>
            <tbody>
              <tr>
                {renderProductCell("WorkflowPro")}
                {renderProductCell("TaskMaster")}
                {renderProductCell("DocFlow")}
              </tr>
              <tr>
                {renderProductCell("TimeTracker")}
                {renderProductCell("ExpenseEase")}
                {renderProductCell("HRConnect")}
              </tr>
              <tr>
                {renderProductCell("PayrollPlus")}
                {renderProductCell("RecruitRight")}
                {renderProductCell("TrainingHub")}
              </tr>
              <tr>
                {renderProductCell("PerformancePro")}
                {renderProductCell("AssetTrack")}
                {renderProductCell("InventoryIQ")}
              </tr>
              <tr>
                {renderProductCell("ProcurePro")}
                {renderProductCell("ContractSmart")}
                {renderProductCell("VendorVault")}
              </tr>
              <tr>
                {renderProductCell("ComplianceGuard")}
                {renderProductCell("AnalyticsPro")}
                {renderProductCell("IntegrationHub")}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="pattern-overlay"></div>
        <h2>To learn more about our offerings, talk to our ConciergePro!</h2>
          <Link to="/chat" className="cta-button">
            Let's Chat!
          </Link>
    </section>
      
    </div>
  );
}

export default Landing;
