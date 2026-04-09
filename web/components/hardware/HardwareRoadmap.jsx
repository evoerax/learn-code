"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { HARDWARE_ROADMAP } from "./hardware-roadmap-data.js";

const STORAGE_KEY = "hardware-roadmap-checked-v1";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7.5L5.5 10.5L11.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      style={{
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
      }}
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HardwareRoadmap() {
  const [expanded, setExpanded] = useState({});
  const [checked, setChecked] = useState({});
  const [hydrated, setHydrated] = useState(false);
  const [activeLayer, setActiveLayer] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, hydrated]);

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));
  const check = useCallback((key) => setChecked((p) => ({ ...p, [key]: !p[key] })), []);

  const getProgress = (layer) => {
    let total = 0;
    let done = 0;
    layer.sections.forEach((s, si) =>
      s.topics.forEach((_, ti) => {
        total++;
        if (checked[`${layer.id}-${si}-${ti}`]) done++;
      }),
    );
    return total ? Math.round((done / total) * 100) : 0;
  };

  const totalTopics = HARDWARE_ROADMAP.reduce(
    (a, l) => a + l.sections.reduce((b, s) => b + s.topics.length, 0),
    0,
  );
  const totalDone = Object.values(checked).filter(Boolean).length;
  const globalPct = totalTopics ? Math.round((totalDone / totalTopics) * 100) : 0;

  const scrollToLayer = (id) => {
    setActiveLayer(id);
    const el = document.getElementById(`hw-roadmap-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const nodes = HARDWARE_ROADMAP.map((l) => document.getElementById(`hw-roadmap-${l.id}`)).filter(Boolean);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id?.startsWith("hw-roadmap-")) {
          setActiveLayer(visible.target.id.replace("hw-roadmap-", ""));
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="hardware-roadmap-root"
      style={{
        fontFamily: "'Newsreader', 'Noto Serif SC', Georgia, serif",
        background: "var(--bg, #0F0F0F)",
        color: "var(--fg, #E0DDD5)",
        minHeight: "70vh",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,500;0,6..72,700;1,6..72,300&family=Noto+Serif+SC:wght@300;500;700&family=JetBrains+Mono:wght@400&display=swap');
        .hardware-roadmap-root {
          --hr-bg: #0F0F0F; --hr-fg: #E0DDD5; --hr-muted: #6B6860; --hr-card: #1A1918; --hr-border: #2A2825;
        }
        @media (prefers-color-scheme: light) {
          .hardware-roadmap-root {
            --hr-bg: #F5F2EB; --hr-fg: #1A1918; --hr-muted: #8A8680; --hr-card: #FFFFFF; --hr-border: #D8D4CC;
          }
        }
        .hardware-roadmap-root { --bg: var(--hr-bg); --fg: var(--hr-fg); --muted: var(--hr-muted); --card: var(--hr-card); --border: var(--hr-border); }
        .hardware-roadmap-root * { box-sizing: border-box; }
        .hardware-roadmap-root .topic-item { display: flex; align-items: flex-start; gap: 8px; padding: 6px 0; cursor: pointer; transition: opacity 0.15s; }
        .hardware-roadmap-root .topic-item:hover { opacity: 0.8; }
        .hardware-roadmap-root .cb { width: 18px; height: 18px; border-radius: 4px; border: 1.5px solid var(--muted); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; margin-top: 2px; }
        .hardware-roadmap-root .cb.on { border-color: currentColor; }
        .hardware-roadmap-root .section-head { cursor: pointer; display: flex; align-items: center; gap: 8px; padding: 10px 0; user-select: none; }
        .hardware-roadmap-root .section-head:hover { opacity: 0.85; }
        .hardware-roadmap-root .nav-dot { width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: all 0.25s; border: 1.5px solid var(--muted); }
        .hardware-roadmap-root .nav-dot:hover, .hardware-roadmap-root .nav-dot.active { transform: scale(1.4); }
        .hardware-roadmap-root .layer-card { border: 1px solid var(--border); border-radius: 12px; padding: 28px; background: var(--card); margin-bottom: 16px; transition: border-color 0.3s; }
        .hardware-roadmap-root .layer-card:hover { border-color: var(--muted); }
        .hardware-roadmap-root .progress-bar { height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; }
        .hardware-roadmap-root .progress-fill { height: 100%; border-radius: 2px; transition: width 0.4s ease; }
        .hardware-roadmap-root .mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 16px" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
          className="mono"
        >
          FROM ZERO → MASTERY
        </p>
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          智能硬件完全精通路线
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--muted)",
            lineHeight: 1.6,
            maxWidth: 520,
            marginBottom: 28,
          }}
        >
          覆盖 11 大知识域、50+ 子方向、200+ 核心技能点。勾选已掌握的条目；进度保存在本机浏览器的 localStorage（同域名下刷新仍保留）。
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${globalPct}%`,
                  background: "linear-gradient(90deg, #C47A5A, #5A8E8E, #8E6B8E)",
                }}
              />
            </div>
          </div>
          <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {totalDone}/{totalTopics} · {globalPct}%
          </span>
        </div>

        <div
          ref={navRef}
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            padding: "18px 0 8px",
            flexWrap: "wrap",
          }}
          role="navigation"
          aria-label="路线层级"
        >
          {HARDWARE_ROADMAP.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToLayer(l.id)}
              title={l.title}
              className={`nav-dot ${activeLayer === l.id ? "active" : ""}`}
              style={{
                background: getProgress(l) > 0 ? l.color : "transparent",
                borderColor: l.color,
                padding: 0,
                margin: 0,
                cursor: "pointer",
              }}
              aria-current={activeLayer === l.id ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 48px" }}>
        {HARDWARE_ROADMAP.map((layer) => {
          const pct = getProgress(layer);
          return (
            <div key={layer.id} id={`hw-roadmap-${layer.id}`} className="layer-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 4,
                }}
              >
                <div>
                  <p
                    className="mono"
                    style={{ fontSize: 10, letterSpacing: 3, color: layer.color, marginBottom: 6 }}
                  >
                    {layer.subtitle}
                  </p>
                  <h2 style={{ fontSize: 22, fontWeight: 700 }}>{layer.title}</h2>
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: pct === 100 ? layer.color : "var(--muted)",
                    marginTop: 18,
                  }}
                >
                  {pct}%
                </span>
              </div>

              <div className="progress-bar" style={{ marginTop: 12, marginBottom: 20 }}>
                <div className="progress-fill" style={{ width: `${pct}%`, background: layer.color }} />
              </div>

              {layer.sections.map((sec, si) => {
                const secKey = `${layer.id}-sec-${si}`;
                const isOpen = expanded[secKey];
                const secDone = sec.topics.filter((_, ti) => checked[`${layer.id}-${si}-${ti}`]).length;
                return (
                  <div key={secKey} style={{ borderTop: si > 0 ? "1px solid var(--border)" : "none" }}>
                    <div className="section-head" onClick={() => toggle(secKey)} role="button" tabIndex={0}>
                      <ChevronIcon open={isOpen} />
                      <span style={{ flex: 1, fontSize: 15, fontWeight: 500 }}>{sec.name}</span>
                      <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>
                        {secDone}/{sec.topics.length}
                      </span>
                    </div>
                    {isOpen && (
                      <div style={{ paddingLeft: 24, paddingBottom: 8 }}>
                        {sec.topics.map((t, ti) => {
                          const tKey = `${layer.id}-${si}-${ti}`;
                          const on = !!checked[tKey];
                          return (
                            <div key={tKey} className="topic-item" onClick={() => check(tKey)}>
                              <div
                                className={`cb ${on ? "on" : ""}`}
                                style={{
                                  color: on ? layer.color : undefined,
                                  ...(on ? { background: layer.accent } : {}),
                                }}
                              >
                                {on && <CheckIcon />}
                              </div>
                              <span
                                style={{
                                  fontSize: 14,
                                  lineHeight: 1.5,
                                  color: on ? "var(--muted)" : "var(--fg)",
                                  textDecoration: on ? "line-through" : "none",
                                  transition: "all 0.2s",
                                }}
                              >
                                {t}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
