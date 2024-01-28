# Game Design: Samurai Sensei Game

## Overzicht
"Samurai Game* is a game in which you, as the Main Character (MC), suffer from amnesia, and through platformer gameplay, you must retrieve your lost memories.

The way this operates is as follows: by engaging in platforming, you progress through new levels and face new challenges. After overcoming a series of rooms, you can discover something that triggers a flashback, allowing you to regain some of your forgotten skills. This, in turn, leads to new levels being unlocked.

The game is developed with the target audience of 16-26-year-olds in mind. It is a skill tree-based story platforming game where we aim to tell the story in a realistic manner while also creating challenging gameplay."

The current game is being made for pc players, but we are also creating controls for a controllers. As the game is a platformer it should work with a controller just as well if not better then it would with a keyboard

---

## Design Pillars

1. **Accessibility and Approachability**
   - *Description:* Ensure that the game is easy to pick up and accessible to everyone.
   - *Examples:*
     - Keep the surface of the gameplay as simple and intuitive as possible.
     - Gradual introduction of new mechanics, like dashing and wall jumping.
     - Simple UI with as few (intuitive) buttons as possible to get the player into the game quickly.

2. **Engaging and Rewarding Gameplay**
   - *Description:* Create a rewarding experience that encourages players to keep playing.
   - *Examples:*
     - Good movement / character control, so the play feels like they're in control.
     - Feedback for fast room clear speeds / class based room objectives (places that can only be reached by high dash classes for example).
     - Ability to choose their own play style.
     - Unlocking set skills to further their progress and keep the player interested in new upcoming mechanics.

3. **Visual Cohesion**
   - *Description:* Develop a visually appealing and cohesive aesthetic to enhance the gaming experience..
   - *Examples:*
     - Medieval Japan / Edo Period Japan.
     - visual or audio feedback when completing a task or finding a lost memory.
     - Changing effects for unlocking skills and/or stats.

## Core Mechanics

1. **Clear all levels and regain your strength**
   - The main goal of the game is completing the levels so you can regain your memories and, in turn, your strength.
  
2. **Level Progression**
   - The player builds up his/her progression by adding stat points to their build, getting back their memories which in turn grant them skills and moving through the world map with their newly acquired skills and stats.

3. **Completing a level**
   - To complete a level you simply need to move from one side of the screen, to another. In some levels this is easier said then done and in some levels, unless a certain skills is unlocked, this simply cannot be done.

4. **Platform your way through the world to regain your memories**
   - The core of the game is platforming, combined with having a skill tree and stats. The platforming gets increasingly difficult and also changes depending the stats you choose.

The Core Mechanics Diagram:

![Alt text](images/CoreMechanicsDiagram.png)

---

## Formal Elements

### 1. Game Mechanics
- **Rules:**
  - Elemental Outbreak is a game within the match-3 genre. It implements an intuitive mechanism where players can swap tiles vertically or horizontally to create matches. Longer matches activate 'tile-specials,' tied to the four elements (fire, water, earth, air). These specials manifest as natural disasters and assist in removing layers, a fundamental goal linked to player progression.

- **Objectives:**
  - The primary goal of Elemental Outbreak is to progress on the world map. Each world has 5 levels that must be defeated. Players must make strategic moves to create large combos and use special tiles, thus removing the required number of layers.

- **Feedback:**
  - The game employs visual and auditory feedback to enhance the player experience. Successful combos and the use of specials are accompanied by clear visual effects. Additionally, enjoyable sound effects contribute to the overall immersive experience. This feedback system aligns with the game's design principles and keeps the player engaged.


### 2. Graphics
- **Visual Style:**
  - Elemental Outbreak features a distinctive visual style determined through interviews with potential end-users. The style is associated with 'antiquity' and natural disasters, aligning with the overarching design principle of visual coherence.

- **Character Design:**
  - The game is not centered around characters and, in principle, does not have character design. However, the tiles can be seen as characters in themselves, each with unique properties contributing to the overall vision. The design allows players to easily recognize and understand the tiles, maintaining coherence within the visual style.

- **Environment Design:**
  - The world map is divided into 3 different worlds, each with a unique setting:
    - The Forest
    - Snowy Peaks
    - The Forgotten Castle
  This choice aims to give the game a unique feel and retain the player's attention.


### 3. Sound
- **Music:**
  - Elemental Outbreak's soundtrack provides a calming experience, utilizing ambient music instead of traditional game music. Each world has its own soundtrack, adding more personality to the game. The calming experience is a key point derived from user interviews and is central to the game's accessibility.

- **Sound Effects:**
  - Sound effects play a significant role in Elemental Outbreak, matching the unique element tiles. High-quality sound effects enhance the player experience.


### 4. Story
- **Storyline:**
  - The story is not central to Elemental Outbreak. Players progress through worlds and levels without a strong narrative focus. This decision is based on user interviews, indicating a preference for an easy-to-pick-up mobile game. It aligns with the design principles of accessibility and approachability.

- **Characters:**
  - Element tiles serve as the characters in Elemental Outbreak. Each tile type has its role in activating disasters. The minimalist approach to characters aligns with the design principles, emphasizing simple and accessible gameplay over complex characters.


### 5. User Interface (UI)
- **Menus and HUD:**
  - The UI is designed with accessibility in mind, keeping it simple for easy player adoption. Minimal HUD elements ensure a smooth and seamless experience for the player.

- **Controls:**
  - Controls are optimized for mobile use, allowing players to easily swap tiles and utilize UI/HUD elements. Elements are appropriately sized, ensuring clarity for the player to execute inputs effortlessly.


### 6. Gameplay
- **Player Interaction:**
  - Player interaction revolves around swapping tiles to create matches. Players must think strategically to create longer rows for activating tile specials.

- **Balance:**
  - Game balance is reflected in level design. Initial screens of levels are predetermined, and falling tiles after layer removal are randomly sorted. To reduce the RNG impact, the game includes an extra turn feature, allowing players a double move when stuck.


### 7. Technology
- **Platform:**
  - Elemental Outbreak is exclusively designed as a mobile game, aligning with the preferences of the 16-26 age demographic. This platform choice also supports the design principles of an accessible game experience.

- **Performance:**
  - With good code optimization and considering the power of modern phones, this game should run smoothly on most systems.


### 8. Level Design
- **Visual:**
  - Level design is consistent, with the initial composition of tiles predetermined. Random tiles fall on top, and levels feature a pleasing background design. Tiles themselves are slightly transparent for a visually appealing effect.
  

### 9. Social Elements
- **Multiplayer Features:**
  - Elemental Outbreak includes a leaderboard for each level, showcasing players who completed a level in the fewest moves. This introduces a competitive element, encouraging players to aim for the fewest moves in each level.

---

## Conclusie
