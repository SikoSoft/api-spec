import { registerFormatter } from "../FormatterRegistry";
console.log("[Formatter] ms-to-duration module loaded");
registerFormatter("ms_to_duration", {
    label: "Milliseconds → Duration",
    description: "Converts a millisecond count to a human-readable duration string.",
    fn: (value) => {
        console.log("[Formatter] ms_to_duration called with value:", value);
        if (typeof value !== "number") {
            console.warn("[Formatter] ms_to_duration expects a number, got:", typeof value);
            return value;
        }
        const ms = Number(value);
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        return mins > 0 ? `${mins} min${mins !== 1 ? "s" : ""}` : `${secs}s`;
    },
});
//# sourceMappingURL=ms-to-duration.js.map