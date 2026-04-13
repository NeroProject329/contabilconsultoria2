let lastPhone = "";

const API_BASE = process.env.NEXT_PUBLIC_ZAP_API_BASE;
const DEFAULT_MESSAGE =
  process.env.NEXT_PUBLIC_ZAP_DEFAULT_MESSAGE ||
  "Olá! Gostaria de consultar minhas ofertas disponíveis.";

function getDomain(): string {
  return window.location.hostname.replace(/^www\./, "");
}

function onlyDigits(v: string) {
  return String(v || "").replace(/\D/g, "");
}

function buildWaUrl(phoneDigits: string, message: string) {
  const phone = onlyDigits(phoneDigits);
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${phone}?text=${text}`;
}

async function fetchPhoneByDomain(domain: string): Promise<string> {
  if (!API_BASE) throw new Error("NEXT_PUBLIC_ZAP_API_BASE não configurada no .env");

  const url = `${API_BASE}/zap?domain=${encodeURIComponent(domain)}`;

  const r = await fetch(url, { method: "GET", cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);

  const data = await r.json();

  const phone =
    onlyDigits(data?.phone) ||
    onlyDigits(data?.numero) ||
    onlyDigits(data?.data?.phone) ||
    onlyDigits(data?.data?.numero);

  if (!phone) throw new Error("Número não retornado pela API");

  return phone;
}

export async function openZap(message?: string) {
  try {
    const domain = getDomain();
    if (!domain) throw new Error("Domínio inválido");

    const phone = await fetchPhoneByDomain(domain);
    lastPhone = phone;

    const url = buildWaUrl(phone, message || DEFAULT_MESSAGE);
    window.open(url, "_blank", "noopener,noreferrer");
  } catch {
    if (lastPhone) {
      const url = buildWaUrl(lastPhone, message || DEFAULT_MESSAGE);
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    alert("WhatsApp indisponível no momento. Tente novamente mais tarde.");
  }
}