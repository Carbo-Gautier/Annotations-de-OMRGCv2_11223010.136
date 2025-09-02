# Annotathon Tara Oceans

Analyse et annotation de séquences métagénomiques marines issues de l'expédition Tara Oceans. L'objectif est d'identifier les ORF, classifier taxonomiquement les séquences (archées, bactéries, protistes, virus) et proposer des annotations fonctionnelles pour détecter de nouvelles espèces et protéines inédites.

## Mes contributions

Dans le cadre de ce projet, j'ai effectué l'analyse approfondie de fragments de séquences en utilisant plusieurs outils de bioinformatique :

- Identification des ORF via **ORF Finder** (SMS) pour détecter les gènes potentiellement codants.  
- Recherche d'homologie avec **BLASTp** contre les bases de données **RefSeq_prot** et **SwissProt** pour proposer des hypothèses fonctionnelles sur les protéines codées, en utilisant une **valeur E seuil** pour filtrer les résultats significatifs.  
- Analyse taxonomique des résultats BLASTp (RefSeq_prot) à l'aide des outils du site Annotathon, permettant de définir des **groupes d'étude** et des **groupes externes** pour des analyses phylogénétiques.  
- Alignement multiple des séquences via **MUSCLE** et construction d’arbres phylogénétiques avec **PhyML**.  
- Répétition des analyses phylogénétiques avec différents groupes d'étude et groupes externes pour affiner l’identification taxonomique et détecter d’éventuels transferts horizontaux de gènes.

Cette démarche a permis d’affiner l’annotation fonctionnelle d'une séquences, d’identifier une protéine nouvelle proches de familles connues, et de contribuer à la compréhension de la biodiversité planctonique marine.

## Licence

**CC BY-NC-ND 4.0** — partage autorisé, usage non commercial, pas de modifications, attribution obligatoire.


# Annotathon Tara Oceans

Analysis and annotation of marine metagenomic sequences from the Tara Oceans expedition.
The goal is to identify ORFs, classify sequences taxonomically (archaea, bacteria, protists, viruses), and propose functional annotations to detect new species and novel proteins.

## My contributions

As part of this project, I performed an in-depth analysis of sequence fragments using various bioinformatics tools:

-Identification of ORFs using ORF Finder (SMS) to detect potentially coding genes.

-Homology search with BLASTp against RefSeq_prot and SwissProt databases, applying an E-value threshold to filter significant hits.

-Taxonomic analysis of BLASTp (RefSeq_prot) results using Annotathon tools, defining study groups and outgroups for phylogenetic analyses.

-Multiple sequence alignment using MUSCLE and phylogenetic tree construction with PhyML.

-Repeated phylogenetic analyses with different study groups and outgroups to refine taxonomic assignment and investigate potential horizontal gene transfer.

This approach helped refine the functional annotation of a sequence, identify a novel protein related to known families, and contribute to the understanding of planktonic marine biodiversity.

## License

CC BY-NC-ND 4.0 — sharing allowed, non-commercial use only, no modifications, attribution required.
