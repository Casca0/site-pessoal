import profilePic from '../assets/profilePic.webp';

export default function AboutMe() {
  return (
    <div className="flex h-full w-full snap-start items-center justify-evenly bg-inherit">
      <section className="cursor-default antialiased">
        <h1 className="text-4xl">Sobre mim</h1>
        <p>Minhas experiências</p>
      </section>
      <div className="h-64 w-64 rounded-full">
        <img
          src={profilePic}
          alt="Imagem de perfil"
          className="h-full w-full rounded-full object-cover shadow-2xl shadow-purple-950"
        />
      </div>
    </div>
  );
}
