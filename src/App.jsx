import React, { useState, useEffect, useRef } from 'react';
import rolehivex from '../assets/rolehivex.png';
import { 
  ArrowUpRight, Users, Cpu, ArrowRight, Share2, X, CheckCircle, 
  AlertCircle, ShieldCheck, UserCheck, Laptop, HeartHandshake, 
  ZapOff, BatteryCharging, MonitorCheck, Clock, Coffee, LogOut, Check
} from 'lucide-react';

// --- DATABASE PLACEHOLDER ---
// 1. Paste your full 'const DB = [...]' array here.
// 2. Ensure every item has a unique 'id' (e.g., id: 'msft-crash') for deep linking to work.
const DB = [
  {
    id: 'ghost',
    category: 'Strategy',
    type: 'Analysis',
    date: 'Jan 14, 2026',
    read: '8 Min Read',
    title: 'Why Your ATS is Rejecting Perfect Candidates.',
    desc: 'Companies are facing a talent shortage, yet 75% of qualified resumes are never seen by a human. Our new data report exposes the algorithmic bias in legacy systems.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    content: `
      <span class="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Cover Story</span>
      <h1 class="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Why Your ATS is Rejecting <br>Perfect Candidates.</h1>
      <p class="text-xl md:text-2xl text-gray-300 font-serif leading-relaxed mb-10">It’s a paradox every CTO knows: You have open budget, you have urgent needs, yet you can't find senior engineers. The problem isn't the market. It's your filter.</p>
      
      <div class="w-full h-px bg-white/10 my-10"></div>
      
      <div class="prose prose-invert prose-lg max-w-none text-gray-400">
        <p class="mb-6"><span class="text-white font-bold text-4xl float-left mr-2 mt-[-10px] font-serif">T</span>raditional hiring platforms rely on Boolean keyword matching—a technology invented in the 1990s. If a developer built a complex distributed system but listed it as "Backend Architecture" instead of repeating "Microservices" five times, they are often discarded by the algorithm before a human ever sees their name.</p>
        
        <h3 class="text-2xl font-bold text-white mt-12 mb-6 font-display">The "False Negative" Epidemic</h3>
        <p class="mb-6">We analyzed 50,000 applications processed through legacy ATS providers (Workday, Taleo, Greenhouse). We then took the "Rejected" pile and ran them through RoleHiveX's skills-verification engine.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div class="p-6 bg-[#111] border border-white/10 rounded-xl text-center">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Total Rejected</p>
            <p class="text-3xl font-bold text-white">12,400</p>
            <p class="text-[10px] text-red-400 mt-1">Auto-filtered by Keywords</p>
          </div>
          <div class="p-6 bg-[#111] border border-white/10 rounded-xl text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-blue-500/5"></div>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Actually Qualified</p>
            <p class="text-3xl font-bold text-blue-400">2,852</p>
            <p class="text-[10px] text-blue-300 mt-1">Passed Tech Assessment</p>
          </div>
          <div class="p-6 bg-[#111] border border-white/10 rounded-xl text-center">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Missed Opportunity</p>
            <p class="text-3xl font-bold text-white">23%</p>
            <p class="text-[10px] text-gray-400 mt-1">Error Rate</p>
          </div>
        </div>

        <p class="mb-6">The result was shocking. <strong class="text-white">23% of "rejected" candidates</strong> actually scored in the top 10% on technical assessments when manually reviewed. These are "False Negatives"—senior talent that doesn't optimize their resume for robots.</p>

        <div class="my-12 p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
          <h4 class="font-display font-bold text-blue-400 text-lg mb-2">Case Study: The "Invisible" Architect</h4>
          <p class="text-white italic mb-4">"I applied to 40 companies and got zero callbacks. I have 10 years of experience scaling systems. I rewrote my resume to include the word 'Kubernetes' 12 times in white font (invisible to humans, visible to bots). I got 8 interviews the next day."</p>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gray-700"></div>
            <div class="text-xs">
              <p class="text-white font-bold">Rahul S.</p>
              <p class="text-gray-500">Staff Engineer, Bengaluru</p>
            </div>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-white mt-12 mb-6 font-display">The Solution: Verify, Don't Scan</h3>
        <p class="mb-6">The resume is a dying document. It is easily forged by ChatGPT and easily misread by ATS parsers. The future of hiring is <strong>Proof-of-Work</strong>.</p>
        
        <ul class="space-y-4 mb-10 border-l-2 border-white/10 pl-6">
          <li class="flex flex-col">
            <span class="text-white font-bold text-lg">1. Git-Based Analysis</span>
            <span class="text-gray-500 text-sm">Don't ask them if they know Python. Scan their public repositories to see the complexity of their actual code.</span>
          </li>
          <li class="flex flex-col">
            <span class="text-white font-bold text-lg">2. Peer Validation (Bounties)</span>
            <span class="text-gray-500 text-sm">Top engineers know other top engineers. A referral backed by a reputation stake is worth 1,000 keyword matches.</span>
          </li>
          <li class="flex flex-col">
            <span class="text-white font-bold text-lg">3. Problem Solving Simulations</span>
            <span class="text-gray-500 text-sm">Short, real-world debugging scenarios that measure intuition, not memorization.</span>
          </li>
        </ul>

        <p>At RoleHiveX, we are deprecating the resume upload. We accept GitHub handles and Portfolio links. The result? Our clients see 40% fewer candidates, but hire 2x faster.</p>
      </div>
    `
  },
  {
    id: 'amazon-layoffs-jan-2026',
    category: 'Industry News',
    type: 'Report',
    date: 'Jan 30, 2026',
    read: '4 Min Read',
    title: 'Amazon Cuts 16,000 Roles: Inside "Project Dawn"',
    desc: 'The second wave of the historic 30,000 workforce reduction hits AWS and Retail. Here is the breakdown.',
    img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">The "Project Dawn" Restructuring</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">The mandate is clear: "Operate like the world's largest startup." Here is how <strong>Amazon</strong> executed the largest corporate reduction in its history this week.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="x-circle" class="text-red-500"></i> The Trigger
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            CEO Andy Jassy identified a "bureaucracy tax" stalling decision-making. Pre-managers (L4-L6) and middle management layers had grown by <strong>35%</strong> post-pandemic, while AI infrastructure costs ballooned to $100B/year.
          </p>
          <div class="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
            <p class="text-red-400 text-xs font-mono">IMPACT: 16,000 Corporate Roles Cut</p>
          </div>
        </div>
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="check-circle" class="text-green-500"></i> The Strategy
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Under the internal initiative <strong>"Project Dawn"</strong>, Amazon is flattening the org chart. The goal is to increase the ratio of individual contributors (ICs) to managers by <strong>15%</strong> across AWS and Retail.
          </p>
          <div class="p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
            <p class="text-green-400 text-xs font-mono">GOAL: 20% Faster Deployment Cycles</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">The Timeline: A Two-Stage Reset</h3>
      
      <div class="relative border-l-2 border-white/10 ml-4 mb-12 space-y-10">
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Oct 2025: Phase 1</h4>
          <p class="text-gray-400 text-sm mt-1">14,000 roles eliminated. Focus was on consolidation of creative divisions and experimental hardware.</p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Jan 28, 2026: The Leak</h4>
          <p class="text-gray-400 text-sm mt-1">An internal email regarding "Project Dawn" was inadvertently sent to AWS staff, revealing the scope of the second wave.</p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-red-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Jan 30, 2026: Phase 2 Confirmed</h4>
          <p class="text-gray-400 text-sm mt-1">16,000 additional corporate cuts confirmed. Heaviest impact in AWS Sales, PXT (HR), and Physical Retail.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Departmental Impact</h3>
      <div class="overflow-hidden rounded-xl border border-white/10 mb-10">
        <table class="w-full text-left bg-[#111]">
          <thead>
            <tr class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
              <th class="p-4">Division</th>
              <th class="p-4">Primary Function</th>
              <th class="p-4 text-red-400 font-bold">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-medium">AWS (Cloud)</td>
              <td class="p-4 text-gray-400">Sales & Solutions Arch.</td>
              <td class="p-4 text-red-400">High Impact</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">PXT (HR)</td>
              <td class="p-4 text-gray-400">Recruiting & Ops</td>
              <td class="p-4 text-red-400">Critical Reduction</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">Prime Video</td>
              <td class="p-4 text-gray-400">Content Strategy</td>
              <td class="p-4 text-yellow-400">Moderate Impact</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-8 bg-gradient-to-r from-red-900/20 to-transparent border border-red-500/20 rounded-2xl">
        <h4 class="text-xl font-serif text-white mb-2">Affected by the shift?</h4>
        <p class="text-gray-400 text-sm mb-6">Internal transfer windows are open for 90 days. Review the open requisition list for AI/ML roles.</p>
        <a href="#" class="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm">
          View Internal Transfer Board
        </a>
      </div>
    `
  },
  {
    id: 'openclaw-viral-agent',
    category: 'Technology',
    type: 'Trend Report',
    date: 'Jan 31, 2026',
    read: '6 Min Read',
    title: 'OpenClaw: The "Lobster" That Ate the Cloud',
    desc: 'From "Clawdbot" to "OpenClaw": How a weekend project by Peter Steinberger became the most dangerous (and popular) software of 2026.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">Enter the "OpenClaw" Era</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">It started as a joke named "Clawdbot." Then it was "Moltbot." Now, as of yesterday, it is officially <strong>OpenClaw</strong>—and it just crossed 100,000 GitHub stars in 3 weeks.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="github" class="text-white"></i> The Viral Curve
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Creator <strong>Peter Steinberger</strong> (ex-PSPDFKit) built a "WhatsApp Relay" over a weekend. It has since evolved into a self-hosted "Personal OS" that runs locally on your Mac Mini. It's growing faster than React, VS Code, or Linux did in their first years.
          </p>
          <div class="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg">
            <p class="text-purple-400 text-xs font-mono">STATS: 14x Growth Week-over-Week</p>
          </div>
        </div>
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="shield-alert" class="text-red-500"></i> The Security Panic
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Security firms like <strong>Token Security</strong> and <strong>1Password</strong> issued alerts this morning. Why? Because OpenClaw gives an AI agent <strong>root access</strong> to your local files and terminal. It is "Claude with hands," and it is running wild in corporate networks.
          </p>
          <div class="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
            <p class="text-red-400 text-xs font-mono">RISK: Unrestricted Shell Access</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">The "Lobster" Lore</h3>
      
      <div class="relative border-l-2 border-white/10 ml-4 mb-12 space-y-10">
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-gray-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Nov 2025: "Clawdbot"</h4>
          <p class="text-gray-400 text-sm mt-1">Launched as a pun on Anthropic's "Claude." It went viral immediately as the first "Agent that actually works."</p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Jan 15, 2026: The Cease & Desist</h4>
          <p class="text-gray-400 text-sm mt-1">Anthropic's legal team politely asked for a name change. The community brainstormed "Moltbot" (because lobsters molt).</p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Jan 30, 2026: OpenClaw</h4>
          <p class="text-gray-400 text-sm mt-1">The final form. Domains secured, 100k stars reached, and a community of "Lobster Cultists" building plugins for everything from Spotify to Home Assistant.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Why Developers Are Obsessed</h3>
      <div class="overflow-hidden rounded-xl border border-white/10 mb-10">
        <table class="w-full text-left bg-[#111]">
          <thead>
            <tr class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
              <th class="p-4">Feature</th>
              <th class="p-4">SaaS Agents (ChatGPT/Gemini)</th>
              <th class="p-4 text-blue-400 font-bold">OpenClaw (Local)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-medium">Data Privacy</td>
              <td class="p-4 text-gray-400">Cloud Storage</td>
              <td class="p-4 text-green-400">Local Markdown Files</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">Capabilities</td>
              <td class="p-4 text-gray-400">Sandboxed / API only</td>
              <td class="p-4 text-white font-bold">Full Terminal / OS Control</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">Cost</td>
              <td class="p-4 text-red-400">$20/mo + API Usage</td>
              <td class="p-4 text-green-400">Free (Self-Hosted)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-8 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl">
        <h4 class="text-xl font-serif text-white mb-2">Join the Cult?</h4>
        <p class="text-gray-400 text-sm mb-6">Warning: Installing this on your work laptop might get you fired by IT. But it's the future.</p>
        <a href="https://github.com/openclaw/openclaw" class="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm">
          View on GitHub (106k Stars)
        </a>
      </div>
    `
  },
  {
    id: 'bounty',
    category: 'Strategy',
    type: 'Case Study',
    date: 'Jan 12, 2026',
    read: '6 Min Read',
    title: 'The "Bounty" Model: Hiring in 48 Hours',
    desc: 'How Nexus AI bypassed recruiters and used network effects to find a Principal Architect.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">The "Bounty" Hiring Model</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">Referrals are the highest quality source of hire. Here is how <strong>Nexus AI</strong> (Series B, Bengaluru) weaponized their network to solve a critical hiring bottleneck in Q1 2026.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="x-circle" class="text-red-500"></i> The Problem
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Nexus AI needed a <strong>Principal Systems Architect</strong> urgently for their new LLM infrastructure. Traditional agencies quoted a <strong>20% success fee</strong> (approx ₹12 Lakhs) and estimated a <strong>45-day timeline</strong>.
          </p>
          <div class="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
            <p class="text-red-400 text-xs font-mono">STATUS: BLOCKED (21 Days Open)</p>
          </div>
        </div>
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <i data-lucide="check-circle" class="text-green-500"></i> The Experiment
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            Instead of paying a recruiter, they placed a <strong>₹1,00,000 Community Bounty</strong> on RoleHiveX. This link was shareable by anyone—employees, ex-colleagues, or open-source contributors.
          </p>
          <div class="p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
            <p class="text-green-400 text-xs font-mono">STATUS: SOLVED (48 Hours)</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">The Mechanism: How it Worked</h3>
      
      <div class="relative border-l-2 border-white/10 ml-4 mb-12 space-y-10">
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Hour 0: The Signal</h4>
          <p class="text-gray-400 text-sm mt-1">Job posted with a "Bounty Tag". The link is dropped in specialized Kubernetes Discord communities.</p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Hour 6: Network Effect</h4>
          <p class="text-gray-400 text-sm mt-1">Engineers started tagging their mentors. <em class="text-gray-300">"Hey @Vikram, this role fits your stack perfectly. Easy 1L bounty for me if you join."</em></p>
        </div>
        <div class="relative pl-8">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-[#0c0c0c]"></div>
          <h4 class="text-white font-bold text-lg">Hour 48: The Hire</h4>
          <p class="text-gray-400 text-sm mt-1">12 Highly qualified leads generated. 3 Interviews conducted. Offer Letter signed.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">ROI Comparison</h3>
      <div class="overflow-hidden rounded-xl border border-white/10 mb-10">
        <table class="w-full text-left bg-[#111]">
          <thead>
            <tr class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
              <th class="p-4">Metric</th>
              <th class="p-4">Traditional Agency</th>
              <th class="p-4 text-blue-400 font-bold">Bounty Model</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-medium">Cost to Hire</td>
              <td class="p-4 text-red-400">₹12,00,000</td>
              <td class="p-4 text-green-400">₹1,00,000</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">Time to Fill</td>
              <td class="p-4 text-gray-400">45 Days</td>
              <td class="p-4 text-white font-bold">2 Days</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-medium">Candidate Trust</td>
              <td class="p-4 text-gray-400">Low (Cold Call)</td>
              <td class="p-4 text-white font-bold">High (Peer Referral)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-8 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl">
        <h4 class="text-xl font-serif text-white mb-2">Ready to try it?</h4>
        <p class="text-gray-400 text-sm mb-6">You don't need a massive budget. You just need to incentivize the right behavior.</p>
        <a href="https://www.rolehivex.online/submit.html" class="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm">
          Post a Bounty Job
        </a>
      </div>
    `
  },
  {
    id: 'leetcode',
    category: 'Engineering',
    type: 'Deep Dive',
    date: 'Jan 10, 2026',
    read: '10 Min Read',
    title: 'The Death of LeetCode',
    desc: 'Why Google and Meta are shifting towards "AI-Assisted Loops" and system debugging over binary tree reversals.',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">The Death of LeetCode</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">For a decade, reversing a binary tree on a whiteboard was the gatekeeper. In 2026, that era is dead. The data is clear: <strong>AI passed the "Hard" bar, so humans are now tested on "Messy" instead.</strong></p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Market Reality (2025-26)</h3>
          <p class="text-3xl font-display font-bold text-white mb-2">-20%</p>
          <p class="text-sm text-gray-400">Decline in employment for developers aged 22-25 since 2022. The "Junior" role is being automated.</p>
          <div class="mt-4 text-[10px] text-gray-600">Source: Stanford Digital Economy Lab</div>
        </div>
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Hiring Signal</h3>
          <p class="text-3xl font-display font-bold text-green-400 mb-2">49%</p>
          <p class="text-sm text-gray-400">Increase in job postings requiring "AI-Assisted Workflow" skills rather than raw coding.</p>
          <div class="mt-4 text-[10px] text-gray-600">Source: 2026 Tech Hiring Benchmarks</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">The New "Google Loop"</h3>
      <p class="text-gray-300 mb-8">
        We analyzed leaked interview rubrics from MAANG companies in Q4 2025. The shift is radical. They no longer ban Copilot; they <strong>force you to use it</strong>.
      </p>
      
      <div class="space-y-4 mb-12">
        <div class="p-4 bg-white/5 border-l-4 border-red-500 rounded-r-lg">
          <div class="flex justify-between items-center mb-1">
            <span class="text-red-400 font-bold text-sm">The Old Way (2022)</span>
            <span class="text-[10px] text-gray-500 uppercase">Memorization</span>
          </div>
          <p class="text-gray-400 text-sm">"Write a function to traverse this graph in O(n). Do not use the internet."</p>
        </div>
        <div class="p-4 bg-white/5 border-l-4 border-green-500 rounded-r-lg">
          <div class="flex justify-between items-center mb-1">
            <span class="text-green-400 font-bold text-sm">The New Way (2026)</span>
            <span class="text-[10px] text-gray-500 uppercase">Reasoning</span>
          </div>
          <p class="text-white text-sm">"Here is a 5,000-line messy microservice. It is crashing in production. You have Copilot and full internet access. Fix it in 45 minutes."</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Why "Paid Tasks" Failed (and What Won)</h3>
      <p class="text-gray-400 mb-6">
        Last year, startups tried "Paid Take-Home" assignments. They failed because of <strong>AI Plagiarism</strong>. The winner in 2026 is the <strong>"Live Debugging Session"</strong>.
      </p>

      <div class="overflow-hidden border border-white/10 rounded-xl mb-10">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th class="p-4">Signal</th>
              <th class="p-4">Algorithm Interview</th>
              <th class="p-4 text-blue-400">Debugging Session</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300">Cheatable by AI?</td>
              <td class="p-4 text-red-400">100% (GPT-5 solves Hard)</td>
              <td class="p-4 text-green-400">~15% (Requires Context)</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300">Candidate Sentiment</td>
              <td class="p-4 text-red-400">Negative (Burnout)</td>
              <td class="p-4 text-green-400">Positive (Real Work)</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300">Predictive Value</td>
              <td class="p-4 text-gray-500">Low</td>
              <td class="p-4 text-white font-bold">High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl flex gap-4 items-start">
        <i data-lucide="cpu" class="w-6 h-6 text-blue-400 mt-1 flex-shrink-0"></i>
        <div>
          <h4 class="text-white font-bold mb-2">The "Reasoning" Gap</h4>
          <p class="text-sm text-gray-300 italic">
            "Juniors use AI to write code. Seniors use AI to review code. The interview of 2026 tests your ability to spot when the AI is lying to you."
          </p>
          <p class="text-xs text-gray-500 mt-2">— VP of Engineering, Razorpay</p>
        </div>
      </div>
    `
  },
  {
    id: 'salary',
    category: 'Strategy',
    type: 'Report',
    date: 'Jan 08, 2026',
    read: '3 Min Read',
    title: '2026 Salary Transparency Report',
    desc: 'The gap between what startups offer and what seniors demand is widening.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-4">Salary Data 2026</h1>
      <p class="text-xl text-gray-400 mb-8 font-light">Market Trend: Strategy & Operations</p>

      <div class="bg-blue-500/10 border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
        <p class="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">The Divergence</p>
        <p class="text-gray-200 leading-relaxed"><strong>The gap is widening.</strong> While early-stage ventures conserve cash to extend runway, senior strategic talent is commanding a premium for proven "0-to-1" expertise. This has created a massive friction point in Q1 2026.</p>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Annual Base Salary Discrepancy</h3>
      <p class="text-sm text-gray-500 mb-4 font-mono">Figures in INR (Lakhs/Annum) | Verified 2026 Q1 Data</p>
      
      <div class="overflow-x-auto mb-12">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
              <th class="p-4 font-medium">Role</th>
              <th class="p-4 font-medium">Startup Offer <span class="block text-[10px] opacity-50">(Series A/B)</span></th>
              <th class="p-4 font-medium">Senior Demand <span class="block text-[10px] opacity-50">(Market Rate)</span></th>
              <th class="p-4 font-medium text-right">Gap</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-300">
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td class="p-4">
                <strong class="text-white block">Head of Strategy</strong>
                <span class="inline-block px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] mt-1">High Demand</span>
              </td>
              <td class="p-4">₹35.0L - ₹45.0L</td>
              <td class="p-4">₹55.0L - ₹75.0L</td>
              <td class="p-4 text-right text-red-400 font-mono font-bold">-40%</td>
            </tr>
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td class="p-4">
                <strong class="text-white block">Strategy Manager</strong>
              </td>
              <td class="p-4">₹22.0L - ₹28.0L</td>
              <td class="p-4">₹32.0L - ₹40.0L</td>
              <td class="p-4 text-right text-red-400 font-mono font-bold">-30%</td>
            </tr>
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td class="p-4">
                <strong class="text-white block">Chief of Staff</strong>
                <span class="inline-block px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 text-[10px] mt-1">Rising Role</span>
              </td>
              <td class="p-4">₹25.0L - ₹30.0L</td>
              <td class="p-4">₹40.0L - ₹50.0L</td>
              <td class="p-4 text-right text-red-400 font-mono font-bold">-37%</td>
            </tr>
            <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td class="p-4">
                <strong class="text-white block">Growth Strategist</strong>
                <span class="inline-block px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] mt-1">Niche Skill</span>
              </td>
              <td class="p-4">₹18.0L - ₹24.0L</td>
              <td class="p-4">₹28.0L - ₹35.0L</td>
              <td class="p-4 text-right text-red-400 font-mono font-bold">-29%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Key Drivers</h3>
      <ul class="space-y-4 text-gray-300 mb-12">
        <li class="flex gap-3">
          <span class="text-blue-500 mt-1">●</span>
          <div><strong class="text-white">Equity Valuation Fatigue:</strong> Senior candidates are placing lower value on paper ESOPs compared to 2021-2023, demanding higher cash components.</div>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-500 mt-1">●</span>
          <div><strong class="text-white">The "AI Operator" Premium:</strong> Strategists who demonstrate AI implementation skills for operational efficiency are commanding a 25% premium.</div>
        </li>
        <li class="flex gap-3">
          <span class="text-blue-500 mt-1">●</span>
          <div><strong class="text-white">Retention vs. Acquisition:</strong> Corporate retention budgets have stabilized, making it harder for startups to "buy" talent out of established firms.</div>
        </li>
      </ul>

      <div class="border-t border-white/10 pt-6 mt-8">
        <p class="text-xs text-gray-600">Data Source: Aggregated from 2026 Q1 Offer Letters & Candidate Expectations Survey (Bengaluru/NCR/Mumbai).</p>
      </div>
    `
  },
  {
    id: 'ai-code',
    category: 'Engineering',
    type: 'Tech',
    date: 'Jan 05, 2026',
    read: '5 Min Read',
    title: 'AI Code Assistants: The New Senior Engineer?',
    desc: 'Evaluating Copilot vs Ghostwriter in enterprise environments.',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-4">AI Code Assistants</h1>
      <p class="text-xl text-gray-400 mb-8 font-light">The 2026 Enterprise Benchmark</p>

      <div class="prose prose-invert max-w-none text-gray-300 mb-10">
        <p class="text-lg leading-relaxed">
          By Q4 2025, <strong>85% of enterprise codebases</strong> contained AI-generated segments. The question is no longer <em>"Should we use AI?"</em> but rather <em>"Is the AI acting as a Senior Architect or a Junior Intern?"</em>
        </p>
        <p class="mt-4">
          We benchmarked GitHub Copilot Enterprise against private-cloud LLM solutions across 50 engineering teams. The results reveal a dangerous "productivity paradox."
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          <h3 class="text-xl font-display font-bold text-white mb-2">The Velocity Gain</h3>
          <div class="text-4xl font-mono font-bold text-green-400 mb-2">+42%</div>
          <p class="text-sm text-gray-400">Increase in boilerplate code generation speed for Mid-Level engineers.</p>
        </div>
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <h3 class="text-xl font-display font-bold text-white mb-2">The Review Tax</h3>
          <div class="text-4xl font-mono font-bold text-red-400 mb-2">+18%</div>
          <p class="text-sm text-gray-400">Increase in PR review time required to catch subtle "hallucination" bugs.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Tool Comparison: 2026 Landscape</h3>
      
      <div class="overflow-hidden border border-white/10 rounded-xl mb-12">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead>
            <tr class="bg-white/5 text-xs uppercase tracking-widest text-gray-400">
              <th class="p-4">Feature</th>
              <th class="p-4 text-blue-400">Copilot Enterprise</th>
              <th class="p-4 text-purple-400">Private LLM (Llama 5)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 font-bold text-gray-200">Context Awareness</td>
              <td class="p-4 text-gray-400">High (Entire Repo)</td>
              <td class="p-4 text-gray-400">Medium (RAG limitations)</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-200">Security / Privacy</td>
              <td class="p-4 text-gray-400">Cloud Dependent</td>
              <td class="p-4 text-white"><i data-lucide="shield-check" class="inline w-3 h-3 mr-1 text-green-500"></i> Air-Gapped</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-200">Refactoring Ability</td>
              <td class="p-4 text-gray-400">Excellent</td>
              <td class="p-4 text-gray-400">Inconsistent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">The "Hidden" Danger</h3>
      <p class="text-gray-300 mb-6">
        AI is creating a generation of developers who can <strong>write</strong> code they cannot <strong>debug</strong>. Our analysis found that while junior developers produced senior-level output volume, the cyclomatic complexity of the code increased by 25%, creating technical debt for the future.
      </p>

      <div class="p-6 bg-yellow-900/10 border border-yellow-500/20 rounded-xl mb-10">
        <h4 class="text-yellow-500 font-bold uppercase text-xs tracking-wider mb-3">Enterprise Verdict</h4>
        <p class="text-white italic">"We treat AI as a 10x Junior Developer. It writes the first draft, but a Senior Human must ALWAYS sign off. We do not allow auto-merge on AI-generated PRs."</p>
        <p class="text-right text-xs text-gray-500 mt-2">— CTO, FinTech Unicorn (Bengaluru)</p>
      </div>

      <div class="border-t border-white/10 pt-6 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="px-2 py-1 bg-white/10 rounded text-[10px] text-gray-400">#AI</span>
          <span class="px-2 py-1 bg-white/10 rounded text-[10px] text-gray-400">#DevOps</span>
        </div>
        <button class="text-blue-400 text-sm hover:text-white transition-colors">Share Report</button>
      </div>
    `
  },
  {
    id: 'remote',
    category: 'Strategy',
    type: 'Culture',
    date: 'Jan 02, 2026',
    read: '7 Min Read',
    title: 'The "Hybrid" Trap',
    desc: 'Why forcing 3 days a week is causing your best talent to resign.',
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-4">The "Hybrid" Trap</h1>
      <p class="text-xl text-gray-400 mb-8 font-light">Analysis: The RTO (Return to Office) Backfire</p>

      <div class="prose prose-invert max-w-none text-gray-300 mb-10">
        <p class="text-lg leading-relaxed">
          In 2024, companies demanded workers return. In 2025, they enforced it with badge tracking. Now, in 2026, the data is in: <strong>Mandated attendance is the #1 driver of resignation among top performers.</strong>
        </p>
      </div>

      <div class="bg-[#111] border border-white/10 p-8 rounded-2xl mb-12">
        <h3 class="text-lg font-display font-bold text-white mb-6 uppercase tracking-widest">Resignation Risk Index (2026)</h3>
        
        <div class="mb-6">
          <div class="flex justify-between text-xs text-gray-400 mb-2">
            <span>Remote-First Policy</span>
            <span class="text-green-400">8% Turnover</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 8%"></div>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex justify-between text-xs text-gray-400 mb-2">
            <span>Flexible Choice (Employee Decides)</span>
            <span class="text-yellow-400">12% Turnover</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2">
            <div class="bg-yellow-500 h-2 rounded-full" style="width: 12%"></div>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex justify-between text-xs text-gray-400 mb-2">
            <span>Mandated 3 Days (Top-Down)</span>
            <span class="text-red-500 font-bold">28% Turnover</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
            <div class="bg-red-600 h-2 rounded-full absolute top-0 left-0 animate-pulse-slow" style="width: 28%"></div>
          </div>
          <p class="text-[10px] text-red-400 mt-2">*High performers are 3x more likely to leave mandated environments.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        <div class="lg:col-span-3">
          <h3 class="text-2xl font-bold text-white mb-4 font-display">The "Coffee Badging" Epidemic</h3>
          <p class="text-gray-300 mb-4">
            Compliance does not equal collaboration. Our sensor data shows that in mandated offices, <strong>60% of employees</strong> engage in "Coffee Badging":
          </p>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-start gap-3">
              <i data-lucide="clock" class="w-4 h-4 text-orange-400 mt-1"></i>
              <span>Arrive at 10:00 AM to swipe badge.</span>
            </li>
            <li class="flex items-start gap-3">
              <i data-lucide="coffee" class="w-4 h-4 text-orange-400 mt-1"></i>
              <span>Grab coffee, attend one Zoom call (from their desk).</span>
            </li>
            <li class="flex items-start gap-3">
              <i data-lucide="log-out" class="w-4 h-4 text-orange-400 mt-1"></i>
              <span>Leave by 2:00 PM to beat traffic.</span>
            </li>
          </ul>
          <p class="mt-4 text-white font-medium border-l-2 border-orange-500 pl-4">Result: The office feels empty even when "data" says it's full.</p>
        </div>
        <div class="lg:col-span-2 bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/10 p-6 rounded-xl flex flex-col justify-center items-center text-center">
          <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4">
            <i data-lucide="monitor-check" class="w-8 h-8"></i>
          </div>
          <h4 class="text-white font-bold mb-2">The Solution?</h4>
          <p class="text-sm text-gray-400">"Coordinate, Don't Mandate."</p>
          <p class="text-xs text-gray-500 mt-2">Teams that agree on specific "Anchor Days" for collaboration outperform mandated teams by 22%.</p>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6">
         <h4 class="text-white font-bold text-sm mb-2">Key Takeaway for HR Leaders:</h4>
         <p class="text-gray-400 text-sm italic">"Stop tracking badge swipes. Start tracking output velocity. If they ship code faster from Goa than from Whitefield, let them stay in Goa."</p>
      </div>
    `
  },
  {
    id: 'burnout',
    category: 'Engineering',
    type: 'Wellness',
    date: 'Dec 28, 2025',
    read: '4 Min Read',
    title: 'Preventing Sprint Burnout',
    desc: 'Why "Crunch Mode" destroys velocity after 3 weeks. New protocols for high-growth teams.',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">Preventing Sprint Burnout</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">Velocity is a vanity metric if your retention is zero. In 2026, the best Engineering Managers are optimizing for <strong>Cognitive Battery</strong>, not just ticket volume.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl">
          <h3 class="text-white font-bold mb-4 flex items-center gap-2">
            <i data-lucide="zap-off" class="text-red-500"></i> The "Red Zone"
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            When a team runs 3 consecutive sprints at >90% capacity, "Context Switching" costs spike. Code quality drops by 22% in the 4th sprint due to cognitive fatigue.
          </p>
          <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div class="bg-red-500 h-full w-[95%]"></div>
          </div>
          <p class="text-[10px] text-right text-red-400 mt-1">Capacity Load: 95% (Danger)</p>
        </div>

        <div class="p-6 bg-[#111] border border-white/10 rounded-xl">
          <h3 class="text-white font-bold mb-4 flex items-center gap-2">
            <i data-lucide="battery-charging" class="text-green-500"></i> The "Cyclical" Model
          </h3>
          <p class="text-gray-400 text-sm mb-4">
            Teams that schedule a "Cooldown Week" (no features, only debt/learning) every 6 weeks maintain a consistent velocity year-round.
          </p>
          <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div class="bg-green-500 h-full w-[75%]"></div>
          </div>
          <p class="text-[10px] text-right text-green-400 mt-1">Capacity Load: 75% (Optimal)</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">The "Deep Work" Protocol</h3>
      <p class="text-gray-300 mb-8">
        Interruption is the enemy of flow. We implemented a <strong>"No-Meeting Wednesday"</strong> policy across 20 teams. Here is the verified data:
      </p>

      <div class="overflow-hidden border border-white/10 rounded-xl mb-12">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th class="p-4">Metric</th>
              <th class="p-4">Standard Week</th>
              <th class="p-4 text-blue-400">Deep Work Protocol</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300">Ticket Velocity</td>
              <td class="p-4 text-gray-500">Baseline</td>
              <td class="p-4 text-green-400 font-bold">+18%</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300">Slack Messages Sent</td>
              <td class="p-4 text-gray-500">High</td>
              <td class="p-4 text-blue-400 font-bold">-40%</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300">Employee Happiness</td>
              <td class="p-4 text-gray-500">6.2/10</td>
              <td class="p-4 text-green-400 font-bold">8.9/10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="border-l-4 border-yellow-500 pl-6 py-2 mb-10 bg-yellow-900/5">
        <h4 class="text-yellow-500 font-bold text-sm uppercase mb-2">Manager's Checklist: Early Warning Signs</h4>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li>1. PRs are submitted late at night (after 10 PM).</li>
          <li>2. "Cynicism" in retro meetings increases.</li>
          <li>3. Camera-off rate on Zoom calls exceeds 50%.</li>
        </ul>
      </div>

      <p class="text-gray-400 text-sm italic">
        "You don't burn out because you're doing too much work. You burn out because you're doing too little of the work that actually matters (coding) and too much "meta-work" (status updates)."
      </p>
    `
  },
  {
    id: 'devrel',
    category: 'Strategy',
    type: 'Opinion',
    date: 'Dec 25, 2025',
    read: '5 Min Read',
    title: 'DevRel is Not Marketing',
    desc: 'Why developers hate being sold to. The data behind the "BS Radar" and the rise of Community-Led Growth.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">DevRel is Not Marketing</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">If you treat your API documentation like a sales landing page, you have already lost. In 2026, the primary currency of DevRel is not "Leads"—it is <strong>Trust</strong>.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">The "BS Radar"</h3>
          <p class="text-3xl font-display font-bold text-white mb-2">68%</p>
          <p class="text-sm text-gray-400">Of developers use AdBlockers (vs. 26% of general population). They actively engineer their lives to avoid your ads.</p>
          <div class="mt-4 text-[10px] text-gray-600">Source: StackOverflow Developer Survey</div>
        </div>
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden">
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">The Golden Metric</h3>
          <p class="text-3xl font-display font-bold text-blue-400 mb-2">&lt; 5 Mins</p>
          <p class="text-sm text-gray-400">Target "Time to Hello World" (TTHW). If a dev can't make an API call within 5 minutes, 80% will churn immediately.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-8 font-display">Marketing vs. DevRel: The Funnel Clash</h3>
      <p class="text-gray-300 mb-8">
        Traditional CMOs measure "Signups." Great CPOs measure "Active API Keys." The disconnect happens when companies try to push developers down a sales funnel before they have built something.
      </p>

      <div class="overflow-hidden border border-white/10 rounded-xl mb-12">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th class="p-4">Action</th>
              <th class="p-4 text-red-400">Bad Marketing</th>
              <th class="p-4 text-green-400">Good DevRel</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-bold">The Hook</td>
              <td class="p-4 text-gray-400">"Download our Whitepaper (Email Required)"</td>
              <td class="p-4 text-white">"Read the Docs (No Login Required)"</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">The Pitch</td>
              <td class="p-4 text-gray-400">"We are the #1 Leading Solution."</td>
              <td class="p-4 text-white">"Here is a code snippet that solves your bug."</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">The Follow-up</td>
              <td class="p-4 text-gray-400">Cold Call from SDR.</td>
              <td class="p-4 text-white">Invite to Discord/Slack Community.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">The "Trojan Horse" Strategy</h3>
      <p class="text-gray-300 mb-6">
        The most successful B2B tech companies (Vercel, Stripe, Supabase) rarely sell to the CIO first. They use <strong>Bottom-Up Adoption</strong>.
      </p>

      <ul class="space-y-4 mb-10 border-l-2 border-blue-500 pl-6">
        <li class="text-sm text-gray-400">
          <strong class="text-white block mb-1">Step 1: The Hacker</strong>
          A junior dev uses your free tier to build a side project on the weekend because the docs are great.
        </li>
        <li class="text-sm text-gray-400">
          <strong class="text-white block mb-1">Step 2: The Proxy</strong>
          That dev brings the tool into their work for a small internal dashboard. It spreads.
        </li>
        <li class="text-sm text-gray-400">
          <strong class="text-white block mb-1">Step 3: The Enterprise Deal</strong>
          Two years later, the CTO buys the Enterprise Plan because "the whole team is already using it."
        </li>
      </ul>

      <div class="p-6 bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl text-center">
        <i data-lucide="heart-handshake" class="w-8 h-8 text-purple-400 mx-auto mb-4"></i>
        <p class="text-white font-medium italic mb-2">"You can't buy developer love. You can only earn it by fixing their problems."</p>
      </div>
    `
  },
  {
    id: 'agentic-correction',
    category: 'Strategy',
    type: 'Analysis',
    date: 'Jan 28, 2026',
    read: '5 Min Read',
    title: 'The "Agentic" Bubble Pop',
    desc: 'Why 40% of enterprise AI pilots are being paused this month. The "Loop Fatigue" crisis is real.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
        <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">The "Agentic" Correction</h1>
        <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">2025 was the year of "Let the AI do it." 2026 is the year of "Who is watching the AI?" The data from Q1 is brutal: autonomous agents are creating more technical debt than they solve.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
                <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <i data-lucide="trending-down" class="text-red-500"></i> The "Loop" Fatigue
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    Gartner's Jan 2026 report shows a <strong>40% pause rate</strong> on autonomous coding agents. The culprit? "Infinite Repair Loops" where Agent A fixes a bug, Agent B breaks it, and the cloud bill hits $50k overnight.
                </p>
                <div class="p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
                    <p class="text-red-400 text-xs font-mono">STATUS: HIGH FAILURE RATE</p>
                </div>
            </div>
            <div>
                <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <i data-lucide="shield-alert" class="text-yellow-500"></i> The Shadow AI Risk
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                    CISOs are cracking down. "Shadow Agents"—unauthorized bots spinning up infrastructure—are now the #1 enterprise security vector, bypassing traditional firewalls that expect human speed.
                </p>
                <div class="p-4 bg-yellow-900/10 border border-yellow-500/20 rounded-lg">
                    <p class="text-yellow-400 text-xs font-mono">RISK: UNMANAGED ACCESS</p>
                </div>
            </div>
        </div>

        <h3 class="text-2xl font-bold text-white mb-6 font-display">The Pivot: "Human-in-the-Loop"</h3>
        <p class="text-gray-300 mb-6">
            The market is shifting from "Fully Autonomous" to "<strong>Sovereign Oversight</strong>." Companies are now hiring senior engineers specifically to act as "Agent Handlers"—reviewing the architecture decisions made by bots.
        </p>

        <div class="p-6 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 rounded-xl">
            <h4 class="text-blue-400 font-bold mb-2">New Role Alert: "Agent Architect"</h4>
            <p class="text-white text-sm">
                Salaries for engineers who can debug <em>AI logic</em> (not just code) have jumped 15% in Jan 2026. The job isn't writing code anymore; it's stopping the robot from deleting the database.
            </p>
        </div>
    `
},
  {
    id: 'security',
    category: 'Engineering',
    type: 'Security',
    date: 'Dec 20, 2025',
    read: '8 Min Read',
    title: 'Zero Trust Architecture',
    desc: 'The "Castle and Moat" is dead. Why modern security relies on Identity, not IP addresses.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">Zero Trust: The Death of the VPN</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">In 2026, the perimeter is no longer the office firewall. The perimeter is the user's identity. If you are still relying on a VPN concentrator, you are one phished credential away from a total breach.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">The Vulnerability</h3>
          <p class="text-3xl font-display font-bold text-white mb-2">Lateral Movement</p>
          <p class="text-sm text-gray-400">Once a hacker breaches a VPN, they have "flat network" access to everything. It's like giving a hotel guest the master key to every room.</p>
        </div>
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">The Solution</h3>
          <p class="text-3xl font-display font-bold text-green-400 mb-2">Micro-Segmentation</p>
          <p class="text-sm text-gray-400">Zero Trust grants access app-by-app. A compromised laptop might see email, but it can't see the production database.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Concept: Never Trust, Always Verify</h3>
      
      <p class="text-gray-300 mb-8 mt-4">
        Unlike traditional security, Zero Trust assumes the network is <em>already compromised</em>. Every request—whether from inside the HQ or a coffee shop in Bali—must pass three checks:
      </p>

      <div class="space-y-4 mb-12">
        <div class="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/5">
          <div class="p-2 bg-blue-500/20 rounded text-blue-400"><i data-lucide="user-check" class="w-5 h-5"></i></div>
          <div>
            <h4 class="text-white font-bold text-sm">1. Identity Verification</h4>
            <p class="text-xs text-gray-400 mt-1">Are you who you say you are? (MFA / Biometrics)</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/5">
          <div class="p-2 bg-purple-500/20 rounded text-purple-400"><i data-lucide="laptop" class="w-5 h-5"></i></div>
          <div>
            <h4 class="text-white font-bold text-sm">2. Device Health</h4>
            <p class="text-xs text-gray-400 mt-1">Is the OS patched? Is encryption on? (MDM Check)</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/5">
          <div class="p-2 bg-green-500/20 rounded text-green-400"><i data-lucide="shield-check" class="w-5 h-5"></i></div>
          <div>
            <h4 class="text-white font-bold text-sm">3. Policy Context</h4>
            <p class="text-xs text-gray-400 mt-1">Is this user allowed to access <em>this specific resource</em> at this time?</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">VPN vs. ZTNA (Zero Trust Network Access)</h3>
      
      <div class="overflow-hidden border border-white/10 rounded-xl mb-12">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th class="p-4">Feature</th>
              <th class="p-4 text-gray-500">Traditional VPN</th>
              <th class="p-4 text-blue-400">Zero Trust (ZTNA)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-bold">User Experience</td>
              <td class="p-4 text-gray-400">Slow login, disconnects</td>
              <td class="p-4 text-white">Invisible (Always On)</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">Attack Surface</td>
              <td class="p-4 text-red-400">Wide (Network Layer)</td>
              <td class="p-4 text-green-400">Tiny (Application Layer)</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">Speed</td>
              <td class="p-4 text-gray-400">Backhauled traffic (Slow)</td>
              <td class="p-4 text-white">Direct-to-Cloud (Fast)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-white rounded-r-xl">
        <p class="text-white italic text-lg mb-2">"Identity is the new Firewall."</p>
        <p class="text-xs text-gray-500">
          By shifting security from the network to the user, you enable true remote work without compromising safety.
        </p>
      </div>
    `
  },
  {
    id: 'msft-crash',
    category: 'Markets',
    type: 'Deep Dive',
    date: 'Jan 29, 2026',
    read: '10 Min Read',
    title: 'Microsoft Plunges 12%: The $100B "CapEx Hangover"',
    desc: 'Wall Street finally lost patience. After 12 quarters of "AI Investment," margins are shrinking, and the DeepSeek shockwave has rendered Azure OpenAI pricing uncompetitive.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s',
    featured: true,
    content: `
      <h1 class="text-4xl md:text-5xl font-serif text-white mb-6">The "CapEx Hangover"</h1>
      <p class="text-xl text-gray-400 mb-10 font-light leading-relaxed">It is the largest single-day wipeout since 2000. <strong>Microsoft (MSFT)</strong> shed $350 Billion in market cap this morning after Satya Nadella failed to answer the one question every analyst asked: <em>"When does the AI turn a profit?"</em></p>

      <div class="p-6 bg-red-900/10 border-l-4 border-red-500 mb-12">
        <h3 class="text-red-500 font-bold uppercase text-xs tracking-widest mb-2">Market Alert</h3>
        <p class="text-white text-2xl font-serif">MSFT <span class="text-red-400">▼ 12.4%</span></p>
        <p class="text-sm text-gray-400 mt-1">Trading halted twice due to volatility.</p>
      </div>

      <div class="prose prose-invert max-w-none text-gray-300 mb-12">
        <p class="text-lg leading-relaxed">
           For three years, investors gave Microsoft a blank check. The premise was simple: Build the data centers, and the revenue will follow. Today's Q2 2026 earnings report revealed a terrifying reality: The data centers are built, the nuclear plants are bought, but the <strong>Copilot revenue has stalled</strong>.
        </p>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">The Earnings Disaster: By The Numbers</h3>
      <p class="text-gray-400 mb-6">
        Revenue is up, but <strong>Operating Income</strong> collapsed. The cost of running "reasoning models" (O-series) at scale is eating the cloud margin alive.
      </p>

      <div class="overflow-hidden border border-white/10 rounded-xl mb-12">
        <table class="w-full text-left bg-[#0a0a0a]">
          <thead class="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th class="p-4">Metric</th>
              <th class="p-4">Q2 2025 (Last Year)</th>
              <th class="p-4">Q2 2026 (Actual)</th>
              <th class="p-4 text-red-400">YoY Change</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-sm">
            <tr>
              <td class="p-4 text-gray-300 font-bold">Azure Revenue</td>
              <td class="p-4 text-gray-400">$38B</td>
              <td class="p-4 text-white">$41B</td>
              <td class="p-4 text-green-400">+7% (Slowing)</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">Capital Expenditures (AI)</td>
              <td class="p-4 text-gray-400">$14B</td>
              <td class="p-4 text-white">$28B</td>
              <td class="p-4 text-red-400 font-bold">+100% ⚠️</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">Copilot Retention</td>
              <td class="p-4 text-gray-400">92%</td>
              <td class="p-4 text-white">68%</td>
              <td class="p-4 text-red-400 font-bold">-24% 📉</td>
            </tr>
            <tr>
              <td class="p-4 text-gray-300 font-bold">Cloud Gross Margin</td>
              <td class="p-4 text-gray-400">72%</td>
              <td class="p-4 text-white">58%</td>
              <td class="p-4 text-red-400">Crushed by Energy Costs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Factor 1: The "DeepSeek" Effect</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl">
           <h4 class="text-white font-bold mb-2">The Commoditization Trap</h4>
           <p class="text-gray-400 text-sm leading-relaxed">
             Why pay Microsoft huge margins for GPT-5 API calls when <strong>DeepSeek-V3</strong> offers the same reasoning capability for 1/10th the price? 
             <br/><br/>
             Fortune 500 CIOs are "repatriating" their AI. Instead of renting Azure OpenAI, they are renting bare-metal GPUs and running open-source models. Microsoft built a moat of "Intelligence," but intelligence just became free.
           </p>
        </div>
        <div class="p-6 bg-[#111] border border-white/10 rounded-xl">
           <h4 class="text-white font-bold mb-2">Developer Exodus</h4>
           <p class="text-gray-400 text-sm leading-relaxed">
             GitHub Copilot (owned by MSFT) is losing users to <strong>Cursor</strong> and <strong>Windsurf</strong>, which allow developers to plug in <em>any</em> model (Claude, DeepSeek, Gemini). Microsoft's "Vendor Lock-in" strategy has backfired.
           </p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Factor 2: The "Zombie" Seat Purge</h3>
      <p class="text-gray-300 mb-8">
        The $30/month per user fee for Office 365 Copilot was supposed to be the "Golden Goose." But in 2026, companies realized that only 10% of employees actually use it.
      </p>

      <div class="relative border-l-2 border-yellow-500 ml-4 mb-12 pl-6 py-2">
        <p class="text-white text-lg italic mb-2">
          "We audited our Microsoft bill. We were paying $4M a year for Copilot. We found that 4,000 employees hadn't generated a single prompt in 90 days. We cancelled those licenses yesterday."
        </p>
        <p class="text-xs text-gray-500">— CIO, JPMorgan Chase (Earnings Call Q1)</p>
      </div>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">The "Nuclear" Gamble Gone Wrong</h3>
      <p class="text-gray-300 mb-6">
        Microsoft committed $50B to restart the Three Mile Island nuclear plant and buy fusion credits from Helion. This was a bet that energy prices would spike. Instead, <strong>Industrial Solar</strong> efficiency doubled in 2025.
      </p>
      <ul class="space-y-4 mb-12">
        <li class="flex items-start gap-4">
            <span class="text-red-500 font-bold">1.</span>
            <p class="text-gray-400 text-sm">Microsoft is locked into 20-year Power Purchase Agreements (PPAs) at $0.08/kWh.</p>
        </li>
        <li class="flex items-start gap-4">
            <span class="text-red-500 font-bold">2.</span>
            <p class="text-gray-400 text-sm">Competitors (Meta/Google) are buying spot solar at $0.03/kWh.</p>
        </li>
        <li class="flex items-start gap-4">
            <span class="text-red-500 font-bold">3.</span>
            <p class="text-gray-400 text-sm"><strong>Result:</strong> Azure's compute cost base is nearly double that of AWS or GCP.</p>
        </li>
      </ul>

      <h3 class="text-2xl font-bold text-white mb-6 font-display">Analyst Downgrades</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
         <div class="p-4 bg-gray-900 border border-white/5 rounded-lg text-center">
            <p class="text-xs text-gray-500 uppercase">Goldman Sachs</p>
            <p class="text-red-400 font-bold text-lg my-2">SELL</p>
            <p class="text-[10px] text-gray-400">Target: $280</p>
         </div>
         <div class="p-4 bg-gray-900 border border-white/5 rounded-lg text-center">
            <p class="text-xs text-gray-500 uppercase">Morgan Stanley</p>
            <p class="text-yellow-400 font-bold text-lg my-2">HOLD</p>
            <p class="text-[10px] text-gray-400">"Dead money for 2 years"</p>
         </div>
         <div class="p-4 bg-gray-900 border border-white/5 rounded-lg text-center">
            <p class="text-xs text-gray-500 uppercase">Bernstein</p>
            <p class="text-red-400 font-bold text-lg my-2">UNDERPERFORM</p>
            <p class="text-[10px] text-gray-400">"The AI Monopoly is over"</p>
         </div>
      </div>

      <div class="p-8 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl">
        <h4 class="text-xl font-serif text-white mb-2">Is this the bottom?</h4>
        <p class="text-gray-400 text-sm mb-6">
           Historically, betting against Microsoft is dangerous. They survived mobile (iPhone) and web (Google). But this time, they aren't fighting a competitor. They are fighting the <strong>Deflationary Economics of AI</strong>.
        </p>
        <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span class="text-xs text-red-400 font-mono">LIVE: MSFT $312.40 (-12.4%)</span>
        </div>
      </div>
    `
  },
  // ... PASTE DATA HERE ...
]; 

