import Script from "next/script";

/** Cal.com "Test Drive" booking — spread onto any button to open the popup on click. */
export const testDriveCalAttrs = {
  "data-cal-link": "tuvshin-shargaljuut-mhjjvs/tesla-test-driving",
  "data-cal-namespace": "tesla-test-driving",
  "data-cal-config": JSON.stringify({ layout: "month_view", useSlotsViewOnSmallScreen: "true" }),
};

/** Loads the Cal.com element-click embed once; clicks on `[data-cal-link]` elements open the booking popup. */
export function CalEmbed() {
  return (
    <Script id="cal-embed" strategy="afterInteractive">
      {`
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "tesla-test-driving", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["tesla-test-driving"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`}
    </Script>
  );
}
