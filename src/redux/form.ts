export interface ContactForm {
  userAddress: string;
  showFullAddress: boolean;
  ward?: string;
  district?: string;
  city?: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type ContactFormKey = keyof ContactForm