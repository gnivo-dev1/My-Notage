# 📝 My-Notage

Une application de liste de tâches simple et rapide, faite en HTML, CSS et JavaScript pur (sans framework). Vos tâches sont sauvegardées dans votre navigateur : elles sont toujours là quand vous revenez.

## ✨ Fonctionnalités

- Ajouter une tâche (bouton **Ajouter** ou touche **Entrée**)
- Marquer une tâche comme terminée
- Supprimer une tâche
- Filtrer : **Toutes**, **Incomplètes**, **Terminées**
- Compteur de tâches restantes
- Sauvegarde automatique avec `localStorage`
- Design responsive (ordinateur et mobile)

## 🛠️ Technologies

- HTML5
- CSS3 (Flexbox, animations, media queries)
- JavaScript ES6 (manipulation du DOM, `localStorage`)

## 📁 Structure du projet

```
todo-list/
├── index.html        # Structure de la page
├── css/
│   └── style.css     # Styles
├── js/
│   ├── config.js     # Vos informations (nom, lien GitHub) affichées dans le pied de page
│   └── script.js     # Logique de l'application
├── .gitignore
└── README.md
```

## 🚀 Lancer le projet

Aucune installation n'est nécessaire.

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/gnivo-dev1/My-Notage.git
   ```
2. Ouvrez le dossier `My-Notage`.
3. Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

Avec VS Code, l'extension **Live Server** permet aussi de recharger la page automatiquement à chaque modification.

## ⚙️ Personnalisation

Ouvrez `js/config.js` pour modifier le nom et le lien GitHub affichés en bas de la page.

## 📚 Ce que ce projet m'a appris

- Séparer HTML, CSS et JavaScript pour garder un code propre
- Manipuler le DOM avec JavaScript
- Stocker des données côté navigateur avec `localStorage`
- Créer une interface responsive

## 🔮 Idées d'améliorations

- Modifier une tâche existante
- Ajouter des dates d'échéance
- Réorganiser les tâches par glisser-déposer
- Mode sombre

## 👤 Auteur

**N'Dri Romaric Ronël Gnivo** — [@gnivo-dev1](https://github.com/gnivo-dev1)

## 📄 Licence

Projet libre d'utilisation à des fins d'apprentissage.
