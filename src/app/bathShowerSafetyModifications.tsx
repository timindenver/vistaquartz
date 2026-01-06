// src/app/bathShowerSafetyModifications.tsx
import React from "react";

const PHONE_DISPLAY = "303-725-4368";
const PHONE_TEL = "tel:+13037254368";

export default function BathShowerSafetyModifications() {
  return (
    <main className="vq-safety">
      {/* HERO */}
      <section className="vq-safety__hero">
        <div className="vq-safety__container">
          <div className="vq-safety__badge">Colorado Front Range</div>

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
              <div className="vq-safety__phoneLabel">Prefer to talk now?</div>
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

      {/* DIFFERENTIATORS */}
      <section className="vq-safety__section">
        <div className="vq-safety__container">
          <h2 className="vq-safety__h2">What makes our installs different</h2>

          <div className="vq-safety__grid3">
            <div className="vq-safety__card">
              <h3 className="vq-safety__h3">Commercial-grade stainless steel</h3>
              <p className="vq-safety__textMuted">
                Durable, corrosion-resistant grab bars that feel solid and secure.
              </p>
            </div>

            <div className="vq-safety__card">
              <h3 className="vq-safety__h3">Installation into studs</h3>
              <p className="vq-safety__textMuted">
                We anchor into framing for maximum strength—no “hope and pray” hardware.
              </p>
            </div>

            <div className="vq-safety__card">
              <h3 className="vq-safety__h3">Tile-safe installation</h3>
              <p className="vq-safety__textMuted">
                Expert drilling and fastening through your existing tile surround without cracking it.
              </p>
            </div>
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
        .vq-safety__h1 { font-size: clamp(32px, 4vw, 52px); line-height: 1.08; margin: 0 0 14px; }
        .vq-safety__h2 { font-size: 28px; margin: 0 0 14px; }
        .vq-safety__h3 { font-size: 18px; margin: 0 0 8px; }
        .vq-safety__subhead { font-size: 18px; line-height: 1.55; margin: 0 0 18px; max-width: 860px; opacity: .9; }
        .vq-safety__bullets { margin: 18px 0 24px; padding-left: 18px; max-width: 860px; }
        .vq-safety__bullets li { margin: 8px 0; }

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
