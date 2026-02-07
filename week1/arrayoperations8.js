const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);

console.log(settings);
