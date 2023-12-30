import profilePic from '../assets/profilePic.webp';

export default function AboutMe() {
  return (
    <div className="flex h-max snap-start flex-col md:h-screen">
      <div className="flex flex-col items-center bg-inherit py-4 md:flex-row md:justify-evenly">
        <section className="cursor-default antialiased">
          <h1 className="my-4 text-center text-4xl md:text-left">Sobre mim</h1>
          <p className="text-center text-xl md:text-left md:text-base">
            Minhas experiências, conhecimentos e projetos.
          </p>
        </section>
        <div className="my-4 h-44 w-44 rounded-full">
          <img
            src={profilePic}
            alt="Imagem de perfil"
            className="h-full w-full rounded-full object-cover shadow-2xl shadow-purple-950"
          />
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center md:w-full md:flex-row">
        <div className="m-3 h-96 w-max rounded-md bg-purple">
          <h1 className="py-3 text-center text-2xl font-bold">Experiências</h1>
          <ul
            id="scrollable"
            className="flex h-80 flex-col overflow-y-scroll p-4"
          >
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section>
                <h3 className="text-xl font-bold">Enext</h3>
                <p className="text-base underline underline-offset-4">
                  Estágio - VTEX Front-end
                </p>
                <p className="my-3 text-sm">
                  Evolução de lojas virtuais utilizando tecnologias como
                  JavaScript, jQuery, pré-processadores de CSS, Babel, Gulp,
                  React.js.
                </p>
                <p>(03/2021 - 11/2021)</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section>
                <h3 className="text-xl font-bold">Enext</h3>
                <p className="text-base underline underline-offset-4">
                  Desenvolvedor Front-end VTEX Jr. 1
                </p>
                <p className="my-3 text-sm">
                  Evolução de lojas virtuais utilizando tecnologias como
                  JavaScript, jQuery, TypeScript, GraphQL, pré-processadores de
                  CSS, Babel, Gulp, React.js.
                </p>
                <p>(11/2021 - 05/2022)</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section>
                <h3 className="text-xl font-bold">Maeztra</h3>
                <p className="text-base underline underline-offset-4">
                  Desenvolvedor Especialista Front-end Jr. 3
                </p>
                <p className="my-3 text-sm">
                  Evolução de lojas virtuais utilizando tecnologias como
                  JavaScript, jQuery, pré-processadores de CSS, Babel, Gulp,
                  React.js.
                </p>
                <p>(05/2022 - 07/2022)</p>
              </section>
            </li>
          </ul>
        </div>
        <div className="bg-light-blue m-3 h-96 w-max rounded-md">
          <h1 className="py-3 text-center text-2xl font-bold">Conhecimentos</h1>
          <ul
            id="scrollable"
            className="flex h-80 flex-col overflow-y-scroll p-4"
          >
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">JavaScript</h3>
                <p className="text-sm">Avançado</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">TypeScript</h3>
                <p className="text-sm">Intermediário</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">Python</h3>
                <p className="text-sm">Básico</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">Node</h3>
                <p className="text-sm">Intermediário</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">Next</h3>
                <p className="text-sm">Intermediário</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">React</h3>
                <p className="text-sm">Intermediário</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">Métodos ágeis</h3>
                <p className="text-sm">SCRUM e Kanban</p>
              </section>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <section className="text-center">
                <h3 className="text-lg font-bold">Inglês</h3>
                <p className="text-sm">Intermediário</p>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
