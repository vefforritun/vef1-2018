# Sýnidæmi

Verkefni frá því 2017.

Útbúa forrit sem bætir við texta á síðu. Gefið er HTML og stílar sem ekki skal breyta.

Þegar fyllt er inn í form og það er löglegt skal bæta texta við síðu innan `div.texts`. Dæmi um útgáfur af textum er í `index.html` en er kommentað út.

Form er löglegt ef:

* Fyrirsögn er ekki tóm og ekki lengri en 100 stafir
* Texti er ekki tómur og ekki lengri en 1000 stafir

Ef form er ekki löglegt skal birta villuskilaboð um það í `<div class="error"></div>`

Ef hakað er við að texti eigi að vera í hástöfum er `.uppercase` sett á fyrirsögn.

Ef hakað er við að texti eigi að vera með viðsnúnum litum er `.inverted` sett á `.text`
