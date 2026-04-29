import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a0a1a] border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Empresa */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-accent flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Empresa
          </h3>

          <p className="text-sm text-gray-300">
            <strong className="text-white">Razão Social:</strong> Borges
            Ferreira Consultoria Contabil e Empresarial LTDA
          </p>

          <p className="text-sm text-gray-300 flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent" />
            <span>
              <strong className="text-white">CNPJ:</strong>{" "}
              57.924.057/0001-02
            </span>
          </p>
        </div>

        {/* Endereço */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-accent flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Endereço
          </h3>

          <p className="text-sm text-gray-300">
            Avenida Manoel Monteiro - Lado Par, 390, Quadra15 Lote 21 Andar 2
          </p>

          <p className="text-sm text-gray-300">
            Vila Jardim Salvador - Trindade/Trindade
          </p>

          <p className="text-sm text-gray-300">CEP: 75388-455</p>
        </div>

        {/* Contato */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-accent flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Contato
          </h3>

          <a
            href="tel:+5562985838656"
            className="text-sm text-gray-300 flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            (62) 98583-8656
          </a>

          <a
            href="mailto:contato@contabilconsultoria.com"
            className="text-sm text-gray-300 flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" />
            contato@contabilconsultoria.com
          </a>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-accent flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Legal
          </h3>

          <Link
            href="/politica-de-privacidade"
            className="text-sm text-gray-300 flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            Política de Privacidade
          </Link>

          <Link
            href="/termos-de-uso"
            className="text-sm text-gray-300 flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FileText className="w-4 h-4 text-accent" />
            Termos de Uso
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-accent/10 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Borges Ferreira Consultoria Contabil e
          Empresarial LTDA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;