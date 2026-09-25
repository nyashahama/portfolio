import assert from "node:assert/strict";
import test from "node:test";
import { getContactConfig } from "../lib/contact-config.mjs";

test("contact delivery is unavailable when provider settings are missing", () => {
  assert.equal(getContactConfig({ RESEND_API_KEY: "re_test" }), null);
  assert.equal(getContactConfig({ EMAIL_FROM: "site@example.com", OWNER_EMAIL: "owner@example.com" }), null);
});

test("contact delivery uses configured sender and recipient", () => {
  assert.deepEqual(getContactConfig({
    RESEND_API_KEY: "re_test",
    EMAIL_FROM: "site@example.com",
    OWNER_EMAIL: "owner@example.com",
  }), { apiKey: "re_test", from: "site@example.com", to: "owner@example.com" });
});
