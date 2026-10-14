import { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import { FaXmark, FaFire, FaAward, FaRankingStar, FaCode, FaCheck, FaRotate } from "react-icons/fa6";
import leetcodeImg from "../assets/leetcode-progress.png";

const FALLBACK_STATS = {
  totalSolved: 109,
  totalQuestions: 4082,
  easySolved: 108,
  totalEasy: 971,
  mediumSolved: 1,
  totalMedium: 2128,
  hardSolved: 0,
  totalHard: 983,
  ranking: 1593164,
  submissions: 342,
  badges: 1,
  recentBadge: "50 Days Badge 2026",
  streak: 27,
  activeDays: 59,
  recentSubmissions: [
    { title: "Find Most Frequent Vowel and Consonant", status: "Accepted", lang: "python3", time: "Recent" },
    { title: "Second Largest Digit in a String", status: "Accepted", lang: "python3", time: "Recent" },
    { title: "Sum of Unique Elements", status: "Accepted", lang: "python3", time: "Recent" },
    { title: "Sum of Squares of Special Elements", status: "Accepted", lang: "python3", time: "Recent" },
    { title: "First Unique Character in a String", status: "Accepted", lang: "python3", time: "Recent" },
  ],
};

function LeetcodeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("dynamic"); // 'dynamic' | 'image'
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const handleManualRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/Parthiban__S");
      if (res.ok) {
        const data = await res.json();
        if (data && data.totalSolved !== undefined) {
          const recents = (data.recentSubmissions || [])
            .filter((sub) => sub.statusDisplay === "Accepted")
            .slice(0, 5)
            .map((sub) => ({
              title: sub.title,
              status: sub.statusDisplay,
              lang: sub.lang,
              time: "Live sync",
            }));

          setStats((prev) => ({
            ...prev,
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions || 4082,
            easySolved: data.easySolved ?? prev.easySolved,
            totalEasy: data.totalEasy || 971,
            mediumSolved: data.mediumSolved ?? prev.mediumSolved,
            totalMedium: data.totalMedium || 2128,
            hardSolved: data.hardSolved ?? prev.hardSolved,
            totalHard: data.totalHard || 983,
            ranking: data.ranking || prev.ranking,
            recentSubmissions: recents.length ? recents : prev.recentSubmissions,
          }));
          setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        }
      }
    } catch {
      // Fallback data preserved
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    let ignore = false;
    async function loadStats() {
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/Parthiban__S");
        if (res.ok && !ignore) {
          const data = await res.json();
          if (data && data.totalSolved !== undefined) {
            const recents = (data.recentSubmissions || [])
              .filter((sub) => sub.statusDisplay === "Accepted")
              .slice(0, 5)
              .map((sub) => ({
                title: sub.title,
                status: sub.statusDisplay,
                lang: sub.lang,
                time: "Live sync",
              }));

            setStats((prev) => ({
              ...prev,
              totalSolved: data.totalSolved,
              totalQuestions: data.totalQuestions || 4082,
              easySolved: data.easySolved ?? prev.easySolved,
              totalEasy: data.totalEasy || 971,
              mediumSolved: data.mediumSolved ?? prev.mediumSolved,
              totalMedium: data.totalMedium || 2128,
              hardSolved: data.hardSolved ?? prev.hardSolved,
              totalHard: data.totalHard || 983,
              ranking: data.ranking || prev.ranking,
              recentSubmissions: recents.length ? recents : prev.recentSubmissions,
            }));
            setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
          }
        }
      } catch {
        // Fallback data preserved
      }
    }

    loadStats();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      ignore = true;
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const easyPercent = Math.min(100, Math.round((stats.easySolved / stats.totalEasy) * 100));
  const mediumPercent = Math.min(100, Math.round((stats.mediumSolved / stats.totalMedium) * 100));
  const hardPercent = Math.min(100, Math.round((stats.hardSolved / stats.totalHard) * 100));

  return (
    <div className="leetcode-modal-overlay" onClick={onClose}>
      <div className="leetcode-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="leetcode-modal-header">
          <div className="leetcode-user-info">
            <div className="leetcode-logo-badge">
              <SiLeetcode />
            </div>
            <div>
              <h3>Parthiban__S</h3>
              <p className="leetcode-live-tag">
                <span className="live-pulse"></span>
                Day-by-Day Dynamic Sync
                {lastUpdated && ` • Updated at ${lastUpdated}`}
              </p>
            </div>
          </div>

          <div className="leetcode-header-actions">
            <button
              className="leetcode-refresh-btn"
              onClick={handleManualRefresh}
              title="Refresh live stats"
              disabled={loading}
            >
              <FaRotate className={loading ? "spin-icon" : ""} />
            </button>
            <button className="leetcode-close-btn" onClick={onClose} aria-label="Close modal">
              <FaXmark />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="leetcode-tabs">
          <button
            className={`leetcode-tab-btn ${activeTab === "dynamic" ? "active" : ""}`}
            onClick={() => setActiveTab("dynamic")}
          >
            ⚡ Live Dynamic Progress
          </button>
          <button
            className={`leetcode-tab-btn ${activeTab === "image" ? "active" : ""}`}
            onClick={() => setActiveTab("image")}
          >
            🖼️ Profile Screenshot
          </button>
        </div>

        {/* Modal Body */}
        <div className="leetcode-modal-body">
          {activeTab === "dynamic" ? (
            <div className="leetcode-dynamic-content">
              {/* Highlight Stats Row */}
              <div className="leetcode-summary-row">
                <div className="leetcode-circle-stat">
                  <div className="leetcode-big-number">{stats.totalSolved}</div>
                  <div className="leetcode-subtext">/{stats.totalQuestions} Solved</div>
                  <div className="leetcode-solved-badge">
                    <FaCheck /> Day-by-Day Progress
                  </div>
                </div>

                <div className="leetcode-bars-container">
                  <div className="leetcode-bar-item easy">
                    <div className="bar-labels">
                      <span className="bar-title">Easy</span>
                      <span className="bar-count">
                        <strong>{stats.easySolved}</strong> / {stats.totalEasy}
                      </span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill easy" style={{ width: `${Math.max(5, easyPercent)}%` }}></div>
                    </div>
                  </div>

                  <div className="leetcode-bar-item medium">
                    <div className="bar-labels">
                      <span className="bar-title">Medium</span>
                      <span className="bar-count">
                        <strong>{stats.mediumSolved}</strong> / {stats.totalMedium}
                      </span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill medium" style={{ width: `${Math.max(3, mediumPercent)}%` }}></div>
                    </div>
                  </div>

                  <div className="leetcode-bar-item hard">
                    <div className="bar-labels">
                      <span className="bar-title">Hard</span>
                      <span className="bar-count">
                        <strong>{stats.hardSolved}</strong> / {stats.totalHard}
                      </span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill hard" style={{ width: `${hardPercent}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="leetcode-metrics-grid">
                <div className="metric-box">
                  <FaRankingStar className="metric-icon" style={{ color: "#38bdf8" }} />
                  <div>
                    <div className="metric-label">Global Rank</div>
                    <div className="metric-value">#{stats.ranking.toLocaleString()}</div>
                  </div>
                </div>

                <div className="metric-box">
                  <FaAward className="metric-icon" style={{ color: "#a855f7" }} />
                  <div>
                    <div className="metric-label">Recent Badge</div>
                    <div className="metric-value">{stats.recentBadge}</div>
                  </div>
                </div>

                <div className="metric-box">
                  <FaFire className="metric-icon" style={{ color: "#f97316" }} />
                  <div>
                    <div className="metric-label">Active Days & Streak</div>
                    <div className="metric-value">{stats.activeDays} Days (Streak: {stats.streak})</div>
                  </div>
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="leetcode-recent-card">
                <div className="recent-header">
                  <h4>
                    <FaCode /> Recent Solved Problems
                  </h4>
                  <span className="realtime-badge">Real-time</span>
                </div>

                <div className="recent-list">
                  {stats.recentSubmissions.map((sub, idx) => (
                    <div className="recent-item" key={idx}>
                      <span className="recent-status-icon">✓</span>
                      <span className="recent-title">{sub.title}</span>
                      <span className="recent-lang">{sub.lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="leetcode-screenshot-content">
              <img
                src={leetcodeImg}
                alt="Parthiban LeetCode Profile Progress"
                className="leetcode-full-screenshot"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="leetcode-modal-footer">
          <a
            href="https://leetcode.com/u/Parthiban__S/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-leetcode-profile"
          >
            <SiLeetcode style={{ color: "#FFA116" }} />
            Open Official LeetCode Profile ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeetcodeModal;
