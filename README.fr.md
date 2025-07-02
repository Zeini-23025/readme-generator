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
    git clone https://github.com/OpenRim/readme-generator.git
    cd readme-generator
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

## Comment Contribuer

Les contributions sont ce qui rend la communauté open source un endroit si incroyable pour apprendre, inspirer et créer. Toutes les contributions que vous faites sont **grandement appréciées**.

Ce projet est développé avec React et TypeScript. Nous suivons les pratiques de codage standard et utilisons ESLint pour le linting. Veuillez vous assurer que vos contributions respectent ces normes.

### Créer une Pull Request

1.  **Forker le Projet :** Cliquez sur le bouton 'Fork' en haut à droite de la page principale du dépôt. Cela crée une copie du projet dans votre propre compte GitHub.

2.  **Cloner Votre Fork :**
    ```bash
    git clone https://github.com/VOTRE_NOM_UTILISATEUR/readme-generator.git
    cd readme-generator
    ```

3.  **Créer une Nouvelle Branche :** Créez un nom de branche descriptif pour votre nouvelle fonctionnalité ou correction.
    *   Pour une nouvelle fonctionnalité :
        ```bash
        git checkout -b feature/FonctionnaliteIncroyable
        ```
    *   Pour une correction de bug :
        ```bash
        git checkout -b fix/QuelqueBug
        ```

4.  **Apporter Vos Modifications :** Implémentez votre fonctionnalité ou corrigez le bug.

5.  **Commiter Vos Modifications :** Utilisez un message de commit conventionnel pour décrire clairement vos changements.
    *   Pour une nouvelle fonctionnalité :
        ```bash
        git commit -m 'feat: Ajout de FonctionnaliteIncroyable'
        ```
    *   Pour une correction de bug :
        ```bash
        git commit -m 'fix: Correction de QuelqueBug'
        ```

6.  **Pousser vers Votre Branche :**
    ```bash
    git push origin feature/FonctionnaliteIncroyable
    ```

7.  **Ouvrir une Pull Request :** Rendez-vous sur le dépôt original sur GitHub et cliquez sur le bouton 'New pull request'. Remplissez le modèle de PR avec une description claire de vos modifications.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

- **GitHub:** [zeini-23025](https://github.com/zeini-23025)
- **Email:** zeiny.cheikh.dev@gmail.com

## ⭐ Montrez votre soutien

Si vous trouvez ce projet utile, pensez à lui donner un ⭐ pour montrer votre soutien !
