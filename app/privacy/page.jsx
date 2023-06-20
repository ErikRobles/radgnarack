import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section id="cookies" className="bg-black text-white">
      <div className="custom-container mx-auto px-5 pt-24">
        <div className="py-10">
          <h1 className="text-3xl font-bold">Privacy for Radgnarack</h1>
          <p>Last updated: June 20th 2023</p>
          <p>
            This Privacy Policy explains how Radgnarack (&quot;us,&quot;
            &quot;we,&quot; or &quot;our&quot;) collects, uses, and discloses
            personal information when you use our website https://radgnarack.com
          </p>

          <h2 className="text-2xl font-bold pt-5">
            Information Collection and Use{" "}
          </h2>
          <p className="py-5">
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <h2 className="text-2xl font-bold pt-5">Types of Data Collected</h2>
          <ul>
            <li>
              Personal Data: While using our Service, we may ask you to provide
              us with certain personally identifiable information that can be
              used to contact or identify you (&quot;Personal Data&quot;).
              Personally identifiable information may include, but is not
              limited to:
              <ul>
                <li>Email Address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </li>
            <li>
              Usage Data: We may also collect information about how the Service
              is accessed and used (&quot;Usage Data&quot;). This Usage Data may
              include information such as your computer&apos;s Internet Protocol
              address (e.g., IP address), browser type, browser version, the
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, unique device identifiers,
              and other diagnostic data.
            </li>
          </ul>
          <h2 className="text-2xl font-bold pt-5">Use of Data</h2>
          <p className="py-5">
            We use the collected data for various purposes, including:
          </p>
          <ul>
            <li>
              Legal Requirements: We may disclose your Personal Data if required
              to do so by law or in response to valid requests from public
              authorities (e.g., a court or a government agency).
            </li>
            <li>
              Vital Interests: We may disclose your Personal Data when we
              believe it is necessary to investigate, prevent, or take action
              regarding potential violations of our policies, suspected fraud,
              situations involving potential threats to the safety of any
              person, or as evidence in litigation in which we are involved.
            </li>
            <li>
              Service Providers: We may employ third-party companies and
              individuals to facilitate our Service (&quot;Service
              Providers&quot;), provide the Service on our behalf, perform
              Service-related services, or assist us in analyzing how our
              Service is used. These third parties have access to your Personal
              Data only to perform these tasks on our behalf and are obligated
              not to disclose or use it for any other purpose.
            </li>
            <li>
              Business Transaction: If we are involved in a merger, acquisition,
              or asset sale, your Personal Data may be transferred. We will
              provide notice before your Personal Data is transferred and
              becomes subject to a different Privacy Policy.
            </li>
          </ul>
          <h2 className="text-2xl font-bold pt-5">Security of Data</h2>
          <p className="py-5">
            The security of your data is important to us, but please remember
            that no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Data, we
            cannot guarantee its absolute security.{" "}
          </p>
          <h2 className="text-2xl font-bold pt-5">
            Your Data Protection Rights
          </h2>
          <p className="py-5">
            We aim to take reasonable steps to allow you to correct, amend,
            delete, or limit the use of your Personal Data. If you wish to be
            informed about what Personal Data we hold about you and if you want
            it to be removed from our systems, please <Link href="./contact" className="underline">contact us</Link>.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
