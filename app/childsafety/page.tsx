import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Policy | Frame The World",
  description:
    "Learn about Frame The World's commitment to child safety and protection.",
  keywords: [
    "child safety",
    "child protection",
    "online safety",
    "Frame The World",
  ],
  openGraph: {
    title: "Child Safety Policy | Frame The World",
    description: "Frame The World's Child Safety and Protection Policy.",
    type: "website",
  },
};

export default function ChildSafetyPolicy() {
  const lastUpdated = "June 10, 2026";

  const sections = [
    {
      id: "age",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Age Restrictions",
      content: [
        "Frametheworld is intended for users of all ages, including children under 13.",
        "We do not knowingly allow minors to use our platform without parental knowledge or supervision.",
        "If we discover that a minor has registered and is being exposed to harmful or inappropriate content, we reserve the right to remove the account or limit its access immediately.",
      ],
    },
    {
      id: "moderation",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Content Moderation & Reporting",
      intro:
        "We have strict guidelines and enforcement mechanisms to prevent harmful content on Frametheworld:",
      bullets: [
        {
          label: "Prohibited Content",
          text: "Any content involving child exploitation, nudity, or abuse is strictly forbidden and will be removed immediately and reported to relevant law enforcement or child protection agencies.",
        },
        {
          label: "User Reporting System",
          text: "All users can report any suspicious, harmful, or unsafe activity or content. Every report is reviewed promptly, and appropriate action is taken, including banning accounts and notifying authorities when necessary.",
        },
      ],
    },
    {
      id: "safety",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "User Safety Measures",
      intro:
        "To safeguard all users, including minors, we have implemented the following protocols:",
      bullets: [
        {
          label: "Profile Verification",
          text: "We take steps to discourage fake accounts and impersonation through registration validation.",
        },
        {
          label: "Chat & Interaction Controls",
          text: "Users can block, mute, or report others if they feel unsafe or threatened in any way.",
        },
        {
          label: "Live Stream Monitoring",
          text: "Our team monitors live sessions using a mix of automated alerts and user feedback to prevent misuse of the feature.",
        },
        {
          label: "Data Protection & Privacy",
          text: "Frametheworld does not sell or share personal data with third parties unless required by law or consented by the user. Our practices are aligned with COPPA and GDPR standards.",
        },
      ],
    },
    {
      id: "compliance",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "Compliance & Law Enforcement Collaboration",
      intro:
        "Frametheworld complies with child protection laws and platform policies including:",
      tags: [
        "COPPA",
        "GDPR",
        "Google Play CSAE Policy",
        "Apple App Store CSAE Policy",
      ],
      footer:
        "Any violations involving child abuse or exploitation are immediately reported to law enforcement agencies and child protection organizations.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* ── Hero ── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-14 sm:py-20">
          {/* shield badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                clipRule="evenodd"
              />
            </svg>
            Child Safety
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug mb-4">
            Child Safety &amp; Protection Policy
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Last updated:{" "}
            <span className="text-slate-700 font-medium">{lastUpdated}</span>
          </p>

          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            At Frametheworld, we take child safety and online protection
            seriously. We are committed to ensuring a safe and secure
            environment for all users and strictly enforce policies to prevent{" "}
            <strong className="text-slate-800 font-semibold">
              Child Sexual Abuse and Exploitation (CSAE)
            </strong>
            .
          </p>
        </div>
      </section>

      {/* ── Policy Sections ── */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
        {sections.map((sec) => (
          <article
            key={sec.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            {/* Section header */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                {sec.icon}
              </span>
              <h2 className="text-base font-semibold text-slate-900">
                {sec.title}
              </h2>
            </div>

            {/* Section body */}
            <div className="px-6 py-5 space-y-4">
              {/* Plain paragraph list */}
              {sec.content &&
                sec.content.map((para, i) => (
                  <p key={i} className="text-slate-600 text-sm leading-relaxed">
                    {para}
                  </p>
                ))}

              {/* Intro + bullet list */}
              {sec.intro && (
                <p className="text-slate-600 text-sm leading-relaxed">
                  {sec.intro}
                </p>
              )}

              {sec.bullets && (
                <ul className="space-y-3">
                  {sec.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-slate-600 leading-relaxed bg-slate-50 rounded-xl px-4 py-3"
                    >
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 translate-y-1.5" />
                      <span>
                        <span className="font-semibold text-slate-800">
                          {b.label}:{" "}
                        </span>
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Compliance tags */}
              {sec.tags && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {sec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {sec.footer && (
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  {sec.footer}
                </p>
              )}
            </div>
          </article>
        ))}

        {/* ── Contact Card ── */}
        <article className="bg-blue-600 rounded-2xl overflow-hidden text-white">
          <div className="px-6 py-8 ">
            <div className="mb-5 sm:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 opacity-80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-base font-semibold">
                  Contact for Child Safety Concerns
                </h2>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed max-w-">
                If you have concerns or inquiries regarding child safety on
                Frametheworld, please contact our team at{" "}
                <a
                  href="mailto:info@frametheworld.org"
                  className="font-bold text-white"
                >
                  info@frametheworld.org
                </a>
                . We are committed to maintaining a secure and positive
                environment for all users and are continuously working to
                improve our child safety policies and tools.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* ── Footer note ── */}
    </main>
  );
}
