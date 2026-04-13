export interface WhatsAppNumber {
  id: string;
  phone: string;
  label: string;
  clicks: number;
  maxClicks: number;
  active: boolean;
}

export interface WhatsAppConfig {
  numbers: WhatsAppNumber[];
  defaultMessage: string;
}

const STORAGE_KEY = "whatsapp_config";

const DEFAULT_CONFIG: WhatsAppConfig = {
  numbers: [
    {
      id: "1",
      phone: "5511999999999",
      label: "Número Principal",
      clicks: 0,
      maxClicks: 50,
      active: true,
    },
  ],
  defaultMessage: "Olá! Gostaria de mais informações sobre os descontos.",
};

export const getWhatsAppConfig = (): WhatsAppConfig => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return DEFAULT_CONFIG;
};

export const saveWhatsAppConfig = (config: WhatsAppConfig) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
};

export const getNextWhatsAppNumber = (): WhatsAppNumber | null => {
  const config = getWhatsAppConfig();
  const activeNumbers = config.numbers.filter((n) => n.active);
  if (activeNumbers.length === 0) return null;

  // Find first number that hasn't reached max clicks
  const available = activeNumbers.find((n) => n.clicks < n.maxClicks);
  if (available) return available;

  // All numbers reached max, reset all and return first
  config.numbers.forEach((n) => (n.clicks = 0));
  saveWhatsAppConfig(config);
  return activeNumbers[0];
};

export const registerClick = (numberId: string) => {
  const config = getWhatsAppConfig();
  const number = config.numbers.find((n) => n.id === numberId);
  if (number) {
    number.clicks += 1;
    saveWhatsAppConfig(config);
  }
};

export const openWhatsApp = () => {
  const number = getNextWhatsAppNumber();
  if (!number) return;
  registerClick(number.id);
  const config = getWhatsAppConfig();
  const msg = encodeURIComponent(config.defaultMessage);
  window.open(`https://wa.me/${number.phone}?text=${msg}`, "_blank");
};

// Admin credentials
export const ADMIN_USER = "admin";
export const ADMIN_PASS = "consultoria2024";
