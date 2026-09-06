export type ContactLocale = "en" | "zh";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  consent: boolean;
};

export function buildContactPayload(form: ContactFormValues, locale: ContactLocale) {
  return {
    ...form,
    _subject: `Website enquiry: ${form.enquiryType}`,
    _language: locale,
  };
}
