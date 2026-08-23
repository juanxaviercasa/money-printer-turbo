/** Design: control compacto del manual VideoForge; el tema es una herramienta de lectura, no un elemento decorativo. */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"} title={theme === "light" ? "Tema oscuro" : "Tema claro"}>
    {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    <span>{theme === "light" ? "Oscuro" : "Claro"}</span>
  </button>;
}

// Usa ThemeProvider switchable para persistir la elección en localStorage.
// Mantener contraste visible y etiqueta textual en desktop y móvil.
// Diseño por Manus AI.
