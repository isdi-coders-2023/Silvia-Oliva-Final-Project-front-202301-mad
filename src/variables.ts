export const URL_AMIGURUMIS_USERS = "http://localhost:4500";

const url_render =
  "https://silvia-oliva-final-project-back-202301.onrender.com";

const connection = "local";

export const url_def =
  connection === "local" ? URL_AMIGURUMIS_USERS : url_render;
