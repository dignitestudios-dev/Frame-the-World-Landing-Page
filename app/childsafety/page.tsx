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
  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Title */}
        <div className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            FRAME THE WORLD CHILD SAFETY &amp; PROTECTION POLICY
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Last Updated: June 10, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Preamble */}
          <div className="space-y-4">
            <p>
              At Frametheworld, we take child safety and online protection
              seriously. We are committed to ensuring a safe and secure
              environment for all users and strictly enforce policies to prevent{" "}
              <strong className="text-gray-900">
                Child Sexual Abuse and Exploitation (CSAE)
              </strong>
              .
            </p>
          </div>

          {/* 1. AGE RESTRICTIONS */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              1. AGE RESTRICTIONS
            </h2>
            <p>
              Frametheworld is intended for users of all ages, including
              children under 13.
            </p>
            <p>
              We do not knowingly allow minors to use our platform without
              parental knowledge or supervision.
            </p>
            <p>
              If we discover that a minor has registered and is being exposed to
              harmful or inappropriate content, we reserve the right to remove
              the account or limit its access immediately.
            </p>
          </div>

          {/* 2. CONTENT MODERATION & REPORTING */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              2. CONTENT MODERATION &amp; REPORTING
            </h2>
            <p>
              We have strict guidelines and enforcement mechanisms to prevent
              harmful content on Frametheworld:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Prohibited Content:</strong> Any content involving
                child exploitation, nudity, or abuse is strictly forbidden and
                will be removed immediately and reported to relevant law
                enforcement or child protection agencies.
              </li>
              <li>
                <strong>User Reporting System:</strong> All users can report
                any suspicious, harmful, or unsafe activity or content. Every
                report is reviewed promptly, and appropriate action is taken,
                including banning accounts and notifying authorities when
                necessary.
              </li>
            </ul>
          </div>

          {/* 3. USER SAFETY MEASURES */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              3. USER SAFETY MEASURES
            </h2>
            <p>
              To safeguard all users, including minors, we have implemented the
              following protocols:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Profile Verification:</strong> We take steps to
                discourage fake accounts and impersonation through registration
                validation.
              </li>
              <li>
                <strong>Chat &amp; Interaction Controls:</strong> Users can
                block, mute, or report others if they feel unsafe or threatened in
                any way.
              </li>
              <li>
                <strong>Live Stream Monitoring:</strong> Our team monitors live
                sessions using a mix of automated alerts and user feedback to
                prevent misuse of the feature.
              </li>
              <li>
                <strong>Data Protection &amp; Privacy:</strong> Frametheworld
                does not sell or share personal data with third parties unless
                required by law or consented by the user. Our practices are
                aligned with COPPA and GDPR standards.
              </li>
            </ul>
          </div>

          {/* 4. COMPLIANCE & LAW ENFORCEMENT COLLABORATION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              4. COMPLIANCE &amp; LAW ENFORCEMENT COLLABORATION
            </h2>
            <p>
              Frametheworld complies with child protection laws and platform
              policies including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>COPPA</li>
              <li>GDPR</li>
              <li>Google Play CSAE Policy</li>
              <li>Apple App Store CSAE Policy</li>
            </ul>
            <p>
              Any violations involving child abuse or exploitation are
              immediately reported to law enforcement agencies and child
              protection organizations.
            </p>
          </div>

          {/* 5. CONTACT FOR CHILD SAFETY CONCERNS */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              5. CONTACT FOR CHILD SAFETY CONCERNS
            </h2>
            <p>
              If you have concerns or inquiries regarding child safety on
              Frametheworld, please contact our team at:
            </p>
            <div className="space-y-1 pl-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@frametheworld.org"
                  className="text-blue-600 hover:underline"
                >
                  info@frametheworld.org
                </a>
              </p>
            </div>
            <p>
              We are committed to maintaining a secure and positive environment
              for all users and are continuously working to improve our child
              safety policies and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

