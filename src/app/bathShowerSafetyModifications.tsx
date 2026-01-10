// src/app/bathShowerSafetyModifications.tsx
import React from "react";

const PHONE_DISPLAY = "303-725-4368";
const PHONE_TEL = "tel:+13037254368";

export default function BathShowerSafetyModifications() {
  return (
    <main className="vq-safety">


      
      <section className="vq-safety__hero">
        <div className="vq-safety__container">
          <div className="vq-safety__badge">Denver - Colorado Springs - Fort Collins</div>

          <h1 className="vq-safety__h1">Bath / Shower Safety Modifications</h1>

          <p className="vq-safety__subhead">
            Safer bathing without a full remodel. We install commercial-grade stainless steel grab bars{" "}
            <strong>into studs</strong>—through your existing tile surround—<strong>without damaging your tile</strong>.
          </p>

          <ul className="vq-safety__bullets" aria-label="Key problems we solve">
            <li>Stop risking a fall stepping over your tub wall</li>
            <li>Don’t want to spend thousands on a walk-in shower?</li>
            <li>Don’t risk safety with suction cup grab bars</li>
          </ul>

          <div className="vq-safety__ctaRow">
            <a className="vq-safety__btnPrimary" href={PHONE_TEL}>
              Call to Schedule Your Install
            </a>

            <div className="vq-safety__phoneBlock">
              <div className="vq-safety__phoneLabel">Call us anytime to Schedule</div>
              <a className="vq-safety__phone" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <p className="vq-safety__microcopy">
            Quick installs • Clean work • Strong, stud-anchored mounting
          </p>
        </div>
      </section>
{/* VIDEO PROOF */}
    <section className="vq-safety__section vq-safety__sectionAlt vq-safety__videoSection">
        <div className="vq-safety__container">
          <h2 className="vq-safety__h2">See the Safety Upgrade in Action</h2>

          <p className="vq-safety__textMuted" style={{ maxWidth: 860, marginTop: 0 }}>
            A quick before-and-after look at how we install commercial-grade stainless steel grab bars—anchored
            directly into wall studs through existing tile, without cracking or damage.
          </p>

<div className="vq-safety__videoRow">
  <div className="vq-safety__videoCol">
    <div className="vq-safety__videoWrap">
      <video
        className="vq-safety__video"
        src="https://jgfadi8wlqsjvctv.public.blob.vercel-storage.com/0106.mp4"
        controls
        playsInline
        preload="metadata"
        poster="/safety/safety-poster.jpg"
      />
    </div>

    <p className="vq-safety__textMuted" style={{ fontSize: 13, margin: "10px 0 0" }}>
      Stud-anchored safety hardware — not suction cups.
    </p>
  </div>

  <aside className="vq-safety__offerCard" aria-label="Senior discount pricing">
    <div className="vq-safety__offerTop">
      <div className="vq-safety__offerBadge">Senior Discount</div>
      <div className="vq-safety__offerPercent">30% OFF</div>
    </div>

    <div className="vq-safety__offerPriceBox">
      <div className="vq-safety__offerLine">
        <span className="vq-safety__offerLabel">Normal price</span>
        <span className="vq-safety__offerStrike">$425</span>
      </div>

      <div className="vq-safety__offerLine">
        <span className="vq-safety__offerLabel">Senior discount</span>
        <span className="vq-safety__offerMinus">– $128</span>
      </div>

      <div className="vq-safety__offerDivider" />

      <div className="vq-safety__offerFinal">
        <div className="vq-safety__offerFinalLabel">Senior price</div>
        <div className="vq-safety__offerFinalValue">$297</div>
        <div className="vq-safety__offerFinalSub">Set of two grab bars • Installed into studs</div>
      </div>
    </div>

    <ul className="vq-safety__offerBullets">
      <li>Commercial-grade stainless steel</li>
      <li>Anchored into studs (not suction cups)</li>
      <li>Installed through existing tile</li>
    </ul>

    <a className="vq-safety__btnPrimary vq-safety__offerCta" href={PHONE_TEL}>
      Call to Schedule
    </a>

    <div className="vq-safety__offerFinePrint">
      *Discount available for seniors. Pricing shown for a set of two grab bars. Additional bars available.
    </div>
  </aside>
</div>

          <div className="vq-safety__note">
            <strong>Note:</strong> Suction cup grab bars can lose hold depending on surface and moisture.
            For real support, stud-anchored mounting is the safety standard.
          </div>
        </div>
      </section>
 
      {/* PROCESS */}
      <section className="vq-safety__section vq-safety__sectionAlt">
        <div className="vq-safety__container">
          <h2 className="vq-safety__h2">Simple 3-step process</h2>

          <div className="vq-safety__steps">
            <div className="vq-safety__step">
              <div className="vq-safety__stepNum">1</div>
              <div>
                <h3 className="vq-safety__h3">Call to schedule</h3>
                <p className="vq-safety__textMuted">
                  Tell us what you’re dealing with and where you want support.
                </p>
              </div>
            </div>

            <div className="vq-safety__step">
              <div className="vq-safety__stepNum">2</div>
              <div>
                <h3 className="vq-safety__h3">Confirm placement</h3>
                <p className="vq-safety__textMuted">
                  We recommend heights and positions based on real use and your layout.
                </p>
              </div>
            </div>

            <div className="vq-safety__step">
              <div className="vq-safety__stepNum">3</div>
              <div>
                <h3 className="vq-safety__h3">Install through existing tile</h3>
                <p className="vq-safety__textMuted">
                  We drill precisely and anchor into studs for a strong, secure result.
                </p>
              </div>
            </div>
          </div>

          <div className="vq-safety__ctaRow vq-safety__ctaRowCenter">
            <a className="vq-safety__btnPrimary" href={PHONE_TEL}>
              Call to Schedule Your Install
            </a>
            <span className="vq-safety__textMuted">Serving the Colorado Front Range</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vq-safety__section">
        <div className="vq-safety__container">
          <h2 className="vq-safety__h2">FAQ</h2>

          <div className="vq-safety__faq">
            <details className="vq-safety__details">
              <summary className="vq-safety__summary">Are suction cup grab bars safe?</summary>
              <p className="vq-safety__textMuted">
                Suction cups can lose hold depending on surface condition and moisture.
                For real load-bearing support, we install stud-anchored grab bars.
              </p>
            </details>

            <details className="vq-safety__details">
              <summary className="vq-safety__summary">Will drilling crack my tile?</summary>
              <p className="vq-safety__textMuted">
                We use the right bits, technique, and pacing to drill cleanly through tile and mount securely.
              </p>
            </details>

            <details className="vq-safety__details">
              <summary className="vq-safety__summary">How long does installation take?</summary>
              <p className="vq-safety__textMuted">
                Most installs are quick. Timing depends on the number of bars and your wall construction.
              </p>
            </details>

            <details className="vq-safety__details">
              <summary className="vq-safety__summary">What areas do you serve?</summary>
              <p className="vq-safety__textMuted">Colorado Front Range.</p>
            </details>
          </div>
        </div>
      </section>

<section className="vq-safety__section">
  <div className="vq-safety__container">
    <h2 className="vq-safety__h2">Is this the right solution for you?</h2>
    <div className="vq-safety__grid3">
      <div className="vq-safety__card">
        <h3 className="vq-safety__h3">This is a great fit if you:</h3>
        <ul className="vq-safety__bullets">
          <li>Feel unsteady stepping into or out of your tub or shower</li>
          <li>Want real support without a full remodel</li>
          <li>Don’t trust suction-cup grab bars</li>
          <li>Care for an aging parent or loved one</li>
        </ul>
      </div>

      <div className="vq-safety__card">
        <h3 className="vq-safety__h3">This may not be ideal if you:</h3>
        <ul className="vq-safety__bullets">
          <li>Are planning a full bathroom remodel right now</li>
          <li>Only want a temporary or removable solution</li>
          <li>Need medical or assisted-living equipment</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="vq-safety__section vq-safety__sectionAlt">
  <div className="vq-safety__container">
    <h2 className="vq-safety__h2">What happens when you call</h2>

    <div className="vq-safety__steps">
      <div className="vq-safety__step">
        <div className="vq-safety__stepNum">1</div>
        <p className="vq-safety__textMuted">
          We ask a few quick questions about your bathroom and where you feel unsafe.
        </p>
      </div>

      <div className="vq-safety__step">
        <div className="vq-safety__stepNum">2</div>
        <p className="vq-safety__textMuted">
          We confirm placement, bar type, and installation approach.
        </p>
      </div>

      <div className="vq-safety__step">
        <div className="vq-safety__stepNum">3</div>
        <p className="vq-safety__textMuted">
          If it’s a good fit, we schedule your install — often within 48 Hours!
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="vq-safety__section">
        <div className="vq-safety__container">
          <div className="vq-safety__finalCta">
            <div>
              <h2 className="vq-safety__h2" style={{ marginBottom: 8 }}>
                Ready for a safer bath or shower?
              </h2>
              <p className="vq-safety__textMuted" style={{ marginTop: 0 }}>
                Commercial-grade stainless steel grab bars, anchored into studs, installed through existing tile.
              </p>
              <p className="vq-safety__textMuted" style={{ marginTop: 8, fontSize: 13 }}>
                Program availability may vary by schedule and service area.
              </p>
            </div>

            <div className="vq-safety__finalActions">
              <a className="vq-safety__btnPrimary" href={PHONE_TEL}>
                Call to Schedule Your Install
              </a>
              <a className="vq-safety__btnSecondary" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
              <div className="vq-safety__textMuted" style={{ fontSize: 13 }}>
                Colorado Front Range
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local styles scoped to this page via classnames */}
      <style>{`
        .vq-safety { color: inherit; }
        .vq-safety__container { max-width: 1080px; margin: 0 auto; padding: 0 20px; }

        .vq-safety__hero { padding: 72px 0 48px; border-bottom: 1px solid rgba(0,0,0,.12); }
        .vq-safety__badge {
          display: inline-block; font-size: 13px; letter-spacing: .02em;
          border: 1px solid rgba(0,0,0,.18);
          padding: 8px 12px; border-radius: 999px; margin-bottom: 18px;
          opacity: .85;
        }
  .vq-safety__videoWrap {
  max-width: 520px;
  width: 100%;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 22px;
  overflow: hidden;
  background: rgba(0,0,0,.02);

  /* IMPORTANT: force visible height */
  aspect-ratio: 9 / 16;
  margin-bottom: 14px;
}
.vq-safety__videoSection h2 {
  margin-bottom: 12px;
}

.vq-safety__videoSection p {
  margin-bottom: 18px;
}
.vq-safety__video {
  display: block;
  width: 100%;
  height: 100%;         /* IMPORTANT */
  object-fit: cover;    /* looks good if aspect ratios differ */
  background: #000;     /* avoids “blank white” while loading */
}


        .vq-safety__ctaRow { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; margin-top: 18px; }
        .vq-safety__ctaRowCenter { justify-content: center; }

        .vq-safety__btnPrimary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 18px; border-radius: 12px;
          font-weight: 800; text-decoration: none;
          background: #111; color: #fff;
          border: 1px solid rgba(0,0,0,.2);
        }
        .vq-safety__btnSecondary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 16px; border-radius: 12px;
          font-weight: 800; text-decoration: none;
          background: transparent; color: inherit;
          border: 1px solid rgba(0,0,0,.18);
        }
        .vq-safety__phoneBlock { display: grid; gap: 2px; }
        .vq-safety__phoneLabel { font-size: 12px; opacity: .75; }
        .vq-safety__phone { font-size: 16px; font-weight: 800; text-decoration: none; color: inherit; }

        .vq-safety__microcopy { margin-top: 16px; font-size: 13px; opacity: .75; }

        .vq-safety__section { padding: 54px 0; }
        .vq-safety__sectionAlt { background: rgba(0,0,0,.03); border-top: 1px solid rgba(0,0,0,.12); border-bottom: 1px solid rgba(0,0,0,.12); }

        .vq-safety__grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 12px; }
        .vq-safety__card { border: 1px solid rgba(0,0,0,.12); border-radius: 16px; padding: 18px; background: rgba(0,0,0,.02); }
        .vq-safety__textMuted { opacity: .82; }

        .vq-safety__note {
          margin-top: 18px; padding: 14px 16px;
          border: 1px dashed rgba(0,0,0,.22);
          border-radius: 14px; background: rgba(0,0,0,.02);
          opacity: .9;
        }
.vq-safety__videoRow{
  display: flex;
  gap: 18px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
}

.vq-safety__videoCol{
  flex: 1 1 380px;
  min-width: 320px;
}

/* Your existing .vq-safety__videoWrap and .vq-safety__video styles can stay.
   If your .vq-safety__videoWrap currently has max-width: 380px, that’s fine. */

/* Offer card: make it visually distinct */
.vq-safety__offerCard{
  flex: 0 1 420px;
  border-radius: 22px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.06));
  border: 2px solid rgba(0,0,0,.16);
  box-shadow: 0 10px 26px rgba(0,0,0,.10);
}

/* Top badge and %: give them "label" energy */
.vq-safety__offerBadge{
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 900;
  letter-spacing: .02em;

  background: linear-gradient(180deg, #ff9f1c, #f77f00);
  color: #1a1a1a;

  border: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 4px 10px rgba(247,127,0,.35);
}


.vq-safety__offerPercent{
  font-weight: 900;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(0,0,0,.08);
  border: 1px solid rgba(0,0,0,.14);
}

/* Price box: give it contrast */
.vq-safety__offerPriceBox{
  border-radius: 18px;
  padding: 14px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.14);
}

/* Final price: make it the hero */
.vq-safety__offerFinalValue{
  font-size: 46px;
  line-height: 1.0;
  font-weight: 900;
  letter-spacing: -0.02em;
}

/* CTA on the card: thicker + more prominent */
.vq-safety__offerCta{
  width: 100%;
  margin-top: 6px;
  padding: 16px 18px;
  border-radius: 14px;
}

/* Fine print: tighten */
.vq-safety__offerFinePrint{
  margin-top: 10px;
  font-size: 12px;
  opacity: .75;
  line-height: 1.4;
}
.vq-safety__offerTop{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.vq-safety__offerLine{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 8px 0;
  font-size: 14px;
}

.vq-safety__offerLabel{ opacity: .85; }

.vq-safety__offerStrike{
  text-decoration: line-through;
  font-weight: 800;
  opacity: .75;
}

.vq-safety__offerMinus{
  font-weight: 900;
}

.vq-safety__offerDivider{
  height: 1px;
  background: rgba(0,0,0,.14);
  margin: 12px 0;
}

.vq-safety__offerFinalLabel{
  font-size: 12px;
  opacity: .8;
  margin-bottom: 4px;
}

.vq-safety__offerFinalSub{
  margin-top: 6px;
  font-size: 13px;
  opacity: .85;
}

.vq-safety__offerBullets{
  margin: 0 0 14px;
  padding-left: 18px;
}

.vq-safety__offerBullets li{
  margin: 8px 0;
}

@media (max-width: 900px){
  .vq-safety__offerCard{ flex: 1 1 100%; }
}
        .vq-safety__steps { display: grid; gap: 12px; margin-top: 14px; }
        .vq-safety__step {
          display: grid; grid-template-columns: 44px 1fr; gap: 12px;
          border: 1px solid rgba(0,0,0,.12);
          border-radius: 16px; padding: 16px; background: rgba(0,0,0,.02);
        }
        .vq-safety__stepNum {
          width: 44px; height: 44px; border-radius: 14px;
          display: grid; place-items: center;
          border: 1px solid rgba(0,0,0,.14);
          font-weight: 900;
          background: rgba(0,0,0,.02);
        }

        .vq-safety__faq { display: grid; gap: 10px; margin-top: 10px; }
        .vq-safety__details { border: 1px solid rgba(0,0,0,.12); border-radius: 14px; padding: 12px 14px; background: rgba(0,0,0,.02); }
        .vq-safety__summary { cursor: pointer; font-weight: 800; }
        .vq-safety__details p { margin: 10px 0 0; }

        .vq-safety__finalCta {
          margin-top: 22px;
          border: 1px solid rgba(0,0,0,.12);
          border-radius: 22px;
          padding: 22px;
          background: rgba(0,0,0,.02);
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 18px;
          align-items: start;
        }
        .vq-safety__finalActions { display: grid; gap: 10px; }

        @media (max-width: 900px) {
          .vq-safety__grid3 { grid-template-columns: 1fr; }
          .vq-safety__finalCta { grid-template-columns: 1fr; }
          .vq-safety__hero { padding-top: 54px; }
        }
      `}</style>
    </main>
  );
}
