import Footer from "../component/Footer";
import Navbar from "../component/Navbar"

export default function PrivacyPolicy() {
  return (
    <div>
        
        

        <div className="container mx-auto p-10  space-y-6 text-black bg-white">
      <div className="mb-6 space-y-2">
        <h1 className="text-3xl font-bold">FRAME THE WORLD PRIVACY POLICY</h1>
        <p className="text-gray-600">Last Updated: __________ </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">1. INTRODUCTION</h2>
          <p>
            This Privacy Policy explains how Frame The World, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects information you provide when you upload, store, organize, or share photos through our website https://frametheworld.org and mobile application (the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using the Services, you agree to this Privacy Policy.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">2. INTENDED AUDIENCE &amp; JURISDICTION</h2>
          <p>
            Our Services are designed for and directed to users located in the United States. We do not target or market the Services to individuals outside the United States.
          </p>
          <p>
            If you access the Services from outside the U.S., you understand that your information will be transferred to and processed in the United States under U.S. law.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">3. INFORMATION WE COLLECT</h2>
          <p>
            We collect two categories of information: Personal Information and User Content.
          </p>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3.1 PERSONAL INFORMATION</h3>
            <p>
              <span className="font-bold ">Personal Information: </span> means information you provide when using the Services and creating or managing an account, including:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Securely hashed password</li>
              <li>Phone number</li>
              <li>Subscription plan selections</li>
              <li>Authentication data (including Google or Apple credentials limited to name, email and tokens)</li>
              <li>Payment information provided to and processed by our third-party processors</li>
              <li>Identity or credential numbers you provide (e.g., IATA, CLIA)</li>
              <li>Device and browser information</li>
              <li>IP address</li>
              <li>App and website log data</li>
              <li>Search and usage activity</li>
              <li>Crash diagnostics</li>
              <li>Subscription and account activity</li>
            </ul>
            <p>
              We do not store your full payment card details. Payment processors act as service providers and may only process information as necessary to complete your transactions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3.2 USER CONTENT (PHOTOS &amp; METADATA)</h3>
            <p>
              <span className="font-bold ">User Content: </span> includes any photos, tags, descriptions, and other materials you upload to the Services.
            </p>
            <p>
              When you upload photos, we process:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>The image file</li>
              <li>Limited embedded metadata, such as timestamp and file type. Location metadata contained in image files is not intentionally extracted or used and may be removed during processing.</li>
              <li>Tags, destinations, categories, and locations you enter</li>
              <li>Metadata provided by integrated APIs (such as place name, address, and coordinates from Google Places when a user selects a location)</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">4. HOW WE USE YOUR INFORMATION</h2>
          <p>
            We use Personal Information and User Content to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide, maintain, and improve the Services</li>
            <li>Store, process, organize, and deliver your photos</li>
            <li>Enable search, discovery, and tagging features</li>
            <li>Verify identity and professional credentials</li>
            <li>Support automated tools, including human-presence detection, image cleanup, and user-selected location tagging</li>
            <li>Process payments and manage account status</li>
            <li>Send important notices related to your account or the Services</li>
            <li>Enforce our Terms and policies</li>
            <li>Detect and prevent fraud, abuse, or illegal activities</li>
          </ul>
          <p>
            <span className="font-bold ">Authorized Access: </span> Authorized administrator personnel may access Personal Information and User Content as reasonably necessary to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Moderate or remove content that violates our Terms or law</li>
            <li>Respond to user reports</li>
            <li>Troubleshoot technical issues</li>
            <li>Enforce legal requirements</li>
            <li>Protect the security of the Services</li>
          </ul>
          <p>
            All administrator actions are logged and monitored.
          </p>
          <p>
            We do not &quot;sell&quot; or &quot;share&quot; Personal Information as defined under the California Consumer Privacy Act (CCPA/CPRA).
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">5. PHOTO PROCESSING &amp; AI TOOLS</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.1 AUTOMATED DETECTION</h3>
            <p>
              We use automated tools such as third-party image analysis services to detect whether a photo contains a human figure. If a human figure is detected, you may be prompted to edit the image to remove the figure using tools we provide. We do not use these tools to identify individuals, perform facial recognition, authenticate users, or determine the identity of any person in a photo.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.2 THIRD-PARTY AI SERVICES</h3>
            <p>
              We use third-party API providers to support specific features, such as image detection, cleanup editing, and location services.
            </p>
            <p>
              These providers process data on our behalf and are contractually restricted to using it only to provide the Services and not for their own independent purposes.
            </p>
            <p>
              We take reasonable steps to prevent User Content from being used to train or improve unrelated AI models.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.3 LOCATION METADATA &amp; APIS</h3>
            <p>
              Users may choose to associate photos with locations using search and selection tools powered by Google Places. When a user selects a location, we receive place name, address, and coordinates from Google in order to label and organize the photo. This information comes from Google&apos;s place database, not from the user&apos;s device or the photo&apos;s embedded metadata.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">6. HOW WE SHARE INFORMATION</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.1 SERVICE PROVIDERS</h3>
            <p>
              We share information with service providers performing functions on our behalf, including:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Cloud hosting and storage providers</li>
              <li>Payment processors</li>
              <li>Identity and credential verification services</li>
              <li>AI and image processing vendors</li>
              <li>Analytics and performance monitoring services</li>
            </ul>
            <p>
              These third parties act as service providers, not data brokers, and may only process information under our instructions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.2 OTHER USERS</h3>
            <p>
              Content and associated metadata (destination, location, category, etc.) you upload is visible to other verified users and licensed under the Content Release you agree to during upload. User Content may appear in search results and discovery features, and other verified users may download it. Once downloaded, we cannot guarantee how other users use, share, or distribute that content. Your Content Release governs permitted reuse, but we cannot prevent misuse by others. If another user has already downloaded your User Content, those copies cannot be revoked even if you later delete your account or content.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.3 LEGAL OBLIGATIONS</h3>
            <p>
              We may disclose your information if we determine it is reasonably necessary to comply with legal obligations, respond to appropriate government requests, prevent harm, or protect our rights.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">7. DATA STORAGE &amp; SECURITY</h2>
          <p>
            We store Personal Information and User Content using reputable cloud infrastructure located in the United States.
          </p>
          <p>
            We implement safeguards including:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Encrypted data storage</li>
            <li>Secure access controls</li>
            <li>Monitoring and logging</li>
            <li>Secure password hashing</li>
          </ul>
          <p>
            However, no system is completely secure. We will notify affected users of data breaches as required by applicable law.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">8. DATA RETENTION</h2>
          <p>
            We retain Personal Information and User Content for as long as necessary to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide the Services</li>
            <li>Maintain your account</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
          </ul>
          <p>
            When you delete User Content or your account, content is removed from user-accessible systems and enters a soft-delete period of up to 2 months, during which it is inaccessible to users but may be restored upon request. After that period, content is permanently deleted from active systems.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">9. COOKIES AND SIMILAR TECHNOLOGIES</h2>
          <p>
            We use cookies, SDKs, and similar technologies to operate the Services, maintain security, monitor performance, and diagnose crashes. These technologies are not used for behavioral advertising, profiling, or tracking users across other services. You can control cookies through your browser or device settings.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">10. YOUR RIGHTS (U.S. RESIDENTS)</h2>
          <p>
            Depending on where you live, you may request:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Access to your Personal Information</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of certain Personal Information</li>
            <li>A portable copy of your data</li>
            <li>Information about how we collect and use data</li>
          </ul>
          <p>
            Submit requests to:
          </p>
          <p>
            Email: <a href="mailto:info@frametheworld.org" className="text-blue-600 hover:text-blue-800">info@frametheworld.org</a>
          </p>
          <p>
            or
          </p>
          <p>
            Frame The World, LLC<br/>
            Attn: Privacy Officer<br/>
            416 W. Main St.<br/>
            Tomball, TX 77375
          </p>
          <p>
            We may verify your identity before processing your request.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">11. CHILDREN&apos;S PRIVACY</h2>
          <p>
            The Services are intended for users 18 and older. We do not knowingly collect information from minors.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">12. CHANGES TO THIS POLICY</h2>
          <p>
            We may update this Privacy Policy periodically. Updated versions become effective when posted to the website or app.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">13. CONTACT US</h2>
          <p>
            Frame The World, LLC<br/>
            Attn: Privacy Officer<br/>
            Email: <a href="mailto:privacy@frametheworld.org" className="text-blue-600 hover:text-blue-800">privacy@frametheworld.org</a><br/>
            Phone: 832-608-9209<br/>
            Address: 416 W. Main St., Tomball, TX
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}