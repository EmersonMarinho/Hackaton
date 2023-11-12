import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import bronzeBadge from '../assets/bronzeBadge.png';
import silverBadge from '../assets/silverBadge.png';
import goldBadge from '../assets/goldBadgepng.png';
import platinumBadge from '../assets/platinumBadge.png';

const DashboardPage = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userBenefits, setUserBenefits] = useState([
    { id: 1, description: "5% de cashback na próxima compra", claimed: false },
  ]);
  const [userChallenges, setUserChallenges] = useState([
    { id: 1, description: "Compartilhe um produto no Facebook", points: 50, completed: false },
    { id: 2, description: "Assista 4 Horas de Aula", points: 100, completed: false },
  ]);
  const [user, setUser] = useState({
    name: "Luiz Souza",
    points: 350,
    nextLevelPoints: 700
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const claimBenefit = (id: number) => {
    setUserBenefits(userBenefits.map(benefit => 
      benefit.id === id ? { ...benefit, claimed: true } : benefit
    ));
  };

  const completeChallenge = (id: number) => {
    const newChallenges = userChallenges.map(challenge =>
      challenge.id === id ? { ...challenge, completed: true } : challenge
    );
    setUserChallenges(newChallenges);

    const challengePoints = newChallenges.find(challenge => challenge.id === id)?.points || 0;
    setUser(prevUser => ({
      ...prevUser,
      points: prevUser.points + challengePoints,
    }));
  };
  

  const leaderboard = [
    { position: "Primeiro Colocado", name: "Rodrigo Goes", points: 2000 },
    { position: "Segundo Colocado", name: "Chris Bumstead", points: 1800 },
    { position: "Terceiro Colocado", name: "Paulo Muzy", points: 1500 },
    { position: "Quarto Colocado", name: "Luiz Souza", points: 1200 },
    { position: "Quinto Colocado", name: "Julio Batista", points: 1000 },
  ];
  const badges = [
    { name: "Bronze", description: "Assistiu 10 aulas", image: bronzeBadge },
    { name: "Silver", description: "Conclui seu Primeiro Curso", image: silverBadge },
    { name: "Gold", description: "Agendou uma Entrevista de Emprego", image: goldBadge },
    { name: "Platinum", description: "Respondeu 5 perguntas", image: platinumBadge },
  ];

  const dailyChallenges = [
    { id: 1, task: "Compartilhe um produto no Facebook", points: 5, completed: false },
    { id: 2, task: "Assistir 4 horas de Aula Na Plataforma", points: 10, completed: false },
  ];

  const progressBarWidth = (user.points / user.nextLevelPoints) * 100;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">SOU POSITIVO</h1>
      <p className='text-center mb-4'>Por um futuro mais Positivo.</p>
      
      {/* Left Column */}
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/2 p-4">
          {/* Welcome Card */}
          <div className="border rounded mb-4 p-4">
            <h2 className="font-bold mb-2 uppercase">SEJA BEM VINDO, {user.name}</h2>
            <p>Você tem {user.points} pontos disponíveis</p>
            <button onClick={openModal} className="mt-2 bg-green-500 text-white rounded p-2">Veja suas Vantagens</button>
            <p className="mt-4">Gere mais pontos com Engajamento, Estudos, Desafios e Compras.</p>
          </div>
             {/* Daily tasks */}
        <div className="my-6 flex justify-center align-middle flex-wrap">
              <h2 className="text-2xl font-semibold mb-3">Desafios Semanais</h2>
              <div className="flex flex-wrap justify-center gap-4 text-center">
                {dailyChallenges.map(challenge => (
                  <div key={challenge.id} className={`p-4 rounded-lg ${challenge.completed ? 'bg-green-200' : 'bg-blue-200'} shadow-lg`}>
                    <h3 className="font-bold">{challenge.task}</h3>
                    <p>+{challenge.points} pontos</p>
                    <button 
                      onClick={() => {
                        completeChallenge(challenge.id);
                        setIsButtonClicked(true);
                      }}
                      disabled={isButtonClicked || challenge.completed}
                      className={`mt-2 ${challenge.completed ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded px-4 py-1`}
                    >
                      {isButtonClicked ? 'Concluído' : 'Concluir'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          
          {/* Badges Display */}
          <div className="w-full flex justify-around mt-4">
            {badges.map((badge, index) => (
              <div key={index} className="relative group">
                <img src={badge.image} alt={badge.name} className="w-16 h-16 rounded-full shadow-lg" />
                <div className="absolute bottom-0 translate-y-full w-32 bg-black text-white text-center text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-full lg:w-1/2 p-4">
          {/* Points Card */}
          <div className="border rounded mb-4 p-4 relative">
            <div className='flex justify-end'>
            <div className='absolute w-8 justify-end flex items-center gap-1'>
              <span className='text-[14px] items-center align-middle'>BRONZE</span>
              <img src={bronzeBadge} />
            </div>
            </div>

            <h2 className="font-bold mb-2">PONTUAÇÃO TOTAL {user.points} PONTOS</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progressBarWidth}%` }}></div>
            </div>

            {/* Leaderboard */}
            <ul className="mt-4 space-y-2">
              {leaderboard.map((entry, index) => (
                <li key={index} className="flex justify-between items-center p-2 border rounded">
                  <span>{entry.position}</span>
                  <span>{entry.name}</span>
                  <span className="badge bg-gray-300 rounded-full px-2 py-1">{entry.points}</span>
                </li>
              ))}
            </ul>
            <div className='flex justify-center'>
              <button className="mt-4 bg-green-500 text-white rounded p-2">ACESSAR CENTRO DE TREINAMENTO</button>
            </div>
          </div>
          <div className='flex justify-center w-full'>
              <button className="w-full mt-4 bg-blue-500 text-white rounded p-2 flex justify-center items-start">IR PARA A REDE SOCIAL</button>
            </div>
        </div>
      </div>

      {/* Modal */}
      <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Vantagens
                </Dialog.Title>
                <div className="mt-2">
                  <ul>
                    {userBenefits.map((benefit) => (
                      <li key={benefit.id} className="flex justify-between items-center p-2 border-b">
                        <span>{benefit.description}</span>
                        <button
                          onClick={() => claimBenefit(benefit.id)}
                          className={`text-sm ${benefit.claimed ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600'} text-white rounded px-4 py-1`}
                          disabled={benefit.claimed}
                        >
                          {benefit.claimed ? 'Resgatado' : 'Resgatar'}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DashboardPage;
