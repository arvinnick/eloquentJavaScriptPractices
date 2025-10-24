/*
Regexp golf
Code golf is a term used for the game of trying to express a particular
program in as few characters as possible. Similarly, regexp golf is the
practice of writing as tiny a regular expression as possible to match a
given pattern and only that pattern.
For each of the following items, write a regular expression to test
whether the given pattern occurs in a string. The regular expression
should match only strings containing the pattern. When your expres-
sion works, see whether you can make it any smaller.
1. car and cat
*/

function testRegexp(name, regexpArg, yes, no) {
    //GPT generated
    if (regexpArg.source === "YOUR_REGEX_HERE") return console.log(`⚠️  ${name} not implemented`);
    for (let str of yes) {
        if (!regexpArg.test(str)) console.log(`❌ Fail: '${str}' should match (${name})`);
    }
    for (let str of no) {
        if (regexpArg.test(str)) console.log(`❌ Fail: '${str}' should not match (${name})`);
    }
    console.log(`✅ Tests done for: ${name}`);
}

let regexp = /ca(r|t)/
testRegexp(
    "car and cat",
    regexp,
    ["my car", "bad cats"],
    ["camper", "high art"]
);

/*
2. pop and prop
*/
regexp = /pr?op/
testRegexp(
    "pop and prop",
    regexp,
    ["pop culture", "propane"],
    ["plop", "prrrop"]
);

/*
3. ferret, ferry, and ferrari
*/
regexp = /ferr(ari|et|y)/
testRegexp(
    "ferret, ferry, and ferrari",
    regexp,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]
);

/*
4. Any word ending in ious
*/
regexp = /.+ious$/
testRegexp(
    "word ending in 'ious'",
    regexp,
    ["delicious", "spacious"],
    ["ruinous.", "consciousness"]
);

/*
5. A whitespace character followed by a period, comma, colon, or
semicolon
*/
regexp = /\s(\.|;|,)/
testRegexp(
    "whitespace + punctuation",
    regexp,
    ["bad punctuation .", "look , here"],
    ["nope.", "what:ever"]
);


/*
6. A word longer than six letters
*/
regexp = /\w{6,}/
testRegexp(
    "word longer than six letters",
    regexp,
    ["hottentottententen", "longword"],
    ["short", "tiny"]
);

/*
7. A word without the letter e (or E)
*/
regexp = /^[^e|^E]+?$/
testRegexp(
    "word without 'e' or 'E'",
    regexp,
    ["sky", "DRY"],
    ["elephant", "Eagle"]
);


/*
Quoting style
Imagine you have written a story and used single quotation marks
throughout to mark pieces of dialogue. Now you want to replace all
the dialogue quotes with double quotes, while keeping the single quotes
used in contractions like aren’t.
Think of a pattern that distinguishes these two kinds of quote usage
and craft a call to the replace method that does the proper replacement.
 */

let text = "'Are you sure this is the right house?' Lila asked as she hesitated at the gate, fingers tracing the ironwork.\n" +
    "'Of course,' Marco replied, shrugging. 'John said it was the third on the left, so it must be.'\n" +
    "'I don't like the look of it,' Lila whispered. 'It looks like nobody's lived here for years.'\n" +
    "'Don't worry,' Marco said with a nervous laugh. 'We'll be in and out before anyone notices.'\n" +
    "'If John were here he wouldn't let us do this alone,' Lila muttered, tugging her coat tighter. 'He's always the sensible one.'\n" +
    "'I can't believe you're actually doing this,' Marco said, peering through the dusty window. 'You aren't afraid?'\n" +
    "'Afraid?' Lila rolled her eyes. 'I'm curious, that's all. Besides, what's the worst that could happen?'\n" +
    "They pushed the gate open and stepped onto the path. 'Stay close,' Lila told Marco. 'And if anything happens, call John's number right away.'\n"

text = text.replace(/(?<!\w)'|'(?!\s)/g,'"') //AI assisted
console.log(text)