export function getContactConfig(env) {
  const apiKey = env.RESEND_API_KEY;
  const from = env.EMAIL_FROM;
  const to = env.OWNER_EMAIL;
  return apiKey && from && to ? { apiKey, from, to } : null;
}
