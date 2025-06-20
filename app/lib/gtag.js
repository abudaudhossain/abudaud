export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  console.log("Pageview logged for URL:", url);
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  console.log("Event logged:", { action, category, label, value });
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
