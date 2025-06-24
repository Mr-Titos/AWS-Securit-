# Terraform Project

Ce projet fournit une API Express qui expose des informations stockées dans une base de données MySQL hébergée sur AWS RDS.  
Il est conçu pour être utilisé avec une page web statique qui consomme l’API `/api/info`.

## Fonctionnalités

- **API RESTful** :  
  - `GET /api/info` : Récupère les informations (nom, version, description) depuis la table `info` de la base MySQL RDS.
- **Connexion sécurisée à RDS** :  
  - Utilise le package `mysql2` pour se connecter à une base distante AWS RDS.
- **Configuration par variables d’environnement** :  
  - Les paramètres de connexion (hôte, utilisateur, mot de passe, base) sont configurables via `.env`.
- **Structure modulaire** :  
  - Séparation claire entre routes, contrôleurs et configuration.

---

## Détails de l'instance EC2 Front
- **Instance** : `AT - TP1-1`
- **Accès distant** : `13.62.18.117` ou `ec2-13-62-18-117.eu-north-1.compute.amazonaws.com`
- **Type** : Serveur statique Nginx avec reverse Proxy
- **Fichiers servis** :  
  - `index.html` (consomme `/api/info` sur la machine back)
- **Configuration réseau** :  
  - 2 network interfaces : 
    - **N.I. 1** : Interface publique --> Ouvre tout le trafic pour tout le monde
    - **N.I. 2**: : Interface connecté au sous-réseau privé du back-end et de l'instance RDS  
    ![alt text](image.png)
- **Security Group** : launch-wizard-1  

---

## Détails de l'instance EC2 Back

- **Instance** : `AT - TP1-2`
- **Accès distant** : Seulement depuis l'instance EC2 front (`AT - TP1-1`)
- **Type** : Serveur Node.js (Express) via un service system d
- **API exposée** :  
  - `GET /api/info`
- **Connexion à la base** :  MySQL2 (Node)
- **Configuration réseau** :  
  - 1 network interface : 
    - **N.I. 1** : Interface connecté au sous-réseau privé du back-end et de l'instance RDS
  - **Subnet** : Sous-réseau complètement coupé d'internet : `at-backend-subnet`
- **Security Group** : `AT- Security NI back` 

---

## Détails de l'instance RDS MySQL

- **Instance** : `database-1`
- **Accès distant** : Seulement depuis l'instance EC2 back (`AT - TP1-2`)
- **Type** : Instance RDS MySQL Community (free tier)
- **Connexion à la base** :  `admin:zCcgz8p2cArqPF` OU `appuser:motdepassefort`
- **Configuration réseau** :  
  - **Subnet** : Sous-réseau complètement coupé d'internet : `at-backend-subnet`
- **Security Group** : `rds-ec2-1`, `rds-ec2-2` 

---

## Installation

```sh
npm install
```

## Lancement
2 choix, soit en local soit via l'accès distant lancé sur AWS : 
```sh
npm start
```
Le serveur démarre sur `http://localhost:3000` par défaut.

---

```sh
13.62.18.117
ec2-13-62-18-117.eu-north-1.compute.amazonaws.com
```


## Licence

Ce projet est sous licence MIT.