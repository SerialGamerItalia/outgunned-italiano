/**
 * Traduzioni mirate per alcune stringhe hard-coded nel sistema Outgunned.
 * Il dizionario italiano viene caricato prima di questo script; le chiavi
 * OUTGUNNED_IT appartengono esclusivamente a questo modulo.
 */
function localizeOutgunnedPlaceholders(html) {
  const root = html?.[0] ?? html?.element ?? html;
  if (!root?.querySelectorAll) return;
  for (const field of root.querySelectorAll('input[placeholder="Name"]')) {
    field.setAttribute("placeholder", game.i18n.localize("OUTGUNNED_IT.NamePlaceholder"));
  }
}

function localizeDangerRollReminder() {
  const label = document.querySelector("#outgunned-danger-roll-reminder strong");
  if (label && label.textContent !== game.i18n.localize("OUTGUNNED_IT.DangerRollReminder")) {
    label.textContent = game.i18n.localize("OUTGUNNED_IT.DangerRollReminder");
  }
}

Hooks.on("renderActorSheet", (_app, html) => localizeOutgunnedPlaceholders(html));
Hooks.on("renderItemSheet", (_app, html) => localizeOutgunnedPlaceholders(html));

Hooks.once("ready", () => {
  // Outgunned creates this banner dynamically for the Director.
  localizeDangerRollReminder();
  const observer = new MutationObserver(() => localizeDangerRollReminder());
  observer.observe(document.body, { childList: true, subtree: true });

  // Translate only the three exact warning messages hard-coded by Outgunned.
  // All unrelated Foundry and module notifications pass through unchanged.
  if (ui?.notifications?.warn) {
    const originalWarn = ui.notifications.warn.bind(ui.notifications);
    ui.notifications.warn = (message, ...args) => {
      let translated = message;
      if (message === "You can only create macro buttons for owned Items") {
        translated = game.i18n.localize("OUTGUNNED_IT.WarningOwnedItemMacro");
      } else if (typeof message === "string") {
        let match = message.match(/^Could not find item (.+)\. You may need to delete and recreate this macro\.$/);
        if (match) {
          translated = game.i18n.localize("OUTGUNNED_IT.WarningMissingMacroItem")
            .replace("{itemName}", match[1]);
        } else {
          match = message.match(/^Could not find the actor for skill (.+)\.$/);
          if (match) {
            translated = game.i18n.localize("OUTGUNNED_IT.WarningMissingMacroActor")
              .replace("{itemName}", match[1]);
          }
        }
      }
      return originalWarn(translated, ...args);
    };
  }
});
