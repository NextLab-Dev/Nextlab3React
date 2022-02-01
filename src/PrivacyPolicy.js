import { useHistory } from "react-router-dom";
import { Footer } from "./Footer";

export const PrivacyPolicy = () => {
    const history = useHistory()
    const goBack = () => {
        history.push("/");
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10 p-3">
                        <button type="button" className="btn btn-primary backBtn" onClick={goBack}><i className="bi bi-arrow-left"></i> Home</button>
                        <h2 className="font-weight-bold">Privacy Policy</h2>
                        <p>Last updated: December 14th, 2021.</p>
                        <p>
                            This privacy policy (“Privacy Policy”) governs how Nextlab3, Ltd (“Nextlab3”
                            “we”, “our” or “us”) use, collect and store Personal Data we collect or
                            receive from or about you (“User”, “you”) such as in the following use
                            cases:
                        </p>
                        <ul>
                            <li>When you browse or visit our website on nextlab3.com, and its subdomains (“Website”);</li>
                            <li>
                                When you make use of, or interact with, our Website, our mobile
                                application, mobile software, and any other mobile software
                                application, that we license (each individually, and collectively, the
                                “App”)
                            </li>
                            <li>When you create an account and/or log in</li>
                            <li>When you download our software / app</li>
                            <li>When you provide user information</li>
                            <li>When you contact us(e.g. customer support, help, submit a request)</li>
                        </ul>
                        <p>Please note that this is a master privacy policy and some of its provisions only apply to individuals in certain jurisdictions.</p>
                        <p>
                            This Privacy Policy may be updated from time to time and therefore we
                            ask you to check back periodically for the latest version of the Privacy
                            Policy, as indicated below. If there will be any significant changes
                            made to the use of your Personal Data in a manner different from that
                            stated at the time of collection, we will notify you by posting a notice
                            on our Website or App or by other means.
                        </p>
                        <p>1. WHAT PERSONAL AND OTHER INFORMATION NEXTLAB3 COLLECTS ABOUT YOU</p>
                        <p>
                            Nextlab3 collects “personal information” about users of the Services.
                            “Personal information” is information such as a name, email address, or
                            identification card image, which refers to an identified or identifiable
                            person. For its own purposes, Nextlab3 only processes the personal
                            information described in section “Nextlab3 acting as a data controller” and
                            anonymized and/or aggregated information. “Anonymized information” is
                            information which does not relate to an identified or identifiable
                            person or is rendered anonymous in such a manner that the person is no
                            longer identifiable.
                        </p>
                        <p>
                            Personal information. Nextlab3 collects a wide range of personal
                            information. This information varies depending on the Nextlab3 application
                            and the Customer Data Controller in question, but may include such
                            information as name, physical address, email address, telephone number,
                            social security number, driver’s license number, state or national ID
                            card number, passport number, other ID card number, credit or debit card
                            number, CVV, expiration date, and/or date of birth. In some cases, Nextlab3
                            may collect a visually scanned or photographed image of your face and/or
                            your identification card, driver’s license, passport, utility bill, bank
                            account statement, insurance card, or credit/debit card. This image may
                            include your photograph and other information from the imaged document,
                            such as your eye color, weight, height, and organ donor status.
                        </p>
                        <p>
                            Nextlab3 collects this data either from you directly, when you provide
                            Nextlab3 with your personal data by e.g., sending Nextlab3 an email, providing
                            Nextlab3 with your personal data on the phone or through Nextlab3’s customer
                            portal. Nextlab3 may also collect some of your personal data in the course
                            of Nextlab3’s business relationship with your employer.
                        </p>
                        <p>
                            Where Nextlab3 asks you to provide your personal data, this provision of
                            personal data is voluntary. However, if you do not provide your personal
                            data you will not be able to communicate with Nextlab3 and your employer
                            may not be able to make use of the full range of Nextlab3’s products and
                            services.
                        </p>
                        <p>How long do we store the collected data?</p>
                        <p>
                            Until we no longer need the information and proactively delete it or you
                            send a valid deletion request. Please note that we may retain it for a
                            longer or shorter period in accordance with data retention laws.
                        </p>
                        <p>2. HOW WE PROTECT AND STORE YOUR INFORMATION</p>
                        <p>
                            Security. We have implemented appropriate technical, organizational and
                            security measures designed to reduce the risk of accidental destruction
                            or loss, or the unauthorized disclosure or access to such information
                            appropriate to the nature of the information concerned. However, please
                            note that we cannot guarantee that the information will not be exposed
                            as a result of unauthorized penetration to our servers. As the security
                            of information depends in part on the security of the computer, device
                            or network you use to communicate with us and the security you use to
                            protect your user IDs and passwords, please make sure to take
                            appropriate measures to protect this information.
                        </p>
                        <p>
                            Retention of your Personal Data. In addition to the retention periods
                            mentioned in Section 1 above, in some circumstances we may store your
                            Personal Data for longer periods of time, for example (i) where we are
                            required to do so in accordance with legal, regulatory, tax or
                            accounting requirements, or (ii) for us to have an accurate record of
                            your dealings with us in the event of any complaints or challenges, or
                            (iii) if we reasonably believe there is a prospect of litigation
                            relating to your Personal Data or dealing
                        </p>
                        <p>3. HOW WE SHARE YOUR PERSONAL INFORMATION</p>
                        <p>We may share your information as follows:</p>
                        <ul>
                            <li>
                                To the extent necessary, with regulators, to comply with all
                                applicable laws, regulations and rules, and requests of law
                                enforcement, regulatory and other governmental agencies or if required
                                to do so by court order;
                            </li>
                            <li>
                                If, in the future, we sell or transfer some or all of our business or
                                assets to a third party, we will (to the minimum extent required)
                                disclose information to a potential or actual third-party purchaser of
                                our business or assets. In the event that we are acquired by or merged
                                with a third-party entity, or in the event of bankruptcy or a
                                comparable event, we reserve the right to transfer or assign Personal
                                Data in connection with the foregoing events.
                            </li>
                            <li>
                                Where you have provided your consent to us sharing the Personal Data
                                (e.g., where you provide us with marketing consents or opt-in to
                                optional additional services or functionality); and
                            </li>
                            <li>
                                Where we receive requests for information from law enforcement or
                                regulators, we carefully validate these requests before any Personal
                                Data is disclosed.
                            </li>
                        </ul>
                        <p>
                            4. FOR WHAT PURPOSES DOES NEXTLAB3 PROCESS MY PERSONAL INFORMATION?
                        </p>
                        <p>We process your personal information to operate, provide, and improve the Services that we offer our users. These purposes include:</p>
                        <ul>
                            <li>
                                Transaction services. We use your personal information to take and
                                handle orders, process payments, and communicate with you about orders
                                and services, and promotional offers.
                            </li>
                            <li>
                                Provide, troubleshoot, and improve the Nextlab3 website. We use your
                                personal information to provide functionality, analyze performance,
                                fix errors, and improve the usability and effectiveness of our
                                platform.
                            </li>
                            <li>
                                Recommendations and personalization. We use your personal information
                                to recommend features and services that might be of interest to you,
                                identify your preferences, and personalize your experience with Nextlab3.
                            </li>
                            <li>
                                Comply with legal obligations. In certain cases, we collect and use
                                your personal information to comply with laws and regulations. For
                                instance, we collect bank account information for identity
                                verification and other purposes.
                            </li>
                            <li>Communicate with you. We use your personal information to communicate with you in relation to nextlab3.com</li>
                            <li>
                                Fraud prevention and credit risks. We process personal information to
                                prevent and detect fraud and abuse in order to protect the security of
                                our users. We may also use scoring methods to assess and manage credit
                                risks.
                            </li>
                            <li>
                                Purposes for which we seek your consent. We may also ask for your
                                consent to process your personal information for a specific purpose
                                that we communicate to you. When you consent to our processing your
                                personal information for a specified purpose, you may withdraw your
                                consent at any time and we will stop processing of your data for that
                                purpose.
                            </li>
                        </ul>
                        <p>5. INTERNATIONAL TRANSFERS OF PERSONAL DATA</p>
                        <p>
                            Nextlab3 may transfer your data outside of the European Economic Area
                            (“EEA”). Nextlab3 puts in place suitable safeguards to ensure that such
                            transfer is carried out in compliance with applicable data protection
                            rules, except where the country to which the data is transferred has
                            already been determined by the European Commission to provide an
                            adequate level of protection.
                        </p>
                        <p>
                            Where Nextlab3 transfers personal data to affiliates or service providers,
                            Nextlab3 relies on the standard contractual clauses approved by the
                            European Commission.
                        </p>
                        <p>6. WHAT ARE MY RIGHTS?</p>
                        <p>If you have any questions or objection as to how we collect and process your personal information, please contact info@nextlab3.com.
                        </p>
                        <p>
                            When you consent to our processing your personal information for a
                            specified purpose, you may withdraw your consent at any time and we will
                            stop any further processing of your data for that purpose.
                        </p>
                        <p>
                            In addition, subject to applicable law, you have the right to request
                            access to, correct, and delete your personal data, and to ask for data
                            portability. You may also object to our processing of your personal data
                            or ask that we restrict the processing of your personal data in certain
                            instances. If you wish to do any of these things, please contact
                            info@nextlab3.com.
                        </p>
                        <p>7. HOW CAN I DELETE MY ACCOUNT?</p>
                        <p>
                            Should you ever decide to delete your Account, you may do so by emailing
                            info@nextlab3.com. If you terminate your Account, any association between
                            your Account and information we store will no longer be accessible
                            through your Account.
                        </p>
                        <p>
                            8. LINKS TO AND INTERACTION WITH THIRD PARTY PRODUCTS
                        </p>
                        <p>
                            The Site may enable you to interact with or contain links to third party
                            websites, mobile software applications and services that are not owned
                            or controlled by us (each a “Third-Party Service”). We are not
                            responsible for the privacy practices or the content of such Third-Party
                            Services. Please be aware that Third Party Services may collect Personal
                            Information from you. Accordingly, we encourage you to read the terms
                            and conditions and privacy policy of each Third-Party Service that you
                            choose to use or interact with.
                        </p>
                        <p>9. COOKIES AND OTHER TRACKING TECHNOLOGIES</p>
                        <p>
                            Our Site may utilize “cookies”, anonymous identifiers and other tracking
                            technologies in order to for us to provide our Site and present you with
                            information that is customized for you. A “cookie” is a small text file
                            that may be used, for example, to collect information about activity on
                            the Site. Certain cookies and other technologies may serve to recall
                            Personal Information, such as an IP address, previously indicated by a
                            user. Most browsers allow you to control cookies, including whether or
                            not to accept them and how to remove them.
                        </p>
                        <p>
                            10. EU GDPR and UK Data Protection Laws - Legal Basis
                        </p>
                        <p>
                            The EU GDPR and UK data protection laws require a legal basis for our
                            use of personal information. Our basis varies depending on the specific
                            purpose for which we use personal information. We rely on:
                        </p>
                        <ul>
                            <li>
                                Performance of a contract when we provide you with products or
                                services, or communicate with you about them. This includes when we
                                use your personal information to take and handle orders, and process
                                payments.
                            </li>
                            <li>
                                Our legitimate business interests and the interests of our users when
                                we detect and prevent fraud and abuse in order to protect the security
                                of our users, ourselves, or others.
                            </li>
                            <li>
                                Your consent when we ask for your consent to process your personal
                                information for a specific purpose that we communicate to you. When
                                you consent to our processing your personal information for a
                                specified purpose, you may withdraw your consent at any time and we
                                will stop processing of your data for that purpose.
                            </li>
                            <li>
                                Compliance with a legal obligation when we use your personal
                                information to comply with laws. For instance, we collect bank account
                                information for identity verification purposes.
                            </li>
                            <li>These and other legal bases depending on the purpose for which we use personal information.</li>
                        </ul>
                        <p>11. CHILDREN’S PRIVACY</p>
                        <p>
                            Our products and services are not directed to persons under the age of
                            18, hereinafter “Children”, “Child” and we do not knowingly collect
                            personal information from Children. If we learn that we have
                            inadvertently gathered personal information from a Child, we will take
                            legally permissible measures to remove that information from our
                            records. The Company will require the user to close his or her account
                            and will not allow the use of our products and services. If you are a
                            parent or guardian of a Child, and you become aware that a Child has
                            provided personal information to us, please contact us at info@nextlab3.com
                            and you may request to exercise your applicable access, rectification,
                            cancellation, and/or objection rights.
                        </p>
                        <p>12. CHANGES TO THIS POLICY</p>
                        <p>
                            Technology and the Internet are rapidly changing. Nextlab3 therefore is
                            likely to make changes to the Services in the future and as a
                            consequence will need to revise this Policy to reflect those changes.
                            When we revise the Policy, Nextlab3 will post the new Policy on the Nextlab3
                            website’s home page (nextlab3.com), so you should review that page
                            periodically. If we make a material change to the Policy, you will be
                            provided with appropriate notice. If we maintain your email address, we
                            also may email you a copy of the revised Policy at your most recently
                            provided email address. It is therefore important that you update your
                            email address if it changes.
                        </p>
                        <p>13. CONTACT US</p>
                        <p>
                            If you have any questions, concerns or complaints regarding our
                            compliance with this notice and the data protection laws, or if you wish
                            to exercise your rights, we encourage you to first contact us at &nbsp;
                            <a href="mailto:info@nextlab3.com">info@nextlab3.co</a>
                        </p>
                        <p>14. DATA PROTECTION AUTHORITIES</p>
                        <p>
                            If you are not satisfied with our response to your complaint, you have
                            the right to submit a complaint with our regulator. You can contact the
                            appropriate regulator direct from the details below:
                        </p>
                        <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>For residents of the United Kingdom:</p>
                        <p>The Information Commissioner’s Office</p>
                        <p>Wycliffe House, Water Ln:</p>
                        <p>Wilmslow SK9 5AF, UK</p>

                        <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>For residents of Europe:</p>
                        <p>Irish Data Protection Commission</p>
                        <p>21 Fitzwilliam Square South</p>
                        <p>Dublin 2</p>
                        <p>D02 RD28</p>
                        <p>Ireland</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
