#!/usr/bin/env node
/**
 * Generate docs/HANDBOOK/ chapter, concept, and TTP files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HANDBOOK = path.join(ROOT, 'docs', 'HANDBOOK');

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[®™]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function writeDoc(dir, filename, content) {
  const filePath = path.join(dir, filename);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return filePath;
}

function conceptDoc({ title, chapter, chapterSlug, summary, whenToUse, method, actGtm, command, related = [], redteamNote }) {
  const cmd = command ? `\n**Command:** \`/redteam ${command}\`` : '';
  const act = actGtm ? `\n**ACT/GTM:** ${actGtm}` : '';
  const relatedSection =
    related.length > 0
      ? `\n## Related\n\n${related.map((r) => `- [${r.title}](${r.href})`).join('\n')}\n`
      : '';

  return `# ${title}

**Chapter:** [${chapter}](../chapters/${chapterSlug}.md)${act}${cmd}

## Summary

${summary}

## When to use

${whenToUse}

## Method

${method}

## RedTeam modifications

${redteamNote || 'RedTeam supersedes Handbook v9. Update this doc as our practice evolves — we do not commit to verbatim fidelity to the source.'}
${relatedSection}
## Source

Derived from *The Red Team Handbook* v9.0 (TRADOC G-2, UFMCS). See [NOTICE.md](../../../NOTICE.md).
`;
}

function chapterDoc({ num, title, slug: chapterSlug, summary, items, commands, redteamNote }) {
  const itemLinks = items
    .map((i) => `- [${i.title}](${i.href}) — ${i.summary}`)
    .join('\n');
  const cmdSection = commands?.length
    ? `\n## RedTeam commands\n\n${commands.map((c) => `- \`/redteam ${c}\``).join('\n')}\n`
    : '';

  return `# Chapter ${num} — ${title}

${summary}

## Concepts & tools in this chapter

${itemLinks}
${cmdSection}
## RedTeam note

${redteamNote}

## See also

- [Handbook index](../README.md)
- [Full inventory](../../HANDBOOK.md)
`;
}

const chapters = [
  {
    num: 1,
    title: 'Foundational Concepts',
    slug: '01-foundational-concepts',
    summary:
      'Defines Red Teaming, UFMCS, and the four principles that organize every technique in the handbook and this project.',
    redteamNote:
      'We treat the four principles as the organizing frame for all `/redteam` commands. Terminology may diverge from Army usage over time.',
    commands: ['challenge', 'critique', 'review', 'init'],
    concepts: [
      {
        title: 'Red Teaming',
        summary:
          'A structured cognitive approach that challenges plans and decisions to surface hidden risks, unseen options, and flawed assumptions before commitment.',
        whenToUse:
          'When a plan, strategy, policy, or decision is approaching commitment and has not been independently challenged.',
        method:
          '1. Clarify the decision and stakes.\n2. Assign a red team role (loyal opposition).\n3. Select ACT and/or GTM tools matched to time available.\n4. Surface assumptions, alternatives, and failure modes.\n5. Feed findings to the decider without owning the outcome.',
        command: 'challenge',
        related: [
          { title: 'Four Principles of UFMCS', href: '../concepts/four-principles-of-ufmcs.md' },
          { title: 'Decision Support', href: '../concepts/decision-support.md' },
        ],
      },
      {
        title: 'UFMCS',
        summary:
          'University of Foreign Military and Cultural Studies — the Army program that developed and taught Red Teaming methodology.',
        whenToUse:
          'When tracing source lineage, training context, or understanding why techniques combine ACT, culture, and group process.',
        method:
          'Reference for attribution and historical context. RedTeam generalizes UFMCS methods for civilian, product, and organizational decisions.',
        redteamNote:
          'UFMCS is historical source, not brand affiliation. We are not UFMCS and do not issue military certification.',
      },
      {
        title: 'Four Principles of UFMCS',
        summary: 'The pillars every Red Team practice rests on: ACT, Cultural Empathy, GTM, and Self-Awareness.',
        whenToUse: 'When designing any red team session, command flow, or facilitator checklist.',
        method:
          '1. **ACT** — make reasoning explicit.\n2. **Cultural Empathy** — include missing worldviews.\n3. **GTM** — protect dissent and alternatives.\n4. **Self-Awareness** — know your own biases first.',
        related: [
          { title: 'Applied Critical Thinking (ACT)', href: '../concepts/applied-critical-thinking.md' },
          { title: 'Cultural Empathy', href: '../concepts/cultural-empathy.md' },
          { title: 'Groupthink Mitigation (GTM)', href: '../concepts/groupthink-mitigation.md' },
          { title: 'Self-Awareness & Reflection', href: '../concepts/self-awareness-reflection.md' },
        ],
      },
      {
        title: 'Applied Critical Thinking (ACT)',
        slug: 'applied-critical-thinking',
        summary:
          'Deliberately analyze how we perceive, interpret, and reason — make implicit assumptions explicit and test them.',
        whenToUse: 'Whenever reasoning quality matters and autopilot, bias, or time pressure may degrade decisions.',
        method:
          'Slow down, ask why, deconstruct arguments, challenge assumptions, generate alternatives. Scale tool depth to time available.',
        actGtm: 'ACT',
        command: 'challenge',
        chapter: 1,
        alsoChapter: 4,
      },
      {
        title: 'Cultural Empathy',
        summary:
          "Understand how others' cultural frames shape what they see, value, and fear; avoid projecting your own frame.",
        whenToUse:
          'Cross-cultural planning, multi-stakeholder decisions, organizational silos, or when "they just don\'t get it" appears.',
        method:
          'Map actor worldviews, use cultural frameworks as hypotheses not stereotypes, ask empathetic questions before judging intent.',
        actGtm: 'Both',
        related: [{ title: 'Cultural Perception Framework', href: '../ttps/cultural-perception-framework.md' }],
      },
      {
        title: 'Groupthink Mitigation (GTM)',
        slug: 'groupthink-mitigation',
        summary:
          'Design group process so dissent is safe, alternatives are generated, and decisions are stress-tested before approval.',
        whenToUse: 'Homogeneous teams, fast consensus, hierarchical cultures, or high-stakes group decisions.',
        method:
          'Assign contrarian roles, use think-write-share, leader speaks last, record dissent, sequence diverge before converge.',
        actGtm: 'GTM',
        command: 'groupthink',
      },
      {
        title: 'Self-Awareness & Reflection',
        slug: 'self-awareness-reflection',
        summary:
          'Know your own biases, temperament, and communication patterns before trying to challenge others.',
        whenToUse: 'Before facilitating, before devil\'s advocacy, when strong personal attachment to an outcome exists.',
        method: 'Introspection, journaling, Who Am I? exercise, name your assumptions and temperament limits upfront.',
        related: [{ title: 'Who Am I?', href: '../ttps/who-am-i.md' }],
      },
    ],
  },
  {
    num: 2,
    title: 'Self-Awareness & Reflection',
    slug: '02-self-awareness-reflection',
    summary:
      'How red teamers understand themselves — cognition, temperament, emotion, communication — before engaging others.',
    redteamNote:
      'We deprioritize military-student journaling requirements but keep introspection as facilitator and solo-practitioner habit.',
    commands: ['init'],
    concepts: [
      {
        title: 'Self-Authorship',
        summary:
          'Developmental capacity to internally define beliefs, identity, and relationships rather than relying on external validation.',
        whenToUse: 'When facilitators or leaders default to authority-based rather than evidence-based challenge.',
        method:
          'Develop cognitive, intrapersonal, and interpersonal self-authorship: know what you believe, why, and how you relate under stress.',
      },
      {
        title: 'Temperament / Personality Dimensions',
        slug: 'temperament-personality-dimensions',
        summary:
          'Jungian-based typology for understanding how people prefer to perceive and decide — useful for anticipating group friction.',
        whenToUse: 'Team composition, predicting conflict styles, designing who plays contrarian.',
        method:
          'Use typology as hypothesis about friction, not excuse for behavior. Pair opposite preferences in think-write-share rounds.',
        redteamNote: 'Optional in RedTeam. Never use typology to dismiss dissent ("they\'re just a type X").',
      },
      {
        title: 'Emotional Intelligence Framework',
        summary:
          'Self-competencies and social competencies that affect how we receive and deliver challenge.',
        whenToUse: 'When red team sessions turn personal, defensive, or shut down.',
        method:
          'Self: awareness, regulation, motivation. Social: empathy, skills. Facilitator models non-defensive response to challenge.',
      },
      {
        title: 'Interpersonal Communication',
        summary:
          'How messages are sent, received, and distorted — foundation for productive devil\'s advocacy without personal attack.',
        whenToUse: 'Designing session rules, feedback loops, and how findings are delivered to leadership.',
        method:
          'Separate task from relationship conflict. Use "I observe / I infer / I wonder" framing. Confirm understanding before rebutting.',
      },
      {
        title: 'Interpersonal Conflict',
        summary:
          'Patterns of disagreement escalation; separate task conflict (healthy) from relationship conflict (destructive).',
        whenToUse: 'When devil\'s advocacy is received as personal attack or loyalty test.',
        method:
          'Name conflict type explicitly. Reinforce that challenge targets ideas. Use structured tools so opposition is role-based, not identity-based.',
      },
      {
        title: 'Introspection',
        summary: 'Deliberate inward examination — journaling, reflection time, structured exercises.',
        whenToUse: 'Daily practice for facilitators; before high-stakes reviews.',
        method: 'Short structured reflection: what did I assume? what did I avoid saying? what would change my mind?',
        redteamNote: 'Lightweight reflection prompts replace mandatory military journaling.',
      },
      {
        title: 'Who Am I?',
        slug: 'who-am-i',
        summary: 'Introspective exercise: articulate identity, values, and biases before engaging others.',
        whenToUse: 'Before high-stakes reviews; facilitator prep; when strongly attached to an outcome.',
        method: 'Structured prompts on identity, values, biases, and what you might be wrong about.',
        command: 'init',
      },
    ],
  },
  {
    num: 3,
    title: 'Cultural Empathy',
    slug: '03-cultural-empathy',
    summary:
      'Frameworks for understanding how culture shapes perception, planning, and conflict — generalized beyond military operations.',
    redteamNote:
      'Operating Landscape Map and other culture tools are optional lenses for geopolitical analysis; business red teams use org and stakeholder subcultures.',
    commands: ['frame', 'challenge'],
    concepts: [
      {
        title: 'Ethnocentrism',
        summary:
          "Judging other cultures by the standards of one's own — the primary bias cultural empathy counteracts.",
        whenToUse: 'When analysis assumes "normal" is universal; when stakeholders are labeled irrational.',
        method: 'Name the home-frame explicitly. Ask what behavior looks like from inside the other frame.',
      },
      {
        title: 'Operating Landscape Map',
        slug: 'operating-landscape-map',
        summary:
          'Multi-domain map of the operating environment: power, security, economy, society, information, infrastructure, physical context, and time.',
        whenToUse: 'Complex environments with many interacting systems; geopolitical, market, or org-political analysis.',
        method:
          'Map factors in each domain; trace cross-domain interactions; avoid treating domains as isolated checklists.\n\n**Domains:** power & governance · security & risk · economy & resources · society & community · information & narrative · infrastructure & capabilities · physical environment · time & tempo',
        redteamNote:
          'RedTeam generalization of the Handbook v9 multi-domain operating-environment framework. Plain domain names, not military acronyms. Comparable to PESTLE+ for business contexts.',
      },
      {
        title: "Kluckhohn's Six Dimensions",
        slug: 'kluckhohns-six-dimensions',
        summary:
          'Age-old cultural variation axes for comparing cultural defaults (human nature, activity, time, relational, etc.).',
        whenToUse: 'Comparing team or stakeholder cultural defaults without reducing to nationality alone.',
        method: 'Score or discuss each dimension for each actor; look for mismatches driving conflict.',
      },
      {
        title: 'Nisbett on Cognitive Differences',
        summary:
          'How cognitive styles differ in attention, causality, and holism — affects planning and negotiation assumptions.',
        whenToUse: 'Cross-border teams, analytic vs. holistic reasoning clashes.',
        method: 'Ask whether disagreement is data vs. framing. Test if parties seek root cause vs. situational balance.',
      },
      {
        title: 'Hall on Communication Patterns',
        summary:
          'High-context vs. low-context communication; use of space and time — why the same words land differently.',
        whenToUse: 'Miscommunication across regions, generations, or exec vs. engineering culture.',
        method: 'Identify context load of messages. Low-context: explicit. High-context: read situation and relationship.',
      },
      {
        title: "Hofstede's Country Profiles",
        slug: 'hofstedes-country-profiles',
        summary:
          'Power distance, uncertainty avoidance, individualism, masculinity/femininity, long-term orientation indices.',
        whenToUse: 'International rollout, global teams — as starting hypothesis only.',
        method: 'Use indices to generate questions, not stereotypes. Validate with local stakeholders.',
        redteamNote: 'We treat Hofstede as one input; organizational culture often dominates national averages.',
      },
      {
        title: 'Five Operational Cultural Dimensions',
        summary: 'Army operationalization of cultural factors for planning in foreign environments.',
        whenToUse: 'Defense or geopolitical planning contexts.',
        method: 'Apply as structured observation framework in operational design.',
        redteamNote: 'Optional; map to organizational equivalents (power, risk tolerance, time horizon, etc.).',
      },
      {
        title: 'Onion Model',
        summary:
          'Culture manifests in layers: artifacts → espoused values → underlying assumptions.',
        whenToUse: 'Understanding why stated values don\'t match behavior; org culture diagnosis.',
        method: 'Peel from visible artifacts inward. Ask what assumptions would make observed behavior rational.',
        actGtm: 'ACT',
        command: 'frame',
        alsoTtp: true,
      },
      {
        title: 'Functional Systems Approach',
        summary:
          'Analyze how cultural subsystems interact functionally rather than as isolated lists.',
        whenToUse: 'When single-factor explanations fail in complex social systems.',
        method: 'Model feedback between political, economic, social, and information subsystems.',
      },
      {
        title: 'Cultural Perception Framework',
        summary:
          'Structured method to surface how different actors perceive the same situation through their cultural lens.',
        whenToUse: 'Multi-stakeholder conflict where each side has a coherent but incompatible narrative.',
        method: 'For each actor: what do they see, value, fear, and want? Compare perception maps.',
        actGtm: 'ACT',
        command: 'frame',
        alsoTtp: true,
      },
    ],
  },
  {
    num: 4,
    title: 'Applied Critical Thinking',
    slug: '04-applied-critical-thinking',
    summary: 'How to think critically under time pressure — reflexive habits and scalable tools.',
    redteamNote: 'Most `/redteam` commands are ACT-leaning or ACT+GTM.',
    commands: ['challenge', 'assumptions', 'ach', '5-whys', 'frame', 'futures', 'critique', 'review'],
    concepts: [
      {
        title: 'Applied Critical Thinking in practice',
        slug: 'applied-critical-thinking-practice',
        summary: 'Chapter 4 operationalizes ACT under time pressure. See also the principle in Chapter 1.',
        whenToUse: 'Every red team session — match tool depth to minutes available.',
        method: 'Reflexive checks when fast; full TTP sequences when stakes warrant.',
        actGtm: 'ACT',
        command: 'challenge',
        related: [{ title: 'Applied Critical Thinking (ACT) — principle', href: '../concepts/applied-critical-thinking.md' }],
        redteamNote: 'This page covers ACT execution; the foundational principle is documented in Chapter 1.',
      },
      {
        title: 'The Time Factor',
        slug: 'the-time-factor',
        summary:
          'Decisions often lack time for full process — ACT includes reflexive shortcuts and scalable tools matched to available minutes.',
        whenToUse: 'Every session — pick tool depth by minutes available, not ideal process.',
        method:
          '5 min: reflexive checks. 15 min: single tool. 60+ min: sequenced toolkit. Leaders must not skip all reflection because of urgency.',
      },
      {
        title: 'Creating Space and Time',
        summary:
          'Leader responsibility to protect reflection time; without it, groups default to autopilot and assumption-fill.',
        whenToUse: 'Calendar design, meeting culture, pre-decision rituals.',
        method:
          'Block red team time before approval gates. Ban decision in the same meeting that introduces the proposal without prior independent read.',
        command: 'review',
      },
    ],
  },
  {
    num: 5,
    title: 'Groupthink Mitigation & Decision Support',
    slug: '05-groupthink-mitigation',
    summary: 'Group dynamics, groupthink symptoms, and the red team role in decision support.',
    redteamNote: 'GTM tools are first-class — not optional extras for "difficult" teams.',
    commands: ['groupthink', 'devils-advocate', 'ideate', 'converge', 'review'],
    concepts: [
      {
        title: 'Group Dynamics',
        summary: 'How groups form norms, status hierarchies, and cohesion — the substrate groupthink grows on.',
        whenToUse: 'Designing who speaks when, and whether the boss spoke first.',
        method: 'Map status, alliances, and psychological safety. Adjust process to counter hierarchy effects.',
      },
      {
        title: 'Groupthink',
        summary:
          'Collective pressure for conformity that suppresses dissent and produces overconfident, under-examined decisions (Irving Janis).',
        whenToUse: 'Fast consensus, homogeneous team, stress, external threat narrative, moral certainty.',
        method:
          'Screen for symptoms: illusion of unanimity, self-censorship, mindguards, invulnerability, rationalization.',
        actGtm: 'GTM',
      },
      {
        title: 'Confirmation Bias',
        slug: 'confirmation-bias',
        summary:
          'Seeking and overweighting evidence that confirms what we already believe.',
        whenToUse: 'Intelligence analysis, post-hoc justification of a favored option.',
        method: 'ACH, devil\'s advocacy, seek disconfirming evidence explicitly.',
        actGtm: 'ACT',
        command: 'ach',
      },
      {
        title: 'Decision Support',
        summary:
          'Red Team role: improve decision quality, not own the outcome — inform, don\'t replace, the decider.',
        whenToUse: 'Setting expectations with sponsors and avoiding "the red team said no."',
        method:
          'Deliver findings, alternatives, and confidence levels. Decider retains accountability. Record dissent.',
        command: 'review',
      },
    ],
  },
  {
    num: 6,
    title: 'Thinking Creatively',
    slug: '06-thinking-creatively',
    summary:
      'The creative thought process as a sequence: problem-finding through communication — not a single brainstorm.',
    redteamNote: 'RedTeam separates `ideate` and `converge` explicitly.',
    commands: ['ideate', 'frame', 'converge', 'critique'],
    concepts: [
      {
        title: 'Problem-Finding',
        slug: 'problem-finding',
        summary: "Decide whether you're solving the right problem — reframe before generating solutions.",
        whenToUse: 'Symptom-fixing, recurring failures, stakeholder disagreement on the ask.',
        method: 'Problem restatement, frame audit, 4 ways of seeing, 6 words.',
        command: 'frame',
      },
      {
        title: 'Preparation',
        summary: 'Gather information, constraints, and diverse inputs before ideation.',
        whenToUse: 'Before any divergent session.',
        method: 'Assign research, invite outsiders, list constraints and non-goals explicitly.',
      },
      {
        title: 'Ideation',
        summary: 'Generate volume and variety of options without premature judgment.',
        whenToUse: 'After problem is framed; before any voting or ranking.',
        method: 'Brainstorming, gallery walk, yes-and, outside-in — defer evaluation.',
        actGtm: 'GTM',
        command: 'ideate',
      },
      {
        title: 'Idea Verification',
        slug: 'idea-verification',
        summary:
          'Test ideas against evidence, feasibility, and assumptions — distinct from killing ideas during ideation.',
        whenToUse: 'After divergent phase closes.',
        method: 'Assumptions check, ACH, small experiments, critique scoring.',
        command: 'critique',
      },
      {
        title: 'Communication',
        summary: 'Package the outcome so decision-makers can act — clarity and narrative matter.',
        whenToUse: 'Final red team deliverable.',
        method: 'Storytelling, SEE-I, explicit verdict and conditions. Lead with decision ask.',
        command: 'critique',
      },
    ],
  },
  {
    num: 8,
    title: 'RedTeam Extensions',
    slug: '08-redteam-extensions',
    summary:
      'Superset beyond Handbook v9: decision science, product red teaming, AI-quality checks, and durable decision records.',
    redteamNote:
      'These are RedTeam-native. We supersede and modify — not verbatim Army doctrine. See skill/reference/extensions-catalog.md.',
    commands: [
      'outside-view', 'invert', 'incentives', 'ladder', 'steelman', 'calibrate',
      'sequence', 'culture', 'ai-check', 'launch', 'rfc', 'misuse', 'reversibility', 'record',
    ],
    concepts: [
      {
        title: 'Outside View / Reference Class Forecasting',
        slug: 'outside-view',
        summary: 'Base-rate thinking: what happened in the reference class of similar past attempts?',
        whenToUse: 'Forecasts, timelines, budgets, "this time is different" claims.',
        method: 'Name reference class → base rates → justified adjustments → compare to inside view.',
        actGtm: 'ACT',
        command: 'outside-view',
      },
      {
        title: 'Inversion',
        slug: 'invert',
        summary: 'Munger-style: what would guarantee failure? Flip into avoidance rules.',
        whenToUse: 'Strategy, hiring, process design; fast adversarial pass.',
        method: 'List failure guarantors → invert to constraints → audit current plan.',
        actGtm: 'ACT',
        command: 'invert',
      },
      {
        title: 'Incentive & Goodhart Analysis',
        slug: 'incentives',
        summary: 'How metrics and incentives get gamed; perverse second-order effects.',
        whenToUse: 'OKRs, KPIs, compensation, policy with measurable targets.',
        method: 'Stated intent → gaming scenarios → guardrails → redesign.',
        actGtm: 'ACT',
        command: 'incentives',
      },
      {
        title: 'Ladder of Inference',
        slug: 'ladder',
        summary: 'Argyris: separate observable data from interpretation and conclusion.',
        whenToUse: 'Blame, talking past each other, "obvious" conclusions.',
        method: 'Walk ladder bottom-up; find leaps; rebuild from data.',
        actGtm: 'ACT',
        command: 'ladder',
      },
      {
        title: 'Steelman',
        slug: 'steelman',
        summary: 'Strongest version of each side before debate or devil\'s advocacy.',
        whenToUse: 'Before devils-advocate; AI analysis quality control.',
        method: 'Steel-man A and B → straw man audit → hand off.',
        actGtm: 'Both',
        command: 'steelman',
      },
      {
        title: 'Calibration',
        slug: 'calibrate',
        summary: 'Grade claims as fact/inference/guess; attach confidence and disconfirmers.',
        whenToUse: 'Memos with false precision; pre-review.',
        method: 'Claim register → confidence → overconfidence flags → language fixes.',
        actGtm: 'ACT',
        command: 'calibrate',
      },
      {
        title: 'Sequence / Playbooks',
        slug: 'sequence',
        summary: 'Chained `/redteam` commands for decision types with time budgets.',
        whenToUse: 'User asks what to run; multi-session facilitation.',
        method: 'Pick playbook (strategic, launch, RFC, fast, AI-check) → customize → schedule.',
        command: 'sequence',
      },
      {
        title: 'Culture / Worldview Mapping',
        slug: 'culture',
        summary: 'Stakeholder see/value/fear/want map — generalized cultural empathy.',
        whenToUse: 'Cross-team, cross-border, org silo conflicts.',
        method: 'Actor table → collisions → empathetic questions.',
        actGtm: 'Both',
        command: 'culture',
      },
      {
        title: 'AI Check',
        slug: 'ai-check',
        summary: 'Meta-review: mirror, grounding, dissent, sycophancy on AI-assisted analysis.',
        whenToUse: 'After model-generated plans or reviews.',
        method: 'Four checks → verdict trust/re-run/reject.',
        redteamNote: 'See ai-anti-patterns.md and bias-catalog.md.',
        command: 'ai-check',
      },
      {
        title: 'Launch Readiness',
        slug: 'launch',
        summary: 'Product go-live checklist: ops, comms, metrics, rollback, misuse.',
        whenToUse: 'Before GA, release, or public campaign.',
        method: 'Domain checklist → blockers → waivers → GO/NO-GO.',
        command: 'launch',
      },
      {
        title: 'RFC Review',
        slug: 'rfc',
        summary: 'Engineering decision doc review — options, reversibility, operations.',
        whenToUse: 'ADR/RFC approval gates.',
        method: 'Dimension scores → P0 findings → approve/revise/reject.',
        command: 'rfc',
      },
      {
        title: 'Misuse & Abuse Cases',
        slug: 'misuse',
        summary: 'How artifact could be misused, gamed, or harm vulnerable users.',
        whenToUse: 'Features, policies, algorithms — not cyber pentest.',
        method: 'Misuse brainstorm → harm tiers → mitigations.',
        command: 'misuse',
      },
      {
        title: 'Reversibility',
        slug: 'reversibility',
        summary: 'One-way vs two-way doors (Bezos); match process to reversibility.',
        whenToUse: 'Before irreversible commitments.',
        method: 'Classify commitments → reversal cost → undo plans.',
        command: 'reversibility',
      },
      {
        title: 'Decision Record',
        slug: 'record',
        summary: 'ADR-style artifact with assumptions, dissent, tripwires, review date.',
        whenToUse: 'After GO from review; end of sequence.',
        method: 'Fill template from prior `.redteam/reviews/` artifacts.',
        command: 'record',
      },
      {
        title: 'Cognitive Bias Catalog',
        slug: 'cognitive-bias-catalog',
        summary: 'Index of biases mapped to counter-techniques and commands.',
        whenToUse: 'When a bias is named or suspected.',
        method: 'Look up bias → run recommended command.',
        redteamNote: 'Reference doc: skill/reference/bias-catalog.md',
      },
      {
        title: 'AI Anti-Patterns',
        slug: 'ai-anti-patterns',
        summary: 'Sycophancy, false balance, phantom citations, shallow steel-man in AI output.',
        whenToUse: 'Any AI-assisted red team session.',
        method: 'Run ai-check; see anti-pattern table.',
        redteamNote: 'Reference doc: skill/reference/ai-anti-patterns.md',
      },
    ],
  },
];

const ttps = [
  { title: 'ACT–GTM Matrix', slug: 'act-gtm-matrix', actGtm: 'Meta', command: 'tools', category: 'facilitation',
    summary: 'Table matching tools to ACT, GTM, or both — pick and sequence by situation.',
    whenToUse: 'Planning which tools to run and in what order.',
    method: '1. Classify decision risk and time.\n2. Mark ACT vs GTM gap.\n3. Select tools from matrix.\n4. Sequence diverge before converge.' },
  { title: 'Ideal Group Process', actGtm: 'Both', command: 'groupthink', category: 'facilitation',
    summary: 'Diverge → analyze → debate → converge loop with rotating ACT/GTM tools.',
    whenToUse: '60–180 min group sessions on complex decisions.',
    method: 'Cycle through divergent tools, ACT analysis, structured debate, convergent tools until time ends.' },
  { title: '1-2-4-Whole Group', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Individual → pairs → fours → whole group; staged inclusion of every voice.',
    whenToUse: '30–60 min; need all voices before groupthink sets in.',
    method: 'One: silent write. Two: pairs. Four: combine pairs. Whole: plenary synthesis.' },
  { title: '1 on 1, 2 on 2, Exchange Emissaries', slug: '1-on-1-2-on-2-exchange-emissaries', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Subgroup dialog with emissaries cross-pollinating between groups.',
    whenToUse: '45–90 min; need more divergence than 1-2-4; breaking silos.',
    method: 'Individual write → 1:1 → 2:2 → emissary to other group → return with feedback.' },
  { title: 'Circle of Voices', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Round-robin: each speaks once before anyone speaks twice.',
    whenToUse: '15–30 min; dominant voices monopolize discussion.',
    method: 'Facilitator calls order; no response until all have spoken one round.' },
  { title: 'Circular Response', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Structured response pattern ensuring respectful listening and ordered contribution.',
    whenToUse: 'When interruptions and talking-over destroy psychological safety.',
    method: 'Speaker holds floor; next speaker responds to prior only; facilitator enforces order.' },
  { title: 'Fishbowl', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Inner group discusses, outer observes; swap roles to surface dynamics.',
    whenToUse: '30–60 min; large group; need observation of group dynamics.',
    method: 'Inner circle discusses while outer listens; swap; debrief what outer observed.' },
  { title: 'Think-Write-Share', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Silent individual write before any discussion — defeats anchoring.',
    whenToUse: '10–20 min; first speaker bias; hierarchical rooms.',
    method: 'Prompt → silent write → pair share → optional full group.' },
  { title: 'Troika Consulting', actGtm: 'GTM', command: 'groupthink', category: 'facilitation',
    summary: 'Client presents; three consultants discuss while client listens.',
    whenToUse: '20–30 min; client needs fresh eyes without defending every sentence.',
    method: 'Client states issue; consultants discuss in front of client; client reflects.' },
  { title: 'Gallery Walk', actGtm: 'GTM', command: 'ideate', category: 'facilitation',
    summary: "Post ideas; participants silently annotate and build on others' work.",
    whenToUse: '20–40 min; many ideas; introverts prefer writing.',
    method: 'Post ideas on walls/docs; silent review and stickers/comments; then discuss themes.' },
  { title: 'Dot Voting', actGtm: 'GTM', command: 'converge', category: 'facilitation',
    summary: 'Allocate limited votes across options for quick prioritization.',
    whenToUse: '10 min; too many options; need democratic convergence.',
    method: 'Each person gets N dots; place on options; count; discuss ties and surprises.' },
  { title: 'Brainstorming', actGtm: 'GTM', command: 'ideate', category: 'divergent',
    summary: 'Volume-first idea generation with deferred judgment.',
    whenToUse: '20–40 min familiar problems needing many options.',
    method: 'Quantity goal; no criticism during generation; capture all; cluster later.' },
  { title: '5 Will Get You 25', actGtm: 'GTM', command: 'ideate', category: 'divergent',
    summary: 'Each person generates five ideas; combine for quantity before quality.',
    whenToUse: '20 min; group stuck at 2–3 obvious options.',
    method: '5 ideas per person silently → share → merge duplicates → target 25+ raw ideas.' },
  { title: 'Yes, And…', slug: 'yes-and', actGtm: 'GTM', command: 'ideate', category: 'divergent',
    summary: 'Build on prior ideas without blocking — improv rule for ideation phases.',
    whenToUse: 'Divergent phase only; team habitually says "yes, but."',
    method: 'Each response must start by extending prior idea before adding new angle.' },
  { title: 'Outside-In Thinking', actGtm: 'ACT', command: 'ideate', category: 'divergent',
    summary: 'Import solutions or frames from unrelated domains.',
    whenToUse: 'Domain trapped; incremental options only.',
    method: 'Ask: who solved a analogous problem elsewhere? What would [unlikely industry] do?' },
  { title: 'Mind Mapping', actGtm: 'ACT', command: 'ideate', category: 'divergent',
    summary: 'Branching visual map from a central concept.',
    whenToUse: '20–40 min; explore branches of a complex issue.',
    method: 'Central node → branches → sub-branches; use colors for themes; then prioritize branches.' },
  { title: 'String of Pearls', actGtm: 'ACT', command: 'ideate', category: 'divergent',
    summary: 'Sequential "what if" chain along a narrative thread.',
    whenToUse: 'Exploring cascading consequences of a decision.',
    method: 'State event → what if? → next pearl → continue chain → identify breakpoints.' },
  { title: 'What If? Analysis', slug: 'what-if-analysis', actGtm: 'ACT', command: 'ideate', category: 'divergent',
    summary: 'Explore consequences when a key variable changes.',
    whenToUse: 'Sensitivity to one driver (price, regulation, competitor action).',
    method: 'Name variable → set alternative values → trace implications for plan.' },
  { title: 'My 15%', slug: 'my-15-percent', actGtm: 'GTM', command: 'ideate', category: 'divergent',
    summary: 'Each person owns the slice of the problem they can influence.',
    whenToUse: 'Diffusion of responsibility; "not my job" in group failures.',
    method: 'Each answers: what 15% can I own? Aggregate ownership map.' },
  { title: 'Appreciative Interview', actGtm: 'GTM', command: 'ideate', category: 'divergent',
    summary: "Explore what works before fixing what doesn't — expands solution space.",
    whenToUse: 'Morale low; deficit framing dominates; past success ignored.',
    method: 'Interview about peak past performance; extract replicable conditions.' },
  { title: '5 Whys', slug: '5-whys', actGtm: 'ACT', command: '5-whys', category: 'analytical',
    summary: 'Iterative why-questions to reach root causes and hidden assumptions.',
    whenToUse: '15–30 min; incident; recurring symptom fixes.',
    method: 'State problem → why? ×5 → validate root → distinguish symptom vs cause.' },
  { title: 'Analysis of Competing Hypotheses (ACH)', slug: 'analysis-of-competing-hypotheses', actGtm: 'ACT', command: 'ach', category: 'analytical',
    summary: 'Matrix scoring evidence against mutually exclusive hypotheses.',
    whenToUse: '60–180 min; multiple explanations; confirmation bias risk.',
    method: 'List hypotheses → list evidence → mark C/I/N per cell → fewest inconsistencies wins.' },
  { title: 'Key Assumptions Check', actGtm: 'ACT', command: 'assumptions', category: 'analytical',
    summary: 'List what must be true for the plan to work; flag critical unvalidated beliefs.',
    whenToUse: '30–60 min before resource commitment.',
    method: 'Extract ≥10 assumptions → classify → mark validated/unvalidated → test critical ones.' },
  { title: 'Assumption Sensitivity Analysis', actGtm: 'ACT', command: 'assumptions', category: 'analytical',
    summary: 'Rank assumptions by what happens if each is wrong (collapse vs. absorb).',
    whenToUse: 'Prioritizing which assumptions to test first.',
    method: 'Rate sensitivity (collapse/degrade/absorb) × confidence → focus on collapse + low confidence.' },
  { title: 'Argument Deconstruction', actGtm: 'ACT', command: 'challenge', category: 'analytical',
    summary: 'Separate premises, inference, and conclusion; test each link.',
    whenToUse: 'Persuasive narrative masking weak logic.',
    method: 'Diagram: premise → therefore → conclusion. Test each arrow independently.' },
  { title: 'Frame Audit', actGtm: 'ACT', command: 'frame', category: 'analytical',
    summary: 'Examine the lens defining the problem — scope, metrics, causality, values.',
    whenToUse: 'Stuck debate; wrong problem; metrics gaming.',
    method: 'Document current frame elements → generate alternative frames → test which opens options.' },
  { title: '4 Ways of Seeing', actGtm: 'ACT', command: 'frame', category: 'analytical',
    summary: 'Reframe as problem, polarity, pattern, or opportunity.',
    whenToUse: 'Either/or fights that may be polarities to manage.',
    method: 'Apply four lenses in turn; ask which fits without forcing solve.' },
  { title: 'Problem Restatement', actGtm: 'ACT', command: 'frame', category: 'analytical',
    summary: 'Rephrase the problem multiple ways before solving.',
    whenToUse: '15–30 min; first problem statement accepted uncritically.',
    method: 'Generate ≥5 restatements; pick one that changes solution space.' },
  { title: '6 Words', slug: '6-words', actGtm: 'Both', command: 'challenge', category: 'analytical',
    summary: 'Distill the issue to six words — forces clarity.',
    whenToUse: '5–10 min; fuzzy mandate; alignment check.',
    method: 'Each participant writes 6 words; compare; discuss gaps.' },
  { title: 'SEE-I', slug: 'see-i', actGtm: 'ACT', command: 'challenge', category: 'analytical',
    summary: 'State, Elaborate, Exemplify, Illustrate — clarify before debate.',
    whenToUse: '10–15 min; people argue past each other on undefined terms.',
    method: 'State term → elaborate → give example → illustrate (analogy/diagram).' },
  { title: 'Analogy Suitability Analysis', actGtm: 'ACT', command: 'challenge', category: 'analytical',
    summary: 'Test whether the analogy in use actually fits.',
    whenToUse: 'Plan justified by "it\'s like Uber for X."',
    method: 'Map source and target domains; list matches and mismatches; decide if analogy helps or misleads.' },
  { title: 'Logic of Failure', actGtm: 'ACT', command: 'challenge', category: 'analytical',
    summary: 'How can well-intentioned system logic still produce failure?',
    whenToUse: 'Complex systems; perverse incentives; policy surprises.',
    method: 'Model feedback loops; ask how rational local choices produce global failure.' },
  { title: 'Critical Variables (CVs)', slug: 'critical-variables', actGtm: 'ACT', command: 'assumptions', category: 'analytical',
    summary: 'Dynamic factors that drive outcomes — often mapped to an Operating Landscape Map.',
    whenToUse: 'Operating environment framing; planning in volatile contexts.',
    method: 'Identify CVs → map interactions across domains → prioritize for monitoring and planning.' },
  { title: 'Who Else?', slug: 'who-else', actGtm: 'ACT', command: 'challenge', category: 'analytical',
    summary: 'Whose perspective is missing from this analysis?',
    whenToUse: '15 min; homogenous analysis team.',
    method: 'List stakeholders and non-stakeholders with skin in game; add at least one missing voice.' },
  { title: 'Who Am I?', slug: 'who-am-i', actGtm: 'ACT', command: 'init', category: 'analytical', skipTtp: true,
    summary: 'Introspective identity/bias surfacing before engaging others.',
    whenToUse: '20–30 min; facilitator prep; high attachment to outcome.',
    method: 'Structured prompts on values, identity, biases, and what you might be wrong about.' },
  { title: "Devil's Advocacy", slug: 'devils-advocacy', actGtm: 'Both', command: 'devils-advocate', category: 'adversarial',
    summary: 'Structured strongest-case against the prevailing view.',
    whenToUse: '20–45 min; consensus too fast; launch approval.',
    method: 'Steel-man prevailing view → structured case against → assess fatal vs addressable objections.' },
  { title: 'Premortem Analysis', actGtm: 'ACT', command: 'premortem', category: 'adversarial',
    summary: 'Assume failure; work backward to causes and preventions.',
    whenToUse: '30–60 min; optimism bias; pre-launch.',
    method: 'Future failure scenario → brainstorm causes → rank → prevent/detect/respond for top risks.' },
  { title: 'Team A / Team B Analysis', slug: 'team-a-team-b-analysis', actGtm: 'Both', command: 'devils-advocate', category: 'adversarial',
    summary: 'Two teams argue opposing options, then swap and defend the other side.',
    whenToUse: '45–60 min; two viable options; empathy for opposition lacking.',
    method: 'Assign teams → argue → swap → defend other side → plenary compare.' },
  { title: 'BATNA', actGtm: 'ACT', command: 'converge', category: 'adversarial',
    summary: 'Best Alternative to a Negotiated Agreement — know your walk-away before negotiating.',
    whenToUse: '30–45 min; deal approval; vendor selection.',
    method: 'List alternatives if no deal → improve best → compare to offer → never accept worse than BATNA.' },
  { title: 'Divergence–Convergence', slug: 'divergence-convergence', actGtm: 'Both', command: 'ideate', category: 'adversarial',
    summary: 'Explicit separate phases for generating vs. narrowing options.',
    whenToUse: '60+ min; teams mix critique into brainstorming.',
    method: 'Phase 1: ideate tools only. Hard gate. Phase 2: converge tools only.' },
  { title: 'Alternative Futures Analysis', actGtm: 'ACT', command: 'futures', category: 'strategic',
    summary: 'Multiple plausible futures against which to stress-test the plan.',
    whenToUse: '60–120 min; strategic planning; high uncertainty.',
    method: 'Pick 2 uncertainties → 4 scenarios → test plan in each → find robust moves and signposts.' },
  { title: 'Indicators / Signposts of Change', slug: 'indicators-signposts-of-change', actGtm: 'ACT', command: 'futures', category: 'strategic',
    summary: 'Early warnings that a given future is emerging.',
    whenToUse: 'After alternative futures; monitoring design.',
    method: 'Per scenario: list observable indicators, thresholds, and monitoring owner.' },
  { title: 'High Impact / Low Probability Analysis', slug: 'high-impact-low-probability-analysis', actGtm: 'ACT', command: 'futures', category: 'strategic',
    summary: 'Tail risks — unlikely but catastrophic scenarios.',
    whenToUse: '30 min; risk registers ignore low-probability catastrophes.',
    method: 'List HILP events → assess impact → decide hedge vs accept vs monitor.' },
  { title: 'SWOT Analysis', slug: 'swot-analysis', actGtm: 'ACT', command: 'converge', category: 'strategic',
    summary: 'Strengths, Weaknesses, Opportunities, Threats for an option or entity.',
    whenToUse: '30–60 min; option comparison; strategic snapshot.',
    method: 'Fill four quadrants → cross-link (SO/WO/ST/WT strategies) → prioritize.' },
  { title: 'Stakeholder Mapping', actGtm: 'Both', command: 'review', category: 'strategic',
    summary: 'Who decides, who influences, who blocks, who suffers consequences.',
    whenToUse: '30 min; political risk; rollout planning.',
    method: 'Map power vs interest; identify blockers and champions; plan engagement.' },
  { title: 'Shifting the Burden', actGtm: 'ACT', command: 'assumptions', category: 'strategic',
    summary: 'Push past the obvious fix to ask who or what structurally bears the load.',
    whenToUse: 'Symptom fixes that recur; blame on individuals.',
    method: 'Ask: what system structure makes this outcome rational? Who actually carries the burden?' },
  // RedTeam extension TTPs (also have dedicated commands where noted)
  { title: 'Reference Class Forecasting', slug: 'reference-class-forecasting', actGtm: 'Extension', command: 'outside-view', category: 'extension',
    summary: 'Estimate from the distribution of outcomes in similar past cases.',
    whenToUse: 'Probability and timeline estimates.',
    method: 'Define class → gather base rate → adjust sparingly.' },
  { title: 'Pre-parade', slug: 'pre-parade', actGtm: 'Extension', command: 'premortem', category: 'extension',
    summary: 'Imagine surprising success; surface hidden upside dependencies.',
    whenToUse: 'After premortem; balance optimism bias.',
    method: 'Narrate unexpected success → list what had to go right unplanned.' },
  { title: 'Cynefin Domain Check', slug: 'cynefin-domain-check', actGtm: 'Extension', command: 'frame', category: 'extension',
    summary: 'Classify context as clear, complicated, complex, or chaotic.',
    whenToUse: 'Wrong problem-solving mode for the situation.',
    method: 'Domain → appropriate response pattern (best practice vs probe vs act).' },
  { title: 'Polarity Mapping', slug: 'polarity-mapping', actGtm: 'Extension', command: 'frame', category: 'extension',
    summary: 'Manage ongoing tensions (poles) instead of false either/or solutions.',
    whenToUse: 'Persistent speed vs quality style debates.',
    method: 'Name poles → map upsides of each → plan to hold both.' },
  { title: 'Discovery-Driven Planning', slug: 'discovery-driven-planning', actGtm: 'Extension', command: 'assumptions', category: 'extension',
    summary: 'Learning milestones to test assumptions before scaling.',
    whenToUse: 'High uncertainty plans.',
    method: 'Critical assumption → cheap test → scale/kill gate.' },
  { title: 'Kill Criteria', slug: 'kill-criteria', actGtm: 'Extension', command: 'review', category: 'extension',
    summary: 'Explicit tripwires that trigger stop, pivot, or rollback.',
    whenToUse: 'GO with conditions; one-way doors.',
    method: 'Signal → threshold → action → owner.' },
  { title: 'Second-Order Effects', slug: 'second-order-effects', actGtm: 'Extension', command: 'challenge', category: 'extension',
    summary: 'Consequences of consequences; systemic feedback.',
    whenToUse: 'Policy and product changes with broad reach.',
    method: '1st → 2nd → 3rd order table per action.' },
  { title: 'Narrative vs Evidence Audit', slug: 'narrative-vs-evidence-audit', actGtm: 'Extension', command: 'critique', category: 'extension',
    summary: 'Where compelling story outruns disconfirmable data.',
    whenToUse: 'Executive memos, strategy decks.',
    method: 'Flag narrative fallacy; separate story from sourced claims.' },
  { title: 'Decision Journal', slug: 'decision-journal', actGtm: 'Extension', command: 'record', category: 'extension',
    summary: 'Personal log of decisions and confidence for later calibration.',
    whenToUse: 'Building forecasting skill over time.',
    method: 'Decision, confidence %, expected outcome, review date.' },
  { title: 'Cultural Perception Framework', actGtm: 'ACT', command: 'culture', category: 'cultural',
    summary: 'How different cultural actors perceive the same events.',
    whenToUse: 'Multi-stakeholder conflict; incompatible narratives.',
    method: 'Per actor: perception, values, fears, goals → compare maps.' },
  { title: 'Onion Model', actGtm: 'ACT', command: 'frame', category: 'cultural',
    summary: 'Peel cultural layers from artifacts to deep assumptions.',
    whenToUse: 'Org culture diagnosis; values-behavior gap.',
    method: 'Artifacts → espoused values → underlying assumptions.' },
  { title: '6 Empathetic Questions', slug: '6-empathetic-questions', actGtm: 'Both', command: 'challenge', category: 'cultural',
    summary: "Questions that build understanding of another's frame without judgment.",
    whenToUse: '15 min; before judging another stakeholder irrational.',
    method: 'Use open questions focused on their goals, fears, and constraints — not cross-examination.' },
  { title: 'Deception Detection', actGtm: 'ACT', command: 'ach', category: 'cultural',
    summary: 'MOM-POP-EVE-MOSES checklist + ACH when active deception is plausible.',
    whenToUse: 'Intelligence, negotiation, counterparty may be misleading — not routine business.',
    method: 'Screen motive/opportunity/means, past practices, evidence quality, source control → ACH with deception hypothesis.',
    redteamNote: 'Civilian product red teams rarely need this. Do not use for paranoid culture.' },
  { title: 'TRIZ', actGtm: 'ACT', command: 'ideate', category: 'cultural',
    summary: 'Systematic inventive problem-solving from contradictions (Altshuller).',
    whenToUse: '45–90 min; engineering trade-offs; contradictory requirements.',
    method: 'State contradiction → TRIZ principles → generate inventive solutions.' },
  { title: 'Storytelling', actGtm: 'Both', command: 'critique', category: 'communication',
    summary: 'Narrative form to communicate findings and alternatives persuasively.',
    whenToUse: 'Final deliverable to executives; need action not just analysis.',
    method: 'Situation → complication → resolution; protagonist, stakes, clear ask.' },
];

// Generate concept docs (including chapter 1 principles already in concepts)
const conceptDir = path.join(HANDBOOK, 'concepts');
const ttpDir = path.join(HANDBOOK, 'ttps');
const chapterDir = path.join(HANDBOOK, 'chapters');
const writtenConcepts = new Set();

for (const ch of chapters) {
  const items = [];

  for (const c of ch.concepts) {
    const s = c.slug || slug(c.title);
    if (writtenConcepts.has(s) && !c.allowDuplicate) continue;
    writtenConcepts.add(s);

    const href = `../concepts/${s}.md`;
    items.push({ title: c.title, href, summary: c.summary });

    const related = c.related || [];
    if (c.command) {
      related.push({ title: `/redteam ${c.command}`, href: `../../skill/reference/${c.command}.md` });
    }

    writeDoc(
      conceptDir,
      `${s}.md`,
      conceptDoc({
        title: c.title,
        chapter: `Chapter ${ch.num} — ${ch.title}`,
        chapterSlug: ch.slug,
        summary: c.summary,
        whenToUse: c.whenToUse,
        method: c.method,
        actGtm: c.actGtm,
        command: c.command,
        related,
        redteamNote: c.redteamNote,
      }),
    );

    if (c.alsoTtp) {
      const ttpPath = path.join(ttpDir, `${s}.md`);
      if (!fs.existsSync(ttpPath)) {
        writeDoc(
          ttpDir,
          `${s}.md`,
          conceptDoc({
            title: c.title,
            chapter: `Chapter ${ch.num} — ${ch.title}`,
            chapterSlug: ch.slug,
            summary: c.summary,
            whenToUse: c.whenToUse,
            method: c.method,
            actGtm: c.actGtm,
            command: c.command,
            related: [{ title: `Concept: ${c.title}`, href: `../concepts/${s}.md` }],
            redteamNote: c.redteamNote,
          }),
        );
      }
    }
  }

  // Chapter 7 index will add TTPs
  writeDoc(
    chapterDir,
    `${ch.slug}.md`,
    chapterDoc({
      num: ch.num,
      title: ch.title,
      slug: ch.slug,
      summary: ch.summary,
      items,
      commands: ch.commands,
      redteamNote: ch.redteamNote,
    }),
  );
}

// Chapter 7
const ch7Items = [];
for (const t of ttps) {
  const s = t.slug || slug(t.title);
  if (t.skipTtp) {
    ch7Items.push({
      title: t.title,
      href: `../concepts/${s}.md`,
      summary: t.summary,
      category: t.category,
    });
    continue;
  }
  const related = [];
  if (t.command) {
    related.push({ title: `/redteam ${t.command}`, href: `../../skill/reference/${t.command}.md` });
  }
  related.push({ title: 'TTP catalog (skill)', href: '../../skill/reference/ttp-catalog.md' });

  writeDoc(
    ttpDir,
    `${s}.md`,
    conceptDoc({
      title: t.title,
      chapter: 'Chapter 7 — Tools, Techniques & Practices',
      chapterSlug: '07-tools-techniques-practices',
      summary: t.summary,
      whenToUse: t.whenToUse,
      method: t.method,
      actGtm: t.actGtm,
      command: t.command,
      related,
      redteamNote: t.redteamNote || `Category: **${t.category}**. RedTeam may extend or alias this technique.`,
    }),
  );

  ch7Items.push({
    title: t.title,
    href: `../ttps/${s}.md`,
    summary: t.summary,
    category: t.category,
  });
}

const byCategory = {};
for (const item of ch7Items) {
  const cat = ttps.find((t) => t.title === item.title).category;
  if (!byCategory[cat]) byCategory[cat] = [];
  byCategory[cat].push(item);
}

let ch7Body = '';
for (const [cat, items] of Object.entries(byCategory)) {
  ch7Body += `\n### ${cat.charAt(0).toUpperCase() + cat.slice(1)}\n\n`;
  ch7Body += items.map((i) => `- [${i.title}](${i.href}) — ${i.summary}`).join('\n');
  ch7Body += '\n';
}

writeDoc(
  chapterDir,
  '07-tools-techniques-practices.md',
  `# Chapter 7 — Tools, Techniques & Practices

The handbook's core TTP catalog. Most tools support **ACT**, **GTM**, or **both**. Tools are meant to **sequence**, not stand alone.

Browse by category below. Each item has its own page in [\`ttps/\`](../ttps/).

${ch7Body}

## RedTeam commands

- \`/redteam tools\` — browse and recommend TTPs
- See individual TTP pages for mapped commands (\`premortem\`, \`ach\`, \`ideate\`, etc.)

## See also

- [Handbook index](../README.md)
- [Full inventory](../../HANDBOOK.md)
`,
);

// Handbook README index
const chapterLinks = [
  ...chapters.map((ch) => ({ title: `Chapter ${ch.num} — ${ch.title}`, href: `chapters/${ch.slug}.md` })),
  { title: 'Chapter 7 — Tools, Techniques & Practices', href: 'chapters/07-tools-techniques-practices.md' },
];

writeDoc(
  HANDBOOK,
  'README.md',
  `# Handbook documentation

RedTeam's superset reference derived from *The Red Team Handbook* v9.0. **We update and modify** — not verbatim reproduction.

## Chapters

${chapterLinks.map((c) => `- [${c.title}](${c.href})`).join('\n')}

## Concepts (${writtenConcepts.size} docs)

All concept pages: [\`concepts/\`](concepts/)

## TTP catalog (${ch7Items.length} docs)

All technique pages: [\`ttps/\`](ttps/) (plus concepts cross-listed from other chapters)

## Quick links

- [Inventory summary](../HANDBOOK.md)
- [Skill implementation](../../skill/reference/ttp-catalog.md)
- [NOTICE](../../NOTICE.md)
`,
);

// Update HANDBOOK.md to point to tree
const handbookIndex = fs.readFileSync(path.join(ROOT, 'docs', 'HANDBOOK.md'), 'utf8');
if (!handbookIndex.includes('docs/HANDBOOK/README.md')) {
  const insert = `\n> **Expanded docs:** Each chapter and catalog item has its own page under [\`HANDBOOK/\`](HANDBOOK/README.md).\n\n`;
  fs.writeFileSync(
    path.join(ROOT, 'docs', 'HANDBOOK.md'),
    handbookIndex.replace(
      'The skill implementation lives in',
      `${insert}The skill implementation lives in`,
    ),
  );
}

console.log(`Generated:`);
console.log(`  ${chapters.length + 1} chapter docs`);
console.log(`  ${writtenConcepts.size} concept docs`);
console.log(`  ${ttps.length} TTP docs`);
console.log(`  HANDBOOK/README.md`);
