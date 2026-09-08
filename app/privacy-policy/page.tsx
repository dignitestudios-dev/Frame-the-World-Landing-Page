import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Frame The World",
  description:
    "Read the Privacy Policy of Frame The World and learn how we collect, use, store, and protect your information.",
  keywords: [
    "privacy policy",
    "data privacy",
    "user data",
    "Frame The World",
    "photo sharing",
  ],
  openGraph: {
    title: "Privacy Policy | Frame The World",
    description:
      "Learn how Frame The World handles and protects your personal information.",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Title */}
        <div className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            FRAME THE WORLD PRIVACY POLICY
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Last Updated: 09/07/2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* 1. INTRODUCTION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              1. INTRODUCTION
            </h2>
            <p>
              This Privacy Policy explains how Frame The World, LLC (
              <strong>&ldquo;we,&rdquo; &ldquo;our,&rdquo;</strong> or{" "}
              <strong>&ldquo;us&rdquo;</strong>) collects, uses, and protects
              information when you access or use our website{" "}
              <a
                href="https://frametheworld.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://frametheworld.org
              </a>{" "}
              and mobile application (the <strong>&ldquo;Services&rdquo;</strong>).
            </p>
            <p>
              By accessing or using the Services, you agree to this Privacy
              Policy.
            </p>
          </div>

          {/* 2. INTENDED AUDIENCE & JURISDICTION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              2. INTENDED AUDIENCE &amp; JURISDICTION
            </h2>
            <p>
              Our Services are designed for and directed to users located in the
              United States. We do not target or market the Services to
              individuals outside the United States.
            </p>
            <p>
              If you access the Services from outside the U.S., you understand
              that your information will be transferred to and processed in the
              United States under U.S. law.
            </p>
          </div>

          {/* 3. INFORMATION WE COLLECT */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              3. INFORMATION WE COLLECT
            </h2>
            <p>
              We collect two categories of information: Personal Information and
              User Content. We may also collect limited anonymized or aggregated
              analytics information from visitors who do not create accounts or
              log in. This information does not identify individual users.
            </p>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">
                3.1 Personal Information
              </h3>
              <p>
                <strong>&ldquo;Personal Information&rdquo;</strong> means
                information you provide or that we process in an identifiable
                manner when you create or manage an account, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Securely hashed password</li>
                <li>Phone number</li>
                <li>Subscription plan selections</li>
                <li>
                  Authentication data (including Google or Apple credentials
                  limited to name, email and tokens)
                </li>
                <li>
                  Payment information provided to and processed by our
                  third-party processors
                </li>
                <li>
                  Identity or credential numbers you provide (e.g., IATA, CLIA)
                </li>
                <li>Device and browser information</li>
                <li>IP address</li>
                <li>App and website log data</li>
                <li>Search and usage activity</li>
                <li>Crash diagnostics</li>
                <li>Subscription and account activity</li>
              </ul>
              <p>
                For visitors who do not create accounts or log in, technical data
                is collected only in anonymized or aggregated form and is not used
                to identify individuals. We do not store your full payment card
                details.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">
                3.2 User Content (Photos &amp; Metadata)
              </h3>
              <p>
                <strong>&ldquo;User Content&rdquo;</strong> includes any photos,
                tags, descriptions, and other materials you upload to the
                Services. When you upload photos, we process:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The image file</li>
                <li>
                  Limited embedded metadata, such as timestamp and file type.
                  Location metadata contained in image files is not intentionally
                  extracted or used and may be removed during processing.
                </li>
                <li>Tags, destinations, categories, and locations you enter</li>
                <li>
                  Metadata provided by integrated APIs (such as place name,
                  address, and coordinates from Google Places when a user
                  selects a location)
                </li>
              </ul>
            </div>
          </div>

          {/* 4. HOW WE USE YOUR INFORMATION */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              4. HOW WE USE YOUR INFORMATION
            </h2>
            <p>We use Personal Information and User Content to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve the Services</li>
              <li>Store, process, organize, and deliver your photos</li>
              <li>Enable search, discovery, and tagging features</li>
              <li>Verify identity and professional credentials</li>
              <li>
                Support automated tools, including human-presence detection,
                image cleanup, and user-selected location tagging
              </li>
              <li>Process payments and manage account status</li>
              <li>
                Send important notices related to your account or the Services
              </li>
              <li>Enforce our Terms and policies</li>
              <li>Detect and prevent fraud, abuse, or illegal activities</li>
            </ul>
            <p>
              Authorized administrator personnel may access Personal Information
              and User Content as reasonably necessary to moderate content,
              respond to user reports, troubleshoot issues, enforce legal
              requirements, and protect the security of the Services. All
              administrator actions are logged and monitored.
            </p>
            <p>
              We do not &ldquo;sell&rdquo; or &ldquo;share&rdquo; Personal
              Information as defined under the California Consumer Privacy Act
              (CCPA/CPRA).
            </p>
          </div>

          {/* 5. PHOTO PROCESSING & AI TOOLS */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              5. PHOTO PROCESSING &amp; AI TOOLS
            </h2>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                5.1 Automated Detection
              </h3>
              <p>
                We use automated tools such as third-party image analysis
                services to detect whether a photo contains a human figure. If a
                human figure is detected, you may be prompted to edit the image
                using tools we provide. We do not use these tools to identify
                individuals, perform facial recognition, authenticate users, or
                determine the identity of any person in a photo.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                5.2 Third-Party AI Services
              </h3>
              <p>
                We use third-party API providers to support specific features,
                such as image detection, cleanup editing, and location services.
                These providers process data on our behalf and are contractually
                restricted to using it only to provide the Services. We take
                reasonable steps to prevent User Content from being used to train
                or improve unrelated AI models.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                5.3 Location Metadata &amp; APIs
              </h3>
              <p>
                Users may choose to associate photos with locations using search
                and selection tools powered by Google Places. When a user
                selects a location, we receive the place name, address, and
                coordinates from Google in order to label and organize the
                photo. This information comes from Google&apos;s place database,
                not from the user&apos;s device or the photo&apos;s embedded
                metadata.
              </p>
            </div>
          </div>

          {/* 6. HOW WE SHARE INFORMATION */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              6. HOW WE SHARE INFORMATION
            </h2>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                6.1 Service Providers
              </h3>
              <p>
                We share information with service providers performing functions
                on our behalf, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud hosting and storage providers</li>
                <li>Payment processors</li>
                <li>Identity and credential verification services</li>
                <li>AI and image processing vendors</li>
                <li>Analytics and performance monitoring services</li>
              </ul>
              <p>
                These third parties act as service providers, not data brokers,
                and may only process information under our instructions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                6.2 Other Users
              </h3>
              <p>
                Content and associated metadata you upload is visible to other
                verified users. User Content may appear in search results and
                other verified users may download it. Once downloaded, we cannot
                guarantee how other users use, share, or distribute that content.
                If another user has already downloaded your User Content, those
                copies cannot be revoked even if you later delete your account.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                6.3 Legal Obligations
              </h3>
              <p>
                We may disclose your information if we determine it is
                reasonably necessary to comply with legal obligations, respond
                to appropriate government requests, prevent harm, or protect
                our rights.
              </p>
            </div>
          </div>

          {/* 7. DATA STORAGE & SECURITY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              7. DATA STORAGE &amp; SECURITY
            </h2>
            <p>
              We store Personal Information and User Content using reputable
              cloud infrastructure located in the United States. We implement
              safeguards including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encrypted data storage</li>
              <li>Secure access controls</li>
              <li>Monitoring and logging</li>
              <li>Secure password hashing</li>
            </ul>
            <p>
              However, no system is completely secure. We will notify affected
              users of data breaches as required by applicable law.
            </p>
          </div>

          {/* 8. DATA RETENTION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              8. DATA RETENTION
            </h2>
            <p>
              We retain Personal Information and User Content for as long as
              necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide the Services</li>
              <li>Maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
            </ul>
            <p>
              When you delete User Content or your account, the content is
              removed from user-accessible systems and enters a soft-delete
              period of up to 2 months, during which it is inaccessible to
              users but may be restored upon request. After that period, the
              content is permanently deleted from active systems.
            </p>
          </div>

          {/* 9. COOKIES AND SIMILAR TECHNOLOGIES */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              9. COOKIES AND SIMILAR TECHNOLOGIES
            </h2>
            <p>
              We use cookies, SDKs, and similar technologies to operate the
              Services, maintain security, monitor performance, and diagnose
              crashes. These technologies are not used for behavioral
              advertising, profiling, or tracking users across other services.
              You can control cookies through your browser or device settings.
            </p>
          </div>

          {/* 10. YOUR RIGHTS (U.S. RESIDENTS) */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              10. YOUR RIGHTS (U.S. RESIDENTS)
            </h2>
            <p>Depending on where you live, you may request:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access to your Personal Information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of certain Personal Information</li>
              <li>A portable copy of your data</li>
              <li>Information about how we collect and use data</li>
            </ul>
            <p>Submit requests to:</p>
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
              <p className="text-gray-400 text-xs">— or —</p>
              <p>
                <strong>Frame The World, LLC</strong>
              </p>
              <p>Attn: Privacy Officer</p>
              <p>416 W. Main St., Tomball, TX 77375</p>
              <p className="text-xs text-gray-500 mt-2">
                We may verify your identity before processing your request.
              </p>
            </div>
          </div>

          {/* 11. CHILDREN'S PRIVACY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              11. CHILDREN&apos;S PRIVACY
            </h2>
            <p>
              The Services are intended for users 18 and older. We do not
              knowingly collect information from minors.
            </p>
          </div>

          {/* 12. CHANGES TO THIS POLICY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              12. CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy periodically. Updated versions
              become effective when posted to the website or app.
            </p>
          </div>

          {/* 13. CONTACT US */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              13. CONTACT US
            </h2>
            <div className="space-y-1 pl-4">
              <p className="font-semibold text-gray-900">
                Frame The World, LLC
              </p>
              <p>Attn: Privacy Officer</p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@frametheworld.org"
                  className="text-blue-600 hover:underline"
                >
                  privacy@frametheworld.org
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:8326089209"
                  className="text-blue-600 hover:underline"
                >
                  832-608-9209
                </a>
              </p>
              <p>
                <strong>Address:</strong> 416 W. Main St., Tomball, TX 77375
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

