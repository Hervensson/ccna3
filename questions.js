window.CCNA_QUESTIONS = [
  {
    "id": 1,
    "sourceNumber": 1,
    "question": "Un administrateur réseau a modifié un routeur compatible OSPF pour avoir un paramètre de minuterie Hello de 20 secondes. Quel est le nouveau paramètre d’intervalle Dead par défaut?",
    "options": [
      "40 secondes",
      "60 secondes",
      "80 secondes",
      "100 secondes"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 2,
    "sourceNumber": 2,
    "question": "Quelle table OSPF est identique sur tous les routeurs convergents dans la même zone OSPF?",
    "options": [
      "neighbor",
      "contiguïté",
      "routage",
      "topologie"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 3,
    "sourceNumber": 3,
    "question": "Quel groupe d’API est utilisé par le contrôleur SDN pour communiquer avec les diverses applications ?",
    "options": [
      "Les API dirigées vers l’ouest",
      "Les API descendantes",
      "Les API dirigées vers l’est",
      "Les API ascendantes"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 4,
    "sourceNumber": 4,
    "question": "Quelle est la fonction principale d’un hyperviseur ?",
    "options": [
      "Il est utilisé pour créer et gérer plusieurs instances de machine virtuelle sur une machine hôte.",
      "C’est un dispositif qui filtre et vérifie les informations d’identification de sécurité.",
      "Il est utilisé par les FAI pour contrôler les ressources informatiques du cloud.",
      "Il s’agit d’un logiciel utilisé pour coordonner et préparer les données à des fins d’analyse.",
      "C’est un dispositif qui synchronise un groupe de capteurs."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 5,
    "sourceNumber": 5,
    "question": "En quoi la virtualisation est-elle utile à la reprise après sinistre dans un data center ?",
    "options": [
      "Le provisionnement des serveurs est plus rapide.",
      "Tous les équipements n’ont pas être identiques.",
      "Moins d’énergie est consommée.",
      "Il y a toujours du courant."
    ],
    "correct": [
      1
    ],
    "explanation": "Amélioration de la reprise après sinistre : la virtualisation offre des solutions avancées de continuité des activités. Il fournit une capacité d’abstraction matérielle afin que le site de récupération n’ait plus besoin d’avoir un matériel identique au matériel de l’environnement de production. La plupart des plates-formes de virtualisation de serveurs d’entreprise disposent également d’un logiciel qui peut aider à tester et à automatiser le basculement avant qu’un sinistre ne se produise.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 6,
    "sourceNumber": 6,
    "question": "Associez les fonctions aux couches correspondantes. (Les options ne sont pas toutes utilisées.)",
    "options": [
      "couche d’accès",
      "Fournir un accès réseau à l’utilisateur",
      "Constituer la périphérie du réseau",
      "couche distribution",
      "Implémenter une politique d’accès réseau",
      "Définir les limites de routage de couche 3",
      "couche cœur de réseau",
      "Fournir une connectivité haut débit du réseau fédérateur",
      "Constituer un associateur de tous les blocs de campus"
    ],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image19.jpeg"
    ],
    "type": "matching",
    "expectedChoices": 3,
    "theme": "WAN / VPN",
    "matching": {
      "prompts": [
        "couche d’accès",
        "couche distribution",
        "couche cœur de réseau"
      ],
      "answers": [
        "Fournir un accès réseau à l’utilisateur / Constituer la périphérie du réseau",
        "Implémenter une politique d’accès réseau / Définir les limites de routage de couche 3",
        "Fournir une connectivité haut débit du réseau fédérateur / Constituer un associateur de tous les blocs de campus"
      ],
      "correct": [
        "Fournir un accès réseau à l’utilisateur / Constituer la périphérie du réseau",
        "Implémenter une politique d’accès réseau / Définir les limites de routage de couche 3",
        "Fournir une connectivité haut débit du réseau fédérateur / Constituer un associateur de tous les blocs de campus"
      ]
    }
  },
  {
    "id": 7,
    "sourceNumber": 7,
    "question": "Quel ensemble d’entrées de contrôle d’accès permettrait à tous les utilisateurs du réseau 192.168.10.0/24 d’accéder à un serveur Web situé à l’adresse 172.17.80.1, sans toutefois les autoriser à utiliser le protocole Telnet ?",
    "options": [
      "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet",
      "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
      "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
      "access-list 103 deny tcp host 192.168.10.0 any eq 23\naccess-list 103 permit tcp host 192.168.10.1 eq 80"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 8,
    "sourceNumber": 8,
    "question": "Citez trois raisons d’utiliser des adresses IP privées et la NAT ? (Choisissez trois réponses.)",
    "options": [
      "Pour créer plusieurs adresses IP publiques",
      "Pour réduire l’utilisation du processeur sur les routeurs des clients",
      "Pour empêcher les périphériques extérieurs connectés à Internet d’accéder à l’adressage de réseau local",
      "Pour économiser les adresses IP publiques enregistrées",
      "Pour améliorer les performances du routeur connecté à Internet",
      "Pour autoriser l’extension de réseau local sans ajout d’adresses IP publiques supplémentaires"
    ],
    "correct": [
      2,
      3,
      5
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "NAT"
  },
  {
    "id": 9,
    "sourceNumber": 9,
    "question": "Quelle est la caractéristique d’un réseau OSPF à zone unique?",
    "options": [
      "Tous les routeurs ont la même table de routage.",
      "Tous les routeurs ont la même table de voisins.",
      "Tous les routeurs sont dans la zone fédérateur.",
      "Tous les routeurs partagent une base de données de transfert commune."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 10,
    "sourceNumber": 10,
    "question": "Quel est le but de l’établissement d’un étalon réseau ?",
    "options": [
      "Il vérifie la configuration de la sécurité des périphériques réseau.",
      "Il gère les performances des périphériques réseau.",
      "Il crée un point de référence pour des évaluations futures du réseau.",
      "Il fournit une moyenne statistique pour les performances réseau."
    ],
    "correct": [
      2
    ],
    "explanation": "Une ligne de base est utilisée pour établir les performances normales du réseau ou du système. Il peut être utilisé pour comparer les performances futures du réseau ou du système afin de détecter des situations anormales.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 11,
    "sourceNumber": 11,
    "question": "Quelle déclaration décrit un VPN?",
    "options": [
      "Les VPN utilisent des connexions physiques dédiées pour transférer des données entre des utilisateurs distants.",
      "Les VPN utilisent des connexions virtuelles pour créer un réseau privé via un réseau public.",
      "Les VPN utilisent des connexions logiques pour créer des réseaux publics via Internet.",
      "Les VPN utilisent un logiciel de virtualisation de source ouverte pour créer le tunnel via Internet."
    ],
    "correct": [
      1
    ],
    "explanation": "Un VPN est un réseau privé créé sur un réseau public. Au lieu d’utiliser des connexions physiques dédiées, un VPN utilise des connexions virtuelles acheminées via un réseau public entre deux périphériques réseau.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 12,
    "sourceNumber": 12,
    "question": "Reportez-vous à l’illustration. Un administrateur a d’abord configuré une liste ACL étendue comme indiqué par la sortie de la commande show access-lists. L’administrateur a ensuite modifié cette liste d’accès en exécutant les commandes ci-dessous.\nQuelles deux conclusions peut-on tirer de cette nouvelle configuration ? (Choisissez deux.)",
    "options": [
      "Les paquets TFTP seront autorisés.",
      "Les paquets Telnet seront autorisés.",
      "Les paquets ping seront autorisés.",
      "Tous les paquets TCP et UDP seront refusés.",
      "Les paquets SSH seront autorisés."
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Après l’édition, la configuration finale est la suivante :\nRouter#_ afficher les listes d’accès\nListe d’accès IP étendue 101\n5 autoriser tcp tout tout eq ssh\n10 refuser tcp tout tout\n20 refuser udp tout\n30 permis icmp tout tout\nAinsi, seuls les paquets SSH et les paquets ICMP seront autorisés.",
    "images": [
      "assets/image43.png"
    ],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ACL"
  },
  {
    "id": 13,
    "sourceNumber": 13,
    "question": "Quelle affirmation décrit une caractéristique des listes de contrôle d’accès IPv4 standard ?",
    "options": [
      "Elles peuvent être configurées de manière à filtrer le trafic en fonction des adresses IP source et des ports source.",
      "Elles filtrent le trafic en fonction des adresses IP source uniquement.",
      "Elles peuvent être créées avec un numéro, mais pas avec un nom.",
      "Elles sont configurées en mode de configuration d’interface."
    ],
    "correct": [
      1
    ],
    "explanation": "Une liste de contrôle d’accès IPv4 standard peut filtrer le trafic en fonction des adresses IP source uniquement. Contrairement à une liste de contrôle d’accès étendue, elle ne peut pas filtrer le trafic en fonction des ports de couche 4. Cependant, les listes de contrôle d’accès standard et étendues peuvent toutes deux être identifiées par un numéro ou un nom, et toutes deux sont configurées en mode de configuration globale.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 14,
    "sourceNumber": 14,
    "question": "Qu’est-ce qu’un WAN ?",
    "options": [
      "Une infrastructure réseau conçue pour prendre en charge le stockage, la récupération et la réplication de données",
      "Une infrastructure réseau qui fournit un accès à d’autres réseaux dans un vaste périmètre",
      "Une infrastructure réseau qui s’étend sur un périmètre physique limité, comme une ville",
      "Une infrastructure réseau qui fournit un accès dans un petit périmètre"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 15,
    "sourceNumber": 15,
    "question": "Reportez-vous à l’illustration. Quelle séquence de commandes doit être utilisée pour configurer le routeur A pour OSPF?",
    "options": [
      "router ospf 1\nnetwork 192.168.10.0 area 0",
      "router ospf 1\nnetwork 192.168.10.64 255.255.255.192\nnetwork 192.168.10.192 255.255.255.252",
      "router ospf 1\nnetwork 192.168.10.64 0.0.0.63 area 0\nnetwork 192.168.10.192 0.0.0.3 area 0",
      "router ospf 1\nnetwork 192.168.10.0"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [
      "assets/image10.gif"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 16,
    "sourceNumber": 16,
    "question": "Sur quels éléments du routeur l’administrateur réseau doit-il effectuer des modifications pour une récupération de mot de passe ? (Choisissez deux réponses.)",
    "options": [
      "Mémoire morte (ROM) système",
      "Fichier de configuration initiale",
      "Valeur du registre de configuration",
      "Fichier de l’image système",
      "Fichier système NVRAM"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 17,
    "sourceNumber": 17,
    "question": "Quel type de réseau utilise une infrastructure commune pour transporter le trafic voix, de données et vidéo ?",
    "options": [
      "Convergé",
      "Sans frontières",
      "Administré",
      "Commuté"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 18,
    "sourceNumber": 18,
    "question": "Reportez-vous à l’illustration. Si aucun ID de routeur n’a été configuré manuellement, que le routeur R1 utiliserait-il comme ID de routeur OSPF?",
    "options": [
      "209.165.201.1",
      "10.0.0.1",
      "10.1.0.1",
      "192.168.1.100"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [
      "assets/image33.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 19,
    "sourceNumber": 19,
    "question": "Quel type de paquet OSPF est utilisé par un routeur pour découvrir les routeurs voisins et établir la contiguïté voisine?",
    "options": [
      "Description de base de données (DD)",
      "hello",
      "Les mises à jour d’état de lien",
      "LSR (Link-State Request)"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 20,
    "sourceNumber": 20,
    "question": "Quels sont trois avantages du cloud computing ? Citez-en trois.",
    "options": [
      "Il utilise des logiciels open source pour le traitement distribué des grands ensembles de données.",
      "Il transforme les données brutes en informations utiles en identifiant les tendances et les relations.",
      "Il utilise des clients répartis chez les utilisateurs finaux pour réaliser une portion substantielle du prétraitement et du stockage.",
      "Il élimine ou réduit le besoin d’équipements IT, de maintenance et de gestion sur site.",
      "Il permet d’accéder aux données de l’entreprise partout, à tout moment.",
      "Il rationalise les opérations IT d’une entreprise en s’abonnant uniquement aux services nécessaires."
    ],
    "correct": [
      3,
      4,
      5
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 21,
    "sourceNumber": 21,
    "question": "Parmi les scénarios suivants, lesquels sont des exemples de VPN d’accès à distance ? (Choisissez deux réponses.)",
    "options": [
      "Une petite filiale de trois salariés utilise un dispositif Cisco ASA pour créer une connexion VPN au siège social.",
      "Un agent commercial itinérant se connecte au réseau de l’entreprise via la connexion Internet d’un hôtel.",
      "Tous les utilisateurs d’une filiale importante ont accès aux ressources de l’entreprise via une seule connexion VPN.",
      "Un fabricant de jouets a une connexion VPN permanente avec l’un de ses fournisseurs de pièces.",
      "Un employé travaillant chez lui utilise un logiciel client VPN sur un ordinateur portable pour se connecter au réseau de l’entreprise."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "NAT"
  },
  {
    "id": 22,
    "sourceNumber": 22,
    "question": "Quelles affirmations caractérisent un virus ? Citez-en deux.",
    "options": [
      "Un virus se reproduit en exploitant indépendamment des vulnérabilités dans les réseaux.",
      "Un virus peut être en sommeil, puis s’activer à une date ou une heure spécifique.",
      "Un virus fournit au hacker des données sensibles, comme des mots de passe.",
      "Un virus comprend une vulnérabilité habilitante, un mécanisme de propagation et une charge utile.",
      "Un virus nécessite généralement une intervention de l’utilisateur final."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Le type d’interaction de l’utilisateur final requis pour lancer un virus est généralement l’ouverture d’une application, l’ouverture d’une page Web ou la mise sous tension de l’ordinateur. Une fois activé, un virus peut infecter d’autres fichiers situés sur l’ordinateur ou d’autres ordinateurs sur le même réseau.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 23,
    "sourceNumber": 23,
    "question": "Pourquoi la QoS est-elle un élément important dans un réseau convergé qui combine communications vocales, vidéo et de données ?",
    "options": [
      "Les communications de données sont sensibles à la gigue.",
      "Les communications vocales et vidéo sont plus sensibles à la latence.",
      "Les communications de données doivent être la première priorité.",
      "Les appareils anciens ne peuvent pas transmettre de la voix et de la vidéo sans QoS."
    ],
    "correct": [
      1
    ],
    "explanation": "Sans mécanismes de QoS en place, les paquets sensibles aux retards, le trafic vocal et vidéo par exemple, seront rejetés à la même fréquence que le trafic de messagerie et de navigation en ligne.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 24,
    "sourceNumber": 24,
    "question": "Faites correspondre le terme avec le lien web du composant http://www.buycarsfromus.com/2020models/ford/suv.html#Escape . (les options ne doivent pas être toutes utilisées.)",
    "options": [],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image25.jpeg"
    ],
    "type": "matching",
    "expectedChoices": 5,
    "theme": "ENSA général",
    "matching": {
      "prompts": [
        "protocol",
        "fragment",
        "Uniform Resource Name (URN)",
        "Uniform Resource Locator (URL)",
        "Uniform Resource Identifier (URI)"
      ],
      "answers": [
        "http",
        "#Escape",
        "www.buycarsfromus.com/2020models/ford/suv.html",
        "http://www.buycarsfromus.com/2020models/ford/suv.html",
        "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape"
      ],
      "correct": [
        "http",
        "#Escape",
        "www.buycarsfromus.com/2020models/ford/suv.html",
        "http://www.buycarsfromus.com/2020models/ford/suv.html",
        "http://www.buycarsfromus.com/2020models/ford/suv.html#Escape"
      ]
    }
  },
  {
    "id": 25,
    "sourceNumber": 25,
    "question": "À quelle étape du recueil des symptômes l’ingénieur réseau détermine-t-il si le problème se situe sur la couche cœur de réseau, la couche de distribution ou la couche d’accès du réseau ?",
    "options": [
      "Détermination de la propriété.",
      "Identification des symptômes.",
      "Collecte d’informations.",
      "Réduction de l’étendue des causes probables.",
      "Documentation des symptômes."
    ],
    "correct": [
      3
    ],
    "explanation": "Lors de l’étape de réduction de l’étendue des causes probables du processus de recueil des symptômes, un ingénieur réseau déterminera si le problème réseau se situe au niveau de la couche cœur de réseau, de la couche de distribution ou de la couche d’accès du réseau. Une fois cette étape terminée et la couche identifiée, l’ingénieur réseau peut déterminer quels éléments de l’équipement constituent la cause la plus probable du problème.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 26,
    "sourceNumber": 26,
    "question": "Reportez-vous à l’illustration. Quelles deux configurations seraient utilisées pour créer et appliquer une liste d’accès standard sur R1, de sorte que seuls les périphériques réseau 10.0.70.0/25 sont autorisés à accéder au serveur de base de données interne? Citez-en deux.",
    "options": [
      "R1 (config) # access-list 5 permit 10.0.70.0 0.0.127",
      "R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255",
      "R1(config)# interface GigabitEthernet0/0\nR1(config-if)# ip access-group 5 out",
      "R1(config)# interface Serial0/0/0\nR1(config-if)# ip access-group 5 in",
      "R1(config)# access-list 5 permit any"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image20.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 27,
    "sourceNumber": 27,
    "question": "Examinez la liste de contrôle d’accès suivante, qui permet le transfert des fichiers de configuration du téléphone IP depuis un hôte spécifique vers un serveur TFTP :\nQuelle méthode permettrait à l’administrateur réseau de modifier la liste de contrôle d’accès et d’inclure des transferts FTP à partir de n’importe quelle adresse IP source ?",
    "options": [
      "R1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21\nR1(config)# access-list 105 deny ip any any",
      "R1(config)# interface gi0/0\nR1(config-if)# no ip access-group 105 out\nR1(config)# no access-list 105\nR1(config)# access-list 105 permit udp host 10.0.70.23 host 10.0.54.5 range 1024 5000\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21\nR1(config)# access-list 105 deny ip any any\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out",
      "R1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21",
      "R1(config)# interface gi0/0\nR1(config-if)# no ip access-group 105 out\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 20\nR1(config)# access-list 105 permit tcp any host 10.0.54.5 eq 21\nR1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 28,
    "sourceNumber": 28,
    "question": "ABCTech étudie l’utilisation de l’automatisation pour certains de ses produits. Afin de contrôler et de tester ces produits, les programmeurs nécessitent Windows, Linux et MAC OS sur leurs ordinateurs. Quel service ou quelle technologie permettrait de répondre à cette exigence ?",
    "options": [
      "ACI Cisco",
      "data center",
      "SDN (Software Defined Networking)",
      "virtualisation"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 29,
    "sourceNumber": 29,
    "question": "Quel type de VPN utilise une configuration hub-and-spoke pour établir une topologie de maillage complet ?",
    "options": [
      "VPN MPLS",
      "GRE sur IPsec",
      "Interface de tunnel virtuel IPSec",
      "VPN multipoint dynamique"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 30,
    "sourceNumber": 30,
    "question": "Quelle fonctionnalité permet de limiter la taille d’un domaine défaillant sur un réseau d’entreprise ?",
    "options": [
      "L’achat d’équipement d’entreprise conçu pour un volume de trafic important",
      "L’utilisation de la méthode du bloc de commutation du bâtiment",
      "L’utilisation d’une conception réseau principale regroupée",
      "L’installation d’alimentations redondantes"
    ],
    "correct": [
      1
    ],
    "explanation": "Afin de limiter au mieux les risques de panne, les routeurs ou les commutateurs multicouches peuvent être déployés par paires. La panne d’un seul appareil ne doit pas entraîner la panne du réseau. L’installation d’alimentations redondantes peut protéger un seul appareil d’une panne de courant, mais si cet appareil souffre d’un autre type de problème, un appareil redondant aurait été une meilleure solution. L’achat d’équipements d’entreprise qui gèrent des flux de trafic importants n’apportera pas de fiabilité supplémentaire en cas de panne. Si une conception à cœur réduit est utilisée, le cœur et la distribution sont regroupés dans un seul appareil, ce qui augmente le risque d’une panne dévastatrice.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 31,
    "sourceNumber": 31,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration NAT ou PAT pour afficher des informations sur les paramètres de configuration NAT et le nombre d’adresses dans le pool?",
    "options": [
      "show version",
      "show ip cache",
      "show ip nat statistics",
      "show running-config"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 32,
    "sourceNumber": 32,
    "question": "Reportez-vous à l’exposition. Quel format de données est utilisé pour représenter les données pour les applications d’automatisation de réseau?",
    "options": [
      "HTML",
      "YAML",
      "JSON",
      "XML"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [
      "assets/image13.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 33,
    "sourceNumber": 33,
    "question": "Quelle est la caractéristique de l’API REST ?",
    "options": [
      "évolué vers ce qui est devenu SOAP",
      "l’API la plus utilisée pour les services web",
      "utilisé pour échanger des informations structurées XML sur HTTP ou SMTP",
      "considérés comme lents, complexes et rigides"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 34,
    "sourceNumber": 34,
    "question": "Dans JSON, qu’est-ce qui se tient entre crochets []?",
    "options": [
      "an array",
      "paires clé/valeur",
      "valeurs imbriquées",
      "un objet"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 35,
    "sourceNumber": 35,
    "question": "Reportez-vous à l’illustration. La société a fourni des téléphones IP aux employés sur le réseau 192.168.10.0/24 et le trafic vocal aura besoin de priorité sur le trafic de données. Quel est le meilleur type et placement ACL à utiliser dans cette situation?",
    "options": [
      "ACL entrante étendue sur R3 G0/0",
      "ACL entrante standard sur les lignes R1 vty",
      "ACL entrante étendue sur R3 G0/0",
      "ACL entrante standard sur R1 G0/1"
    ],
    "correct": [
      0
    ],
    "explanation": "Les ACL standard autorisent ou refusent les paquets selon l’adresse IPv4 source uniquement. Comme tous les types de trafic sont autorisés ou refusés, les ACL standard doivent être situés le plus près possible de la destination.\nLes ACL étendues autorisent ou refusent les paquets selon l’adresse IPv4 source et de l’adresse IPv4 de destination, du type de protocole, des ports TCP ou UDP source et destination et plus encore. Le filtrage des ACL étendus étant très spécifique, les ACL étendus doivent être situés le plus près possible de la source du trafic à filtrer. Un trafic indésirable est refusé près du réseau source et ne traverse pas l’infrastructure de réseau.",
    "images": [
      "assets/image35.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 36,
    "sourceNumber": 36,
    "question": "Un administrateur configure OSPF à zone unique sur un routeur. L’un des réseaux qui doivent être annoncés est 172.20.0.0 255.255.252.0. Quel masque générique l’administrateur utiliserait-il dans l’instruction réseau OSPF?",
    "options": [
      "0.0.0.3",
      "0.0.63.255",
      "0.0.3.255",
      "0.0.0.7"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 37,
    "sourceNumber": 37,
    "question": "Deux grandes entreprises viennent de fusionner. L’ingénieur réseau a pour mission de connecter les réseaux des deux entreprises sans encourir les frais liés aux lignes louées. Quelle solution serait la plus économique pour fournir une connexion propre et sécurisée entre les réseaux des deux entreprises ?",
    "options": [
      "Frame Relay",
      "Client Cisco AnyConnect Secure Mobility avec SSL",
      "VPN à accès distant utilisant IPsec",
      "Réseau privé virtuel site à site",
      "VPN SSL sans client Cisco Secure Mobility"
    ],
    "correct": [
      3
    ],
    "explanation": "Le VPN de site à site est une extension d’un réseau WAN classique qui fournit une interconnexion statique de réseaux entiers. Frame Relay serait un meilleur choix que les lignes louées, mais serait plus coûteux que la mise en œuvre de VPN de site à site. Les autres options font référence aux VPN d’accès à distance qui sont mieux adaptés pour connecter les utilisateurs au réseau de l’entreprise que pour interconnecter deux réseaux ou plus.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 38,
    "sourceNumber": 38,
    "question": "Quelle affirmation décrit précisément une caractéristique de WAN? (Quelle affirmation décrit précisément une caractéristique de IPsec)",
    "options": [
      "IPSec est un cadre de normes développé par Cisco qui s’appuie sur des algorithmes OSI.",
      "IPsec fonctionne sur la couche de l’application et protège toutes les données de l’application.",
      "IPSec fonctionne au niveau de la couche de transport et protège les données au niveau de la couche réseau.",
      "IPSec est un cadre de normes ouvertes qui repose sur des algorithmes existants.",
      "IPSec est un cadre de normes propriétaires qui dépendent d’algorithmes spécifiques à Cisco."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 39,
    "sourceNumber": 39,
    "question": "Quelle technologie d’accès de WAN public repose sur l’utilisation de lignes téléphoniques en cuivre pour donner un accès aux abonnés qui ont des lignes multiplexées dans une liaison T3 unique ?",
    "options": [
      "DSL",
      "câble",
      "RNIS",
      "liaison commutée"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 40,
    "sourceNumber": 40,
    "question": "Mettez en correspondance chaque composant d’une connexion WAN et sa description. (Les options ne sont pas toutes utilisées.)",
    "options": [
      "périphériques plaçant des données sur la boucle locale — DCE",
      "appareils et câblage interne qui se trouvent à la périphérie du réseau de l’entreprise et se connectent à la liaison d’un opérateur — CPE",
      "point établi dans un bâtiment ou un complexe pour séparer l’équipement du client et celui du fournisseur d’accès — point de démarcation",
      "point de présence représentant l’installation ou le bâtiment du fournisseur d’accès local qui connecte l’équipement d’abonné au réseau du fournisseur",
      "périphériques du client qui transfèrent les données à partir du réseau d’un client ou d’un ordinateur hôte pour qu’elles soient transmises via le WAN — équipement terminal de traitement de données"
    ],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image1.jpeg"
    ],
    "type": "matching",
    "expectedChoices": 4,
    "theme": "NAT",
    "matching": {
      "prompts": [
        "DCE",
        "CPE",
        "point de démarcation",
        "équipement terminal de traitement de données"
      ],
      "answers": [
        "périphériques plaçant des données sur la boucle locale",
        "appareils et câblage interne qui se trouvent à la périphérie du réseau de l’entreprise et se connectent à la liaison d’un opérateur",
        "point établi dans un bâtiment ou un complexe pour séparer l’équipement du client et celui du fournisseur d’accès",
        "périphériques du client qui transfèrent les données à partir du réseau d’un client ou d’un ordinateur hôte pour qu’elles soient transmises via le WAN"
      ],
      "correct": [
        "périphériques plaçant des données sur la boucle locale",
        "appareils et câblage interne qui se trouvent à la périphérie du réseau de l’entreprise et se connectent à la liaison d’un opérateur",
        "point établi dans un bâtiment ou un complexe pour séparer l’équipement du client et celui du fournisseur d’accès",
        "périphériques du client qui transfèrent les données à partir du réseau d’un client ou d’un ordinateur hôte pour qu’elles soient transmises via le WAN"
      ]
    }
  },
  {
    "id": 41,
    "sourceNumber": 41,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur les deux routeurs Cisco, mais PC1 ne parvient pas à se connecter à PC2. Quelle est la cause la plus probable de ce problème ?",
    "options": [
      "L’interface Fa0/0 est configurée en tant qu’interface passive sur le routeur R2.",
      "L’interface S0/0 est configurée en tant qu’interface passive sur le routeur R2.",
      "L’interface Fa0/0 n’a pas été activée pour OSPFv2 sur le routeur R2.",
      "L’interface s0/0 n’a pas été activée pour OSPFv2 sur le routeur R2."
    ],
    "correct": [
      2
    ],
    "explanation": "Si un réseau LAN n’est pas annoncé à l’aide d’OSPFv2, un réseau distant ne sera pas accessible. La sortie affiche une contiguïté réussie entre les routeurs R1 et R2 sur l’interface S0/0 des deux routeurs.",
    "images": [
      "assets/image26.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 42,
    "sourceNumber": 42,
    "question": "Reportez-vous à l’illustration. Un concepteur web appelle pour signaler que le serveur web web-s1.cisco.com n’est pas joignable via un navigateur web. Le technicien en charge utilise des utilitaires de commandes en ligne pour vérifier le problème et commencer le processus de dépannage. Quelles sont les deux choses qui peuvent être déterminées concernant le problème ? (Choisissez deux réponses.)",
    "options": [
      "Le logiciel de serveur Web sur web-s1.cisco.com présente un problème.",
      "Un routeur est en panne entre l’hôte source et le serveur web-s1.cisco.com.",
      "DNS ne peut pas résoudre l’adresse IP pour le serveur web-s1.cisco.com.",
      "La passerelle par défaut entre l’hôte d’origine et le serveur 192.168.0.10 est en panne.",
      "Le serveur Web sur 192.168.0.10 est joignable depuis l’hôte d’origine."
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Le résultat réussi du ping vers l’adresse IP indique que le réseau est opérationnel et que le serveur Web est en ligne. Cependant, le fait que le ping vers le nom de domaine du serveur échoue indique qu’il y a un problème DNS, à savoir que l’hôte ne peut pas résoudre le nom de domaine en son adresse IP associée.",
    "images": [
      "assets/image44.jpeg"
    ],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 43,
    "sourceNumber": 43,
    "question": "Quel type de trafic est décrit comme prévisible et fluide?",
    "options": [
      "Données",
      "Voix",
      "Vidéo"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 44,
    "sourceNumber": 44,
    "question": "Une société élabore une stratégie de sécurité pour sécuriser les communications. Lors de l’échange de messages sensibles entre le siège d’une société et une succursale, une valeur de hachage ne doit être recalculée qu’avec un code prédéfini, garantissant ainsi la validité de la source de données. Sur quel aspect des communications sécurisées cette mesure de sécurité porte-t-elle ?",
    "options": [
      "L’intégrité des données",
      "La confidentialité des données",
      "système de non-répudiation",
      "authentification de l’origine"
    ],
    "correct": [
      3
    ],
    "explanation": "Les communications sécurisées se composent de quatre éléments :\nConfidentialité des données – garantit que seuls les utilisateurs autorisés peuvent lire le message\nIntégrité des données – garantit que le message n’a pas été altéré\nAuthentification de l’origine – garantit que le message n’est pas un faux et qu’il provient bien de qui il déclare\nNon-répudiation des données – garantit que l’expéditeur ne peut pas répudier ou réfuter la validité d’un message envoyé",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 45,
    "sourceNumber": 45,
    "question": "Un groupe d’utilisateurs sur le même réseau se plaint de l’exécution lente de leurs ordinateurs. Après quelques recherches, le technicien détermine que ces ordinateurs font partie d’un réseau de zombies. Quel type de malware est utilisé pour contrôler ces ordinateurs ?",
    "options": [
      "logiciel espion",
      "réseau de zombies",
      "rootkit",
      "virus"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 46,
    "sourceNumber": 46,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une entrée unique:\nSi un paquet avec une adresse source 192.168.101.45, une adresse de destination 64.100.40.4 et un protocole 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé?",
    "options": [
      "refusé",
      "Autorisé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 47,
    "sourceNumber": 47,
    "question": "Quels sont les deux bénéfices de l’utilisation des déroutements SNMP ? (Choisissez deux propositions.)",
    "options": [
      "Ils réduisent la charge sur les ressources du réseau et des agents.",
      "Ils peuvent passivement écouter les datagrammes NetFlow exportés.",
      "Ils limitent l’accès aux systèmes de gestion uniquement.",
      "Ils peuvent fournir des données sur les paquets TCP/IP qui transitent par les appareils Cisco.",
      "Ils permettent d’éliminer le besoin d’interrogations périodiques."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Sécurité"
  },
  {
    "id": 48,
    "sourceNumber": 48,
    "question": "Reportez-vous à l’illustration. Les routeurs R1 et R2 sont connectés via une liaison série. Un routeur est configuré en tant que NTP maître et l’autre en tant que NTP client. Quelles informations concernant R2 peuvent être tirées du résultat partiel de la commande show ntp associations detail présenté ? (Choisissez deux réponses.)",
    "options": [
      "L’adresse IP de R2 est 192.168.1.2.",
      "Les deux routeurs sont configurés pour utiliser NTPv2.",
      "Le routeur R2 est le maître et R1 est le client.",
      "L’adresse IP de R1 est 192.168.1.2.",
      "Le routeur R1 est le maître et R2 est le client."
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Avec la commande show NTP associations, l’adresse IP du maître NTP est donnée.",
    "images": [
      "assets/image11.jpeg"
    ],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 49,
    "sourceNumber": 49,
    "question": "Quelle étape du processus de routage d’état de liens est décrite par un routeur inondant l’état de liens et les informations de coût sur chaque liaison directement connectée?",
    "options": [
      "déclarer un voisin inaccessible",
      "échange d’annonces à état de liens",
      "création de la table de topologie",
      "sélection de l’ID du routeur"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 50,
    "sourceNumber": 50,
    "question": "Si un routeur a deux interfaces et achemine à la fois le trafic IPv4 et IPv6, combien de liste ACL pourrait-on créer et appliquer?",
    "options": [
      "4",
      "6",
      "8",
      "12",
      "16"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 51,
    "sourceNumber": 51,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau a configuré une liste ACL standard pour autoriser uniquement les deux réseaux LAN connectés à R1 à accéder au réseau qui se connecte à l’interface R2 G0/1, mais pas à l’interface G0/0. Lorsque vous appliquerez les meilleures pratiques, à quel endroit la liste ACL standard devrait-elle être appliquée?",
    "options": [
      "R2 G0/0 sortant",
      "R1 S0/0/0 entrant",
      "R1 S0/0/0 sortant",
      "R2 S0/0/1 sortant",
      "R2 G0/1 entrant"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image36.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 52,
    "sourceNumber": 52,
    "question": "Quel protocole est un protocole de couche 2 neutre par le fournisseur qui annonce l’identité et les capacités du périphérique hôte à d’autres périphériques réseau connectés?",
    "options": [
      "Protocole NTP",
      "SNMP",
      "TFTP",
      "LLDP"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 53,
    "sourceNumber": 53,
    "question": "Quel type de marquage QoS est appliqué aux trames Ethernet ?",
    "options": [
      "DSCP",
      "CoS",
      "Priorité IP",
      "ToS"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 54,
    "sourceNumber": 54,
    "question": "Lors de la configuration du réseau d’un petit bureau, l’administrateur réseau décide d’attribuer des adresses IP privées de manière dynamique aux stations de travail et aux terminaux mobiles. Quelle fonctionnalité doit-il activer sur le routeur de l’entreprise pour permettre aux appareils de bureau d’accéder à Internet ?",
    "options": [
      "UPnP",
      "Filtrage MAC",
      "NAT",
      "QoS"
    ],
    "correct": [
      2
    ],
    "explanation": "La traduction d’adresses réseau (NAT) est le processus utilisé pour convertir des adresses privées en adresses routables sur Internet qui permettent aux appareils de bureau d’accéder à Internet.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 55,
    "sourceNumber": 55,
    "question": "Examinez l’illustration. Le routeur R1 est configuré avec la NAT statique. L’adressage est correctement configuré sur le routeur et sur le serveur Web, mais il n’y a pas de connectivité entre le serveur Web et les utilisateurs sur Internet. Quelle est la cause probable de cette absence de connectivité ?",
    "options": [
      "L’adresse globale interne est incorrecte.",
      "La configuration NAT du routeur présente une adresse locale interne incorrecte.",
      "L’interface Fa0/0 devrait être configurée avec la commande ip nat outside .",
      "La configuration NAT de l’interface S0/0/1 est incorrecte."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [
      "assets/image2.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 56,
    "sourceNumber": 56,
    "question": "Examinez l’illustration. Un technicien configure R2 de sorte que la NAT statique permette au client d’accéder au serveur Web. Quelle est la cause probable de l’impossibilité pour le PC client d’accéder au serveur Web ?",
    "options": [
      "L’interface Fa0/1 devrait être identifiée en tant qu’interface NAT externe.",
      "L’interface S0/0/0 devrait être identifiée en tant qu’interface NAT externe.",
      "La configuration ne dispose pas d’une liste de contrôle d’accès valide.",
      "L’instruction IP NAT est incorrecte."
    ],
    "correct": [
      1
    ],
    "explanation": "L’interface S0/0/0 doit être identifiée comme l’interface NAT externe. La commande pour ce faire serait R2(config-if)# ip nat extérieur.",
    "images": [
      "assets/image21.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 57,
    "sourceNumber": 57,
    "question": "Une entreprise a conclu un contrat avec une entreprise de sécurité réseau pour aider à identifier les vulnérabilités du réseau d’entreprise. L’entreprise envoie une équipe pour effectuer des tests de pénétration sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des fuzzers?",
    "options": [
      "pour inverser l’ingénierie des fichiers binaires lors de l’écriture d’exploits et lors de l’analyse de logiciels malveillants",
      "pour détecter les outils installés dans les fichiers et répertoires qui fournissent aux acteurs des menaces un accès à distance et un contrôle sur un ordinateur ou un réseau",
      "pour détecter toute preuve d’un piratage ou d’un programme malveillant dans un ordinateur ou un réseau",
      "pour découvrir les vulnérabilités de sécurité d’un ordinateur"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 58,
    "sourceNumber": 58,
    "question": "Reportez-vous à l’illustration. Quelle méthode permet d’activer un routeur OSPF afin d’annoncer une route par défaut aux routeurs OSPF voisins ?",
    "options": [
      "Utilisez la commande default-information originate sur R0-A.",
      "Utilisez la commande redistribute static sur le routeur ISP.",
      "Utilisez la commande default-information originate sur le routeur ISP.",
      "Utilisez une route statique renvoyant vers le routeur ISP et redistribuez- la.",
      "Utilisez la commande redistribute static sur R0-A."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image41.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 59,
    "sourceNumber": 59,
    "question": "Reportez-vous à l’illustration. Quel est le coût de l’OSPF pour atteindre le réseau LAN Ouest 172.16.2.0/24 depuis l’Est?",
    "options": [
      "782",
      "74",
      "65",
      "128"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [
      "assets/image5.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 60,
    "sourceNumber": 60,
    "question": "Reportez-vous à l’illustration. Quelles trois conclusions peut-on tirer de la sortie affichée? (Choisissez trois réponses.)",
    "options": [
      "Le BDR a trois voisins.",
      "L’ID du routeur sur le routeur DR est 3.3.3.3",
      "Il y a eu 9 secondes depuis le dernier paquet hello envoyé.",
      "Le DR peut être atteint via l’interface GigabitEthernet 0/0.",
      "Les valeurs d’ID du routeur n’étaient pas les critères utilisés pour sélectionner le DR et le BDR.",
      "Cette interface utilise la priorité par défaut."
    ],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image27.png"
    ],
    "type": "study",
    "expectedChoices": 3,
    "theme": "OSPF"
  },
  {
    "id": 61,
    "sourceNumber": 61,
    "question": "Quel type de VPN implique un protocole de tunnel non sécurisé encapsulé par IPSec?",
    "options": [
      "VPN SSL",
      "GRE sur IPsec",
      "Interface de tunnel virtuel IPSec",
      "VPN multipoint dynamique"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 62,
    "sourceNumber": 62,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau souhaite ajouter une entrée ACE à la liste de contrôle d’accès TRAFFIC-CONTROL pour refuser le trafic IP du sous-réseau 172.23.16.0/20. Quelle entrée ACE répond à cette exigence ?",
    "options": [
      "30 deny 172.23.16.0 0.0.15.255",
      "5 deny 172.23.16.0 0.0.255.255",
      "15 deny 172.23.16.0 0.0.15.255",
      "5 deny 172.23.16.0 0.0.15.255"
    ],
    "correct": [
      3
    ],
    "explanation": "L’adresse IPv4 source est le seul critère de filtrage spécifié pour une liste d’accès standard. Le masque de caractère générique est écrit pour identifier les parties de l’adresse qui doivent correspondre, avec un bit 0, et les parties de l’adresse qui doivent être ignorées, avec un bit 1. Le routeur analyse les entrées ACE en partant du plus bas numéro de séquence vers le plus élevé. Si vous devez ajouter une entrée ACE à une liste d’accès existante, vous devez indiquer le numéro de séquence de sorte que l’entrée ACE soit correctement placée au cours du processus d’évaluation de la liste ACL.",
    "images": [
      "assets/image45.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 63,
    "sourceNumber": 63,
    "question": "Un administrateur réseau établit une liste de contrôle d’accès standard qui interdira tout trafic venant du réseau 172.16.0.0/16 mais autorisera tous les autres trafics. Quelles sont les deux commandes à utiliser ? (Choisissez deux réponses.)",
    "options": [
      "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
      "Router(config)# access-list 95 host 172.16.0.0",
      "Router(config)# access-list 95 deny any",
      "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
      "Router(config)# access-list 95 permit any",
      "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255"
    ],
    "correct": [
      4,
      5
    ],
    "explanation": "Pour refuser le trafic du réseau 172.16.0.0/16, la commande _access-list 95 deny 172.16.0.0 0.0.255.255 est utilisée. Pour autoriser tout autre trafic, l’instruction _access-list 95 allow any est ajoutée.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ACL"
  },
  {
    "id": 64,
    "sourceNumber": 64,
    "question": "Pour le dépannage, quelle approche un administrateur réseau chevronné privilégiera-t-il contrairement à un administrateur réseau moins expérimenté ?",
    "options": [
      "une approche moins structurée reposant sur des déductions que permettent l’expérience",
      "une approche structurée qui débute avec l’examen de la couche physique avec progression ascendante dans les couches du modèle OSI jusqu’à ce que l’origine du problème soit identifiée",
      "une approche qui débute avec l’examen des applications des utilisateurs avec progression descendante dans les couches du modèle OSI jusqu’à ce que l’origine du problème soit identifiée",
      "la comparaison des composants qui fonctionnent et ceux qui ne fonctionnent pas pour déterminer les différences significatives"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 65,
    "sourceNumber": 65,
    "question": "Reportez-vous à l’illustration. L’administrateur réseau a une adresse IP 192.168.11.10 et a besoin d’un accès pour gérer R1. Quel est le meilleur type et placement ACL à utiliser dans cette situation?",
    "options": [
      "ACL entrante standard sur les lignes R1 vty",
      "ACL étendues entrantes sur R1 G0/0 et G0/1",
      "ACL entrante standard sur l’interface WAN R2 se connectant à l’internet",
      "ACL sortante étendue sur R2 S0/0/1"
    ],
    "correct": [
      0
    ],
    "explanation": "les ACL standard autorisent ou refusent les paquets en fonction uniquement de l’adresse IPv4 source. Étant donné que tous les types de trafic sont autorisés ou refusés, les ACL standard doivent être situées aussi près que possible de la destination.\nLes ACL étendues autorisent ou refusent les paquets en fonction de l’adresse IPv4 source et de l’adresse IPv4 de destination, du type de protocole, des ports TCP ou UDP source et destination, etc. Étant donné que le filtrage des ACL étendues est si spécifique, les ACL étendues doivent être situées aussi près que possible de la source du trafic à filtrer. Le trafic indésirable est refusé à proximité du réseau source sans traverser l’infrastructure réseau.",
    "images": [
      "assets/image35.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 66,
    "sourceNumber": 66,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau a configuré OSPFv2 sur les deux routeurs Cisco. Les routeurs ne peuvent pas former une contiguïté de voisinage. Que faut-il faire pour résoudre le problème sur le routeur R2 ?",
    "options": [
      "Mettez en œuvre la commande network 192.168.3.1 0.0.0.0 area 0 sur le router R2.",
      "Remplacez l’ID du routeur R2 par 2.2.2.2.",
      "Mettez en œuvre la commande no passive-interface Serial0/1.",
      "Mettez en œuvre la commande network 192.168.2.6 0.0.0.0 area 0 sur le routeur R2."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [
      "assets/image14.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 67,
    "sourceNumber": 67,
    "question": "Deux routeurs compatibles OSPF sont connectés via une liaison point à point. Pendant l’état ExStart, quel routeur sera choisi comme premier à envoyer des paquets DBD?",
    "options": [
      "le routeur avec l’ID de routeur le plus bas",
      "le routeur avec l’adresse IP la plus basse sur l’interface de connexion",
      "le routeur avec l’adresse IP la plus élevée sur l’interface de connexion",
      "le routeur avec l’ID de routeur le plus élevé",
      "_Expliquez :Dans l’état ExStart, les deux routeurs décident quel routeur enverra les paquets DBD en premier. Le routeur avec l’ID de routeur le plus élevé sera le premier routeur à envoyer des paquets DBD pendant l’état d’échange"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 68,
    "sourceNumber": 68,
    "question": "Quelles sont les deux règles de syntaxe utiliser pour écrire un tableau JSON? (Choisissez deux réponses.)",
    "options": [
      "Un espace doit séparer chaque valeur du tableau.",
      "Les valeurs sont placées entre crochets.",
      "Le tableau ne peut inclure qu’un seul type de valeur.",
      "Un point-virgule sépare la clé et la liste des valeurs.",
      "Chaque valeur du tableau est séparée par une virgule."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Automatisation"
  },
  {
    "id": 69,
    "sourceNumber": 69,
    "question": "Quel type d’API serait utilisé pour permettre aux vendeurs autorisés d’une organisation d’accéder aux données de vente internes à partir de leurs appareils mobiles?",
    "options": [
      "ouvrir",
      "public",
      "partenaire",
      "privé"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 70,
    "sourceNumber": 70,
    "question": "Quels sont les deux types de connexions VPN ? (Choisissez deux propositions.)",
    "options": [
      "PPPoE",
      "L’accès distant",
      "Ligne louée",
      "Site à site",
      "Frame Relay"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "PPPoE, les lignes louées et Frame Relay sont des types de technologie WAN, pas des types de connexions VPN.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "WAN / VPN"
  },
  {
    "id": 71,
    "sourceNumber": 71,
    "question": "Quels énoncés décrivent l’utilisation d’algorithmes asymétriques ? Citez-en deux.",
    "options": [
      "Les clés publiques et privées peuvent être utilisées de manière interchangeable.",
      "Si une clé privée est utilisée pour chiffrer les données, une clé du même type doit également être utilisée pour les déchiffrer.",
      "Si une clé publique est utilisée pour chiffrer les données, une clé privée doit être utilisée pour les déchiffrer.",
      "Si une clé privée est utilisée pour chiffrer les données, une clé publique doit être utilisée pour les déchiffrer.",
      "Si une clé publique est utilisée pour chiffrer les données, une clé du même type doit également être utilisée pour les déchiffrer."
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "NAT"
  },
  {
    "id": 72,
    "sourceNumber": 72,
    "question": "Pouvez-vous citer une caractéristique d’un cheval de Troie sur le plan de la sécurité du réseau ?",
    "options": [
      "D’énormes quantités de données sont envoyées à une interface de périphérique réseau en particulier.",
      "Trop d’informations sont adressées à un bloc mémoire en particulier, ce qui a pour effet d’affecter d’autres zones de mémoire.",
      "Un dictionnaire électronique est utilisé pour obtenir un mot de passe qui servira à infiltrer un périphérique réseau essentiel.",
      "Un programme malveillant est dissimulé dans un programme exécutable d’apparence légitime."
    ],
    "correct": [
      3
    ],
    "explanation": "Un cheval de Troie effectue des opérations malveillantes sous couvert d’un programme légitime. Les attaques par déni de service envoient des quantités extrêmes de données à un hôte particulier ou à une interface de périphérique réseau. Les attaques par mot de passe utilisent des dictionnaires électroniques pour tenter d’apprendre les mots de passe. Les attaques par débordement de tampon exploitent les tampons de mémoire en envoyant trop d’informations à un hôte pour rendre le système inutilisable.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 73,
    "sourceNumber": 73,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une entrée unique:\nSi un paquet avec une adresse source 172.18.20.14, une adresse de destination 172.18.20.40 et un protocole 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé?",
    "options": [
      "Autorisé",
      "refusé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 74,
    "sourceNumber": 74,
    "question": "Reliez les types de périphérique ou de service WAN à leur description. (Les options ne doivent pas être toutes utilisées.)",
    "options": [
      "CPE —> périphériques et câblage intérieur situés à la périphérie de l’entreprise et connectés à une liaison opérateur\nDCE —> appareils qui fournissent une interface à laquelle les clients peuvent se connecter dans le cloud WAN\nDTE —> dispositifs clients qui transmettent les données d’un réseau client pour transmission sur le WAN\nboucle locale —> une connexion physique du client au fournisseur de services POP"
    ],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image37.jpeg",
      "assets/image3.jpeg"
    ],
    "type": "matching",
    "expectedChoices": 4,
    "theme": "WAN / VPN",
    "matching": {
      "prompts": [
        "CPE",
        "DCE",
        "DTE",
        "boucle locale"
      ],
      "answers": [
        "périphériques et câblage intérieur situés à la périphérie de l’entreprise et connectés à une liaison opérateur",
        "appareils qui fournissent une interface à laquelle les clients peuvent se connecter dans le cloud WAN",
        "dispositifs clients qui transmettent les données d’un réseau client pour transmission sur le WAN",
        "une connexion physique du client au fournisseur de services POP"
      ],
      "correct": [
        "périphériques et câblage intérieur situés à la périphérie de l’entreprise et connectés à une liaison opérateur",
        "appareils qui fournissent une interface à laquelle les clients peuvent se connecter dans le cloud WAN",
        "dispositifs clients qui transmettent les données d’un réseau client pour transmission sur le WAN",
        "une connexion physique du client au fournisseur de services POP"
      ]
    }
  },
  {
    "id": 75,
    "sourceNumber": 75,
    "question": "Quel type de trafic est décrit comme étant capable de tolérer un certain temps de latence, de gigue et de perte sans effets perceptibles ?",
    "options": [
      "Voix",
      "Données",
      "Vidéo"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 76,
    "sourceNumber": 76,
    "question": "Un administrateur configure OSPF à zone unique sur un routeur. L’un des réseaux qui doivent être annoncés est 192.168.0.0 255.255.252.0. Quel masque générique l’administrateur utiliserait-il dans l’instruction réseau OSPF?",
    "options": [
      "0.0.3.255",
      "0.0.0.7",
      "0.0.63.255",
      "0.0.0.3"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 77,
    "sourceNumber": 77,
    "question": "Un technicien réseau est en train de configurer SNMPv3 et a défini un niveau de sécurité d’ authentification . Quel est l’effet de ce paramètre?",
    "options": [
      "authentifie un paquet à l’aide des algorithmes HMAC MD5 ou HMAC SHA et crypte le paquet avec les algorithmes DES, 3DES ou AES",
      "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
      "authentifie un paquet par une correspondance de chaîne du nom d’utilisateur ou de la chaîne de communauté",
      "authentifie un paquet en utilisant uniquement l’algorithme SHA"
    ],
    "correct": [
      1
    ],
    "explanation": "Pour activer SNMPv3, l’un des trois niveaux de sécurité peut être configuré :\n1) pas d’authentification\n2) authentification\n3) privé\nLe niveau de sécurité configuré détermine les algorithmes de sécurité appliqués aux paquets SNMP. Le niveau de sécurité d’authentification utilise HMAC avec MD5 ou SHA.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 78,
    "sourceNumber": 78,
    "question": "Qu’est-ce qui caractérise un hyperviseur de type 2 ?",
    "options": [
      "il convient mieux aux environnements des entreprises",
      "il est installé directement dans le matériel",
      "ne nécessite pas de logiciel de console de gestion",
      "il présente un accès direct aux ressources matérielles du serveur"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 79,
    "sourceNumber": 79,
    "question": "Un data center a récemment mis à jour un serveur physique pour héberger plusieurs systèmes d’exploitation sur un seul processeur. Le data center peut désormais fournir un serveur Web distinct à chaque client sans avoir à allouer un serveur réel distinct à chaque client. Quelle est la tendance liée au réseau qui est implémentée par le data center dans cette situation ?",
    "options": [
      "BYOD",
      "Garantir l’intégrité des communications",
      "virtualisation",
      "Collaboration en ligne"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 80,
    "sourceNumber": 80,
    "question": "Reportez-vous à l’illustration. Si l’administrateur réseau a créé une liste de contrôle d’accès standard qui autorise uniquement les périphériques connectés à l’accès réseau de l’interface G0/0 de R2 à se brancher aux périphériques de l’interface G0/1 de R1, comment la liste de contrôle d’accès doit-elle être appliquée ?",
    "options": [
      "en sortie sur l’interface G0/1 de R1",
      "en sortie sur l’interface S0/0/1 de R2",
      "en entrée sur l’interface G0/0 de R2",
      "en entrée sur l’interface G0/1 de R1"
    ],
    "correct": [
      0
    ],
    "explanation": "Étant donné que les listes d’accès standard ne filtrent que sur l’adresse IP source, elles sont généralement placées au plus près du réseau de destination. Dans cet exemple, les paquets source proviendront du réseau R2 G0/0. La destination est le réseau R1 G0/1. Le placement correct d’ACL est sortant sur l’interface R1 G0/1.",
    "images": [
      "assets/image28.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 81,
    "sourceNumber": 81,
    "question": "Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir les adjacences OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
    "options": [
      "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
      "Le routeur R2 deviendra le DR et le routeur R1 deviendra le BDR.",
      "Le router R3 deviendra DR et le routeur R2 deviendra BDR.",
      "Le routeur R1 deviendra le DR et le routeur R2 deviendra le BDR."
    ],
    "correct": [
      2
    ],
    "explanation": "les élections OSPF d’un DR sont basées sur les éléments suivants par ordre de priorité :\npriorité la plus élevée de 1 à 255 (0 = jamais un DR)\nID de routeur le plus élevé\nl’adresse IP la plus élevée d’un bouclage ou d’une interface active en l’absence d’ID de routeur configuré manuellement. Les adresses IP de bouclage ont une priorité plus élevée que les autres interfaces.\nDans ce cas, les routeurs R3 et R1 ont la priorité de routeur la plus élevée. Entre les deux, R3 a l’ID de routeur le plus élevé. Par conséquent, R3 deviendra le DR et R1 deviendra le BDR.",
    "images": [
      "assets/image46.gif"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 82,
    "sourceNumber": 82,
    "question": "Un routeur OSPF a trois réseaux directement connectés: 10.0.0.0/16, 10.1.0.0/16 et 10.2.0.0/16. Quelle commande réseau OSPF annoncerait uniquement le réseau 10.1.0.0 aux voisins?",
    "options": [
      "router(config-router)# network 10.1.0.0 255.255.255.0 area 0",
      "router(config-router)# network 10.1.0.0 0.0.0.0 area 0",
      "router(config-router)# network 10.1.0.0 0.0.255.255 area 0",
      "router(config-router)# network 10.1.0.0 0.0.15.255 area 0"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 83,
    "sourceNumber": 83,
    "question": "Toute entreprise a décidé de réduire son empreinte environnementale en réduisant les coûts énergétiques, en déménageant dans une installation plus petite et en favorisant le télétravail. Quel service ou quelle technologie permettrait de répondre à cette exigence ?",
    "options": [
      "services de cloud",
      "ACI Cisco",
      "data center",
      "APIC-EM"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 84,
    "sourceNumber": 84,
    "question": "Quel protocole synchronise avec une horloge maître privée ou avec un serveur accessible au public sur l’internet?",
    "options": [
      "MPLS",
      "TFTP",
      "Protocole NTP",
      "CBWFQ"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 85,
    "sourceNumber": 85,
    "question": "Quelle étape du processus de routage d’état de liaison est décrite par un routeur exécutant un algorithme pour déterminer le meilleur chemin vers chaque destination?",
    "options": [
      "exécution de l’algorithme SPF",
      "déclarer un voisin inaccessible",
      "sélection de l’ID du routeur",
      "création de la table de topologie"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image12.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 86,
    "sourceNumber": 86,
    "question": "Le trafic vidéo a ses caractéristiques propres. Citez-en deux. (Choisissez deux propositions.)",
    "options": [
      "Le trafic vidéo est imprévisible et fluctuant.",
      "Le trafic vidéo consomme moins de ressources de réseau que le trafic vocal.",
      "Le trafic vidéo nécessite un minimum de 30 kbit/s de bande passante.",
      "Le trafic vidéo est plus résilient à la perte que le trafic vocal.",
      "La latence du trafic vidéo doit être inférieure à 400 ms."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 87,
    "sourceNumber": 87,
    "question": "Examinez l’illustration. Un PC à l’adresse 10.1.1.45 ne peut pas accéder à Internet. Quelle est la cause la plus probable du problème ?",
    "options": [
      "Le pool NAT est épuisé.",
      "La liste de contrôle d’accès ACL 1 n’a pas été correctement configurée.",
      "Le masque de réseau incorrect a été utilisé sur le pool NAT.",
      "Les interfaces interne et externe ont été configurées à l’envers."
    ],
    "correct": [
      0
    ],
    "explanation": "La sortie des statistiques de show ip nat indique qu’il y a 2 adresses au total et que 2 adresses ont été allouées (100 %). Cela indique que le pool NAT n’a plus d’adresses globales pour donner de nouveaux clients. D’après les traductions de show ip nat, les PC aux adresses 10.1.1.33 et 10.1.1.123 ont utilisé les deux adresses disponibles pour envoyer des messages ICMP à un hôte sur le réseau extérieur.",
    "images": [
      "assets/image29.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 88,
    "sourceNumber": 88,
    "question": "Reportez-vous à l’illustration. Quelle(s) adresse(s) représente(nt) l’adresse globale interne ?",
    "options": [
      "Toute adresse dans le réseau 10.1.1.0",
      "192.168.0.100",
      "209.165.20.25",
      "10.1.1.2"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [
      "assets/image22.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 89,
    "sourceNumber": 89,
    "question": "Examinez l’illustration. Depuis quel emplacement ce routeur a-t-il chargé IOS ?",
    "options": [
      "NVRAM",
      "ROM",
      "mémoire flash",
      "Mémoire vive (RAM)",
      "Un serveur TFTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [
      "assets/image15.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 90,
    "sourceNumber": 90,
    "question": "Examinez l’illustration. R1 est configuré pour la NAT, comme illustré. Quel problème présente la configuration ?",
    "options": [
      "Le pool NAT est incorrect.",
      "NAT-POOL2 n’est pas relié à la liste de contrôle d’accès ACL 1.",
      "La commande access-list 1 est mal configurée.",
      "L’interface Fa0/0 devrait être identifiée en tant qu’interface NAT externe."
    ],
    "correct": [
      1
    ],
    "explanation": "R1 doit avoir NAT-POOL2 lié à ACL 1. Ceci est accompli avec la commande R1(config)#ip nat inside source list 1 pool NAT-POOL2. Cela permettrait au routeur de vérifier tout le trafic intéressant et s’il correspond à ACL 1, il serait traduit en utilisant les adresses dans NAT-POOL2.",
    "images": [
      "assets/image38.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 91,
    "sourceNumber": 91,
    "question": "Quelles sont les trois déclarations généralement considérées comme les meilleures pratiques en matière de placement des ACL ? (Choisissez trois réponses.)",
    "options": [
      "Placer des ACL étendues à proximité de l’adresse IP de destination du trafic.",
      "Placer les ACL standard à proximité de l’adresse IP source du trafic.",
      "Placer les ACL standard à proximité de l’adresse IP de destination du trafic.",
      "Pour chaque ACL entrante placée sur une interface, il doit y avoir une ACL sortante correspondante.",
      "Filtrer le trafic indésirable avant qu’il ne se déplace sur une liaison à faible bande passante.",
      "Placer des ACL étendues à proximité de l’adresse IP source du trafic."
    ],
    "correct": [
      2,
      4,
      5
    ],
    "explanation": "Les ACL étendues doivent être placées aussi près que possible de l’adresse IP source, afin que le trafic qui doit être filtré ne traverse pas le réseau et n’utilise pas les ressources du réseau. Étant donné que les ACL standard ne spécifient pas d’adresse de destination, elles doivent être placées aussi près que possible de la destination. Placer une ACL standard près de la source peut avoir pour effet de filtrer tout le trafic et de limiter les services aux autres hôtes. Le filtrage du trafic indésirable avant qu’il n’entre dans les liaisons à faible bande passante préserve la bande passante et prend en charge les fonctionnalités du réseau. Les décisions concernant le placement d’ACL entrantes ou sortantes dépendent des exigences à respecter.",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "ACL"
  },
  {
    "id": 92,
    "sourceNumber": 92,
    "question": "Examinez l’illustration. L’administrateur réseau ayant l’adresse IP 10.0.70.23/25 a besoin d’accéder au serveur FTP de l’entreprise (10.0.54.5/28). Ce serveur FTP est également un serveur Web accessible à tous les employés internes sur des réseaux dans la plage d’adresses 10.x.x.x. Aucun autre trafic ne doit être autorisé sur ce serveur. Quelle liste de contrôle d’accès étendue doit être utilisée pour filtrer ce trafic et comment doit-elle être appliquée ? (Choisissez deux réponses.)",
    "options": [
      "access-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20\naccess-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21\naccess-list 105 permit tcp 10.0.0.0 0.255.255.255 host 10.0.54.5 eq www\naccess-list 105 deny ip any host 10.0.54.5\naccess-list 105 permit ip any any",
      "R1(config)# interface gi0/0\nR1(config-if)# ip access-group 105 out",
      "R2(config)# interface gi0/0\nR2(config-if)# ip access-group 105 in",
      "access-list 105 permit tcp host 10.0.54.5 any eq www\naccess-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 20\naccess-list 105 permit tcp host 10.0.70.23 host 10.0.54.5 eq 21",
      "R1(config)# interface s0/0/0\nR1(config-if)# ip access-group 105 out",
      "access-list 105 permit ip host 10.0.70.23 host 10.0.54.5\naccess-list 105 permit tcp any host 10.0.54.5 eq www\naccess-list 105 permit ip any any"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Les deux premières lignes de la liste de contrôle d’accès autorisent l’accès FTP 10.0.70.23 hôte au serveur dont l’adresse IP est 10.0.54.5. La ligne suivante de la liste de contrôle d’accès autorise l’accès HTTP au serveur à partir de n’importe quel hôte dont l’adresse IP commence par le numéro 10. La quatrième ligne de la liste refuse tout autre type de trafic vers le serveur à partir de toutes les adresses IP source. La dernière ligne de la liste de contrôle d’accès autorise tout autre élément au cas où il y ait d’autres serveurs ou périphériques ajoutés au réseau 10.0.54.0/28. Étant donné que le trafic est filtré à partir de tous les autres sites et pour le périphérique hôte 10.0.70.23, le meilleur emplacement pour cette liste est celui le plus proche du serveur.",
    "images": [
      "assets/image6.png"
    ],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ACL"
  },
  {
    "id": 93,
    "sourceNumber": 93,
    "question": "Quels sont les deux objectifs du lancement d’une attaque de reconnaissance sur un réseau ? (Choisissez deux réponses.)",
    "options": [
      "Transmettre les privilèges d’accès",
      "Récupérer et modifier des données",
      "Analyser l’accessibilité",
      "Empêcher l’accès des autres utilisateurs au système",
      "Collecter des informations relatives au réseau et aux périphériques"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Sécurité"
  },
  {
    "id": 94,
    "sourceNumber": 94,
    "question": "Une entreprise envisage de changer sa connexion WAN pour son réseau local. Quelles sont les deux options représentatives d’une architecture WAN privée ? (Choisissez deux propositions.)",
    "options": [
      "ligne d’abonné numérique",
      "WAN Ethernet",
      "ligne louée",
      "Wi-Fi municipal",
      "câble"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Une entreprise peut se connecter au WAN de deux façons basiques :\nInfrastructure WAN privée telle que lignes point à point louées dédiées, RTPC, RNIS, WAN Ethernet, ATM ou relais de trames.\nInfrastructure WAN publique telle que ligne d’abonné numérique (DSL), câble, accès satellite, Wi-Fi municipal, WiMax, ou sans-fil cellulaire notamment 3G/4G",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "WAN / VPN"
  },
  {
    "id": 95,
    "sourceNumber": 95,
    "question": "Quels sont les deux protocoles IPSec utilisés pour fournir l’intégrité des données ?",
    "options": [
      "MD5",
      "DH",
      "AES",
      "SHA",
      "RSA"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Le cadre IPsec utilise divers protocoles et algorithmes pour assurer la confidentialité des données, l’intégrité des données, l’authentification et l’échange de clés sécurisé. Deux algorithmes populaires utilisés pour s’assurer que les données ne sont pas interceptées et modifiées (intégrité des données) sont MD5 et SHA. AES est un protocole de cryptage et assure la confidentialité des données. DH (Diffie-Hellman) est un algorithme utilisé pour l’échange de clés. RSA est un algorithme utilisé pour l’authentification.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "WAN / VPN"
  },
  {
    "id": 96,
    "sourceNumber": 96,
    "question": "Quel protocole offrant des services d’authentification, d’intégrité et de confidentialité est également un type de réseau privé virtuel ?",
    "options": [
      "IPsec",
      "ESP",
      "AES",
      "MD5"
    ],
    "correct": [
      0
    ],
    "explanation": "Les services IPsec se chargent de l’authentification, de l’intégrité, du contrôle d’accès et de la confidentialité. Avec IPsec, les informations échangées entre des sites distants peuvent être chiffrées et vérifiées. Les VPN d’accès à distance et site à site peuvent être déployés avec IPsec.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 97,
    "sourceNumber": 97,
    "question": "Citez une raison d’utiliser la commande ip ospf priority lorsque le protocole de routage OSPF est actif.",
    "options": [
      "constituer une porte dérobée pour la connectivité pendant le processus de convergence",
      "rationaliser et accélérer le processus de convergence",
      "activer le processus de voisinage OSPF",
      "influencer le processus de sélection DR/BDR"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 98,
    "sourceNumber": 98,
    "question": "Reportez-vous à l’illustration. Quels périphériques sont conservés sur le domaine défaillant lorsque le commutateur S3 n’est plus sous tension ?",
    "options": [
      "PC_3 et AP_2",
      "S1 et S4",
      "PC_3 et PC_2",
      "AP_2 et AP_1",
      "S4 et PC_2"
    ],
    "correct": [
      0
    ],
    "explanation": "Un domaine défaillant est la zone d’un réseau qui est affectée en cas de défaillance d’un périphérique critique tel qu’un commutateur S3 ou en cas de problème sur celui-ci.",
    "images": [
      "assets/image30.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 99,
    "sourceNumber": 99,
    "question": "Reportez-vous à l’illustration. Quelle est la fonction de la commande marquée d’une flèche dans les informations de configuration partielle d’un routeur à large bande Cisco ?",
    "options": [
      "Elle définit les adresses attribuées à un pool NAT.",
      "Elle définit les adresses qui peuvent être traduites.",
      "Elle définit les adresses autorisées hors du routeur.",
      "Elle définit les adresses autorisées dans le routeur."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [
      "assets/image47.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 100,
    "sourceNumber": 100,
    "question": "Quel est l’état opérationnel final qui se forme entre un routeur DR et un routeur DROTHER OSPF une fois qu’ils atteignent la convergence ?",
    "options": [
      "établi",
      "two-way",
      "full",
      "loading"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 101,
    "sourceNumber": 101,
    "question": "Qu’utilise-t-on pour préremplir la table de contiguïté pour les appareils Cisco qui utilisent le CEF pour traiter les paquets ?",
    "options": [
      "la FIB",
      "la table de routage",
      "le DSP",
      "la table ARP"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 102,
    "sourceNumber": 102,
    "question": "Faites correspondre la méthode HTTP avec l’opération RESTful.",
    "options": [
      "POST –>> Créer\nOBTENIR –>> Lis\nMETTRE/PATCH –>> Mettre à jour/Remplacer ? Modifier\nDelet –>> Supprimer"
    ],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image16.jpeg"
    ],
    "type": "matching",
    "expectedChoices": 4,
    "theme": "NAT",
    "matching": {
      "prompts": [
        "POST",
        "OBTENIR",
        "METTRE/PATCH",
        "Delet"
      ],
      "answers": [
        "Créer",
        "Lis",
        "Mettre à jour/Remplacer ? Modifier",
        "Supprimer"
      ],
      "correct": [
        "Créer",
        "Lis",
        "Mettre à jour/Remplacer ? Modifier",
        "Supprimer"
      ]
    }
  },
  {
    "id": 103,
    "sourceNumber": 103,
    "question": "Quels sont les trois composants utilisés dans la partie requête d’une requête API RESTful typique ? (Choisissez trois réponses.)",
    "options": [
      "paramètres",
      "Serveur API",
      "protocole",
      "clé",
      "Ressources",
      "format"
    ],
    "correct": [
      0,
      3,
      5
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "Automatisation"
  },
  {
    "id": 104,
    "sourceNumber": 104,
    "question": "Quel type de paquet OSPFv2 est utilisé pour transmettre les informations de modification de liaison OSPF ?",
    "options": [
      "Description de base de données (DD)",
      "Paquet LSA d’accusé de réception d’état de liens",
      "Les mises à jour d’état de liens",
      "hello"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 105,
    "sourceNumber": 105,
    "question": "Un administrateur réseau est en train de dépanner un problème OSPF qui implique la contiguïté des voisins. Que doit-il faire ?",
    "options": [
      "Assurez-vous que la priorité du routeur est unique sur chaque routeur.",
      "Assurez-vous que l’ID du routeur est inclus dans le paquet hello.",
      "Assurez-vous que l’option RR/BDR est terminée.",
      "Assurez-vous que les minuteurs d’intervalle Hello et Dead sont les mêmes sur tous les routeurs."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 106,
    "sourceNumber": 106,
    "question": "Quelle étape du processus de routage d’état de liens est décrite par un routeur qui construit une base de données d’état de liaison basée sur les LSA reçues?",
    "options": [
      "déclarer un voisin inaccessible",
      "équilibrage de charge chemins à coût égal",
      "choisir la meilleure route",
      "création de la table de topologie"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 107,
    "sourceNumber": 107,
    "question": "Une entreprise a conclu un contrat avec une entreprise de sécurité réseau pour aider à identifier les vulnérabilités du réseau d’entreprise. L’entreprise envoie une équipe pour effectuer des tests de pénétration sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des outils médico-légaux ?",
    "options": [
      "pour détecter toute preuve d’un piratage ou d’un programme malveillant dans un ordinateur ou un réseau",
      "pour inverser l’ingénierie des fichiers binaires lors de l’écriture d’exploits et lors de l’analyse de logiciels malveillants",
      "pour détecter les outils installés dans les fichiers et répertoires qui fournissent aux acteurs des menaces un accès à distance et un contrôle sur un ordinateur ou un réseau",
      "Ce sont des systèmes d’exploitation spécialement conçus préchargés avec des outils optimisés pour le piratage."
    ],
    "correct": [
      0
    ],
    "explanation": "Le piratage éthique implique l’utilisation de nombreux types d’outils différents pour tester le réseau et les appareils finaux. De nombreux tests d’intrusion ont été développés afin de valider la sécurité des réseaux et de leurs systèmes. Ces outils sont utilisés pour tester la vulnérabilité et la susceptibilité des réseaux à être fissurés, sondés, piratés, capturés et détournés. La plupart des outils sont basés sur Linux ou Linux et peuvent être utilisés à la fois par des chapeaux blancs et noirs.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 108,
    "sourceNumber": 108,
    "question": "Reportez-vous à l’illustration. Les employés du 192.168.11.0/24 travaillent sur des informations critiques et ne sont pas autorisés à accéder à l’extérieur de leur réseau. Quel est le meilleur type et placement ACL à utiliser dans cette situation ?",
    "options": [
      "ACL entrante standard sur R1 G0/1",
      "ACL entrante standard sur les lignes R1 vty",
      "ACL étendue entrante sur R3 S0/0/1",
      "ACL entrante étendue sur R3 G0/0"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image39.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 109,
    "sourceNumber": 109,
    "question": "Reportez-vous à l’illustration. Un administrateur configure l’ACL suivante afin d’empêcher les périphériques du sous-réseau 192.168.1.0 d’accéder au serveur à 10.1.1.5:\nOù l’administrateur doit-il placer cette liste ACL pour une utilisation optimale des ressources réseau ?",
    "options": [
      "sortant sur le routeur B Fa0/0",
      "entrant sur le routeur A Fa0/0",
      "sortant sur le routeur A Fa0/1",
      "entrant sur le routeur B Fa0/1"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [
      "assets/image4.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 110,
    "sourceNumber": 110,
    "question": "Un utilisateur fait savoir que lorsque l’URL de la page web de l’entreprise est saisie dans un navigateur, un message d’erreur indique que la page ne peut pas être affichée. Le technicien du centre d’assistance demande à l’utilisateur de saisir l’adresse IP du serveur web pour voir si la page peut s’afficher. Quelle est l’approche adoptée par le technicien ?",
    "options": [
      "substitution",
      "Approche ascendante",
      "diviser et conquérir",
      "Approche descendante"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 111,
    "sourceNumber": 111,
    "question": "Dans un réseau d’entreprise de grande taille, citez deux fonctions effectuées par les routeurs au niveau de la couche de distribution. (Choisissez deux propositions.)",
    "options": [
      "connecter les réseaux distants",
      "connecter les utilisateurs au réseau",
      "fournir un réseau fédérateur à haut débit",
      "assurer la sécurité du trafic de données",
      "fournir une alimentation PoE (Power over Ethernet) aux périphériques"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "WAN / VPN"
  },
  {
    "id": 112,
    "sourceNumber": 112,
    "question": "Examinez le résultat suivant pour une liste de contrôle qui a été appliquée à un routeur via la commande access-class in. Que peut conclure l’administrateur réseau du résultat indiqué ?",
    "options": [
      "Le trafic des deux périphériques ne peut pas accéder à l’un des ports de routeur et a été acheminé en direction sortante vers un autre port de routeur.",
      "Deux périphériques connectés au routeur sont affectés à l’adresse IP 192.168.10.x.",
      "Le trafic de l’un des périphériques ne peut pas accéder à l’un des ports de routeur et a été acheminé en direction sortante vers un autre port de routeur.",
      "Deux périphériques ont pu utiliser SSH ou Telnet pour obtenir l’accès au routeur."
    ],
    "correct": [
      3
    ],
    "explanation": "La commande access-class est utilisée uniquement sur les ports VTY. Les ports VTY prennent en charge le trafic Telnet et/ou SSH. Le match permit ACE correspond au nombre de tentatives autorisées à l’aide des ports VTY. Le match deny ACE indique qu’un périphérique d’un réseau autre que 192.168.10.0 n’a pas été autorisé à accéder au routeur via les ports VTY.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 113,
    "sourceNumber": 113,
    "question": "Reportez-vous à l’illustration. Du fait que le trafic est transféré sur une interface de sortie avec un traitement QoS, quelle technique de prévention de la congestion est utilisée ?",
    "options": [
      "classification et marquage",
      "détection anticipée aléatoire pondérée",
      "mise en forme du trafic",
      "régulation du trafic"
    ],
    "correct": [
      3
    ],
    "explanation": "La mise en forme du trafic met en mémoire tampon les paquets excédentaires dans une file d’attente, puis transfère le trafic sur des incréments de temps, ce qui crée un débit de sortie de paquets lissé. La régulation du trafic supprime le trafic lorsque la quantité de trafic atteint un débit maximal configuré, ce qui crée un débit de sortie qui apparaît comme une dent de scie avec des crêtes et des creux.",
    "images": [
      "assets/image17.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 114,
    "sourceNumber": 114,
    "question": "Quelle étape du processus de routage d’état de liaison est décrite par un routeur qui envoie des paquets Hello sur toutes les interfaces compatibles OSPF ?",
    "options": [
      "sélection du routeur désigné",
      "échange d’annonces à état de liens",
      "injection de la route par défaut",
      "établissement des contiguïtés de voisinage"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 115,
    "sourceNumber": 115,
    "question": "Une entreprise a conclu un contrat avec une entreprise de sécurité réseau pour aider à identifier les vulnérabilités du réseau d’entreprise. L’entreprise envoie une équipe pour effectuer des tests de pénétration sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des applications telles que John l’Éventreur, THC Hydra, RainbowCrack et Medusa ?",
    "options": [
      "faire des suppositions répétées afin de casser un mot de passe.",
      "Ce sont des systèmes d’exploitation spécialement conçus préchargés avec des outils optimisés pour le piratage.",
      "pour coder les données, à l’aide de schémas d’algorithmes, afin d’empêcher tout accès non autorisé aux données codées.",
      "pour inverser l’ingénierie des fichiers binaires lors de l’écriture d’exploits et lors de l’analyse de logiciels malveillants."
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 116,
    "sourceNumber": 116,
    "question": "Reportez-vous à l’illustration. Les privilèges d’internet d’un employé ont été révoqués en raison d’abus, mais l’employé a toujours besoin d’avoir accès aux ressources de l’entreprise. Quel est le meilleur type et placement ACL à utiliser dans cette situation ?",
    "options": [
      "ACL entrante standard sur l’interface WAN R2 se connectant à l’internet",
      "ACL sortante standard sur R1 G0/0",
      "ACL entrante standard sur R1 G0/0",
      "ACL sortante standard sur l’interface WAN R2 vers Internet"
    ],
    "correct": [
      3
    ],
    "explanation": "– Les ACL standard autorisent ou refusent les paquets en fonction uniquement de l’adresse IPv4 source. Étant donné que tous les types de trafic sont autorisés ou refusés, les ACL standard doivent être situées aussi près que possible de la destination.\n– Les ACL étendues autorisent ou refusent les paquets en fonction de l’adresse IPv4 source et de l’adresse IPv4 de destination, du type de protocole, des ports TCP ou UDP source et destination, etc. Étant donné que le filtrage des ACL étendues est si spécifique, les ACL étendues doivent être situées aussi près que possible de la source du trafic à filtrer. Le trafic indésirable est refusé à proximité du réseau source sans traverser l’infrastructure réseau.",
    "images": [
      "assets/image39.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 117,
    "sourceNumber": 117,
    "question": "Examinez l’illustration. Un administrateur réseau configure une liste de contrôle d’accès pour restreindre la connexion aux lignes vty de R1 aux seules stations de travail du groupe informatiques dans le réseau 192.168.22.0/28. L’administrateur vérifie que les connexions Telnet aboutissent entre la station de travail dont l’adresse IP est 192.168.22.5 et R1 avant que la liste de contrôle d’accès ne soit appliquée. Cependant, une fois que la liste de contrôle d’accès est appliquée à l’interface Fa0/0, les connexions Telnet sont refusées. Quelle est la cause de l’échec de la connexion ?",
    "options": [
      "L’entrée de contrôle d’accès d’autorisation spécifie un numéro de port incorrect.",
      "Le mot de passe secret actif n’est pas configuré sur R1.",
      "L’entrée de liste de contrôle d’autorisation doit spécifier le protocole IP et non le protocole TCP.",
      "Le réseau de groupe informatique est inclus dans l’instruction de refus.",
      "La commande login n’a pas été saisie pour les lignes vty."
    ],
    "correct": [
      3
    ],
    "explanation": "La plage d’adresses IP source dans l’ACE de refus est 192.168.20.0 0.0.3.255, qui couvre les adresses IP de 192.168.20.0 à 192.168.23.255. Le réseau du groupe informatique 192.168.22.0/28 est inclus dans le réseau 192.168.20/22. Par conséquent, la connexion est refusée. Pour résoudre ce problème, l’ordre des ACE de refus et d’autorisation doit être inversé.",
    "images": [
      "assets/image42.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 118,
    "sourceNumber": 118,
    "question": "Quelles sont les deux informations qui doivent apparaître dans le schéma de topologie logique d’un réseau ? (Choisissez deux propositions.)",
    "options": [
      "les type et identifiant des câbles",
      "la spécification des câbles",
      "le type de périphérique",
      "l’identifiant de l’interface",
      "la version d’OS/IOS",
      "le type de connexion"
    ],
    "correct": [
      3,
      5
    ],
    "explanation": "Le type d’identifiant d’interface et le type de connexion doivent apparaître dans le schéma de topologie logique parce qu’ils indiquent quelle interface est connectée à d’autres appareils du réseau au moyen d’un type spécifique (LAN, WAN, le point à point, etc.). La version d’OS/IOS, le type de périphérique, l’identifiant et le type de câble et la spécification des câbles figurent généralement dans le schéma de topologie physique.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ENSA général"
  },
  {
    "id": 119,
    "sourceNumber": 119,
    "question": "Quelle est la description correcte d’une caractéristique des commutateurs Catalyst 2960 Cisco ?",
    "options": [
      "Leur utilisation en tant que commutateurs de couche de distribution est la plus appropriée.",
      "Les nouveaux commutateurs Cisco Catalyst 2960-C prennent en charge l’alimentation PoE passthrough.",
      "Il s’agit de commutateurs modulaires.",
      "Ils ne prennent pas en charge une interface virtuelle commutée (SVI) active avec des versions IOS antérieures à la 15.x."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Conception réseau"
  },
  {
    "id": 120,
    "sourceNumber": 120,
    "question": "Quelle fonctionnalité le mGRE offre-t-il à la technologie DMVPN ?",
    "options": [
      "Il permet le transport sécurisé d’informations sensibles sur des réseaux publics comme Internet.",
      "C’est une solution logicielle Cisco qui permet de créer plusieurs VPN de manière simple, dynamique et évolutive.",
      "Il permet de créer des tunnels attribués dynamiquement via une source de tunnel permanente au niveau du concentrateur et des destinations de tunnel attribuées dynamiquement au niveau des rayons.",
      "Ce dernier crée une base de données de mappage des adresses IP publiques pour tous les spokes de tunnel VPN."
    ],
    "correct": [
      2
    ],
    "explanation": "DMVPN est construit sur trois protocoles, NHRP, IPsec et mGRE. NHRP est le protocole de mappage d’adresse distribué pour les tunnels VPN. IPsec crypte les communications sur les tunnels VPN. Le protocole mGRE permet la création dynamique de plusieurs tunnels en étoile à partir d’un hub VPN permanent.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 121,
    "sourceNumber": 121,
    "question": "Citez deux types d’attaques utilisés sur les programmes de résolution DNS ouverts. Citez-en deux.",
    "options": [
      "utilisation des ressources",
      "flux rapide",
      "amplification et réflexion",
      "empoisonnement ARP",
      "amortissement"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Trois types d’attaques utilisées sur les résolveurs ouverts DNS sont les suivants :Empoisonnement du cache DNS – l’attaquant envoie des informations falsifiées usurpées pour rediriger les utilisateurs de sites légitimes vers des sites malveillants\nAttaques par amplification et réflexion DNS – l’attaquant envoie un volume accru d’attaques pour masquer la véritable source de l’attaque\nAttaques d’utilisation des ressources DNS – une attaque par déni de service (DoS) qui consomme les ressources du serveur",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Sécurité"
  },
  {
    "id": 122,
    "sourceNumber": 122,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration NAT ou PAT pour effacer les entrées dynamiques avant l’expiration du délai d’expiration ?",
    "options": [
      "clear ip pat statistics",
      "clear ip dhcp",
      "clear access-list counters",
      "clear ip nat translation"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 123,
    "sourceNumber": 123,
    "question": "Quel type de VPN se connecte à l’aide de la fonctionnalité TLS (Transport Layer Security) ?",
    "options": [
      "VPN multipoint dynamique",
      "Interface de tunnel virtuel IPSec",
      "VPN SSL",
      "GRE sur IPsec"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 124,
    "sourceNumber": 124,
    "question": "Un étudiant, qui fait un semestre d’études à l’étranger, a pris des centaines de photos sur un smartphone et veut les sauvegarder en cas de perte. Quel service ou quelle technologie permettrait de répondre à cette exigence ?",
    "options": [
      "services de cloud",
      "SDN (Software Defined Networking)",
      "Serveurs dédiés",
      "ACI Cisco"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 125,
    "sourceNumber": 125,
    "question": "Examinez l’illustration. Un administrateur tente de configurer la PAT sur R1, mais PC-A ne parvient pas à accéder à Internet. Il tente d’envoyer une requête ping à un serveur sur Internet à partir de PC-A et recueille le journal de débogage illustré. D’après ce journal, quelle est la cause la plus probable du problème ?",
    "options": [
      "La liste d’accès source de la NAT correspond à une plage d’adresses incorrecte.",
      "Les interfaces NAT interne et externe ont été configurées à l’envers.",
      "L’adresse globale interne ne se trouve pas sur le même sous-réseau que le FAI.",
      "L’adresse sur Fa0/0 devrait être 64.100.0.1."
    ],
    "correct": [
      2
    ],
    "explanation": "La sortie de debug ip nat montre chaque paquet qui est traduit par le routeur. Le « s » est l’adresse IP source du paquet et le « d » est la destination. L’adresse après la flèche (« -> ») indique l’adresse traduite. Dans ce cas, l’adresse traduite se trouve sur le sous-réseau 209.165.201.0 mais l’interface faisant face au FAI se trouve dans le sous-réseau 209.165.200.224/27. Le FAI peut abandonner les paquets entrants ou ne pas être en mesure de réacheminer les paquets de retour vers l’hôte car l’adresse se trouve dans un sous-réseau inconnu.",
    "images": [
      "assets/image7.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 126,
    "sourceNumber": 126,
    "question": "Quel est le nom de la couche dans la conception du réseau commuté sans frontière de Cisco qui est considérée comme la dorsale utilisée pour la connectivité à haut débit et l’isolation des défauts ?",
    "options": [
      "couche d’accès réseau",
      "réseau",
      "accès",
      "cœur de réseau",
      "liaison de données"
    ],
    "correct": [
      3
    ],
    "explanation": "Les trois couches de la conception du réseau de commutation sans frontières Cisco sont l’accès, la distribution et le cœur. Les commutateurs de la couche d’accès sont ceux utilisés pour connecter les périphériques finaux au réseau. Les commutateurs de la couche de distribution acceptent les connexions des commutateurs de la couche d’accès et fournissent des fonctions de commutation, de routage et de politique d’accès. La couche centrale est appelée backbone et les commutateurs principaux ont généralement des connexions redondantes à haut débit.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 127,
    "sourceNumber": 127,
    "question": "Reportez-vous à l’illustration. Quelle conclusion pouvez-vous tirer de ce réseau à accès multiple OSPF ?",
    "options": [
      "Lorsqu’un routeur désigné (DR) est choisi, tous les autres routeurs non désignés deviennent des routeurs DROTHER.",
      "Lorsque le DR est sélectionné, le nombre de contiguïtés passe de 6 à 3.",
      "Tous les routeurs DROTHER envoient des LSA au routeur désigné (DR) et au routeur désigné de secours (BDR) à l’adresse de multidiffusion 224.0.0.5.",
      "Si le DR cesse de générer des paquets Hello, un BDR est choisi pour assumer le rôle de DR."
    ],
    "correct": [
      1
    ],
    "explanation": "Sur les réseaux multi-accès OSPF, un DR est élu pour être le point de collecte et de distribution des LSA envoyés et reçus. Un BDR est également élu en cas d’échec du DR. Tous les autres routeurs non DR ou BDR deviennent DROTHER. Au lieu d’inonder les LSA vers tous les routeurs du réseau, les DROTHER n’envoient leurs LSA qu’au DR et au BDR à l’aide de l’adresse de multidiffusion 224.0.0.6. S’il n’y a pas d’élection DR/BDR, le nombre d’adjacences requises est n(n-1)/2 = > 4(4-1)/2 = 6. Avec l’élection, ce nombre est réduit à 3.",
    "images": [
      "assets/image31.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 128,
    "sourceNumber": 128,
    "question": "Si le client Cisco AnyConnect n’est pas préinstallé sur un hôte externe, comment l’hôte aurait-il accès à l’image du client ?",
    "options": [
      "L’hôte initie une connexion sans client à un serveur TFTP pour télécharger le client.",
      "L’hôte initie une connexion VPN sans client à l’aide d’un navigateur Web conforme pour télécharger le client.",
      "L’hôte initie une connexion sans client à un serveur FTP pour télécharger le client.",
      "Le client Cisco AnyConnect est installé par défaut sur la plupart des principaux systèmes d’exploitation."
    ],
    "correct": [
      1
    ],
    "explanation": "Si un hôte externe n’a pas le client Cisco AnyConnect préinstallé, l’utilisateur distant doit initier une connexion VPN SSL sans client via un navigateur Web conforme, puis télécharger et installer AnyConnect client sur l’hôte distant.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 129,
    "sourceNumber": 129,
    "question": "Quel mécanisme de mise en file d’attente ne permet pas de donner la priorité ni de mettre en mémoire tampon mais transfère simplement les paquets dans l’ordre où ils arrivent ?",
    "options": [
      "WFQ",
      "FIFO",
      "LLQ",
      "CBWFQ"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 130,
    "sourceNumber": 130,
    "question": "Quel composant de l’architecture ACI traduit les politiques d’application en programmes de réseau ?",
    "options": [
      "le contrôleur d’infrastructure de politique d’application",
      "les points de terminaison du profil d’applications réseau",
      "l’hyperviseur",
      "le commutateur Nexus 9000"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 131,
    "sourceNumber": 131,
    "question": "Qu’est-ce qui caractérise la topologie Spine-Leaf à deux niveaux de l’architecture de fabric Cisco ACI ?",
    "options": [
      "Les commutateurs Spine et Leaf sont toujours reliés via des commutateurs centraux.",
      "Les commutateurs Leaf se connectent toujours aux commutateurs Spine et sont interconnectés via une liaison trunk.",
      "Les commutateurs Spine se connectent aux commutateurs Leaf et se connectent les uns aux autres pour assurer la redondance.",
      "Les commutateurs Leaf sont toujours associés à des commutateurs Spine, mais ne le sont jamais entre eux."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 132,
    "sourceNumber": 132,
    "question": "Un administrateur configure OSPF à zone unique sur un routeur. L’un des réseaux qui doivent être annoncés est 192.168.0.0 255.255.254.0. Quel masque générique l’administrateur utiliserait-il dans l’instruction réseau OSPF ?",
    "options": [
      "0.0.1.255",
      "0.0.63.255",
      "0.0.15.255",
      "0.0.31.255"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 133,
    "sourceNumber": 133,
    "question": "Reportez-vous à l’illustration. Le CEO de l’entreprise exige la création d’une liste ACL pour permettre le trafic de courrier électronique vers Internet et refuser l’accès FTP. Quel est le meilleur type et placement ACL à utiliser dans cette situation ?",
    "options": [
      "ACL entrante standard sur R1 G0/0",
      "ACL étendue sortante sur l’interface WAN R2 vers l’internet",
      "ACL étendue entrante sur R2 S0/0/0",
      "ACL entrante standard sur l’interface WAN R2 se connectant à l’internet"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [
      "assets/image39.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 134,
    "sourceNumber": 134,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une entrée unique:\nSi un paquet avec une adresse source 192.168.10.45, une adresse de destination 10.10.3.27 et un protocole de 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "Autorisé",
      "refusé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 135,
    "sourceNumber": 135,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration NAT ou PAT pour définir un pool d’adresses pour la traduction ?",
    "options": [
      "ip nat inside source static 172.19.89.13 198.133.219.65",
      "ip nat outside",
      "ip nat inside source list 24 interface serial 0/1/0 overload",
      "ip nat pool POOL-STAT 64.100.14.17 64.100.14.30 netmask 255.255.255.240",
      "=========================================="
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 136,
    "sourceNumber": 9,
    "question": "Un administrateur réseau a été chargé de créer un plan de reprise après sinistre. Dans le cadre de ce plan, l’administrateur recherche un site de sauvegarde pour toutes les données sur les serveurs de l’entreprise. Quel service ou technologie répondrait à cette exigence ?",
    "options": [
      "centre de données",
      "virtualisation",
      "serveurs dédiés",
      "réseau défini par logiciel"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 137,
    "sourceNumber": 13,
    "question": "Un client a besoin d’une connexion WAN de zone métropolitaine qui fournit une bande passante dédiée à haut débit entre deux sites. Quel type de connexion WAN répondrait le mieux à ce besoin ?",
    "options": [
      "réseau à commutation de paquets",
      "réseau étendu Ethernet",
      "réseau à commutation de circuits",
      "MPLS"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 138,
    "sourceNumber": 14,
    "question": "Une entreprise a passé un contrat avec une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau de l’entreprise. L’entreprise envoie une équipe pour effectuer des tests d’intrusion sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des débogueurs ?",
    "options": [
      "pour détecter les outils installés dans les fichiers et les répertoires qui permettent aux pirates d’accéder et de contrôler à distance un ordinateur ou un réseau",
      "pour désosser les fichiers binaires lors de l’écriture d’exploits et de l’analyse de logiciels malveillants",
      "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le piratage",
      "pour détecter toute preuve de piratage ou de logiciel malveillant dans un ordinateur ou un réseau"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 139,
    "sourceNumber": 19,
    "question": "Lors de la configuration d’un réseau de petite entreprise, l’administrateur réseau décide d’attribuer dynamiquement des adresses IP privées aux postes de travail et aux appareils mobiles. Quelle fonctionnalité doit être activée sur le routeur de l’entreprise pour que les appareils de bureau accèdent à Internet ?",
    "options": [
      "UPnP",
      "Filtrage MAC",
      "NAT",
      "Qualité de service"
    ],
    "correct": [
      2
    ],
    "explanation": "La traduction d’adresses réseau (NAT) est le processus utilisé pour convertir des adresses privées en adresses routables sur Internet qui permettent aux appareils de bureau d’accéder à Internet.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 140,
    "sourceNumber": 44,
    "question": "Un attaquant redirige le trafic vers une fausse passerelle par défaut pour tenter d’intercepter le trafic de données d’un réseau commuté. Quel type d’attaque pourrait y parvenir ?",
    "options": [
      "Inondation TCP SYN",
      "Tunnelisation DNS",
      "Usurpation DHCP",
      "Empoisonnement du cache ARP"
    ],
    "correct": [
      2
    ],
    "explanation": "dans les attaques d’usurpation DHCP, un attaquant configure un faux serveur DHCP sur le réseau pour émettre des adresses DHCP aux clients dans le but de forcer les clients à utiliser une fausse passerelle par défaut, et autres faux services. La surveillance DHCP est une fonctionnalité du commutateur Cisco qui peut atténuer les attaques DHCP. La privation d’adresses MAC et l’espionnage d’adresses MAC ne sont pas des attaques de sécurité reconnues. L’usurpation d’adresse MAC est une menace pour la sécurité du réseau.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 141,
    "sourceNumber": 46,
    "question": "Une entreprise a passé un contrat avec une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau de l’entreprise. L’entreprise envoie une équipe pour effectuer des tests d’intrusion sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des renifleurs de paquets ?",
    "options": [
      "pour détecter les outils installés dans les fichiers et les répertoires qui permettent aux pirates d’accéder et de contrôler à distance un ordinateur ou un réseau",
      "pour détecter toute preuve de piratage ou de logiciel malveillant dans un ordinateur ou un réseau",
      "pour sonder et tester la robustesse d’un pare-feu en utilisant des paquets falsifiés spécialement créés",
      "pour capturer et analyser les paquets dans les LAN Ethernet traditionnels ou les WLAN"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 142,
    "sourceNumber": 53,
    "question": "Quels sont les deux scénarios qui entraîneraient une incompatibilité duplex ? (Choisissez deux réponses.)",
    "options": [
      "connecter un appareil avec négociation automatique à un autre qui est manuellement réglé sur full-duplex",
      "démarrage et arrêt d’une interface de routeur pendant une opération normale",
      "connecter un appareil avec une interface fonctionnant à 100 Mbps à un autre avec une interface fonctionnant à 1 000 Mbps",
      "configuration incorrecte du routage dynamique",
      "régler manuellement les deux appareils connectés sur différents modes duplex"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "NAT"
  },
  {
    "id": 143,
    "sourceNumber": 57,
    "question": "Quels types de ressources sont nécessaires pour un hyperviseur de type 1 ?",
    "options": [
      "un VLAN dédié",
      "une console de gestion",
      "un système d’exploitation hôte"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 144,
    "sourceNumber": 69,
    "question": "Quels sont les deux énoncés décrivant l’utilisation d’algorithmes asymétriques ? (Choisissez deux réponses.)",
    "options": [
      "Les clés publiques et privées peuvent être utilisées de manière interchangeable.",
      "Si une clé publique est utilisée pour chiffrer les données, une clé publique doit être utilisée pour déchiffrer les données.",
      "Si une clé privée est utilisée pour chiffrer les données, une clé publique doit être utilisée pour déchiffrer les données.",
      "Si une clé publique est utilisée pour chiffrer les données, une clé privée doit être utilisée pour déchiffrer les données.",
      "Si une clé privée est utilisée pour chiffrer les données, une clé privée doit être utilisée pour déchiffrer les données."
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Les algorithmes asymétriques utilisent deux clés : une clé publique et une clé privée. Les deux clés sont capables du processus de chiffrement, mais la clé correspondante complémentaire est requise pour le déchiffrement. Si une clé publique chiffre les données, la clé privée correspondante déchiffre les données. L’inverse est également vrai. Si une clé privée chiffre les données, la clé publique correspondante déchiffre les données.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "NAT"
  },
  {
    "id": 145,
    "sourceNumber": 70,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau a déployé QoS et a configuré le réseau pour marquer le trafic sur les téléphones VoIP ainsi que sur les commutateurs de couche 2 et de couche 3. Où le marquage initial doit-il avoir lieu pour établir la limite de confiance ?",
    "options": [
      "Frontière de confiance 4",
      "Frontière de confiance 3",
      "Frontière de confiance 1",
      "Frontière de confiance 2"
    ],
    "correct": [
      2
    ],
    "explanation": "Le trafic doit être classé et marqué aussi près que possible de sa source. La limite de confiance identifie à quel périphérique le trafic marqué doit être approuvé. Le trafic marqué sur les téléphones VoIP serait considéré comme fiable lorsqu’il se déplace vers le réseau de l’entreprise.",
    "images": [
      "assets/image23.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 146,
    "sourceNumber": 71,
    "question": "Quels sont les deux avantages de l’extension de la connectivité de la couche d’accès aux utilisateurs via un support sans fil ? (Choisissez deux réponses.)",
    "options": [
      "coûts réduits",
      "diminution du nombre de points de défaillance critiques",
      "flexibilité accrue",
      "augmentation de la disponibilité de la bande passante",
      "plus d’options de gestion du réseau"
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Conception réseau"
  },
  {
    "id": 147,
    "sourceNumber": 74,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une seule entrée :\n_Si un paquet avec une adresse source de 10.1.1.201, une adresse de destination de 192.31.7.45 et un protocole de 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "autorisé",
      "refusé"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 148,
    "sourceNumber": 76,
    "question": "Reportez-vous à l’illustration. Quel format de données est utilisé pour représenter les données pour les applications d’automatisation de réseau ?",
    "options": [
      "XML",
      "YAML",
      "HTML",
      "JSON"
    ],
    "correct": [
      3
    ],
    "explanation": "Les formats de données courants utilisés dans de nombreuses applications, y compris l’automatisation du réseau et la programmabilité, sont les suivants :\n_JavaScript Object Notation (JSON) : dans JSON, les données connues sous le nom d’objet sont une ou plusieurs paires clé/valeur entre accolades { }. Les clés doivent être des chaînes entre guillemets doubles » « . Les clés et les valeurs sont séparées par deux-points.\n_Langage de balisage extensible (XML) : en XML, les données sont incluses dans un ensemble de balises associées <tag>data</tag>.\n_YAML n’est pas un langage de balisage (YAML) : dans YAML, les données connues sous le nom d’objet sont constituées d’une ou de plusieurs paires clé/valeur. Les paires clé-valeur sont séparées par deux-points sans utiliser de guillemets. YAML utilise l’indentation pour définir sa structure, sans utiliser de crochets ni de virgules.",
    "images": [
      "assets/image18.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 149,
    "sourceNumber": 77,
    "question": "Quelle étape QoS doit avoir lieu avant que les paquets puissent être marqués ?",
    "options": [
      "classification",
      "mise en forme",
      "faire la queue",
      "police"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 150,
    "sourceNumber": 79,
    "question": "Une entreprise doit interconnecter plusieurs succursales dans une zone métropolitaine. L’ingénieur réseau recherche une solution qui fournit un trafic convergé à haut débit, y compris la voix, la vidéo et les données sur la même infrastructure réseau. La société souhaite également une intégration facile à son infrastructure LAN existante dans ses bureaux. Quelle technologie recommander ?",
    "options": [
      "Frame Relay",
      "réseau étendu Ethernet",
      "VSAT",
      "RNIS"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 151,
    "sourceNumber": 81,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une seule entrée :\n_Si un paquet avec une adresse source de 10.1.3.8, une adresse de destination de 10.10.3.8 et un protocole de 53 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "refusé",
      "autorisé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 152,
    "sourceNumber": 86,
    "question": "Reportez-vous à l’illustration. De nombreux employés perdent le temps de l’entreprise à accéder aux médias sociaux sur leurs ordinateurs de travail. L’entreprise veut arrêter cet accès. Quel est le meilleur type et emplacement ACL à utiliser dans cette situation ?",
    "options": [
      "LCA étendue sortante sur l’interface WAN R2 vers Internet",
      "ACL standard sortant sur l’interface WAN R2 vers Internet",
      "ACL standard sortant sur R2 S0/0/0",
      "LCA étendues entrantes sur R1 G0/0 et G0/1"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [
      "assets/image35.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 153,
    "sourceNumber": 90,
    "question": "Dans quel état OSPF l’élection DR/BDR est-elle effectuée ?",
    "options": [
      "ExStart",
      "Init",
      "Bidirectionnel",
      "Échange"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 154,
    "sourceNumber": 93,
    "question": "Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir les contiguïtés OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
    "options": [
      "Le routeur R3 deviendra le DR et le routeur R1 deviendra le BDR.",
      "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
      "Le routeur R1 deviendra le DR et le routeur R2 deviendra le BDR.",
      "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
    ],
    "correct": [
      0
    ],
    "explanation": "les élections OSPF d’un DR sont basées sur les éléments suivants par ordre de priorité :\npriorité la plus élevée de 1 à 255 (0 = jamais un DR)\nID de routeur le plus élevé\nl’adresse IP la plus élevée d’un bouclage ou d’une interface active en l’absence d’ID de routeur configuré manuellement. Les adresses IP de bouclage ont une priorité plus élevée que les autres interfaces.\nDans ce cas, les routeurs R3 et R1 ont la priorité de routeur la plus élevée. Entre les deux, R3 a l’ID de routeur le plus élevé. Par conséquent, R3 deviendra le DR et R1 deviendra le BDR.",
    "images": [
      "assets/image40.gif"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 155,
    "sourceNumber": 94,
    "question": "Quel type de serveur serait utilisé pour conserver un enregistrement historique des messages provenant des périphériques réseau surveillés ?",
    "options": [
      "DNS",
      "imprimer",
      "DHCP",
      "syslog",
      "authentification"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 156,
    "sourceNumber": 95,
    "question": "Lorsque QoS est implémenté dans un réseau convergé, quels sont les deux facteurs qui peuvent être contrôlés pour améliorer les performances du réseau pour le trafic en temps réel ? (Choisissez deux réponses.)",
    "options": [
      "adressage des paquets",
      "délai",
      "jitter",
      "routage de paquets",
      "vitesse de liaison"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Le délai est la latence entre un appareil émetteur et récepteur. La gigue est la variation du retard des paquets reçus. Le délai et la gigue doivent être contrôlés afin de prendre en charge le trafic voix et vidéo en temps réel.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "QoS"
  },
  {
    "id": 157,
    "sourceNumber": 97,
    "question": "Quel protocole envoie des annonces périodiques entre les appareils Cisco connectés afin de connaître le nom de l’appareil, la version de l’IOS, ainsi que le nombre et le type d’interfaces ?",
    "options": [
      "CDP",
      "SNMP",
      "NTP",
      "LLDP"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 158,
    "sourceNumber": 102,
    "question": "Quel type de VPN permet la multidiffusion et la diffusiontrafic rapide via un VPN de site à site sécurisé ?",
    "options": [
      "VPN multipoint dynamique",
      "VPN SSL",
      "Interface de tunnel virtuel IPsec",
      "GRE sur IPsec"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 159,
    "sourceNumber": 107,
    "question": "Comment la virtualisation facilite-t-elle la reprise après sinistre dans un centre de données ?",
    "options": [
      "Le matériel n’a pas besoin d’être identique.",
      "(Autre cas) Le matériel sur le site de récupération ne doit pas nécessairement être identique à l’équipement de production.",
      "L’alimentation est toujours fournie.",
      "Moins d’énergie est consommée.",
      "Le provisionnement du serveur est plus rapide."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "La reprise après sinistre est la manière dont une entreprise s’y prend pour accéder aux applications, aux données et au matériel susceptibles d’être affectés lors d’un sinistre. La virtualisation offre une indépendance matérielle, ce qui signifie que le site de reprise après sinistre n’a pas besoin d’avoir exactement l’équipement que l’équipement en production. Le provisionnement de serveur est pertinent lorsqu’un serveur est créé pour la première fois. Bien que les centres de données disposent de générateurs de secours, l’ensemble du centre de données est conçu pour la reprise après sinistre. Un centre de données particulier ne pourrait jamais garantir que le centre de données lui-même ne serait jamais sans électricité.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 160,
    "sourceNumber": 112,
    "question": "Quel protocole utilise des agents résidant sur des appareils gérés pour collecter et stocker des informations sur l’appareil et son fonctionnement ?",
    "options": [
      "SYSLOG",
      "TFTP",
      "CBWFQ",
      "SNMP"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 161,
    "sourceNumber": 113,
    "question": "Un administrateur configure l’OSPF à zone unique sur un routeur. L’un des réseaux qui doit être annoncé est 10.27.27.0 255.255.255.0. Quel masque générique l’administrateur utiliserait-il dans la déclaration de réseau OSPF ?",
    "options": [
      "0.0.0.63",
      "0.0.0.255",
      "0.0.0.31",
      "0.0.0.15"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 162,
    "sourceNumber": 114,
    "question": "Quand un routeur compatible OSPF passera-t-il de l’état Down à l’état Init ?",
    "options": [
      "lorsqu’une interface compatible OSPF devient active",
      "dès que le routeur démarre",
      "lorsque le routeur reçoit un paquet Hello d’un routeur voisin",
      "dès que le processus d’élection DR/BDR est terminé"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 163,
    "sourceNumber": 115,
    "question": "Quel type de trafic est décrit comme ayant un volume élevé de données par paquet ?",
    "options": [
      "données",
      "vidéo",
      "voix"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 164,
    "sourceNumber": 122,
    "question": "Une entreprise a consolidé plusieurs serveurs et recherche un programme ou un firmware pour créer et contrôler des machines virtuelles qui ont accès à tout le matériel des serveurs consolidés. Quel service ou technologie répondrait à cette exigence ?",
    "options": [
      "ACI Cisco",
      "réseau défini par logiciel",
      "Hyperviseur de type 1",
      "APIC-EM"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 165,
    "sourceNumber": 123,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour identifier les adresses locales internes à traduire ?",
    "options": [
      "ip nat inside source list 24 interface serial 0/1/0 surcharge",
      "ip nat inside source list 14 pool POOL-STAT surcharge",
      "liste d’accès 10 permis 172.19.89.0 0.0.0.255",
      "ip nat dans la liste des sources ACCTNG pool POOL-STAT"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 166,
    "sourceNumber": 125,
    "question": "Reportez-vous à l’illustration. Un administrateur essaie de sauvegarder la configuration en cours d’exécution du routeur sur une clé USB et entre la commande copy usbflash0:/R1-config running-config sur la ligne de commande du routeur. Après avoir retiré la clé USB et l’avoir connectée à un PC, l’administrateur découvre que la configuration en cours n’a pas été correctement sauvegardée dans le fichier de configuration R1. Quel est le problème ?",
    "options": [
      "Le fichier existe déjà sur la clé USB et ne peut pas être écrasé.",
      "Le disque n’a pas été correctement formaté avec le système de fichiers FAT16.",
      "Il n’y a plus d’espace sur la clé USB.",
      "La clé USB n’est pas reconnue par le routeur.",
      "La commande utilisée par l’administrateur était incorrecte."
    ],
    "correct": [
      4
    ],
    "explanation": "",
    "images": [
      "assets/image8.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 167,
    "sourceNumber": 126,
    "question": "Quels sont les trois types de VPN qui sont des exemples de VPN site à site gérés par l’entreprise ? (Choisissez trois réponses.)",
    "options": [
      "VPN MPLS de couche 3",
      "VPN IPsec",
      "VPN multipoint dynamique Cisco",
      "GRE sur VPN IPsec",
      "VPN SSL sans client",
      "VPN IPsec basé sur le client"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "WAN / VPN"
  },
  {
    "id": 168,
    "sourceNumber": 128,
    "question": "Dans un réseau OSPF, quelles sont les deux déclarations décrivant la base de données d’état des liens (LSDB) ? (Choisissez deux réponses.)",
    "options": [
      "Il peut être visualisé à l’aide de la commande show ip ospf database.",
      "Une table de voisinage est créée sur la base de la LSDB.",
      "Il contient une liste des meilleurs itinéraires vers un réseau particulier.",
      "Il contient une liste de tous les routeurs voisins avec lesquels un routeur a établi une communication bidirectionnelle.",
      "Tous les routeurs d’une zone ont une base de données d’état de liens identique."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "OSPF"
  },
  {
    "id": 169,
    "sourceNumber": 129,
    "question": "Dans un réseau OSPF, quelle structure OSPF est utilisée pour créer la table des voisins sur un routeur ?",
    "options": [
      "base de données de contiguïté",
      "base de données d’état des liens",
      "table de routage",
      "base de données de transfert"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 170,
    "sourceNumber": 130,
    "question": "Quel protocole est utilisé dans un système composé de trois éléments : un gestionnaire, des agents et une base de données d’informations ?",
    "options": [
      "MPLS",
      "SYSLOG",
      "SNMP",
      "TFTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 171,
    "sourceNumber": 131,
    "question": "Quel type de trafic est décrit comme n’étant pas résilient aux pertes ?",
    "options": [
      "données",
      "vidéo",
      "voix"
    ],
    "correct": [
      1
    ],
    "explanation": "le trafic vidéo a tendance à être imprévisible, incohérent et en rafale par rapport au trafic vocal. Par rapport à la voix, la vidéo est moins résistante aux pertes et contient un plus grand volume de données par paquet.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 172,
    "sourceNumber": 135,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une seule entrée :\n_Si un paquet avec une adresse source de 198.133.219.100, une adresse de destination de 198.133.219.170 et un protocole de 23 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "refusé",
      "autorisé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 173,
    "sourceNumber": 140,
    "question": "Reportez-vous à l’illustration. Si le commutateur redémarre et que tous les routeurs doivent rétablir les contiguïtés OSPF, quels routeurs deviendront les nouveaux DR et BDR ?",
    "options": [
      "Le routeur R2 deviendra le DR et le routeur R4 deviendra le BDR.",
      "Le routeur R1 deviendra le DR et le routeur R3 deviendra le BDR.",
      "Le routeur R4 deviendra le DR et le routeur R3 deviendra le BDR.",
      "Le routeur R3 deviendra le DR et le routeur R2 deviendra le BDR."
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [
      "assets/image32.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 174,
    "sourceNumber": 145,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour afficher toutes les traductions statiques qui ont été configurées ?",
    "options": [
      "afficher les traductions ip nat",
      "afficher les traductions ip pat",
      "afficher le cache IP",
      "afficher la configuration en cours"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 175,
    "sourceNumber": 147,
    "question": "Quel type de VPN est le choix préféré pour la prise en charge et la facilité de déploiement pour l’accès à distance ?",
    "options": [
      "VPN SSL",
      "GRE sur IPsec",
      "VPN multipoint dynamique",
      "Interface de tunnel virtuel IPsec"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 176,
    "sourceNumber": 153,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une seule entrée :\n_Si un paquet avec une adresse source de 192.168.10.244, une adresse de destination de 172.17.200.56 et un protocole de 80 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "refusé",
      "autorisé"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 177,
    "sourceNumber": 154,
    "question": "Une entreprise a passé un contrat avec une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau de l’entreprise. L’entreprise envoie une équipe pour effectuer des tests d’intrusion sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des applications telles que Nmap, SuperScan et Angry IP Scanner ?",
    "options": [
      "pour détecter les outils installés dans les fichiers et les répertoires qui permettent aux pirates d’accéder et de contrôler à distance un ordinateur ou un réseau",
      "pour détecter toute preuve de piratage ou de logiciel malveillant dans un ordinateur ou un réseau",
      "pour désosser les fichiers binaires lors de l’écriture d’exploits et de l’analyse de logiciels malveillants",
      "pour sonder les périphériques réseau, les serveurs et les hôtes à la recherche de ports TCP ou UDP ouverts"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 178,
    "sourceNumber": 155,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour afficher les traductions PAT dynamiques créées par le trafic ?",
    "options": [
      "afficher les traductions ip pat",
      "afficher le cache IP",
      "afficher la configuration en cours",
      "afficher les traductions ip nat"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 179,
    "sourceNumber": 156,
    "question": "Un administrateur configure l’OSPF à zone unique sur un routeur. L’un des réseaux qui doit être annoncé est 172.16.91.0 255.255.255.192. Quel masque générique l’administrateur utiliserait-il dans la déclaration de réseau OSPF ?",
    "options": [
      "0.0.31.255",
      "0.0.0.63",
      "0.0.15.255",
      "0.0.7.255"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 180,
    "sourceNumber": 157,
    "question": "Quel type de trafic est décrit comme nécessitant une latence inférieure à 400 ms ?",
    "options": [
      "vidéo",
      "données",
      "voix"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 181,
    "sourceNumber": 160,
    "question": "Reportez-vous à l’illustration. La société a décidé qu’aucun trafic provenant de tout autre réseau existant ou futur ne peut être transmis au réseau de Recherche et Développement. De plus, aucun trafic provenant du réseau de Recherche et Développement ne peut être transmis à d’autres réseaux existants ou futurs de l’entreprise. L’administrateur réseau a décidé que les listes de contrôle d’accès étendues sont mieux adaptées à ces exigences. Sur la base des informations fournies, que va faire l’administrateur réseau ?",
    "options": [
      "Une ACL sera placée sur l’interface R1 Gi0/0 et une ACL sera placée sur l’interface R2 Gi0/0.",
      "Seule une ACL numérotée fonctionnera dans cette situation.",
      "Une ACL sera placée sur l’interface R2 Gi0/0 et une ACL sera placée sur l’interface R2 S0/0/0.",
      "Deux ACL (une dans chaque direction) seront placées sur l’interface R2 Gi0/0."
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [
      "assets/image48.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 182,
    "sourceNumber": 161,
    "question": "Quel protocole utilise des nombres de strates plus petits pour indiquer que le serveur est plus proche de la source horaire autorisée que des nombres de strates plus grands ?",
    "options": [
      "TFTP",
      "SYSLOG",
      "NTP",
      "MPLS"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 183,
    "sourceNumber": 163,
    "question": "Mettez en correspondance la méthode HTTP avec l’opération RESTful.",
    "options": [
      "vidéo",
      "voix",
      "données"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image9.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 184,
    "sourceNumber": 167,
    "question": "Quel type de trafic est décrit comme composé de trafic nécessitant une priorité plus élevée s’il est interactif ?",
    "options": [
      "voix",
      "données",
      "vidéo"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 185,
    "sourceNumber": 168,
    "question": "Quel type de VPN offre une option flexible pour connecter un site central à des sites de succursale ?",
    "options": [
      "VPN MPLS",
      "VPN multipoint dynamique",
      "GRE sur IPsec"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 186,
    "sourceNumber": 176,
    "question": "Un ingénieur réseau a remarqué que certaines entrées de route réseau attendues ne s’affichent pas dans la table de routage. Quelles sont les deux commandes qui fourniront des informations supplémentaires sur l’état des adjacences de routeur, les intervalles de minuterie et l’ID de zone ? (Choisissez deux réponses.)",
    "options": [
      "afficher les protocoles IP",
      "afficher ip ospf voisin",
      "afficher la configuration en cours",
      "afficher l’interface ip ospf",
      "afficher ip route ospf"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "La commande show ip ospf interface affichera les informations de la table de routage qui sont déjà connues. Les commandes show running-configuration et show ip protocols afficheront les aspects de la configuration OSPF sur le routeur mais n’afficheront pas les détails de l’état de contiguïté ni les détails de l’intervalle de temporisation.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "OSPF"
  },
  {
    "id": 187,
    "sourceNumber": 177,
    "question": "Quel type de VPN implique le transfert du trafic sur le backbone via l’utilisation d’étiquettes réparties entre les routeurs principaux ?",
    "options": [
      "VPN MPLS",
      "GRE sur IPsec",
      "Interface de tunnel virtuel IPsec",
      "VPN multipoint dynamique"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 188,
    "sourceNumber": 179,
    "question": "Une entreprise a passé un contrat avec une société de sécurité réseau pour l’aider à identifier les vulnérabilités du réseau de l’entreprise. L’entreprise envoie une équipe pour effectuer des tests d’intrusion sur le réseau de l’entreprise. Pourquoi l’équipe utiliserait-elle des systèmes d’exploitation de piratage ?",
    "options": [
      "pour détecter toute preuve de piratage ou de logiciel malveillant dans un ordinateur ou un réseau",
      "pour obtenir des systèmes d’exploitation spécialement conçus et préchargés avec des outils optimisés pour le piratage",
      "pour encoder les données, à l’aide de schémas algorithmiques, afin d’empêcher tout accès non autorisé aux données chiffrées",
      "pour désosser les fichiers binaires lors de l’écriture d’exploits et de l’analyse de logiciels malveillants"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 189,
    "sourceNumber": 180,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour identifier une interface comme faisant partie du réseau mondial externe ?",
    "options": [
      "ip tape à l’intérieur",
      "liste d’accès 10 permis 172.19.89.0 0.0.0.255",
      "ip nat à l’intérieur",
      "ip nat extérieur"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 190,
    "sourceNumber": 181,
    "question": "Pour éviter d’acheter du nouveau matériel, une entreprise souhaite tirer parti des ressources système inactives et consolider le nombre de serveurs tout en autorisant plusieurs systèmes d’exploitation sur une seule plate-forme matérielle. Quel service ou technologie répondrait à cette exigence ?",
    "options": [
      "centre de données",
      "services cloud",
      "virtualisation",
      "serveurs dédiés",
      "_Expliquez : La virtualisation des serveurs tire parti des ressources inactives et consolide le nombre de serveurs requis. Cela permet également à plusieurs systèmes d’exploitation d’exister sur une seule plate-forme matérielle."
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 191,
    "sourceNumber": 182,
    "question": "Quel type de VPN achemine les paquets via des interfaces de tunnel virtuel pour le chiffrement et le transfert ?",
    "options": [
      "VPN MPLS",
      "Interface de tunnel virtuel IPsec",
      "VPN multipoint dynamique",
      "GRE sur IPsec"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 192,
    "sourceNumber": 184,
    "question": "Quel type de trafic est décrit comme utilisant TCP ou UDP en fonction du besoin de récupération d’erreur ?",
    "options": [
      "vidéo",
      "voix",
      "données"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 193,
    "sourceNumber": 188,
    "question": "Une ACL est appliquée en entrée sur l’interface du routeur. L’ACL se compose d’une seule entrée :\n_Si un paquet avec une adresse source de 172.18.20.40, une adresse de destination de 10.33.19.2 et un protocole de 21 est reçu sur l’interface, le paquet est-il autorisé ou refusé ?",
    "options": [
      "autorisé",
      "refusé"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 194,
    "sourceNumber": 189,
    "question": "Quel type de trafic est décrit comme consistant en un trafic dont la priorité est inférieure s’il n’est pas stratégique ?",
    "options": [
      "vidéo",
      "données",
      "voix"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 195,
    "sourceNumber": 192,
    "question": "Quel protocole permet au gestionnaire d’interroger les agents pour accéder aux informations de la MIB de l’agent ?",
    "options": [
      "CBWFQ",
      "SYSLOG",
      "TFTP",
      "SNMP"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  },
  {
    "id": 196,
    "sourceNumber": 195,
    "question": "Quel terme décrit l’ajout d’une valeur à l’en-tête du paquet, aussi proche que possible de la source, afin que le paquet corresponde à une politique définie ?",
    "options": [
      "police",
      "marquage routier",
      "détection précoce aléatoire pondérée (WRED)",
      "mise en forme du trafic",
      "chute de la queue"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 197,
    "sourceNumber": 196,
    "question": "Quels sont les trois facteurs liés au trafic qui influenceraient la sélection d’un type de lien WAN particulier ? (Choisissez trois réponses.)",
    "options": [
      "coût du lien",
      "quantité de trafic",
      "distance entre les sites",
      "fiabilité",
      "besoins de sécurité",
      "type de trafic"
    ],
    "correct": [
      1,
      4,
      5
    ],
    "explanation": "Les facteurs liés au trafic qui influencent la sélection d’un type de lien WAN particulier incluent le type de trafic, la quantité de trafic, les exigences de qualité et les exigences de sécurité. Les exigences de qualité incluent la garantie que le trafic qui ne peut pas tolérer les retards bénéficie d’un traitement prioritaire, ainsi que le trafic transactionnel commercial important.",
    "images": [],
    "type": "multi",
    "expectedChoices": 3,
    "theme": "WAN / VPN"
  },
  {
    "id": 198,
    "sourceNumber": 197,
    "question": "Quelle commande serait utilisée dans le cadre de la configuration de NAT ou PAT pour lier les adresses locales internes au pool d’adresses disponibles pour la traduction PAT ?",
    "options": [
      "ip nat inside source list ACCTNG pool POOL-STAT",
      "délai de traduction ip nat 36000",
      "ip nat à l’intérieur de la liste source 14 pool POOL-STAT surcharge",
      "ip nat à l’intérieur de la source statique 172.19.89.13 198.133.219.65"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "NAT"
  },
  {
    "id": 199,
    "sourceNumber": 198,
    "question": "Quel protocole est un protocole de découverte de couche 2 indépendant du fournisseur qui doit être configuré séparément pour transmettre et recevoir des paquets d’informations ?",
    "options": [
      "SNMP",
      "MPLS",
      "LLDP",
      "NTP"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "WAN / VPN"
  },
  {
    "id": 200,
    "sourceNumber": 199,
    "question": "Une ACL est appliquée en entrée sur une interface de routeur. L’ACL se compose d’une seule entrée :",
    "options": [
      "autorisé",
      "refusé"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 201,
    "sourceNumber": 200,
    "question": "Reportez-vous à l’illustration. La politique de l’entreprise exige que l’accès au réseau de serveurs soit limité aux seuls employés internes. Quel est le meilleur type et emplacement ACL à utiliser dans cette situation ?",
    "options": [
      "LCA étendue sortante sur R2 S0/0/1",
      "ACL standard sortant sur R2 S0/0/0",
      "ACL standard entrant sur l’interface WAN R2 se connectant à Internet",
      "LCA étendue entrante sur R2 S0/0/0"
    ],
    "correct": [
      0
    ],
    "explanation": "",
    "images": [
      "assets/image35.jpeg"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 202,
    "sourceNumber": 201,
    "question": "Un technicien travaille sur un commutateur de couche 2 et remarque qu’un message %CDP-4-DUPLEX_MISMATCH continue d’apparaître pour le port G0/5. Quelle commande le technicien doit-il émettre sur le commutateur pour lancer le processus de dépannage ?",
    "options": [
      "afficher les voisins cdp",
      "show ip interface brief",
      "afficher l’interface g0/5",
      "afficher le cdp"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 203,
    "sourceNumber": 202,
    "question": "Quelle ressource virtuelle serait installée sur un serveur réseau pour fournir un accès direct aux ressources matérielles ?",
    "options": [
      "VMware Fusion",
      "une console de gestion",
      "un VLAN dédié",
      "un hyperviseur de type 1"
    ],
    "correct": [
      3
    ],
    "explanation": "Hyperviseurs de type 1, l’hyperviseur est installé directement sur le serveur ou le matériel réseau. Ensuite, des instances d’un système d’exploitation sont installées sur l’hyperviseur, comme illustré dans la figure. Les hyperviseurs de type 1 ont un accès direct aux ressources matérielles. Par conséquent, elles sont plus efficaces que les architectures hébergées. Les hyperviseurs de type 1 améliorent l’évolutivité, les performances et la robustesse.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 204,
    "sourceNumber": 203,
    "question": "Reportez-vous à l’illustration. Un administrateur réseau a configuré une ACL standard pour autoriser uniquement les deux réseaux LAN connectés à R1 à accéder au réseau qui se connecte à l’interface R2 G0/1. Lorsque vous suivez les bonnes pratiques, à quel endroit l’ACL standard doit-elle être appliquée ?",
    "options": [
      "R2 G0/1 entrant",
      "R2 S0/0/1 sortant",
      "R1 S0/0/0 sortant",
      "R2 G0/1 sortant",
      "R2 G0/0 sortant"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [
      "assets/image34.png"
    ],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ACL"
  },
  {
    "id": 205,
    "sourceNumber": 204,
    "question": "Quelle base de données OSPF est identique sur tous les routeurs convergés au sein de la même zone OSPF ?",
    "options": [
      "voisin",
      "transfert",
      "état du lien",
      "adjacence"
    ],
    "correct": [
      2
    ],
    "explanation": "Quelle que soit la zone OSPF dans laquelle un routeur réside, la base de données de contiguïté, la table de routage et la base de données de transfert sont uniques pour chaque routeur. La base de données d’état des liens répertorie les informations sur tous les autres routeurs d’une zone et est identique sur tous les routeurs OSPF participant à cette zone.",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 206,
    "sourceNumber": 205,
    "question": "Quelles sont les deux fonctionnalités à prendre en compte lors de la création d’une ACL nommée ? (Choisissez deux réponses.)",
    "options": [
      "Utilisez des caractères alphanumériques si nécessaire.",
      "Utilisez des caractères spéciaux, tels que ! ou * pour montrer l’importance de l’ACL.",
      "Modifier l’ACL à l’aide d’un éditeur de texte.",
      "Soyez descriptif lors de la création du nom ACL.",
      "Utilisez un espace pour faciliter la lecture afin de séparer le nom de la description"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Ce qui suit résume les règles à suivre pour les ACL nommées :\nAttribuez un nom pour identifier l’objectif de l’ACL.\nLes noms peuvent contenir des caractères alphanumériques.\nLes noms ne peuvent pas contenir d’espaces ni de ponctuation.\nC’estsuggéré que le nom soit écrit en MAJUSCULES.\nLes entrées peuvent être ajoutées ou supprimées dans l’ACL.",
    "images": [],
    "type": "multi",
    "expectedChoices": 2,
    "theme": "ACL"
  },
  {
    "id": 207,
    "sourceNumber": 206,
    "question": "Mettez en correspondance la méthode API RESTful à la fonction CRUD.",
    "options": [],
    "correct": [],
    "explanation": "",
    "images": [
      "assets/image24.jpeg"
    ],
    "type": "study",
    "expectedChoices": 1,
    "theme": "Automatisation"
  },
  {
    "id": 208,
    "sourceNumber": 207,
    "question": "Quel type de trafic est décrit comme nécessitant au moins 384 Kbit/s de bande passante ?",
    "options": [
      "voix",
      "données",
      "vidéo"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "ENSA général"
  },
  {
    "id": 209,
    "sourceNumber": 208,
    "question": "Quelle étape du processus de routage à état des liens est décrite par un routeur insérant les meilleurs chemins dans la table de routage ?",
    "options": [
      "déclarer un voisin inaccessible",
      "exécuter l’algorithme SPF",
      "chemins d’équilibrage de charge à coût égal",
      "choisir le meilleur itinéraire"
    ],
    "correct": [
      3
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "OSPF"
  },
  {
    "id": 210,
    "sourceNumber": 209,
    "question": "Toute entreprise a décidé de réduire son empreinte environnementale en réduisant les coûts énergétiques, en déménageant dans une installation plus petite et en favorisant le télétravail. Quel service ou technologie répondrait à cette exigence ?",
    "options": [
      "centre de données",
      "virtualisation",
      "services cloud",
      "serveurs dédiés"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Virtualisation / Cloud"
  },
  {
    "id": 211,
    "sourceNumber": 210,
    "question": "Quelle technique QoS lisse le débit de sortie des paquets ?",
    "options": [
      "police",
      "mise en forme",
      "détection précoce aléatoire pondérée",
      "Services intégrés (IntServ)",
      "marquage"
    ],
    "correct": [
      1
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "QoS"
  },
  {
    "id": 212,
    "sourceNumber": 212,
    "question": "Un technicien réseau configure SNMPv3 et a défini un niveau de sécurité SNMPv3 authPriv. Quelle est la fonctionnalité d’utilisation de ce niveau ?",
    "options": [
      "authentifie un paquet en utilisant uniquement l’algorithme SHA",
      "authentifie un paquet par une correspondance de chaîne du nom d’utilisateur ou de la chaîne de communauté",
      "authentifie un paquet en utilisant soit la méthode HMAC avec MD5, soit la méthode SHA",
      "authentifie un paquet en utilisant les algorithmes HMAC MD5 ou HMAC SHA et un nom d’utilisateur"
    ],
    "correct": [
      2
    ],
    "explanation": "",
    "images": [],
    "type": "single",
    "expectedChoices": 1,
    "theme": "Sécurité"
  }
];
