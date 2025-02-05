### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

Generated by [`auto-changelog`](https://github.com/CookPete/auto-changelog).

#### [v5.1.14](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.13...v5.1.14)

- updating primer mapping to split primers above and below the sequence instead of mapping them all to be above [`ccab5ef`](https://github.com/TeselaGen/ve-sequence-utils/commit/ccab5ef75570f3ec506cbce5a9db93a72a0749b7)

#### [v5.1.13](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.12...v5.1.13)

> 20 December 2021

- updating to improve baseCalls handling with chromatogramData editing [`be73ee0`](https://github.com/TeselaGen/ve-sequence-utils/commit/be73ee0ad272b67c5b1cba5699c98c75b5bfa349)
- adding a homepage link to package.json [`f1b706a`](https://github.com/TeselaGen/ve-sequence-utils/commit/f1b706a78192a58c024f07a0a12220f6bb42414d)

#### [v5.1.12](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.11...v5.1.12)

> 11 November 2021

- adding in chromatogramData insert/delete/update handling [`98c8279`](https://github.com/TeselaGen/ve-sequence-utils/commit/98c8279b19c11602fe46873d2bcf4733535de90b)

#### [v5.1.11](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.10...v5.1.11)

> 20 October 2021

- improving coloring of proteinAlphabet hydrophobicity scale [`411576a`](https://github.com/TeselaGen/ve-sequence-utils/commit/411576abb05e0c3a979d96a1693c8696496c3524)

#### [v5.1.10](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.9...v5.1.10)

> 19 October 2021

- fixing tidyUpAnnotation logic and adding a test [`1d37492`](https://github.com/TeselaGen/ve-sequence-utils/commit/1d374929bfcb4d770217ac6a7640b5d7ed599a87)

#### [v5.1.9](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.8...v5.1.9)

> 19 October 2021

- adding doNotProvideIdsForAnnotations flag for tidyUpSequencData; adding alternate colorByFamily colors to amino acids [`edad0ce`](https://github.com/TeselaGen/ve-sequence-utils/commit/edad0ce7a227e9201eb2c339cc8b40ee2a5b20c8)

#### [v5.1.8](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.7...v5.1.8)

> 13 October 2021

- updating npmignore and annotateSingleSeq export pattern [`a32306b`](https://github.com/TeselaGen/ve-sequence-utils/commit/a32306bc3880614381e59a4c0e0e6d47d803b6c7)

#### [v5.1.7](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.6...v5.1.7)

> 13 October 2021

- adding an annotateSingleSeq function [`02316fa`](https://github.com/TeselaGen/ve-sequence-utils/commit/02316faa4eca820ae9d3591ef06beafe9a8206c8)

#### [v5.1.6](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.5...v5.1.6)

> 23 September 2021

- updating deps; removing validate.io-nonnegative-integer-array [`e5e0f6d`](https://github.com/TeselaGen/ve-sequence-utils/commit/e5e0f6d49aa617032c09a7667bfb26572e34121e)

#### [v5.1.5](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.4...v5.1.5)

> 17 September 2021

- update aminoAcidToDegenerateDnaMap.js and add aminoAcidToDegenerateRnaMap.js [`#196`](https://github.com/TeselaGen/ve-sequence-utils/pull/196)
- CLN-32292: update aminoAcidToDegenerateDnaMap.js  [`b5d0b49`](https://github.com/TeselaGen/ve-sequence-utils/commit/b5d0b49ddaf22682eb70fc80989fa9c22ff7ab85)
- update [`31e19e1`](https://github.com/TeselaGen/ve-sequence-utils/commit/31e19e12583f02166dab5da7b5662f1859121491)

#### [v5.1.4](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.3...v5.1.4)

> 16 August 2021

- updating getSequenceDataBetweenRange to properly handle annotations that overlap themselves [`d846f2d`](https://github.com/TeselaGen/ve-sequence-utils/commit/d846f2d85fa04e956c0b93463cd5706a67d2404c)

#### [v5.1.3](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.2...v5.1.3)

> 11 August 2021

- updating mapAnnotationsToRows to handle overlapsSelf flag [`6e34bd6`](https://github.com/TeselaGen/ve-sequence-utils/commit/6e34bd6654e2b0650eed4c2eb8c30a5ee4fdc366)

#### [v5.1.2](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.1.1...v5.1.2)

> 9 August 2021

- updating getSequenceDataBetweenRange to handle range.overlapsSelf flag [`81bafbe`](https://github.com/TeselaGen/ve-sequence-utils/commit/81bafbe6efd58f6919e7ec09039647d678a1c95d)
- Merge pull request #194 from TeselaGen/dependabot/npm_and_yarn/tar-4.4.15 [`0e2af20`](https://github.com/TeselaGen/ve-sequence-utils/commit/0e2af20e9ed723b90668f2bb168e4ff501f6a553)
- [Security] Bump tar from 4.4.8 to 4.4.15 [`9b7e9d0`](https://github.com/TeselaGen/ve-sequence-utils/commit/9b7e9d0457740720126feccf75da1753bdaed25f)

#### [v5.1.1](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.0.2...v5.1.1)

> 29 June 2021

- adding autoAnnotate and convertApELikeRegexToRegex [`8027d0d`](https://github.com/TeselaGen/ve-sequence-utils/commit/8027d0d5002cc83a750cb86ef9676995c2c7c1d9)
- Merge pull request #176 from TeselaGen/dependabot/npm_and_yarn/npm-check-5.9.2 [`40e0e6c`](https://github.com/TeselaGen/ve-sequence-utils/commit/40e0e6c68f3d7e0bd795d12416994ff38df90e13)
- Bump npm-check from 5.9.0 to 5.9.2 [`cb190b2`](https://github.com/TeselaGen/ve-sequence-utils/commit/cb190b24ad39ce1557aee5644aa887b58af92be1)

#### [v5.0.2](https://github.com/TeselaGen/ve-sequence-utils/compare/v5.0.1...v5.0.2)

> 17 March 2021

### [v5.0.1](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.8...v5.0.1)

> 15 March 2021

- [Security] Bump mixin-deep from 1.3.1 to 1.3.2 [`#27`](https://github.com/TeselaGen/ve-sequence-utils/pull/27)
- added ve-range-utils version with flipContainedRange bug fix...added … [`#10`](https://github.com/TeselaGen/ve-sequence-utils/pull/10)
- Aligningshortseqreads [`#9`](https://github.com/TeselaGen/ve-sequence-utils/pull/9)
- Added more feature types [`#8`](https://github.com/TeselaGen/ve-sequence-utils/pull/8)
- Added U to filterAminoAcidSequenceString [`#6`](https://github.com/TeselaGen/ve-sequence-utils/pull/6)
- Add option for to include stop codon [`#1`](https://github.com/TeselaGen/ve-sequence-utils/pull/1)
- fixing issue with location copying in getSequenceDataBetweenRange and adding tests; links https://github.com/TeselaGen/openVectorEditor/issues/634 [`af6d514`](https://github.com/TeselaGen/ve-sequence-utils/commit/af6d514621b05702be3d1ee889bb98c63364122f)
- Merge pull request #154 from TeselaGen/dependabot/npm_and_yarn/elliptic-6.5.4 [`df7f203`](https://github.com/TeselaGen/ve-sequence-utils/commit/df7f203678289ff0b4f6b7e5a3390aeb1caf17e7)
- adding aliasedEnzymesByName and defaultEnzymesByName; removing old enzymeList [`a9fa562`](https://github.com/TeselaGen/ve-sequence-utils/commit/a9fa5620531e4c7d29e64d8151bf55b6cd315f46)

#### [1.0.8](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.7...1.0.8)

> 2 March 2016

- added t as acceptable amino acid char [`03c3dc4`](https://github.com/TeselaGen/ve-sequence-utils/commit/03c3dc44e3642b10c21974e137750d93e9dfdfb8)

#### [1.0.7](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.6...1.0.7)

> 2 March 2016

- updating gitignore, adding test file [`ea7e125`](https://github.com/TeselaGen/ve-sequence-utils/commit/ea7e1253b0e3dc79402a44f75f232b4236492ccb)
- added x as an acceptable AA char [`443bcb2`](https://github.com/TeselaGen/ve-sequence-utils/commit/443bcb2799f92922d5490b0f2aeb76ed0c9077c1)

#### [1.0.6](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.5...1.0.6)

> 1 March 2016

- removing api-checks, adding ids to annotations by default in tidyUpSequenceData [`d87b98a`](https://github.com/TeselaGen/ve-sequence-utils/commit/d87b98ac310356e7636094c18f7d2abeb17111d1)

#### [1.0.5](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.4...1.0.5)

> 10 February 2016

- fixing es6 incompatibilities [`b894843`](https://github.com/TeselaGen/ve-sequence-utils/commit/b89484332fcb1bcd095953193f4c930444cdd9a7)

#### [1.0.4](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.3...1.0.4)

> 10 February 2016

- Release 1.0.4 [`4277ae0`](https://github.com/TeselaGen/ve-sequence-utils/commit/4277ae0270dfdabee56f609435795ba72380d8fe)

#### [1.0.3](https://github.com/TeselaGen/ve-sequence-utils/compare/1.0.2...1.0.3)

> 10 February 2016

- fixing tests, adding gitignore [`96869cc`](https://github.com/TeselaGen/ve-sequence-utils/commit/96869cc2ee3e38d2e1f74ab1fa380e1fb801584a)
- Update package.json [`3c4589b`](https://github.com/TeselaGen/ve-sequence-utils/commit/3c4589b8c0ddbda553874e0c2c8ddcfcd127e685)

#### 1.0.2

> 10 February 2016

- moving to Teselagen's github [`afbc761`](https://github.com/TeselaGen/ve-sequence-utils/commit/afbc761b902944256ecaefe2d6b2eecf36dbac91)
- fixing tests, adding gitignore [`fa359f4`](https://github.com/TeselaGen/ve-sequence-utils/commit/fa359f4c76791c4e41f8ce34f3ea46fad162350a)
