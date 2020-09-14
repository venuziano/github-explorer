import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Explorer github" />
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input placeholder="Informe o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/15386984?s=460&u=a927908b5d7306d6d5eb234da4094b4a9c7dbdb4&v=4"
          alt="Rafael Rodrigues"
        />
        <div>
          <strong>profys</strong>
          <p>descrição do profys aqui</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/15386984?s=460&u=a927908b5d7306d6d5eb234da4094b4a9c7dbdb4&v=4"
          alt="Rafael Rodrigues"
        />
        <div>
          <strong>profys</strong>
          <p>descrição do profys aqui</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/15386984?s=460&u=a927908b5d7306d6d5eb234da4094b4a9c7dbdb4&v=4"
          alt="Rafael Rodrigues"
        />
        <div>
          <strong>profys</strong>
          <p>descrição do profys aqui</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>

    </>
  )
};

export default Dashboard;
