import { z } from 'zod'

export const abilitySchema = z.object({
  name: z.union([
    z.literal('stench'),
    z.literal('drizzle'),
    z.literal('speed-boost'),
    z.literal('battle-armor'),
    z.literal('sturdy'),
    z.literal('damp'),
    z.literal('limber'),
    z.literal('sand-veil'),
    z.literal('static'),
    z.literal('volt-absorb'),
    z.literal('water-absorb'),
    z.literal('oblivious'),
    z.literal('cloud-nine'),
    z.literal('compound-eyes'),
    z.literal('insomnia'),
    z.literal('color-change'),
    z.literal('immunity'),
    z.literal('flash-fire'),
    z.literal('shield-dust'),
    z.literal('own-tempo'),
    z.literal('suction-cups'),
    z.literal('intimidate'),
    z.literal('shadow-tag'),
    z.literal('rough-skin'),
    z.literal('wonder-guard'),
    z.literal('levitate'),
    z.literal('effect-spore'),
    z.literal('synchronize'),
    z.literal('clear-body'),
    z.literal('natural-cure'),
    z.literal('lightning-rod'),
    z.literal('serene-grace'),
    z.literal('swift-swim'),
    z.literal('chlorophyll'),
    z.literal('illuminate'),
    z.literal('trace'),
    z.literal('huge-power'),
    z.literal('poison-point'),
    z.literal('inner-focus'),
    z.literal('magma-armor'),
    z.literal('water-veil'),
    z.literal('magnet-pull'),
    z.literal('soundproof'),
    z.literal('rain-dish'),
    z.literal('sand-stream'),
    z.literal('pressure'),
    z.literal('thick-fat'),
    z.literal('early-bird'),
    z.literal('flame-body'),
    z.literal('run-away'),
    z.literal('keen-eye'),
    z.literal('hyper-cutter'),
    z.literal('pickup'),
    z.literal('truant'),
    z.literal('hustle'),
    z.literal('cute-charm'),
    z.literal('plus'),
    z.literal('minus'),
    z.literal('forecast'),
    z.literal('sticky-hold'),
    z.literal('shed-skin'),
    z.literal('guts'),
    z.literal('marvel-scale'),
    z.literal('liquid-ooze'),
    z.literal('overgrow'),
    z.literal('blaze'),
    z.literal('torrent'),
    z.literal('swarm'),
    z.literal('rock-head'),
    z.literal('drought'),
    z.literal('arena-trap'),
    z.literal('vital-spirit'),
    z.literal('white-smoke'),
    z.literal('pure-power'),
    z.literal('shell-armor'),
    z.literal('air-lock'),
    z.literal('tangled-feet'),
    z.literal('motor-drive'),
    z.literal('rivalry'),
    z.literal('steadfast'),
    z.literal('snow-cloak'),
    z.literal('gluttony'),
    z.literal('anger-point'),
    z.literal('unburden'),
    z.literal('heatproof'),
    z.literal('simple'),
    z.literal('dry-skin'),
    z.literal('download'),
    z.literal('iron-fist'),
    z.literal('poison-heal'),
    z.literal('adaptability'),
    z.literal('skill-link'),
    z.literal('hydration'),
    z.literal('solar-power'),
    z.literal('quick-feet'),
    z.literal('normalize'),
    z.literal('sniper'),
    z.literal('magic-guard'),
    z.literal('no-guard'),
    z.literal('stall'),
    z.literal('technician'),
    z.literal('leaf-guard'),
    z.literal('klutz'),
    z.literal('mold-breaker'),
    z.literal('super-luck'),
    z.literal('aftermath'),
    z.literal('anticipation'),
    z.literal('forewarn'),
    z.literal('unaware'),
    z.literal('tinted-lens'),
    z.literal('filter'),
    z.literal('slow-start'),
    z.literal('scrappy'),
    z.literal('storm-drain'),
    z.literal('ice-body'),
    z.literal('solid-rock'),
    z.literal('snow-warning'),
    z.literal('honey-gather'),
    z.literal('frisk'),
    z.literal('reckless'),
    z.literal('multitype'),
    z.literal('flower-gift'),
    z.literal('bad-dreams'),
    z.literal('pickpocket'),
    z.literal('sheer-force'),
    z.literal('contrary'),
    z.literal('unnerve'),
    z.literal('defiant'),
    z.literal('defeatist'),
    z.literal('cursed-body'),
    z.literal('healer'),
    z.literal('friend-guard'),
    z.literal('weak-armor'),
    z.literal('heavy-metal'),
    z.literal('light-metal'),
    z.literal('multiscale'),
    z.literal('toxic-boost'),
    z.literal('flare-boost'),
    z.literal('harvest'),
    z.literal('telepathy'),
    z.literal('moody'),
    z.literal('overcoat'),
    z.literal('poison-touch'),
    z.literal('regenerator'),
    z.literal('big-pecks'),
    z.literal('sand-rush'),
    z.literal('wonder-skin'),
    z.literal('analytic'),
    z.literal('illusion'),
    z.literal('imposter'),
    z.literal('infiltrator'),
    z.literal('mummy'),
    z.literal('moxie'),
    z.literal('justified'),
    z.literal('rattled'),
    z.literal('magic-bounce'),
    z.literal('sap-sipper'),
    z.literal('prankster'),
    z.literal('sand-force'),
    z.literal('iron-barbs'),
    z.literal('zen-mode'),
    z.literal('victory-star'),
    z.literal('turboblaze'),
    z.literal('teravolt'),
    z.literal('aroma-veil'),
    z.literal('flower-veil'),
    z.literal('cheek-pouch'),
    z.literal('protean'),
    z.literal('fur-coat'),
    z.literal('magician'),
    z.literal('bulletproof'),
    z.literal('competitive'),
    z.literal('strong-jaw'),
    z.literal('refrigerate'),
    z.literal('sweet-veil'),
    z.literal('stance-change'),
    z.literal('gale-wings'),
    z.literal('mega-launcher'),
    z.literal('grass-pelt'),
    z.literal('symbiosis'),
    z.literal('tough-claws'),
    z.literal('pixilate'),
    z.literal('gooey'),
    z.literal('aerilate'),
    z.literal('parental-bond'),
    z.literal('dark-aura'),
    z.literal('fairy-aura'),
    z.literal('aura-break'),
    z.literal('primordial-sea'),
    z.literal('desolate-land'),
    z.literal('delta-stream'),
    z.literal('stamina'),
    z.literal('wimp-out'),
    z.literal('emergency-exit'),
    z.literal('water-compaction'),
    z.literal('merciless'),
    z.literal('shields-down'),
    z.literal('stakeout'),
    z.literal('water-bubble'),
    z.literal('steelworker'),
    z.literal('berserk'),
    z.literal('slush-rush'),
    z.literal('long-reach'),
    z.literal('liquid-voice'),
    z.literal('triage'),
    z.literal('galvanize'),
    z.literal('surge-surfer'),
    z.literal('schooling'),
    z.literal('disguise'),
    z.literal('battle-bond'),
    z.literal('power-construct'),
    z.literal('corrosion'),
    z.literal('comatose'),
    z.literal('queenly-majesty'),
    z.literal('innards-out'),
    z.literal('dancer'),
    z.literal('battery'),
    z.literal('fluffy'),
    z.literal('shadow-shield'),
    z.literal('prism-armor'),
    z.literal('neuroforce'),
    z.literal('intrepid-sword'),
    z.literal('dauntless-shield'),
    z.literal('libero'),
    z.literal('ball-fetch'),
    z.literal('cotton-down'),
    z.literal('propeller-tail'),
    z.literal('mirror-armor'),
    z.literal('gulp-missile'),
    z.literal('stalwart'),
    z.literal('steam-engine'),
    z.literal('punk-rock'),
    z.literal('sand-spit'),
    z.literal('ice-scales'),
    z.literal('ripen'),
    z.literal('ice-face'),
    z.literal('power-spot'),
    z.literal('mimicry'),
    z.literal('screen-cleaner'),
    z.literal('steely-spirit'),
    z.literal('perish-body'),
    z.literal('wandering-spirit'),
    z.literal('gorilla-tactics'),
    z.literal('neutralizing-gas'),
    z.literal('pastel-veil'),
    z.literal('hunger-switch'),
    z.literal('dazzling'),
    z.literal('soul-heart'),
    z.literal('tangling-hair'),
    z.literal('receiver'),
    z.literal('power-of-alchemy'),
    z.literal('beast-boost'),
    z.literal('rks-system'),
    z.literal('electric-surge'),
    z.literal('psychic-surge'),
    z.literal('misty-surge'),
    z.literal('grassy-surge'),
    z.literal('full-metal-body'),
    z.literal('quick-draw'),
    z.literal('unseen-fist'),
    z.literal('curious-medicine'),
    z.literal('transistor'),
    z.literal('dragons-maw'),
    z.literal('chilling-neigh'),
    z.literal('grim-neigh'),
    z.literal('as-one-glastrier'),
    z.literal('as-one-spectrier'),
    z.literal('lingering-aroma'),
    z.literal('seed-sower'),
    z.literal('thermal-exchange'),
    z.literal('anger-shell'),
    z.literal('purifying-salt'),
    z.literal('well-baked-body'),
    z.literal('wind-rider'),
    z.literal('guard-dog'),
    z.literal('rocky-payload'),
    z.literal('wind-power'),
    z.literal('zero-to-hero'),
    z.literal('commander'),
    z.literal('electromorphosis'),
    z.literal('protosynthesis'),
    z.literal('quark-drive'),
    z.literal('good-as-gold'),
    z.literal('vessel-of-ruin'),
    z.literal('sword-of-ruin'),
    z.literal('tablets-of-ruin'),
    z.literal('beads-of-ruin'),
    z.literal('orichalcum-pulse'),
    z.literal('hadron-engine'),
    z.literal('opportunist'),
    z.literal('cud-chew'),
    z.literal('sharpness'),
    z.literal('supreme-overlord'),
    z.literal('costar'),
    z.literal('toxic-debris'),
    z.literal('armor-tail'),
    z.literal('earth-eater'),
    z.literal('mycelium-might'),
    z.literal('minds-eye'),
    z.literal('supersweet-syrup'),
    z.literal('hospitality'),
    z.literal('toxic-chain'),
    z.literal('embody-aspect'),
    z.literal('tera-shift'),
    z.literal('tera-shell'),
    z.literal('teraform-zero'),
    z.literal('poison-puppeteer'),
    z.literal('mountaineer'),
    z.literal('wave-rider'),
    z.literal('skater'),
    z.literal('thrust'),
    z.literal('perception'),
    z.literal('parry'),
    z.literal('instinct'),
    z.literal('dodge'),
    z.literal('jagged-edge'),
    z.literal('frostbite'),
    z.literal('tenacity'),
    z.literal('pride'),
    z.literal('deep-sleep'),
    z.literal('power-nap'),
    z.literal('spirit'),
    z.literal('warm-blanket'),
    z.literal('gulp'),
    z.literal('herbivore'),
    z.literal('sandpit'),
    z.literal('hot-blooded'),
    z.literal('medic'),
    z.literal('life-force'),
    z.literal('lunchbox'),
    z.literal('nurse'),
    z.literal('melee'),
    z.literal('sponge'),
    z.literal('bodyguard'),
    z.literal('hero'),
    z.literal('last-bastion'),
    z.literal('stealth'),
    z.literal('vanguard'),
    z.literal('nomad'),
    z.literal('sequence'),
    z.literal('grass-cloak'),
    z.literal('celebrate'),
    z.literal('lullaby'),
    z.literal('calming'),
    z.literal('daze'),
    z.literal('frighten'),
    z.literal('interference'),
    z.literal('mood-maker'),
    z.literal('confidence'),
    z.literal('fortune'),
    z.literal('bonanza'),
    z.literal('explode'),
    z.literal('omnipotent'),
    z.literal('share'),
    z.literal('black-hole'),
    z.literal('shadow-dash'),
    z.literal('sprint'),
    z.literal('disgust'),
    z.literal('high-rise'),
    z.literal('climber'),
    z.literal('flame-boost'),
    z.literal('aqua-boost'),
    z.literal('run-up'),
    z.literal('conqueror'),
    z.literal('shackle'),
    z.literal('decoy'),
    z.literal('shield'),
  ]),
  hidden: z.boolean(),
})

export type Ability = z.infer<typeof abilitySchema>
