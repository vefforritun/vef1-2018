# Atriði til grundvallar lokaprófi

## Inngangur

* Hvað er vefurinn
* Hvað er vefsíða
* Hvað eru framendi og bakendi
* Hvað er vefþjónn
* Hvað er vafri
* Hvað er vefforrit
* Hvað er CLI
  - Munur á CLI og grafísku viðmóti
* Hvað er textaritill
* Hvað er stafasett
* Hvað er utf-8
* Hvað er FTP

## HTML

* Hvað er HyperText
* Hvað eru markup language
  - Hver er munurinn á þeim
* Hvað er Markdown
* Hvað er HTML
* Hvað er W3C
  - Hvað staðlar það
* Hvað er DocType og afhverju þurfum við það í dag
* Hvað er XHTML
  - Hvernig er það öðruvísi en HTML
  - Afhverju gekk XHTML ekki upp
* Hvað er HTML5
* Hvað eru elements í HTML
  - Hvernig eru þau uppbyggð með tags og attributes
* Hvernig notum við `<html>`, `<head>` og `<body>`
  - Hvað skilgreinum við fyrir „minnsta HTML skjalið“
* HTML element
  - Metadata – lýsigögn
  - Sectioning – kaflar og svæði
  - Heading – fyrirsagnir
  - Phrasing – orðalag
  - Embedded – innfellt
  - Interactive – gagnvirkt
* Hvaða element skilgreina lista í HTML
* Hvernig skilgreinum við töflur í HTML
* Hvernig skilgreinum við form í HTML
  - Hvaða element notum við í formum
* Hvernig getum við vísað í efni
  - Afstæðar og nákvæmar slóðir
* Hvað þurfum við að hafa í huga til að skrifa snyrtilegt HTML
* Hvað er linting
* Hvað er merkingarfræði
  - Af hverju merkingarfræði
  - Hvað er sérstakt við `<div>` & `<span>`
* Aðgengismál
  - Hvað er WCAG
  - Hvaða atriði er vert að hafa í huga þegar við vinnum vefi
  - Hvernig getum við notað lyklaborðið m.t.t. aðgengis
  - Hvernig útfærum við form með aðgengi í huga
  - Hvað eru skjálesarar
* SEO
  - Hvað er leitarvélabestun
  - Hvernig ættum við að skilgreina lýsigögn

## CSS

* Hvað er CSS
  - Til hvers er það
  - Hvar er það staðlað
* Hvernig tengjum við HTML og CSS saman
  - Hvað er æskilegt og af hverju
* Hvernig er málfræði CSS
  - Hvað er reglusett
  - Hvað er selector
  - Hvað er skilgreining
* Hvernig virka selectorar
  - Hvernig skrifum við selector
  - Hvaða tegundir eru til af selectorum
  - Hvernig tengjum við saman selectora
* Hvað eru gervi-element og gervi-klasar
* Hvernig er villumeðhöndlun í CSS
* Hvaða gildi getum við skilgreint í CSS og hvernig
  - Strengir
  - URL
  - Litir og gegnsæi
  - Tölur
  - Lengdir
  - Hlutfallslegar einingar
* Hvernig virka letur-hlutfallseiningar
  - Hver er munur á `em` og `rem`
* Hvernig virka skjá-próstentu einingar
* Hvað er sértækni
  - Hvernig tengist hún selectorum
* Hvað er cascade
  - Hvernig er komist að því hvaða skilgreiningar eiga við element
  - Hvernig er þeim raðað
  - Hvernig hagar `!important` sér
  - Af hverju er ekki sniðugt að nota id selectora
* Hvernig eru gildi reiknuð
  - Hvernig haga upphafsgildi sér
* Hvað er box modelið
  - `margin`
  - `border`
  - `padding`
  - `box-sizing`
  - Stærð
* Hvað er visual formatting model
  - `block` vs `inline`
  - Eðlilegt flæði
  - Staðsetning með `position`
  - Float og clear
  - Þriðja víddin
  - Hvað gerir `overflow`
  - Hvað er containing block
* Hvað er progressive enhancement
* Hvernig vinnum við með letur í CSS
  - Hvernig breytum við um leturgerð
* Hvernig breytum við bakgrunni og litum í CSS
* Hvað er `object-fit`
* Hvað er flexbox
  - Hvernig virka foreldri og börn m.t.t. flexbox
  - Hvernig virka ásar í flexbox
  - Hvernig er hægt að breyta því hvernig flex item raðast á ásum (ekki þarf að leggja alla möguleika á minnið)
  - Hvernig getum við breytt stærðum á flex item
* Hvað er BEM
* Skalanleg vefhönnun
  - Hvað er skalanleg vefhönnun og hvað leysir hún
  - Hvað er mobile first
  - Á hverju byggir skalanleg vefhönnun
  - Hvað er sveigjanleg grind
  - Hvernig getum við reiknað gildi í skalanlegri vefhönnun
  - Hvernig vinnum við með myndir og miðla
  - Hvað eru media queries og hvernig virka þau
  - Hvaða meta skilgreiningu þurfum við að nota
* Hvað er grind og hvernig vinnum við með hana
* Hvað er graceful degradation og hvernig tengist það progressive enhancement
* Hvernig vinnum við með kvikun í CSS
  - Hvað er umskipti (transition)
  - Hvernig stillum við hröðun
  - Hvernig notum við animation
  - Hvaða eigindi ættum við aðeins að kvika
  - Hvað er merkilegt við 60 fps (ramma á sek)

## JavaScript

* Hvað þýðir það að JavaScript sé túlkað
  - Munur á þýddu forritunarmáli
