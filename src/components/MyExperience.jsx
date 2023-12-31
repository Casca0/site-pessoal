import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';

import linkedInIcon from '../assets/linkedin.svg';
import gitHubIcon from '../assets/github.svg';

export default function MyExperience() {
  const [projects, setProjects] = useState([{}]);

  useEffect(() => {
    async function getProjects() {
      const octokit = new Octokit({
        auth: import.meta.env.GITHUB_API_KEY,
      });

      const req = await octokit.request('GET /users/{username}/repos', {
        username: 'Casca0',
        type: 'owner',
        sort: 'created',
      });

      setProjects(req.data);
    }

    if (projects.length <= 1) {
      getProjects();
    }
  }, [setProjects, projects]);

  return (
    <div className="flex h-max snap-start flex-col py-12 md:h-screen">
      <div className="flex items-center justify-center bg-inherit py-4">
        <section className="cursor-default antialiased">
          <h1 className="my-4 text-center text-4xl md:text-left">
            Minhas experiências, conhecimentos e projetos.
          </h1>
        </section>
      </div>
      <div className="flex h-full flex-col items-center justify-center md:w-full md:flex-row">
        <div className="m-3 h-96 w-max rounded-md bg-purple">
          <h1 className="py-3 text-center text-2xl font-bold">Carreira</h1>
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
        <div className="bg-violet m-3 h-96 w-max rounded-md">
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
        <div className="m-3 h-96 w-max rounded-md bg-teal-800">
          <h1 className="py-3 text-center text-2xl font-bold">
            Projetos pessoais
          </h1>
          <ul
            id="scrollable"
            className="flex h-80 flex-col overflow-y-scroll p-4"
          >
            {projects.flat().map((item, index) => {
              return (
                <li
                  className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3"
                  key={index}
                >
                  <section className="text-center">
                    <h3 className="text-lg font-bold">
                      <a
                        className="transition-all hover:text-slate-500"
                        target="_blank"
                        href={item.html_url}
                        rel="noreferrer"
                      >
                        {item.full_name}
                      </a>
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </section>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="m-3 h-96 w-max rounded-md bg-indigo-700">
          <h1 className="py-3 text-center text-2xl font-bold">Minhas redes</h1>
          <ul
            id="scrollable"
            className="flex h-80 flex-col overflow-y-scroll p-4"
          >
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold">LinkedIn</h3>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lucas-borzani-a56770189/"
                  rel="noreferrer"
                >
                  <img src={linkedInIcon} alt="LinkedIn" className="my-2 h-8" />
                </a>
              </div>
            </li>
            <li className="m-3 w-72 rounded-lg border-4 border-solid border-slate-300 p-3">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold">GitHub</h3>
                <a
                  target="_blank"
                  href="https://github.com/Casca0"
                  rel="noreferrer"
                >
                  <img src={gitHubIcon} alt="GitHub" className="my-2 h-8" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
