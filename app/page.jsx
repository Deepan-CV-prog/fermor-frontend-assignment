'use client'

import { useMemo, useState } from 'react'

const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/></>,
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5z"/><path d="M4 8h15"/><path d="M15.5 12h.01"/></>,
    spark: <><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    grid: <><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

const money = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [monthly, setMonthly] = useState(10000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const projection = useMemo(() => {
    const months = years * 12
    const r = rate / 100 / 12
    return monthly * (((1 + r) ** months - 1) / r) * (1 + r)
  }, [monthly, years, rate])

  const faqs = [
    ['What is Fermor?', 'Fermor is a financial platform designed to make money decisions easier to understand. It brings planning, investing, calculators and financial insights into one clear experience.'],
    ['Is Fermor a financial adviser?', 'No. Fermor is designed to help you understand numbers, compare scenarios and make more informed decisions. It does not replace regulated financial advice.'],
    ['Can I start with a small amount?', 'Yes. The experience is built around practical, everyday decisions, so you can explore scenarios and start small before committing to a bigger financial goal.'],
    ['What can I use Fermor for?', 'You can explore investments, plan goals, understand spending, compare options and use financial calculators to see how small changes affect long-term outcomes.'],
  ]

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Fermor home"><span className="brand-mark">f</span><span>fermor</span></a>
          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <a href="#how">How it works</a>
            <a href="#tools">Tools</a>
            <a href="#insights">Insights</a>
            <a href="#faq">FAQ</a>
            <a className="mobile-cta" href="#join">Join waitlist</a>
          </div>
          <a className="nav-cta" href="#join">Join waitlist <Icon name="arrow" size={17}/></a>
          <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-a"/><div className="hero-glow glow-b"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> A clearer way to handle money</div>
            <h1>Your money.<br/><em>Made understandable.</em></h1>
            <p className="hero-lead">Fermor brings your money, goals and decisions into one calm place — so you can understand where you stand and know what to do next.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#join">Get early access <Icon name="arrow" size={18}/></a>
              <a className="text-link" href="#how">See how it works <Icon name="arrow" size={16}/></a>
            </div>
            <div className="trust-row"><span><Icon name="shield" size={15}/> Built for clarity</span><span><Icon name="check" size={15}/> Free to explore</span><span><Icon name="check" size={15}/> India-first</span></div>
          </div>

          <div className="hero-product" aria-label="Fermor financial dashboard preview">
            <div className="product-top"><div><span className="tiny-label">Good morning</span><strong>Here’s your money at a glance.</strong></div><div className="avatar">D</div></div>
            <div className="net-worth"><div><span className="tiny-label">Total net worth</span><div className="big-number">₹53,00,000</div><div className="positive">+₹4,82,000 <span>this year</span></div></div><div className="sparkline"><svg viewBox="0 0 280 100" preserveAspectRatio="none"><path d="M0 78 C20 76 30 64 45 68 S70 54 84 61 S105 48 120 53 S145 32 160 42 S180 35 195 37 S218 18 232 28 S250 12 280 4"/></svg></div></div>
            <div className="dashboard-grid">
              <div className="mini-card"><span className="card-icon"><Icon name="wallet" size={18}/></span><div><span>Monthly spending</span><strong>₹48,320</strong><small>↓ 12% vs last month</small></div></div>
              <div className="mini-card"><span className="card-icon"><Icon name="chart" size={18}/></span><div><span>Investments</span><strong>₹31.4L</strong><small className="green">+8.4% this year</small></div></div>
            </div>
            <div className="allocation"><div className="allocation-head"><strong>Where your money sits</strong><span>View all</span></div><div className="allocation-bars"><i style={{width:'42%'}}/><i style={{width:'28%'}}/><i style={{width:'18%'}}/><i style={{width:'12%'}}/></div><div className="legend"><span><b/> Investments 42%</span><span><b/> Savings 28%</span><span><b/> Cash 18%</span><span><b/> Other 12%</span></div></div>
          </div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-inner"><span>UNDERSTAND</span><i>•</i><span>PLAN</span><i>•</i><span>INVEST</span><i>•</i><span>GROW</span><i>•</i><span>UNDERSTAND</span><i>•</i><span>PLAN</span></div></section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-intro"><div><span className="kicker">01 — One clear picture</span><h2>Stop piecing your finances together.</h2></div><p>Money is spread across bank accounts, investments, apps and spreadsheets. Fermor gives you one simple view — with context, not clutter.</p></div>
          <div className="feature-layout">
            <div className="feature-card feature-dark"><span className="feature-number">01</span><Icon name="grid" size={28}/><h3>See the whole picture.</h3><p>Understand spending, savings, investments and net worth without jumping between ten different places.</p><div className="card-link">Explore your finances <Icon name="arrow" size={16}/></div></div>
            <div className="feature-card feature-light"><span className="feature-number">02</span><div className="rings"><span/><span/><span/><b>₹</b></div><h3>Turn numbers into decisions.</h3><p>Ask better questions. Compare scenarios. See what changes before you make the move.</p><div className="question-chip">What if I invest ₹10k more? <Icon name="arrow" size={14}/></div></div>
            <div className="feature-card feature-accent"><span className="feature-number">03</span><Icon name="spark" size={30}/><h3>Know what matters next.</h3><p>Get timely insights on your money and the market, explained in language that makes sense.</p><div className="insight-line"><span>Today</span><strong>Nifty 50</strong><em>+1.24%</em></div></div>
          </div>
        </div>
      </section>

      <section className="section decision" id="tools">
        <div className="container decision-grid">
          <div className="decision-copy"><span className="kicker">02 — Plan with confidence</span><h2>See the future before you choose it.</h2><p>Small decisions compound. Change a number and see how it affects the bigger picture — instantly.</p><div className="decision-points"><span><Icon name="check" size={17}/> Goal planning</span><span><Icon name="check" size={17}/> SIP & investment scenarios</span><span><Icon name="check" size={17}/> Loan & tax comparisons</span></div><a className="text-link" href="#calculator">Try the planner <Icon name="arrow" size={16}/></a></div>
          <div className="planner" id="calculator"><div className="planner-head"><div><span className="tiny-label">Growth planner</span><h3>If you invest monthly...</h3></div><span className="live-badge">LIVE</span></div><div className="planner-result"><span>Estimated value in {years} years</span><strong>{money(Math.round(projection))}</strong><div className="result-bar"><span style={{width:`${Math.min(92, 40 + years * 3.5)}%`}}/></div><small>At an assumed {rate}% annual return</small></div><label>Monthly investment <b>{money(monthly)}</b><input type="range" min="1000" max="50000" step="1000" value={monthly} onChange={e=>setMonthly(+e.target.value)} /></label><label>Time horizon <b>{years} years</b><input type="range" min="3" max="20" value={years} onChange={e=>setYears(+e.target.value)} /></label><label>Assumed return <b>{rate}%</b><input type="range" min="6" max="18" value={rate} onChange={e=>setRate(+e.target.value)} /></label><div className="planner-note">Illustrative projection only. Actual returns will vary.</div></div>
        </div>
      </section>

      <section className="section market" id="insights">
        <div className="container">
          <div className="section-intro"><div><span className="kicker">03 — Stay informed</span><h2>Less noise. More signal.</h2></div><p>Financial news should help you make sense of your money — not make you anxious. Fermor surfaces what is relevant and explains why it matters.</p></div>
          <div className="market-layout"><div className="market-panel"><div className="market-head"><span>Market pulse</span><span className="live-dot">Live</span></div><div className="market-main"><div><small>NIFTY 50</small><strong>25,178.65</strong><em>+1.24%</em></div><div className="market-chart"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0 130 C30 120 35 105 65 113 S90 82 120 92 S145 76 175 84 S200 60 225 73 S250 55 280 64 S305 38 335 51 S360 42 390 45 S420 18 450 30 S475 13 500 8"/></svg></div></div><div className="indices"><span>SENSEX <b>82,114</b> <em>+0.92%</em></span><span>USD/INR <b>₹88.14</b> <em>-0.18%</em></span><span>GOLD <b>₹1,21,440</b> <em>+0.44%</em></span></div></div>
            <div className="news-list"><article><span>INVESTING · 2H AGO</span><h3>What a market rally actually means for your portfolio</h3><p>A quick, plain-English breakdown of the numbers that matter.</p><a href="#join">Read insight <Icon name="arrow" size={14}/></a></article><article><span>PERSONAL FINANCE · 5H AGO</span><h3>How much should you keep as an emergency fund?</h3><p>A practical way to think about your cash buffer.</p><a href="#join">Read insight <Icon name="arrow" size={14}/></a></article></div></div>
        </div>
      </section>

      <section className="section cta-section" id="join">
        <div className="container"><div className="cta-card"><div className="cta-copy"><span className="kicker light">Fermor is coming soon</span><h2>Your next money decision deserves more clarity.</h2><p>Join the early-access list and be among the first to experience a simpler way to understand, plan and grow your money.</p></div><form className="waitlist" onSubmit={(e)=>{e.preventDefault(); if(email.trim()) setJoined(true)}}>{joined ? <div className="success"><span>✓</span><div><strong>You’re on the list.</strong><small>We’ll keep you posted at {email}.</small></div></div> : <><label htmlFor="email">Email address</label><div className="email-row"><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/><button className="btn btn-light" type="submit">Join waitlist <Icon name="arrow" size={17}/></button></div><small>No spam. Just launch updates and early access.</small></>}</form></div></div>
      </section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><span className="kicker">04 — Good questions</span><h2>Before you get started.</h2><p>Finance is complicated enough. Here are the basics.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'active':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><span>{openFaq===i?'−':'+'}</span></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <footer><div className="container footer-main"><a className="brand" href="#top"><span className="brand-mark">f</span><span>fermor</span></a><div className="footer-links"><a href="#how">Product</a><a href="#tools">Tools</a><a href="#insights">Insights</a><a href="#faq">FAQ</a></div><span className="footer-note">Money, made clearer.</span></div><div className="container footer-bottom"><span>© 2026 Fermor. All rights reserved.</span><span>For educational purposes only. Not financial advice.</span></div></footer>
    </main>
  )
}