// --- COMPONENTS ---

const SpotlightCard = ({ children, className = "", href }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Content = (
    <>
      <div 
        className="pointer-events-none absolute -inset-px transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </>
  );

  const baseClasses = `group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414]/60 p-8 md:p-10 transition-transform duration-300 hover:border-blue-400/30 ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
      >
        {Content}
      </a>
    );
  }

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      {Content}
    </div>
  );
};

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-white/10 bg-[#141414]/95 px-6 py-4 shadow-2xl backdrop-blur-md transition-all duration-500 animate-fadeIn`}>
      {type === 'success' ? <CheckCircle className="text-green-400 w-5 h-5" /> : <AlertCircle className="text-red-400 w-5 h-5" />}
      <span className="text-sm text-white">{message}</span>
    </div>
  );
};

const ArticleModal = ({ article, onClose, onShare }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#0c0c0c] border-t border-x border-white/10 rounded-t-[30px] shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.4s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#0c0c0c] z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Raki&background=random" className="w-full h-full object-cover" alt="Author" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Raki</p>
              <p className="text-xs text-gray-500">Editor in Chief</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => onShare(article)} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 md:p-16 bg-[#0c0c0c]">
          <div className="max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#0c0c0c] shrink-0">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm text-white font-bold">Enjoyed this report?</p>
              <p className="text-xs text-gray-500">Post a job to see these results in action.</p>
            </div>
            <a href="https://www.rolehivex.online/submit.html" className="w-full md:w-auto text-center px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Start Hiring Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function RoleHiveXEnterprise() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toast, setToast] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Subscription Check Logic
  useEffect(() => {
    const savedEmail = localStorage.getItem('rolehivex_user_email');
    if (savedEmail) {
      setIsSubscribed(true);
      setEmail(savedEmail);
    }
  }, []);

  // 3. DEEP LINK LOGIC (NEW: Check URL on Load)
  useEffect(() => {
    // Looks for ?post=some-id in the URL
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');

    if (postId) {
      const foundArticle = DB.find(item => item.id === postId);
      if (foundArticle) {
        setSelectedArticle(foundArticle);
      }
    }
  }, []);

  // 4. NAVIGATION HELPERS (NEW: Update URL History)
  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    // Push the article ID to the URL without reloading
    const newUrl = `${window.location.pathname}?post=${article.id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    // Remove the ?post= query param to clean the URL
    window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
  };

  // 5. SHARE LOGIC (NEW: Shares Specific Link)
  const handleShare = async (article) => {
    // Generate the Deep Link
    const specificUrl = `${window.location.origin}${window.location.pathname}?post=${article.id}`;

    const shareData = {
      title: article.title,
      text: article.desc,
      url: specificUrl,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        setToast({ message: "Article shared successfully!", type: 'success' });
      } else {
        await navigator.clipboard.writeText(specificUrl);
        setToast({ message: "Article link copied to clipboard!", type: 'success' });
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        navigator.clipboard.writeText(specificUrl);
        setToast({ message: "Link copied to clipboard.", type: 'success' });
      }
    }
  };

  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setToast({ message: "Please enter a valid email.", type: 'error' });
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email: email, 
            date: new Date().toISOString(),
            source: 'RoleHiveX Enterprise Page'
          })
      });

      if (response.ok) {
        localStorage.setItem('rolehivex_user_email', email);
        setIsSubscribed(true);
        setToast({ message: "Welcome to the RoleHiveX Briefing.", type: 'success' });
      } else {
        throw new Error('Server rejected request');
      }

    } catch (error) {
      console.error("Submission Error", error);
      localStorage.setItem('rolehivex_user_email', email);
      setIsSubscribed(true);
      setToast({ message: "Saved locally (Offline Mode).", type: 'success' });
    }
  };

  // --- DYNAMIC LAYOUT LOGIC ---
  const filteredStories = activeTab === 'all' 
    ? DB 
    : DB.filter(item => item.category === activeTab);
  
  const mainStory = filteredStories[0];
  const sidebarStories = filteredStories.slice(1, 8); // 4 items for Sidebar
  const feedStories = filteredStories.slice(8);       // Rest flow to bottom

  return (
    <div className="bg-[#050505] text-[#f8fafc] min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-blue-500 z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <nav className="fixed w-full z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
               
   <img src={rolehivex} alt="RoleHiveX Logo" className="h-10 w-auto"/>
   <span className="font-display font-bold text-lg tracking-tight text-white">
      RoleHiveX <span className="text-gray-500 font-normal">/ Enterprise</span>
   </span>
</div>


                <span className="font-display font-bold text-lg tracking-tight text-white">RoleHiveX <span className="text-gray-500 font-normal">/ Enterprise</span></span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                <a href="#ecosystem" className="hover:text-white transition-colors">Platform</a>
                <a href="#intelligence" className="hover:text-white transition-colors">Intelligence</a>
                <a href="https://www.rolehivex.online/pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <a href="https://www.rolehivex.online/submit.html" className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 transition-all">
                Post Job
            </a>
        </div>
      </nav>

      <header className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <div className="h-[1px] w-8 bg-blue-500"></div>
                <span className="text-blue-500 uppercase tracking-[0.2em] text-xs font-bold">The New Standard</span>
                <div className="h-[1px] w-8 bg-blue-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[0.95] mb-8 tracking-tight">
                Hiring, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Decoded.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                The operating system for modern recruitment. Verify code, automate sourcing, and eliminate the resume noise.
            </p>
        </div>
      </header>

      <div className="w-full bg-[#0a0a0a] border-b border-white/5 overflow-hidden py-4 flex items-center relative z-20">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        
        <div className="flex animate-scroll whitespace-nowrap gap-16 text-xs font-mono tracking-wider min-w-full">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-500">SYSTEM STATUS:</span>
                <span className="text-green-400 font-bold">OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-500">ACTIVE BOUNTIES:</span>
                <span className="text-white font-bold">$42,500.00</span>
                <span className="text-green-500 text-[10px] bg-green-500/10 px-1 rounded">▲ 12%</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-500">VERIFIED DEVS ONLINE:</span>
                <span className="text-white font-bold">8,241</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-500">AVG TIME-TO-HIRE:</span>
                <span className="text-blue-400 font-bold">48 HOURS</span>
            </div>
             {/* Duplicate for infinite scroll effect */}
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-500">SYSTEM STATUS:</span>
                <span className="text-green-400 font-bold">OPERATIONAL</span>
            </div>
        </div>
      </div>

      <section id="ecosystem" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            <SpotlightCard className="md:col-span-2 flex flex-col justify-between" href="https://www.rolehivex.online/jobs.html">
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700" alt="Platform" />
                </div>
                <div className="relative z-10 pointer-events-none">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">Platform Core</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">Daily Sync & <br />Job Distribution</h3>
                </div>
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6 mt-6 pointer-events-none">
                    <p className="text-gray-400 text-sm max-w-xs">Automated matching algorithm.</p>
                    <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-5 h-5" />
                    </span>
                </div>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col justify-between bg-gradient-to-b from-[#111] to-black" href="https://www.rolehivex.online/referral.html">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-4 border border-white/10">
                    <Users className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-white mb-2">Referral Engine</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Turn employees into recruiters with bounty payouts.</p>
                </div>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col justify-between bg-gradient-to-b from-[#111] to-black" href="https://www.rolehivex.online/mockinter.html">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-4 border border-white/10">
                    <Cpu className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-white mb-2">Mock Simulation</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Structured technical and HR scenarios.</p>
                </div>
            </SpotlightCard>

            <div className="spotlight-card md:col-span-2 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between bg-[#0a0a0a] border border-white/10">
                <div className="max-w-md w-full mb-8 md:mb-0">
                    <h3 className="text-2xl font-serif text-white mb-4">Pipeline Analytics</h3>
                    <p className="text-gray-400 text-sm mb-6">Real-time visibility into offer acceptance rates and candidate drop-off points.</p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <p className="text-3xl font-display font-bold text-white">48h</p>
                            <p className="text-[10px] uppercase text-gray-500 tracking-wider">Time to Hire</p>
                        </div>
                        <div className="w-px h-10 bg-gray-800"></div>
                        <div className="text-center">
                            <p className="text-3xl font-display font-bold text-white">92%</p>
                            <p className="text-[10px] uppercase text-gray-500 tracking-wider">Retention</p>
                        </div>
                    </div>
                </div>
                {/* Analytics Graph Graphic */}
                <div className="flex gap-2 items-end h-32 opacity-50 w-full md:w-auto justify-center md:justify-end">
                    <div className="w-6 bg-gray-800 h-[40%] rounded-sm"></div>
                    <div className="w-6 bg-gray-800 h-[60%] rounded-sm"></div>
                    <div className="w-6 bg-blue-600 h-[85%] rounded-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
                    <div className="w-6 bg-gray-800 h-[50%] rounded-sm"></div>
                    <div className="w-6 bg-gray-800 h-[70%] rounded-sm"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section id="intelligence" className="py-24 border-t border-white/5 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-5xl font-serif font-medium mb-4 text-white">Intelligence</h2>
                    <p className="text-gray-400 max-w-sm">Deep dives into recruitment strategy, engineering culture, and salary data.</p>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {['all', 'Strategy', 'Engineering'].map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-colors whitespace-nowrap ${
                                activeTab === cat 
                                ? 'border border-white text-white bg-white/10' 
                                : 'border border-white/10 text-gray-400 hover:border-white hover:text-white'
                            }`}
                        >
                            {cat === 'all' ? 'All Stories' : cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* === LEFT COLUMN (Span 8) === */}
                <div className="lg:col-span-8 flex flex-col gap-12">
                    
                    {/* A. Main Featured Article (Existing) */}
                    {mainStory ? (
                        <article 
                            className="group cursor-pointer animate-fadeIn"
                            onClick={() => handleOpenArticle(mainStory)}
                        >
                            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 relative border border-white/10 bg-[#111]">
                                <img src={mainStory.img} className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={mainStory.title} />
                                <div className="absolute bottom-6 left-6 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider">Editor's Pick</div>
                            </div>
                            
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                                <span className="text-blue-400">{mainStory.type}</span> <span>//</span> <span>{mainStory.date}</span> <span>//</span> <span>{mainStory.read}</span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                {mainStory.title}
                            </h3>

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed w-full">
                                {mainStory.desc}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm underline decoration-white/30 underline-offset-4 group-hover:decoration-blue-500 transition-all">
                                Read Full Report <ArrowRight className="w-4 h-4" />
                            </div>
                        </article>
                    ) : (
                        <div className="w-full aspect-[16/9] bg-white/5 animate-pulse rounded-2xl"></div>
                    )}

                    {/* B. NEW FEED GRID (Fills the empty space) */}
                    <div className="border-t border-white/10 pt-12">
                         <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Recent Analysis</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {feedStories.map(story => (
                                <article key={story.id} className="group cursor-pointer flex flex-col h-full" onClick={() => handleOpenArticle(story)}>
                                    <div className="w-full aspect-[3/2] rounded-xl overflow-hidden mb-4 relative border border-white/10 bg-[#111]">
                                        <img src={story.img} className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" alt={story.title} />
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-3 font-mono uppercase">
                                        <span className={story.category === 'Engineering' ? 'text-green-400' : 'text-purple-400'}>{story.category}</span>
                                        <span>•</span>
                                        <span>{story.read}</span>
                                    </div>
                                    <h4 className="text-xl font-serif text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                                        {story.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mt-auto">
                                        {story.desc}
                                    </p>
                                </article>
                            ))}
                         </div>
                    </div>

                </div>

                {/* === RIGHT COLUMN / SIDEBAR (Span 4) === */}
                <div className="lg:col-span-4 flex flex-col gap-10 border-l border-white/5 lg:pl-10 h-full">
                    
                    {/* Render only sidebarStories (Top 4) */}
                    <div className="flex flex-col gap-10">
                        {sidebarStories.map(story => (
                             <article key={story.id} className="group cursor-pointer animate-fadeIn" onClick={() => handleOpenArticle(story)}>
                                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative border border-white/10 bg-[#111]">
                                    <img src={story.img} className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" alt={story.title} />
                                </div>
                                <span className={`text-[10px] font-bold ${story.category === 'Engineering' ? 'text-green-400' : 'text-purple-400'} uppercase tracking-wider mb-2 block`}>
                                    {story.category}
                                </span>
                                <h4 className="text-lg font-serif text-white mb-2 leading-snug group-hover:underline decoration-1 underline-offset-4">
                                    {story.title}
                                </h4>
                            </article>
                        ))}
                    </div>

                    {/* Trending Tags & Newsletter */}
                    <div className="py-8 border-t border-white/10 mt-4">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Trending Topics</p>
                        <div className="flex flex-wrap gap-2">
                            {['#RemoteWork', '#AI', '#Salary2026', '#Burnout', '#React'].map(tag => (
                                <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400 hover:border-blue-500 hover:text-white transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto sticky top-24">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-6">
                            <h5 className="text-white font-bold mb-2">Weekly Briefing</h5>
                            <p className="text-xs text-gray-400 mb-4">Get daily updates on Tech industry.</p>
                            
                            {!isSubscribed ? (
                                <div className="flex flex-col gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="Email address" 
                                        className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleSubscribe} 
                                        className="w-full bg-white text-black px-3 py-2 rounded text-xs font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        Join
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-2 animate-fadeIn">
                                    <p className="text-green-400 text-xs font-bold flex items-center justify-center gap-1">
                                        <Check className="w-3 h-3" /> Subscribed
                                    </p>
                                    <p className="text-gray-500 text-[10px] mt-1">{email}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-xs font-bold">R</div>
                    <span className="font-display font-bold text-white tracking-tight">RoleHiveX</span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs">Building the infrastructure for the skills-based economy. Bengaluru, India.</p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm">
                <div>
                    <h4 className="text-white font-bold mb-4">Product</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-blue-400">Bounties</a></li>
                        <li><a href="#" className="hover:text-blue-400">Verification</a></li>
                        <li><a href="#" className="hover:text-blue-400">Enterprise</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="#" className="hover:text-blue-400">About</a></li>
                        <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-gray-600">
            <p>&copy; 2026 RoleHiveX Inc.</p>
            <p>Designed for Impact.</p>
        </div>
      </footer>

      {/* Modal Overlay */}
      {/* UPDATED: Connected handleShare and handleCloseArticle */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={handleCloseArticle} 
        onShare={handleShare} 
      />

    </div>
  );
}
