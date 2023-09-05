import { describe, it, expect } from "@jest/globals";
import { PayloadFAQProvider } from "./main";

// include protocol
const PAYLOAD_ADDRESS="http://cms:3000";

describe("PayloadFAQProvider", () => {
	it("should return the correct number of results with the seeded data", async () => {
		const provider = new PayloadFAQProvider(PAYLOAD_ADDRESS);
		await expect(provider.getFAQs()).resolves.toHaveLength(2);
	});
});
