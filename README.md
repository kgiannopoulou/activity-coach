# 🏃 Activity Coach

A phone app that counts your steps, logs workouts, sleep and weight, tells you **what to eat and drink before and after training**, and includes an **adaptive running coach** that listens to how you feel.

Say *"I want to start running"*: the coach gives you a run/walk plan (e.g. run 1 min, walk 1:30 × 8), guides you through it with voice and vibration cues, then asks how it felt and adjusts the next session to your body.

> Part 2 of **Personal Home Helper**, a set of small apps (food, activity, kitchen, shopping, chores, planner…) that will later connect into one AI life assistant. See also [food-water-tracker](https://github.com/kgiannopoulou/food-water-tracker).

## Features

| | |
|---|---|
| 🏃 **Adaptive running coach** | 11-level couch-to-5K plan (1-min jogs → 30 min non-stop). You approve each session or ask for easier or harder. Guided timer with spoken cues ("Start running!", "Walk now") and vibration; screen stays awake |
| 🧠 **Listens to your body** | After each run: *too easy / just right / hard / too hard / something hurts*. Moves up after 2 good sessions, skips ahead if too easy, repeats if hard, steps back if too hard, and prescribes rest (and suggests seeing a professional) for pain |
| 👟 **Steps** | Uses the phone's pedometer (full-day history on iOS, live counting on Android) or manual entry from your watch; calories from steps |
| 🏋️ **Workout log** | Run, walk, gym, cycle, swim, HIIT, yoga… with calorie estimates from MET values × your weight |
| 🍌 **Workout fuel advice** | Based on your training schedule: meal 2–3 h before, light snack 1–3 h before, small sips of water (not big gulps) just before, and protein + carbs after. Ideas match your diet (vegetarian / vegan) |
| 😴 **Sleep** | Bedtime/wake time → hours and quality, compared with your goal |
| ⚖️ **Weight** | Weekly weigh-ins with change and trend |
| 📈 **Weekly & monthly review** | Workouts, active minutes (vs WHO's 150 min/week), steps, sleep and weight change, with plain-language insights |
| 🔔 **Reminders** | For each training day: a fuel reminder 90 min before and a water/warm-up reminder 15 min before |

All data stays on your device.

## Tech

- [Expo](https://expo.dev) SDK 57 · React Native · TypeScript · Expo Router
- `expo-sensors` (Pedometer), `expo-notifications`, `expo-speech`, `expo-keep-awake`, AsyncStorage
- Jest (`jest-expo`) for the coaching and fitness logic

```
src/
  app/          # screens: Today, Run coach, Log, Progress, Profile
  components/   # small UI kit
  lib/
    coach.ts      # running plan, session segments, adaptation rules
    fitness.ts    # MET calories, sleep, fuel advice, weekly/monthly reviews
    useSteps.ts   # pedometer hook
    reminders.ts  # weekly training reminders
    store.tsx     # app state + persistence
__tests__/      # unit tests
```

## Run it

```bash
npm install
npx expo start        # scan the QR code with Expo Go, or press w for web
npm test
npm run typecheck
```

The step counter and reminders need a real phone. The browser version falls back to manual step entry. On Android, notifications need a [development build](https://docs.expo.dev/develop/development-builds/introduction/) (`npx expo run:android`).

## Disclaimer

This app gives general fitness guidance, not medical advice. Check with a doctor before starting a new exercise programme if you have health conditions, and stop if something hurts.

## Roadmap

- [ ] Apple Health / Health Connect sync (steps, sleep, heart rate)
- [ ] Coach plans for strength training and 10K
- [ ] Share calories burned with the Food & Water Tracker
- [ ] Watch companion for the guided run timer
