// Headlines and text. next/font needs literal options in every call.
import { Merriweather, Public_Sans } from 'next/font/google';

const serif = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['400', '700'], variable: '--f-serif' });
const sans = Public_Sans({ subsets: ['latin'], display: 'swap', variable: '--f-sans' });

/** The two variable class names for <html>. */
export const fontClasses = `${serif.variable} ${sans.variable}`;
