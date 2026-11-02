export default function ThemeScript() {
  const script = `
    (function () {
      try {
        const savedTheme = localStorage.getItem("theme");

        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        const theme =
          savedTheme === "light" || savedTheme === "dark"
            ? savedTheme
            : prefersDark
              ? "dark"
              : "light";

        document.documentElement.classList.toggle(
          "dark",
          theme === "dark"
        );

        document.documentElement.dataset.theme = theme;
      } catch (error) {
        console.error("Unable to initialize theme", error);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: script,
      }}
    />
  );
}
