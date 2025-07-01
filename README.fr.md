# Générateur de README GitHub

Ceci est une application web qui permet aux utilisateurs de générer un fichier `README.md` stylisé pour leur profil GitHub. Elle fournit un formulaire convivial pour saisir des informations personnelles, sélectionner un style de modèle, choisir des compétences et des technologies, et intégrer automatiquement les statistiques GitHub.

## Fonctionnalités

*   **Informations personnelles :** Saisissez votre nom complet, votre nom d'utilisateur GitHub, un nom de section personnalisé, votre biographie, votre e-mail, votre pseudo Twitter/X et l'URL de votre portfolio/site web.
*   **Sélection du style de template :** Choisissez parmi 5 styles de README prédéfinis : Professionnel, Amusant, Blague, Mini et Créatif.
*   **Compétences et technologies :** Sélectionnez vos langages de programmation, vos compétences frontend, backend et bases de données, ainsi que vos outils et DevOps à partir de listes catégorisées.
*   **Intégration des statistiques GitHub :** Affichez automatiquement les statistiques de votre profil GitHub, les langues les plus utilisées et les statistiques de série (streak stats) à l'aide de l'API Vercel.
*   **Prévisualisation en temps réel :** Visualisez un aperçu en direct de votre `README.md` généré au fur et à mesure que vous remplissez le formulaire.
*   **Copier et télécharger :** Copiez facilement le contenu Markdown généré ou téléchargez-le en tant que fichier `README.md`.

## Technologies utilisées

*   **React :** Bibliothèque JavaScript frontend pour la construction d'interfaces utilisateur.
*   **Bootstrap :** Framework CSS pour le développement web frontend réactif et mobile-first.
*   **React-Hook-Form :** Pour une gestion de formulaire efficace et flexible.
*   **React-Markdown :** Pour le rendu du contenu Markdown dans les composants React.

## Comment exécuter localement

Pour faire fonctionner ce projet sur votre machine locale, suivez ces étapes :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/your-username/read-jen.git
    cd read-jen
    ```
2.  **Installer les dépendances :**
    ```bash
    npm install
    ```
3.  **Démarrer le serveur de développement :**
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse `http://localhost:5173/` (ou un autre port si le 5173 est déjà utilisé).

## Comment contribuer

Nous accueillons les contributions à ce projet ! Si vous souhaitez contribuer, veuillez suivre ces directives :

1.  **Forker le dépôt.**
2.  **Créer une nouvelle branche** pour votre fonctionnalité ou correction de bug :
    ```bash
    git checkout -b feature/votre-nom-de-fonctionnalite
    ```
    ou
    ```bash
    git checkout -b bugfix/description-du-probleme
    ```
3.  **Apporter vos modifications.**
4.  **Commiter vos modifications** avec un message clair et concis :
    ```bash
    git commit -m "feat: Ajouter une nouvelle fonctionnalité"
    ```
    ou
    ```bash
    git commit -m "fix: Résoudre le bug dans X"
    ```
5.  **Pousser votre branche** vers votre dépôt forké :
    ```bash
    git push origin feature/votre-nom-de-fonctionnalite
    ```
6.  **Ouvrir une Pull Request** vers la branche `main` du dépôt original.

Veuillez vous assurer que votre code respecte le style et les conventions existantes.
