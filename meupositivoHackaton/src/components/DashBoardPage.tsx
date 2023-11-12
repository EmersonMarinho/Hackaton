/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tooltip } from '@mui/material';

import { InformationCircleIcon } from '@heroicons/react/24/outline';


const DashboardPage = () => {
  const user = { name: "Fulano", points: 1200, nextLevelPoints: 2000 };
  const leaderboard = [
    { position: "Primeiro COLOCADO", points: 2000 },
    { position: "Segundo COLOCADO", points: 1800 },
    { position: "Terceiro COLOCADO", points: 1500 },
    { position: "Quarto COLOCADO", points: 1200 },
    { position: "Quinto COLOCADO", points: 1000 },
  ];

  const badges = [
    { name: "Bronze", description: "Bronze level achiever" },
    { name: "Silver", description: "Silver level achiever" },
    { name: "Gold", description: "Gold level achiever" },
    { name: "Platinum", description: "Platinum level achiever" },
  ];


  // Calculate the width of the progress bar
  const progressBarWidth = (user.points / user.nextLevelPoints) * 100;

//   const DiamondBadge = ({ badge }: unknown) => (
//     <Tooltip title={badge.description} arrow>
//       <div className="w-16 h-16 bg-transparent border-4 border-solid border-gray-700 transform rotate-45 mx-auto cursor-pointer" />
//     </Tooltip>
//   );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">SOU POSITIVO</h1>
      <div className="flex flex-wrap justify-between items-start">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4">
          {/* Welcome Card */}
          <div className="border rounded mb-4 p-4">
            <h2 className="font-bold mb-2">SEJA BEM VINDO, {user.name}</h2>
            <p>Você tem {user.points} pontos disponíveis</p>
            <button className="mt-2 bg-green-500 text-white rounded p-2">Veja suas Vantagens</button>
            <p className="mt-4">Próximo produto, Celular, Notebook, X horas a mais de conteúdo do mês.</p>
          </div>
          
          {/* Diamond Badges */}
          <div className="w-full flex justify-around mt-4">
          {badges.map((badge, index) => (
            <div key={index} className="relative group">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Icon Placeholder*/}
                <InformationCircleIcon className="w-8 h-8 text-gray-700" />
              </div>
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
          <div className="border rounded mb-4 p-4">
            <h2 className="font-bold mb-2">PONTUAÇÃO TOTAL {user.points} PONTOS</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progressBarWidth}%` }}></div>
            </div>
            {/* Leaderboard */}
            <ul className="mt-4 space-y-2">
              {leaderboard.map((entry, index) => (
                <li key={index} className="flex justify-between items-center p-2 border rounded">
                  <span>{entry.position}</span>
                  <span className="badge bg-gray-300 rounded-full px-2 py-1">{entry.points}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-green-500 text-white rounded p-2">ACESSAR CENTRO DE TREINAMENTO</button>
          </div>
          
          {/* Diamond Badges */}
          <div className="flex justify-around">
            {/* Render diamond badges*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
