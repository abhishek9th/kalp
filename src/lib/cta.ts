/** Opens the full-screen "Connect With Us" callback modal from anywhere. */
export const openCTA = () => window.dispatchEvent(new CustomEvent('open-cta'))
export const CTA_EVENT = 'open-cta'
