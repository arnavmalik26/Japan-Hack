/**
 * Run this script locally using Node.js to verify the API behaves as expected.
 * Command: node test-ai.js
 */

const ENDPOINT = "http://localhost:3000/api/ai"; // Change if deployed

const TEST_CASES = [
    // Hindi (hi)
    { text: "mujhe paani chahiye", lang: "hi", expCat: "routine", expSub: "water" },
    { text: "kambal milega kya thand lag rahi hai", lang: "hi", expCat: "routine", expSub: "blanket" },
    { text: "sir chakkar kha raha hai", lang: "hi", expCat: "medical", expSub: "unwell" },
    { text: "shuddh shakahari khana dena", lang: "hi", expCat: "routine", expSub: "veg_meal" },
    { text: "mera connecting flight ka gate kaunsa hai", lang: "hi", expCat: "conversation", expSub: "connection" },
    
    // Punjabi (pa)
    { text: "pani de do ji", lang: "pa", expCat: "routine", expSub: "water" },
    { text: "washroom kithe hai", lang: "pa", expCat: "routine", expSub: "restroom" },
    { text: "chaa bhej do", lang: "pa", expCat: "routine", expSub: "tea_coffee" },
    { text: "mainu moongfali ton allergy hai", lang: "pa", expCat: "allergy", expSub: "other" },
    { text: "ah asdfg ghjkl", lang: "pa", expCat: "conversation", expSub: "other" }, // Unclear
    
    // Tamil (ta)
    { text: "Thaneer venum", lang: "ta", expCat: "routine", expSub: "water" },
    { text: "Saapida edhavadhu irukka", lang: "ta", expCat: "routine", expSub: "food" },
    { text: "Enakku nenju valikithu", lang: "ta", expCat: "medical", expSub: "unwell" },
    { text: "Pillows kedaikuma", lang: "ta", expCat: "routine", expSub: "pillow" },
    { text: "Flight cancel aayiducha", lang: "ta", expCat: "conversation", expSub: "other" },
    
    // Indian English (en)
    { text: "Please give some water", lang: "en", expCat: "routine", expSub: "water" },
    { text: "Feeling very dizzy and faint", lang: "en", expCat: "medical", expSub: "unwell" },
    { text: "I need to go to the washroom", lang: "en", expCat: "routine", expSub: "restroom" },
    { text: "Strict vegetarian food only", lang: "en", expCat: "routine", expSub: "veg_meal" },
    { text: "Where is immigration checking?", lang: "en", expCat: "conversation", expSub: "other" }
];

async function runTests() {
    console.log(`Running 20 tests against ${ENDPOINT}...\n`);
    console.log(String("Test").padEnd(35) | String("Expected").padEnd(20) | String("Got").padEnd(20) | "Pass/Fail");
    console.log("-".repeat(85));

    let passed = 0;

    for (const test of TEST_CASES) {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: test.text, lang: test.lang })
            });
            
            const data = await res.json();
            const got = `${data.category}/${data.subtype}`;
            const exp = `${test.expCat}/${test.expSub}`;
            const isPass = got === exp;
            
            if (isPass) passed++;

            const testName = (test.text.substring(0, 30) + "...").padEnd(35);
            console.log(`${testName} | ${exp.padEnd(20)} | ${got.padEnd(20)} | ${isPass ? '✅ PASS' : '❌ FAIL'}`);
            
            // Artificial delay to avoid rate limiting on free API tiers
            await new Promise(r => setTimeout(r, 1000));
        } catch (e) {
            console.log(`${test.text.substring(0, 30).padEnd(35)} | ERROR: ${e.message}`);
        }
    }
    
    console.log("-".repeat(85));
    console.log(`Results: ${passed}/20 Passed`);
}

runTests();