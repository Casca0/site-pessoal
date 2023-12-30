import profilePic from '../assets/profilePic.webp';

function scrollDown() {
  window.scrollBy(0, 1000);
}

export default function WelcomeContent() {
  return (
    <div className="flex h-full w-full animate-gradient-roll snap-start items-center justify-evenly bg-gradient-to-l from-sky-600 via-blue-800 to-purple-800 bg-400">
      <section className="cursor-default antialiased">
        <h1 className="text-4xl">Seja bem-vindo ao meu site pessoal!</h1>
        <p>Conheça um pouco sobre minhas experiências e meus projetos.</p>
      </section>
    </div>
  );
}
