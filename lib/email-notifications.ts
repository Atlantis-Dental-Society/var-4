import { db } from "./db";
import { user } from "./auth-schema";
import { eq } from "drizzle-orm";
import { sendEmail } from "./ses";
import { buildNewEventEmail, buildNewInsightEmail } from "./email-templates";
import type { events, insights } from "./schema";

async function getSubscribedEmails() {
  return db
    .select({ email: user.email, name: user.name })
    .from(user)
    .where(eq(user.emailNotifications, true));
}

function notifySubscribers(
  buildEmail: () => { subject: string; html: string; text: string },
  label: string,
) {
  (async () => {
    try {
      const users = await getSubscribedEmails();
      const email = buildEmail();
      await Promise.allSettled(
        users.map((u) =>
          sendEmail({ to: u.email, subject: email.subject, html: email.html, text: email.text }),
        ),
      );
    } catch (err) {
      console.error(`[email-notifications] Failed to send ${label} emails:`, err);
    }
  })();
}

export function notifyNewEvent(event: typeof events.$inferSelect) {
  notifySubscribers(() => buildNewEventEmail(event), "event");
}

export function notifyNewInsight(insight: typeof insights.$inferSelect) {
  notifySubscribers(() => buildNewInsightEmail(insight), "insight");
}
