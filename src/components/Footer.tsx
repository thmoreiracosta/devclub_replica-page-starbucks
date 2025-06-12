export default function Footer() {
  return (
    <footer className="w-full bg-white border-t text-sm text-gray-700 mt-12">
      <div className="w-full max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Sobre nós</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Nossa empresa</a>
            </li>
            <li>
              <a href="#">Nosso café</a>
            </li>
            <li>
              <a href="#">Atendimento ao cliente</a>
            </li>
            <li>
              <a href="#">Canal de Denúncias</a>
            </li>
            <li>
              <a href="#">Código de Conduta Zamp</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Carreira</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Central de carreiras</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Impacto Social</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Comunidade</a>
            </li>
            <li>
              <a href="#">Meio Ambiente</a>
            </li>
            <li>
              <a href="#">Fornecimento ético</a>
            </li>
            <li>
              <a href="#">Histórias Starbucks</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Starbucks Rewards</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Termos & Condições do Starbucks Card</a>
            </li>
            <li>
              <a href="#">Termos & Condições do Starbucks Rewards</a>
            </li>
            <li>
              <a href="#">Termos & Condições do Gift Card</a>
            </li>
            <li>
              <a href="#">Termos & Condições de Promoções Starbucks</a>
            </li>
            <li>
              <a href="#">Termos & Condições Peça e Pague pelo Celular</a>
            </li>
          </ul>
        </div>

        <div className="text-center leading-tight">
          <a
            href="https://historias.starbucks.com/br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tracking-mega text-[8px] font-bold text-gray-600">
              STARBUCKS®
            </div>
            <div className="text-[20px] font-bold text-gray-900">HISTÓRIAS</div>
            <div className="tracking-mega text-[8px] font-bold text-gray-600">
              LATIN AMERICA
            </div>
          </a>
        </div>
      </div>

      <hr className="border-gray-300 my-6 mx-auto max-w-7xl" />

      <div className="w-full max-w-5xl mx-auto px-4 pb-6">
        {/* Ícones sociais */}
        <div className="flex space-x-4 mb-4">
          {[
            "icon-spotify",
            "icon-facebook",
            "icon-linkedin",
            "icon-instagram",
            "icon-youtube",
            "icon-twitter",
          ].map((icon) => (
            <a key={icon} href="#" aria-label={icon}>
              <img src={`/assets/${icon}.svg`} alt={icon} className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Links e copyright */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
          <a href="#">Política de privacidade</a>
          <span>|</span>
          <a href="#">Política de troca de produto</a>
          <span>|</span>
          <a href="#">Termos de uso</a>
          <span>|</span>
          <a href="#">Política de Cookies</a>
        </div>

        <p className="text-xs text-gray-500">
          © 2025 Starbucks Coffee Company. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
