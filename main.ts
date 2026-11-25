// One Star, Written in Sap entry (Node 22, standard library only):
// writes a single one-line 1-star review from a houseplant about the human
// who owns it, under 280 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the plant's grievance is specific — watered only when
// remembered (never), apologies offered to a fern instead — and its revenge
// is photosynthesis "out of spite". A real review shape: grievance, reason
// for the single star, and a verdict on the human.
// Verified by running the program: the output is one line, 152 characters,
// inside the 1-to-279-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'One star. He waters me when he remembers, which is never, then apologises to a fern. I photosynthesise out of spite now. Would not recommend this human.',
);
