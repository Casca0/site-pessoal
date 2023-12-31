import ArrowDown from '../assets/arrow_downward.svg';

export default function WelcomeContent() {
  return (
    <div className="h-full w-full snap-start">
      <div className="flex h-full w-full animate-gradient-roll flex-col items-center justify-evenly bg-gradient-to-l from-sky-600 via-blue-800 to-purple-800 bg-400">
        <section className="w-full cursor-default text-center antialiased">
          <h1 className="text-4xl">Seja bem-vindo ao meu site pessoal!</h1>
          <p className="m-4 text-xl md:m-0 md:text-base">
            Conheça um pouco sobre mim, minha carreira e meus projetos.
          </p>
        </section>
        <h1 className="text-xl">Role a página para baixo</h1>
        <img src={ArrowDown} alt="Para baixo" className="w-14" />
      </div>
    </div>
  );
}
