import React from 'react';
import { Link } from 'react-router-dom';
import '../Landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <h1>Omniflo Systems</h1>
      <h2>Transforming Business Operations Through Intelligent Automation</h2>
      <p>
        Omniflo Systems is a pioneering force in enterprise business automation, delivering comprehensive solutions that seamlessly integrate every aspect of modern business operations.
      </p>
      <p>
        Since 2010, we've helped over 10,000 organizations worldwide transform their manual processes into streamlined, intelligent workflows.
      </p>
      <p>
        Our mission is to empower businesses with the tools they need to thrive in an ever-evolving digital landscape.
      </p>
      <h2>Our Solutions</h2>
      <div className="solutions-table">
        <table>
          <tbody>
            <tr>
              <td>WorkflowPro (Process Automation)</td>
              <td>TaskMaster (Project Management)</td>
              <td>DocFlow (Document Management)</td>
            </tr>
            <tr>
              <td>TimeTracker (Time & Attendance)</td>
              <td>ExpenseEase (Expense Management)</td>
              <td>HRConnect (HR Management)</td>
            </tr>
            <tr>
              <td>PayrollPlus (Payroll Processing)</td>
              <td>RecruitRight (Recruitment)</td>
              <td>TrainingHub (Learning)
              </td>
            </tr>
            <tr>
              <td>PerformancePro (Performance Management)</td>
              <td>AssetTrack (Asset Management)</td>
              <td>InventoryIQ (Inventory Management)</td>
            </tr>
            <tr>
              <td>ProcurePro (Procurement)</td>
              <td>ContractSmart (Contract Management)</td>
              <td>VendorVault (Vendor Management)</td>
            </tr>
            <tr>
              <td>ComplianceGuard (Compliance Tracking)</td>
              <td>AnalyticsPro (Business Intelligence)</td>
              <td>IntegrationHub (System Integration)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>To learn more about our offerings, talk to our ConciergePro!</h3>
      <Link to="/chat" className="cta-button">
        Let's Chat!
      </Link>
    </div>
  );
}

export default Landing;
