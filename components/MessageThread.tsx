import { sendMessage } from "@/lib/actions/messages";
import { displayMessageBody } from "@/lib/redact";
import type { Message } from "@/lib/types";

export default function MessageThread({
  introductionId,
  messages,
  currentUserId,
  feePaid,
  otherPartyLabel,
}: {
  introductionId: string;
  messages: Message[];
  currentUserId: string;
  feePaid: boolean;
  otherPartyLabel: string;
}) {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h1 className="font-serif text-xl text-navy">Conversation with {otherPartyLabel}</h1>
        {!feePaid && (
          <p className="text-xs text-ink/50 mt-1">
            Contact details are hidden until the placement fee is confirmed paid.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 max-h-[60vh] overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-sm text-ink/40 text-center py-8">No messages yet — say hello.</p>
        )}
        {messages.map((msg) => {
          const isMine = msg.sender_id === currentUserId;
          return (
            <div
              key={msg.id}
              className={`max-w-[75%] px-4 py-3 rounded-lg text-sm ${
                isMine ? "self-end bg-navy text-white" : "self-start bg-cream text-ink"
              }`}
            >
              {displayMessageBody(msg.body, feePaid)}
            </div>
          );
        })}
      </div>

      <form action={sendMessage} className="flex gap-2 p-4 border-t border-border">
        <input type="hidden" name="introduction_id" value={introductionId} />
        <input
          name="body"
          required
          placeholder="Type a message…"
          className="flex-1 px-4 py-2.5 border border-border rounded text-sm"
        />
        <button type="submit" className="px-5 py-2.5 rounded bg-navy text-white text-sm font-semibold">
          Send
        </button>
      </form>
    </div>
  );
}
