-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 16 sep. 2021 à 16:10
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bdd_mrdc`
--

-- --------------------------------------------------------

--
-- Structure de la table `media`
--

CREATE TABLE `media` (
  `id` varchar(36) NOT NULL,
  `magazine` varchar(255) NOT NULL,
  `articleTitle` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `media`
--

INSERT INTO `media` (`id`, `magazine`, `articleTitle`, `url`, `date`) VALUES
('33ec9905-afbb-4c5d-9bd5-c7d46eca234d', 'La provence', 'Marseille : roller derby, dans l\'antre des Bloody Skulls ', 'https://www.laprovence.com/article/sports/2039767/marseille-roller-derby-dans-lantre-des-bloody-skulls.html', '2012-11-06'),
('37cc74dd-f374-47f7-9b12-7021e4487d5f', '20minutes', 'Marseille: «Mission Cléopâtre», une équipe de roller derby part en Égypte pour aider un club qui galère', 'https://www.20minutes.fr/marseille/2034583-20170322-marseille-mission-cleopatre-equipe-roller-derby-part-egypte-aider-club-galere', '2017-03-22'),
('4dcac70d-144b-4fee-8818-fdb2d848aa67', 'Made in marseille', 'Marseille Roller Derby : (presque) tous les coups sont permis !', 'https://madeinmarseille.net/32874-roller-derby-club/', '2018-01-18'),
('516205f9-24b9-47e5-9861-4496bb0d9e5e', 'Blog : Jojo Migrateur', 'Le Roller Derby, un sport américain à Marseille ', 'http://jojomigrateur.over-blog.com/article-le-roller-derby-un-sport-americain-a-marseille-122415403.html', '2014-02-05'),
('86586f14-6984-4bec-ab31-684b1c8c41fa', 'Le dauphine', 'Valence : les Red Valentines Revenge, stars du roller derby ', 'https://www.ledauphine.com/sport/2020/02/17/valence-les-red-valentines-revenge-stars-du-roller-derby', '2020-02-17'),
('96d5fccc-d0cb-4eca-a116-cf22b3972dd6', 'La provence', 'De Marseille au Caire, le roller derby écrase le sexisme ', 'https://www.laprovence.com/article/papier/4865485/de-marseille-aucaire-le-roller-derby-ecrase-le-sexisme.html', '2018-03-05'),
('cd3af4f3-176c-4602-a3d3-72ba7ff6577a', 'Huffington post', '8 raisons pour lesquelles nous souhaitons rencontrer l\'équipe égyptienne de Roller Derby', 'https://www.huffingtonpost.fr/margaid-quioc/8-raisons-pour-lesquelles-nous-souhaitons-rencontrer-lequipe-eg_a_21874400/', '2017-03-08'),
('e62d991d-754d-4da7-afec-8cab0b4b8ec6', 'La provence', 'Tout roule pour le docteur Whoosh ', 'https://www.laprovence.com/article/edition-marseille/4087997/tout-roule-pour-le-docteur-whoosh.html', '2016-08-25');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `id` varchar(36) NOT NULL,
  `teamName` varchar(255) NOT NULL,
  `teamStory` varchar(500) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `flatTrackUrl` varchar(255) NOT NULL,
  `isActiveTeam` tinyint(4) NOT NULL DEFAULT '1',
  `teamLogo` varchar(255) NOT NULL,
  `teamPicture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`id`, `teamName`, `teamStory`, `order`, `flatTrackUrl`, `isActiveTeam`, `teamLogo`, `teamPicture`) VALUES
