import React from 'react';

const PortfolioJobMe: React.FC = () => {
  return (
    <div className="container">
      <img src="/assets/W_J_cover_jobme.jpg" alt="AI Project Cover" />

      <div className="inner-container">
        <h3>My Pet Project | Job Me</h3>
        <p>
            Job Me is a product I built for myself. It started as a one‑day experiment to see if I could turn a PRD into a live product,using only AI agents, no coding. Spoiler: it worked.
        </p>

        <p>
          <button className="button">
            <a target='blank' href='https://job-me-now.vercel.app/'>Try it live</a>
          </button>

          
        </p>

        <h4>Why I Built It</h4>
        <p>
            I’ve been in the middle of intense job searches. Multiple applications a week. Different versions of CVs and cover letters. Folders, spreadsheets, screenshots, job links — it quickly becomes chaos. And when a recruiter calls weeks later? I’d struggle to remember what I even applied for.
            <br />
            It was so obvious to me that I needed one clean place for everything related to my job search. And then I made it! And it took me one day!
            <br />
            That's how Job Me came to life — a centralized dashboard to help job seekers track every application, document, status update, and recruiter conversation, all in one place.
        </p>

        <h4>What I Did</h4>
        <ul>
          <li>Wrote a complete Product Requirements Document (PRD), Software Requirements Specification (SRS), and Software Design Document (SDD) from scratch, including problem definition, success metrics, JTBDs, scope, and edge cases.</li>
          <li>Designed the structure of the app around the real pain points job seekers face.</li>
          <li>Created detailed specs for auto-filling job details from URLs, capturing job post snapshots, and managing multiple CV versions.</li>
          <li>Worked with AI agents (Cursor, and a little bit of Lovable) to turn the PRD, SRS, and SDD into production‑ready code, without building it myself.</li>
          <li>Got my hands a bit dirty with logo design, branding, and UI work  (a designer speaking from the inside).</li>
          <li>Oversaw the UI, flows, and feature completeness, iterating on the PRD as needed.</li>
        </ul>


        <h4>Key Features</h4>
        <ul>
          <li>Google Sign-In with personal dashboard.</li>
          <li>Application tracker with status, docs, notes, interviews, and Q&A.</li>
          <li>Auto-filled fields when pasting a job URL.</li>
          <li>Permanent snapshot of job postings (even if the original link dies).</li>
          <li>CV library with multiple versions.</li>
        </ul>

        <h4>What This Project Shows</h4>
        <ul>
          <li>My ability to identify a real-world pain point and turn it into a structured product concept</li>
          <li>Strong writing and structuring of PRD/SRS-style documentation.</li>
          <li>Cross-functional thinking — tech, UX, product.</li>
          <li>Working with modern tools (Supabase, AI dev agents, Vercel).</li>
          <li>Curiosity and drive to experiment and learn outside of work.</li>
        </ul>
      </div>

    </div>
  );
};

export default PortfolioJobMe;