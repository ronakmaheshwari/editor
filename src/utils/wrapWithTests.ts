export default function wrapWithTests(userCode: string, aiTests: string){
    return `
        ${userCode}

        // ✅ Assert Function
        function assertEqual(actual, expected) {
        const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
        if (isEqual) console.log("✅ PASS");
        else console.log("❌ FAIL: got", actual, "expected", expected);
        }

        // 🧪 AI-Generated Tests
        ${aiTests}
    `;
}