('56737917-eeac-442b-9326-0862dbe916a0', 'Bloody Skulls', 'La première équipe crée en 2011. \nElle intègre le Championnat de France en 2015 lors de sa création. Alors classée 13ème équipe Française, elle intègre la Nationale 1 au côté des All Blocks (Mérignac), le DCCLM (Montpellier) et la Horder (Orcet). L\'équipe est top\nEncore présente en championnat, elle joue aussi des matchs internationaux pour se challenger chaque année.', 0, 'http://flattrackstats.com/teams/11050', 1, '', ''),
('6eb0fec5-4471-46c8-974c-022ccbaa460a', 'Chapacans', 'Bien que l’association ai toujours eu des hommes (coachs,\r\n            arbitres...), ils n’étaient malheureusement pas assez nombreux pour\r\n            créer une équipe... Jusqu’en 2015 où les joueurs téméraires ont\r\n            fondé les Chapacans ! Encore trop peu nombreux pour integrer le\r\n            Championnat, l’équipe s’est associé avec celle d’avignon (les Warren\r\n            Track Fighters) en 2019 pour intégrer le championnat de France en\r\n            Nationale 1 !', 2, 'http://flattrackstats.com/teams/41270', 1, '', ''),
('d33e2f00-8996-4f10-a62a-7bc6f5a68a2d', 'Rascasses', 'Les arbitres sont nécessaire dans le Roller Derby, et surtout, il en\r\n            faut beaucoup pour organiser un match. C’est pour ça que le MRDC à\r\n            crée une équipe d’arbitre pour motiver ses recrues à s’initier à\r\n            l’arbitrage. Nous organisons aussi des Bootcamps (formation) et nos\r\n            arbitres participent à de nombreux événement en France et à\r\n            l’international.', 4, '', 1, '', ''),
('e7dae2e8-7078-42f6-ab16-8d010465efba', 'Newbee', NULL, 6, '', 0, '', '');

-- --------------------------------------------------------

--
-- Structure de la table `training`
--

CREATE TABLE `training` (
  `id` varchar(36) NOT NULL,
  `trainingDay` enum('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche') NOT NULL,
  `trainingTime` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `training`
--

INSERT INTO `training` (`id`, `trainingDay`, `trainingTime`) VALUES
('456eb6eb-b53f-4f10-8a44-1c8333d34ef7', 'Jeudi', '19h à 21h30'),
('6cb58e11-6057-4366-b9fa-4b7a3c32e9f9', 'Lundi', '19h à 21h30'),
('c8cc4ed4-fd5f-4a08-8cf2-3839ad6eb265', 'Mardi', '19h à 21h30');

-- --------------------------------------------------------

--
-- Structure de la table `trainingSpot`
--

CREATE TABLE `trainingSpot` (
  `Id` int(11) NOT NULL,
  `spotName` varchar(50) NOT NULL,
  `spotAdress` text NOT NULL,
  `spotComment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `training_teams_team`
--

CREATE TABLE `training_teams_team` (
  `trainingId` varchar(36) NOT NULL,
  `teamId` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `training_teams_team`
--

INSERT INTO `training_teams_team` (`trainingId`, `teamId`) VALUES
('456eb6eb-b53f-4f10-8a44-1c8333d34ef7', '56737917-eeac-442b-9326-0862dbe916a0'),
('456eb6eb-b53f-4f10-8a44-1c8333d34ef7', '6eb0fec5-4471-46c8-974c-022ccbaa460a'),
('456eb6eb-b53f-4f10-8a44-1c8333d34ef7', 'e7dae2e8-7078-42f6-ab16-8d010465efba'),
('6cb58e11-6057-4366-b9fa-4b7a3c32e9f9', 'e7dae2e8-7078-42f6-ab16-8d010465efba'),
('c8cc4ed4-fd5f-4a08-8cf2-3839ad6eb265', '56737917-eeac-442b-9326-0862dbe916a0'),
('c8cc4ed4-fd5f-4a08-8cf2-3839ad6eb265', '6eb0fec5-4471-46c8-974c-022ccbaa460a');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','collaborator') NOT NULL DEFAULT 'collaborator'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `password`, `role`) VALUES
('467eae35-2426-48a0-96aa-44ec7c1ab46a', 'Admin', 'marseille.roller.derby.club@gmail.com', '$2y$10$78N5EjFIQKnfveCZtsMpqOOi0DWyxbHJPQd.7cq4m8Ig7MGmxACmq', 'admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `trainingSpot`
--
ALTER TABLE `trainingSpot`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `training_teams_team`
--
ALTER TABLE `training_teams_team`
  ADD PRIMARY KEY (`trainingId`,`teamId`),
  ADD KEY `IDX_85c5f35322b41bd6b91482905f` (`trainingId`),
  ADD KEY `IDX_858b50aa94c70a0f3fcdf3840d` (`teamId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `trainingSpot`
--
ALTER TABLE `trainingSpot`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `training_teams_team`
--
ALTER TABLE `training_teams_team`
  ADD CONSTRAINT `FK_858b50aa94c70a0f3fcdf3840db` FOREIGN KEY (`teamId`) REFERENCES `team` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_85c5f35322b41bd6b91482905fb` FOREIGN KEY (`trainingId`) REFERENCES `training` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
