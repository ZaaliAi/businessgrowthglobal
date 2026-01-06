'use client';

import Script from 'next/script';

export default function WebinarRegistrationForm() {
  return (
    <div className="w-full min-h-[600px] bg-white rounded-lg">
      <iframe
        src="https://link.clickmovements.com/widget/form/d0JGpLhe7FwmeBvArbrk"
        style={{ width: '100%', border: 'none', borderRadius: '3px' }}
        scrolling="no"
        id="inline-d0JGpLhe7FwmeBvArbrk"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="AEROPS Webinar Form"
        data-height="auto"
        data-layout-iframe-id="inline-d0JGpLhe7FwmeBvArbrk"
        data-form-id="d0JGpLhe7FwmeBvArbrk"
        title="AEROPS Webinar Form"
      ></iframe>
      <Script 
        src="https://link.clickmovements.com/js/form_embed.js" 
        strategy="afterInteractive" 
      />
    </div>
  );
}
