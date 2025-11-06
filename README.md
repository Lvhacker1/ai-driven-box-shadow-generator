# CSS Box Shadow Generator

En interaktiv webbapp för att visuellt skapa CSS box-shadows med live preview och färdig kod.

## Funktioner

- **Live Preview**: Se dina box-shadows i realtid på en preview-box
- **Fullständiga Controls**: Justera alla box-shadow-parametrar:
  - Horizontal Offset (-50px till 50px)
  - Vertical Offset (-50px till 50px)
  - Blur Radius (0 till 100px)
  - Spread Radius (-50px till 50px)
  - Färg (color picker)
  - Opacity (0 till 1)
  - Inset (inre/yttre shadow)
- **Multiple Shadows**: Lägg till upp till 5 shadow layers för komplexa effekter
- **Färdiga Presets**: 6 förberedda stilar inklusive Material Design och Neumorphism
- **Instant Code**: Kopiera färdig CSS-kod med ett klick
- **Vendor Prefixes**: Visa kod med -webkit och -moz prefixes
- **Responsiv Design**: Fungerar på både desktop och mobil

## Teknisk Stack

- **Next.js 15**: React-ramverk med App Router
- **TypeScript**: För typsäkerhet
- **Tailwind CSS**: För styling
- **React 19**: För UI och state management

## Installation

```bash
# Installera dependencies
npm install

# Kör development server
npm run dev

# Bygga för produktion
npm run build

# Kör produktionsserver
npm start
```

Öppna [http://localhost:3000](http://localhost:3000) för att se applikationen.

## Projektstruktur

```
/app
  page.tsx                    # Landing page
  layout.tsx                  # Root layout
  globals.css                 # Global styles
  /box-shadow
    page.tsx                  # Huvudgenerator-sidan
/components
  /box-shadow
    ShadowPreview.tsx         # Preview box med shadow
    ShadowControls.tsx        # Controls för en shadow
    ShadowList.tsx            # Hanterar multiple shadows
    CodeDisplay.tsx           # Visar CSS-kod med copy-knapp
    Presets.tsx               # Fördefinierade shadow-stilar
/types
  shadow.ts                   # TypeScript interfaces
```

## Användning

1. Gå till `/box-shadow` för att öppna generatorn
2. Använd sliders och controls för att justera shadow-parametrar
3. Se live preview av dina ändringar
4. Klicka "Add Shadow" för att lägga till fler layers
5. Välj mellan färdiga presets för snabba resultat
6. Kopiera den genererade CSS-koden

## Tips för Bra Box Shadows

- Använd multiple shadows för mer realistiskt djup
- Håll blur radius högre än spread för mjukare shadows
- Lägre opacity (0.1-0.3) ser ofta mer professionellt ut
- Positivt vertical offset får element att se upphöjda ut
- Experimentera med inset för pressed/recessed effekter
- Överväg färgade shadows istället för ren svart

## Licens

MIT
