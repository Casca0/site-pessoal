import profilePic from '../assets/profilePic.webp';

export default function AboutMe() {
  return (
    <div className="bg-violet h-screen snap-start">
      <div className="flex h-full flex-col items-center p-6 md:flex-row md:justify-evenly md:p-24">
        <div className="my-8 md:my-0">
          <h1 className="text-4xl">Sobre mim</h1>
          <img
            src={profilePic}
            alt="Minha foto"
            className="my-4 w-72 rounded-3xl object-cover shadow-lg shadow-teal-800 md:w-80"
          />
        </div>
        <section className="mx-12 my-6 w-80 md:m-0 md:w-auto">
          <h1 className="text-2xl">
            Lucas Henrique Borzani,
            <br />
            22 anos
          </h1>
          <p className="text-base md:text-sm">Desenvolvedor Front-end</p>
          <p className="my-4 w-full text-lg text-slate-300 md:w-96 md:text-base">
            Tendo meu conhecimento e experiência principalmente focados em
            JavaScript, TypeScript e bibliotecas/frameworks conhecidos como
            React e Next.
          </p>
          <p className="h-auto w-full text-lg text-slate-300 md:w-96 md:text-base">
            Quando não estou estudando ou desenvolvendo novos projetos, estou
            treinando ou praticando vôlei.
          </p>
        </section>
      </div>
    </div>
  );
}
