export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <div id="s1" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              1
            </span>
            <h2 className="text-xl font-bold">Introduction</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>
              This Privacy Policy explains how Frame The World, LLC (
              <strong>"we," "our,"</strong> or <strong>"us"</strong>) collects,
              uses, and protects information when you access or use our website{" "}
              <a
                href="https://frametheworld.org"
                className="text-blue-600 hover:underline"
              >
                https://frametheworld.org
              </a>{" "}
              and mobile application (the <strong>"Services"</strong>).
            </p>
            <p>
              By accessing or using the Services, you agree to this Privacy
              Policy.
            </p>
          </div>
        </div>

        {/* S2 */}
        <div id="s2" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              2
            </span>
            <h2 className="text-xl font-bold">
              Intended Audience & Jurisdiction
            </h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
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
        </div>

        {/* S3 */}
        <div id="s3" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              3
            </span>
            <h2 className="text-xl font-bold">Information We Collect</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-5">
            <p>
              We collect two categories of information: Personal Information and
              User Content. We may also collect limited anonymized or aggregated
              analytics information from visitors who do not create accounts or
              log in. This information does not identify individual users.
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                3.1 Personal Information
              </h3>
              <p className="mb-3">
                <strong>"Personal Information"</strong> means information you
                provide or that we process in an identifiable manner when you
                create or manage an account, including:
              </p>
              <div className="space-y-1.5">
                {[
                  "Name",
                  "Email address",
                  "Securely hashed password",
                  "Phone number",
                  "Subscription plan selections",
                  "Authentication data (including Google or Apple credentials limited to name, email and tokens)",
                  "Payment information provided to and processed by our third-party processors",
                  "Identity or credential numbers you provide (e.g., IATA, CLIA)",
                  "Device and browser information",
                  "IP address",
                  "App and website log data",
                  "Search and usage activity",
                  "Crash diagnostics",
                  "Subscription and account activity",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                For visitors who do not create accounts or log in, technical
                data is collected only in anonymized or aggregated form and is
                not used to identify individuals. We do not store your full
                payment card details.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                3.2 User Content (Photos & Metadata)
              </h3>
              <p className="mb-3">
                <strong>"User Content"</strong> includes any photos, tags,
                descriptions, and other materials you upload to the Services.
                When you upload photos, we process:
              </p>
              <div className="space-y-1.5">
                {[
                  "The image file",
                  "Limited embedded metadata, such as timestamp and file type. Location metadata contained in image files is not intentionally extracted or used and may be removed during processing.",
                  "Tags, destinations, categories, and locations you enter",
                  "Metadata provided by integrated APIs (such as place name, address, and coordinates from Google Places when a user selects a location)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* S4 */}
        <div id="s4" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              4
            </span>
            <h2 className="text-xl font-bold">How We Use Your Information</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>We use Personal Information and User Content to:</p>
            <div className="space-y-1.5">
              {[
                "Provide, maintain, and improve the Services",
                "Store, process, organize, and deliver your photos",
                "Enable search, discovery, and tagging features",
                "Verify identity and professional credentials",
                "Support automated tools, including human-presence detection, image cleanup, and user-selected location tagging",
                "Process payments and manage account status",
                "Send important notices related to your account or the Services",
                "Enforce our Terms and policies",
                "Detect and prevent fraud, abuse, or illegal activities",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Authorized administrator personnel may access Personal Information
              and User Content as reasonably necessary to moderate content,
              respond to user reports, troubleshoot issues, enforce legal
              requirements, and protect the security of the Services. All
              administrator actions are logged and monitored.
            </p>
            <p>
              We do not "sell" or "share" Personal Information as defined under
              the California Consumer Privacy Act (CCPA/CPRA).
            </p>
          </div>
        </div>

        {/* S5 */}
        <div id="s5" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              5
            </span>
            <h2 className="text-xl font-bold">Photo Processing & AI Tools</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
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
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                5.2 Third-Party AI Services
              </h3>
              <p>
                We use third-party API providers to support specific features,
                such as image detection, cleanup editing, and location services.
                These providers process data on our behalf and are contractually
                restricted to using it only to provide the Services. We take
                reasonable steps to prevent User Content from being used to
                train or improve unrelated AI models.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                5.3 Location Metadata & APIs
              </h3>
              <p>
                Users may choose to associate photos with locations using search
                and selection tools powered by Google Places. When a user
                selects a location, we receive the place name, address, and
                coordinates from Google in order to label and organize the
                photo. This information comes from Google's place database, not
                from the user's device or the photo's embedded metadata.
              </p>
            </div>
          </div>
        </div>

        {/* S6 */}
        <div id="s6" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              6
            </span>
            <h2 className="text-xl font-bold">How We Share Information</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                6.1 Service Providers
              </h3>
              <p className="mb-3">
                We share information with service providers performing functions
                on our behalf, including:
              </p>
              <div className="space-y-1.5">
                {[
                  "Cloud hosting and storage providers",
                  "Payment processors",
                  "Identity and credential verification services",
                  "AI and image processing vendors",
                  "Analytics and performance monitoring services",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                These third parties act as service providers, not data brokers,
                and may only process information under our instructions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                6.2 Other Users
              </h3>
              <p>
                Content and associated metadata you upload is visible to other
                verified users. User Content may appear in search results and
                other verified users may download it. Once downloaded, we cannot
                guarantee how other users use, share, or distribute that
                content. If another user has already downloaded your User
                Content, those copies cannot be revoked even if you later delete
                your account.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#171717] mb-3 pb-1 border-b border-gray-100">
                6.3 Legal Obligations
              </h3>
              <p>
                We may disclose your information if we determine it is
                reasonably necessary to comply with legal obligations, respond
                to appropriate government requests, prevent harm, or protect our
                rights.
              </p>
            </div>
          </div>
        </div>

        {/* S7 */}
        <div id="s7" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              7
            </span>
            <h2 className="text-xl font-bold">Data Storage & Security</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>
              We store Personal Information and User Content using reputable
              cloud infrastructure located in the United States. We implement
              safeguards including:
            </p>
            <div className="space-y-1.5">
              {[
                "Encrypted data storage",
                "Secure access controls",
                "Monitoring and logging",
                "Secure password hashing",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              However, no system is completely secure. We will notify affected
              users of data breaches as required by applicable law.
            </p>
          </div>
        </div>

        {/* S8 */}
        <div id="s8" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              8
            </span>
            <h2 className="text-xl font-bold">Data Retention</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>
              We retain Personal Information and User Content for as long as
              necessary to:
            </p>
            <div className="space-y-1.5">
              {[
                "Provide the Services",
                "Maintain your account",
                "Comply with legal obligations",
                "Resolve disputes",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              When you delete User Content or your account, the content is
              removed from user-accessible systems and enters a soft-delete
              period of up to 2 months, during which it is inaccessible to users
              but may be restored upon request. After that period, the content
              is permanently deleted from active systems.
            </p>
          </div>
        </div>

        {/* S9 */}
        <div id="s9" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              9
            </span>
            <h2 className="text-xl font-bold">
              Cookies and Similar Technologies
            </h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed">
            <p>
              We use cookies, SDKs, and similar technologies to operate the
              Services, maintain security, monitor performance, and diagnose
              crashes. These technologies are not used for behavioral
              advertising, profiling, or tracking users across other services.
              You can control cookies through your browser or device settings.
            </p>
          </div>
        </div>

        {/* S10 */}
        <div id="s10" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              10
            </span>
            <h2 className="text-xl font-bold">Your Rights (U.S. Residents)</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed space-y-3">
            <p>Depending on where you live, you may request:</p>
            <div className="space-y-1.5">
              {[
                "Access to your Personal Information",
                "Correction of inaccurate data",
                "Deletion of certain Personal Information",
                "A portable copy of your data",
                "Information about how we collect and use data",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>Submit requests to:</p>
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
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
        </div>

        {/* S11 */}
        <div id="s11" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              11
            </span>
            <h2 className="text-xl font-bold">Children's Privacy</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed">
            <p>
              The Services are intended for users 18 and older. We do not
              knowingly collect information from minors.
            </p>
          </div>
        </div>

        {/* S12 */}
        <div id="s12" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              12
            </span>
            <h2 className="text-xl font-bold">Changes to This Policy</h2>
          </div>
          <div className="pl-11 text-gray-600 text-sm leading-relaxed">
            <p>
              We may update this Privacy Policy periodically. Updated versions
              become effective when posted to the website or app.
            </p>
          </div>
        </div>

        {/* S13 */}
        <div id="s13" className="mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-[#171717] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              13
            </span>
            <h2 className="text-xl font-bold">Contact Us</h2>
          </div>
          <div className="pl-11">
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-[#171717]">
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
