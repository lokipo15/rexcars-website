import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || undefined);

export default resend;