* Hvernig virka týpur
  - Gildi og týpur
* `number`
  - Hvernig skilgreinum við tölur
  - Hvaða munur er á heiltölum og rauntölum
  - Hvaða virkjar eru í boði
  - Hvað er `NaN`
* `string`
  - Hvernig skilgreinum við strengi
* `boolean`
  - Hvernig skilgreinum við bool gildi
* Hvað er gildið `undefined`
* Hvað er gildið `null`
* Hvað eru veikar týpur
* Hvað eru öruggar týpur
* Hver er munurinn á `==` og `===`
* Hvað er týpu þvingun, type coercion
* Hvað eru truthy og falsy gildi
* Hvernig virkar neitunarvirkjinn
* Hvað eru segðir (expressions) og skipanir (statements)
* Hvernig virkar semíkomma í JavaScript
  - Hvað er automatic semicolon insertion
* Hvernig virka breytur og hvernig eru þær _dýnamískar_
* Hvernig virkar umhvefið í JavaScript
  - Hvernig er það í vafra
* Hvernig virkar `Date` hluturinn
* Hvernig virkar `Math` hluturinn
* Hvaða flæðistýringar eru í JavaScript
  - `if`
  - `switch`
* Hvaða lykkjur eru í JavaScript
  - `for`
  - `while` og `do while`
* Föll
  - Hvernig skilgreinum við föll
  - Hvernig haga skilagildi sér
  - Hvað eru nafnlaus föll
  - Hvað eru _arrow functions_
  - Hvernig virka færibreytur, arguments
  - Hvað eru variadic föll
  - Hvað eru innriföll
  - Hvað eru lokanir
* Scope
  - Hvernig virkar scope í föllum
  - Hvernig virkar global scope
* Hvernig skilgreinum við breytur
  - Hver er munurinn á `let`, `const` og `var`
* Hvernig vinnum við með `array` í JavaScript
  - _Bracket notations_ vs _dot notation_
* Hvernig vinnum við með `object` í JavaScript
  - Hvað eru eigindi
* Hvað er _rest parameter_
* Hvað er _spread operator_
* Villumeðhöndlun
  - Hvernig virkar `try catch`
  - Hvernig virkar `throw`
* Hvernig virka reglulegar segðir, regular expressions í JavaScript
* Einingar
  - Hvað eru einingar
  - Hvernig vinnum við með einingar
  - Hvað er API
  - Hverjir eru kostir einingar
  - Hverjir eru ókostir eininga
* Hvað eru Immediately-invoked function expression, „iffy“
* Ósamstill forritun (async programming)
  - Hvað er ósamstill forritun (async programming)
  - Hvernig virka `setTimout` og `setInterval`
  - Hvað eru promises
  - Hvernig vinnum við með promises með `then` og `catch`
* Hvernig tengjum við HTML & JavaScript
* DOM
  - Hvað er DOM
  - Hver staðlar DOM
  - Hvernig ferðumst við um DOM
  - Hvernig finnum við element í DOM
    + `querySelector`
    + `querySelectorAll`
  - Hvernig breytum við tré
  - Hvernig búum við til element
* Hvernig er æskilegast að vinna með útlit (CSS) í JavaScript
* Atburðir
  - Hvað eru atburðir
  - Hver getur valdið atburðum
  - Hvaða upplýsingar getum við fengið um atburði
  - Hvernig getum við átt við atburði
* HTTP
  - Hvað er HTTP
  - Hvernig virkar HTTP með client og server
  - Hvað eru hausar í HTTP
  - Hvað eru HTTP aðferðir, aðallega `GET` og `POST`
  - Hvað eru stöðukóðar í HTTP
    + Hvaða flokkar eru til staðar
  - Hvað er URI
* Hvað er JSON
* Hvað er Ajax
  - Hvað er `XMLHttpRequest`
  - Hvað er `fetch`
  - Hvernig notum við `fetch` með promises
* Hvað er unobtrusive JavaScript
  - Hvernig tengist það progressive enhancement
* Hvað er fallaforritun
  - Hvað eru æðri föll (higher-order functions)
  - Hvað er hreint fall (pure function)
  - Hvernig virkar `forEach`
  - Hvernig virkar `map`
  - Hvernig virkar `reduce`
* Hvernig hagar `this` sér í JavaScript
  - Hvernig virka `apply` og `call`
  - Hvernig virkar `bind`
  - Hvernig virkar `this` með hlutum
* Hlutir
  - Hvernig virka smiðir
  - Hvað er prótótýpan
  - Hvernig virkar prótótýpu keðjan
  - Hvernig virkar `class`

## Git, tæki og tól

* Hvað er version control
  - Hvað er distributed version control
* Hvað er repo
* Hvað er Git
  - Staðbundið
  - Heilleiki
* Hvaða stöður geta skrár haft í Git
* Hvaða svæði hafa verkefni í Git
* Skipanir í Git
  - `status`
  - `commit`
  - `remote`
  - `push`
  - `pull`
* Hvað eru remotes í Git
* Hvað eru branches í Git
* Hvað er GitHub
* Hvað er node.js
* Hvað er npm
  - Hvað er pakkastjóri
  - Hver er munur á almennum tólum og tólum í verkefnum
* Hvað er browser-sync
* Hvað er Sass
  - Hvað leysir það
  - Hvernig virkar það með CSS
* Hvað er node-sass
* Hvað er stylelint
* Hvað er eslint
* Hvað er transpiler
  - Hvað er babel
* Hvað er að pakka kóða
  - Hvað er rollup
