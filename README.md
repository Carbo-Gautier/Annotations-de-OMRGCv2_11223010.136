# Annotathon Tara Oceans

Analyse et annotation de séquences métagénomiques marines issues de l'expédition Tara Oceans. L'objectif est d'identifier les ORF, classifier taxonomiquement les séquences (archées, bactéries, protistes, virus) et proposer des annotations fonctionnelles pour détecter de nouvelles espèces et protéines inédites.

## Mes contributions

Dans le cadre de ce projet, j'ai effectué l'analyse approfondie de fragments de séquences en utilisant plusieurs outils de bioinformatique :

- Identification des ORF via **ORF Finder** (SMS) pour détecter les gènes potentiellement codants.  
- Recherche d'homologie avec **BLASTp** contre les bases de données **RefSeq_prot** et **SwissProt** pour proposer des hypothèses fonctionnelles sur les protéines codées, en utilisant une **valeur E seuil** pour filtrer les résultats significatifs.  
- Analyse taxonomique des résultats BLASTp (RefSeq_prot) à l'aide des outils du site Annotathon, permettant de définir des **groupes d'étude** et des **groupes externes** pour des analyses phylogénétiques.  
- Alignement multiple des séquences via **MUSCLE** et construction d’arbres phylogénétiques avec **PhyML**.  
- Répétition des analyses phylogénétiques avec différents groupes d'étude et groupes externes pour affiner l’identification taxonomique et détecter d’éventuels transferts horizontaux de gènes.

Cette démarche a permis d’affiner l’annotation fonctionnelle des séquences, d’identifier des protéines nouvelles ou proches de familles connues, et de contribuer à la compréhension de la biodiversité planctonique marine.

## Licence

**CC BY-NC-ND 4.0** — partage autorisé, usage non commercial, pas de modifications, attribution obligatoire.
