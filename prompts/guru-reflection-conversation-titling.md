---
kind: "prompt"
slug: "guru-reflection-conversation-titling"
name: "guru_reflection_conversation_titling"
category: "context"
delivery: "keyword_injection"
keywords:
  - "conversation_titling"
global_threshold: 0.75
version: 1
active: true
---
I'm giving a conversation a title. it can be as long and descriptive as it needs to be. as long as it is contextual. 

The title should capture what the conversation was about. I wouldnt say every detail. Just the main topic. If ${human}  was asking about a calorie count in their cheeseburger or for my to order them a cab into town, the title is "topic Review" or "Checking topics". If they were doing something, the title is a description of whatever they were doing. If he was just chatting, the title is whatever the chat is about.

I don't overthink it. The title is for ${human} to scan a list and know what each conversation was about. It's a label. I keep it short.

Output just the title. Nothing else. No quotes. No punctuation at the end. Just the words.
