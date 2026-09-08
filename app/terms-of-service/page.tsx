import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../component/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Frame The World",
  description:
    "Read the Frame The World Terms of Service governing access to and use of the website, mobile applications, and platform services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "Frame The World",
    "travel agent terms",
  ],
  openGraph: {
    title: "Terms of Service | Frame The World",
    description:
      "Review the Terms of Service for Frame The World website and mobile applications.",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Title */}
        <div className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            FRAME THE WORLD TERMS OF SERVICE
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Last Updated: 09/07/2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Preamble */}
          <div className="space-y-4">
            <p>
              These Frame The World Terms of Service (the{" "}
              <strong>“Terms”</strong>) are a binding contract between Frame
              The World, LLC (<strong>“Frame The World,” “we,” “us,”</strong>{" "}
              and/or <strong>“our”</strong>) and the entity or person agreeing to
              them (<strong>“you,” “your”</strong>) and govern your access to
              and use of the Frame The World website at{" "}
              <a
                href="https://frametheworld.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://frametheworld.org
              </a>{" "}
              (the <strong>“Site”</strong>), the iOS and/or Android Frame The
              World App (the <strong>“App”</strong>), and any other services
              offered as part of the Frame The World platform (collectively with
              the Site, App, the <strong>“Services”</strong>).
            </p>
            <p>
              By choosing to access and use the Services, you are accepting the
              Terms and agreeing to abide by all of the terms and conditions of
              these Terms between you and Frame The World.
            </p>
            <p>
              If you are accepting the Terms on behalf of a third party, you
              represent and warrant that (i) you have full legal authority to bind
              that third party to the Terms; (ii) you have read and understand
              the Terms; and (iii) you agree on behalf of that third party to
              these Terms.
            </p>
          </div>

          {/* 1. PURPOSE */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              1. PURPOSE
            </h2>
            <p>
              Frame The World provides a platform for registered and subscribing
              customers, limited to registered certified travel agents, (a{" "}
              <strong>“Customer”</strong> or <strong>“Customers”</strong>) to
              upload, store, share, and access original travel photographs for
              use in connection with promoting and advertising the services
              offered by Customers’ travel agencies.
            </p>
          </div>

          {/* 2. APPLICABLE TERMS */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              2. APPLICABLE TERMS
            </h2>
            <p>
              The Services are governed by these Terms. You are responsible under
              these Terms for any failure by you to comply with the Terms.
            </p>
            <p>
              <strong>Custom Terms of Use.</strong> We reserve the right to
              present Customers with terms drafted for their specific needs. If
              you are interested in entering terms drafted to meet your unique
              needs, please contact us at{" "}
              <a
                href="mailto:info@frametheworld.org"
                className="text-blue-600 hover:underline"
              >
                info@frametheworld.org
              </a>
              . In such a case, the relationship between Frame The World and
              Customer shall be governed by the custom terms.
            </p>
          </div>

          {/* 3. DEFINITIONS */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              3. DEFINITIONS
            </h2>
            <p>
              All capitalized terms used in these Terms shall have the meaning
              given to them in the Terms unless otherwise defined or stated
              herein.
            </p>
            <div className="space-y-2 pl-4">
              <p>
                <strong>Account:</strong> A Customer’s subscription to Frame
                The World’s Services.
              </p>
              <p>
                <strong>Content:</strong> Media that you upload to the Services.
              </p>
            </div>
          </div>

          {/* 4. YOUR FRAME THE WORLD LICENSE */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              4. YOUR FRAME THE WORLD LICENSE
            </h2>
            <p>
              You acknowledge and agree that the Services, including all
              associated intellectual property rights, are the exclusive property
              of Frame The World and its licensors.
            </p>
            <p>
              Conditioned upon your compliance with these Terms and your payment
              of Account fees, Frame The World hereby grants its Customers a
              limited, revocable, non-exclusive, non-transferable,
              non-sublicensable license to:
            </p>
            <p className="pl-4">
              Access, view, and use the Services upon payment of Account fees for
              the limited purpose of promoting and advertising services of the
              travel agency associated with your Customer Account in the United
              States.
            </p>
            <p>
              The Frame The World license to the Services is strictly limited
              and prohibits personal use of the Services and all commercial use
              unrelated to the travel agency associated with a Customer Account.
            </p>
            <p>
              Notwithstanding anything to the contrary in these Terms, we consent
              to Customers’ use of the Services in a commercial context that is in
              accordance with these Terms, provided that you may not, and will
              not, resell, repackage, or otherwise offer any portion of our
              Services, either directly or indirectly, for commercial purposes as
              if they were your own products or services.
            </p>
            <p>
              You have no right to sublicense any license rights granted to you by
              Frame The World.
            </p>
            <p>
              You may not and will not use, copy, adapt, modify, prepare
              derivative works based upon, distribute, license, sell, transfer,
              publicly display, transmit, broadcast, or otherwise exploit any of
              our services, products, or offerings, except as expressly permitted
              in these Terms and as enabled by the Services themselves when used
              in accordance with these Terms.
            </p>
            <p>
              No licenses or rights are granted to you by implication or
              otherwise under any intellectual property rights owned or controlled
              by Frame The World or its licensors, except for the licenses and
              rights expressly granted in these Terms.
            </p>
            <p>
              Frame The World does not grant a license of any kind to
              non-subscribing visitors to the Site and App.
            </p>
          </div>

          {/* 5. YOUR OBLIGATIONS */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              5. YOUR OBLIGATIONS
            </h2>
            <p>
              <strong>Compliance.</strong> You will
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li>a. ensure that your use of the Services complies with the Terms,</li>
              <li>b. use commercially reasonable efforts to prevent and terminate any unauthorized use, or access to, the Services, and</li>
              <li>c. promptly notify us if you become aware of any unauthorized use of, or access to, the Services. We reserve the right to investigate any potential violation of the Terms, which may include reviewing your usage of the Services.</li>
            </ul>

            <p>
              <strong>Usage.</strong> When you choose to use the Frame The World
              Services and/or upload Content to the Services as a subscribing
              Customer, you agree, represent, and warrant, without any further
              consent, notice and/or compensation to you or to any third parties:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li>
                (a) To grant to Frame The World (to allow us to operate and
                provide the Services) a perpetual, irrevocable, transferable,
                fully paid, royalty-free, non-exclusive, worldwide, fully
                sublicensable right and license to use, copy, display, publish,
                modify, remove, publicly perform, translate, create derivative
                works, distribute and/or otherwise use the Content in connection
                with our business and in all forms now known or hereafter
                invented, without notification to and/or approval by you, except
                as otherwise required by law;
              </li>
              <li>(b) To assume the risk of loss of any Content;</li>
              <li>
                (c) That you are the owner of, or otherwise have the right to
                provide, all Content that you submit, post and/or otherwise
                transmit through the Services;
              </li>
              <li>
                (d) That you consent to the use and handling of any Content by
                the Services as described in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                ;
              </li>
              <li>
                (e) That any Content you choose to upload to the Services is
                accurate, not confidential, and not in violation of any
                contractual restrictions, any applicable law, or other
                third-party rights; and,
              </li>
              <li>
                (f) You will only upload Content when your own rights in that
                Content are sufficient to do so, and to otherwise permit the type
                of Content sharing our Services support.
              </li>
            </ul>

            <p>
              <strong>Privacy.</strong> You are responsible for any consents and
              notices required to permit:
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li>(a) Your use and receipt of the Services, and</li>
              <li>
                (b) our accessing, storing, and processing of any data provided
                by Customers under these Terms in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </li>
            </ul>

            <p>
              <strong>Restrictions.</strong> You will not:
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li>(a) copy, modify, or create a derivative work of the Services or Content;</li>
              <li>
                (b) reverse engineer, decompile, translate, disassemble, or
                otherwise attempt to extract any or all of the source code of,
                the Services (except to the extent such restriction is
                expressly prohibited by applicable law);
              </li>
              <li>(c) sell, resell, sublicense, transfer, or distribute any or all of the Services; or</li>
              <li>
                (d) access or use the Services:
                <ul className="list-disc pl-6 pt-1 space-y-1">
                  <li>in violation of our Acceptable Use Guidelines;</li>
                  <li>
                    in a manner intended to avoid incurring Account Fees
                    (including log-in credentials with multiple individuals or
                    otherwise attempting to circumvent Service-specific usage
                    limits or quotas);
                  </li>
                  <li>in a manner that breaches, or causes the breach of, these Terms.</li>
                </ul>
              </li>
            </ul>

            <p>
              <strong>Travel Agent Credentials.</strong> Subscribing Customers
              warrant that the travel agent and travel agency credentials
              provided in their registration for a Frame The World Account are
              accurate and valid. Whenever applicable, Customers shall timely
              update their travel agent and travel agency credentials. Customers
              shall terminate their Account upon termination, loss, or
              suspension of the travel agency and/or travel agency credentials
              provided in Frame The World Account registration.
            </p>
          </div>

          {/* 6. ACCEPTABLE USE POLICY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              6. ACCEPTABLE USE POLICY
            </h2>
            <p>
              You agree that you understand, and your use of the Services will at
              all times adhere to the following restrictions and obligations:
            </p>
            <ul className="space-y-2.5 pl-4 list-none">
              <li>
                (a) You will upload Content to the Services only where you own
                that Content (or have permission to use it in connection with
                the Services and in accordance with these Terms and our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                ).
              </li>
              <li>
                (b) You will not upload any Content or other media that is
                private, sensitive, or introduce a security risk to yourself,
                such as using your phone number as your display name. You are
                responsible for taking reasonable measures to protect your own
                privacy and security when using the Services.
              </li>
              <li>
                (c) You may not create a Customer Account for anything other
                than a natural, human person or a business entity engaged in the
                provision of travel arrangement services.
              </li>
              <li>
                (d) You may only use the Services for lawful activity. It is
                your responsibility to comply with all applicable local, state,
                and federal laws and regulations. We may, in our sole
                discretion, cooperate in law enforcement investigations relating
                to your Contributions and use of the Services.
              </li>
              <li>
                (e) You may not take any action which attempts to or actually
                does interfere with, damage, or delay the Services, and may not
                take any action in connection with the Services which presents a
                risk of interference with, damage, or delay to the Services,
                including, without limitation, through the use of viruses, bots,
                harmful code, denial-of-Services attacks, ransomware, keystroke
                loggers, backdoors, packet or IP address spoofing, forged
                routing, or any similar methods or technology that may exist now
                or come to exist in the future. You will not use the Services in
                any way that could damage, disable, overburden, or impair any of
                our servers or the networks connected to any of our servers.
              </li>
              <li>
                (f) You may not upload, store, or share Content generated in part
                or in whole by software enabled by Artificial Intelligence (AI).
              </li>
              <li>
                (g) You may not upload, store, or share Content that has been
                digitally manipulated to misrepresent, in any manner, the actual
                visual content displayed and/or portrayed in the Content.
              </li>
              <li>
                (h) You may not upload, access, contribute, download, screenshot,
                or share images of minors. Any contributions that include or
                suggest child sexual abuse material (CSAM), regardless of
                artistic or fictional context, will be strictly prohibited and
                will be reported to relevant law enforcement authorities.
              </li>
              <li>
                (i) You may not upload, share, promote, or depict nudity, sexual
                content, sexually suggestive content, or sexually explicit
                material, regardless of artistic or fictional context, including
                drawn or animated depictions such as hentai.
              </li>
              <li>
                (j) You may not upload, share, promote, or depict graphic
                violence, gore, or content that encourages or glorifies
                violence, self-harm, or harm against others, including animal
                cruelty.
              </li>
              <li>
                (k) You may not upload, share, promote, or depict hate speech,
                threats, or material targeting individuals or groups based on
                race, ethnicity, nationality, religion, gender, gender identity,
                sexual orientation, disability, or medical condition.
              </li>
              <li>
                (l) Except as specifically enabled by the standard functionality
                of the Services, you may not copy, rip, or capture any Content or
                other media encountered on the Services.
              </li>
              <li>
                (m) You may not use the Services to reverse engineer, recreate,
                duplicate, mimic, and/or otherwise recreate all or any part of
                the Services. You may not use manual or automated software,
                devices, scripts, robots, other means or processes to access,
                “scrape,” “crawl”, “spider” or use an automated mechanism such
                as a bot to interact in any way with any portion of the
                Services. From the time you accept these Terms, you agree not to
                attempt to compete with the Services or use the Services in any
                way as a part of competing with Frame The World. If you are an
                owner, operator, or employee of a business whose products and
                services can be deemed to compete with Frame The World, you may
                not install or use the Services in any manner whatsoever.
              </li>
              <li>
                (n) You may not use the Services to upload, transmit, store or
                share any Content or related media that infringes or violates the
                intellectual property rights, privacy rights, publicity, and/or
                any other rights of anyone else (including Frame The World). For
                example, and not as a limitation, this means that if you upload
                photos or videos that portray illegal content, photos or videos
                that you don’t have permission to upload, or that include
                abusive comments, you have violated these terms.
              </li>
              <li>
                (o) You may not use the Services to upload, transmit, or promote
                any Content or related media that is inappropriate, inaccurate,
                objectionable, and/or abusive, nor use the Services to harass,
                abuse or harm another person in any way, including without
                limitation, to market goods and services to them, to solicit
                payment from them, to “spam” them, and/or to populate marketing
                lists.
              </li>
              <li>
                (p) You may not rent, lease, loan, trade, sell/re-sell access to
                Frame The World’s Services or any information therein, or the
                equivalent, in whole or part;
              </li>
              <li>
                (q) You may not imply or state, directly or indirectly, that
                you are affiliated with or endorsed by us unless you have
                entered into a separate written agreement with us that expressly
                permits such statements;
              </li>
              <li>
                (r) You may only use Customer credentials and passwords to sign
                onto the Service if you have the necessary rights and
                permissions.
              </li>
              <li>
                (s) You may not take any action which attempts to override the
                privacy and security features of the Services in any manner.
              </li>
              <li>
                (t) You will not bully, demean, abuse, insult, or verbally
                attack members of the Frame The World staff or support team.
              </li>
              <li>
                (u) You will not use our Services to cause nuisance, annoyance,
                or inconvenience.
              </li>
              <li>
                (v) You will not copy or distribute any Content displayed
                through the Services without the permission or authority to do
                so.
              </li>
              <li>
                (w) The information you provide to us or otherwise communicate
                with us is accurate.
              </li>
              <li>
                (x) You will report any errors, bugs, unauthorized access
                methodologies or any breach of our intellectual property rights
                that you uncover in your use of the Services.
              </li>
              <li>
                (y) You will remain responsible for anything that happens
                through your Account unless you have previously terminated your
                Account, or you prove that your Account security was
                compromised due to no fault of your own.
              </li>
              <li>
                (z) You will not permit others to use your Account, and you
                will refrain from using other Customer accounts.
              </li>
              <li>
                (aa) You will not impersonate another person, act as another
                entity without authorization, or create multiple Accounts.
              </li>
            </ul>
          </div>

          {/* 7. INTELLECTUAL PROPERTY OWNERSHIP */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              7. INTELLECTUAL PROPERTY OWNERSHIP
            </h2>
            <p>
              We (and our licensors, where applicable) own all rights, title,
              and interest, including all related intellectual property rights,
              in and to the Services. These Terms are not a sale and do not
              convey to you any rights of ownership in or related to the
              Services, or any intellectual property rights owned by us. Our
              name, logo, and the product names associated with the Services are
              our trademarks or belong to third parties, and no right or license
              is granted to Customers to use them. You agree that you will not
              remove, alter, or obscure any copyright, trademark, service mark,
              or other proprietary rights notices incorporated in or accompanying
              the Services.
            </p>
          </div>

          {/* 8. INTELLECTUAL PROPERTY POLICIES & DISPUTES */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              8. INTELLECTUAL PROPERTY POLICIES & DISPUTES
            </h2>
            <p>
              We respect the copyright and other intellectual property rights of
              others and expect Users of our Services to do the same. In
              accordance with the Digital Millennium Copyright Act (“DMCA”) and
              other applicable law, we have a policy of terminating, in
              appropriate circumstances and at our sole discretion, Customers of
              the Services who are deemed to be repeat infringers. We also may,
              in our sole discretion, limit access to the Services and terminate
              the accounts of any Customers of the Services who infringe any
              intellectual property rights of others, whether or not there is any
              repeat infringement.
            </p>
            <p>
              <strong>Trademark Policy.</strong> The FRAME THE WORLD trademark
              and FRAME THE WORLD logo, and any other product or service name or
              slogan contained in the Services are trademarks of Frame The World
              and its suppliers, licensors, or Customers, and may not be copied,
              imitated or used, in whole or in part, without the prior written
              permission of Frame The World or the applicable trademark holder.
              You may not use metatags or any other "hidden text" utilizing
              "Frame The World" or any other name, trademark or product or
              service name of Frame The World without our prior written
              permission. In addition, the look and feel of the Services,
              including all page headers, custom graphics, button icons and
              scripts, is the service mark, trademark and/or trade dress of
              Frame The World and may not be copied, imitated or used, in whole
              or in part, without our prior written permission. All other
              trademarks, registered trademarks, product names and company names
              or logos mentioned in the Services are the property of their
              respective owners. Reference to any products, services, processes
              or other information, by trade name, trademark, manufacturer,
              supplier or otherwise does not constitute or imply endorsement,
              sponsorship or recommendation thereof by us.
            </p>
            <p>
              <strong>Links.</strong> You may not use the FRAME THE WORLD logo
              or other proprietary graphic of Frame The World to link to the
              Services without the express written permission of Frame The
              World. Further, you may not frame any Frame The World trademark,
              logo or other proprietary information, including the Content in
              the Services, without Frame The World’s express written consent.
            </p>
            <p>
              <strong>Copyright Policy & Disputes.</strong> If you are a
              copyright owner or the legal agent of a copyright owner, and you
              believe that any Content infringes on your copyrights, you may
              submit a notification to us pursuant to our DMCA Notice procedure:
            </p>
            <div className="space-y-3 pl-4">
              <p>
                <strong>Notification of Alleged Copyright Infringement:</strong>{" "}
                If you believe that Content available on or through our Services
                infringes one or more of your copyrights, please immediately
                notify our Copyright Agent by mail or email (“Notification”)
                providing the information described below, which Notification is
                pursuant to DMCA 17 U.S.C. § 512(c)(3). A copy of your
                Notification will be sent to the person who posted or stored the
                material addressed in the Notification.
              </p>
              <p>All Notifications should include the following:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  A physical or electronic signature (typing your full name
                  within forward slashes (“/myname/”) will suffice) of the
                  copyright owner or a person authorized to act on their behalf
                  (“complaining party”);
                </li>
                <li>
                  Identification of the copyrighted work claimed to have been
                  infringed (e.g., a link to the original work or clear
                  description of the materials allegedly being infringed upon),
                  or, if multiple copyrighted works at a single online website or
                  webpage are covered by a single Notification, a representative
                  list of such works at that website or webpage;
                </li>
                <li>
                  Identification of the infringing material and information
                  reasonably sufficient to permit Frame The World to locate the
                  material on our Services;
                </li>
                <li>
                  Information reasonably sufficient to permit us to contact the
                  complaining party, such as the name, account name, address,
                  telephone number, and email address at which the complaining
                  party may be contacted;
                </li>
                <li>
                  A statement that the complaining party has a good faith belief
                  that the use of the material in the manner asserted is not
                  authorized by the copyright owner, its agent, or the law; and
                </li>
                <li>
                  A statement that the information in the Notification is
                  accurate, and, under penalty of perjury, that the complaining
                  party is authorized to act on behalf of the copyright owner.
                </li>
              </ul>
              <p>
                Please be advised that pursuant to federal law you may be held
                liable for damages, including court costs and attorney’s fees, if
                you materially misrepresent that Content on our Services
                infringes a copyright. Thus, if you are not sure that Content
                located on or linked to by our Services infringe your copyright,
                you should consider first contacting an attorney.
              </p>
              <p>
                Submit your Notification to our designated Copyright Agent: DMCA
                Agent – 416 W. Main St., Tomball, TX 77375;{" "}
                <a
                  href="mailto:DMCA@frametheworld.org"
                  className="text-blue-600 hover:underline"
                >
                  DMCA@frametheworld.org
                </a>
                . Upon receiving a proper Notification of alleged copyright
                infringement, we will remove or disable access to the allegedly
                infringing material and promptly notify the alleged infringer of
                your claim. We will also advise the alleged infringer of the DMCA
                statutory counter-notification procedure described below by
                which the alleged infringer may respond to the complaining
                party’s claim and request that we restore this material. Please
                note that our furnishing the complaining party’s claim to the
                alleged infringer will include the personal information provided
                in the Notification, which the alleged infringer may use to
                contact the complaining party directly. As such, by submitting a
                Notification of alleged copyright infringement, the complaining
                party consents to disclosure of their information in the
                aforementioned manner.
              </p>
            </div>

            <div className="space-y-3 pl-4">
              <p>
                <strong>Counter Notification:</strong> If you believe your
                copyrighted material has been removed from the Services as a
                result of a mistake or misidentification, you may submit a
                written counter-notification letter to us. To be an effective
                counter-notification under the DMCA, the counter-notification
                must substantially include the following:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name, address, and telephone number;</li>
                <li>
                  Identification of the material that has been removed or to
                  which access has been disabled and the location at which the
                  material appeared before it was removed or access to it was
                  disabled (the description from the copyright notice will
                  suffice);
                </li>
                <li>
                  A statement under penalty of perjury that you have a good
                  faith belief that the material was removed or disabled as a
                  result of mistake or misidentification of the material to be
                  removed or disabled;
                </li>
                <li>
                  A statement that you consent to the jurisdiction of the Federal
                  District Court for the judicial district in which your address
                  is located, or if your address is outside of the United States,
                  for any judicial district in which Frame The World is located;
                </li>
                <li>
                  A statement that you will accept service of process from the
                  complaining party within the Notification or an agent of such
                  person; and,
                </li>
                <li>
                  A physical or electronic signature (typing your full name will
                  suffice).
                </li>
              </ul>
              <p>
                You may submit the written counter-notification to our Copyright
                Agent by mail or email using the contact information set forth
                above. Please note that if you materially misrepresent that the
                disabled or removed Media was removed by mistake or
                misidentification, you may be liable for damages, including
                costs and attorney’s fees. Filing a false counter-notification
                constitutes perjury. If you send us a valid, written
                counter-notification meeting the requirements described above,
                we will restore the removed or disabled Content after 10
                business days but no later than 14 business days from the date
                we receive the written counter-notification, unless our Copyright
                Agent first receives notice from the complaining party informing
                us that such party has filed a court action to restrain you from
                engaging in infringing activity related to the Content in
                question.
              </p>
            </div>
          </div>

          {/* 9. SUSPENSION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              9. SUSPENSION
            </h2>
            <p>
              <strong>Violations.</strong> If we become aware that Customer’s
              use of the Services violates the Terms, we will notify Customer and
              request that Customer correct the violation. If Customer fails to
              promptly correct the violation, then we may suspend all or part of
              Customer’s use of the Services until the violation is corrected.
            </p>
            <p>
              <strong>Other Suspension.</strong> Notwithstanding the above
              paragraph, we may immediately suspend all or part of Customer’s use
              of the Services if (a) we reasonably believe the suspension is
              needed to protect our Services, our infrastructure supporting the
              Services, or any other customer of the Services (or their Users or
              Guests); (b) there is suspected unauthorized third-party access to
              the Services; (c) we reasonably believe that immediate suspension
              is required to comply with any applicable laws; or (d) Customer is
              in breach of these Terms.
            </p>
          </div>

          {/* 10. FEES AND BILLING */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              10. FEES AND BILLING
            </h2>
            <p>
              <strong>Monthly Plan.</strong> If Customers select this option, the
              Customers will pay for the Services on a monthly basis. Frame The
              World will bill Customer $15.99 monthly in arrears for its use of
              the Services.
            </p>
            <p>
              <strong>Annual Plan.</strong> If Customers select this option,
              Customers will be committed to purchasing the Services from Frame
              The World for an annual term in the amount of $129.99.
            </p>
            <p>
              <strong>Payment.</strong> All payments due are in U.S. dollars
              unless otherwise indicated on an invoice. Customers will provide
              Frame The World with valid and updated credit card information. If
              Customers provides credit card information to Frame The World,
              Customers authorize Frame The World to charge such credit card for
              all fees owed in Customers’ initial subscription term and any
              renewal subscription term(s). Such charges shall be made in
              advance, in accordance with the billing frequency indicated by
              Customers. Invoiced fees are due net 30 days from the invoice
              date. Customers are responsible for providing complete and
              accurate billing and contact information to Frame The World of any
              changes to such information.
            </p>
            <p>
              <strong>Automatic Renewal.</strong> These Terms and your obligation
              to pay fees automatically renew at the end of each billing cycle.
            </p>
            <p>
              <strong>Contingent on Payment.</strong> Your use of Frame The World
              Services is conditioned on your payment of fees for the Services.
            </p>
            <p>
              <strong>Suspension for Overdue Fees.</strong> We reserve the right
              to suspend Customers’ access to Services in the event of any unpaid
              and overdue fees.
            </p>
            <p>
              <strong>Price Revisions.</strong> We reserve the right to increase
              fees from time to time in our sole discretion. We will notify
              Customers at least 30 days in advance of any changes. Customers’
              pricing will change at the beginning of Customers’ next billing
              cycle.
            </p>
          </div>

          {/* 11. TERM & TERMINATION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              11. TERM & TERMINATION
            </h2>
            <p>
              <strong>Agreement Term.</strong> The term of these Terms will begin
              on the date when you access the Services (the “effective date”) and
              continue until the your access is terminated or a Customer’s
              Account is not renewed.
            </p>
            <p>
              <strong>Termination by Customers.</strong> Customers may stop using
              the Services at any time. To terminate your Frame The World
              Account, follow the instructions available within the Frame The
              World application, or email{" "}
              <a
                href="mailto:info@frametheworld.org"
                className="text-blue-600 hover:underline"
              >
                info@frametheworld.org
              </a>
              .
            </p>
            <p>
              <strong>Termination by Frame The World.</strong> Frame The World
              may immediately and without notice terminate a Customer’s Account
              and suspend or disable a Customer’s access to the Services if
              Frame The World determines, in its sole discretion, that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You have breached these Terms.</li>
              <li>You have violated applicable laws, regulations, or third-party rights.</li>
              <li>Such action is needed to protect the safety or property of other users, Frame The World, or third parties.</li>
              <li>We have reason to believe you, your Users, or your Guests have violated these Terms.</li>
            </ul>
            <p>
              If we intend to remove your account in accordance with this Section,
              we will try to provide advance notice to you before we remove your
              account, but we need not provide notice, if we determine it would
              be impractical, illegal, not in the interest of someone’s safety or
              security, or otherwise harmful to the rights or property of Frame
              The World to provide such notice.
            </p>
            <p>
              <strong>Effect of Termination or Non-Renewal.</strong> If a
              Customer’s Account are terminated or not renewed, then (a) all
              rights and access to the Services will cease and (b) all fees owed
              by Customer to Frame The World are immediately due upon Customer’s
              receipt of the final electronic bill or as stated in the final
              invoice.
            </p>
            <p>
              Provisions in these Terms that, by their nature, should survive
              termination of a Customer’s Account shall survive any termination
              of your account.
            </p>
          </div>

          {/* 12. DISCLAIMER OF WARRANTIES */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              12. DISCLAIMER OF WARRANTIES
            </h2>
            <p>
              You expressly understand and agree that to the fullest extent of
              law, your use of the Services is entirely at your own risk. The
              Services are provided on an “as is” basis without warranties of
              any kind, either express or implied, including, but not limited
              to, warranties of merchantability, fitness for a particular purpose
              and non-infringement. We make no warranties or representations
              about the accuracy, reliability, completeness or timeliness of the
              content made available through the services, or the text, graphics,
              or links.
            </p>
            <p>
              We do not warrant that the Services will operate error-free or that
              the Services are free of computer viruses and other harmful
              malware. If your use of the Services results in the need for
              servicing or replacing equipment or data, we shall not be
              responsible for those economic costs.
            </p>
          </div>

          {/* 13. LIMITATION OF LIABILITY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              13. LIMITATION OF LIABILITY
            </h2>
            <p>
              Under no circumstances and under no legal theory (whether in
              contract, tort, or otherwise) shall we be liable to you or any third
              party for:
            </p>
            <p className="pl-4">
              (a) Any indirect, incidental, special, exemplary, consequential,
              or punitive damages, including lost profits, lost sales or
              business, lost data or data breach, or
            </p>
            <p className="pl-4">
              (b) For any direct damages, costs, losses, or liabilities (including
              attorneys’ fees) in excess of the fees actually paid by you in the
              twelve months (12) months preceding the event giving rise to your
              claim or, if no fees apply, one hundred ($100) U.S. dollars.
            </p>
            <p>
              The provisions of this section allocate the risks under this
              agreement between Frame The World and you (“parties”), and the
              parties have relied on these limitations in determining whether to
              enter into this agreement. Some states do not allow the exclusion
              of implied warranties or limitation of liability for incidental or
              consequential damages, which means that some of the above
              limitations may not apply to you. In these states, our liability
              will be limited to the greatest extent permitted by law.
            </p>
            <p>
              We make no representations or warranties with respect to the
              Services, or any other items or services provided by us, including,
              without limitation, any implied warranty arising by usage of
              trade, course of dealing or course of performance, any implied
              warranty of merchantability or fitness for a particular purpose and
              any implied warranty of non-infringement. You acknowledge that the
              Services (including any servers or other hardware, software and
              any other items used or provided by us in connection with the
              services) are provided “as is” and that we make no warranty that
              the services will be free from bugs, faults, defects or errors or
              that access to the services will be uninterrupted.
            </p>
          </div>

          {/* 14. INDEMNITY */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              14. INDEMNITY
            </h2>
            <p>
              You agree to indemnify and hold harmless Frame The World and its
              officers, directors, employees, agents, and affiliates (each, an
              “Indemnified Party”), from and against any losses, claims,
              actions, costs, damages, penalties, fines, and expenses, including
              without limitation attorneys’ fees and expenses, that may be
              incurred by an Indemnified Party arising out of, relating to or
              resulting from:
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li>(a) your Content;</li>
              <li>(b) your misuse of the Services;</li>
              <li>(c) your violation of these Terms; or</li>
              <li>
                (d) your violation of any applicable laws, rules or regulations
                through or related to the use of the Services.
              </li>
            </ul>
            <p>
              In the event of any claim, allegation, suit or proceeding alleging
              any matter potentially covered by the agreements in this section,
              you agree to pay for the defense of the Indemnified Party,
              including reasonable costs and attorneys’ fees incurred by the
              Indemnified Party. We reserve the right, at our own cost, to assume
              the exclusive defense and control of any matter otherwise subject
              to indemnification by you, in which event you will fully cooperate
              with us in asserting any available defenses. This provision does
              not require you to indemnify any Indemnified Party for any
              unconscionable commercial practice by such party, or for such
              party’s negligence, fraud, deception, false promise,
              misrepresentation or concealment, suppression or omission of any
              material fact in connection with the Services. You agree that the
              provisions in this section will survive any termination of your
              account, these Terms, or your access to the Services.
            </p>
          </div>

          {/* 15. DISPUTES WITH OTHER CUSTOMERS */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              15. DISPUTES WITH OTHER CUSTOMERS
            </h2>
            <p>
              If there is a dispute between Customers of our Services or between
              Customers and any third party, you agree that Frame The World is
              under no obligation to become involved.
            </p>
            <p>
              In the event that you have a dispute with one or more other
              Customers, you hereby release Frame The World, its officers,
              employees, agents, and successors from claims, demands, and damages
              of every kind or nature, known or unknown, suspected or
              unsuspected, disclosed or undisclosed, arising out of or in any way
              related to such disputes and/or our Services.
            </p>
          </div>

          {/* 16. DISPUTE RESOLUTION AND BINDING ARBITRATION */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              16. DISPUTE RESOLUTION AND BINDING ARBITRATION
            </h2>
            <p>
              Please read this section carefully. It requires you to arbitrate
              disputes with us and limits the manner in which you can seek relief.
              This section of the terms shall be referred to as the “arbitration
              agreement.”
            </p>
            <p>
              <strong>Scope of Arbitration Agreement.</strong> You agree that
              any dispute or claim relating in any way to your access or use of
              the Services, or to any advertising or marketing communications
              regarding us or our Services, to, or to any aspect of your
              relationship or transactions with us as a consumer of our Services
              will be resolved by binding arbitration, rather than in court,
              except that (1) you may assert claims in small claims court if
              your claims qualify, so long as the matter remains in such court
              and advances only on an individual (non-class, non-representative)
              basis; and (2) you or Frame The World may seek equitable relief in
              court for infringement or other misuse of intellectual property
              rights (such as trademarks, trade dress, domain names, trade
              secrets, copyrights, and patents). This Arbitration Agreement shall
              apply, without limitation, to all claims that arose or were asserted
              before the Effective Date of this Agreement.
            </p>
            <p>
              If you agree to arbitration with us, you are agreeing in advance
              that you will not participate in or seek to recover monetary or
              other relief in any such class, collective, and/or representative
              lawsuit. Instead, by agreeing to arbitration, you may bring your
              claims against us in an individual arbitration proceeding. If
              successful on such claims, you could be awarded money or other
              relief by an arbitrator.
            </p>
            <p>
              <strong>Informal Resolution.</strong> You and Frame The World agree
              that good-faith informal efforts to resolve disputes often can
              result in a prompt, low-cost and mutually beneficial outcome. You
              and Frame The World therefore agree that, before either you or
              Frame The World demands arbitration against the other, we will
              personally meet and confer, via telephone or video conference, in a
              good-faith effort to resolve informally any claim covered by this
              mutual Arbitration Agreement. If you are represented by counsel,
              your counsel may participate in the conference, but you shall also
              fully participate in the conference. The party initiating the claim
              must give notice to the other party in writing of its, his, or her
              intent to initiate an informal dispute resolution conference, which
              shall occur within 60 days after the other party receives such
              notice, unless an extension is mutually agreed upon by the parties.
              To notify us that you intend to initiate an informal dispute
              resolution conference, email{" "}
              <a
                href="mailto:info@frametheworld.org"
                className="text-blue-600 hover:underline"
              >
                info@frametheworld.org
              </a>
              , providing the email associated with your Frame The World account
              (if any) and a description of your claim. In the interval between
              the party receiving such notice and the informal dispute resolution
              conference, the parties shall be free to attempt to resolve the
              initiating party’s claims. Engaging in an informal dispute
              resolution conference is a requirement that must be fulfilled
              before commencing arbitration. The statute of limitations and any
              filing fee deadlines shall be tolled while the parties engage in
              the informal dispute resolution process required by this paragraph.
            </p>
            <p>
              <strong>Arbitration Rules and Forum.</strong> This Arbitration
              Agreement is governed by the Federal Arbitration Act in all
              respects. To begin an arbitration proceeding, you must send a
              letter requesting arbitration and describing your claim to our
              registered agent, Arbitration Agent – Frame The World, 416 W. Main
              St., Tomball, TX 77375. The arbitration will be conducted by JAMS
              under its rules and pursuant to the terms of this Agreement.
              Disputes involving claims and counterclaims under $250,000, not
              inclusive of attorneys’ fees and interest, shall be subject to
              JAMS’s most current version of the Streamlined Arbitration Rules
              and procedures available at{" "}
              <a
                href="http://www.jamsadr.com/rules-streamlined-arbitration/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.jamsadr.com/rules-streamlined-arbitration/
              </a>
              ; all other claims shall be subject to JAMS’s most current version
              of the Comprehensive Arbitration Rules and Procedures, available at{" "}
              <a
                href="http://www.jamsadr.com/rules-comprehensive-arbitration/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.jamsadr.com/rules-comprehensive-arbitration/
              </a>
              . JAMS’s rules are also available at{" "}
              <a
                href="http://www.jamsadr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.jamsadr.com
              </a>{" "}
              (under the Rules/Clauses tab) or by calling JAMS at{" "}
              <a
                href="tel:800-352-5267"
                className="text-blue-600 hover:underline"
              >
                800-352-5267
              </a>
              . Payment of all filing, administration, and arbitration fees will
              be governed by JAMS’s rules. If the arbitrator finds that you
              cannot afford to pay JAMS’s filing, administrative, hearing
              and/or other fees and cannot obtain a waiver of fees from JAMS, we
              will pay them for you. In addition, we will reimburse all such JAMS
              filing, administrative, hearing and/or other fees for claims with an
              amount in controversy totaling less than $10,000. If JAMS is not
              available to arbitrate, the parties will select an alternative
              arbitral forum. You may choose to have the arbitration conducted
              by telephone, video conference, based on written submissions, or in
              person in the county where you live or at another mutually agreed
              location.
            </p>
            <p>
              <strong>Arbitrator Powers.</strong> The arbitrator, and not any
              federal, state, or local court or agency, shall have exclusive
              authority to resolve any dispute relating to the interpretation,
              applicability, enforceability or formation of this Arbitration
              Agreement including, but not limited to any claim that all or any
              part of this Arbitration Agreement is void or voidable. The
              arbitration will decide the rights and liabilities, if any, of you
              and Frame The World. The arbitration proceeding will not be
              consolidated with any other matters or joined with any other
              proceedings or parties. The arbitrator will have the authority to
              grant motions dispositive of all or part of any claim or dispute.
              The arbitrator will have the authority to award monetary damages
              and to grant any non-monetary remedy or relief available to an
              individual under applicable law, the arbitral forum’s rules, and
              this Agreement (including this Arbitration Agreement). The
              arbitrator will issue a written statement of decision describing
              the essential findings and conclusions on which any award (or
              decision not to render an award) is based, including the
              calculation of any damages awarded. The arbitrator shall follow the
              applicable law. The arbitrator has the same authority to award
              relief on an individual basis that a judge in a court of law would
              have. The arbitrator’s decision is final and binding on you and
              Frame The World.
            </p>
            <p>
              <strong>Waiver of Jury Trial.</strong> You and Frame The World waive
              any constitutional and statutory rights to sue in court and
              receive a judge or jury trial. You and Frame The World are instead
              electing to have claims and disputes resolved by arbitration,
              except as specified in the Scope of Arbitration Agreement paragraph
              above. There is no judge or jury in arbitration, and court review
              of an arbitration award is limited.
            </p>
            <p>
              <strong>Waiver of Class or Consolidated Actions.</strong> You and
              Frame The World agree to waive any right to resolve claims within
              the Scope of this Arbitration Agreement on a class, collective, or
              representative basis. All claims and disputes within the Scope of
              this Arbitration Agreement must be arbitrated on an individual
              basis and not on a class basis. Claims of more than one customer or
              user cannot be arbitrated or litigated jointly or consolidated with
              those of any other customer or user. If, however, this waiver of
              class or consolidated actions is deemed invalid or unenforceable
              with respect to a particular claim or dispute, neither you nor
              Frame The World is entitled to arbitration of such claim or dispute.
              Instead, all such claims and disputes will then be resolved in a
              court.
            </p>
            <p>
              <strong>Batch Arbitrations.</strong> To increase efficiency of
              resolution, in the event 100 or more similar arbitration demands
              against us, presented by or with the assistance of the same law firm
              or organization, are submitted to an arbitration provider selected
              in accordance with the rules described above within a 30-day period,
              the arbitration provider shall (i) group the arbitration demands
              into batches of no more than 100 demands per batch (plus, to the
              extent there are less than 100 arbitration demands left over after
              the batching described above, a final batch consisting of the
              remaining demands); and (ii) provide for resolution of each batch
              as a single arbitration with one set of filing and administrative
              fees and one arbitrator assigned per batch. You agree to cooperate
              in good faith with Frame The World and the arbitration provider to
              implement such a batch approach to resolution and fees.
            </p>
            <p>
              <strong>Opt Out.</strong> You may opt out of this Arbitration
              Agreement. If you do so, neither you nor Frame The World can force
              the other to arbitrate as a result of this Agreement. To opt out,
              you must notify Frame The World in writing no later than 30 days
              after first becoming subject to this Arbitration Agreement. Your
              notice must include your name and address, your email address (if
              you have one), and a CLEAR statement that you want to opt out of
              this Arbitration Agreement. You must send your opt-out notice to:{" "}
              <a
                href="mailto:info@frametheworld.org"
                className="text-blue-600 hover:underline"
              >
                info@frametheworld.org
              </a>
              . If you opt out of this Arbitration Agreement, all other parts of
              this Agreement will continue to apply to you. Opting out of this
              Arbitration Agreement has no effect on any other arbitration
              agreements that you may have entered into with us or may enter into
              in the future with us.
            </p>
            <p>
              <strong>Survival.</strong> This Arbitration Agreement will survive
              any termination of your relationship with us.
            </p>
            <p>
              <strong>Modification.</strong> Notwithstanding any provision in
              these Terms to the contrary, we agree that if we make any future
              material change to this Arbitration Agreement, it will not apply to
              any individual claim(s) that you had already provided notice of to
              us.
            </p>
          </div>

          {/* 17. EXCLUSIVE VENUE */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              17. EXCLUSIVE VENUE
            </h2>
            <p>
              To the extent the parties are permitted under these Terms to
              initiate litigation in a court, both you and Frame The World agree
              that all claims and disputes arising out of or relating to the
              Terms will be litigated exclusively within the State of Texas for
              courts situated in Harris County, Texas, or in federal court for
              the Southern District of Texas.
            </p>
          </div>

          {/* 18. GENERAL */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              18. GENERAL
            </h2>
            <div className="space-y-3 pl-4">
              <p>
                <strong>Electronic Communication</strong>
                <br />
                For contractual purposes, you (1) consent to receive
                communications from us in an electronic form; and (2) agree that
                all terms and conditions, agreements, notices, disclosures, and
                other communications that we provide to you electronically satisfy
                any legal requirement that such communications would satisfy if
                they were in writing. This subparagraph does not affect your
                statutory rights.
              </p>
              <p>
                <strong>No Waiver</strong>
                <br />
                The failure of Frame The World to enforce any right or provision
                of these Terms will not constitute a waiver of future enforcement
                of that right or provision.
              </p>
              <p>
                <strong>Assignment</strong>
                <br />
                You may not assign or transfer a Customer Account, by operation
                of law or otherwise, without Frame The World’s prior written
                consent. Any attempt by you to assign or transfer a Customer
                Account without such consent will be null and of no effect. Frame
                The World may assign or transfer access to its Services, at its
                sole discretion, without restriction. Subject to the foregoing,
                these Terms will bind and insure to the benefit of the parties,
                their successors, and permitted assigns. These Terms do not and
                are not intended to confer any rights or remedies upon any person
                other than Frame the World and its Customers and visitors to its
                Site and App.
              </p>
              <p>
                <strong>Severability</strong>
                <br />
                If for any reason an arbitrator or a court of competent
                jurisdiction finds any provision of these Terms invalid or
                unenforceable, that provision will be enforced to the maximum
                extent permissible and the other provisions of these Terms will
                remain in full force and effect.
              </p>
              <p>
                <strong>Entire Agreement</strong>
                <br />
                These Terms constitute the entire agreement between you and Frame
                The World regarding your use of Frame The World’s Services, and
                supersede all prior written or oral agreements. Additional terms
                may apply to certain products or services. In the event that
                there is a conflict between these Terms and any additional
                terms, these Terms will control.
              </p>
              <p>
                <strong>Modification</strong>
                <br />
                Frame The World reserves the right, at its sole discretion, to
                modify these Terms at any time and without prior notice. If we
                materially modify these Terms, as determined by Frame The World in
                its sole discretion, we will either post a notification of the
                modification or otherwise provide you with notice of the change.
                The date of the last modification will also be posted at the
                beginning of these Terms. It is your responsibility to check from
                time to time for updates. By continuing to access or use the
                Services, you are indicating that you agree to be bound by any
                modified Terms.
              </p>
            </div>
          </div>

          {/* 19. CONTACT INFORMATION */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              19. CONTACT INFORMATION
            </h2>
            <p>If you have questions about these Terms, please contact us at:</p>
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
              <p>
                <strong>Mail:</strong> Frame The World, 416 W. Main St., Tomball
                TX 77375
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
